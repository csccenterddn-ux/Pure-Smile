import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ToastProps {
  show: boolean;
  message: string;
  details: string;
  onClose: () => void;
}

export default function Toast({ show, message, details, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ cubicBezier: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
          className="fixed top-20 right-4 z-[9999] bg-white border-l-4 border-emerald-500 rounded-2xl shadow-2xl p-5 border border-mid-grey flex items-start gap-4 max-w-sm"
        >
          {/* Check Circle logo */}
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="text-left flex-1">
            <p className="text-sm font-heading font-extrabold text-text-dark leading-snug">
              {message}
            </p>
            <p className="text-xs text-text-mid font-body mt-1 leading-relaxed">
              {details}
            </p>
          </div>

          {/* Close x */}
          <button 
            type="button" 
            onClick={onClose} 
            className="text-text-muted hover:text-text-dark p-1 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
