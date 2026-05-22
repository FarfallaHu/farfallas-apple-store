import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative w-full bg-[#f5f5f7] overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-[2560px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1d1d1f]"
        >
          My Ecosystem
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-xl md:text-2xl text-[#1d1d1f] max-w-2xl"
        >
          A curated collection of the products that empower my creativity and productivity.
        </motion.p>
      </div>
    </section>
  );
}