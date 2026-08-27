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
      'Soothing ampoule with encapsulated brightening ingredients and Centella Asiatica.',
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
      'Powerful brightening serum combining niacinamide and tranexamic acid.',
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
      'Concentrated retinal booster designed to tighten pores.',
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
      'Targeted eye cream with NAD and RetinA.',
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
      'Triple-action eye cream with retinol.',
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
      'Retinol-based tightening serum.',
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
      'Cult-favorite multi-purpose moisturizer.',
  },
  {
    id: 'cos-17',
    name: 'Vaseline Lip Therapy Rosy Lips ',
    price: 4,
    images: ['/photos/VASELINE.png'],
    category: 'body-care',
    description:
      'Hydrating lip therapy.',
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
    category: 'others',
    description:
      'Patch-based treatment series.',
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
    category: 'others',
    description:
      'Patch-based treatment series.',
  },
  {
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
    category: 'others',
    description:
      'Patch-based treatment series.',
  },
  {
    id: 'cos-21',
    name: 'Centella Ampoule',
    price: 21,
    images: [
      '/photos/CentellaAmpoule1.png',
      '/photos/CentellaAmpoule2.png',
      '/photos/CentellaAmpoule3.png',
      '/photos/CentellaAmpoule4.png',
      '/photos/CentellaAmpoule5.png',
      '/photos/CentellaAmpoule6.png',
      '/photos/CentellaAmpoule7.png',
      '/photos/CentellaAmpoule8.png',
    ],
    category: 'cosmetics',
    description:
      'Soothing, hydrating ampoule with Centella.',
  },
  {
    id: 'cos-22',
    name: 'Centella Ampoule Foam Low pH & Daily Foam Cleanser',
    price: 19,
    images: [
      '/photos/Centella Ampoule FoamnLow pH & Daily Foam Cleanser.png',
      '/photos/Centella Ampoule FoamnLow pH & Daily Foam Cleanser2.png',
      '/photos/Centella Ampoule FoamnLow pH & Daily Foam Cleanser3.png',
      '/photos/Centella Ampoule FoamnLow pH & Daily Foam Cleanser4.png',
      '/photos/Centella Ampoule FoamnLow pH & Daily Foam Cleanser5.png',

    ],
    category: 'cosmetics',
    description:
      'Gentle daily foam cleanser.',
  },
  {
    id: 'cos-23',
    name: 'Centella Light Cleansing Oil',
    price: 21,
    images: [
      '/photos/Centella Light Cleansing Oil/Centella Light Cleansing Oil1.png',
      '/photos/Centella Light Cleansing Oil/Centella Light Cleansing Oil2.png',
      '/photos/Centella Light Cleansing Oil/Centella Light Cleansing Oil3.png',
      '/photos/Centella Light Cleansing Oil/Centella Light Cleansing Oil4.png',
      '/photos/Centella Light Cleansing Oil/Centella Light Cleansing Oil5.png',
      '/photos/Centella Light Cleansing Oil/Centella Light Cleansing Oil6.png',
    ],
    category: 'cosmetics',
    description:
      'Light and gentle cleansing oil.',
  },
  {
    id: 'cos-24',
    name: 'Hyalu-Cica Water-Fit Sun Serum UV',
    price: 23,
    images: [
      '/photos/Hyalu-Cica Water-Fit Sun Serum UV/Hyalu-Cica Water-Fit Sun Serum UV1.png',
      '/photos/Hyalu-Cica Water-Fit Sun Serum UV/Hyalu-Cica Water-Fit Sun Serum UV2.png',
      '/photos/Hyalu-Cica Water-Fit Sun Serum UV/Hyalu-Cica Water-Fit Sun Serum UV3.png',
      '/photos/Hyalu-Cica Water-Fit Sun Serum UV/Hyalu-Cica Water-Fit Sun Serum UV4.png',
      '/photos/Hyalu-Cica Water-Fit Sun Serum UV/Hyalu-Cica Water-Fit Sun Serum UV5.png',
    ],
    category: 'cosmetics',
    description:
      'Hydrating daily SPF50 sun serum.',
  },
  {
    id: 'cos-25',
    name: 'Poremizing Fresh Ampoule',
    price: 20,
    images: [
      '/photos/Ampoule/Ampoule.png',
      '/photos/Ampoule/Ampoule2.png',
      '/photos/Ampoule/Ampoule3.png',
      '/photos/Ampoule/Ampoule4.png',
    ],
    category: 'cosmetics',
    description:
      'Pore tightening ampoule.',
  },
  {
    id: 'cos-26',
    name: 'Vegan Collagen Eye Serum 10ml',
    price: 20,
    images: [
      '/photos/Vegan Collagen Eye Serum/eye serum1.png',
      '/photos/Vegan Collagen Eye Serum/eye serum2.png',
      '/photos/Vegan Collagen Eye Serum/eye serum3.png',
      '/photos/Vegan Collagen Eye Serum/eye serum4.png',
      '/photos/Vegan Collagen Eye Serum/eye serum5.png',
    ],
    category: 'cosmetics',
    description:
      'Nourishing eye serum.',
  },
  {
    id: 'cos-27',
    name: 'Relief Sun : Rice + Probiotics (SPF50+ PA++++)',
    price: 20,
    images: [
      '/photos/Relief Sun/Relief Sun5.png',
      '/photos/Relief Sun/Relief Sun.png',
      '/photos/Relief Sun/Relief Sun2.png',
      '/photos/Relief Sun/Relief Sun3.png',
      '/photos/Relief Sun/Relief Sun4.png',
    ],
    category: 'cosmetics',
    description:
      'Soothing probiotic sunscreen.',
  },
  {
    id: 'cos-28',
    name: 'numbuzin No. 9 NAD Bio Lifting-sil Essence 50ml',
    price: 24,
    images: [
      '/photos/numbuzin/numbuzin1.png',
      '/photos/numbuzin/numbuzin2.png',
      '/photos/numbuzin/numbuzin3.png',
      '/photos/numbuzin/numbuzin4.png',
      '/photos/numbuzin/numbuzin5.png',
    ],
    category: 'cosmetics',
    description:
      'Lightweight NAD+ lifting essence.',
  },
  {
    id: 'cos-29',
    name: 'No.9 NAD+ Collagen Under Eye Patches (1 pair )',
    price: 7,
    images: [
      '/photos/Collagen Under Eye/Collagen1.png',
      '/photos/Collagen Under Eye/Collagen2.png',
      '/photos/Collagen Under Eye/Collagen3.png',
      '/photos/Collagen Under Eye/Collagen4.png',
      '/photos/Collagen Under Eye/Collagen5.png',
    ],
    category: 'cosmetics',
    description:
      'Brightening collagen under eye patches.',
  },
  {
    id: 'cos-30',
    name: 'NATURE CACUMEN BIOTAE ISATIS INDIGOTICA SHAMPOO BAR',
    price: 11,
    images: ['/photos/Shampoo.png'],
    category: 'hair-care',
    description:
      'Gentle shampoo bar.',
  },
  {
    id: 'cos-31',
    name: 'MEDICUBE PDRN COLLAGEN GEL MASK(1pair)',
    price: 8,
    images: [
      '/photos/Gel/Gel Mask2.png',
      '/photos/Gel/Gel Mask1.png',
      '/photos/Gel/Gel Mask3.png',
      '/photos/Gel/Gel Mask4.png',
      '/photos/Gel/Gel Mask5.png',
    ],
    category: 'cosmetics',
    description:
      'Hydrating collagen gel mask.',
  },
  {
    id: 'cos-32',
    name: 'Body Oil for Dry Skin Intensive Care with Natural Cocoa Butter & Vitamin B3',
    price: 7,
    images: ['/photos/Body oil.png'],
    category: 'body-care',
    description:
      'Intensive care body oil.',
  },
  {
    id: 'cos-33',
    name: 'VASELINE COCOA RADIANT BODY OIL 200ML',
    price: 7,
    images: ['/photos/VASELINE COCOA RADIANT BODY.png'],
    category: 'body-care',
    description:
      'Radiant cocoa body oil.',
  },
  {
    id: 'cos-34',
    name: 'BIODANCE Bio-Collagen Real Deep Mask',
    price: 8,
    images: [
      '/photos/Biodance/Biodance1.png',
      '/photos/Biodance/Biodance2.png',
      '/photos/Biodance/Biodance3.png',
      '/photos/Biodance/Biodance4.png',
      '/photos/Biodance/Biodance5.png',
      '/photos/Biodance/Biodance6.png',
    ],
    category: 'cosmetics',
    description:
      'Overnight hydrogel collagen mask.',
  },
  {
    id: 'cos-35',
    name: 'Medicube PDRN Pink Cica Soothing Toner',
    price: 21,
    images: ['/photos/Medicube/Medicube.png'],
    category: 'cosmetics',
    description:
      'Soothing PDRN toner.',
  },
  {
    id: 'cos-36',
    name: 'Medicube PDRN Pink Niacinamide Whip Cleanser 120g',
    price: 21,
    images: [
      '/photos/Medicube cleanser/Medcleanser1.png',
      '/photos/Medicube cleanser/Medcleanser2.png',
      '/photos/Medicube cleanser/Medcleanser3.png',
      
    ],
    category: 'cosmetics',
    description:
      'Gentle daily whip cleanser.',
  },
   {
    id: 'cos-37',
    name: 'Bakuchiol Plumping Capsule Cream',
    price: 25,
    images: ['/photos/Bakuchiol Plumping Capsule Cream/CapsuleCream1.png',
      '/photos/Bakuchiol Plumping Capsule Cream/CapsuleCream2.png',
      '/photos/Bakuchiol Plumping Capsule Cream/CapsuleCream3.png',
      '/photos/Bakuchiol Plumping Capsule Cream/CapsuleCream4.png',
      '/photos/Bakuchiol Plumping Capsule Cream/CapsuleCream5.png',
      '/photos/Bakuchiol Plumping Capsule Cream/CapsuleCream6.png',
    ],
    category: 'cosmetics',
    description:
      'Gentle bakuchiol capsules instantly firm skin and tighten pores.',
  },
   {
    id: 'cos-38',
    name: 'Triple Collagen Serum',
    price: 21,
    images: ['/photos/TripleCollagenSerum/CollagenSerum1.png',
      '/photos/TripleCollagenSerum/CollagenSerum2.png',
      '/photos/TripleCollagenSerum/CollagenSerum3.png',
      '/photos/TripleCollagenSerum/CollagenSerum4.png',
      '/photos/TripleCollagenSerum/CollagenSerum5.png',
    ],
    category: 'cosmetics',
    description:
      'Hydrating serum with three types of collagen to boost skin elasticity and moisture retention.',
  },
   {
    id: 'cos-39',
    name: 'NAD+ Peptide Boosting Cream',
    price: 25,
    images: ['/photos/NADPeptideBoostingCream/BoostingCream1.png'
      ,'/photos/NADPeptideBoostingCream/BoostingCream2.png',
'/photos/NADPeptideBoostingCream/BoostingCream3.png',
'/photos/NADPeptideBoostingCream/BoostingCream4.png',
'/photos/NADPeptideBoostingCream/BoostingCream5.png',
    ],
    category: 'cosmetics',
    description:
      'Lifts, Firms & Revives Radiant Elasticity for Healthy Aging 50ml',
  },
   {
    id: 'cos-40',
    name: 'Vitamin Illuminating Cream',
    price: 25,
    images: ['/photos/VitaminilluminatingCream/illuminatingCream1.png'
      ,'/photos/VitaminilluminatingCream/illuminatingCream2.png',
'/photos/VitaminilluminatingCream/illuminatingCream3.png',
'/photos/VitaminilluminatingCream/illuminatingCream4.png',
'/photos/VitaminilluminatingCream/illuminatingCream5.png',
    ],
    category: 'cosmetics',
    description:
      'Lifts, Firms & Revives Radiant Elasticity for Healthy Aging 50ml',
  },
  {
    id: 'cos-41',
    name: 'Centella Toning Toner Mild Daily Exfoliating Toner',
    price: 21,
    images: ['/photos/Centella Toning Toner/Centella1.jpeg',
'/photos/Centella Toning Toner/Centella2.jpeg',
'/photos/Centella Toning Toner/Centella3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A gentle exfoliating toner with Centella Asiatica that soothes, hydrates, and smooths skin while improving texture and clarity.',
  },
  {
    id: 'cos-42',
    name: 'Dr. Althea - 345 Relief Cream Mist',
    price: 21,
    images: ['/photos/Dr. Althea - 345 Relief Cream Mist/c1.jpeg',
'/photos/Dr. Althea - 345 Relief Cream Mist/c2.jpeg',
'/photos/Dr. Althea - 345 Relief Cream Mist/c3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A lightweight cream mist that instantly hydrates, calms irritation, and keeps skin soft and refreshed throughout the day.',
  },
  {
    id: 'cos-43',
    name: 'Gua Sha Tool',
    price: 13,
    images: ['/photos/Gua Sha Tool/c1.jpeg',
'/photos/Gua Sha Tool/c2.jpeg',
'/photos/Gua Sha Tool/c3.jpeg',
    ],
    category: 'others',
    description: 'A facial massage tool that helps reduce puffiness, improve circulation, and enhance skin firmness and glow.',
},
  {
    id: 'cos-44',
    name: 'MEDICUBE TXA Niacinamide Capsule Cream',
    price: 25,
    images: ['/photos/MEDICUBE TXA Niacinamide Capsule Cream/c1.jpeg'
      ,'/photos/MEDICUBE TXA Niacinamide Capsule Cream/c2.jpeg',
      '/photos/MEDICUBE TXA Niacinamide Capsule Cream/c3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A brightening cream with TXA and Niacinamide that helps reduce dark spots and improve overall skin tone.',
},
  {
    id: 'cos-45',
    name: 'Dr.Althea Aqua Marine Watery Cream',
    price: 22,
    images: ['/photos/Dr.Althea Aqua Marine Watery Cream/c1.jpeg'
      ,'/photos/Dr.Althea Aqua Marine Watery Cream/c2.jpeg',
'/photos/Dr.Althea Aqua Marine Watery Cream/c3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A lightweight watery cream that deeply hydrates and leaves skin smooth, fresh, and healthy-looking.',
  },
  {
    id: 'cos-46',
    name: 'NAD+ Peptide Boosting Toner',
    price: 22,
    images: ['/photos/NAD+ Peptide Boosting Toner/c1.jpeg'
      ,'/photos/NAD+ Peptide Boosting Toner/c2.jpeg',
'/photos/NAD+ Peptide Boosting Toner/c3.jpeg',
'/photos/NAD+ Peptide Boosting Toner/c4.jpeg',
'/photos/NAD+ Peptide Boosting Toner/c5.jpeg',
    ],
    category: 'cosmetics',
    description: 'A revitalizing toner with peptides that hydrates, strengthens, and improves skin elasticity.',
},
  {
    id: 'cos-47',
    name: 'Bakuchiol Plumping Capsule Toner',
    price: 25,
    images: ['/photos/Bakuchiol Plumping Capsule Toner/c1.jpeg'
      ,'/photos/Bakuchiol Plumping Capsule Toner/c2.jpeg',
'/photos/Bakuchiol Plumping Capsule Toner/c3.jpeg',
'/photos/Bakuchiol Plumping Capsule Toner/c4.jpeg',
'/photos/Bakuchiol Plumping Capsule Toner/c5.jpeg',
    ],
    category: 'cosmetics',
    description: 'A hydrating toner with Bakuchiol that helps improve firmness and smooth fine lines.',
},
  {
    id: 'cos-48',
    name: 'Vitamin illuminating Toner',
    price: 22,
    images: ['/photos/Vitamin illuminating Toner/c1.jpeg'
      ,'/photos/Vitamin illuminating Toner/c2.jpeg',
'/photos/Vitamin illuminating Toner/c3.jpeg',
'/photos/Vitamin illuminating Toner/c4.jpeg',
'/photos/Vitamin illuminating Toner/c5.jpeg',
    ],
    category: 'cosmetics',
    description: 'A vitamin-rich toner that brightens, hydrates, and improves skin radiance.',
  },
  {
    id: 'cos-49',
    name: 'AntiDarkSpot Pore+Dark Spot Brightening Cream',
    price: 20,
    images: ['/photos/Dark Spot Brightening Cream/c1.jpeg'
      ,'/photos/Dark Spot Brightening Cream/c2.jpeg',
'/photos/Dark Spot Brightening Cream/c3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A brightening cream that reduces dark spots, refines pores, and evens skin tone.',
},
  {
    id: 'cos-50',
    name: 'Dr.Althea PDRN Reju 5000 Cream',
    price: 21,
    images: ['/photos/Dr.Althea PDRN Reju 5000 Cream/c1.jpeg'
      ,'/photos/Dr.Althea PDRN Reju 5000 Cream/c2.jpeg',
'/photos/Dr.Althea PDRN Reju 5000 Cream/c3.jpeg',
'/photos/Dr.Althea PDRN Reju 5000 Cream/c4.jpeg',
    ],
    category: 'cosmetics',
    description: 'A rejuvenating cream that nourishes skin, improves elasticity, and restores a youthful glow.',
},
  {
    id: 'cos-51',
    name: 'CELIMAX PORE+DARK SPOT BRIGHTNING CARE SUNSCREEN',
    price: 20,
    images: ['/photos/CARE SUNSCREEN/c1.jpeg'
      ,'/photos/CARE SUNSCREEN/c2.jpeg',
'/photos/CARE SUNSCREEN/c3.jpeg',
'/photos/CARE SUNSCREEN/c4.jpeg',
'/photos/CARE SUNSCREEN/c5.jpeg',
    ],
    category: 'cosmetics',
    description: 'A lightweight sunscreen that protects from UV rays while helping brighten and smooth skin.',
},
  {
    id: 'cos-52',
    name: 'Seoul 1988 Eye Cream',
    price: 20,
    images: ['/photos/Seoul 1988 Eye Cream/c1.jpeg'
      ,'/photos/Seoul 1988 Eye Cream/c2.jpeg',
'/photos/Seoul 1988 Eye Cream/c3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A nourishing eye cream that hydrates, firms, and reduces dark circles and fine lines.',
},
  {
    id: 'cos-53',
    name: 'Medicube Zero Pore Blackhead Mud Mask',
    price: 20,
    images: ['/photos/Medicube Zero Pore Blackhead Mud Mask/c1.jpeg'
      ,'/photos/Medicube Zero Pore Blackhead Mud Mask/c2.jpeg',
'/photos/Medicube Zero Pore Blackhead Mud Mask/c3.jpeg',
    ],
    category: 'cosmetics',
    description: 'A deep-cleansing mud mask that removes blackheads, excess oil, and tightens pores.',
},


{
  id: 'cos-55',
  name: 'vintage tobacco mini',
  price: 12,
  images: ['/photos/vintagetobacco.png'
    ,'/photos/Medicube Zero Pore Blackhead Mud Mask/c2.jpeg',
'/photos/Medicube Zero Pore Blackhead Mud Mask/c3.jpeg',
  ],
  category: 'perfumes',
  description: 'A deep-cleansing mud mask that removes blackheads, excess oil, and tightens pores.',

},
{
  id: 'cos-56',
  name: 'lv bag',
  price: 10,
  images: ['/photos/lvlogo.png'
    ,'/photos/Medicube Zero Pore Blackhead Mud Mask/c2.jpeg',
'/photos/Medicube Zero Pore Blackhead Mud Mask/c3.jpeg',
  ],
  category: 'bags',
  description: 'A deep-cleansing mud mask that removes blackheads, excess oil, and tightens pores.',

},{
  id: 'cos-57',
  name: 'Zero-cast Moisturizing Finish Sunscreen',
  price: 20,
  images: [
    '/photos/moissun/m1.png',
    '/photos/moissun/m2.png',
    '/photos/moissun/m3.png',
    '/photos/moissun/m4.png',
    '/photos/moissun/m5.png',
    '/photos/moissun/m6.png',
  ],
  category: 'cosmetics',
  description: 'This everyday sunscreen provides powerful SPF 50 protection while doubling as a lightweight, deeply hydrating moisturizer. It absorbs seamlessly with absolutely zero white cast or greasy residue, prepping the skin for smooth, long-lasting makeup application.',

},{
  id: 'cos-58',
  name: 'Vitamin C Booster Shot, Pure Vitamin C + Glutathione for Bright, Healthy Skin Glow, 1.01 fl oz',
  price: 20,
  images: ['/photos/arenciagreen.png'
    ,'/photos/arenciagreen2.png',

  ],
  category: 'cosmetics',
  description: 'A powerful vitamin C booster shot that brightens, evens skin tone, and improves skin glow.',

},{
  id: 'cos-59',
  name: 'essence I Love Extreme volume Mascara',
  price: 5,
  images: ['/photos/extreme/ex1.png'
    ,'/photos/extreme/ex2.png',

  ],
  category: 'others',
  description: 'A volumizing mascara that lengthens, thickens, and defines lashes.',

},{
  id: 'cos-60',
  name: 'essence I Love Extreme crazy volume Mascara',
  price: 5,
  images: ['/photos/extreme/ex3.png'
    ,'/photos/extreme/ex4.png',

  ],
  category: 'others',
  description: 'A crazy volumizing mascara that lengthens, thickens, and defines lashes.',

},
{
  id: 'cos-61',
  name: 'Ruby Rose "Feels" Matificante Translucent Loose Powder',
  price: 5,
  images: ['/photos/rubyrrrr/ruby22.png'
    ,'/photos/rubyrrrr/ruby23.png',

  ],
  category: 'others',
  description: 'A translucent loose powder that sets makeup and mattifies skin.',

},
{
  id: 'cos-62',
  name: 'NYX Professional Makeup Buttermelt Blush',
  price: 13,
  images: [
    '/photos/melt/melt1.png',
    '/photos/melt/melt2.png',
    '/photos/melt/melt3.png',
  ],
  category: 'others',
  description: 'A creamy blush that blends seamlessly into the skin for a natural, flushed look.',

},
{
  id: 'cos-63',
  name: 'Maybelline New York Lifter Gloss in shade 005 Peta',
  price: 10,
  images: ['/photos/maybelline/mayb1.png'],
  category: 'others',
  description: 'A lightweight, long-wearing lipgloss that adds a subtle sheen and hydration to the lips.',

},
{
  id: 'cos-64',
  name: 'Maybelline Lifter Gloss in shade 002 Ice',
  price: 10,
  images: [
    '/photos/maybelline/mayb2.png',
    '/photos/maybelline/mayb3.png',
  ],
  category: 'others',
  description: 'A lightweight, long-wearing lipgloss that adds a subtle sheen and hydration to the lips.',

},
{
  id: 'cos-65',
  name: 'Maybelline Super Stay Vinyl Ink Longwear Liquid Lipstick in the shade 20 Coy',
  price: 11,
  images: ['/photos/superstay/superstay.png', 
    '/photos/superstay/superstay2.png'
,
  ],
  category: 'others',
  description: 'A long-wearing liquid lipstick with a glossy vinyl finish and rich color in shade 20 Coy that stays put for hours without fading.',

},
{
  id: 'cos-66',
  name: 'Pixi Beauty On-the-Glow Blush',
  price: 27,
  images: ['/photos/pixi/pix1.png', 
    '/photos/pixi/pix2.png',
    '/photos/pixi/pix3.png',
    '/photos/pixi/pix4.png',
    '/photos/pixi/pix5.png',
    '/photos/pixi/pix6.png',
    '/photos/pixi/pix7.png',

,
  ],
  category: 'others',
  description: 'A creamy stick blush that blends effortlessly for a natural, dewy flush you can apply on the go.',

},
{
  id: 'cos-67',
  name: 'uby Rose Sunkiss Cream Bronzer Stick',
  price: 5,
  images: ['/photos/creambronze/bronze1.png', 
    '/photos/creambronze/bronze2.png'
,
  ],
  category: 'others',
  description: 'A creamy bronzer stick that warms the complexion with a sun-kissed glow and blends easily for natural contour and definition.',

},
{
  id: 'cos-68',
  name: 'Quick Fix Makeup Professional',
  price: 8,
  images: ['/photos/makeupfix.png', 
  
,
  ],
  category: 'others',
  description: 'A quick-dry makeup fixative that refreshes and sets your face for a polished, long-lasting finish.',

},
{
  id: 'cos-69',
  name: 'Ruby Rose Shine Stone highlighter stick in the shade Luminous Quartz',
  price: 5,
  images: ['/photos/highl/highl.png', 
    '/photos/highl/highl2.png', 
  
,
  ],
  category: 'others',
  description: 'A creamy highlighter stick in shade Luminous Quartz that adds a soft, radiant glow to cheekbones, brow bone, and cupid\'s bow.',

},

{
  id: 'cos-70',
  name: 'RSHEGLAM Insta-Ready Face & Under Eye Setting Powder Duo',
  price: 9,
  images: ['/photos/sheglam/she1.png', 
    '/photos/sheglam/she2.png', 
  
,
  ],
  category: 'others',
  description: 'A dual setting powder duo with separate formulas for the face and under-eye area to blur, set, and brighten for a photo-ready finish.',

},
{
  id: 'cos-71',
  name: 'Ruby Rose Feels Prep-Primer in a nude tube',
  price: 4,
  images: ['/photos/nudetube/nude2.png', 
    '/photos/nudetube/nude1.png', 
  
,
  ],
  category: 'others',
  description: 'A lightweight face primer that smooths skin, minimizes pores, and helps makeup glide on and last longer.',

},
{
  id: 'cos-72',
  name: 'Ruby Rose Comfort Matte Liquid Lipstick',
  price: 4,
  images: ['/photos/lipstick/lip1.png', 
    '/photos/lipstick/lip2.png', 
    '/photos/lipstick/lip2.png', 
  
,
  ],
  category: 'others',
  description: 'A comfortable matte liquid lipstick that delivers bold, transfer-resistant color with a soft, non-drying finish.',

},
{
  id: 'cos-73',
  name: 'Samoa Cosmetics Skin Envy Matte Poreless Skin 12hr Wear Foundation',
  price: 14,
  images: ['/photos/skinenvy/skin3.png', 
    '/photos/skinenvy/skin2.png', 
    '/photos/skinenvy/skin1.png', 
  
,
  ],
  category: 'others',
  description: 'A matte, poreless foundation with up to 12 hours of wear that evens skin tone and delivers a smooth, flawless finish.',

},
{
  id: 'cos-74',
  name: 'Yves Morel lip pencil in shade No. 08 (Dusty Rose)',
  price: 3,
  images: ['/photos/yves.png', 
  
,
  ],
  category: 'others',
  description: 'A creamy lip pencil in shade No. 08 Dusty Rose that defines, shapes, and fills lips with a soft, muted rose tone.',

},
{
  id: 'cos-75',
  name: 'Ooh La Lash! Mascara promises extreme thickness and a curled look for dramatic lashes',
  price: 11,
  images: ['/photos/mascapromi.png', 
  
,
  ],
  category: 'others',
  description: 'A volumizing mascara that builds extreme thickness and a lifted, curled look for bold, dramatic lashes.',

},
{
  id: 'cos-76',
  name: 'Essence Extreme Shine Volume Lipgloss',
  price: 7,
  images: ['/photos/shinelip/shine1.png', 
    '/photos/shinelip/shine2.png', 

  
,
  ],
  category: 'others',
  description: 'A high-shine lipgloss that adds volume and a glossy, plumped look while keeping lips hydrated and comfortable.',

},
{
  id: 'cos-77',
  name: 'Maybelline Super Stay Teddy Tint in the shade "10 Current Mood',
  price: 11,
  images: ['/photos/teddytint.png', 

  
,
  ],
  category: 'others',
  description: 'A long-wearing teddy tint lip color in shade 10 Current Mood that delivers a soft, blurred matte finish with up to 12 hours of transfer-resistant wear.',

},
{
  id: 'cos-78',
  name: 'SHEGLAM Snatch  Blush Stick, a cream blush',
  price: 7,
  images: ['/photos/blushstick.png', 

  
,
  ],
  category: 'others',
  description: 'A creamy blush stick that glides on smoothly and blends easily for a natural, buildable flush of color on cheeks.',

},
{
  id: 'cos-79',
  name: 'SHEGLAM Color Bloom Liquid Blush',
  price: 8,
  images: ['/photos/colorbloom/clr1.png', 
    '/photos/colorbloom/clr2.png',
    '/photos/colorbloom/clr3.png',

  
,
  ],
  category: 'others',
  description: 'A lightweight liquid blush that blends seamlessly into the skin for a fresh, dewy pop of color with a natural finish.',

},
{
  id: 'cos-80',
  name: 'SHEGLAM Color Bloom Liquid Blush',
  price: 6,
  images: ['/photos/skinlip.png', 
 
  
,
  ],
  category: 'others',
  description: 'A buildable liquid blush that melts into the skin for a soft, radiant flush with a lightweight, second-skin feel.',

},

{
  id: 'cos-81',
  name: 'Melu Aqua Tint by Ruby Rose',
  price: 3,
  images: ['/photos/rubyrose/ruby1.png', 
    '/photos/rubyrose/ruby2.png',
    '/photos/rubyrose/ruby3.png',

  ],
  category: 'others',
  description: 'A lightweight aqua lip tint that delivers a sheer wash of color with a fresh, hydrated feel and a natural stained-lip look.',

},
{
  id: 'cos-82',
  name: 'Essence Blush Crush! powder blush',
  price: 6,
  images: ['/photos/blush1.png', 
    '/photos/blush2.png',

  ],
  category: 'others',
  description: 'A silky powder blush that adds a soft, buildable flush of color with a smooth, blendable finish for everyday wear.',

},
{
  id: 'cos-83',
  name: 'essence Baby Got Blush Liquid Blush',
  price: 6,
  images: ['/photos/blushliq/liq1.png', 
    '/photos/blushliq/liq2.png',
    '/photos/blushliq/liq3.png',
    '/photos/blushliq/liq4.png',
    '/photos/blushliq/liq5.png',

  ],
  category: 'others',
  description: 'A liquid blush with a lightweight formula that blends effortlessly for a youthful, dewy glow on the cheeks.',

},
{
  id: 'cos-84',
  name: 'L\'Oréal Paris Sunrise in Paradise La Terra Sun Powder',
  price: 18,
  images: ['/photos/sunpowder/sunpow1.png', 
    '/photos/blushliq/sunpow2.png',
    '/photos/blushliq/sunpow3.png',
    '/photos/blushliq/sunpow4.png',

  ],
  category: 'others',
  description: 'A bronzing sun powder that warms the complexion with a natural, sun-kissed glow for face and body.',

},
{
  id: 'cos-85',
  name: 'Red Body Peeling Shot Cleanser',
  price: 20,
  images: ['/photos/redbody/r1.png', 
    '/photos/redbody/r2.png',
    '/photos/redbody/r3.png',
    '/photos/redbody/r4.png',

  ],
  category: 'others',
  description: 'A cleansing shot that removes dead skin cells and impurities from the body for a smooth, refreshed appearance.',

},

{
  id: 'cos-86',
  name: 'Kojic Acid Turmeric Vitamin Gold Jelly Mist Serum',
  price: 20,
  images: ['/photos/acidtum/a1.png', 
    '/photos/acidtum/a2.png',
    '/photos/acidtum/a3.png',
    '/photos/acidtum/a4.png',
    '/photos/acidtum/a5.png',

  ],
  category: 'others',
  description: 'A serum that brightens the skin and reduces dark spots and acne scars.',

},
{
  id: 'cos-87',
  name: 'Heartleaf Quercetinol Pore Deep Cleansing Foam',
  price: 18,
  images: ['/photos/heartleafclean/h1.png', 
    '/photos/heartleafclean/h2.png',
    '/photos/heartleafclean/h3.png',
    '/photos/heartleafclean/h4.png',
    '/photos/heartleafclean/h5.png',

  ],
  category: 'others',
  description: 'A cleansing foam that removes dirt and impurities from the pores for a clean, refreshed appearance.',

},
{
  id: 'cos-88',
  name: 'PDRN Pink Peptide Cream',
  price: 20,
  images: ['/photos/ppeptidepream/p1.png', 
    '/photos/ppeptidepream/p2.png',
    '/photos/ppeptidepream/p3.png',
    '/photos/ppeptidepream/p4.png',

  ],
  category: 'others',
  description: 'A cream that brightens the skin and reduces dark spots and acne scars.',

},
{
  id: 'cos-89',
  name: 'HEART PINK TONE UP SUN CREAM 40ml',
  price: 18,
  images: ['/photos/heartpinkt/h1.png', 
    '/photos/heartpinkt/h2.png',
    '/photos/heartpinkt/h3.png',
    '/photos/heartpinkt/h4.png',
    '/photos/heartpinkt/h5.png',
    '/photos/heartpinkt/h6.png',

  ],
  category: 'others',
  description: 'A sun cream that protects the skin from the sun and reduces dark spots and acne scars.',

},
{
  id: 'cos-90',
  name: 'MEDICUBE PDRN PINK CAFFEINE NIGHT WRAPPING MASK 75ML',
  price: 22,
  images: ['/photos/pinkcaff/p1.png', 
    '/photos/pinkcaff/p2.png',
    '/photos/pinkcaff/p3.png',
    '/photos/pinkcaff/p4.png',
    '/photos/pinkcaff/p5.png',

  ],
  category: 'others',
  description: 'A night wrapping mask that brightens the skin and reduces dark spots and acne scars.',

},
{
  id: 'cos-91',
  name: 'PDRN Lip Sleeping Mask',
  price: 15,
  images: ['/photos/lipsleeping/l1.png', 
    '/photos/pinkcaff/p2.png',
    '/photos/lipsleeping/l3.png',
    '/photos/lipsleeping/l4.png',
    '/photos/lipsleeping/l5.png',

  ],
  category: 'others',
  description: 'A night wrapping mask that brightens the skin and reduces dark spots and acne scars.',

},
{
  id: 'cos-92',
  name: 'Anua Peach Niacin Spread Cleansing Foam 150ml',
  price: 18,
  images: ['/photos/anuapeach/a1.png', 
    '/photos/anuapeach/a2.png',
    '/photos/anuapeach/a3.png',
    '/photos/anuapeach/a4.png',

  ],
  category: 'others',
  description: 'A cleansing foam that removes dirt and impurities from the pores for a clean, refreshed appearance.',

},
{
  id: 'cos-93',
  name: 'Aqua Marine Deep Serum',
  price: 21,
  images: ['/photos/aquamarr/a1.png', 
    '/photos/aquamarr/a2.png',
    '/photos/aquamarr/a3.png',
    '/photos/aquamarr/a4.png',
    '/photos/aquamarr/a5.png',

  ],
  category: 'others',
  description: 'A serum that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-94',
  name: '345 Relief Serum',
  price: 22,
  images: ['/photos/sunsunsun/s1.png', 
    '/photos/aquamarr/a2.png',
    '/photos/sunsunsun/s3.png',
    '/photos/sunsunsun/s4.png',
    '/photos/sunsunsun/s5.png',
    '/photos/sunsunsun/s6.png',
    '/photos/sunsunsun/s7.png',

  ],
  category: 'others',
  description: 'A serum that relieves the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-95',
  name: 'Green Tea Fresh Sunscreen',
  price: 21,
  images: ['/photos/greentea/g1.png', 
    '/photos/aquamarr/a2.png',
    '/photos/greentea/g3.png',
    '/photos/greentea/g4.png',
    '/photos/greentea/g5.png',
    '/photos/greentea/g6.png',
  ],
  category: 'others',
  description: 'A sunscreen that protects the skin from the sun and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-96',
  name: 'Anua - Heartleaf Silky Moisture Sun Cream',
  price: 21,
  images: ['/photos/anuasilk/a1.png', 
    '/photos/aquamarr/a2.png',
    '/photos/anuasilk/a3.png',
    '/photos/anuasilk/a4.png',
    '/photos/anuasilk/a5.png',
    '/photos/anuasilk/a6.png',
  ],
  category: 'others',
  description: 'A sun cream that protects the skin from the sun and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-97',
  name: 'Vitamin C Booster Shot, Pure Vitamin C + Glutathione for Bright, Healthy Skin Glow, 1.01 fl oz',
  price: 20,
  images: ['/photos/vitboost/v1.png', 
    '/photos/aquamarr/a2.png',
    '/photos/vitboost/v3.png',
    '/photos/vitboost/v4.png',
    '/photos/vitboost/v5.png',
    '/photos/vitboost/v6.png',
    '/photos/vitboost/v7.png',
  ],
  category: 'others',
  description: 'A booster shot that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-98',
  name: 'NAD+ Time-Rewind Booster Shot, Firming & Revitalizing Serum with 5% NAD+ Complex, Peptides & Resveratrol, 1.01 fl. oz.',
  price: 20,
  images: ['/photos/peptidep/p1.png', 
    '/photos/peptidep/p2.png',
    '/photos/peptidep/p3.png',
    '/photos/peptidep/p4.png',
    '/photos/peptidep/p5.png',
    '/photos/peptidep/p6.png',
    '/photos/peptidep/p7.png',
  ],
  category: 'others',
  description: 'A serum that firms the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-99',
  name: 'zimaya Inekas Luna for Men Eau De Parfum, 100ml(3.4 oz)',
  price: 21,
  images: ['/photos/inekas/i1.png', 
    
  ],
  category: 'perfumes',
  description: 'A perfume that firms the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-100',
  name: 'Afnan Turathi Brown for Men Eau de Parfum, 3.04 Fl. Oz',
  price: 38,
  images: ['/photos/afnan.png', 
    
  ],
  category: 'perfumes',
  description: 'A perfume that is perfect for men who want to feel confident and stylish.',

},
{
  id: 'cos-101',
  name: 'Zimaya HAPPY OUD 100ML EDP',
  price: 29,
  images: ['/photos/zimaya.png', 
    
  ],
  category: 'perfumes',
  description: 'A perfume that is perfect for men who want to feel confident and stylish.',

},
{
  id: 'cos-102',
  name: 'medicube - Collagen Firming Sun Cream',
  price: 20,
  images: ['/photos/firming/f1.png', 
    '/photos/firming/f2.png',
    '/photos/firming/f3.png',
    '/photos/firming/f4.png',

  ],
  category: 'others',
  description: 'A sun cream that firms the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-103',
  name: 'Lattafa Jasoor Eau de Parfum 100ml Unisex Oriental-Woody Fragrance',
  price: 28,
  images: ['/photos/jasoor/j1.png', 
    '/photos/jasoor/j2.png',
   

  ],
  category: 'perfumes',
  description: 'A perfume that is perfect for men who want to feel confident and stylish.',

},
{
  id: 'cos-104',
  name: 'Mary&May Spicule Retinol PDRN Cream 15g',
  price: 18,
  images: ['/photos/spicule/p1.png', 
    '/photos/spicule/p2.png',
    '/photos/spicule/p3.png',
  ],
  category: 'others',
  description: 'A cream that firms the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-105',
  name: 'Mary And May Spicule Collagen PDRN Cream',
  price: 18,
  images: ['/photos/mary/m1.png', 
    '/photos/mary/m2.png',
    '/photos/mary/m3.png',
  ],
  category: 'others',
  description: 'A cream that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-106',
  name: 'Derma Nature Glutathione Longlasting Tone-up Cream',
  price: 19,
  images: ['/photos/derma/d1.png', 
    '/photos/derma/d2.png',
  ],
  category: 'others',
  description: 'A cream that firms the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-107',
  name: 'Secret Key Snow White Spot Gel',
  price: 18,
  images: ['/photos/snowwhite/s1.png', 
    '/photos/snowwhite/s2.png',
    '/photos/snowwhite/s3.png',
  ],
  category: 'others',
  description: 'A gel that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-108',
  name: 'BIODERMA Pigmentbio Sensitive Areas 75ml',
  price: 25,
  images: ['/photos/bioderma/b1.png', 
    '/photos/bioderma/b2.png',
    '/photos/bioderma/b3.png',
  ],
  category: 'others',
  description: 'A cream that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-109',
  name: 'Dark Spot Correcting Glow Serum',
  price: 18,
  images: ['/photos/darkspot/d1.png', 
    '/photos/darkspot/d2.png',
    '/photos/darkspot/d3.png',
    '/photos/darkspot/d5.png',
    '/photos/darkspot/d4.png',
  ],
  category: 'others',
  description: 'A serum that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-109',
  name: 'PDRN Hyaluronic Acid Capsule 100 Serum',
  price: 21,
  images: ['/photos/hyalur/h1.png', 
    '/photos/hyalur/h2.png',
    '/photos/hyalur/h3.png',
    '/photos/hyalur/h4.png',
    '/photos/hyalur/h5.png',
  ],
  category: 'others',
  description: 'A serum that brightens the skin and reduces dark spots and acne scars with a deep moisturizing effect.',

},
{
  id: 'cos-109',
  name: 'PMaison Alhambra Summer Forever Eau de Parfum – 100ml',
  price: 17,
  images: ['/photos/maison.png', 
   
  ],
  category: 'perfumes',
  description: 'A perfume that is perfect for men who want to feel confident and stylish.',

},
{
  id: 'cos-110',
  name: 'Rave Now Perfume 100ml Spray women',
  price: 20,
  images: ['/photos/ravenow.png', 
   
  ],
  category: 'perfumes',
  description: 'A perfume that is perfect for women who want to feel confident and stylish.',
},
{
  id: 'cos-111',
  name: 'Salvo eau de parfum pour homme 100 ml',
  price: 17,
  images: ['/photos/salvoeau.png', 
   
  ],
  category: 'perfumes',
  description: 'A perfume that is perfect for men who want to feel confident and stylish.',
},
{
  id: 'cos-112',
  name: 'Peach 70% Niacinamide Serum',
  price: 18,
  images: ['/photos/niacinas/n1.png', 
    '/photos/niacinas/n2.png',
    '/photos/niacinas/n3.png',
    '/photos/niacinas/n4.png',
    '/photos/niacinas/n5.png',
   
  ],
  category: 'others',
  description:
    'A lightweight brightening serum with 70% peach extract and 5% niacinamide that evens skin tone, refines pores, and delivers a dewy glass-skin glow.',
},

{
  id: 'cos-113',
  name: 'Lattafa Badee Al Oud Amethyst Eau de Parfum',
  price: 27,
  images: ['/photos/oudamethyst.png', 
    
   
  ],
  category: 'perfumes',
  description:
    'A luxurious unisex EDP blending rose, jasmine, oud, amber, and vanilla for a warm, sophisticated oriental fragrance with long-lasting sillage.',
},

{
  id: 'cos-114',
  name: 'Rosemary PDRN Scalp Serum',
  price: 20,
  images: ['/photos/rosemaryscalp/r1.png', 
    '/photos/rosemaryscalp/r2.png',
    '/photos/rosemaryscalp/r3.png',
    '/photos/rosemaryscalp/r4.png',
   
  ],
  category: 'others',
  description:
    'A lightweight leave-in scalp serum with rosemary and PDRN that soothes the scalp, supports thicker-looking hair, and absorbs quickly without greasiness.',
},

{
  id: 'cos-115',
  name: 'Lattafa Rave Now Eau De Parfum Pour Homme - 100ml',
  price: 20,
  images: ['/photos/ravemen.png', 
    
   
  ],
  category: 'perfumes',
  description:
    'A bold woody aromatic EDP for men opening with pineapple and bergamot, drying down to musk, vanilla, and oakmoss for confident everyday wear.',
},

{
  id: 'cos-116',
  name: 'PDRN Pink Collagen Glow Jelly Serum',
  price: 21,
  images: ['/photos/collagenglow/c1.png', 
    '/photos/collagenglow/c2.png',
    '/photos/collagenglow/c3.png',
    '/photos/collagenglow/c4.png',
    '/photos/collagenglow/c5.png',
   
  ],
  category: 'others',
  description:
    'A pink jelly-textured serum with PDRN, collagen water, and niacinamide that boosts radiance, hydrates deeply, and leaves skin plump and dewy.',
},
{
  id: 'cos-117',
  name: 'Afnan Lynked Freedom for men',
  price: 40,
  images: ['/photos/afnan1.png', 
    '/photos/afnan2.png',
    
   
  ],
  category: 'perfumes',
  description:
    'A fresh aromatic EDP for men with bergamot, grapefruit, lavender, and caramel for a modern, confident scent that transitions from crisp to warmly sensual.',
},
{
  id: 'cos-118',
  name: 'Zimaya FATIMA PINK 100ML EDP',
  price: 29,
  images: ['/photos/fatima.png', 
    
   
  ],
  category: 'perfumes',
  description:
    'An elegant floral EDP for women with rose, jasmine, rhubarb, and vanilla musk for a sweet yet sophisticated signature scent.',
},
{
  id: 'cos-119',
  name: 'Zimaya AMBER IS GREAT 100ML EDP',
  price: 29,
  images: ['/photos/amber.png', 
    
   
  ],
  category: 'perfumes',
  description:
    'A warm oriental EDP centered on saffron, amber, and citrus with a rich woody-spicy dry down ideal for evening wear.',
},
{
  id: 'cos-120',
  name: 'Afnan Historic Doria Unisex 100ml Edp',
  price: 37,
  images: ['/photos/historic.png', 
    
   
  ],
  category: 'perfumes',
  description:
    'A refined unisex EDP with orange blossom, tuberose, jasmine, and musk for a timeless floral fragrance with warm, elegant depth.',
},
];

// Categories
export const categories = [
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    description: 'Face care products',
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
    description: 'Shampoos & scalp care',
    images: ['/photos/haircarecomingsoon.png'],
    comingSoon: false,
  },
  {
    id: 'body-care',
    name: 'Body Care',
    description: 'Body oils & lip care',
    images: ['/photos/bodycarecomingsoon.png'],
    comingSoon: false,
  },
  {
    id: 'others',
    name: 'Makeup',
    description: 'Makeup products',
    images: ['/photos/otherscomingsoon.png'],
    comingSoon: false,
  },{
    id: 'perfumes',
    name: 'Perfumes',
    description: 'Perfumes products',
    images: ['/photos/perumesicon.png'],
    comingSoon: false,
  },
  {
    id: 'bags',
    name: 'Bags',
    description: 'Bags products',
    images: ['/photos/lvlogo.png'],
    comingSoon: false,
  },
  {
    id: 'Eyekiss-lenses',
    name: 'Eyekiss Lenses',
    description: 'Eyekiss Lenses products',
    images: ['/photos/eyekisslogo.png'],
    comingSoon: false,
  },
];

// Helpers
export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);

export const getFeaturedProducts = () => products.slice(0, 6);
  