import { Product } from '@/context/CartContext';

export const products: Product[] = [
  // Cosmetics
  {
    id: 'cos-1',
    name: 'Velvet Matte Lipstick',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    category: 'cosmetics',
    description: 'Long-lasting velvet matte finish lipstick in a beautiful rose shade. Enriched with vitamin E for soft, hydrated lips all day long.',
  },
  {
    id: 'cos-2',
    name: 'Luminous Foundation',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&h=400&fit=crop',
    category: 'cosmetics',
    description: 'Lightweight, buildable coverage foundation that gives you a natural, luminous finish. SPF 15 protection included.',
  },
  {
    id: 'cos-3',
    name: 'Rose Blush Palette',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop',
    category: 'cosmetics',
    description: 'Four beautiful blush shades from soft pink to deep rose. Silky smooth texture for a natural flush of color.',
  },
  {
    id: 'cos-4',
    name: 'Volumizing Mascara',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1631214540553-ff044a3ff1ea?w=400&h=400&fit=crop',
    category: 'cosmetics',
    description: 'Dramatic volume and length without clumping. Smudge-proof formula lasts up to 24 hours.',
  },
  {
    id: 'cos-5',
    name: 'Eyeshadow Palette - Sunset',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
    category: 'cosmetics',
    description: '12 stunning shades inspired by golden sunsets. Mix of matte, shimmer, and glitter finishes.',
  },
  {
    id: 'cos-6',
    name: 'Lip Gloss Set',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=400&h=400&fit=crop',
    category: 'cosmetics',
    description: 'Set of 4 hydrating lip glosses in nude to berry shades. Non-sticky formula with vitamin E.',
  },

  // Hair Care
  {
    id: 'hair-1',
    name: 'Argan Oil Shampoo',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop',
    category: 'hair-care',
    description: 'Nourishing shampoo infused with pure Moroccan argan oil. Restores shine and softness to dry, damaged hair.',
  },
  {
    id: 'hair-2',
    name: 'Keratin Conditioner',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop',
    category: 'hair-care',
    description: 'Deep conditioning treatment with keratin protein. Strengthens and smooths frizzy hair.',
  },
  {
    id: 'hair-3',
    name: 'Hair Growth Serum',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop',
    category: 'hair-care',
    description: 'Powerful serum with biotin and caffeine to stimulate hair growth and reduce hair fall.',
  },
  {
    id: 'hair-4',
    name: 'Heat Protection Spray',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=400&h=400&fit=crop',
    category: 'hair-care',
    description: 'Lightweight spray protects hair from heat damage up to 450°F. Adds shine without weighing hair down.',
  },
  {
    id: 'hair-5',
    name: 'Silk Hair Mask',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=400&h=400&fit=crop',
    category: 'hair-care',
    description: 'Intensive repair mask with silk proteins. Transforms dry, brittle hair into silky soft strands.',
  },

  // Body Care
  {
    id: 'body-1',
    name: 'Rose Body Lotion',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    category: 'body-care',
    description: 'Luxurious body lotion with rose extract and shea butter. Deep hydration that lasts all day.',
  },
  {
    id: 'body-2',
    name: 'Exfoliating Body Scrub',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=400&fit=crop',
    category: 'body-care',
    description: 'Gentle yet effective scrub with natural sugar crystals and coconut oil. Reveals smooth, glowing skin.',
  },
  {
    id: 'body-3',
    name: 'Vitamin C Body Serum',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    category: 'body-care',
    description: 'Brightening body serum with vitamin C and hyaluronic acid. Evens skin tone and boosts radiance.',
  },
  {
    id: 'body-4',
    name: 'Lavender Body Oil',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=400&fit=crop',
    category: 'body-care',
    description: 'Relaxing massage oil with pure lavender essential oil. Nourishes skin while calming the senses.',
  },
  {
    id: 'body-5',
    name: 'Hand Cream Trio',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1594461271668-a3a1f2cce589?w=400&h=400&fit=crop',
    category: 'body-care',
    description: 'Three mini hand creams in rose, jasmine, and vanilla. Perfect for on-the-go hydration.',
  },

  // Others
  {
    id: 'other-1',
    name: 'Jade Face Roller',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=400&h=400&fit=crop',
    category: 'others',
    description: 'Authentic jade stone roller for facial massage. Reduces puffiness and promotes lymphatic drainage.',
  },
  {
    id: 'other-2',
    name: 'Makeup Brush Set',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    category: 'others',
    description: '10-piece professional brush set with soft synthetic bristles. Includes case for travel.',
  },
  {
    id: 'other-3',
    name: 'Rose Facial Mist',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1614859324967-6886d3c7d9eb?w=400&h=400&fit=crop',
    category: 'others',
    description: 'Refreshing rose water mist to hydrate and set makeup. Perfect for a midday pick-me-up.',
  },
  {
    id: 'other-4',
    name: 'Silk Sleep Mask',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop',
    category: 'others',
    description: 'Pure mulberry silk sleep mask. Gentle on skin and helps prevent sleep creases.',
  },
  {
    id: 'other-5',
    name: 'Beauty Blender Set',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop',
    category: 'others',
    description: 'Set of 4 makeup sponges for flawless foundation application. Latex-free and reusable.',
  },
];

export const categories = [
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    description: 'Lipsticks, foundations, and more',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop',
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    description: 'Shampoos, treatments & styling',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=400&fit=crop',
  },
  {
    id: 'body-care',
    name: 'Body Care',
    description: 'Lotions, scrubs & body oils',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=400&fit=crop',
  },
  {
    id: 'others',
    name: 'Others',
    description: 'Tools, accessories & more',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop',
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter(p => p.category === category);

export const getFeaturedProducts = () => products.slice(0, 6);