import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { COLORS } from '../constants';

const galleryImages = [
  { id: 1, title: "Bridal Maggam Work", url: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Royal Silk Saree", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200" },
  { id: 3, title: "Velvet Couture Blouse", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, title: "Silk Heritage Work", url: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200" },
  { id: 5, title: "Artist Series Design", url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, title: "Emerald Green Elegance", url: "https://images.unsplash.com/photo-1595914146118-2e1f487f3c12?auto=format&fit=crop&q=80&w=1200" },
  { id: 7, title: "Royal Zardosi Detail", url: "https://images.unsplash.com/photo-1610030469915-9923293237a4?auto=format&fit=crop&q=80&w=1200" },
  { id: 8, title: "Rose Silk Sensation", url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1200" },
  { id: 9, title: "Floral Hand-Painted", url: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=1200" },
  { id: 10, title: "Intricate Maggam Art", url: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=1200" },
  { id: 11, title: "Organza Dreamscape", url: "https://images.unsplash.com/photo-1621415715017-d516248cc92d?auto=format&fit=crop&q=80&w=1200" },
  { id: 12, title: "Cotton Harmony", url: "https://images.unsplash.com/photo-1610189012906-400030248408?auto=format&fit=crop&q=80&w=1200" },
  { id: 13, title: "Pattu Perfection", url: "https://images.unsplash.com/photo-1609357605129-26f69abb5db6?auto=format&fit=crop&q=80&w=1200" },
  { id: 14, title: "Modern Designer Blouse", url: "https://images.unsplash.com/photo-1595914146118-2e1f487f3c12?auto=format&fit=crop&q=80&w=1200" },
  { id: 15, title: "Emerald Artisan Work", url: "https://images.unsplash.com/photo-1621415715017-d516248cc92d?auto=format&fit=crop&q=80&w=1200" },
  { id: 16, title: "Zardosi Masterpiece", url: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=1200" },
  { id: 17, title: "Gold Thread Embroidery", url: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200" },
  { id: 18, title: "Peacock Motif Blouse", url: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=1200" },
  { id: 19, title: "Bridal Back Detail", url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1200" },
  { id: 20, title: "Heavy Work Blouse", url: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=1200" }
];

interface GalleryItemProps {
  key?: React.Key;
  img: {
    id: number;
    url: string;
    title: string;
  };
  index: number;
}

function GalleryItem({ img, index }: GalleryItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -50 : 50]);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.8 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className="break-inside-avoid relative group rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 cursor-pointer mb-8"
    >
      <img 
        src={img.url} 
        alt={img.title} 
        loading="lazy"
        className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-10">
        <div className="text-white">
          <p className="text-xs uppercase tracking-[0.2em] font-bold mb-1">Exclusive Design</p>
          <p className="text-xl font-serif italic text-white/90">{img.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6 bg-[#FFF9F5] min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#D48C8C]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-20">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 italic"
            style={{ color: "#2D2424" }}
          >
            Visual <span style={{ color: "#D48C8C" }}>Gallery</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            className="h-1 bg-[#D4AF37] mx-auto rounded-full mb-8"
          ></motion.div>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed font-serif italic">
            “Capturing the essence of beauty and craftsmanship in every thread.”
          </p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {galleryImages.map((img, i) => (
            <GalleryItem key={img.id} img={img} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
