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
}

/** The shelf on the home page. Order here is deliberate, not alphabetical or
 *  by release date - Tiny Trials leads as the current flagship even though
 *  it's still unreleased, then the two live games follow. */
export const games: GameInfo[] = [
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
