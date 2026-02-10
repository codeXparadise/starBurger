import { MenuItem, Review, LocationInfo } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reels', href: '#reels' },
  { name: 'Locations', href: '#locations' },
];

export const IMAGES = {
  brand: {
    logo: '/assets/logo.png',
    videoIntro: '/assets/video_1.mp4',
    videoReel: '/assets/video_2.mp4',
  },
  hero: {
    main: '/assets/hero_burger.jpg',
    flying: '/assets/flying_burger.jpg',
  },
  decor: {
    basil: '/assets/basil.png',
    pepper: '/assets/pepper.png',
    leaf: '/assets/leaf.png',
    mushroom: '/assets/mushroom.png',
    tomato: '/assets/tomato.png',
    onion: '/assets/onion.png',
  },
  ads: {
    pain: '/assets/fixing_pain.jpg',
    fresh: '/assets/fresh_premium.jpg',
    warned: '/assets/warning.jpg',
    waiting: '/assets/still_waiting.jpg',
    delivery: '/assets/delivery.jpg',
    insist: '/assets/we_insist.jpg',
    ingredients: '/assets/whats_inside.jpg',
  },
  products: {
    happy: '/assets/happy_meal.jpg',
    drinks: '/assets/shakes.jpg',
    mexican: '/assets/mexican_burger.jpg',
    cheese: '/assets/cheese_burger.jpg',
    crunchy: '/assets/crunchy_burger.jpg',
    crave: '/assets/crave_crunch.jpg',
  },
  placeholders: {
    story1: "/assets/fresh_premium.jpg",
    social1: "/assets/happy_meal.jpg",
    social2: "/assets/shakes.jpg",
    social3: "/assets/mexican_burger.jpg",
    social4: "/assets/warning.jpg"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Portobello Magic',
    description: 'Grilled portobello mushroom, swiss cheese, garlic aioli.',
    price: 18.99,
    category: 'veggie',
    tags: ['Veggie']
  },
  {
    id: '2',
    name: 'Crispy Chick\'n Crunch',
    description: 'Fried chicken breast, spicy mayo, pickles, coleslaw.',
    price: 11.99,
    category: 'veggie'
  },
  {
    id: '3',
    name: 'Paneer Tikka Burger',
    description: 'Spiced paneer steak, onions, mint chutney.',
    price: 9.49,
    category: 'veggie'
  },
  {
    id: '4',
    name: 'Spicy Bean Volcano',
    description: 'Black bean patty, jalapeños, pepper jack cheese.',
    price: 8.99,
    category: 'veggie'
  },
  {
    id: '5',
    name: 'The Powerhouse',
    description: 'Double beef patty, bacon, cheddar, onion rings, BBQ sauce.',
    price: 13.99,
    category: 'beef',
    tags: ['Best Seller']
  },
  {
    id: '6',
    name: 'BBQ Melt Down',
    description: 'Beef patty, caramelized onions, gouda, smoky BBQ.',
    price: 10.99,
    category: 'beef'
  },
  {
    id: '7',
    name: 'Meat Lover\'s Supreme',
    description: 'Beef patty, pulled pork, ham, sausage, american cheese.',
    price: 14.49,
    category: 'beef'
  },
  {
    id: '8',
    name: 'Peri Peri Punch',
    description: 'Beef patty, peri peri sauce, lettuce, tomato.',
    price: 10.99,
    category: 'beef'
  },
  {
    id: '9',
    name: 'Extra Cheese',
    description: '',
    price: 1.99,
    category: 'sides'
  },
  {
    id: '10',
    name: 'Garlic Dip',
    description: '',
    price: 0.99,
    category: 'sides'
  },
  {
    id: '11',
    name: 'Choco Lava Cake',
    description: 'Decadent chocolate center',
    price: 4.99,
    category: 'desserts'
  },
  {
    id: '12',
    name: 'Strawberry Milkshake',
    description: 'Real fruit, whipped cream',
    price: 5.49,
    category: 'drinks'
  }
];

export const TOP_PICKS = [
  {
    id: 'tp1',
    name: 'Mexican Tanginess',
    price: 12,
    image: IMAGES.products.mexican
  },
  {
    id: 'tp2',
    name: 'The Cheese Explosion',
    price: 14,
    image: IMAGES.products.cheese
  },
  {
    id: 'tp3',
    name: 'Chatpata Crunch',
    price: 16,
    image: IMAGES.products.crunchy
  },
  {
    id: 'tp4',
    name: 'Crave The Crunch',
    price: 15,
    image: IMAGES.products.crave
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    text: "I'm not usually a burger person, but that Star Sauce completely changed my life. Unreal!",
    author: "Sasha T.",
    location: "New York",
    rating: 5,
    color: "bg-[#FFF740]",
    rotation: -2
  },
  {
    id: 'r2',
    text: "The best bun in town — crispy on the outside, soft inside. I dream about their Cheesy Star Special.",
    author: "Mark",
    location: "Vermont",
    rating: 4.5,
    color: "bg-[#FF9E9E]",
    rotation: 3
  },
  {
    id: 'r3',
    text: "Fast delivery, super fresh, and piping hot! Their combo meal is a weekend ritual for me.",
    author: "Billy Vasquez",
    location: "",
    rating: 5,
    color: "bg-[#A7F3D0]",
    rotation: -1
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'l1',
    name: "Downtown's Burger Spot",
    address: "7628 Sunset Blvd, Los Angeles, CA 90028",
    phone: "(213) 555-1299",
    hours: "Mon - Sun: 11:00 AM - 10:30 PM",
    type: 'hq'
  },
  {
    id: 'l2',
    name: "Beachside Buns & Bites",
    address: "1501 Ocean Front Walk, Venice, CA 90291",
    phone: "(310) 555-7890",
    hours: "Mon - Sun: 12:00 PM - 11:00 PM",
    type: 'beach'
  }
];