import React from 'react';

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeWidth?: number;
}

export default function LogoIcon({ className = 'w-6 h-6', strokeWidth = 1.5, ...props }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Symmetrical luxury healthcare-grade tooth silhouette */}
      <path d="M6 7C6 5 7.5 3.5 9.5 3.5C10.8 3.5 11.4 4.5 12 4.5C12.6 4.5 13.2 3.5 14.5 3.5C16.5 3.5 18 5 18 7C18 9.5 17 11.2 16 13C15.5 14 15.5 15.5 15.7 17C15.9 18.5 14.8 20 13.8 20C12.8 20 12.4 18.5 12 17C11.6 18.5 11.2 20 10.2 20C9.2 20 8.1 18.5 8.3 17C8.5 15.5 8.5 14 8 13C7 11.2 6 9.5 6 7Z" />
      
      {/* Subtle, beautiful smile curve integrated gracefully into the tooth’s core */}
      <path d="M8.5 10.5C9.5 12.2 14.5 12.2 15.5 10.5" strokeWidth={strokeWidth + 0.3} />

      {/* Deluxe 4-point cosmetic star sparkle positioned professionally */}
      <path d="M19 2.5L19.4 3.7L20.6 4L19.4 4.3L19 5.5L18.6 4.3L17.4 4L18.6 3.7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
