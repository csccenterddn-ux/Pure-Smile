import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles, Smile, HeartPulse, Baby, Award, X, Check, Clock, Phone, Zap, Heart, Calendar, Shield, Crown, Stethoscope, Syringe, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTreatment } from '../context/TreatmentContext';

// Custom healthcare-grade dental implant icon featuring a tooth crown, abutment post, and threaded screw fixture
const ImplantIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Dental Crown / Tooth Shape on top */}
    <path d="M6 5.5C6 4.3 7 3.5 9 3.5C10.5 3.5 11.2 4.5 12 4.5C12.8 4.5 13.5 3.5 15 3.5C17 3.5 18 4.3 18 5.5C18 7.5 17 9 15.5 10H8.5C7 9 6 7.5 6 5.5Z" />
    {/* Abutment (connection post) */}
    <path d="M9.5 10L10.5 12.5H13.5L14.5 10" />
    {/* Implant Screw Fixture */}
    <path d="M10.5 12.5H13.5V17C13.5 18 12.8 19 12 19s-1.5-1-1.5-2V12.5Z" />
    {/* Thread lines of the screw */}
    <path d="M10.5 14.2H13.5" />
    <path d="M10.5 15.8H13.5" />
    <path d="M11 17.4H13" />
  </svg>
);

// Custom healthcare-grade teeth whitening icon featuring a clean tooth silhouette with star shine details
const WhiteningIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Cohesive tooth crown and root contour structure */}
    <path d="M6 6C6 4.5 7.2 3.5 9.2 3.5C10.7 3.5 11.3 4.5 12 4.5C12.7 4.5 13.3 3.5 14.8 3.5C16.8 3.5 18 4.5 18 6C18 7.8 17 9.2 15.7 10C16.5 11.5 17 13.5 17 15C17 17.5 15.5 19.5 14.2 19.5C13.2 19.5 12.8 18 12.3 16C12.1 15 11.9 14 12 14c.1 0-.1 1-.3 2C11.2 18 10.8 19.5 9.8 19.5C8.5 19.5 7 17.5 7 15C7 13.5 7.5 11.5 8.3 10C7 9.2 6 7.8 6 6Z" />
    {/* Micro-sparkle stars for professional dental whitening effect */}
    <path d="M19.5 2L20.2 3.8L22 4.5L20.2 5.2L19.5 7L18.8 5.2L17 4.5L18.8 3.8Z" fill="currentColor" stroke="none" />
    <path d="M4.5 9L4.9 10.1L6 10.5L4.9 10.9L4.5 12L4.1 10.9L3 10.5L4.1 10.1Z" fill="currentColor" stroke="none" />
  </svg>
);

// Custom healthcare-grade clear aligner tray icon depicting orthodontic alignment and transparent sleeve
const AlignerIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Aligned Teeth Outline situated underneath the tray */}
    <path d="M6 11C7.8 13.2 16.2 13.2 18 11" />
    <path d="M6.5 10C8.2 8.8 15.8 8.8 17.5 10" />
    <path d="M12 9V12.2" />
    <path d="M9.5 9.2V11.8" />
    <path d="M7.2 9.5V11.2" />
    <path d="M14.5 9.2V11.8" />
    <path d="M16.8 9.5V11.2" />

    {/* Clear plastic Aligner Tray Sleeve cased over the entire teeth structure */}
    <path d="M3.5 12.5C4.5 8 19.5 8 20.5 12.5" />
    <path d="M3.5 12.5C5.5 15.5 18.5 15.5 20.5 12.5" />
    
    {/* Custom scalloped fit details specifying thermoformed orthodontic chambers */}
    <path d="M6 7.5V14.5" strokeDasharray="1.5 2" opacity="0.65" />
    <path d="M9 7V15" strokeDasharray="1.5 2" opacity="0.65" />
    <path d="M12 6.8V15.2" strokeDasharray="1.5 2" opacity="0.65" />
    <path d="M15 7V15" strokeDasharray="1.5 2" opacity="0.65" />
    <path d="M18 7.5V14.5" strokeDasharray="1.5 2" opacity="0.65" />

    {/* Orthodontic alignment force indicators signifying straightening transformation */}
    <path d="M3 15.5L4.5 14L6 15.5" />
    <path d="M21 15.5L19.5 14L18 15.5" />
  </svg>
);

