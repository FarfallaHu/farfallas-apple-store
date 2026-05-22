// Import local product images using relative path
import pinkIphone from '../assets/iphone15-pink.png';
import iPadMiniPink from '../assets/ipad-mini-pink.png';
import thunderbolt4Cable from '../assets/thunderbolt4-cable.png';
import thunderbolt5Cable from '../assets/thunderbolt5-cable.png';

// Product images from Unsplash
const appleWatchPink = 'https://images.unsplash.com/photo-1560863185-a4f6199b5768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMFdhdGNoJTIwcGluayUyMHNwb3J0JTIwbG9vcHxlbnwxfHx8fDE3Nzk0MTkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const iphone13Pink = 'https://images.unsplash.com/photo-1636108840454-8fbe394c7837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpUGhvbmUlMjAxMyUyMHBpbmt8ZW58MXx8fHwxNzc5NDE5MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080';
const iPadProSilver = 'https://images.unsplash.com/photo-1585789720700-12aa07b4a58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpUGFkJTIwUHJvJTIwc2lsdmVyJTIwMTIuOXxlbnwxfHx8fDE3Nzk0MTkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080';
const imac27 = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpTWFjJTIwMjclMjBpbmNoJTIwUmV0aW5hJTIwZGlzcGxheXxlbnwxfHx8fDE3Nzk0MTkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const airpods4 = 'https://images.unsplash.com/photo-1628588287089-c2925c16c52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBaXJQb2RzJTIwNCUyMHdoaXRlJTIwY2FzZXxlbnwxfHx8fDE3Nzk0MTkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const airpods3 = 'https://images.unsplash.com/photo-1592507595940-edcec54727e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxBaXJQb2RzJTIwNCUyMHdoaXRlJTIwY2FzZXxlbnwxfHx8fDE3Nzk0MTkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080';

export interface Product {
  id: string;
  name: string;
  category: 'Mac' | 'iPhone' | 'iPad' | 'Watch' | 'Audio' | 'Accessories';
  description: string;
  image: string;
  specs?: string;
  purchaseDate?: string;
  appleId?: string;
}

export const products: Product[] = [
  {
    id: '3',
    name: 'iPad Pro 12.9" (5th Gen)',
    category: 'iPad',
    description: 'Your next computer is not a computer.',
    image: iPadProSilver,
    specs: 'M1 • 256GB • Silver',
    purchaseDate: 'Mar 2023',
    appleId: 'fhu-en'
  },
  {
    id: '4',
    name: 'iPad Mini (6th Gen)',
    category: 'iPad',
    description: 'Mega power. Mini size.',
    image: iPadMiniPink,
    specs: 'A15 Bionic • 256GB • Pink',
    purchaseDate: '2021',
    appleId: '261-cn'
  },
  {
    id: '5',
    name: 'AirPods Pro',
    category: 'Audio',
    description: 'Adaptive Audio. Hear what matters.',
    image: 'https://images.unsplash.com/photo-1623788728910-23180a99871d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBaXJQb2RzJTIwUHJvJTIwd2hpdGUlMjBjYXNlfGVufDF8fHx8MTc2ODM2MDAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: 'USB-C • Model A3048',
    purchaseDate: 'Sep 2023',
    appleId: '469-en'
  },
  {
    id: '6',
    name: 'Thunderbolt 4 Pro Cable',
    category: 'Accessories',
    description: 'Fast. Versatile. Beautifully braided.',
    image: thunderbolt4Cable,
    specs: 'USB-C • 1.8m • Black',
    purchaseDate: '2023'
  },
  {
    id: '7',
    name: 'Mac Studio',
    category: 'Mac',
    description: 'M1 Ultra. Small footprint, massive performance.',
    image: 'https://images.unsplash.com/photo-1660289555054-f4e60b0883d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWMlMjBTdHVkaW8lMjBBcHBsZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc2ODMzNTk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: 'M1 Ultra • 128GB RAM • 8TB SSD',
    purchaseDate: 'Mar 2022',
    appleId: 'fhu-en'
  },
  {
    id: '8',
    name: 'MacBook Air M1',
    category: 'Mac',
    description: 'Gold. Power. It’s in the Air.',
    image: 'https://images.unsplash.com/photo-1658915370148-0cfed8929e92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb3NlJTIwR29sZCUyME1hY0Jvb2slMjBBaXIlMjBsYXB0b3B8ZW58MXx8fHwxNzY4MzM2MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: 'M1 • 8GB RAM • 256GB SSD',
    purchaseDate: '2020',
    appleId: 'fhu-en'
  },
  {
    id: '9',
    name: 'iPhone 16 Pro',
    category: 'iPhone',
    description: 'Desert Titanium. Built for Apple Intelligence.',
    image: 'https://images.unsplash.com/photo-1671038374744-fe17decc8ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNCUyMFBybyUyMGdvbGR8ZW58MXx8fHwxNzY4MzM2NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specs: 'Desert Titanium • 256GB',
    purchaseDate: '2024',
    appleId: '469-en'
  },
  {
    id: '10',
    name: 'iPhone 15',
    category: 'iPhone',
    description: 'Pink. Dynamic Island. New 48MP camera.',
    image: pinkIphone,
    specs: 'Pink • 128GB',
    purchaseDate: '2023',
    appleId: 'fhu-en'
  },
  {
    id: '11',
    name: 'Apple Watch Series 9',
    category: 'Watch',
    description: 'Smarter. Brighter. Mightier.',
    image: appleWatchPink,
    specs: 'Pink Aluminum • Sport Loop',
    purchaseDate: '2023',
    appleId: '469-en'
  },
  {
    id: '12',
    name: 'iPhone 13',
    category: 'iPhone',
    description: 'Your new superpower.',
    image: iphone13Pink,
    specs: 'Pink • 128GB',
    purchaseDate: '2021',
    appleId: '261-cn'
  },
  {
    id: '13',
    name: 'Thunderbolt 5 Pro Cable',
    category: 'Accessories',
    description: 'Blazing fast. Professional grade.',
    image: thunderbolt5Cable,
    specs: 'USB-C • 1m • Black',
    purchaseDate: '2024'
  },
  {
    id: '14',
    name: 'iMac 27" (2019)',
    category: 'Mac',
    description: 'Retina 5K Display. Powerful performance.',
    image: imac27,
    specs: 'Intel Core i5 • 8GB RAM • 1TB Fusion Drive',
    purchaseDate: '2019',
    appleId: 'fhu-en'
  },
  {
    id: '15',
    name: 'AirPods 4 (ANC)',
    category: 'Audio',
    description: 'Iconic design. Now with Active Noise Cancellation.',
    image: airpods4,
    specs: 'USB-C • Model A3056',
    purchaseDate: 'Sep 2024',
    appleId: '469-en'
  },
  {
    id: '16',
    name: 'AirPods 3',
    category: 'Audio',
    description: 'Spatial audio. Adaptive EQ. All-new design.',
    image: airpods3,
    specs: 'Lightning • Model A2564',
    purchaseDate: 'Oct 2021',
    appleId: '469-en'
  }
];