// components/Header.tsx

'use client';

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          MADRAS
        </div>
        <nav className="flex items-center gap-6">
          <a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;