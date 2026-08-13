'use client';

import React, { useState, useRef } from 'react';
import { PROJECTS_DATA, Project } from '@/data/projects';
import ProjectEmblem from '@/components/ProjectEmblem';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Coastal', 'Penthouse', 'Residential', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 origin-center">
          <motion.div
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="/work_hero_modern_architecture_1786600909968.jpg"
              alt="DKOR Portfolio"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </motion.div>
        
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 text-center space-y-4 md:space-y-6 max-w-3xl mx-auto mt-20 md:mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
              Portfolio Architecture
            </span>
            <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight mt-2 md:mt-4">
              Curated Works
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-white/70 text-base md:text-lg font-light leading-relaxed px-4 md:px-0"
          >
            A comprehensive archive of over 100 high-end residential and commercial transformations. Each project is a testament to our dedication to material integrity and spatial harmony.
          </motion.p>
        </motion.div>
      </section>

      <div className="pb-16 pt-12 md:pb-24 md:pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-10 md:space-y-16 relative z-20 bg-white">

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-row overflow-x-auto md:flex-wrap justify-start md:justify-center items-center gap-2 md:gap-6 pb-4 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest transition-all duration-500 ${
                activeCategory === cat
                  ? 'bg-[#1A1A1A] text-white shadow-lg shadow-black/10'
                  : 'bg-[#E6E8E3] text-neutral-500 hover:bg-neutral-200 hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Project Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: (idx % 10) * 0.1, ease: [0.76, 0, 0.24, 1] }}
                onClick={() => setSelectedProject(p)}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-neutral-100 relative">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.25,1,0.5,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                    <span className="text-white text-xs font-mono uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[0.25,1,0.5,1]">
                      View Case Study
                    </span>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#5C6B57] transition-colors duration-300">{p.title}</h3>
                  <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-mono mt-1">{p.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectEmblem
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
