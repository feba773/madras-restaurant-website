// lib/data.ts

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const HERO_STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '100+', label: 'Authentic Dishes' },
  { value: '5★', label: 'Customer Rated' },
];

export const MENU_HIGHLIGHTS = [
  'Milkshakes', 'Box Meals', 'Pizza Deals', 'Munchy Boxes', 'Rice Boxes', 'Meal Deals'
];

// REPLACE your old MENU_CATEGORIES with this one
export const MENU_CATEGORIES = [
  {
    name: 'Starters',
    description: 'Crispy samosas, pakoras, and tandoori appetizers.',
    icon: '🍛',
  },
  {
    name: 'Popular Curries',
    description: 'Butter chicken, lamb korma, and aromatic masalas.',
    icon: '🌶️',
  },
  {
    name: 'Chef\'s Recommendations',
    description: 'Signature dishes crafted by our master chef.',
    icon: '👨‍🍳',
  },
  {
    name: 'Pizzas',
    description: 'Fusion pizzas with Indian spices and toppings.',
    icon: '🍕',
  },
  {
    name: 'Burgers',
    description: 'Spicy chicken tikka and tandoori lamb burgers.',
    icon: '🍔',
  },
  {
    name: 'Kebabs',
    description: 'Seekh kebabs, shish kebabs, and tandoori specialties.',
    icon: '🍢',
  },
  {
    name: 'Biryanis',
    description: 'Aromatic basmati rice with chicken, lamb, or vegetables.',
    icon: '🍚',
  },
  {
    name: 'Meal Deals',
    description: 'Complete meals with curry, rice, naan, and sides.',
    icon: '🥡',
  },
  {
    name: 'Kids Meals',
    description: 'Mild, kid-friendly curry dishes and snacks.',
    icon: '🧒',
  },
  {
    name: 'Desserts',
    description: 'Kulfi, gulab jamun, and traditional Indian sweets.',
    icon: '🍰',
  },
];

// lib/data.ts - Alternative Code

export const MENU_ITEMS = [
  { id: 1, name: 'Pizza Munchy Box Deal 12"', description: 'Complete pizza munchy box with all the favourites.', price: '£23.99', category: "Pizza Deals", isPopular: true, img: '/pizza.jpg' },
  { id: 2, name: 'Cheese Pizza', description: 'Freshly baked cheese pizza.', price: 'from £5.99', category: 'Pizzas', isPopular: false, img: '/pizza.jpg' },
  { id: 3, name: 'Any Curry Pizza', description: 'Pizza with your choice of curry topping.', price: 'from £6.99', category: 'Pizzas', isPopular: false, img: '/pizza.jpg' },
  { id: 4, name: 'Chicken Pakora', description: 'Crispy chicken pakora with salad and sauce.', price: 'from £7.99', category: 'Starters', isPopular: true, img: '/pakora.jpg' },
  { id: 5, name: 'Chicken Tikka Masala', description: 'Creamy tomato and chicken curry.', price: '£12.50', category: 'Popular Curries', isPopular: true, img: '/tikka.jpg' },
  { id: 6, name: 'Lamb Rogan Josh', description: 'Aromatic lamb curry.', price: '£13.00', category: 'Popular Curries', isPopular: false, img: '/lamp.jpg' },
  { id: 7, name: 'Tandoori Seekh Kebab', description: 'Spiced minced lamb cooked on skewers in the tandoor.', price: '£8.50', category: 'Kebabs', isPopular: true, img: '/kebab.jpg' },
  { id: 8, name: 'Gulab Jamun', description: 'Sweet milk solids-based dessert.', price: '£4.50', category: 'Desserts', isPopular: false, img: '/dessert.jpg' },
  { id: 9, name: 'Chicken Korma', description: 'A mild, creamy curry with coconut and almonds.', price: '£11.99', category: 'Popular Curries', isPopular: true, img: '/pakora.jpg' },
  { id: 10, name: 'King Prawn Bhuna', description: 'A rich, medium-spiced curry with fresh tomatoes and onions.', price: '£14.50', category: 'Popular Curries', isPopular: false, img: '/prawn.jpg' },
];


export const CONTACT_INFO = {
  address: '277 Glasgow Rd, Hamilton ML3 0QG, Scotland, United Kingdom',
  phone: '+44 1698 451222',
  email: 'info@madras.com',
  hours: [
    'Mon-Thu: 4:30 PM - 11:00 PM',
    'Fri-Sat: 4:30 PM - 12:00 AM',
    'Sun: 4:30 PM - 11:00 PM',
  ],
};