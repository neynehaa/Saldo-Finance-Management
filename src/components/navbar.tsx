import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-6 lg:px-8">
        <div className="justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-[-0.03em] text-[var(--text)]"
          >
            Saldo
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Link
            href="#product"
            className="text-sm font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--text)]"
          >
            Product
          </Link>

          <Link
            href="#pricing"
            className="text-sm font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--text)]"
          >
            Pricing
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium text-[var(--muted)] transition-colors duration-150 hover:text-[var(--text)]"
          >
            About
          </Link>
        </div>
        <div className="justify-self-end">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
