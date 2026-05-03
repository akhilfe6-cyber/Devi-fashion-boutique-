import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { MessageCircle, Phone } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'call';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 relative overflow-hidden active:scale-95";
  
  const variants = {
    primary: "bg-[#2D2424] text-white shadow-[0_10px_30px_-5px_rgba(45,36,36,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(45,36,36,0.5)] hover:-translate-y-1 active:translate-y-0",
    secondary: "bg-gradient-to-r from-[#D48C8C] to-[#E8B4B4] text-white shadow-[0_10px_30px_-5px_rgba(212,140,140,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(212,140,140,0.5)] hover:-translate-y-1 active:translate-y-0",
    whatsapp: "bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:translate-y-0",
    call: "bg-[#D4AF37] text-white shadow-[0_10px_30px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.5)] hover:-translate-y-1 active:translate-y-0",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white hover:-translate-y-1 active:translate-y-0"
  };

  const sizes = {
    sm: "px-6 py-2 text-xs tracking-widest",
    md: "px-10 py-4 text-sm tracking-[0.2em]",
    lg: "px-12 py-5 text-base tracking-[0.2em]"
  };

  return (
    <motion.button
      whileHover={{ y: -4 }}
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {variant === 'whatsapp' && <MessageCircle className="w-5 h-5" />}
        {variant === 'call' && <Phone className="w-4 h-4" />}
        {children}
      </span>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
