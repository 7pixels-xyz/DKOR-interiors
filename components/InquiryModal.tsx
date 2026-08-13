'use client';

import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#8C7355]/20">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-[#6B655B] hover:text-[#161513]">
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#8C7355]">Step {step} of 2</span>
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#161513] mt-2 mb-6">
              {step === 1 ? 'Select Your Design Scope' : 'Tell Us About Your Project'}
            </h3>

            {step === 1 ? (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Decorating', 'Remodeling', 'New Construction', 'Commercial'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setService(item);
                      setStep(2);
                    }}
                    className={`p-6 text-left rounded-2xl border transition-all ${
                      service === item
                        ? 'border-[#8C7355] bg-[#8C7355]/10'
                        : 'border-[#8C7355]/20 hover:border-[#8C7355]'
                    }`}
                  >
                    <span className="font-serif text-lg font-medium text-[#161513]">{item}</span>
                  </button>
                ))}
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <input
                  required
                  placeholder="Your Full Name *"
                  className="w-full p-4 rounded-xl bg-[#F2ECE1] border border-[#8C7355]/20 text-sm focus:outline-none focus:border-[#8C7355]"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address *"
                  className="w-full p-4 rounded-xl bg-[#F2ECE1] border border-[#8C7355]/20 text-sm focus:outline-none focus:border-[#8C7355]"
                />
                <input
                  placeholder="Project Location (e.g. Palm Beach, FL)"
                  className="w-full p-4 rounded-xl bg-[#F2ECE1] border border-[#8C7355]/20 text-sm focus:outline-none focus:border-[#8C7355]"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-[#8C7355] text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-[#5A4833] transition-all"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-[#8C7355] mx-auto mb-4" />
            <h3 className="font-serif text-3xl text-[#161513] mb-2">Thank You</h3>
            <p className="text-sm text-[#6B655B]">Your inquiry has been received. Our team will contact you within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
}
