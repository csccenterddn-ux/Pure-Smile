import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, Calendar, ChevronDown, ChevronRight, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoIcon from './LogoIcon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileTreatmentsExpanded, setIsMobileTreatmentsExpanded] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('mobile-menu-changed', { detail: { open: isMobileMenuOpen } }));
  }, [isMobileMenuOpen]);

  const dropdownItems = [
    { label: 'Dental Implants', id: 'implants', formValue: 'Dental Implants' },
    { label: 'Root Canal Treatment', id: 'rootcanal', formValue: 'Root Canal Treatment' },
    { label: 'Invisible Aligners', id: 'aligners', formValue: 'Orthodontics or Aligners' },
    { label: 'Teeth Whitening', id: 'whitening', formValue: 'Teeth Whitening' },
    { label: 'Smile Makeover', id: 'makeover', formValue: 'Smile Makeover or Veneers' },
    { label: 'Pediatric Dentistry', id: 'pediatric', formValue: 'Pediatric Dentistry' },
    { label: 'Wisdom Tooth Removal', id: 'wisdom-tooth', formValue: 'Not Sure, Need Advice' }
  ];

  const handleDropdownItemClick = (e: React.MouseEvent, itemId: string, formValue: string) => {
    e.preventDefault();
    
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (itemId !== 'wisdom-tooth') {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('select-service', { detail: itemId }));
      }, 350);
    }

    window.dispatchEvent(new CustomEvent('set-selected-treatment', { detail: formValue }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on the element position in view
      const sections = ['home', 'why-us', 'services', 'about', 'gallery', 'reviews', 'book'];
      let currentActive = 'home';
      let minDiff = Infinity;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const diff = Math.abs(rect.top - 120);
          
          // Check if section is currently intersecting or close to top of viewport
          if (rect.top <= 160 && rect.bottom >= 120) {
            currentActive = sectionId;
            break;
          }
          if (diff < minDiff) {
            minDiff = diff;
            currentActive = sectionId;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home', href: '#' },
    { label: 'Treatments', id: 'services', href: '#services' },
    { label: 'About', id: 'why-us', href: '#why-us' },
    { label: 'Doctor', id: 'about', href: '#about' },
    { label: 'Gallery', id: 'gallery', href: '#gallery' },
    { label: 'Reviews', id: 'reviews', href: '#reviews' },
    { label: 'Contact', id: 'book', href: '#book' },
  ];

  return (
    <header 
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] border-b border-[#E2E8F0] transition-all duration-[350ms] ease-in-out ${
        isScrolled 
          ? 'h-[72px] shadow-[0_8px_30px_rgba(15,23,42,0.08)]' 
          : 'h-[88px] shadow-none'
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Left Side: Premium dental logo icon & Clinic name */}
          <a 
            href="#" 
            className={`flex items-center gap-3 group transition-all duration-[300ms] ease-in-out origin-left ${
              isScrolled ? 'scale-[0.92]' : 'scale-100'
            }`}
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0A2540] to-[#0FB9B1] flex items-center justify-center transition-all duration-[300ms] group-hover:scale-105 shadow-md shadow-[#0FB9B1]/15 relative overflow-hidden">
              <LogoIcon className="w-[22px] h-[22px] text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#0A2540] leading-none transition-colors duration-300 group-hover:text-[#0FB9B1]">
                PureSmile
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-[#475569] mt-1.5 leading-none">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Center Navigation */}
          <nav className={`hidden lg:flex items-center transition-all duration-[350ms] ease-in-out ${
            isScrolled ? 'gap-6' : 'gap-[36px]'
          }`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              
              if (item.label === 'Treatments') {
                return (
                  <div 
                    key={item.id} 
                    className="relative group py-2.5 h-full flex items-center"
                  >
                    <a 
                      href={item.href}
                      data-nav-link="true"
                      className={`flex items-center gap-1 transition-all duration-300 select-none text-[14px] leading-none ${
                        isActive 
                          ? 'text-[#0FB9B1] font-semibold' 
                          : 'text-[#334155] font-medium hover:text-[#0FB9B1]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0FB9B1] transition-transform duration-300 group-hover:rotate-180 shrink-0" />
                      
                      {/* Premium animated underline effect */}
                      <span 
                        className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-[#0FB9B1] rounded-[999px] transition-all duration-[300ms] ease-in-out origin-center ${
                          isActive 
                            ? 'w-full' 
                            : 'w-0 group-hover:w-full'
                        }`} 
                      />
                    </a>

                    {/* Smooth fading dropdown panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-250 origin-top ease-out z-50">
                      <div className="bg-white border border-[#E2E8F0] shadow-[0_12px_36px_rgba(15,23,42,0.12)] rounded-2xl overflow-hidden py-2 text-left">
                        {dropdownItems.map((sub) => (
                          <a
                            key={sub.id}
                            href="#services"
                            onClick={(e) => handleDropdownItemClick(e, sub.id, sub.formValue)}
                            className="block px-5 py-3 text-xs sm:text-[13px] text-slate-700 hover:text-[#0FB9B1] hover:bg-[#ECFDF5]/60 transition-all font-medium border-l-[3px] border-transparent hover:border-[#0FB9B1]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a 
                  key={item.id}
                  href={item.href}
                  data-nav-link="true"
                  className={`group relative py-2.5 transition-all duration-300 select-none text-[14px] leading-none ${
                    isActive 
                      ? 'text-[#0FB9B1] font-semibold' 
                      : 'text-[#334155] font-medium hover:text-[#0FB9B1]'
                  }`}
                >
                  <span>{item.label}</span>
                  
                  {/* Premium animated underline effect */}
                  <span 
                    className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-[2px] bg-[#0FB9B1] rounded-[999px] transition-all duration-[300ms] ease-in-out origin-center ${
                      isActive 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Side: Phone Call Badge & Book Appointment CTA */}
          <div className="hidden lg:flex items-center gap-[18px]">
            
            {/* Phone Call Badge */}
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-2 px-5 py-[11px] bg-[#ECFDF5] border border-[#D1FAE5] text-[#0A2540] font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 hover:bg-[#D1FAE5] hover:-translate-y-[2px] hover:shadow-md shadow-sm active:scale-98"
              id="phone-badge"
            >
              <Phone className="w-4 h-4 text-[#0FB9B1] shrink-0" />
              <span>+91 98765 43210</span>
            </a>

            {/* Book Appointment CTA Button */}
            <a 
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-[26px] py-[14px] bg-[#0FB9B1] text-white font-bold text-xs sm:text-sm rounded-[999px] transition-all duration-300 hover:bg-[#0CA29B] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(15,185,177,0.25)] active:translate-y-0 shadow-[0_4px_14px_rgba(15,185,177,0.12)]"
              id="book-cta"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              Book Appointment
            </a>
          </div>

          {/* Mobile responsive toggle options */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { treatment: '' } }));
              }}
              className="flex items-center justify-center w-10 h-10 bg-[#ECFDF5] border border-[#D1FAE5] text-[#0A2540] rounded-full transition-all active:scale-90 cursor-pointer"
              aria-label="Book appointment"
            >
              <CalendarCheck className="w-4 h-4 text-[#0FB9B1] shrink-0" />
            </button>

            <button 
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 ml-1 rounded-xl text-[#0FB9B1] hover:bg-slate-50 transition-all focus:outline-none flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 shrink-0" />
            </button>
          </div>

        </div>
      </div>

      {/* Premium Full-Screen Slide Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark backing overlay shadow backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0A2540]/30 z-50 lg:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* White Sliding Overlay Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.22 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-[#FFFFFF] z-50 shadow-2xl lg:hidden flex flex-col p-6 overflow-y-auto"
            >
              {/* Header section in-drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0] mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0A2540] to-[#0FB9B1] flex items-center justify-center shadow-md">
                    <LogoIcon className="w-5 h-5 text-white shrink-0" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-heading font-extrabold text-lg text-[#0A2540] leading-none">
                      PureSmile
                    </span>
                    <span className="text-[8px] uppercase tracking-widest font-bold text-[#475569] mt-1.5 leading-none">
                      Dental Clinic
                    </span>
                  </div>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#ECFDF5] text-[#0FB9B1] flex items-center justify-center hover:bg-[#D1FAE5] transition-all focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-[#0FB9B1]" />
                </motion.button>
              </div>

               {/* Navigation Items (large premium touch targets) */}
              <nav className="flex flex-col space-y-1 mb-8">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  
                  if (item.label === 'Treatments') {
                    return (
                      <div key={item.id} className="flex flex-col border-b border-slate-100/80">
                        <button
                          type="button"
                          onClick={() => setIsMobileTreatmentsExpanded(!isMobileTreatmentsExpanded)}
                          className={`flex items-center justify-between py-3.5 px-3 rounded-xl text-[15px] font-semibold tracking-wide transition-all duration-200 text-left cursor-pointer select-none ${
                            isActive
                              ? 'text-[#0FB9B1] bg-[#ECFDF5]/40'
                              : 'text-[#0A2540] hover:text-[#0FB9B1] hover:bg-slate-50'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 shrink-0 ${isMobileTreatmentsExpanded ? 'rotate-180 text-[#0FB9B1]' : 'text-slate-400'}`} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isMobileTreatmentsExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 flex flex-col text-left pl-6 pr-2 gap-y-1 mt-1">
                                {dropdownItems.map((sub, sidx) => (
                                  <a
                                    key={sub.id}
                                    href="#services"
                                    onClick={(e) => {
                                      setIsMobileMenuOpen(false);
                                      handleDropdownItemClick(e, sub.id, sub.formValue);
                                    }}
                                    className="py-2.5 px-3 rounded-lg text-[13px] font-medium text-slate-500 hover:text-[#0FB9B1] hover:bg-[#ECFDF5]/50 transition-all text-left block border-b border-dashed border-slate-100/40 last:border-0"
                                  >
                                    {sub.label}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      data-nav-link="true"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 px-3 rounded-xl text-[15px] font-semibold tracking-wide transition-all duration-200 border-b border-slate-100/80 ${
                        isActive
                          ? 'text-[#0FB9B1] bg-[#ECFDF5]/40'
                          : 'text-[#0A2540] hover:text-[#0FB9B1] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 shrink-0 ${isActive ? 'translate-x-1 text-[#0FB9B1]' : 'text-slate-300'}`} />
                    </a>
                  );
                })}
              </nav>

              {/* Drawer footer utility actions */}
              <div className="mt-auto pt-6 border-t border-[#E2E8F0] space-y-3.5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#64748B] text-left">Book a Consultation</p>
                <div className="flex flex-col gap-2.5">
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 w-full h-[48px] bg-[#EBFBFA] border border-[#0FB9B1]/20 text-[#0FB9B1] font-body font-bold text-[13px] rounded-[10px] transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#0FB9B1] shrink-0" />
                    <span>Call +91 98765 43210</span>
                  </motion.a>

                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="#book"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full h-[48px] bg-[#0FB9B1] text-white font-body font-bold text-[13px] rounded-[10px] shadow-sm hover:bg-[#0CA29B] transition-all"
                  >
                    <Calendar className="w-4 h-4 shrink-0 text-white" />
                    <span>Book Appointment</span>
                  </motion.a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
