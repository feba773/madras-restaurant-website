// components/About.tsx

'use client';

import { motion } from 'framer-motion';

const storyFeatures = [
  { icon: '🍛', title: 'Authentic Recipes', description: 'Traditional Indian recipes passed down through generations.' },
  { icon: '🌶️', title: 'Fresh Spices', description: 'Hand-ground spices imported directly from India.' },
  { icon: '👨‍🍳', title: 'Expert Chefs', description: 'Skilled chefs with over 15 years of experience.' },
  { icon: '🥘', title: 'Family Recipes', description: 'Secret family recipes from different regions of India.' },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="container mx-auto py-20 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
      <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
        Our journey began in 2008 when we decided to bring the authentic flavors of India to Hamilton. What started as a small family dream has grown into a beloved community restaurant that serves traditional Indian cuisine with love and passion.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {storyFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;