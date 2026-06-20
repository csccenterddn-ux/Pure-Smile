import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Check, Phone, Sparkles, ChevronLeft, ChevronRight, X, Calendar } from 'lucide-react';

// Premium Filter Categories
const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'clinic', label: 'Clinic' },
  { id: 'patient-care', label: 'Patient Care' },
  { id: 'before-after', label: 'Before & After' }
];

interface GalleryItem {
  id: number;
  category: string;
  tab: 'clinic' | 'patient-care' | 'before-after';
  imageUrl: string;
  aspect: 'video' | 'square' | 'portrait';
}

// Curated selection of premium dental-specific images (no non-dental clutter)
const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: 'Reception Suite',
    tab: 'clinic',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE-ZGhiYgiKPdR1fV6GE3h4BkmUAZRYR_bVSCnhBkWweBE75wq7loMmtuYgnFe4AAerEdgxZ816KQVb47-PGBvPzu8ct7pl9UjiW0tFarRRFYS0srdho8P6WCcQlooDnWpUkXNR=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 2,
    category: 'Dental Clinic Operatory',
    tab: 'clinic',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGkreH6ozBVfHTV-6LJXLToDDXegfeByNP35abmuN4LE3hmMtk7XS1mizFbu4LaRffY0Po0luIVxT_EPKkMMBSteVX6LacJBmsGItkqz82wc3Eu7YFvCMD-Svob-DrtfEMzm-Yi=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 3,
    category: 'Premium Clinic Sanctuary',
    tab: 'clinic',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFRKq0SguZt1VZW27Ur1Ayw2zVGLfzakf1ClmzJbXTSUDyADjPDhy3hAsWKPRsKWI9chnPfSQcOgS0FKquqOqwKPwa85UO4Sn6gi4oX0YrzU0MX_DKr97fR7He5eOvU1jp5KSk=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 4,
    category: 'Advanced Diagnosis Center',
    tab: 'clinic',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFwt3fotgvtlM4VUYswn7Iq9q8dQBDlWQE00KyorZSKWvS0JP3bSp-d1_-M9eNtJdLXv7V5-qiTItd7u0jIIYHNtQ7ecG7FMaRqmPPeU-sFq62s1HecG5JMD6QoprXOdJqn3kI_VQ=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 6,
    category: 'Doctor Consultation',
    tab: 'patient-care',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFntDw59hW3mIswPqTBdEvOc5do0IxFcpNDr_rCQwZ9H-5gRNZmuTjJOLgjWaOj-nHDFSPGe2eyTQ-vTCRO6uh89d5EbK30weGwiET6f5HyTfOZeWgV0-LabtX3w48wJ-7ywRXg=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 7,
    category: 'Patient Care Environment',
    tab: 'patient-care',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGDvv3XDkb-jDfG5iV7Sc3Y42VZ6tC4JbSCNne4DiSEiSoiP2iYBl-eCxlezppxAoA66pCi3ChjVGt1nu1lFBWZL-cl8qWejM662jHdcAdJ6-FEmAhWx39tMo3Ou_nExgqUa2cX=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 14,
    category: 'Expert Dental Treatment',
    tab: 'patient-care',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFAEUGDzlU89gu2h44Adm39YeIGz0SA3II1r1vpcbIEDO4f9O_UiqBtRpu-jaSoofdvscLlv_pe9K3dJxKZIVdeQ5Ebg-zcueg6RM8pSe_t1AC3mbWp8dXEXhv1giFx-ZWaNkwTyg=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 15,
    category: 'Premium Patient Comfort Care',
    tab: 'patient-care',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHaULhqgctoXEupqxDaWOnk5r4De_A8uwNjTwi81l4aQw7hqh2y4mrArTFBTLjFEPwiYisaymquBQQPnnH7SXjOu_l3Hc0xxGC6DgUP6Bvle71JKD_SEqTlDihvxugJjmBj47g=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 16,
    category: 'Personalized Clinical Care Discussion',
    tab: 'patient-care',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFTaZ7dcQ3Duudpnnh3bHDFqZA6k22qr08AvFuxxDpsyBHJ9n5gUgINBZ2tVpx2d5OustQtmyQH3kTil7ItgCyVA1Ab_x1DJ7KT6UX3hF4xbQCrxgXjLvVUS2aD6Go48K0ZnYnc3OjPeMc=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  {
    id: 17,
    category: 'Patient Care Environment & Comfort',
    tab: 'patient-care',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFRKq0SguZt1VZW27Ur1Ayw2zVGLfzakf1ClmzJbXTSUDyADjPDhy3hAsWKPRsKWI9chnPfSQcOgS0FKquqOqwKPwa85UO4Sn6gi4oX0YrzU0MX_DKr97fR7He5eOvU1jp5KSk=s1360-w1360-h1020-rw',
    aspect: 'video'
  },
  // Smile Transformations (Before & After) from uploaded clinical cases
  {
    id: 10,
    category: 'Implant Bridge Restoration',
    tab: 'before-after',
    imageUrl: '/before-after/implantbridges1.jpg',
    aspect: 'square'
  },
  {
    id: 101,
    category: 'Single Posterior Implant Restoration',
    tab: 'before-after',
    imageUrl: '/before-after/implantbridges-single1.jpg',
    aspect: 'square'
  },
  {
    id: 11,
    category: 'Advanced Full Bridge Restoration',
    tab: 'before-after',
    imageUrl: '/before-after/implantbridges4.jpg',
    aspect: 'square'
  },
  {
    id: 102,
    category: 'Single Implant Treatment Case',
    tab: 'before-after',
    imageUrl: '/before-after/implantbridges-single3.jpg',
    aspect: 'square'
  },
  {
    id: 12,
    category: 'Smile Makeover Result',
    tab: 'before-after',
    imageUrl: '/before-after/17.webp',
    aspect: 'square'
  },
  {
    id: 103,
    category: 'Smile Transformation Baseline',
    tab: 'before-after',
    imageUrl: '/before-after/88-2.webp',
    aspect: 'square'
  },
  {
    id: 13,
    category: 'Full-Arch All-on-4 Restoration',
    tab: 'before-after',
    imageUrl: '/before-after/allon4.jpg',
    aspect: 'square'
  },
  {
    id: 18,
    category: 'Full-Arch All-on-6 Rehabilitation',
    tab: 'before-after',
    imageUrl: '/before-after/allon6.webp',
    aspect: 'square'
  },
  {
    id: 19,
    category: 'Teeth Alignment & Aesthetic Design',
    tab: 'before-after',
    imageUrl: '/before-after/unnamed7.webp',
    aspect: 'square'
  },
  {
    id: 20,
    category: 'Aesthetic Smile Designing Case',
    tab: 'before-after',
    imageUrl: '/before-after/aliya.png',
    aspect: 'square'
  },
  {
    id: 104,
    category: 'Initial Teeth Alignment State',
    tab: 'before-after',
    imageUrl: '/before-after/licquu5.jpg',
    aspect: 'square'
  },
  {
    id: 21,
    category: 'Single Tooth Implant Restoration',
    tab: 'before-after',
    imageUrl: '/before-after/implantbridges-single4.jpg',
    aspect: 'square'
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const itemsPerPage = 6;

  // Reset pagination on category switch
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const filteredItems = activeTab === 'all' 
    ? (() => {
        const beforeAfterItems = GALLERY_ITEMS.filter(item => item.tab === 'before-after');
        const firstSixBeforeAfter = beforeAfterItems.slice(0, 6);
        const firstSixIds = new Set(firstSixBeforeAfter.map(item => item.id));
        const remainingItems = GALLERY_ITEMS.filter(item => !firstSixIds.has(item.id));
        return [...firstSixBeforeAfter, ...remainingItems];
      })()
    : GALLERY_ITEMS.filter(item => item.tab === activeTab);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const headingText = activeTab === 'before-after' 
    ? 'Smile Transformations' 
    : activeTab === 'all'
    ? 'Smile Transformations'
    : 'Inside Pure Smile Clinic';

  const descriptionText = activeTab === 'before-after' 
    ? 'Witness the breathtaking results of our specialized cosmetic and orthodontic treatments designed to restore confidence.'
    : activeTab === 'all'
    ? 'Explore our complete collection of dramatic smile transformations, advanced clinic interiors, and comforting care processes.'
    : 'Explore our modern dental facility, advanced technology, and patient-focused environment designed for comfort, safety, and exceptional care.';

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <span className="text-xs font-bold tracking-widest text-[#0FB9B1] uppercase bg-[#ECFDF5] border border-[#D1FAE5] px-4 py-1.5 rounded-full inline-block mb-3.5 shadow-sm select-none">
          SMILE GALLERY
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0A2540] tracking-tight leading-tight mb-4">
          {headingText}
        </h2>
        <p className="text-base text-[#475569] font-medium leading-relaxed font-sans max-w-2xl mx-auto mb-10 antialiased">
          {descriptionText}
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all relative select-none cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0FB9B1] text-white shadow-md shadow-[#0FB9B1]/20 scale-[1.03]'
                  : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#0FB9B1] hover:text-[#0FB9B1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Premium Masonry-Style Gallery Grid (Displays 6 clean visual cards only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxItem(item)}
                className="relative group rounded-3xl overflow-hidden cursor-pointer bg-slate-100 border border-[#E2E8F0] shadow-sm select-none"
              >
                
                {/* Image Frame Wrapper */}
                <div className={`relative overflow-hidden w-full ${
                  item.aspect === 'video' ? 'aspect-[16/10]' : 'aspect-square'
                }`}>
                  {/* Visual content representing the clinic card or portfolio case */}
                  <img 
                    src={item.imageUrl} 
                    alt={item.category}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Elegant Gradient Overlay Mask on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
                  
                  {/* Subtle Hover Action Pill Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md text-[#0A2540] p-4 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <Eye className="w-5 h-5 text-[#0FB9B1]" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Navigation Controls for browsing additional cards */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10 select-none">
            <button
              type="button"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-3 bg-white border border-[#E2E8F0] text-[#0A2540] hover:text-[#0FB9B1] disabled:opacity-30 disabled:hover:text-[#0A2540] rounded-full shadow-sm transition-all duration-300 hover:border-[#0FB9B1] cursor-pointer disabled:cursor-not-allowed"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-[#0FB9B1] text-white shadow-sm'
                      : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#0FB9B1]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-3 bg-white border border-[#E2E8F0] text-[#0A2540] hover:text-[#0FB9B1] disabled:opacity-30 disabled:hover:text-[#0A2540] rounded-full shadow-sm transition-all duration-300 hover:border-[#0FB9B1] cursor-pointer disabled:cursor-not-allowed"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Compact luxury trust strip below the gallery */}
        <div className="border-t border-b border-[#E2E8F0] mt-16 py-8 select-none bg-white rounded-3xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-xs text-[#0A2540] font-sans font-bold">
            <span className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-[#0FB9B1] stroke-[3.5] bg-[#ECFDF5] rounded-full p-0.5" />
              15+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-[#0FB9B1] stroke-[3.5] bg-[#ECFDF5] rounded-full p-0.5" />
              12,000+ Happy Patients
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-[#0FB9B1] stroke-[3.5] bg-[#ECFDF5] rounded-full p-0.5" />
              Advanced Digital Technology
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-[#0FB9B1] stroke-[3.5] bg-[#ECFDF5] rounded-full p-0.5" />
              Class-B Sterilization
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox / Slider Comparison Modal Component */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A1628]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxItem(null)}
          >
            <div 
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-white/10 relative text-left cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top corner */}
              <button 
                type="button" 
                onClick={() => setLightboxItem(null)}
                className="absolute top-5 right-5 z-40 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 focus:outline-none transition-colors border border-white/10 cursor-pointer"
                aria-label="Close portal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-2 sm:p-4 bg-[#F8FAFC]">
                {/* Media frame panel */}
                <div className="bg-black/5 rounded-2xl flex items-center justify-center relative min-h-[300px] sm:min-h-[460px] max-h-[70vh] select-none overflow-hidden">
                  <img 
                    src={lightboxItem.imageUrl} 
                    alt={lightboxItem.category} 
                    className="w-full h-full object-contain max-h-[70vh]"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-white/10 select-none">
                    {lightboxItem.category}
                  </div>
                </div>

                {/* Pure Minimalist Action/Details bottom frame */}
                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                  <span className="text-xs text-[#0A2540] font-sans font-bold">
                    Pure Smile Clinic • Premium Dental Care
                  </span>
                  <a 
                    href="#book"
                    onClick={() => setLightboxItem(null)}
                    className="px-6 py-2.5 bg-[#0FB9B1] hover:bg-[#0CA29B] text-white font-sans font-bold text-xs rounded-full shadow-md text-center transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Free Consultation
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
