import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import AboutDoctor from './components/AboutDoctor';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import PatientJourney from './components/PatientJourney';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import FinalCTA from './components/FinalCTA';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Chatbot from './components/Chatbot';
import BookingModal from './components/BookingModal';
import { useTreatment } from './context/TreatmentContext';

import { Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const { activeTreatment, setActiveTreatment } = useTreatment();
  
  // State for our new premium lead capture BookingModal
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Toast notifications details on confirmations
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastDetails, setToastDetails] = useState('');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMobileMenu = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setIsMobileMenuOpen(customEvent.detail.open);
    };
    window.addEventListener('mobile-menu-changed', handleMobileMenu);
    return () => window.removeEventListener('mobile-menu-changed', handleMobileMenu);
  }, []);

  // Dispatch modal change events so that floating CTAs can hide during active booking flow
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('modal-changed', { detail: { open: isBookingModalOpen } }));
  }, [isBookingModalOpen]);

  // Automatically monitor and intercept page CTA clicks to prevent friction and trigger the popup instead of scrolling
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a, button');
      if (anchor) {
        const href = anchor.getAttribute('href') || anchor.getAttribute('data-href');
        const text = (anchor.textContent || '').toLowerCase();
        
        // Skip links that are strictly part of side/top navigation menus or footer list items
        const isNavLink = 
          anchor.getAttribute('data-nav-link') === 'true' ||
          anchor.closest('nav') !== null ||
          text.trim() === 'contact' ||
          text.trim() === 'contact ➔' ||
          text.trim() === 'book online slots';

        if (isNavLink) return;

        // Match either href === '#book' OR prominent appointment and consultation CTAs
        if (
          href === '#book' || 
          text.includes('book appointment') || 
          text.includes('schedule consultation') || 
          text.includes('request appointment') ||
          text.includes('request consultation') ||
          text.includes('book free consultation') ||
          text.includes('book slots with dr. sharma') ||
          (anchor.tagName === 'BUTTON' && text.includes('book consultation'))
        ) {
          e.preventDefault();
          e.stopPropagation();
          
          // Try to deduce treatment from context or text labels
          let treatmentOffer = '';
          if (text.includes('implant')) {
            treatmentOffer = 'Dental Implants';
          } else if (text.includes('root canal')) {
            treatmentOffer = 'Root Canal Treatment';
          } else if (text.includes('whitening')) {
            treatmentOffer = 'Teeth Whitening';
          } else if (text.includes('aligners') || text.includes('invisalign') || text.includes('braces')) {
            treatmentOffer = 'Invisible Aligners';
          } else if (text.includes('smile makeover') || text.includes('veneer')) {
            treatmentOffer = 'Smile Makeover';
          } else if (text.includes('checkup') || text.includes('clean') || text.includes('general')) {
            treatmentOffer = 'General Checkup and Cleaning';
          } else if (text.includes('pediatric') || text.includes('child')) {
            treatmentOffer = 'Pediatric Dentistry';
          } else if (text.includes('wisdom')) {
            treatmentOffer = 'Wisdom Tooth Removal';
          } else if (text.includes('emergency')) {
            treatmentOffer = 'Emergency Treatment';
          }

          if (treatmentOffer) {
            setActiveTreatment(treatmentOffer);
          }
          setIsBookingModalOpen(true);
        }
      }
    };
    document.addEventListener('click', handleGlobalClick, true);
    return () => document.removeEventListener('click', handleGlobalClick, true);
  }, []);

  const handleSelectTreatment = (treatmentVal: string) => {
    setActiveTreatment(treatmentVal);
  };

  useEffect(() => {
    const handleSetSelectedTreatmentEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTreatment(customEvent.detail);
    };

    const handleSetSelectedTreatmentContext = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTreatment(customEvent.detail);
    };

    const handleOpenBookingModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ treatment: string }>;
      if (customEvent.detail && customEvent.detail.treatment) {
        setActiveTreatment(customEvent.detail.treatment);
      }
      setIsBookingModalOpen(true);
    };

    window.addEventListener('set-selected-treatment', handleSetSelectedTreatmentEvent);
    window.addEventListener('set-selected-treatment-context', handleSetSelectedTreatmentContext);
    window.addEventListener('open-booking-modal', handleOpenBookingModal);

    return () => {
      window.removeEventListener('set-selected-treatment', handleSetSelectedTreatmentEvent);
      window.removeEventListener('set-selected-treatment-context', handleSetSelectedTreatmentContext);
      window.removeEventListener('open-booking-modal', handleOpenBookingModal);
    };
  }, []);

  const handleAppointmentSuccess = (details: { name: string, date: string, time: string, treatment: string }) => {
    setToastMessage(`Slot Confirmed for ${details.name}!`);
    setToastDetails(`${details.treatment} at ${details.time} on ${details.date}. A SMS notice was sent.`);
    setShowToast(true);
  };

  const handleBookingModalSuccess = (details: { name: string; treatment: string; mobile: string }) => {
    setToastMessage(`Consultation Requested!`);
    setToastDetails(`Hi ${details.name}, we received your request for: ${details.treatment}. Our coordinator will Call / SMS you on ${details.mobile} very shortly.`);
    setShowToast(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-text-dark flex flex-col justify-between overflow-x-hidden">
      
      {/* Sticky Blue-blur top Header */}
      <Header />

      {/* Main marketing block modules */}
      <main className="flex-1">
        
        {/* Hero Landing */}
        <Hero />

        {/* Core clinical services cards (Treatments & Specialties) */}
        <Services />

        {/* Why families trust us */}
        <AboutUs />

        {/* bio data qualifications of Amit Sharma */}
        <AboutDoctor />

        {/* Premium Masonry Gallery & CTA Section */}
        <Gallery />

        {/* Verified human patient reviews and rating elements */}
        <Testimonials />

        {/* Milestone patient progressive timeline */}
        <PatientJourney />

        {/* Clinically sound FAQs accordion answers */}
        <FAQSection />

        {/* Dental educational articles */}
        <BlogSection />

        {/* Stronger trust-building and conversion-focused final CTA */}
        <FinalCTA />

        {/* Clinical scheduling input fields and contact map */}
        <AppointmentForm 
          preselectedTreatment={activeTreatment} 
          onFormSubmit={handleAppointmentSuccess} 
        />

      </main>

      {/* Footer metadata copyright maps */}
      <Footer />

      {/* Interactive Chatbot and WhatsApp toggler */}
      <Chatbot />

      {/* Premium Lead Capture Popup Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setActiveTreatment('');
        }}
        onSubmitSuccess={handleBookingModalSuccess}
        preselectedTreatment={activeTreatment}
      />

      {/* Toast alert confirmation */}
      <Toast 
        show={showToast} 
        message={toastMessage} 
        details={toastDetails} 
        onClose={() => setShowToast(false)} 
      />

      {/* Sticky Bottom Actions Bar: Mobile view exclusively */}
      <AnimatePresence>
        {showStickyBar && !isMobileMenuOpen && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 shadow-[0_-4px_16px_rgba(10,37,64,0.06)] px-4 py-1.5 z-40"
          >
            <div className="flex w-full gap-1.5 items-center">
              <motion.a 
                href="tel:+919876543210" 
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                className="w-[45%] h-[42px] inline-flex items-center justify-center gap-1 rounded-[10px] bg-[#EBFBFA] hover:bg-[#D7F7F5] border border-[#0FB9B1]/20 text-[#0FB9B1] font-body font-bold text-[12px] transition-all"
              >
                <Phone className="w-4 h-4 text-[#0FB9B1]" />
                Call Now
              </motion.a>
              <motion.a 
                href="#book" 
                whileTap={{ scale: 0.94 }}
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(15, 185, 177, 0)",
                    "0 0 0 6px rgba(15, 185, 177, 0.25)",
                    "0 0 0 12px rgba(15, 185, 177, 0)"
                  ]
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  },
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  },
                  type: "spring",
                  stiffness: 450,
                  damping: 15
                }}
                className="w-[55%] h-[42px] inline-flex items-center justify-center gap-1 rounded-[10px] bg-[#0FB9B1] hover:bg-[#0CA29B] text-white font-body font-bold text-[12px] shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-white" />
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
