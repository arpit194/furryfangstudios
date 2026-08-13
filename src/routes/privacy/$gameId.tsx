import { createFileRoute, notFound } from '@tanstack/react-router'
import { getApp } from '../../data/apps'
import { MarkdownPolicyPage } from '../../MarkdownPolicyPage'

export const Route = createFileRoute('/privacy/$gameId')({
  loader: ({ params }) => {
    const app = getApp(params.gameId)
    if (!app) throw notFound()
    return app
  },
  component: PrivacyPage,
  notFoundComponent: () => (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px' }}>
      <h1>App not found</h1>
      <p>No privacy policy is registered for this app yet.</p>
    </main>
  ),
})

function PrivacyPage() {
  const app = Route.useLoaderData()
  return (
    <MarkdownPolicyPage
      title={app.name}
      updated={app.policyUpdated}
      glance={app.policyGlance}
      markdown={app.policyMarkdown}
    />
  )
}
