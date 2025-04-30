'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 h-screen w-full">
      {/* Solid color base */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-blue-50" />
      
      {/* Blobs with higher opacity */}
      <motion.div 
        className="absolute w-[40rem] h-[40rem] bg-orange-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* ... other blob elements ... */}
    </div>
  );
}