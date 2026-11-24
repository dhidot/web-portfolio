import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import BeyondCode from "./components/sections/BeyondCode";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen bg-[var(--background)] pt-[var(--navbar-height)] text-[var(--foreground)]"
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
