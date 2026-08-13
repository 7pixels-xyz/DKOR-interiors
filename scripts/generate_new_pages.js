const fs = require('fs');
const path = require('path');

const dirs = [
  'app/work/residential',
  'app/work/commercial',
  'app/locations/miami',
  'app/locations/palm-beach',
  'app/locations/ft-lauderdale',
  'app/locations/sunny-isles',
  'app/locations/aventura',
  'app/locations',
  'app/press',
  'app/testimonials',
  'app/blog'
];

dirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  
  const pagePath = path.join(fullPath, 'page.tsx');
  let content = '';
  
  if (dir.includes('work/')) {
    const category = dir.split('/').pop().charAt(0).toUpperCase() + dir.split('/').pop().slice(1);
    content = 'use client';\n\nimport React, { useState } from 'react';\nimport { PROJECTS_DATA, Project } from '@/data/projects';\nimport ProjectEmblem from '@/components/ProjectEmblem';\nimport { motion, AnimatePresence } from 'framer-motion';\n\nexport default function WorkPage() {\n  const [selectedProject, setSelectedProject] = useState<Project | null>(null);\n  const filteredProjects = PROJECTS_DATA.filter((p) => p.category === '' || p.category === 'Penthouse' || p.category === 'Coastal');\n\n  return (\n    <div className=\"bg-[#FFFFFF] min-h-screen\">\n      <section className=\"relative h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]\">\n        <div className=\"absolute inset-0 z-0\">\n          <img src=\"/work_hero_modern_architecture_1786600909968.jpg\" alt=\"DKOR Portfolio\" className=\"w-full h-full object-cover opacity-50 mix-blend-overlay\" />\n          <div className=\"absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]\" />\n        </div>\n        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className=\"relative z-10 text-center space-y-6 max-w-3xl mx-auto mt-24\">\n          <span className=\"text-xs uppercase tracking-widest font-mono text-[#5C6B57]\"> Design</span>\n          <h1 className=\"font-serif text-5xl md:text-7xl text-white\"> Portfolio</h1>\n        </motion.div>\n      </section>\n      <div className=\"pb-24 pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-16\">\n        <motion.div layout className=\"columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8\">\n          <AnimatePresence>\n            {filteredProjects.map((p, idx) => (\n              <motion.div key={p.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onClick={() => setSelectedProject(p)} className=\"break-inside-avoid group cursor-pointer\">\n                <div className=\"overflow-hidden rounded-2xl bg-neutral-100 relative\">\n                  <img src={p.coverImage} alt={p.title} loading=\"lazy\" className=\"w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out\" />\n                </div>\n                <div className=\"mt-4 px-2\">\n                  <h3 className=\"font-serif text-xl text-[#1A1A1A]\">{p.title}</h3>\n                  <p className=\"text-[11px] uppercase tracking-widest text-neutral-400 font-mono mt-1\">{p.location}</p>\n                </div>\n              </motion.div>\n            ))}\n          </AnimatePresence>\n        </motion.div>\n        <ProjectEmblem project={selectedProject} onClose={() => setSelectedProject(null)} />\n      </div>\n    </div>\n  );\n}\n;
  } else {
    const title = dir.split('/').pop().replace(/-/g, ' ').toUpperCase();
    content = 'use client';\n\nimport React from 'react';\nimport { motion } from 'framer-motion';\n\nexport default function Page() {\n  return (\n    <div className=\"bg-[#F7F7F7] min-h-screen pt-48 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center\">\n      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className=\"max-w-3xl\">\n        <span className=\"text-xs uppercase tracking-widest font-mono text-[#5C6B57]\">DKOR Interiors</span>\n        <h1 className=\"font-serif text-5xl md:text-7xl text-[#1A1A1A] mt-6\"></h1>\n        <p className=\"text-[#555555] font-light text-lg mt-8\">\n          This page is currently being curated. Our full  experience will be available shortly.\n        </p>\n      </motion.div>\n    </div>\n  );\n}\n;
  }
  
  if (!fs.existsSync(pagePath)) {
    fs.writeFileSync(pagePath, content);
    console.log('Created: ' + pagePath);
  }
});
