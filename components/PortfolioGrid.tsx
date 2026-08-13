'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#161513] mb-4">
              Featured Works
            </h2>
            <p className="text-[#6B655B] max-w-lg">
              Explore our curated selection of bespoke residential estates and high-impact commercial environments.
            </p>
          </div>
          
          <div className="flex gap-4">
            {['All', 'Residential', 'Commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as typeof filter)}
                className={`text-xs uppercase tracking-widest font-semibold pb-2 border-b-2 transition-all ${
                  filter === cat ? 'border-[#8C7355] text-[#161513]' : 'border-transparent text-[#6B655B] hover:text-[#161513]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#E6DFD3] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowUpRight className="w-5 h-5 text-[#161513]" />
                  </div>
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#161513] mb-2">{project.title}</h3>
                    <p className="text-sm text-[#6B655B]">{project.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-[#8C7355]/10 text-[#8C7355] text-[10px] uppercase tracking-widest font-semibold rounded-full">
                      {project.subcategory}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
