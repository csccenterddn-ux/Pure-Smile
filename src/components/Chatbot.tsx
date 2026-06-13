import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Chatbot() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [viewedTreatment, setViewedTreatment] = useState<string | null>(null);

  useEffect(() => {
    const handleMobileMenu = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setIsMobileMenuOpen(customEvent.detail.open);
    };
    window.addEventListener('mobile-menu-changed', handleMobileMenu);
    return () => window.removeEventListener('mobile-menu-changed', handleMobileMenu);
  }, []);

  useEffect(() => {
    const handleModalChanged = (e: Event) => {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setIsModalOpen(customEvent.detail.open);
    };
    window.addEventListener('modal-changed', handleModalChanged);
    return () => window.removeEventListener('modal-changed', handleModalChanged);
  }, []);

  useEffect(() => {
    const handleSetSelectedTreatment = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setViewedTreatment(customEvent.detail);
      }
    };

    window.addEventListener('set-selected-treatment', handleSetSelectedTreatment);
    window.addEventListener('set-selected-treatment-context', handleSetSelectedTreatment);

    return () => {
      window.removeEventListener('set-selected-treatment', handleSetSelectedTreatment);
      window.removeEventListener('set-selected-treatment-context', handleSetSelectedTreatment);
    };
  }, []);

  useEffect(() => {
    // Check if session storage has it dismissed
    const dismissed = sessionStorage.getItem('wa-prompt-dismissed');
    if (dismissed === 'true') return;

    // Check if device is mobile
    const isMobileDevice = window.innerWidth < 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobileDevice) return;

    // Show after 7 seconds of user presence/loading
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // Hide the floating button completely when mobile navigation menu is open or modal/popup is open
  if (isMobileMenuOpen || isModalOpen) return null;

  const handleClosePrompt = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPrompt(false);
    sessionStorage.setItem('wa-prompt-dismissed', 'true');
  };

  // Dynamically compute the message text for WhatsApp
  const promptText = viewedTreatment
    ? `Hi, I'm interested in ${viewedTreatment}. I'd like to get some guidance.`
    : "Hi PureSmile Dental, I'd like to get some guidance on treatments.";

  const floatText = viewedTreatment
    ? `Hi, I'm interested in ${viewedTreatment}. I'd like to learn more and book an appointment.`
    : "Hi PureSmile Dental, I'd like to book an appointment.";

  return (
    <div className="fixed bottom-[84px] sm:bottom-[30px] right-[20px] sm:right-[30px] z-50 pointer-events-none">
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-[66px] sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 right-0 sm:right-[72px] w-[205px] sm:w-[215px] bg-white text-slate-800 p-2.5 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-slate-100 hidden md:flex items-start gap-2 pointer-events-auto z-40"
          >
            {/* Link content for triggering click */}
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(promptText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 flex-1 select-none"
            >
              {/* WhatsApp Green Icon Wrapper */}
              <div className="w-7 h-7 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              
              <div className="text-left py-0.5 pr-2.5">
                <p className="text-xs font-bold text-[#0A2540] leading-snug">Need Help?</p>
                <p className="text-[10px] font-semibold text-[#25D366] mt-0.5 whitespace-nowrap">Chat with us on WhatsApp</p>
              </div>
            </a>

            {/* Close cross icon */}
            <button
              onClick={handleClosePrompt}
              className="absolute top-2 right-2 p-0.5 text-slate-400 opacity-40 hover:opacity-100 rounded-full hover:bg-slate-50 transition-all duration-200 cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Float Trigger */}
      <motion.a
        href={`https://wa.me/919876543210?text=${encodeURIComponent(floatText)}`}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 10px 15px -3px rgba(37, 211, 102, 0.4), 0 0 0 0px rgba(15, 185, 177, 0.3)",
            "0 15px 25px -5px rgba(37, 211, 102, 0.5), 0 0 0 12px rgba(15, 185, 177, 0)",
            "0 10px 15px -3px rgba(37, 211, 102, 0.4), 0 0 0 0px rgba(15, 185, 177, 0)"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3.5, 
          ease: "easeInOut" 
        }}
        className="w-14 h-14 sm:w-[60px] sm:h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#1da851] relative group shrink-0 transition-colors duration-300 pointer-events-auto shadow-lg"
        title="Chat on WhatsApp"
      >
        {/* Safe Premium Hover Tooltip (Desktop only) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0D1B2A] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          WhatsApp Clinic
        </span>
        
        {/* WhatsApp Icon Vector SVG (crisp and centered) */}
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}
