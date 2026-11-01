import { useHashRoute } from "./lib/useHashRoute";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreeS from "./components/ThreeS";
import Events from "./components/Events";
import SavingsGoal from "./components/SavingsGoal";
import FeaturedBooks from "./components/FeaturedBooks";
import BlogSection from "./components/BlogSection";
import AboutAuthor from "./components/AboutAuthor";
import Newsletter from "./components/Newsletter";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Pages from "./components/Pages";

export default function App() {
  const route = useHashRoute();

  return (
    <>
      <Navbar />
      <main id="main">
        {route.name === "home" ? (
          <>
            <Hero />
            <ThreeS />
            <Events />
            <SavingsGoal />
            <FeaturedBooks />
            <BlogSection />
            <AboutAuthor />
            <Newsletter />
            <CallToAction />
          </>
        ) : (
          <Pages route={route} />
        )}
      </main>
      <Footer />
    </>
  );
}
