import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import heroLoop from '@/assets/hero-loop.webm'
import { games } from '@/data/games'
import { FangRule } from '@/components/FangRule'
import { useScrollReveals, usePointerParallax } from '@/lib/motion'

export const Route = createFileRoute('/')({
  component: Home,
})

/** What the studio actually does, stated plainly - true across the whole
 *  catalog (a party game, a tic-tac-toe twist, a bowling game), not tailored
 *  to any single title's mechanics. */
const PRINCIPLES = [
  {
    n: '01',
    title: 'Built end to end',
    body: 'A small team handling code, art, and sound ourselves, on every game we ship.',
  },
  {
    n: '02',
    title: 'Rules you can skim',
    body: 'A quick look before you play, never a manual. If it takes longer to explain than to try, it gets simpler.',
  },
  {
    n: '03',
    title: 'Made to pick up and put down',
    body: 'Games you can drop into for a few minutes or stay in for longer, without losing your place either way.',
  },
]

function Home() {
  useScrollReveals()
  const parallaxRef = usePointerParallax(1)

  // The hero clip is fetched only after the page has already painted, so a
  // 1.4MB video never competes with critical resources for bandwidth or
  // blocks first paint. preload="none" keeps the browser from touching the
  // network until this flips the src in - the source element is absent
  // entirely until then.
  const [heroReady, setHeroReady] = useState(false)
  useEffect(() => {
    const id = requestIdleCallback?.(() => setHeroReady(true)) ??
      window.setTimeout(() => setHeroReady(true), 200)
    return () => {
      if (typeof id === 'number') window.clearTimeout(id)
      else cancelIdleCallback?.(id)
    }
  }, [])

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────
          The logo IS the thesis: it's the strongest piece of art the studio
          has, and it states the identity better than any headline could. So
          it gets the stage, with the copy playing support underneath. */}
      <section
        ref={parallaxRef}
        className="relative flex min-h-[92svh] items-center overflow-hidden px-6"
      >
        {/* Ambient warm bloom, drifting slowly and tracking the pointer. */}
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute inset-0"
          style={{
            transform:
              'translate3d(calc(var(--px, 0) * 18px), calc(var(--py, 0) * 18px), 0)',
            background:
              'radial-gradient(60% 50% at 50% 42%, rgba(200,155,106,0.16), transparent 70%)',
          }}
        />

        {/* Faint grid, skewed so it reads as a facet plane rather than a
            generic tech grid. Anchors the logo in space. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            transform:
              'perspective(700px) rotateX(56deg) translate3d(calc(var(--px, 0) * -10px), 0, 0)',
            transformOrigin: '50% 100%',
            backgroundImage:
              'linear-gradient(rgba(239,231,210,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(239,231,210,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'linear-gradient(to top, rgba(0,0,0,0.9), transparent 62%)',
            WebkitMaskImage:
              'linear-gradient(to top, rgba(0,0,0,0.9), transparent 62%)',
          }}
        />

        <div className="relative mx-auto w-full max-w-5xl py-24 text-center">
          {/* Real accessible name for the hero, independent of whether the
              video has loaded yet - visually hidden since the clip (or its
              placeholder) carries the visual weight. */}
          <h1 className="sr-only">Furry Fang Studios</h1>

          {/* The wordmark animating in once on load, standing in for a static
              logo image - not a loop, it plays through and holds on its last
              frame. autoPlay+muted+playsInline is what makes autoplay
              actually work across browsers (mobile Safari in particular
              blocks any autoplaying video that isn't muted). The blocker div
              on top swallows taps/clicks so nothing about it is interactive -
              it reads purely as branding, not a control.

              Two separate boxes on purpose: FRAME is the fixed footprint on
              the page (this is the actual "logo size" to tune), and the
              video inside it is scaled up past 100% and clipped by the
              frame's overflow-hidden. The source clip is a 16:9 frame with a
              lot of black padding around the actual wordmark, so zooming in
              like this crops that dead space away instead of just stretching
              a small logo across a bigger box. Bump FRAME_SIZE / VIDEO_SCALE
              below until it looks right. */}
          <div
            aria-hidden="true"
            className="relative mx-auto max-h-[58svh] w-full max-w-[min(96vw,1400px)] overflow-hidden drop-shadow-[0_0_60px_rgba(200,155,106,0.18)]"
            style={{
              aspectRatio: '16 / 9',
              transform:
                'translate3d(calc(var(--px, 0) * -12px), calc(var(--py, 0) * -8px), 0)',
            }}
          >
            {heroReady ? (
              <video
                src={heroLoop}
                autoPlay
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.6] object-cover select-none"
              />
            ) : (
              // Reserves the same footprint so nothing shifts once the clip
              // mounts in.
              <div className="absolute inset-0" />
            )}
            <div aria-hidden="true" className="absolute inset-0 z-10" />
          </div>

          {/* No .reveal here - this is above-the-fold hero content, always
              visible on load, not something that should wait for a scroll
              trigger that may never fire this high up the page. */}
          <div className="mx-auto mt-2 max-w-xl">
            <p className="text-balance text-lg leading-relaxed text-bone-dim sm:text-xl">
              A small game studio making
              <span className="text-bone"> small, sharp mobile games</span>{' '}
              you can actually finish playing.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#games"
                className="facet-sm bg-bone px-8 py-3.5 font-display text-sm tracking-[0.18em] text-void uppercase transition-transform duration-300 ease-fang hover:-translate-y-0.5 hover:bg-tan-hot"
              >
                See the games
              </a>
              <a
                href="#follow"
                className="facet-sm border border-bone/25 px-8 py-3.5 font-display text-sm tracking-[0.18em] text-bone-dim uppercase transition-colors duration-300 hover:border-bone/60 hover:text-bone"
              >
                Follow along
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue, doubling as the first appearance of the fang shard. */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <path d="M7 0 L14 0 L7 22 L0 0 Z" className="fill-bone/25" />
          </svg>
        </div>
      </section>

      {/* ── Games ─────────────────────────────────────────────────────────── */}
      <section id="games" className="scroll-mt-20 px-6 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <header className="reveal mb-14">
            <p className="mb-3 font-display text-xs tracking-[0.32em] text-tan uppercase">
              Currently
            </p>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-bone uppercase sm:text-6xl">
              The games
            </h2>
          </header>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => {
              const isUpcoming = game.status === 'upcoming'
              const Card = (
                <article
                  className={`group facet relative flex h-full flex-col border border-bone/12 bg-pelt p-6 transition-colors duration-500 sm:p-8 ${
                    isUpcoming ? '' : 'hover:border-tan/45'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <img
                      src={game.icon}
                      alt=""
                      width={96}
                      height={96}
                      loading="lazy"
                      className={`facet-sm h-20 w-20 shrink-0 object-cover sm:h-24 sm:w-24 ${
                        isUpcoming
                          ? ''
                          : 'transition-transform duration-500 ease-fang group-hover:scale-105'
                      }`}
                    />
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl tracking-tight text-bone uppercase sm:text-3xl">
                        {game.name}
                      </h3>
                      <p className="mt-1 font-display text-[0.7rem] tracking-[0.22em] text-tan uppercase">
                        {isUpcoming ? 'Upcoming' : game.platform}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 flex-1 leading-relaxed text-bone-dim">
                    {game.tagline}
                  </p>

                  {!isUpcoming && (
                    <span
                      aria-hidden="true"
                      className="mt-6 inline-flex items-center gap-2 text-sm text-ash transition-colors group-hover:text-bone"
                    >
                      Get it on Google Play
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  )}
                </article>
              )

              return (
                <li key={game.id} className="reveal">
                  {isUpcoming || !game.storeUrl ? (
                    Card
                  ) : (
                    <a
                      href={game.storeUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block h-full"
                    >
                      {Card}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <FangRule className="mx-auto max-w-6xl px-6" />

      {/* ── Studio ────────────────────────────────────────────────────────── */}
      <section id="studio" className="scroll-mt-20 px-6 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <header className="reveal">
              <p className="mb-3 font-display text-xs tracking-[0.32em] text-tan uppercase">
                The studio
              </p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight text-bone uppercase sm:text-5xl">
                How this
                <br />
                works
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-bone-dim">
                Furry Fang Studios is a small team building mobile
                games end to end — code, art, sound, and the awkward business
                parts in between.
              </p>
            </header>

            {/* Numbered because these are genuinely ordered principles that
                build on each other, not decorative eyebrows. */}
            <ul className="space-y-px">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.n}
                  className="reveal group grid gap-4 border-t border-bone/12 py-8 transition-colors duration-500 hover:border-tan/40 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-display text-sm tracking-[0.2em] text-tan/70 tabular-nums transition-colors duration-500 group-hover:text-tan-hot">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-bone uppercase sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-lg leading-relaxed text-bone-dim">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
