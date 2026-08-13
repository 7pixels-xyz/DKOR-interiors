'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    number: '01',
    title: 'Consultation & Discovery',
    description: 'We begin by understanding your vision, lifestyle, and aesthetic preferences. This collaborative phase sets the foundation for a truly bespoke design.'
  },
  {
    number: '02',
    title: 'Conceptual Design',
    description: 'Our team develops comprehensive design concepts, including mood boards, space planning, and preliminary material selections to bring your vision to life.'
  },
  {
    number: '03',
    title: 'Design Development',
    description: 'Refining every detail. We create detailed architectural drawings, custom millwork designs, and finalize all fixtures, finishes, and furnishings.'
  },
  {
    number: '04',
    title: 'Procurement & Installation',
    description: 'From purchasing to project management, our team oversees the entire execution. We conclude with a seamless installation, delivering a turnkey experience.'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#F2ECE1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-[#161513] mb-4">
            Our Approach
          </h2>
          <p className="text-[#6B655B] max-w-2xl mx-auto">
            A transparent and structured design process that guarantees an enjoyable experience and an exceptional outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative p-8 bg-[#FAF8F5] rounded-3xl border border-[#8C7355]/10 hover:border-[#8C7355]/30 transition-colors group"
            >
              <div className="text-6xl font-serif text-[#8C7355]/10 group-hover:text-[#8C7355]/20 transition-colors absolute top-6 right-8">
                {step.number}
              </div>
              <h3 className="font-serif text-xl text-[#161513] mb-4 mt-8 relative z-10">{step.title}</h3>
              <p className="text-sm text-[#6B655B] leading-relaxed relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
