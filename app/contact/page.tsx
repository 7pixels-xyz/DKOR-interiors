'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Phone, MapPin, MessageSquare, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

type FormData = {
  projectType: string;
  scope: string;
  location: string;
  timeline: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    scope: '',
    location: '',
    timeline: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const totalSteps = 6;

  const handleUpdate = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  // 1 is forward, -1 is backward
  const [direction, setDirection] = useState(1);

  const changeStep = (newStep: number) => {
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  const renderStepContent = () => {
    switch(step) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">What type of project are you planning?</h3>
            <p className="text-neutral-500 font-light text-sm md:text-base pb-4">Select the category that best describes your space.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {['Residential', 'Commercial', 'Hospitality'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { handleUpdate('projectType', opt); handleUpdate('scope', ''); changeStep(1); }}
                  className={`py-6 px-4 flex flex-col items-center justify-center gap-4 rounded-2xl border-2 transition-all duration-500 ${
                    formData.projectType === opt 
                      ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-lg shadow-black/10 scale-[0.98]' 
                      : 'border-transparent bg-[#E6E8E3] text-neutral-600 hover:border-[#1A1A1A]/20 hover:bg-white hover:-translate-y-1 shadow-sm'
                  }`}
                >
                  <span className="text-xs md:text-sm font-mono tracking-widest uppercase">{opt}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 1:
        let scopeOptions: string[] = [];
        if (formData.projectType === 'Residential') scopeOptions = ['Full Home Renovation', 'New Construction', 'Single Room Design', 'Exterior / Landscape'];
        else if (formData.projectType === 'Commercial') scopeOptions = ['Office Space', 'Retail Store', 'Restaurant / Cafe', 'Corporate Lobby'];
        else if (formData.projectType === 'Hospitality') scopeOptions = ['Boutique Hotel', 'Resort', 'Lounge / Club', 'Event Space'];
        else scopeOptions = ['Full Renovation', 'New Construction', 'Specific Rooms', 'Other'];

        return (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">What is the scope of the work?</h3>
            <p className="text-neutral-500 font-light text-sm md:text-base pb-4">Based on your {formData.projectType.toLowerCase()} project.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {scopeOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { handleUpdate('scope', opt); changeStep(2); }}
                  className={`py-5 px-4 text-xs md:text-sm font-mono tracking-wider rounded-xl border-2 transition-all duration-500 ${
                    formData.scope === opt 
                      ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-lg shadow-black/10' 
                      : 'border-transparent bg-[#E6E8E3] text-neutral-600 hover:border-[#1A1A1A]/20 hover:bg-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">Logistics</h3>
            <p className="text-neutral-500 font-light text-sm md:text-base pb-4">Where and when is this taking place?</p>
            
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Where is the project located? *</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleUpdate('location', e.target.value)}
                placeholder="e.g. Boca Raton, FL"
                className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">When are you looking to begin? *</label>
              <div className="grid grid-cols-2 gap-3">
                {['Immediately', '1-3 Months', '3-6 Months', '6+ Months'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleUpdate('timeline', opt)}
                    className={`py-4 px-3 text-[10px] md:text-xs font-mono tracking-wider rounded-xl border-2 transition-all duration-500 ${
                      formData.timeline === opt 
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-lg shadow-black/10' 
                        : 'border-transparent bg-[#E6E8E3] text-neutral-600 hover:border-[#1A1A1A]/20 hover:bg-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              disabled={!formData.location || !formData.timeline}
              onClick={() => changeStep(3)}
              className="mt-6 group w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed text-white rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono hover:bg-[#5C6B57] transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Continue</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10" />
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">Approximate Budget</h3>
            <p className="text-neutral-500 font-light text-sm md:text-base pb-4">Select your anticipated budget for this scope.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {['$100k - $250k', '$250k - $500k', '$500k - $1M', '$1M+'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { handleUpdate('budget', opt); changeStep(4); }}
                  className={`py-5 px-4 text-xs md:text-sm font-mono tracking-widest rounded-xl border-2 transition-all duration-500 ${
                    formData.budget === opt 
                      ? 'border-[#5C6B57] bg-[#5C6B57] text-white shadow-lg shadow-[#5C6B57]/20' 
                      : 'border-transparent bg-[#E6E8E3] text-neutral-600 hover:border-[#5C6B57]/30 hover:bg-white'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">Project Vision</h3>
            <p className="text-neutral-500 font-light text-sm md:text-base pb-4">Tell us a little about your goals and requirements.</p>
            <div className="space-y-3">
              <textarea
                rows={5}
                value={formData.notes}
                onChange={(e) => handleUpdate('notes', e.target.value)}
                placeholder="Share your vision, challenges, and any specific requirements..."
                className="w-full px-5 py-4 bg-[#E6E8E3] rounded-2xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all resize-none placeholder:text-neutral-400 leading-relaxed"
              />
            </div>
            <button
              onClick={() => changeStep(5)}
              className="mt-6 group w-full sm:w-auto px-10 py-4 bg-[#1A1A1A] text-white rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono hover:bg-[#5C6B57] transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Continue</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10" />
            </button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">Final Details</h3>
            <p className="text-neutral-500 font-light text-sm md:text-base pb-4">Review your inquiry and provide your contact information.</p>
            
            {/* Summary Card */}
            <div className="p-6 bg-white border border-neutral-200 rounded-2xl shadow-sm mb-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
              </div>
              <h4 className="text-[10px] uppercase tracking-widest font-mono text-[#5C6B57] font-semibold border-b border-neutral-100 pb-2">Inquiry Summary</h4>
              <p className="text-sm md:text-base font-serif text-[#1A1A1A] leading-relaxed">
                A <span className="font-semibold text-[#5C6B57]">{formData.scope || 'Design'}</span> project for a <span className="font-semibold text-[#5C6B57]">{formData.projectType || 'Property'}</span> located in <span className="font-semibold text-[#5C6B57]">{formData.location}</span>. <br/>
                Starting <span className="font-semibold text-[#5C6B57]">{formData.timeline.toLowerCase()}</span> with an anticipated budget of <span className="font-semibold text-[#5C6B57]">{formData.budget}</span>.
              </p>
              {formData.notes && (
                <p className="text-xs text-neutral-500 italic mt-2 line-clamp-2">"{formData.notes}"</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Full Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleUpdate('name', e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Phone Number *</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleUpdate('phone', e.target.value)}
                  placeholder="+1 (305) 000-0000"
                  className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] md:text-xs uppercase font-mono tracking-widest text-[#1A1A1A] font-semibold">Email Address *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => handleUpdate('email', e.target.value)}
                placeholder="eleanor@example.com"
                className="w-full px-5 py-4 bg-[#E6E8E3] rounded-xl border-2 border-transparent focus:bg-white focus:border-[#1A1A1A] outline-none text-sm transition-all placeholder:text-neutral-400"
              />
            </div>

            <button
              disabled={!formData.name || !formData.email || !formData.phone}
              type="submit"
              className="group w-full py-5 bg-[#1A1A1A] disabled:bg-neutral-300 disabled:cursor-not-allowed text-white rounded-xl text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono hover:bg-[#5C6B57] transition-all duration-500 flex items-center justify-center gap-4 relative overflow-hidden mt-8"
            >
              <div className="absolute inset-0 bg-[#5C6B57] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              <span className="relative z-10">Submit Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-500" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-[50vh] md:h-[60vh] flex items-center justify-center pt-24 px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 origin-center">
          <motion.div
            animate={{ scale: 1.15 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="/contact_hero_desk_setup_1786600824263.jpg"
              alt="DKOR Concierge"
              className="w-full h-full object-cover opacity-50 mix-blend-overlay"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </motion.div>
        
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 text-center space-y-4 md:space-y-6 max-w-3xl mx-auto mt-16 md:mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#5C6B57]">
              Direct Consultation
            </span>
            <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight mt-2 md:mt-4">
              Initiate Your Project
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-white/70 text-sm md:text-lg font-light leading-relaxed px-4 md:px-0"
          >
            Begin the journey to a masterfully curated environment. Our design principals are currently accepting bespoke commissions globally.
          </motion.p>
        </motion.div>
      </section>

      <div className="pb-16 pt-12 md:pb-24 md:pt-16 px-6 md:px-12 max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Contact Information & Concierge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-4 space-y-8 md:space-y-12 order-2 lg:order-1"
          >
            <div className="bg-[#1A1A1A] text-white p-8 md:p-10 rounded-3xl space-y-10 shadow-2xl">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-3">Studio Headquarters</h2>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  Our North Miami design laboratory is the birthplace of over 400 global projects. We welcome prospective clients by appointment.
                </p>
              </div>
              
              <div className="space-y-6 md:space-y-8 text-sm">
                {[
                  { icon: MapPin, label: "Location", text: "2079 NE 155th Street\nNorth Miami, FL 33162" },
                  { icon: Phone, label: "Direct Line", text: "+1 (305) 981-2710", link: "tel:3059812710" },
                  { icon: MessageSquare, label: "Instant Messaging", text: "Connect via WhatsApp", link: "https://wa.me/13059812710" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + (idx * 0.15), ease: [0.76, 0, 0.24, 1] }}
                    className="flex items-start space-x-4 md:space-x-5 group cursor-pointer"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 md:group-hover:bg-[#5C6B57] transition-colors duration-500">
                      <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white md:group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="pt-0.5 md:pt-1">
                      <p className="font-mono tracking-widest uppercase text-[10px] md:text-xs text-[#5C6B57] mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} target={item.label === "Instant Messaging" ? "_blank" : undefined} rel="noopener noreferrer" className="text-white/80 font-light text-sm block md:hover:text-white transition-colors whitespace-pre-line">
                          {item.text}
                        </a>
                      ) : (
                        <p className="text-white/80 font-light text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Multi-Step Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="bg-[#F8F9F7] p-8 md:p-14 rounded-[2rem] shadow-sm min-h-[500px] flex flex-col relative overflow-hidden border border-neutral-100">
              
              {/* Form Header & Progress */}
              {!submitted && (
                <div className="mb-10 relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <button 
                      type="button" 
                      onClick={handleBack}
                      className={`flex items-center gap-2 text-xs uppercase tracking-widest font-mono transition-opacity duration-300 ${step > 0 ? 'opacity-100 hover:text-[#5C6B57]' : 'opacity-0 pointer-events-none'}`}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400">
                      Step {step + 1} of {totalSteps}
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#1A1A1A]"
                      initial={{ width: `${(1 / totalSteps) * 100}%` }}
                      animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    />
                  </div>
                </div>
              )}

              {/* Form Content Area */}
              <div className="flex-1 relative">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                      className="w-20 h-20 bg-[#1A1A1A] text-[#5C6B57] rounded-full flex items-center justify-center mb-4"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Inquiry Received</h3>
                    <p className="text-[#555555] text-base md:text-lg font-light leading-relaxed max-w-md mx-auto">
                      Thank you, {formData.name.split(' ')[0]}. A senior design principal will review your {formData.projectType.toLowerCase()} project parameters and contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="h-full">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={step}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        className="w-full"
                      >
                        {renderStepContent()}
                      </motion.div>
                    </AnimatePresence>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
