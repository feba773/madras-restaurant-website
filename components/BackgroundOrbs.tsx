// components/BackgroundOrbs.tsx

'use client';

import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
  return (
    // This container is fixed to the viewport and sits behind everything else
    <div className="fixed inset-0 -z-10">
      {/* Orb 1 */}
      <motion.div
        className="absolute top-[10%] left-[5%] h-[200px] w-[200px] rounded-full bg-yellow-500/50 blur-3xl"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, -50, 100, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      {/* Orb 2 */}
      <motion.div
        className="absolute top-[20%] right-[10%] h-[250px] w-[250px] rounded-full bg-red-500/40 blur-3xl"
        animate={{
          x: [0, -80, 0, 120, 0],
          y: [0, 120, -80, 0, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
       {/* Orb 3 */}
       <motion.div
        className="absolute bottom-[15%] left-[20%] h-[180px] w-[180px] rounded-full bg-pink-500/50 blur-3xl"
        animate={{
          x: [0, 50, -100, 0, 0],
          y: [0, -100, 0, 80, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;