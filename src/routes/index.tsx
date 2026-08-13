import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', lineHeight: 1.6 }}>
      <main>
        <h1>Furry Fang Studios</h1>
        <p>Games and interactive experiences.</p>
      </main>

      <footer style={{ marginTop: 64, paddingTop: 24, borderTop: '1px solid #ddd' }}>
        <Link to="/privacy">Privacy Policies</Link>
      </footer>
    </div>
  )
}
