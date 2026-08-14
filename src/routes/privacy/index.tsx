import { createFileRoute, Link } from '@tanstack/react-router'
import { apps } from '@/data/apps'
import { useScrollReveals } from '@/lib/motion'

export const Route = createFileRoute('/privacy/')({
  component: PrivacyIndex,
})

function PrivacyIndex() {
  useScrollReveals()

  return (
    <div className="px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl">
        <header className="reveal">
          <p className="mb-3 font-display text-xs tracking-[0.32em] text-tan uppercase">
            Legal
          </p>
          <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-bone uppercase sm:text-6xl">
            Privacy policies
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-bone-dim">
            Each game gets its own policy — different games collect different
            things, so none of these are copies of each other.
          </p>
        </header>

        <ul className="mt-12 space-y-4">
          {Object.values(apps).map((app) => (
            <li key={app.id} className="reveal">
              <Link
                to="/privacy/$gameId"
                params={{ gameId: app.id }}
                className="group facet flex items-center gap-5 border border-bone/12 bg-pelt p-5 transition-colors duration-500 hover:border-tan/45"
              >
                {app.thumbnail && (
                  <img
                    src={app.thumbnail}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                    className="facet-sm h-16 w-16 shrink-0 object-cover"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl tracking-tight text-bone uppercase">
                    {app.name}
                  </h2>
                  <p className="mt-0.5 font-display text-[0.7rem] tracking-[0.22em] text-tan uppercase">
                    {app.platform}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-ash transition-all duration-300 group-hover:translate-x-1 group-hover:text-bone"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
