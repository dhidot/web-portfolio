export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
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