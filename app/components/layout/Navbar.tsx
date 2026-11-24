"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond-code", label: "Beyond Code" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const homeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) {
        if (
          menuPanelRef.current?.contains(document.activeElement) ||
          document.activeElement === menuButtonRef.current
        ) {
          homeLinkRef.current?.focus();
        }
        setIsOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 64rem)");
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleBreakpointChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, [isOpen]);

  return (
    <header className="site-navbar fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] text-[var(--foreground)]">
      <nav aria-label="Primary navigation" className="mx-auto max-w-7xl px-6">
        <div className="flex h-[var(--navbar-height)] items-center justify-between gap-4">
          <a
            ref={homeLinkRef}
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex min-h-11 min-w-11 items-center rounded-sm text-sm font-semibold tracking-wide"
          >
            CN.
          </a>

          <ul className="hidden items-center gap-6 text-sm text-[var(--text-secondary)] lg:flex xl:gap-8">
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex min-h-11 items-center rounded-sm px-1 transition-colors hover:text-[var(--foreground)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)] lg:hidden"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          ref={menuPanelRef}
          id="mobile-navigation"
          hidden={!isOpen}
          className="max-h-[calc(100dvh-var(--navbar-height)-1px)] overflow-y-auto border-t border-[var(--border)] py-3 lg:hidden"
        >
          <ul className="grid gap-1 text-sm text-[var(--text-secondary)]">
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-4 py-3 transition-colors hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
