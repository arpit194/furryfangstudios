/** Section divider built from faceted shards rather than a straight rule.
 *  The silhouette echoes the low-poly fangs in the logo, so the page's
 *  structural furniture is made of the same geometry as the mark. Purely
 *  decorative - hidden from assistive tech. */
export function FangRule({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex w-full items-center gap-3 ${className}`}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-bone/25" />
      <svg
        width="76"
        height="14"
        viewBox="0 0 76 14"
        fill="none"
        className="shrink-0"
      >
        {/* Three descending shards: centre tallest, mirroring a fang cluster. */}
        <path d="M20 0 L26 0 L23 13 Z" className="fill-bone/35" />
        <path d="M34 0 L42 0 L38 14 Z" className="fill-tan/70" />
        <path d="M50 0 L56 0 L53 13 Z" className="fill-bone/35" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-bone/25" />
    </div>
  )
}
