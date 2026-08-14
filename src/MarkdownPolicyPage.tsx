import ReactMarkdown from 'react-markdown'
import { Link } from '@tanstack/react-router'
import { FangRule } from '@/components/FangRule'

interface GlanceItem {
  label: string
  detail: string
}

/** Policy pages get the same identity as the rest of the site, but dialled
 *  down: this is a document people read, so the display face is reserved for
 *  headings and the body stays plain and generously spaced. */
export function MarkdownPolicyPage({
  title,
  updated,
  glance,
  markdown,
}: {
  title: string
  updated: string
  glance: GlanceItem[]
  markdown: string
}) {
  return (
    <div className="px-6 py-20 sm:py-28">
      <article className="mx-auto w-full max-w-2xl">
        <header>
          <p className="mb-3 font-display text-xs tracking-[0.32em] text-tan uppercase">
            Privacy Policy
          </p>
          <h1 className="font-display text-4xl leading-[0.95] tracking-tight text-bone uppercase sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ash">Last updated: {updated}</p>
        </header>

        {/* Plain-language summary first - most people only read this part,
            so it earns the prominent treatment over the formal text. */}
        <section className="facet mt-10 border border-bone/12 bg-pelt p-6 sm:p-7">
          <h2 className="font-display text-sm tracking-[0.22em] text-bone uppercase">
            At a glance
          </h2>
          <ul className="mt-5 space-y-4">
            {glance.map((item) => (
              <li key={item.label} className="flex gap-3.5">
                <svg
                  aria-hidden="true"
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  fill="none"
                  className="mt-1.5 shrink-0"
                >
                  <path d="M4.5 0 L9 0 L4.5 14 L0 0 Z" className="fill-tan" />
                </svg>
                <p className="leading-relaxed text-bone-dim">
                  <strong className="font-semibold text-bone">
                    {item.label}.
                  </strong>{' '}
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Formal policy text. Sized for sustained reading rather than
            scanning, with headings that stay in the display face so the
            document still reads as part of the site. */}
        <div
          className="mt-14 leading-[1.75] text-bone-dim
            [&_a]:text-tan [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-tan-hot
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:text-bone [&_h2]:uppercase
            [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-base [&_h3]:tracking-[0.12em] [&_h3]:text-bone [&_h3]:uppercase
            [&_li]:mb-2
            [&_p]:mb-5
            [&_strong]:font-semibold [&_strong]:text-bone
            [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:marker:text-tan/60"
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>

        <FangRule className="my-12 opacity-50" />

        <Link
          to="/privacy"
          className="group inline-flex items-center gap-2 text-sm text-ash transition-colors hover:text-bone"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            ←
          </span>
          All privacy policies
        </Link>
      </article>
    </div>
  )
}
