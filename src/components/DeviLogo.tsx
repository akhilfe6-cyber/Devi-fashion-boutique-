import React from 'react';
import { motion } from 'motion/react';

export function DeviLogo({ className = "w-10 h-10", color = "#D48C8C" }: { className?: string; color?: string }) {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ 
        y: [0, -6, 0],
        rotateX: [0, 10, 0],
        rotateY: [0, 10, 0]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Outer Luxury Ring */}
      <motion.circle 
        cx="50" cy="50" r="48" 
        stroke="#D4AF37" 
        strokeWidth="0.5" 
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* The D structure */}
      <path 
        d="M35 25C35 25 75 25 75 50C75 75 35 75 35 75V25Z" 
        stroke={color} 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="drop-shadow-sm"
      />
      
      {/* Elegant Inner Curve */}
      <motion.path 
        d="M35 40C35 40 60 40 60 50C60 60 35 60 35 60" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
        opacity="0.4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Luxury Gems */}
      <motion.circle 
        cx="35" cy="25" r="4" fill="#D4AF37" 
        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle 
        cx="35" cy="75" r="4" fill="#D4AF37" 
        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle 
        cx="75" cy="50" r="3" fill="#D4AF37" 
        animate={{ opacity: [1, 0.4, 1], scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Sparkles */}
      <motion.path 
        d="M50 40L50 35M55 45L60 45" 
        stroke="#D4AF37" 
        strokeWidth="1" 
        strokeLinecap="round"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}
