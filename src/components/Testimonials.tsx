import React, { useState, useEffect } from 'react';
import { Star, Quote, Check, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const testimonialsList = [
  {
    initials: 'AR',
    author: 'Anika Rathi',
    rating: 5,
    text: "I wanted a smile makeover before my wedding and was quite nervous about how it would turn out. Dr. Amit Sharma showed me digital mockups beforehand which really put me at ease. The treatment was seamless, and my new smile looks completely natural. I couldn't be happier with the results.",
    treatment: 'Smile Makeover',
    timeAgo: '2 Weeks Ago',
    bgGradient: 'from-cyan-50 to-teal-50/30 text-teal-700 bg-teal-50/10 border-teal-100'
  },
  {
    initials: 'RK',
    author: 'Rahul Kumar',
    rating: 5,
    text: "I had lost a lower molar years ago and was always hesitant about dental implants. The team explained the modern computer-guided process very clearly. The actual surgery in Dehradun was surprisingly quick and virtually painless. The new tooth feels exactly like my natural ones. Excellent follow-up care too.",
    treatment: 'Dental Implant',
    timeAgo: '1 Month Ago',
    bgGradient: 'from-sky-50 to-indigo-50/30 text-sky-700 bg-sky-50/10 border-sky-100'
  },
  {
    initials: 'SM',
    author: 'Sneha Mehta',
    rating: 5,
    text: "I had a severe toothache on a Sunday and found this clinic for emergency care. Dr. Sharma did a single-sitting root canal with microscopic precision. I felt absolutely no pain during the procedure, and the clinic was incredibly clean. Highly recommend them for painless dental treatments.",
    treatment: 'Root Canal',
    timeAgo: '3 Weeks Ago',
    bgGradient: 'from-teal-50 to-emerald-50/30 text-teal-700 bg-teal-50/10 border-teal-100'
  },
  {
    initials: 'DK',
    author: 'Devendra Kapoor',
    rating: 5,
    text: "I chose clear aligners to fix some crowding issues. The initial 3D scanning process was completely smooth and quick. My coordinator explained the timeline clearly and has been very supportive. Only eight weeks into the treatment, and I can already notice a visible difference. Very professional setup.",
    treatment: 'Aligners',
    timeAgo: '2 Months Ago',
    bgGradient: 'from-indigo-50 to-purple-50/30 text-indigo-700 bg-indigo-50/10 border-indigo-100'
  },
  {
    initials: 'PS',
    author: 'Priyanka Singh',
    rating: 5,
    text: "I got my teeth whitened here before a major family function. The staff was very professional and took the time to explain the process. The results were immediate and much better than I expected, with absolutely zero tooth sensitivity. A quick, friendly, and very satisfying experience overall.",
    treatment: 'Teeth Whitening',
    timeAgo: '5 Days Ago',
    bgGradient: 'from-amber-50 to-yellow-50/30 text-amber-700 bg-amber-50/10 border-amber-100'
  },
  {
    initials: 'VN',
    author: 'Vikram Negi',
    rating: 5,
    text: "I had a great experience getting a damaged crown replaced with a new zirconia one. They used digital 3D imaging for a perfect fit, so there were no messy physical impressions. The crown feels so comfortable, matches my other teeth perfectly, and the entire staff was incredibly welcoming.",
    treatment: 'Dental Crown',
    timeAgo: '10 Days Ago',
    bgGradient: 'from-slate-50 to-zinc-50/30 text-slate-700 bg-slate-50/10 border-slate-100'
  }
];

const distributionBars = [
  { stars: 5, percentage: 94 },
  { stars: 4, percentage: 4 },
  { stars: 3, percentage: 1.5 },
  { stars: 2, percentage: 0.5 },
  { stars: 1, percentage: 0 }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonialsList.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, visibleCards, maxIndex]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, maxIndex, currentIndex]);

  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle background decorative shapes for luxury/premium feel */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50/40 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50/40 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-bold tracking-widest text-[#0FB9B1] bg-[#ECFDF5] border border-[#D1FAE5] px-4 py-1.5 rounded-full inline-block mb-3 shadow-xs">
            PATIENT REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:whitespace-nowrap font-heading font-extrabold text-[#0A1628] tracking-tight leading-tight mb-3">
            Trusted By 12,000+ Happy Patients
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed font-body max-w-2xl mx-auto">
            Real experiences from patients who trusted Pure Smile Clinic for their dental care. Read genuine feedback about treatment quality, comfort, and patient experience.
          </p>
        </motion.div>

        {/* Google Trust Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-slate-50 via-white to-teal-50/25 border border-slate-100 rounded-[32px] p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.02)] flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          {/* Rating Big Display */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:w-1/2">
            <div className="flex items-center gap-3">
              {/* Premium Larger Google Icon */}
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 select-none" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-sans font-black tracking-widest text-[#0FB9B1] uppercase">Verified Google Profile</span>
                <p className="text-[11px] font-bold text-slate-800">Pure Smile Clinic</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-heading font-black text-[#0A1628] tracking-tight">4.9</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] stroke-none" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-slate-400 font-sans tracking-wide">
                  Based on 1,248+ Google Reviews
                </span>
              </div>
            </div>

            {/* Compact Trust Indicator Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1.5 pt-3 border-t border-slate-100/80 w-full text-[11px] font-bold text-slate-600">
              <span className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#0FB9B1]">
                <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                Verified Google Business Profile
              </span>
              <span className="hidden sm:inline text-slate-200">•</span>
              <span className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#0FB9B1]">
                <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                1,248+ Authentic Reviews
              </span>
              <span className="hidden sm:inline text-slate-200">•</span>
              <span className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#0FB9B1]">
                <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                15+ Years Excellence
              </span>
            </div>
          </div>

          {/* Distribution Bars */}
          <div className="w-full md:w-2/5 flex flex-col gap-2 font-sans text-xs pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
            {distributionBars.map((bar) => (
              <div key={bar.stars} className="flex items-center gap-3">
                <span className="w-10 font-bold text-slate-400 text-right">{bar.stars} Star</span>
                <div className="flex-1 h-1.5 bg-slate-200/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-[#0FB9B1] to-[#0CA29B] rounded-full"
                  />
                </div>
                <span className="w-10 font-bold text-slate-500 text-left">{bar.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carousel Container with scroll-triggered fade-in and slide-up animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Slider Row Window */}
          <div className="overflow-hidden px-1 py-2">
            <div 
              className="flex transition-transform duration-500 ease-out -mx-4 items-stretch"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonialsList.map((review, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (idx % 3) * 0.08 }}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-4 flex flex-col"
                >
                  <div className="bg-white border border-slate-100 hover:border-[#0FB9B1] rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)] hover:translate-y-[-6px] transition-all duration-300 relative flex flex-col flex-1 group">
                    <Quote className="absolute top-5 right-5 w-8 h-8 text-teal-500/5 group-hover:text-teal-500/10 transition-colors duration-300 select-none pointer-events-none" />

                    <div className="flex-1 flex flex-col">
                      {/* Rating Stars */}
                      <div className="flex gap-0.5 mb-4 shrink-0">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] stroke-none" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed mb-5 font-normal antialiased flex-1">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Patient / Meta Details */}
                    <div className="border-t border-slate-100 pt-4 mt-auto shrink-0">
                      <div className="flex items-center gap-3">
                        {/* Premium initials-based avatar */}
                        <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 text-[#0A1628] font-heading font-black text-xs flex items-center justify-center shadow-xs shrink-0 select-none">
                          {review.initials}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-heading font-bold text-[#0A1628] leading-tight truncate">
                            {review.author}
                          </h4>
                          {/* Short Treatment tag and timing */}
                          <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                            <span className={`text-[9px] px-2 py-0.5 rounded-full border ${review.bgGradient}`}>
                              {review.treatment}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 tracking-wide">
                              • {review.timeAgo}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel Interactive Dots & Controls - Tightened top space */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <button 
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#0FB9B1] hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-[#0FB9B1] transition-all duration-300 cursor-pointer select-none active:scale-95 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: testimonialsList.length - visibleCards + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i ? 'w-6 bg-[#0FB9B1]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-[#0FB9B1] hover:bg-slate-50 flex items-center justify-center text-slate-500 hover:text-[#0FB9B1] transition-all duration-300 cursor-pointer select-none active:scale-95 shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Premium Trust Strip - Tightened spacing (mt-9) & premium background styling */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl py-4.5 px-6 max-w-4xl mx-auto mt-9 shadow-[0_2px_12px_rgba(15,23,42,0.02)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)] hover:border-slate-300 transition-all duration-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center text-center">
            
            <div className="flex items-center gap-2 px-2.5 group/item transition-transform duration-300 hover:translate-y-[-1px]">
              <svg className="w-4 h-4 select-none shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div className="flex flex-col items-start font-sans">
                <span className="text-xs font-heading font-extrabold text-[#0A1628]">4.9 Google Rating</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Patient Satisfaction</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-2.5 group/item transition-transform duration-300 hover:translate-y-[-1px]">
              <span className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#0FB9B1] shrink-0">
                <Check className="w-3 h-3 stroke-[3.5]" />
              </span>
              <div className="flex flex-col items-start font-sans">
                <span className="text-xs font-heading font-extrabold text-[#0A1628]">1,248+ Reviews</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">100% Certified</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-2.5 group/item transition-transform duration-300 hover:translate-y-[-1px]">
              <div className="w-4.5 h-4.5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0FB9B1] shrink-0">
                <Users className="w-3 h-3 stroke-[2.5]" />
              </div>
              <div className="flex flex-col items-start font-sans">
                <span className="text-xs font-heading font-extrabold text-[#0A1628]">12,000+ Patients</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Happy Families</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-2.5 group/item transition-transform duration-300 hover:translate-y-[-1px]">
              <div className="w-4.5 h-4.5 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0FB9B1] shrink-0">
                <Award className="w-3 h-3 text-[#0FB9B1] stroke-[2.5]" />
              </div>
              <div className="flex flex-col items-start font-sans">
                <span className="text-xs font-heading font-extrabold text-[#0A1628]">15+ Years Experience</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Experienced Doctors</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Center Google Review Outbound CTA - Tight spacing (mt-6) */}
        <div className="text-center mt-6">
          <motion.a
            whileHover={{ y: -2, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(15, 185, 177, 0.12), 0 8px 10px -6px rgba(15, 185, 177, 0.12)" }}
            whileTap={{ scale: 0.98 }}
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-slate-200 hover:border-[#0FB9B1] text-xs font-sans font-extrabold text-slate-700 hover:text-[#0FB9B1] rounded-full bg-white transition-colors duration-300 select-none cursor-pointer shadow-xs"
          >
            <svg className="w-4 h-4 select-none shrink-0 animate-pulse-subtle" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span>View Google Reviews</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
