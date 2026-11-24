export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Chandra Nindhito
        </p>

        <p>
          Built with Next.js & TypeScript
        </p>
      </div>
    </footer>
  );
}