// Custom healthcare-grade smile design icon featuring a premium, elegant smile contour with clearly defined upper and lower arches, aligned cosmetic teeth, and delicate beauty sparkles
const MakeoverIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Upper Lip Contour */}
    <path d="M3 11C6.5 8.5 9.5 9 12 10C14.5 9 17.5 8.5 21 11" />
    
    {/* Lower Lip Contour / Outer Smile Arc */}
    <path d="M3 11C6 18 18 18 21 11" />

    {/* Upper Teeth Gingival Border */}
    <path d="M5.5 10.5C8 9.5 16 9.5 18.5 10.5" opacity="0.8" />
    
    {/* Horizontal Bite Split Line running symmetrically */}
    <path d="M4.5 12.5C7.5 14 16.5 14 19.5 12.5" />
    
    {/* Lower Teeth Base Border */}
    <path d="M6 14.5C8.5 16 15.5 16 18 14.5" opacity="0.8" />

    {/* Perfectly Aligned Symmetrical Upper Teeth Dividers */}
    <path d="M12 9.8V13.8" />
    <path d="M9.5 10.1V13.3" />
    <path d="M7 10.6V12.6" />
    <path d="M14.5 10.1V13.3" />
    <path d="M17 10.6V12.6" />

    {/* Perfectly Aligned Symmetrical Lower Teeth Dividers */}
    <path d="M12 13.8V15.2" />
    <path d="M9.8 13.5V14.8" />
    <path d="M7.6 13V14.1" />
    <path d="M14.2 13.5V14.8" />
    <path d="M16.4 13V14.1" />

    {/* Custom dual cosmetic sparkles signifying brilliant aesthetic enhancement */}
    <path d="M19 2.5L19.4 3.7L20.6 4L19.4 4.3L19 5.5L18.6 4.3L17.4 4L18.6 3.7Z" fill="currentColor" stroke="none" />
    <path d="M21.5 5.5L21.7 6.3L22.5 6.5L21.7 6.7L21.5 7.5L21.3 6.7L20.5 6.5L21.3 6.3Z" fill="currentColor" stroke="none" />
  </svg>
);

// Custom healthcare-grade root canal icon featuring tooth anatomy cross-section, pulp chamber, and detailed root canal pathways
const RootCanalIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Clinical contoured outer tooth structure (Crown & Roots) */}
    <path d="M6 6C6 4.5 7.2 3.5 9.2 3.5C10.7 3.5 11.3 4.5 12 4.5C12.7 4.5 13.3 3.5 14.8 3.5C16.8 3.5 18 4.5 18 6C18 7.8 17 9.2 15.7 10C16.5 11.5 17 13.5 17 15C17 17.5 15.5 19.5 14.2 19.5C13.2 19.5 12.8 18 12.3 16C12.1 15 11.9 14 12 14c.1 0-.1 1-.3 2C11.2 18 10.8 19.5 9.8 19.5C8.5 19.5 7 17.5 7 15C7 13.5 7.5 11.5 8.3 10C7 9.2 6 7.8 6 6Z" />
    
    {/* Pulpal Chamber inside the tooth crown */}
    <path d="M9.5 7.5C9.5 6.5 10.5 5.8 12 5.8C13.5 5.8 14.5 6.5 14.5 7.5C14.5 8.5 13.5 9.2 12.5 9.8C12 10.1 12 10.5 12 11" />
    
    {/* Left Root Canal pathway (Endodontic treatment line down the left root) */}
    <path d="M11.5 11C11.1 12.2 10.2 13.8 10.2 16" />
    
    {/* Right Root Canal pathway (Endodontic treatment line down the right root) */}
    <path d="M12.5 11C12.9 12.2 13.8 13.8 13.8 16" />
    
    {/* Highlighted treatment fillings / root canal files within the canals */}
    <path d="M11.5 11.5C11.2 12.5 10.4 14.2 10.4 15.5" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="1 1.5" />
    <path d="M12.5 11.5C12.8 12.5 13.6 14.2 13.6 15.5" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="1 1.5" />
  </svg>
);

// Custom healthcare-grade wisdom tooth surgical icon depicting a molar being extracted with surgical lift lines
const WisdomToothIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Gingival/bone level line with socket indentation */}
    <path d="M3 18C6 18 7 19.5 9 19.5C11 19.5 12 18 15 18H21" opacity="0.5" />
    
    {/* Tooth elevated / tilted in process of extraction */}
    <path d="M8 9.5C8 8.3 8.8 7.5 10.4 7.5C11.6 7.5 12.1 8.3 12.7 8.3C13.3 8.3 13.7 7.5 14.9 7.5C16.5 7.5 17.3 8.3 17.3 9.5C17.3 10.9 16.5 12 15.5 12.6C16.1 13.8 16.5 15.4 16.5 16.6C16.5 18.6 15.3 20.2 14.3 20.2C13.5 20.2 13.2 19 12.8 17.4C12.6 16.6 12.5 15.8 12.6 15.8c.1 0-.1.8-.2 1.6C11.9 19 11.6 20.2 10.8 20.2C9.8 20.2 8.6 18.6 8.6 16.6C8.6 15.4 9 13.8 9.6 12.6C8.6 12 8 10.9 8 9.5Z" />
    
    {/* Elevation curved lines indicating lifting and direction of removal */}
    <path d="M12 4.5V2" />
    <path d="M9.5 3.5L12 1L14.5 3.5" />
    
    {/* Forces and extraction arcs around the tooth */}
    <path d="M4.5 14C4.5 11 6.5 8.5 9 8" opacity="0.6" strokeDasharray="1.5 2" />
    <path d="M19.5 14C19.5 11 17.5 8.5 15 8" opacity="0.6" strokeDasharray="1.5 2" />
  </svg>
);

