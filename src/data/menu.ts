export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  available: boolean;
  featured?: boolean;
  formula?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Wok Tossed Chicken with Fries
  {
    id: 'wtcf-1',
    name: 'Toss8 Chili Chicken & Fries',
    description: 'Tossed chicken with fries in a spicy chilli glaze.',
    price: 1050,
    category: 'Wok Tossed Chicken with Fries',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/TOSS8%20Chilli%20Chicken%20And%20Fries%20(2).webp',
    available: true,
    featured: true,
    formula: 'F-101'
  },
  {
    id: 'wtcf-2',
    name: 'Hot Garlic Chicken & Fries',
    description: 'Chicken & fries coated in bold garlic sauce.',
    price: 1050,
    category: 'Wok Tossed Chicken with Fries',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Hot%20Garlic%20Chicken%20&%20Fries.webp',
    available: true,
    formula: 'F-102'
  },
  {
    id: 'wtcf-3',
    name: 'Kung Pao Chicken & Fries',
    description: 'Sweet spicy chicken & fries with light crunch.',
    price: 1050,
    category: 'Wok Tossed Chicken with Fries',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Kung%20Pao%20Chicken%20&%20Fries.webp',
    available: true,
    formula: 'F-103'
  },
  {
    id: 'wtcf-4',
    name: 'TOSS8 Manchurian Chicken & Fries',
    description: 'Classic Manchurian chicken & fries.',
    price: 1050,
    category: 'Wok Tossed Chicken with Fries',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/TOSS8%20MANCHURIAN%20chicken%20&%20fries.webp',
    available: true,
    formula: 'F-104'
  },
  {
    id: 'wtcf-5',
    name: 'Dynamite Chicken & Fries',
    description: 'Crispy chicken & fries in creamy spicy sauce.',
    price: 1200,
    category: 'Wok Tossed Chicken with Fries',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Dynamite%20Chicken%20&%20Fries.webp',
    available: true,
    featured: true,
    formula: 'F-105'
  },
  // Wok Tossed Beef
  {
    id: 'wtb-1',
    name: 'Beef Chilli Dry & Fries',
    description: 'Wok tossed beef with bold chilli heat.',
    price: 1250,
    category: 'Wok Tossed Beef',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Beef%20Chilli%20Dry%20And%20Fries.webp',
    available: true,
    formula: 'F-201'
  },
  {
    id: 'wtb-2',
    name: 'Hendry Beef & Fries',
    description: 'Savory wok tossed beef with fries.',
    price: 1250,
    category: 'Wok Tossed Beef',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Hendry%20Beef%20&%20Fries.webp',
    available: true,
    formula: 'F-202'
  },
  {
    id: 'wtb-3',
    name: 'Beef Chilli Dry with Garlic Rice',
    description: 'Chilli beef paired with garlic sticky rice.',
    price: 1250,
    category: 'Wok Tossed Beef',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Beef%20Chilli%20Dry%20With%20Garlic%20Rice.webp',
    available: true,
    formula: 'F-203'
  },
  {
    id: 'wtb-4',
    name: 'Hendry Beef with Garlic Rice',
    description: 'Balanced hendry flavor served with sticky rice.',
    price: 1250,
    category: 'Wok Tossed Beef',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Hendry%20Beef%20With%20Garlic%20Rice.webp',
    available: true,
    formula: 'F-204'
  },
  // Wok Tossed Noodles
  {
    id: 'wtn-1',
    name: 'Chicken Noodles',
    description: 'Chicken noodles served with 2 pieces of dumplings.',
    price: 1150,
    category: 'Wok Tossed Noodles',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Chicken%20Noodels.webp',
    available: true,
    formula: 'F-301'
  },
  {
    id: 'wtn-2',
    name: 'Szechuan Noodles',
    description: 'Spicy noodles with 2 pieces of wings.',
    price: 1150,
    category: 'Wok Tossed Noodles',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Szechuan%20Noodles.webp',
    available: true,
    formula: 'F-302'
  },
  {
    id: 'wtn-3',
    name: 'Chili Noodles',
    description: 'Chilli noodles served with 3 pieces of wings.',
    price: 1300,
    category: 'Wok Tossed Noodles',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Chilli%20Noodles.webp',
    available: true,
    featured: true,
    formula: 'F-303'
  },
  // Wok Tossed Chicken With Sticky Rice
  {
    id: 'wtcr-1',
    name: 'Hendry Chicken',
    description: 'Served with sticky rice, slightly sweet and balanced.',
    price: 1100,
    category: 'Wok Tossed Chicken With Sticky Rice',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Hendry%20Chicken%20With%20Rice.webp',
    available: true,
    formula: 'F-401'
  },
  {
    id: 'wtcr-2',
    name: 'Chicken Chili Dry',
    description: 'Served with sticky rice, slightly sweet and balanced.',
    price: 1100,
    category: 'Wok Tossed Chicken With Sticky Rice',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Chicken%20Chilli%20Dry%20With%20Rice.webp',
    available: true,
    formula: 'F-402'
  },
  {
    id: 'wtcr-3',
    name: 'TOSS8 Special Chicken',
    description: 'Signature flavor profile, served with sticky rice.',
    price: 1100,
    category: 'Wok Tossed Chicken With Sticky Rice',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/TOSS8%20Special%20Chicken.webp',
    available: true,
    featured: true,
    formula: 'F-403'
  },
  {
    id: 'wtcr-4',
    name: 'Chicken Manchurian',
    description: 'Manchurian chicken paired with garlic sticky rice.',
    price: 1100,
    category: 'Wok Tossed Chicken With Sticky Rice',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Chicken%20Manchuurian%20With%20Rice.webp',
    available: true,
    formula: 'F-404'
  },
  {
    id: 'wtcr-5',
    name: 'Kung Pao Chicken',
    description: 'Sweet spicy chicken with garlic sticky rice.',
    price: 1200,
    category: 'Wok Tossed Chicken With Sticky Rice',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Kung%20Pao%20Chicken%20(With%20Rice).webp',
    available: true,
    formula: 'F-405'
  },
  // Wok Tossed Wings
  {
    id: 'wtw-1',
    name: 'Hot Garlic Wings',
    description: 'Garlic flavored wings with mild spice. (6 pieces)',
    price: 950,
    category: 'Wok Tossed Wings',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Hot%20Garlic%20Wings.webp',
    available: true,
    formula: 'F-501'
  },
  {
    id: 'wtw-2',
    name: 'Toss8 Chili Wings',
    description: 'Spicy, saucy and fully coated. (6 pieces)',
    price: 950,
    category: 'Wok Tossed Wings',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/TOSS8%20Chilli%20Wings.webp',
    available: true,
    formula: 'F-502'
  },
  {
    id: 'wtw-3',
    name: 'Tamarind Wings',
    description: 'Tangy glaze with slight sweetness. (6 pieces)',
    price: 950,
    category: 'Wok Tossed Wings',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Tamarind%20Wings.webp',
    available: true,
    formula: 'F-503'
  },
  // Wok Tossed Dumplings
  {
    id: 'wtd-1',
    name: 'Kung Pao Dumplings',
    description: 'Wok tossed sweet and spicy.',
    price: 1050,
    category: 'Wok Tossed Dumplings',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Kung%20Pao%20Duumplings.webp',
    available: true,
    formula: 'F-601'
  },
  {
    id: 'wtd-2',
    name: 'TOSS8 Chilli Dumplings',
    description: 'Dumplings tossed in a light chilli glaze.',
    price: 1050,
    category: 'Wok Tossed Dumplings',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/TOSS8%20Chilli%20Dumplings.webp',
    available: true,
    formula: 'F-602'
  },
  // Add Ons
  {
    id: 'ao-1',
    name: 'Dynamite Sauce',
    description: 'Creamy with a light spicy kick.',
    price: 100,
    category: 'Add Ons',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Dynamite%20Sauce.webp',
    available: true,
    formula: 'AO-01'
  },
  {
    id: 'ao-2',
    name: 'House Mayo Sauce',
    description: 'Smooth, neutral, easy pairing.',
    price: 100,
    category: 'Add Ons',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/House%20Mayo.webp',
    available: true,
    formula: 'AO-02'
  },
  // Deals
  {
    id: 'deal-1',
    name: 'Deal 1 Chicken Combo',
    description: '1 Kung Pao Chicken & Fries • 1 Chicken Manchurian With Rice • 1 Half Litre Drink',
    price: 2100,
    category: 'Deals',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Deal%201.webp',
    available: true,
    featured: true,
    formula: 'DEAL-01'
  },
  {
    id: 'deal-2',
    name: 'Deal 2 Beef & Noodles Combo',
    description: '1 Beef Chilli Dry & Fries • 1 Chicken Noodles • 1 Half Litre Drink',
    price: 2350,
    category: 'Deals',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Deal%202.webp',
    available: true,
    formula: 'DEAL-02'
  },
  {
    id: 'deal-3',
    name: 'Deal 3 Ultimate Snack Combo',
    description: '1 Chicken Noodles • 1 Kung Pao Dumplings • 1 TOSS8 Chilli Wings • 1 Litre Drink',
    price: 3050,
    category: 'Deals',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Deal%203.webp',
    available: true,
    formula: 'DEAL-03'
  },
  {
    id: 'deal-4',
    name: 'Deal 4 Loaded Combo',
    description: '1 Kung Pao Chicken & Fries • 1 Chicken Manchurian With Rice • 1 Beef Chilli Dry & Fries • 1 Litre Drink',
    price: 3300,
    category: 'Deals',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Deal%204.webp',
    available: true,
    formula: 'DEAL-04'
  },
  {
    id: 'deal-5',
    name: 'Deal 5 Family Combo',
    description: '1 Kung Pao Chicken & Fries • 1 Chicken Manchurian With Rice • 1 Beef Chilli Dry & Fries • 1 TOSS8 Chilli Dumplings • 1 1.5 Litre Drink',
    price: 4350,
    category: 'Deals',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Deal%205.webp',
    available: true,
    featured: true,
    formula: 'DEAL-05'
  },
  // Beverages
  {
    id: 'bev-1',
    name: 'Coke Classic',
    description: '1.5 Litre',
    price: 240,
    category: 'Beverages',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Coke%20Classic.webp',
    available: true,
    formula: 'B-001'
  },
  {
    id: 'bev-2',
    name: 'Coke Zero Sugar',
    description: 'Can',
    price: 160,
    category: 'Beverages',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Coke%20Zero%20Sugar.webp',
    available: true,
    formula: 'B-002'
  },
  {
    id: 'bev-3',
    name: 'Sprite',
    description: '1.5 Litre',
    price: 240,
    category: 'Beverages',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Sprite.webp',
    available: true,
    formula: 'B-003'
  },
  {
    id: 'bev-4',
    name: 'Fanta',
    description: '1.5 Litre',
    price: 240,
    category: 'Beverages',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Fanta.webp',
    available: true,
    formula: 'B-004'
  },
  {
    id: 'bev-5',
    name: 'Dasani Water',
    description: 'Large',
    price: 150,
    category: 'Beverages',
    imageUrl: 'https://iqknvwaqtdmmtqipacmm.supabase.co/storage/v1/object/public/images/Dasani%20WATER.webp',
    available: true,
    formula: 'B-005'
  }
];
