import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { FangRule } from '@/components/FangRule'
import { INSTAGRAM_URL, PLAY_STORE_URL } from '@/lib/socials'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-void">
      {/* Studio name stays in the nav on every page, home included - it's
          the wordmark's job everywhere, not just a fallback for inner pages. */}
      <header className="sticky top-0 z-50 border-b border-bone/10 bg-void/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              <path d="M8 0 L16 0 L8 24 L0 0 Z" className="fill-tan" />
            </svg>
            <span className="font-display text-lg tracking-[0.18em] text-bone uppercase transition-colors group-hover:text-tan-hot">
              Furry Fang Studios
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              hash="games"
              className="text-ash transition-colors hover:text-bone"
            >
              Games
            </Link>
            <Link
              to="/"
              hash="studio"
              className="text-ash transition-colors hover:text-bone"
            >
              Studio
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Socials ─────────────────────────────────────────────────────────
          A separate band rather than buried in the footer copy - these are
          calls to action (follow, download), not fine print. */}
      <section id="follow" className="scroll-mt-20 border-t border-bone/10 px-6 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center">
          <p className="font-display text-xs tracking-[0.32em] text-tan uppercase">
            Follow along
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="facet-sm group flex items-center gap-3 border border-bone/20 px-6 py-3.5 transition-colors duration-300 hover:border-tan/60"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-bone-dim transition-colors group-hover:text-tan-hot"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
              <span className="font-display text-sm tracking-[0.14em] text-bone uppercase">
                Instagram
              </span>
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="facet-sm group flex items-center gap-3 border border-bone/20 px-6 py-3.5 transition-colors duration-300 hover:border-tan/60"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-bone-dim transition-colors group-hover:text-tan-hot"
              >
                <path
                  d="M4 3.5 L4 20.5 L14.5 12 Z M14.5 12 L18 9.8 L6.3 3 Z M14.5 12 L18 14.2 L6.3 21 Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span className="font-display text-sm tracking-[0.14em] text-bone uppercase">
                Play Store
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-bone/10 px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <FangRule className="mb-10 opacity-50" />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="font-display text-sm tracking-[0.22em] text-bone/70 uppercase">
              Furry Fang Studios
            </p>
            <div className="flex items-center gap-6 text-sm text-ash">
              <Link to="/privacy" className="transition-colors hover:text-bone">
                Privacy Policies
              </Link>
              <a
                href="mailto:furryfangstudios@gmail.com"
                className="transition-colors hover:text-bone"
              >
                Contact
              </a>
            </div>
            <p className="text-xs text-ash/70">
              © {new Date().getFullYear()} Furry Fang Studios
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
