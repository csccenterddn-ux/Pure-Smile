import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'Is root canal treatment painful?',
    answer: 'Modern root canal treatment is generally no more uncomfortable than a routine filling. Local anesthesia keeps the area numb, and most patients report a comfortable experience throughout the procedure.'
  },
  {
    question: 'How much does a dental implant cost?',
    answer: 'Dental implant treatments are highly personalized depending on your bone density and selection of premium materials (such as global-standard titanium posts and custom zirconia crowns). During your initial consultation, we will provide a comprehensive, transparent cost breakdown with zero hidden fees.'
  },
  {
    question: 'Are same-day appointments available?',
    answer: 'We make every effort to accommodate same-day appointments, particularly for urgent concerns or acute dental pain. Please call our clinic directly, and our reception team will guide you to the earliest available emergency slot.'
  },
  {
    question: 'How long does treatment usually take?',
    answer: 'The duration depends entirely on your customized procedure. A single-sitting root canal or teeth whitening takes about 60 to 90 minutes, whereas custom aligners or dental implants are structured over multiple precise stages. We always prioritize your schedule.'
  },
  {
    question: 'Do you treat children?',
    answer: 'Yes, we provide gentle, welcoming pediatric dental care. Our specialist team is highly trained in making dental visits fun, educational, and absolutely anxiety-free for children of all ages, helping build healthy habits early.'
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit begins with a warm welcome and a gentle discussion about your hopes for your smile. Dr. Sharma will conduct a comprehensive diagnostic exam which may include digital low-radiation 3D imaging, followed by a transparent, unhurried review of your personalized treatment plan.'
  },
  {
    question: 'How often should I visit the dentist?',
    answer: 'To maintain a pristine, healthy smile, we recommend a routine professional checkup, cleaning, and scale treatment and polishing every 6 months. This preventive care is the best way to catch minor issues before they require advanced procedures.'
  },
  {
    question: 'Why do patients choose Pure Smile Clinic?',
    answer: 'Patients choose us for experienced doctors, modern technology, transparent treatment planning, comfortable procedures, and personalized care focused on long-term oral health.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="bg-white py-18 sm:py-22 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-[10px] font-sans font-extrabold tracking-widest text-[#0FB9B1] uppercase bg-[#ECFDF5] border border-[#D1FAE5] px-3.5 py-1 rounded-full inline-block mb-3 shadow-[0_1px_2px_rgba(15,185,177,0.03)] select-none">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0A1628] tracking-tight leading-tight mb-2.5">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-body max-w-xl mx-auto">
            Find immediate answers to common procedural and scheduling concerns. Feel free to contact our support representative for tailored support.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#0FB9B1] bg-[#F8FAFC]/90 shadow-[0_4px_16px_rgba(15,185,177,0.03)]' 
                    : 'border-[#E2E8F0] hover:border-[#0FB9B1]/40 hover:bg-[#F8FAFC]/20 hover:shadow-[0_3px_10px_rgba(15,23,42,0.008)]'
                }`}
              >
                {/* Question Trigger header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full px-5 sm:px-6 py-4.5 text-left font-body font-semibold text-[#0A1628] text-sm sm:text-base gap-4 transition-colors duration-200 select-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 shrink-0 transition-colors duration-200 ${isOpen ? 'text-[#0FB9B1]' : 'text-[#64748B]'}`} />
                    <span className="font-heading font-extrabold text-xs sm:text-sm tracking-tight text-[#0A1628]">{faq.question}</span>
                  </span>
                  <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[#0FB9B1] text-white rotate-180 shadow-xs' : 'bg-[#ECFDF5] text-[#0FB9B1]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Smooth Answer Container with Dynamic Height Collapse */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-5.5 text-xs sm:text-sm text-[#475569] font-sans font-normal leading-relaxed border-t border-[#E2E8F0]/40 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Conversion Enhancement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 p-5 sm:p-7 bg-gradient-to-br from-[#0A2540] to-[#103A63] border border-[#1E3E61] rounded-2.5xl text-center shadow-[0_12px_36px_rgba(10,37,64,0.08)] relative overflow-hidden"
        >
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white mb-2 tracking-tight">
              Need Help Choosing The Right Treatment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans font-medium leading-relaxed mb-5 max-w-md mx-auto">
              Speak directly with our dental experts for personalized guidance and treatment recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              {/* WhatsApp Us (Primary Action) */}
              <motion.a
                animate={{ 
                  scale: [1, 1.015, 1],
                  boxShadow: [
                    "0 4px 14px rgba(37, 211, 102, 0.25)",
                    "0 4px 20px rgba(37, 211, 102, 0.45)",
                    "0 4px 14px rgba(37, 211, 102, 0.25)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut" 
                }}
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919876543210?text=Hi%20PureSmile%20Dental%2C%20I'd%20like%20to%20get%20some%20guidance%20on%20treatments."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 h-[46px] inline-flex items-center justify-center gap-2 px-5 bg-[#25D366] hover:bg-[#1da851] text-white text-xs sm:text-sm font-sans font-extrabold rounded-full transition-colors duration-200 select-none cursor-pointer text-center"
              >
                <svg className="w-4.5 h-4.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </motion.a>
              
              {/* Call Now (Secondary Action) */}
              <motion.a
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919876543210"
                className="w-full sm:w-1/2 h-[46px] inline-flex items-center justify-center gap-2 px-5 bg-transparent hover:bg-white/5 border border-[#0FB9B1] text-white hover:text-white text-xs sm:text-sm font-sans font-extrabold rounded-full transition-all duration-200 select-none cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#0FB9B1] stroke-[2.25]" />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
