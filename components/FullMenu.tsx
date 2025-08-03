// components/FullMenu.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MENU_HIGHLIGHTS, MENU_CATEGORIES, MENU_ITEMS } from '@/lib/data';

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Popular Curries");

  const filteredMenuItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="container mx-auto py-20 px-6">
      {/* Section 1: Main Title and Highlights */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">COMPLETE MENU</h2>
        <p className="text-gray-400 mt-2">Authentic Indian cuisine meets British favourites. From traditional curries to crispy fish & chips, pizzas, and more!</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {MENU_HIGHLIGHTS.map(highlight => (
            <span key={highlight} className="bg-gray-800 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">{highlight}</span>
          ))}
        </div>
      </div>

      {/* Section 2: Filterable Menu Items */}
      <div className="mb-20">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['Popular Curries', 'Pizzas', 'Starters', 'Kebabs'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Grid - UPDATED SECTION */}
        <motion.div
          key={activeCategory} // Re-triggers animation when category changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMenuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={item.img} // Use the image from our data
                  alt={item.name}
                  fill // 'fill' makes the image cover the container
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-gray-400 mt-2 flex-grow">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold text-yellow-400">{item.price}</span>
                  <button className="bg-gray-800 text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition-colors">Add to Order</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section 3: Explore All Categories Grid */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-8">Explore Our Menu Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {MENU_CATEGORIES.map(category => (
            <motion.div
              key={category.name}
              whileHover={{ y: -10 }}
              className="bg-gray-900 p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h4 className="font-bold text-white">{category.name}</h4>
              <p className="text-xs text-gray-400 mt-1">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullMenu;