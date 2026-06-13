import React from 'react';
import { Calendar, Stethoscope, ClipboardCheck, HeartPulse, Heart, Check } from 'lucide-react';
import { motion } from 'motion/react';

const stepsData = [
  {
    step: 'STEP 01',
    title: 'Schedule Consultation',
    description: 'Book your visit online or by phone and choose a convenient appointment time.',
    icon: Calendar,
  },
  {
    step: 'STEP 02',
    title: 'Comprehensive Examination',
    description: 'Receive a detailed clinical evaluation supported by modern digital diagnostics.',
    icon: Stethoscope,
  },
  {
    step: 'STEP 03',
    title: 'Customized Treatment Planning',
    description: 'Review a personalized treatment roadmap designed around your goals and needs.',
    icon: ClipboardCheck,
  },
  {
    step: 'STEP 04',
    title: 'Advanced Pain-Free Treatment',
    description: 'Experience safe, advanced, and minimally invasive dental care with maximum comfort.',
    icon: HeartPulse,
  },
  {
    step: 'STEP 05',
    title: 'Recovery & Follow-Up Care',
    description: 'Benefit from continued support, follow-ups, and guidance for long-term oral health.',
    icon: Heart,
  }
];

export default function PatientJourney() {
  return (
    <section id="journey" className="bg-[#F8FAFC] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[10px] font-sans font-extrabold tracking-widest text-[#0FB9B1] uppercase bg-[#ECFDF5] border border-[#D1FAE5] px-3.5 py-1 rounded-full inline-block mb-3 shadow-[0_1px_2px_rgba(15,185,177,0.03)] select-none">
            Your Experience
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0A1628] tracking-tight leading-tight mb-2.5">
            Your Journey To A Healthier Smile
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-body max-w-xl mx-auto">
            From your first consultation to long-term follow-up care, every step is designed to provide comfort, clarity, transparency, and exceptional clinical outcomes.
          </p>
        </div>

        {/* Dynamic Road Steps Grid */}
        <div className="relative mt-2">
          {/* Subtle Premium Connector Line - Desktop Only. Center aligned with circles */}
          <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-[1.5px] bg-[#0FB9B1]/15 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10 items-stretch">
            {stepsData.map((item, idx) => {
               const StepIcon = item.icon;
               return (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 12 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4, delay: idx * 0.06 }}
                   className="flex flex-col items-center text-center group bg-white border border-[#E2E8F0] hover:border-[#0FB9B1]/40 rounded-3xl p-5 sm:p-5.5 shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_30px_rgba(15,185,177,0.05)] hover:translate-y-[-4px] transition-all duration-300 relative h-full"
                 >
                   {/* Step indicator badge */}
                   <span className="text-[10px] font-sans font-extrabold tracking-wider text-[#0FB9B1] bg-[#ECFDF5] border border-[#D1FAE5] px-2.5 py-0.5 rounded-full inline-block mb-3.5 select-none font-bold">
                     {item.step}
                   </span>

                   {/* Step visual circle - soft circular background with teal icon */}
                   <div className="w-12 h-12 rounded-full bg-[#ECFDF5] border border-[#D1FAE5]/60 group-hover:border-[#0FB9B1] group-hover:bg-[#0FB9B1] flex items-center justify-center shadow-[0_2px_6px_rgba(15,23,42,0.02)] group-hover:shadow-[0_6px_16px_rgba(15,185,177,0.12)] group-hover:scale-105 transition-all duration-300 mb-4 shrink-0 relative z-10">
                     <StepIcon className="w-5 h-5 text-[#0FB9B1] group-hover:text-white transition-colors duration-300 group-hover:scale-105 transition-transform stroke-[2.25]" />
                   </div>

                   {/* Title and Info */}
                   <h3 className="text-xs sm:text-sm font-heading font-extrabold text-[#0A1628] mb-1.5 tracking-tight group-hover:text-[#0FB9B1] transition-colors duration-200 leading-snug">
                     {item.title}
                   </h3>
                   <p className="text-xs text-slate-500 font-sans font-normal leading-relaxed mb-1 flex-1">
                     {item.description}
                   </p>
                 </motion.div>
               );
            })}
          </div>
        </div>

        {/* Journey Benefits Strip - Subtly communicate professional trust signals */}
        <div className="mt-10 pt-6.5 border-t border-slate-200/60 w-full">
          <p className="text-center text-[9px] font-sans font-extrabold text-slate-400 uppercase tracking-widest mb-3.5">
            OUR PATIENT EXPERIENCE STANDARDS
          </p>
          <div className="flex flex-col lg:flex-row lg:flex-nowrap items-center lg:justify-center gap-y-2.5 lg:gap-y-0 gap-x-0 lg:gap-x-4 pb-2 px-2">
            {[
              { text: 'Transparent Treatment Planning' },
              { text: 'Advanced Digital Diagnostics' },
              { text: 'Pain-Free Treatment Approach' },
              { text: 'Personalized Care Plans' },
              { text: 'Dedicated Follow-Up Support' },
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 lg:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-[0_1px_2px_rgba(15,23,42,0.01)] hover:border-[#0FB9B1]/20 hover:shadow-[0_4px_10px_rgba(15,185,177,0.03)] hover:translate-y-[-0.5px] transition-all duration-300 shrink-0"
              >
                <div className="w-4 h-4 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] flex items-center justify-center text-[#0FB9B1] shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-[#0A1628] font-sans tracking-tight whitespace-nowrap">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