// Custom healthcare-grade gum treatment icon displaying a healthy anatomical gum contour snugly wrapping the tooth neck, paired with a precision periodontal/laser healing light
const GumTreatmentIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Anatomical Tooth with visible roots embedded in the gums */}
    <path d="M8 6C8 4.8 9.0 4 10.6 4C11.8 4 11.9 4.8 12.5 4.8C13.1 4.8 13.2 4 14.4 4C16.0 4 17 4.8 17 6C17 7.5 16.2 8.5 15.2 9.2C15.8 10.3 16.2 11.8 16.2 13C16.2 15 15.0 16.5 14.0 16.5C13.2 16.5 12.9 15.4 12.5 13.8C12.3 13 12.2 12.2 12.3 12.2c.1 0-.1.8-.2 1.6C11.6 15.4 11.3 16.5 10.5 16.5C9.5 16.5 8.3 15 8.3 13C8.3 11.8 8.7 10.3 9.3 9.2C8.3 8.5 8 7.5 8 6Z" opacity="0.45" />

    {/* Beautiful, prominent scalloped healthy Gum Line contour wrapping precisely around the tooth neck */}
    <path d="M3 13C4.8 11.2 7.2 11 9 12C10.8 13 13.2 13 15 12C16.8 11 19.2 11.2 21 13" strokeWidth={strokeWidth + 0.3} />
    {/* Parallel support/bone level gum curve below */}
    <path d="M3 16.5C4.8 14.7 7.2 14.5 9 15.5C10.8 16.5 13.2 16.5 15 15.5C16.8 14.5 19.2 14.7 21 16.5" opacity="0.6" />

    {/* Gentle laser or ultrasonic disinfection scanning beam targeting the sulcus */}
    <path d="M19 4L13.5 9.5" />
    <path d="M13.5 9.5L14.5 11" opacity="0.8" />
    
    {/* Micro-healing sparkle/plus representing tissue recovery and sterilization */}
    <path d="M18.5 8.5H21.5" opacity="0.9" />
    <path d="M20 7V10" opacity="0.9" />
  </svg>
);

// Custom healthcare-grade full mouth rehabilitation icon showing a complete, symmetrical, perfectly restored dental arch (full lower/upper teeth arc) under specialized neuromuscular alignment
const RehabIcon = ({ strokeWidth = 1.5, ...props }: React.SVGProps<SVGSVGElement> & { strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Comprehensive restored dental arch (multiple perfectly aligned teeth arranged in a beautiful U-shape / arch) */}
    <path d="M4 16C4 7.5 20 7.5 20 16" strokeWidth={strokeWidth + 0.2} strokeDasharray="1 1.5" opacity="0.4" />
    
    {/* individual teeth symmetrically arranged on the arch */}
    {/* Central incisors */}
    <path d="M11 7.2C11 5.8 11.5 5 12 5C12.5 5 13 5.8 13 7.2V9H11V7.2Z" />
    {/* Lateral incisors & Canines */}
    <path d="M8.5 8C8.5 6.8 9.0 6 9.7 6C10.4 6 10.7 6.8 10.7 8V9.5H8.5V8Z" />
    <path d="M13.3 8C13.3 6.8 13.6 6 14.3 6C15.0 6 15.5 6.8 15.5 8V9.5H13.3V8Z" />
    {/* Premolars */}
    <path d="M6 10C6 9 6.5 8.2 7.2 8.2C7.9 8.2 8.2 9 8.2 10V11H6V10Z" />
    <path d="M15.8 10C15.8 10.1 16.1 9.3 16.8 9.3C17.5 9.3 18 10 18 11H15.8V10Z" opacity="0.9" />
    {/* Molars / Implants on the far ends */}
    <path d="M3.5 13C3.5 12.2 4 11.5 4.8 11.5C5.6 11.5 5.8 12.2 5.8 13V14H3.5V13Z" opacity="0.7" />
    <path d="M18.2 13C18.2 12.2 18.4 11.5 19.2 11.5C20 11.5 20.5 12.2 20.5 13V14H18.2V13Z" opacity="0.7" />

    {/* Neuromuscular force-balancing circle surrounding the entire arch */}
    <path d="M4 12C4 17 8 20.5 12 20.5C16 20.5 20 17 20 12" strokeWidth={strokeWidth} opacity="0.85" />
    
    {/* Sparkles signifying pristine complete rehabilitation and aesthetic renewal */}
    <path d="M12 11.5V15.5" opacity="0.9" />
    <path d="M10 13.5H14" opacity="0.9" />
    
    <path d="M2.5 4L2.9 5.1L4 5.5L2.9 5.9L2.5 7L2.1 5.9L1 5.5L2.1 5.1Z" fill="currentColor" stroke="none" />
    <path d="M21.5 4L21.9 5.1L23 5.5L21.9 5.9L21.5 7L21.1 5.9L20 5.5L21.1 5.1Z" fill="currentColor" stroke="none" />
  </svg>
);

