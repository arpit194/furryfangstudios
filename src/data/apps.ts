import tinytrialsThumb from '../assets/tinytrials-thumb.png'
import tinytrialsPolicyMd from '../privacy-policies/tinytrials.md?raw'

export interface AppInfo {
  id: string
  name: string
  platform: 'Android' | 'iOS' | 'Android & iOS'
  thumbnail?: string
  policyUpdated: string
  /** Short, plain-language answers shown above the full policy text. */
  policyGlance: { label: string; detail: string }[]
  /** Each game's policy is its own .md file - edit the content there without
   * touching any component code. Different games can have genuinely
   * different data practices (accounts, ad networks, backend services), so
   * this is never a shared/templated document. */
  policyMarkdown: string
}

export const apps: Record<string, AppInfo> = {
  tinytrials: {
    id: 'tinytrials',
    name: 'Tiny Trials',
    platform: 'Android',
    thumbnail: tinytrialsThumb,
    policyUpdated: 'August 13, 2026',
    policyGlance: [
      { label: 'No accounts', detail: "You don't sign up or log in — nothing to link to your identity." },
      { label: 'No servers', detail: 'Names and settings you enter stay on your device only.' },
      { label: 'Ads via Google AdMob', detail: 'The only outside data collection is standard ad-serving data.' },
    ],
    policyMarkdown: tinytrialsPolicyMd,
  },
}

export function getApp(id: string | undefined): AppInfo | undefined {
  if (!id) return undefined
  return apps[id]
}
