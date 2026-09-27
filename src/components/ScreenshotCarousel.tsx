import { useCallback, useEffect, useRef, useState } from 'react'
import type { Screenshot } from '@/data/assetPacks'

/** Horizontal screenshot carousel built on native scroll-snap, so swipe,
 *  trackpad and keyboard scrolling all work without a gesture library. The
 *  arrows and dots just drive scrollLeft; the current index is read back from
 *  the scroll position rather than tracked separately, so it can't drift out
 *  of sync with what's on screen. */
export function ScreenshotCarousel({
  shots,
  label,
}: {
  shots: Screenshot[]
  label: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setIndex(Math.round(track.scrollLeft / track.clientWidth))
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current
      if (!track) return
      const next = (i + shots.length) % shots.length
      // Set eagerly so rapid clicks step from the target, not from wherever
      // the smooth scroll happens to be mid-flight.
      setIndex(next)
      track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
    },
    [shots.length],
  )

  const arrow =
    'facet-sm absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-void/70 text-bone backdrop-blur-sm transition-colors duration-300 hover:bg-bone hover:text-void'

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          goTo(index - 1)
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          goTo(index + 1)
        }
      }}
    >
      <div className="facet relative overflow-hidden border border-bone/12 bg-pelt">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {shots.map((shot, i) => (
            <figure
              key={shot.src}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${shots.length}`}
              className="aspect-video w-full shrink-0 snap-center bg-[#4b4e6c]"
            >
              {/* Contain, not cover: the renders carry their set title in the
                  top-left corner, and the 3:2 cover art would lose its
                  wordmark if cropped to 16:9. */}
              <img
                src={shot.src}
                alt={shot.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                className="h-full w-full object-contain select-none"
              />
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => goTo(index - 1)}
          className={`${arrow} left-3`}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => goTo(index + 1)}
          className={`${arrow} right-3`}
        >
          <span aria-hidden="true">→</span>
        </button>

        <span className="pointer-events-none absolute right-3 bottom-3 bg-void/70 px-2.5 py-1 font-display text-xs tracking-[0.18em] text-bone-dim tabular-nums backdrop-blur-sm">
          {String(index + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            aria-label={`Show screenshot ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className="group py-2"
          >
            {/* Thin visible bar inside a taller hit area. */}
            <span
              className={`block h-1.5 transition-all duration-300 ${
                i === index
                  ? 'w-8 bg-tan'
                  : 'w-4 bg-bone/20 group-hover:bg-bone/45'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
