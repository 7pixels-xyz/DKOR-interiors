'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Canvas */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://res.cloudinary.com/dzepmxuve/video/upload/v1786530039/VideoPro_video_stairs_nqxjca.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FAF8F5]/70 via-[#FAF8F5]/90 to-[#FAF8F5]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8C7355]/10 border border-[#8C7355]/20 text-[#8C7355] text-xs uppercase tracking-widest font-semibold mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          20 Years of Award-Winning Luxury Design
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#161513] leading-[1.1] mb-8"
        >
          Designing Dreams <br />
          <span className="italic text-[#8C7355]">Together</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#6B655B] font-normal leading-relaxed mb-10"
        >
          Miami's premier full-service interior design firm creating bespoke residential estates and high-impact commercial environments with complete transparency and uncompromised elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-[#161513] text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-[#8C7355] transition-all duration-300 shadow-xl"
          >
            Explore Portfolio
          </a>
          <a
            href="#process"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#161513]/20 text-[#161513] text-xs uppercase tracking-widest font-semibold rounded-full hover:border-[#8C7355] hover:text-[#8C7355] transition-all duration-300"
          >
            Our Process
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#6B655B] opacity-60">
        <span>Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
}
