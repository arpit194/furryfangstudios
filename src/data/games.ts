import type { Screenshot } from './assetPacks'
import zeroBrakeIcon from '@/assets/zerobrake-icon.webp'
import zbCloseCall from '@/assets/games/zerobrake/01-close-call.webp'
import zbRidgeRoad from '@/assets/games/zerobrake/02-ridge-road.webp'
import zbForest from '@/assets/games/zerobrake/03-forest.webp'
import zbNightCity from '@/assets/games/zerobrake/04-night-city.webp'
import zbRushHour from '@/assets/games/zerobrake/05-rush-hour.webp'
import zbSuburbs from '@/assets/games/zerobrake/06-suburbs.webp'
import zbDocksideNight from '@/assets/games/zerobrake/07-dockside-night.webp'
import zbGaragePaint from '@/assets/games/zerobrake/08-garage-paint.webp'
import tinytrialsIcon from '@/assets/tinytrials-thumb.png'
import infiniteTicTacToeIcon from '@/assets/infinitetictactoe-icon.webp'
import polyArtBowlingIcon from '@/assets/polyartbowling-icon.webp'

export interface GameInfo {
  id: string
  name: string
  tagline: string
  platform: 'Android' | 'iOS' | 'Android & iOS'
  icon: string
  status: 'upcoming' | 'released'
  /** Play Store listing - omitted for games not live yet. */
  storeUrl?: string
  /** Shown as the wide spotlight at the top of the games section (screenshot
   *  carousel + details) instead of a shelf card. Needs screenshots. */
  featured?: boolean
  subtitle?: string
  description?: string
  /** Short headline numbers shown as a stat row under the description. */
  stats?: { value: string; label: string }[]
  highlights?: string[]
  /** 1280px-wide WebP exports of the store screenshots. */
  screenshots?: Screenshot[]
}

/** The games on the home page. Order here is deliberate, not alphabetical or
 *  by release date: Zero Brake is featured (the spotlight above the shelf) as
 *  the newest release, then Tiny Trials leads the shelf as the current flagship,
 *  then the two older live games follow. */
export const games: GameInfo[] = [
  {
    id: 'zerobrake',
    name: 'Zero Brake',
    tagline:
      'Weave through rush-hour traffic at full speed. Close calls build your combo - one touch of another car ends the run.',
    platform: 'Android',
    icon: zeroBrakeIcon,
    status: 'released',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.furryfangstudios.zerobrake',
    featured: true,
    subtitle: 'No hesitation. No brakes.',
    description:
      'A high-speed highway cut-up through a low-poly city. Thread the gaps between cars in two-minute runs: every overtake, near miss and close call feeds your combo, and one crash ends the run. Spend what you earn in the garage on paint, liveries, underglow and performance upgrades.',
    stats: [
      { value: '2:00', label: 'Timed runs' },
      { value: '7', label: 'Districts' },
      { value: '8', label: 'Liveries' },
    ],
    highlights: [
      'Tilt steering, touch buttons or a gamepad',
      'Overtakes, near misses and close calls chain into a combo',
      'Garage: every colour, eight liveries, underglow and four upgrades',
      'Three new daily challenges every day',
      'Day and night, fog, and seven radio stations',
      'Plays fully offline',
    ],
    screenshots: [
      { src: zbCloseCall, alt: 'Threading a close call between two cars on the elevated expressway' },
      { src: zbRidgeRoad, alt: 'Ridge Road curving along the hillside above the forest' },
      { src: zbForest, alt: 'Pine Forest Road winding through the trees' },
      { src: zbNightCity, alt: 'A night run downtown with neon underglow' },
      { src: zbRushHour, alt: 'Rush-hour traffic on the four-lane South Highway' },
      { src: zbSuburbs, alt: 'Cruising through Maple Suburbs' },
      { src: zbDocksideNight, alt: 'Dockside Industrial at night with orange underglow' },
      { src: zbGaragePaint, alt: 'Garage paint shop: liveries and every colour of the car' },
    ],
  },
  {
    id: 'tinytrials',
    name: 'Tiny Trials',
    tagline:
      'Pass-and-play party games for two to six players. Quick rounds, simple rules, one phone.',
    platform: 'Android',
    icon: tinytrialsIcon,
    status: 'released',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.furryfangstudios.tinytrials',
  },
  {
    id: 'infinitetictactoe',
    name: 'Infinite Tic Tac Toe',
    tagline:
      'The classic game with a twist - only three marks stay on the board, so the oldest one vanishes the moment a fourth goes down.',
    platform: 'Android',
    icon: infiniteTicTacToeIcon,
    status: 'released',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.TwoDudesStudios.InfiniteTicTacToe',
  },
  {
    id: 'polyartbowling',
    name: 'PolyArt Bowling',
    tagline:
      'Knock down block towers to reveal low-poly art, one frame at a time.',
    platform: 'Android',
    icon: polyArtBowlingIcon,
    status: 'released',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.TwoDudesStudio.PolyArtBowling',
  },
]