const coreServices = [
  {
    id: 'general',
    title: 'General Dentistry',
    category: 'PREVENTIVE DENTISTRY',
    description: 'Comprehensive checkups, advanced diagnostic imaging, ultrasonic scaling, and personalized preventative care.',
    overview: 'Keep your smile in optimal health with our complete diagnostic and preventive dentistry suite. Through gentle ultrasonic cleanings, precision digital X-rays, and customized preventative hygiene schemes, we detect issues early and preserve your overall well-being.',
    benefits: [
      'Advanced Diagnostics',
      'Ultrasonic Scaling',
      'Healthy Gums',
      'Cavity Prevention'
    ],
    duration: '35–45 Minutes',
    cost: '₹1,500 – ₹3,500',
    recovery: 'Instant',
    tech: ['Intraoral Camera', 'Ultrasonic Scalers', 'Low-Radiation Digital X-Rays'],
    tags: ['Routine Cleaning', 'Dental Filling', 'Oral Checkup'],
    icon: Stethoscope
  },
  {
    id: 'rootcanal',
    title: 'Root Canal Treatment',
    category: 'ENDODONTIC TREATMENT',
    description: 'Save damaged teeth with advanced pain-free root canal procedures and precision care.',
    overview: 'Save infected teeth and eliminate discomfort with advanced pain-free root canal treatment. Using modern rotary instruments and digital precision techniques, we preserve your natural tooth while ensuring maximum comfort and long-term oral health.',
    benefits: [
      'Immediate Pain Relief',
      'Saves Natural Tooth Structure',
      'Precision Root Sealing',
      'Fast Recovery'
    ],
    duration: 'Single Sitting',
    cost: '₹4,500 – ₹8,500',
    recovery: '1–2 Days',
    tech: ['Rotary Endodontics', 'Digital Apex Locators', 'Apex Micromotors'],
    tags: ['Pain-Free', 'Single Sitting', 'Microscope Aided'],
    icon: RootCanalIcon,
    badge: 'MOST POPULAR'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    category: 'IMPLANT DENTISTRY',
    description: 'Permanent tooth replacement solutions designed for strength, comfort, and a natural-looking smile.',
    overview: 'Replace missing teeth and restore your complete chewing function with state-of-the-art dental implants. Designed to fuse with your natural bone, they provide a strong, permanent, and remarkably lifelike solution for long-term health and confidence.',
    benefits: [
      'Natural Appearance',
      'Strong Bite Function',
      'Long-Term Solution',
      'Preserves Jaw Bone'
    ],
    duration: '2–3 Visits',
    cost: '₹25,000 – ₹45,000',
    recovery: '3–7 Days',
    tech: ['Guided Surgery', '3D Imaging', 'Digital Planning'],
    tags: ['Single Implant', 'Full Mouth', 'All-on-4'],
    icon: ImplantIcon,
    badge: 'FLAGSHIP TREATMENT'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    category: 'COSMETIC DENTISTRY',
    description: 'Brighten your smile with safe and effective professional whitening treatments.',
    overview: 'Revitalize your healthy smile with safe and highly effective professional clinical whitening. Our signature treatment gently removes deep stains and discoloration, brightening your teeth by several shades in just a single comfortable clinical session.',
    benefits: [
      'Brighter Smile',
      'Safe Procedure',
      'Low Sensitivity',
      'Long Lasting Results'
    ],
    duration: '1 Session',
    cost: '₹7,000 – ₹12,000',
    recovery: 'Minimal Recovery Required',
    tech: ['Medical LED Light Pulse', 'Desensitizing Gel Liners', 'Custom Home Care Guard'],
    tags: ['Instant Glow', 'Safe', 'Long Lasting'],
    icon: WhiteningIcon
  },
  {
    id: 'makeover',
    title: 'Smile Makeover',
    category: 'COSMETIC DENTISTRY',
    description: 'Transform your smile with customized cosmetic dental solutions.',
    overview: 'Reimagine your entire look with a comprehensive customized cosmetic smile restoration. Combining advanced veneers, contouring, and artistic smile design, we tailor a personalized treatment journey to craft the balanced, radiant smile of your dreams.',
    benefits: [
      'Smile Design',
      'Custom Veneers',
      'Aesthetic Alignment',
      'Personalized Results'
    ],
    duration: 'Customized Treatment Plan',
    cost: '₹35,000 – ₹85,000',
    recovery: '1–3 Days',
    tech: ['Digital Smile Design Studio', 'Ultra-thin E-max Veneers', 'HD Digital Scanning'],
    tags: ['Veneers', 'Smile Design', 'Cosmetic Care'],
    icon: MakeoverIcon,
    badge: 'PATIENT FAVORITE'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    category: 'ORTHODONTIC TREATMENT',
    description: 'Traditional ceramic and metal brackets to align teeth, optimize bites, and correct spacing.',
    overview: 'Perfect your bite alignment and teeth positioning with our comprehensive conventional orthodontic systems. Tailored to children, teens, and adults, we utilize precision materials to correct severe malocclusions and gap spaces safely and predictably.',
    benefits: [
      'Resolves Structural Malocclusion',
      'Improves Long-Term Chewing Dynamics',
      'Enhances Oral Hygiene Capability',
      'Proven Durable Correction Results'
    ],
    duration: '12–18 Months',
    cost: '₹28,000 – ₹55,000',
    recovery: '2–4 Days adjustment sensitivity',
    tech: ['High-Strength Low-Friction Bracket Systems', 'Flexible Ni-Ti Wire Tech', 'Orthodontic Analysis Software'],
    tags: ['Brackets & Wires', 'Bite Correction', 'Gap Closure'],
    icon: Activity
  },
  {
    id: 'aligners',
    title: 'Clear Aligners',
    category: 'ORTHODONTIC TREATMENT',
    description: 'Straighten your teeth discreetly using clear aligner technology designed for comfort.',
    overview: 'Straighten your teeth discreetly with modern clear aligner technology. These removable, custom-engineered aligners gently shift your teeth into perfect alignment without metal brackets, allowing you to maintain your active lifestyle and complete oral hygiene.',
    benefits: [
      'Nearly Invisible',
      'Comfortable Fit',
      'Removable',
      'Custom Treatment Plan'
    ],
    duration: '3–6 Months',
    cost: '₹45,000 – ₹95,000',
    recovery: 'Minimal Recovery Required',
    tech: ['Digital Smile Scan', 'AI Treatment Planning', '3D Simulation'],
    tags: ['Clear Aligners', 'Removable', 'Comfort Fit'],
    icon: AlignerIcon,
    badge: 'MODERN SOLUTION'
  },
  {
    id: 'crowns',
    title: 'Dental Crowns & Bridges',
    category: 'PROSTHODONTIC TREATMENT',
    description: 'Restore structurally compromised or missing teeth with natural-looking custom prosthetic caps.',
    overview: 'Protect, strengthen, and seamlessly restore worn or structurally compromised teeth with premium zirconia or porcelain crowns. Our customized bridge configurations bridge empty spaces securely, anchoring to healthy neighboring support teeth for perfect bite balance.',
    benefits: [
      'Restores Severe Structural Damage',
      'Bridges Gaps of Missing Teeth',
      'Natural Translucency Matching',
      'Extraordinary Durability and Fit'
    ],
    duration: '2 Visits',
    cost: '₹8,000 – ₹18,000',
    recovery: '1–2 Days',
    tech: ['CAD/CAM Digital Milling', 'E-Max & Zirconia Premium Ceramics', 'Optical Impressions'],
    tags: ['Tooth Crown', 'Support Bridge', 'Metal-Free Caps'],
    icon: Crown
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    category: 'PEDIATRIC DENTISTRY',
    description: 'Gentle dental care designed specifically for children and growing smiles.',
    overview: 'Nurture your child\'s developing smile with gentle, compassionate, and preventive oral care. We focus on creating a comforting, fun, and completely anxiety-free atmosphere to build happy dental habits and protect growing teeth.',
    benefits: [
      'Kid Friendly',
      'Gentle Care',
      'Preventive Focus',
      'Anxiety-Free Experience'
    ],
    duration: 'Routine Visits',
    cost: '₹1,500 – ₹4,500',
    recovery: 'Minimal Recovery Required',
    tech: ['Anxiety-free Enticements', 'Pain-free Gel Anesthesia', 'Fluoride Shield Coating'],
    tags: ['Kid Friendly', 'Preventive', 'No Fear'],
    icon: Baby
  },
  {
    id: 'wisdom',
    title: 'Wisdom Tooth Removal',
    category: 'ORAL SURGERY',
    description: 'Gentle, painless extraction of impacted third molars utilizing advanced suture standards.',
    overview: 'Relieve standard wisdom tooth overcrowding, impaction, or chronic pressure pain with highly specialized, minimally invasive extraction techniques. Dr. Amit Sharma secures optimal pain-free block numbing and smooth suture care to guarantee zero distress and flawless socket healing.',
    benefits: [
      'Relieves Jaw & Gums Pressure',
      'Prevents Localized Infection',
      'Incredibly Precise Separation',
      'Painless Localized Anesthesia'
    ],
    duration: '30–60 Minutes',
    cost: '₹4,500 – ₹10,000',
    recovery: '3–5 Days',
    tech: ['Micro-Surgical Extraction', 'Painless Anesthesia Delivery', 'Accelerated Healing Protocol'],
    tags: ['Painless Extraction', 'Impacted Molar', 'Oral Surgery'],
    icon: WisdomToothIcon
  },
  {
    id: 'gum',
    title: 'Gum Treatment',
    category: 'PERIODONTICS',
    description: 'Comprehensive periodontal therapies, deep scaling, root planing, and laser gum line disinfection.',
    overview: 'Save your bone anchors and arrest gum bleeding or regression with specialized periodontal care. We target hidden tartar and bacteria below the gum line using ultrasonic Scaling and Root Planing (SRP) to eliminate tissue swelling and secure ultimate oral health.',
    benefits: [
      'Stops Bleeding and Bad Breath',
      'Reverses Gum Pocket Regression',
      'Prevents Adult Tooth Mobility',
      'Eliminates Deep Subgingival Tartar'
    ],
    duration: '1–2 Visits',
    cost: '₹3,000 – ₹8,000',
    recovery: '1–2 Days',
    tech: ['Ultrasonic Deep Subgingival Scalers', 'Laser Pocket Disinfection', 'Gum Conditioning Gels'],
    tags: ['Periodontology', 'Deep Planing', 'Gum Healing'],
    icon: GumTreatmentIcon
  },
  {
    id: 'rehab',
    title: 'Full Mouth Rehabilitation',
    category: 'FOR ADVANCED REHABILITATION',
    description: 'Total bite reconstruction, neuromuscular alignment, dental implants, and full-mouth restorations.',
    overview: 'Experience a total life renewal with a complete, fully customized full-mouth reconstruction. Dr. Sharma restores severely worn, missing, or broken teeth by combining advanced crowns, implants, veneers, and precise neuromuscular bite optimization to re-establish pristine aesthetics and chewing force.',
    benefits: [
      'Restores Full Chewing Capacity',
      'Full Arch Aesthetic Transformation',
      'Optimal Neuromuscular Alignment',
      'Premium Quality Long-Term Fit'
    ],
    duration: 'Multiple Phase Plan',
    cost: '₹80,000 – ₹1,80,000',
    recovery: 'Customized / Progressive',
    tech: ['Virtual Neuromuscular Tracking', 'Digital Arch Analysis', 'Fully Customized Prosthetics'],
    tags: ['Bite Reconstruction', 'Total Overhaul', 'Advanced Aesthetic'],
    icon: RehabIcon
  }
];

