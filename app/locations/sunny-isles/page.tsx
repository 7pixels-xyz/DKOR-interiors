'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="bg-[#F7F7F7] min-h-screen pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">DKOR Interiors</span>
        <h1 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] mt-6">PAGE CURATION</h1>
        <p className="text-[#555555] font-light text-lg mt-8">
          This page is currently being curated. The full experience will be available shortly.
        </p>
      </motion.div>
    </div>
  );
}
