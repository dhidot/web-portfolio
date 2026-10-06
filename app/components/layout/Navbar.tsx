import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide"
        >
          CN.
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>

          <a href="#beyond-code" className="transition hover:text-white">
            Beyond Code
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}