'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/projects';
import { X, MapPin, Calendar, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectEmblemProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectEmblem({ project, onClose }: ProjectEmblemProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
            className="w-full max-w-4xl bg-[#FFFFFF] h-full overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image Area */}
            <div className="relative h-[40vh] w-full">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-10 border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-10 left-10 md:left-16 right-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-md mb-4 inline-block">
                    {project.category} Case Study
                  </span>
                  <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                    {project.title}
                  </h2>
                </motion.div>
              </div>
            </div>

            <div className="p-10 md:p-16 space-y-16">
              
              {/* Specs Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-neutral-100 pb-12"
              >
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">Location</p>
                  <p className="font-serif text-lg text-[#1A1A1A]">{project.location}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">Completion</p>
                  <p className="font-serif text-lg text-[#1A1A1A]">{project.year}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">Scale</p>
                  <p className="font-serif text-lg text-[#1A1A1A]">{project.specs.sqft}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">Timeline</p>
                  <p className="font-serif text-lg text-[#1A1A1A]">{project.specs.timeline}</p>
                </div>
              </motion.div>

              {/* Storytelling Narrative */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-3xl space-y-12"
              >
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono text-[#C5A059] mb-4">The Brief</h3>
                  <p className="text-[#555555] text-lg leading-relaxed font-light">
                    The client approached us with a desire for a space that felt both expansive and deeply intimate. The goal was to maintain the structural grandeur of the property while introducing elements of grounded, everyday comfort. {project.description}
                  </p>
                </div>
                
                <div className="pl-6 border-l-2 border-[#C5A059]/20">
                  <h3 className="text-xs uppercase tracking-widest font-mono text-[#C5A059] mb-4">The Challenge</h3>
                  <p className="text-[#555555] text-lg leading-relaxed font-light">
                    Balancing scale with warmth. High ceilings and vast open floor plans often create an acoustic and psychological coldness. We needed to bring the scale down to a human level without compromising the architectural integrity of the {project.category.toLowerCase()} design.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono text-[#C5A059] mb-4">The Concept</h3>
                  <p className="text-[#555555] text-lg leading-relaxed font-light">
                    We anchored the design in tactile, acoustic dampening materials. By dropping the visual weight toward the lower half of the rooms and introducing heavy textiles, we created gravity. The palette was drawn directly from the surrounding {project.location} landscape.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-mono text-[#C5A059] mb-4">The Execution & Result</h3>
                  <p className="text-[#555555] text-lg leading-relaxed font-light">
                    Over the course of {project.specs.timeline}, we procured custom millwork, curated global art pieces, and oversaw white-glove installation. The resulting {project.specs.sqft} estate is not just visually stunning, but psychologically calming—a true sanctuary that perfectly mirrors the client's lifestyle.
                  </p>
                </div>
              </motion.div>

              {/* Palette */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A] mb-6">Material Palette</h3>
                <div className="flex gap-4">
                  {project.palette.map((color, i) => (
                    <div key={i} className="group flex flex-col items-center gap-3">
                      <div 
                        className="w-16 h-16 rounded-full shadow-inner border border-neutral-200 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[9px] font-mono uppercase text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <div className="space-y-8 pt-8">
                <h3 className="text-xs uppercase tracking-widest font-mono text-[#1A1A1A]">Curated Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((imgUrl, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: (idx % 2) * 0.1 }}
                      className={idx === 2 ? 'md:col-span-2' : ''}
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} detail ${idx + 1}`}
                        loading="lazy"
                        className={`w-full object-cover rounded-xl ${idx === 2 ? 'h-[60vh]' : 'h-80 md:h-96'}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-16 pb-8 border-t border-neutral-100 flex justify-between items-center">
                <p className="font-serif text-2xl text-[#1A1A1A]">Inspired by this project?</p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-mono bg-[#1A1A1A] text-white px-8 py-4 rounded-full hover:bg-[#C5A059] transition-colors"
                >
                  Start Yours <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
