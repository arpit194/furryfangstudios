import tinytrialsThumb from '../assets/tinytrials-thumb.png'
import tinytrialsPolicyMd from '../privacy-policies/tinytrials.md?raw'
import infiniteTicTacToeThumb from '../assets/infinitetictactoe-icon.webp'
import infiniteTicTacToePolicyMd from '../privacy-policies/infinitetictactoe.md?raw'
import polyArtBowlingThumb from '../assets/polyartbowling-icon.webp'
import polyArtBowlingPolicyMd from '../privacy-policies/polyartbowling.md?raw'

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
  infinitetictactoe: {
    id: 'infinitetictactoe',
    name: 'Infinite Tic Tac Toe',
    platform: 'Android',
    thumbnail: infiniteTicTacToeThumb,
    policyUpdated: 'August 14, 2026',
    policyGlance: [
      { label: 'Approximate location', detail: 'Derived from IP address (not GPS), used for in-app features and anonymized usage trends.' },
      { label: 'Ads via Google AdMob', detail: 'Standard ad-serving data — advertising ID, device info, approximate location.' },
      { label: 'Built with Unity', detail: 'The engine the app runs on, alongside any of its own enabled services.' },
    ],
    policyMarkdown: infiniteTicTacToePolicyMd,
  },
  polyartbowling: {
    id: 'polyartbowling',
    name: 'PolyArt Bowling',
    platform: 'Android',
    thumbnail: polyArtBowlingThumb,
    policyUpdated: 'August 14, 2026',
    policyGlance: [
      { label: 'Approximate location', detail: 'Derived from IP address (not GPS), used for in-app features and anonymized usage trends.' },
      { label: 'Ads via Google AdMob', detail: 'Standard ad-serving data — advertising ID, device info, approximate location.' },
      { label: 'Built with Unity', detail: 'The engine the app runs on, alongside any of its own enabled services.' },
    ],
    policyMarkdown: polyArtBowlingPolicyMd,
  },
}

export function getApp(id: string | undefined): AppInfo | undefined {
  if (!id) return undefined
  return apps[id]
}
