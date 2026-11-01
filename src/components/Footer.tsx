import { LuFacebook, LuInstagram, LuMail, LuMapPin, LuPhone, LuShieldCheck, LuTwitter } from "react-icons/lu";
import { footerLinks } from "../data/navigation";
import { site } from "../data/site";

const socials = [
  { name: "Facebook", url: site.social.facebook, Icon: LuFacebook },
  { name: "Twitter", url: site.social.twitter, Icon: LuTwitter },
  { name: "Instagram", url: site.social.instagram, Icon: LuInstagram },
];

export default function Footer() {
  const { email, phone, location } = site.contact;
  const missingSocial = socials.filter((s) => !s.url).length === socials.length;
  return (
    <footer id="contact" className="bg-ink pt-14 text-white">
      <div className="container-x grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" className="inline-flex min-h-16 items-center" aria-label={`${site.brandName} home`}>
            <img src="/eaddakids-logo.png" alt="" className="h-16 w-16 object-contain" />
          </a>
          <h2 className="sr-only">About Eadda Kids</h2>
          <p className="mt-3 max-w-xs text-white/85">{site.about}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-lg font-semibold text-sun">Explore</h3>
          <ul className="mt-3 space-y-1">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="inline-flex min-h-9 items-center rounded text-white/90 underline-offset-4 hover:text-white hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-semibold text-sun">Contact us</h3>
          <ul className="mt-3 space-y-2 text-white/90">
            <li className="flex items-center gap-2">
              <LuPhone className="size-4 shrink-0" aria-hidden="true" /> <a className="underline underline-offset-4" href={`tel:${phone}`}>{phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <LuMail className="size-4 shrink-0" aria-hidden="true" /> <a className="break-all underline underline-offset-4" href={`mailto:${email}`}>{email}</a>
            </li>
            <li className="flex items-center gap-2">
              <LuMapPin className="size-4 shrink-0" aria-hidden="true" /> {location}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-sun">Follow us</h3>
          <ul className="mt-3 flex gap-3">
            {socials.map(({ name, url, Icon }) => (
              <li key={name}>
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="flex size-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                ) : (
                  <span aria-label={`${name} (link to be added)`} className="flex size-11 items-center justify-center rounded-full bg-white/5 text-white/45">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                )}
              </li>
            ))}
          </ul>
          {missingSocial && <p className="mt-2 text-sm text-white/75">Profile links to be added.</p>}
          <p className="mt-4 flex items-start gap-2 text-sm text-white/80">
            <LuShieldCheck className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" />
            We do not collect personal information from children.
          </p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/80 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brandName}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <a href="#/privacy" className="inline-flex min-h-9 items-center underline-offset-4 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#/terms" className="inline-flex min-h-9 items-center underline-offset-4 hover:underline">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
