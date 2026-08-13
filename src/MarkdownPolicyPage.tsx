import ReactMarkdown from 'react-markdown'
import { Link } from '@tanstack/react-router'
import './privacy-policy.css'

interface GlanceItem {
  label: string
  detail: string
}

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
    <div className="policy-page">
      <div className="policy-shell">
        <div className="policy-eyebrow">Privacy Policy</div>
        <h1 className="policy-title">{title}</h1>
        <p className="policy-updated">Last updated: {updated}</p>

        <div className="policy-glance">
          <h2>At a glance</h2>
          <ul>
            {glance.map((item) => (
              <li key={item.label}>
                <span className="mark">•</span>
                <span>
                  <strong>{item.label}.</strong> {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="policy-body">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>

        <Link to="/privacy" className="policy-back">
          ← All privacy policies
        </Link>
      </div>
    </div>
  )
}
