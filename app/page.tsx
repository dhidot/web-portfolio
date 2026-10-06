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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}