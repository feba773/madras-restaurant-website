// components/Hero.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HERO_STATS } from '@/lib/data'; // Import our new stats data

const Hero = () => {
  return (
    <section id="home" className="container mx-auto pt-32 pb-20 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Authentic Indian Flavors, <br />
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Traditional Recipes
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            Experience the rich heritage of Indian cuisine with our authentic dishes, prepared using traditional spices and time-honored cooking methods passed down through generations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-colors hover:bg-yellow-400"
            >
              View Our Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors hover:bg-gray-700"
            >
              Order Takeaway
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="/hero-image.jpg" // The image you just saved in /public
            alt="Authentic Indian Dish"
            width={500}
            height={500}
            className="rounded-full object-cover shadow-2xl shadow-yellow-500/20"
            priority // Helps load the image faster as it's above the fold
          />
        </motion.div>
      </div>

      {/* Stats Section Below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
      >
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-white">{stat.value}</p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;