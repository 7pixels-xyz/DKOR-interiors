'use client';

import React, { useState, useRef } from 'react';
import { PROJECTS_DATA, Project } from '@/data/projects';
import ProjectEmblem from '@/components/ProjectEmblem';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function CommercialWorkPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Filter for commercial-related projects
  const filteredProjects = PROJECTS_DATA.filter(
    (p) => p.category === 'Commercial'
  );

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section ref={ref} className="relative h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <motion.img 
            src="/work_hero_modern_architecture_1786600909968.jpg"
            alt="DKOR Commercial Portfolio"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay grayscale"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true }}
          className="relative z-10 text-center space-y-6 max-w-3xl mx-auto mt-24"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
            Workspaces & Hospitality
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Commercial Portfolio
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed">
            Elevating brand identity and operational flow through luxury commercial and hospitality design.
          </p>
        </motion.div>
      </section>

      <div className="pb-24 pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {/* Masonry Project Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredProjects.length > 0 ? filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: (idx % 10) * 0.1 }}
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
            )) : (
              <div className="col-span-full py-24 text-center">
                <p className="text-[#555555] font-light text-lg">
                  New commercial projects are currently being curated and will be uploaded shortly.
                </p>
              </div>
            )}
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
