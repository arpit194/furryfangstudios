import cityShot from '@/assets/asset-packs/lowpolyworldbuilder/city.webp'
import coverShot from '@/assets/asset-packs/lowpolyworldbuilder/cover.webp'
import housesShot from '@/assets/asset-packs/lowpolyworldbuilder/houses.webp'
import buildingsShot from '@/assets/asset-packs/lowpolyworldbuilder/buildings.webp'
import roadsShot from '@/assets/asset-packs/lowpolyworldbuilder/roads.webp'
import flyoversShot from '@/assets/asset-packs/lowpolyworldbuilder/flyovers.webp'
import vehiclesShot from '@/assets/asset-packs/lowpolyworldbuilder/vehicles.webp'
import parksShot from '@/assets/asset-packs/lowpolyworldbuilder/parks.webp'
import marketShot from '@/assets/asset-packs/lowpolyworldbuilder/market.webp'
import treesShot from '@/assets/asset-packs/lowpolyworldbuilder/trees.webp'
import fontShot from '@/assets/asset-packs/lowpolyworldbuilder/font.webp'

export interface Screenshot {
  src: string
  alt: string
}

export interface AssetPackInfo {
  id: string
  name: string
  subtitle: string
  engine: string
  description: string
  /** Short headline numbers shown as a stat row under the description. */
  stats: { value: string; label: string }[]
  highlights: string[]
  /** Screenshots are 1280px-wide WebP exports of the Blender renders - the
   *  originals live with the pack, not in this repo. */
  screenshots: Screenshot[]
  status: 'upcoming' | 'released'
  /** Asset Store listing - only linked once status is 'released'. */
  storeUrl?: string
}

export const assetPacks: AssetPackInfo[] = [
  {
    id: 'lowpolyworldbuilder',
    name: 'Low Poly World Builder',
    subtitle: 'Cities, Suburbs & Nature',
    engine: 'Unity · URP',
    description:
      'A modular kit for low-poly cities, suburbs and countryside. Roads snap together on one grid, buildings and houses are assembled from wall, roof and porch panels, and 48 ready-made prefabs let you start right away.',
    stats: [
      { value: '1,258', label: 'Models' },
      { value: '23', label: 'Demo scenes' },
      { value: '1', label: 'Material' },
    ],
    highlights: [
      'Roads, flyovers and country tracks',
      'NYC-style buildings and suburban houses from panels',
      '39 trees, plants, rocks and park sets',
      '28 vehicles with separate wheels',
      '3D pixel font with an in-editor text tool',
      'One 512 × 512 palette texture - mobile-ready',
    ],
    screenshots: [
      { src: cityShot, alt: 'A whole low-poly town built with the pack: downtown blocks, suburbs and fields' },
      { src: coverShot, alt: 'Low Poly World Builder cover: buildings, houses, trees and vehicles' },
      { src: housesShot, alt: 'Suburban houses and their clapboard wall panels' },
      { src: buildingsShot, alt: 'NYC-style building wall panels in five materials' },
      { src: roadsShot, alt: 'Modular road tiles: straights, curves, junctions and crossings' },
      { src: flyoversShot, alt: 'Elevated flyover decks, ramps and piers' },
      { src: vehiclesShot, alt: 'Cars, vans, trucks, buses and emergency vehicles' },
      { src: parksShot, alt: 'Park sets and playground tiles' },
      { src: marketShot, alt: 'Market stalls, food carts and café furniture' },
      { src: treesShot, alt: 'Low-poly trees in several species and colours' },
      { src: fontShot, alt: 'The 3D pixel font in three resolutions' },
    ],
    status: 'upcoming',
    storeUrl:
      'https://assetstore.unity.com/packages/3d/environments/urban/low-poly-world-builder-cities-suburbs-nature-411006',
  },
]