// Stagger Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24 
    } 
  }
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const gridCardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const iconVariants = {
  hidden: { scale: 0.3, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 16,
      delay: 0.12
    }
  }
};

export default function Services() {
  const [activeService, setActiveService] = useState<typeof coreServices[number] | null>(null);
  const { activeTreatment, setActiveTreatment } = useTreatment();
  const hasManuallyClosed = useRef(false);

  const handleClose = useCallback(() => {
    hasManuallyClosed.current = true;
    setActiveService(null);
    setActiveTreatment('');
  }, [setActiveTreatment]);

  // Synchronize activeService with activeTreatment from context
  useEffect(() => {
    if (activeTreatment && !hasManuallyClosed.current) {
      const found = coreServices.find(
        (s) => s.title.toLowerCase() === activeTreatment.toLowerCase() ||
               s.title.toLowerCase().replace(/[^a-z0-9]/g, '') === activeTreatment.toLowerCase().replace(/[^a-z0-9]/g, '')
      );
      if (found && (!activeService || activeService.id !== found.id)) {
        setActiveService(found);
      }
    }
  }, [activeTreatment, activeService]);

  // Keyboard navigation & body scroll lock handling
  useEffect(() => {
    if (!activeService) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeService, handleClose]);

  // Listen for navigation selection from Header or other controls
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const found = coreServices.find(s => s.id === customEvent.detail);
      if (found) {
        hasManuallyClosed.current = false;
        setActiveService(found);
      }
    };
    window.addEventListener('select-service', handleSelectService);
    return () => window.removeEventListener('select-service', handleSelectService);
  }, []);

  return (
    <section id="services" className="scroll-mt-24 bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#0FB9B1] uppercase bg-teal-500/10 border border-[#0FB9B1]/20 px-4 py-1.5 rounded-full inline-block mb-4.5 shadow-sm select-none animate-pulse">
            OUR SPECIALTIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold text-[#0A2540] tracking-tight leading-[1.15] mb-4.5">
            Comprehensive Dental Care,<br className="hidden sm:inline" /> Designed Around Your Comfort
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-normal leading-[1.7] max-w-[680px] mx-auto font-sans">
            From preventive care to advanced smile transformations, we provide modern dental treatments tailored to your needs and long-term oral health.
          </p>
        </motion.div>

        {/* Services Cards Layout in a clean 3-column grid with staggered fade-in animations on scroll */}
        <motion.div 
          id="services-grid" 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coreServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={gridCardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-[#FFFFFF] border border-[rgba(15,185,177,0.12)] hover:border-[#0FB9B1] hover:ring-1 hover:ring-[#0FB9B1] rounded-[24px] py-10 px-8 sm:p-8 shadow-[0_20px_40px_rgba(10,37,64,0.08)] hover:shadow-[0_24px_48px_rgba(10,37,64,0.12)] transition-[border-color,box-shadow] duration-300 ease-out select-none flex flex-col items-start text-left shrink-0 cursor-default"
              >
                {/* Premium elegant badge strictly for flagged treatments */}
                {service.badge && (
                  <span className="absolute top-5 right-6 text-[10px] font-extrabold tracking-wider text-[#0A2540] bg-[#ECFDF5] px-3 py-1.5 rounded-full uppercase select-none border border-[#0FB9B1]/10 shadow-sm">
                    {service.badge}
                  </span>
                )}

                {/* Consistent outline icon container inside custom high-end private healthcare box with smooth scale-up entry animation and hover responsiveness */}
                <motion.div 
                  variants={iconVariants}
                  whileHover={{ 
                    scale: 1.12, 
                    rotate: 3,
                    transition: { type: "spring", stiffness: 400, damping: 10 } 
                  }}
                  className="w-13 h-13 bg-[#ECFDF5] border border-[rgba(15,185,177,0.08)] rounded-[20px] flex items-center justify-center mb-6.5 shadow-sm group-hover:shadow-[0_6px_16px_rgba(15,185,177,0.12)] cursor-pointer"
                >
                  <IconComponent className="w-6 h-6 text-[#0FB9B1]" strokeWidth={1.5} />
                </motion.div>

                {/* Treatment details */}
                <h3 className="text-lg font-heading font-extrabold text-[#0A2540] group-hover:text-[#0FB9B1] transition-colors duration-300 mb-3.5 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#475569] mb-6.5 leading-relaxed font-sans font-normal min-h-[48px]">
                  {service.description}
                </p>

                {/* Premium tag system */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {service.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-semibold text-[#0FB9B1] bg-[#ECFDF5] border border-transparent px-3 py-1.2 rounded-full transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Premium Interactive CTA Link changed from "Learn More" to "View Details" */}
                <button 
                  type="button"
                  onClick={() => {
                    hasManuallyClosed.current = false;
                    setActiveService(service);
                    setActiveTreatment(service.title);
                    window.dispatchEvent(new CustomEvent('set-selected-treatment-context', { detail: service.title }));
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0FB9B1] hover:text-[#0CA29B] group-hover:text-[#0CA29B] transition-colors duration-300 pointer-events-auto cursor-pointer focus:outline-none py-3 px-4 -ml-4 -mb-3 sm:py-0 sm:px-0 sm:m-0 rounded-lg active:bg-[#0FB9B1]/5 sm:active:bg-transparent"
                >
                  View Details <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Premium Treatment Details Modal portal/scrim */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Soft, dark corporate backdrop (rgba(10,37,64,0.65)) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-[#0A2540]/65 backdrop-blur-sm z-40 transition-opacity"
            />

            {/* Custom Modal Content Box (Max Width: 700px, Radius: 28px, Background: #FFFFFF) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative bg-[#FFFFFF] rounded-[28px] overflow-hidden z-50 w-full max-w-[700px] shadow-[0_30px_80px_rgba(10,37,64,0.18)] max-h-[92vh] overflow-y-auto border border-[#E2E8F0] selection:bg-[#0FB9B1] selection:text-white"
            >
              {/* Close Button top-right corner with ESC handle */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-6 right-6 w-9 h-9 bg-slate-100 hover:bg-[#ECFDF5] text-[#475569] hover:text-[#0FB9B1] rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none pointer-events-auto cursor-pointer border border-transparent hover:border-[#0FB9B1]/15"
                aria-label="Close treatment modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Container */}
              <div className="p-6 sm:p-10 text-left">
                
                {/* Header Section: Treatment Icon, Specific Premium Category Label, and Treatment Name */}
                <div className="flex items-start gap-4 sm:gap-5 mb-6 border-b border-slate-100 pb-5 pr-8">
                  <motion.div 
                    initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-13 h-13 bg-[#ECFDF5] border border-[rgba(15,185,177,0.12)] rounded-[20px] flex items-center justify-center shrink-0 shadow-sm"
                  >
                    {React.createElement(activeService.icon, { className: "w-6 h-6 text-[#0FB9B1]", strokeWidth: 1.5 })}
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold text-[#0FB9B1] uppercase tracking-widest leading-none block mb-1">
                      {activeService.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0A2540] tracking-tight leading-tight flex items-center flex-wrap gap-2">
                      {activeService.title}
                      {activeService.badge && (
                        <span className="text-[9px] font-bold tracking-wider text-[#0A2540] bg-[#ECFDF5] px-2.5 py-1 rounded-full uppercase select-none border border-[#0FB9B1]/10 shadow-sm">
                          {activeService.badge}
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                {/* Main Grid Content (Span 7 left, Span 5 right) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column (Span 7) - Treatment-Specific Details */}
                  <div className="md:col-span-7 space-y-6">
                    
                    {/* TREATMENT OVERVIEW */}
                    <div>
                      <h4 className="text-[11px] font-bold text-[#0FB9B1] tracking-wider uppercase mb-2 flex items-center gap-1.5 select-none font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0FB9B1]" />
                        Treatment Overview
                      </h4>
                      <p className="text-sm text-[#475569] leading-relaxed font-sans font-normal antialiased">
                        {activeService.overview}
                      </p>
                    </div>

                    {/* KEY BENEFITS - Treatment Specific with Stagger Reveal */}
                    <div>
                      <h4 className="text-[11px] font-bold text-[#0FB9B1] tracking-wider uppercase mb-3 flex items-center gap-1.5 select-none font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0FB9B1]" />
                        Key Benefits
                      </h4>
                      <motion.ul 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-2.5"
                      >
                        {activeService.benefits.map((benefit, bIdx) => (
                          <motion.li 
                            key={bIdx} 
                            variants={itemVariants}
                            className="flex items-center gap-3 text-sm text-[#475569] font-medium font-sans"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0 border border-[#0FB9B1]/10">
                              <Check className="w-3 h-3 text-[#0FB9B1] stroke-[3]" />
                            </span>
                            <span>{benefit}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* TECHNOLOGY USED - Relevant to each treatment */}
                    <div>
                      <h4 className="text-[11px] font-bold text-[#0FB9B1] tracking-wider uppercase mb-3 flex items-center gap-1.5 select-none font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0FB9B1]" />
                        Technology Used
                      </h4>
                      <motion.ul 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-2.5"
                      >
                        {activeService.tech.map((techItem, tIdx) => (
                          <motion.li 
                            key={tIdx}
                            variants={itemVariants}
                            className="flex items-center gap-3 text-sm text-[#475569] font-semibold font-sans"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0 border border-[#0FB9B1]/10">
                              <Zap className="w-3 h-3 text-[#0FB9B1] fill-[#0FB9B1]" />
                            </span>
                            <span>{techItem}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                  </div>

                  {/* Right Column (Span 5) - Info Cards Stacked with visual hover-lift effect */}
                  <div className="md:col-span-5 space-y-3 md:border-l md:border-slate-100 md:pl-6 pt-4 md:pt-0">
                    
                    {/* TREATMENT DURATION info card */}
                    <motion.div 
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="p-4 rounded-2xl bg-white border border-slate-100 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                    >
                      <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <Clock className="w-5 h-5 text-[#0A2540]" />
                      </div>
                      <div className="font-sans">
                        <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mb-0.5">Treatment Duration</p>
                        <p className="text-sm font-bold text-[#0A2540] leading-tight">{activeService.duration}</p>
                      </div>
                    </motion.div>

                    {/* ESTIMATED COST mint card */}
                    <motion.div 
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="p-4 rounded-2xl bg-[#ECFDF5] border border-[rgba(15,185,177,0.14)] flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                    >
                      <div className="w-10 h-10 bg-[#FFFFFF] border border-[#0FB9B1]/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <span className="text-sm font-black text-[#0FB9B1]">₹</span>
                      </div>
                      <div className="font-sans">
                        <p className="text-[10px] font-bold text-[#0FB9B1] uppercase tracking-wider mb-0.5">Estimated Cost</p>
                        <p className="text-sm font-bold text-[#0A2540] leading-tight">{activeService.cost}</p>
                      </div>
                    </motion.div>

                    {/* RECOVERY TIME recovery card in same visual style */}
                    <motion.div 
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="p-4 rounded-2xl bg-[#ECFDF5] border border-[rgba(15,185,177,0.14)] flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                    >
                      <div className="w-10 h-10 bg-[#FFFFFF] border border-[#0FB9B1]/10 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <Heart className="w-4.5 h-4.5 text-[#0FB9B1] fill-[#0FB9B1]/5" />
                      </div>
                      <div className="font-sans">
                        <p className="text-[10px] font-bold text-[#0FB9B1] uppercase tracking-wider mb-0.5">Recovery</p>
                        <p className="text-sm font-bold text-[#0A2540] leading-tight">{activeService.recovery}</p>
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* Trust Strip */}
                <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 pt-5 pb-1 text-[11px] sm:text-xs text-[#64748B] font-semibold border-t border-slate-100 flex-wrap select-none font-sans">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                    ISO Certified Clinic
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline" />
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                    12,000+ Happy Patients
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline" />
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <Check className="w-3.5 h-3.5 text-[#0FB9B1] stroke-[3]" />
                    4.9 Google Rating
                  </span>
                </div>

                {/* CTA Section: Unequal prominent actions (Book Consultation visually dominant, Call Now secondary) */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4 pt-4 border-t border-slate-100 font-sans">
                  
                  {/* Primary dominant teal booking button with gentle hover shadow pulse */}
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      const treatmentName = activeService.title;
                      hasManuallyClosed.current = true;
                      setActiveService(null);
                      setActiveTreatment(treatmentName);
                      window.dispatchEvent(new CustomEvent('open-booking-modal', {
                        detail: { treatment: treatmentName }
                      }));
                    }}
                    whileHover={{ y: -2, scale: 1.012 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex-[2] py-4 bg-[#0FB9B1] hover:bg-[#0CA29B] text-white font-bold text-center rounded-full text-sm transition-all duration-300 shadow-[0_10px_20px_rgba(15,185,177,0.18)] hover:shadow-[0_15px_30px_rgba(15,185,177,0.32)] flex items-center justify-center gap-2 pointer-events-auto cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </motion.button>
                  
                  {/* Secondary calling button with elegant navy outline design */}
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ y: -2, scale: 1.012 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex-1 py-4 border border-[#0A2540] hover:border-[#0FB9B1] bg-white text-[#0A2540] hover:text-[#0FB9B1] font-bold text-center rounded-full text-sm transition-all duration-300 flex items-center justify-center gap-2 pointer-events-auto"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </motion.a>
                </div>

              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
