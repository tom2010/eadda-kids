/**
 * Builds a self-contained preview (dist-preview/index.html) WITHOUT Vite:
 * esbuild bundles the app and Tailwind v4's compile() API generates the CSS.
 * Normal development and production builds still use `npm run dev` / `npm run build` (Vite).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(join(root, "package.json"));
const esbuild = await import(pathToFileURL(require.resolve("esbuild")).href);
const tailwindDir = dirname(require.resolve("tailwindcss/package.json"));
const { compile } = await import(pathToFileURL(join(tailwindDir, "dist/lib.mjs")).href);

// 1. Collect class-name candidates from the source files.
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const files = [...walk(join(root, "src")).filter((f) => /\.(tsx?|css)$/.test(f)), join(root, "index.html")];
const candidates = new Set();
for (const f of files) {
  for (const token of readFileSync(f, "utf8").match(/[^\s"'`{}<>;]+/g) ?? []) candidates.add(token);
}

// 2. Generate Tailwind CSS.
const cssSource = readFileSync(join(root, "src/index.css"), "utf8");
const compiler = await compile(cssSource, {
  base: join(root, "src"),
  async loadStylesheet(id, base) {
    const path = id.startsWith(".") ? resolve(base, id) : id === "tailwindcss" ? join(tailwindDir, "index.css") : join(tailwindDir, "..", id.endsWith(".css") ? id : `${id}.css`);
    return { path, base: dirname(path), content: readFileSync(path, "utf8") };
  },
});
const css = compiler.build([...candidates]);

// 3. Bundle the app.
const result = await esbuild.build({
  entryPoints: [join(root, "src/main.tsx")],
  bundle: true,
  minify: true,
  format: "esm",
  write: false,
  jsx: "automatic",
  target: "es2020",
  loader: { ".css": "empty", ".svg": "dataurl", ".png": "dataurl", ".jpg": "dataurl", ".webp": "dataurl" },
  define: { "process.env.NODE_ENV": '"production"', "import.meta.env.VITE_NEWSLETTER_ENDPOINT": '""' },
  logLevel: "warning",
});
const js = result.outputFiles[0].text.replace(/<\/script/g, "<\\/script");

// 4. Inline everything into one HTML file.
let html = readFileSync(join(root, "index.html"), "utf8");
html = html.replace(/<script type="module" src="\/src\/main\.tsx"><\/script>/, "");
html = html.replace("</head>", () => `<style>${css}</style>\n</head>`);
html = html.replace("</body>", () => `<script type="module">${js}</script>\n</body>`);

mkdirSync(join(root, "dist-preview"), { recursive: true });
writeFileSync(join(root, "dist-preview/index.html"), html);
console.log(`Preview built: ${(html.length / 1024).toFixed(0)} KB (css ${(css.length / 1024).toFixed(0)} KB, js ${(js.length / 1024).toFixed(0)} KB)`);
