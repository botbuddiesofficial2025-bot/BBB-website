import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Wings from "./components/Wings.jsx";
import Benefits from "./components/Benefits.jsx";
import TeamSection from "./components/TeamSection.jsx";
import HardwareLibrary from "./components/HardwareLibrary.jsx";
import Membership from "./components/Membership.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Events from "./components/Events.jsx";
import Projects from "./components/Projects.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-bbb-green focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Wings />
        <Benefits />
        
        <HardwareLibrary />
        <Membership />
        <HowItWorks />
        <Events />
        <Projects />
        <TeamSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
