'use client';

import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '@/data/projects';
import ProjectEmblem from '@/components/ProjectEmblem';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Coastal', 'Penthouse', 'Residential', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/work_hero_modern_architecture_1786600909968.jpg"
            alt="DKOR Portfolio"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center space-y-6 max-w-3xl mx-auto mt-24"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
            Portfolio Architecture
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Curated Works
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            A comprehensive archive of over 100 high-end residential and commercial transformations. Each project is a testament to our dedication to material integrity and spatial harmony.
          </p>
        </motion.div>
      </section>

      <div className="pb-24 pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-16">

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-6"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
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
          <AnimatePresence>
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (idx % 10) * 0.05 }}
                onClick={() => setSelectedProject(p)}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-neutral-100 relative">
                  <img
                    src={p.coverImage}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-white text-xs font-mono uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      View Case Study
                    </span>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#5C6B57] transition-colors">{p.title}</h3>
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
