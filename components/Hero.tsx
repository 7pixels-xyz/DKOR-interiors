'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-[#E6E8E3]">
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#5C6B57] animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-600">
            North Miami Studio • High-End Interior Design
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-[1.08] tracking-tight">
          Crafting Homes That <br />
          <span className="italic font-normal text-neutral-600">Evoke Emotion</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-neutral-600 text-base md:text-lg leading-relaxed font-sans font-light">
          DKOR Interiors transforms luxury residential properties across South Florida into bespoke, living art pieces designed for effortless living.
        </motion.p>

        <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#5C6B57] transition-all duration-300"
          >
            <span>Explore Portfolio</span>
            <ArrowDownRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-neutral-300 text-[#1A1A1A] px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:border-[#1A1A1A] transition-all duration-300"
          >
            Request Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
