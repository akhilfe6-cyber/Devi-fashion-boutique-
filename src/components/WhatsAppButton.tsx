import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, MapPin, Instagram, ChevronUp } from 'lucide-react';
import { BOUTIQUE_WHATSAPP_LINK, BOUTIQUE_PHONE, BOUTIQUE_MAPS_LINK, BOUTIQUE_INSTAGRAM_LINK } from '../constants';

export default function WhatsAppButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    {
      icon: <ChevronUp className="w-5 h-5" />,
      label: "Top",
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      color: "bg-stone-900",
      show: scrolled
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Us",
      href: `tel:${BOUTIQUE_PHONE.replace(/\s/g, '')}`,
      color: "bg-blue-500",
      show: true
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: BOUTIQUE_INSTAGRAM_LINK,
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      show: true
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Find Us",
      href: BOUTIQUE_MAPS_LINK,
      color: "bg-amber-500",
      show: true
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: BOUTIQUE_WHATSAPP_LINK,
      color: "bg-[#25D366]",
      show: true
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {actions.filter(a => a.show).map((action, i) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {action.href ? (
              <a
                href={action.href}
                target={action.href.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className={`${action.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl relative group hover:-translate-x-2 transition-all duration-300`}
              >
                {action.icon}
                <span className="absolute right-full mr-6 bg-[#2D2424] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                  {action.label}
                </span>
                {action.label === "WhatsApp" && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                )}
              </a>
            ) : (
              <button
                onClick={action.onClick}
                className={`${action.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl relative group hover:-translate-x-2 transition-all duration-300`}
              >
                {action.icon}
                <span className="absolute right-full mr-6 bg-[#2D2424] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                  {action.label}
                </span>
              </button>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
