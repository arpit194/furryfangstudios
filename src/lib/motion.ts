import { useEffect, useRef, useState } from 'react'

/** True once the user has asked the OS for reduced motion. Read once on mount
 *  and kept in sync, so effects can bail out entirely rather than just being
 *  shortened. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/** Adds `.in-view` to every `.reveal` under the document once it scrolls into
 *  frame. One observer for the whole page rather than one per component, and
 *  elements are unobserved after firing so nothing re-animates on scroll-back. */
export function useScrollReveals() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!nodes.length) return

    // No IntersectionObserver (or reduced motion): show everything immediately.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      nodes.forEach((n) => n.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

/** Pointer position as -1..1 offsets from the centre of the viewport, damped
 *  toward the target each frame so the parallax trails the cursor instead of
 *  snapping to it. Returns a ref (not state) so consumers can write straight
 *  to style without re-rendering on every mouse move. */
export function usePointerParallax(strength = 1) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    // Touch devices have no hover pointer - skip the listener entirely.
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const el = ref.current
    if (!el) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let frame = 0

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2
      targetY = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      el.style.setProperty('--px', String(currentX * strength))
      el.style.setProperty('--py', String(currentY * strength))
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [reduced, strength])

  return ref
}
