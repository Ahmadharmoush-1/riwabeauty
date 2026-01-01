import { Product } from '@/context/CartContext';

export const products: Product[] = [
  // Cosmetics
  {
    id: 'cos-1',
    name: 'NAD+ PEPTIDE BOOSTING SERUM',
    price: 23,
    images: [
      '/photos/NADPEPTIDEBOOSTINGSERUM.png',
      '/photos/NADPEPTIDEBOOSTINGSERUM-1.png',
      '/photos/NADPEPTIDEBOOSTINGSERUM-2.png',
      '/photos/NADPEPTIDEBOOSTINGSERUM-3.png',
      '/photos/NADPEPTIDEBOOSTINGSERUM-4.png',
      '/photos/NADPEPTIDEBOOSTINGSERUM-5.png',
    ],
    category: 'cosmetics',
    description:
      'Advanced anti-aging serum powered by NAD+ and peptides to improve skin elasticity, boost cell renewal, and restore a youthful, radiant complexion.',
  },
  {
    id: 'cos-2',
    name: 'HYALTOIN FLOODING SERIUM',
    price: 25,
    images: [
      '/photos/EQQUALBERRY.png',
      '/photos/EQQUALBERRY-1.png',
      '/photos/HYALTOINFLOODINGSERUM-3.png',
      '/photos/HYALTOINFLOODINGSERUM-4.png',
      '/photos/HYALTOINFLOODINGSERUM-5.png',
    ],
    category: 'cosmetics',
    description:
      'Deeply hydrating serum formulated with hyaluronic acid and allantoin to flood the skin with moisture, soothe irritation, and strengthen the skin barrier.',
  },
  {
    id: 'cos-3',
    name: 'ALOE PDRN CALMING SERUM',
    price: 25,
    images: [
      '/photos/AloePDRNCalmingSerum.png',
      '/photos/AloePDRNCalmingSerum-1.png',
      '/photos/AloePDRNCalmingSerum-2.png',
      '/photos/AloePDRNCalmingSerum-3.png',
      '/photos/AloePDRNCalmingSerum-4.png',
    ],
    category: 'cosmetics',
    description:
      'Soothing repair serum enriched with aloe vera and PDRN to calm sensitive skin, reduce redness, and support skin regeneration.',
  },
  {
    id: 'cos-4',
    name: 'BAKUCHIOL PLUMPING SERUM',
    price: 23,
    images: [
      '/photos/BAKUCHIOLPLUMPINGSERUM.png',
      '/photos/BAKUCHIOLPLUMPINGSERUM-1.png',
      '/photos/BAKUCHIOLPLUMPINGSERUM-2.png',
    ],
    category: 'cosmetics',
    description:
      'Gentle retinol alternative serum with bakuchiol that visibly plumps skin, smooths fine lines, and improves firmness without irritation.',
  },
  {
    id: 'cos-5',
    name: 'VITAMIN ILLUMINATING SERUM',
    price: 23,
    images: [
      '/photos/VITAMINILLUMINATINGSERUM.png',
      '/photos/VITAMINILLUMINATINGSERUM-1.png',
      '/photos/VITAMINILLUMINATINGSERUM-2.png',
      '/photos/VITAMINILLUMINATINGSERUM-3.png',
      '/photos/VITAMINILLUMINATINGSERUM-4.png',
    ],
    category: 'cosmetics',
    description:
      'Brightening vitamin serum designed to even skin tone, fade dark spots, and enhance natural glow for a fresh, luminous look.',
  },
  {
    id: 'cos-6',
    name: 'DR.ALTHEA 345 RELIEF CREAM',
    price: 21,
    images: [
      '/photos/DRALTHEA345RELIEFCREAM.png',
      '/photos/DRALTHEA345RELIEFCREAM-2.png',
      '/photos/DRALTHEA345RELIEFCREAM-3.png',
      '/photos/DRALTHEA345RELIEFCREAM-4.png',
    ],
    category: 'cosmetics',
    description:
      'Barrier-repair cream formulated with calming ingredients to relieve redness, deeply moisturize, and protect stressed or sensitive skin.',
  },
  {
    id: 'cos-7',
    name: 'Dr.Althea 147 Barrier Cream 50ml',
    price: 21,
    images: [
      '/photos/147BarrierCream.png',
      '/photos/147BarrierCream-1.png',
      '/photos/147BarrierCream-2.png',
      '/photos/147BarrierCream-3.png',
    ],
    category: 'cosmetics',
    description:
      'Intensive barrier-strengthening cream that locks in moisture, repairs damaged skin, and provides long-lasting hydration.',
  },
  {
    id: 'cos-8',
    name: 'MEDICUBE P.D.R.N PINK PEPTIDE SERUM',
    price: 20,
    images: [
      '/photos/MedicubePDRNPINKPEPTIDESERUM.png',
      '/photos/MedicubePDRNPINKPEPTIDESERUM-1.png',
      '/photos/MedicubePDRNPINKPEPTIDESERUM-2.png',
      '/photos/MedicubePDRNPINKPEPTIDESERUM-3.png',
    ],
    category: 'cosmetics',
    description:
      'High-performance peptide serum with PDRN to enhance skin firmness, improve elasticity, and promote a healthy pink glow.',
  },
  {
    id: 'cos-9',
    name: 'Medicube Collagen Night Wrapping Mask',
    price: 21,
    images: [
      '/photos/Medicubecollagennightwrappingmask.png',
      '/photos/Medicubecollagennightwrappingmask-1.png',
      '/photos/Medicubecollagennightwrappingmask-2.png',
      '/photos/Medicubecollagennightwrappingmask-3.png',
    ],
    category: 'cosmetics',
    description:
      'Overnight collagen mask that wraps skin in moisture while you sleep, leaving it firmer, smoother, and deeply nourished by morning.',
  },
  {
    id: 'cos-10',
    name: 'Centella Brightening Capsule Ampoule 100ml',
    price: 20,
    images: [
      '/photos/CentellaBrighteningCapsuleAmpoule.png',
      '/photos/CentellaBrighteningCapsuleAmpoule-1.png',
      '/photos/CentellaBrighteningCapsuleAmpoule-2.png',
    ],
    category: 'cosmetics',
    description:
      'Soothing ampoule with encapsulated brightening ingredients and Centella Asiatica to calm skin while improving tone and clarity.',
  },
  {
    id: 'cos-11',
    name: 'Anua - Niacinamide 10% + TXA 4% Serum',
    price: 20,
    images: [
      '/photos/Anua.png',
      '/photos/Anua-1.png',
      '/photos/Anua-2.png',
      '/photos/Anua-3.png',
      '/photos/Anua-4.png',
    ],
    category: 'cosmetics',
    description:
      'Powerful brightening serum combining niacinamide and tranexamic acid to reduce dark spots, control oil, and refine skin texture.',
  },
  {
    id: 'cos-12',
    name: 'CELIMAX THE VITA A RETINAL SHOT TIGHTENING BOOSTER',
    price: 21,
    images: [
      '/photos/CELIMAXTHEVITA.png',
      '/photos/CELIMAXTHEVITA-1.png',
      '/photos/CELIMAXTHEVITA-2.png',
    ],
    category: 'cosmetics',
    description:
      'Concentrated retinal booster designed to tighten pores, smooth wrinkles, and enhance overall skin firmness.',
  },
  {
    id: 'cos-13',
    name: 'NUMBUZIN No. 9 NAD RetinA Volume Shot Eye Cream 10ml',
    price: 23,
    images: [
      '/photos/numbuzin.png',
      '/photos/numbuzin-1.png',
      '/photos/numbuzin-2.png',
      '/photos/numbuzin-3.png',
      '/photos/numbuzin-4.png',
    ],
    category: 'cosmetics',
    description:
      'Targeted eye cream with NAD and RetinA to reduce fine lines, improve elasticity, and restore volume around the eyes.',
  },
  {
    id: 'cos-14',
    name: 'SOME BY MI Retinol Intense Advanced Triple Action Eye Cream',
    price: 21,
    images: [
      '/photos/SOMEBYM.png',
      '/photos/SOMEBYM-1.png',
      '/photos/SOMEBYM-2.png',
    ],
    category: 'cosmetics',
    description:
      'Triple-action eye cream with retinol to target wrinkles, dark circles, and loss of firmness for brighter-looking eyes.',
  },
  {
    id: 'cos-15',
    name: 'CELIMAX THE VITA A RETINOL SHOT TIGHTENING SERUM 30ML',
    price: 20,
    images: [
      '/photos/CELIMAXTHEVITAARETINOL.png',
      '/photos/CELIMAXTHEVITAARETINOL-1.png',
      '/photos/CELIMAXTHEVITAARETINOL-2.png',
      '/photos/CELIMAXTHEVITAARETINOL-3.png',
    ],
    category: 'cosmetics',
    description:
      'Retinol-based tightening serum that improves skin texture, reduces wrinkles, and enhances elasticity with regular use.',
  },
  {
    id: 'cos-16',
    name: 'Lait-Crème Concentré - #1 Bestseller Moisturizer',
    price: 23,
    images: [
      '/photos/Lait-CrèmeConcentré.png',
      '/photos/Lait-CrèmeConcentré-1.png',
      '/photos/Lait-CrèmeConcentré-2.png',
    ],
    category: 'cosmetics',
    description:
      'Cult-favorite multi-purpose moisturizer that deeply nourishes, smooths skin, and delivers instant comfort and glow.',
  },
  {
    id: 'cos-17',
    name: 'Vaseline Lip Therapy Rosy Lips ',
    price: 4,
    images: [
      '/photos/VASELINE.png',
    
    ],
    category: 'cosmetics',
    description:
      'Patch-based treatment series for targeted skin repair and rejuvenation.',
  },
   {
    id: 'cos-18',
    name: 'MASTERPATCH SERIES', 
     price: 20,
    images: [
      '/photos/MASTERPATCH1111.png',
      '/photos/MASTERPATCH3.png',
     '/photos/MASTERPATCH2.png',
      '/photos/MASTERPATCH4.png',
      '/photos/MASTERPATCH5.png',
      '/photos/MASTERPATCH6.png',
    ],
    category: 'cosmetics',
    description:
      'Patch-based treatment series for targeted skin repair and rejuvenation.',
  },
 {
    id: 'cos-19',
    name: 'MASTERPATCH SERIES',
    price: 15,
    images: [
      '/photos/MASTERPATCH1.png',
      '/photos/MASTERPATCH3.png',
      '/photos/MASTERPATCH2.png',
      '/photos/MASTERPATCH4.png',
      '/photos/MASTERPATCH5.png',
      '/photos/MASTERPATCH6.png',
    ],
    category: 'cosmetics',
    description:
      'Patch-based treatment series for targeted skin repair and rejuvenation.',
  },{
    id: 'cos-20',
    name: 'MASTERPATCH SERIES',
    price: 15,
    images: [
      '/photos/MASTERPATCH22.png',
      '/photos/MASTERPATCH23.png',
      '/photos/MASTERPATCH24.png',
      '/photos/MASTERPATCH4.png',
      '/photos/MASTERPATCH5.png',
      '/photos/MASTERPATCH6.png',
    ],
    category: 'cosmetics',
    description:
      'Patch-based treatment series for targeted skin repair and rejuvenation.',
  },
];

// Categories
export const categories = [
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    description: 'Lipsticks, foundations, and more',
    images: [
      '/photos/serums.png',
      '/photos/serums-1.png',
      '/photos/serums-2.png',
      '/photos/serums-3.png',
      '/photos/serums-4.png',
      '/photos/serums-5.png',
    ],
    comingSoon: false,
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    description: 'Shampoos, treatments & styling',
    images: ['/photos/haircarecomingsoon.png'],
    comingSoon: true,
  },
  {
    id: 'body-care',
    name: 'Body Care',
    description: 'Lotions, scrubs & body oils',
    images: ['/photos/bodycarecomingsoon.png'],
    comingSoon: true,
  },
  {
    id: 'others',
    name: 'Others',
    description: 'Tools, accessories & more',
    images: ['/photos/otherscomingsoon.png'],
    comingSoon: true,
  },
];

// Helper functions
export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = () => products.slice(0, 6);
