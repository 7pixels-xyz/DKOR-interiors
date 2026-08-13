'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any } 
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
