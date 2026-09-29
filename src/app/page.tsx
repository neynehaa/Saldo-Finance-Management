import Link from "next/link";
import Navbar from "../components/navbar";
import { Button } from "../components/ui/Button";
import DashboardPreview from "../components/DashboardPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <div className="px-6 pb-10 pt-10 sm:pb-24 sm:pt-28 lg:pt-20">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Your money, made clearer.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Track spending, build better habits, and understand where your money
            goes.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="colored" size="lg">
              Get Started
            </Button>

            <Link
              href="/dashboard"
              className="w-full rounded-lg border border-[var(--border)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors duration-150 hover:border-green-200 sm:w-auto"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <DashboardPreview />
        </div>
      </div>

      <footer />
    </div>
  );
}
