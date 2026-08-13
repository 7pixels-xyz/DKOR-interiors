'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    
    if (hasSeenPreloader) {
      setIsLoading(false);
      return;
    }

    // Hide preloader after a delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }, 2500); // 2.5s cinematic load

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100vh',
            transition: { 
              duration: 1.2, 
              ease: [0.76, 0, 0.24, 1] // Cinematic easing (circ/expo like)
            }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1A1A1A] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: 'blur(0px)',
              transition: { duration: 1, ease: 'easeOut', delay: 0.2 } 
            }}
            exit={{ 
              opacity: 0, 
              y: -50,
              transition: { duration: 0.6, ease: 'easeIn' } 
            }}
            className="flex flex-col items-center"
          >
            <img 
              src="https://res.cloudinary.com/dzepmxuve/image/upload/v1786606490/DKOR_INTERIORS_LOGO_zpo4nh.webp" 
              alt="DKOR Interiors" 
              className="w-48 md:w-64 brightness-0 invert opacity-90"
            />
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              className="w-32 h-[1px] bg-white/30 mt-8 origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
