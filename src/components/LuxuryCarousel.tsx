import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { BOUTIQUE_WHATSAPP_LINK } from '../constants';
import Button from './Button';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=2400",
    title: "Bridal Masterpieces",
    subtitle: "Custom Maggam Work & Zardosi",
    tag: "Trending Now"
  },
  {
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=2400",
    title: "Designer Blouses",
    subtitle: "Artisanal Hand-Stitched Patterns",
    tag: "New Arrival"
  },
  {
    image: "https://images.unsplash.com/photo-1506629082928-19274681613d?auto=format&fit=crop&q=80&w=2400",
    title: "Eco-Luxe Leggings",
    subtitle: "Premium Stretch Comfort",
    tag: "Active Life"
  },
  {
    image: "https://images.unsplash.com/photo-1621415715017-d516248cc92d?auto=format&fit=crop&q=80&w=2400",
    title: "Organza Dreamscapes",
    subtitle: "Floral Hand-Painted Elegance",
    tag: "Exclusive"
  },
  {
    image: "https://images.unsplash.com/photo-1595914146118-2e1f487f3c12?auto=format&fit=crop&q=80&w=2400",
    title: "Western Fusion",
    subtitle: "Modern Silhouettes, Ethnic Roots",
    tag: "Lifestyle"
  }
];

export default function LuxuryCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[700px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(45,36,36,0.25)] group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image} 
            loading="lazy"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2424]/80 via-[#2D2424]/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex flex-col justify-center p-12 md:p-24 space-y-8">
        <motion.div
          key={`content-${current}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <span className="px-4 py-1 bg-[#D4AF37] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full inline-block">
            {slides[current].tag}
          </span>
          <h2 className="text-6xl md:text-8xl font-bold text-white italic leading-none max-w-2xl">
            {slides[current].title}
          </h2>
          <p className="text-2xl text-white/70 font-serif italic">
            {slides[current].subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            onClick={() => window.open(BOUTIQUE_WHATSAPP_LINK, '_blank')}
            className="h-16 px-10 gap-3"
          >
            <ShoppingBag className="w-5 h-5" />
            BOOK AN APPOINTMENT
          </Button>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button 
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-2">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-[#D4AF37]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
}
