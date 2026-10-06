"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="
          h-9
          w-9
          rounded-full
          border
          border-[var(--border)]
        "
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[var(--border)]
        text-[var(--muted)]
        transition
        hover:text-[var(--foreground)]
      "
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}