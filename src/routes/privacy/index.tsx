import { createFileRoute, Link } from '@tanstack/react-router'
import { apps } from '../../data/apps'

export const Route = createFileRoute('/privacy/')({
  component: PrivacyIndex,
})

function PrivacyIndex() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', lineHeight: 1.6 }}>
      <h1>Privacy Policies</h1>
      <p>Select a game to view its privacy policy.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
        {Object.values(apps).map((app) => (
          <Link
            key={app.id}
            to="/privacy/$gameId"
            params={{ gameId: app.id }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: 16,
              border: '1px solid #ddd',
              borderRadius: 12,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            {app.thumbnail && (
              <img
                src={app.thumbnail}
                alt={`${app.name} thumbnail`}
                style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8 }}
              />
            )}
            <div>
              <div style={{ fontWeight: 600 }}>{app.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#666' }}>{app.platform}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
