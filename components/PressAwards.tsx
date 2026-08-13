'use client';

export default function PressAwards() {
  const logos = [
    'Architectural Digest',
    'Elle Decor',
    'Luxe Interiors',
    'Florida Design',
    'Vogue Living'
  ];

  return (
    <section id="press" className="py-16 bg-[#F2ECE1] border-y border-[#8C7355]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C7355] mb-10">
          Featured & Recognized By
        </h4>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <div key={index} className="font-serif text-2xl text-[#161513] hover:text-[#8C7355] transition-colors cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
