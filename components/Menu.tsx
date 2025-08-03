// components/Menu.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// 1. Sample Data for our menu
const menuData = [
  { id: 1, name: 'Chicken Tikka Masala', description: 'Creamy tomato and chicken curry', price: '£12.50', category: "Chef's Recommendations", img: '/images/curry.jpg' },
  { id: 2, name: 'Margherita Pizza', description: 'Classic cheese and tomato', price: '£9.00', category: 'Pizzas', img: '/images/pizza.jpg' },
  { id: 3, name: 'Lamb Rogan Josh', description: 'Aromatic lamb curry', price: '£13.00', category: 'Popular Curries', img: '/images/curry.jpg' },
  { id: 4, name: 'Gulab Jamun', description: 'Sweet milk solids-based dessert', price: '£4.50', category: 'Desserts', img: '/images/dessert.jpg' },
  { id: 5, name: 'Spicy Pepperoni Pizza', description: 'Loaded with pepperoni', price: '£11.00', category: 'Pizzas', img: '/images/pizza.jpg' },
  { id: 6, name: 'Fish & Chips', description: 'Classic kids favourite', price: '£6.00', category: 'Kids Meals', img: '/images/fish-chips.jpg' },
  { id: 7, name: 'Paneer Butter Masala', description: 'Vegetarian delight', price: '£11.50', category: "Chef's Recommendations", img: '/images/curry.jpg' },
  { id: 8, name: 'Chocolate Fudge Cake', description: 'Rich and decadent', price: '£5.00', category: 'Desserts', img: '/images/dessert.jpg' },
];

// 2. Animation Variants for the container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will make cards appear one by one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

interface MenuProps {
  selectedCategory: string;
}

const Menu = ({ selectedCategory }: MenuProps) => {
  // Filter the menu based on the selected category
  const filteredMenu = menuData.filter(item => item.category === selectedCategory);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 pb-20"
    >
      {filteredMenu.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.1)' }}
          className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://placehold.co/600x400/000000/FFFFFF?text=Food" // Placeholder image
            alt={item.name}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            unoptimized={true} // <-- This is the only change
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
            <p className="text-yellow-400 text-lg font-semibold mt-4">{item.price}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Menu;