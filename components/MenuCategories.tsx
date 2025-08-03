// components/MenuCategories.tsx

'use client';

import { motion } from 'framer-motion';

// Define the types for the props we are now receiving
interface MenuCategoriesProps {
  categories: string[];
  selected: string;
  setSelected: (category: string) => void;
}

const MenuCategories = ({ categories, selected, setSelected }: MenuCategoriesProps) => {
  // The useState hook has been removed from here
  
  return (
    <div style={{ perspective: '1000px' }} className="flex flex-col items-center justify-center py-16 bg-black">
      <h2 className="text-3xl font-bold text-white mb-8">Our Menu</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelected(category)}
            // ... the rest of the button code is the same
            className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              selected === category ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ y: -15, rotateY: '20deg', scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {category}
            {selected === category && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500"
                layoutId="underline"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;