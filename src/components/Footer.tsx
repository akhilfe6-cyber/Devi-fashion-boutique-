import { BOUTIQUE_NAME, BOUTIQUE_ADDRESS, BOUTIQUE_PHONE, BOUTIQUE_EMAIL, BOUTIQUE_WHATSAPP_LINK, COLORS, BOUTIQUE_INSTAGRAM_LINK, BOUTIQUE_MAPS_LINK } from '../constants';
import { Mail, Phone, MapPin, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2D2424] text-stone-300 py-16 px-6 relative overflow-hidden">
      {/* Subtle patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D48C8C]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
        <div className="space-y-8">
          <h3 className="text-white font-serif text-3xl font-bold italic tracking-tight">{BOUTIQUE_NAME}</h3>
          <p className="text-stone-400 text-sm leading-relaxed max-w-xs font-serif italic">
            “Bringing together tradition and modern fashion to create designs that suit every woman. Elegant designs for every occasion since 2020.”
          </p>
        </div>

        <div className="space-y-8">
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Quick Navigation</h4>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><Link to="/" className="text-stone-400 hover:text-[#D4AF37] transition-colors">Home</Link></li>
            <li><Link to="/collections" className="text-stone-400 hover:text-[#D4AF37] transition-colors">Collections</Link></li>
            <li><Link to="/gallery" className="text-stone-400 hover:text-[#D4AF37] transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="text-stone-400 hover:text-[#D4AF37] transition-colors">About Story</Link></li>
            <li><Link to="/contact" className="text-stone-400 hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            <li>
              <a 
                href={`${BOUTIQUE_WHATSAPP_LINK}&text=Hi, I want to track my order status.`}
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] hover:brightness-110 transition-all flex items-center gap-2"
              >
                Track Your Order
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">The Boutique</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 shrink-0 text-[#D4AF37]" />
              <a 
                href={BOUTIQUE_MAPS_LINK} 
                target="_blank" 
                rel="noreferrer" 
                className="text-stone-400 font-serif italic hover:text-white transition-colors"
              >
                {BOUTIQUE_ADDRESS}
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="w-5 h-5 shrink-0 text-[#D4AF37]" />
              <a href={`tel:${BOUTIQUE_PHONE.replace(/\s/g, '')}`} className="text-stone-400 font-bold hover:text-white transition-colors">
                {BOUTIQUE_PHONE}
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <Instagram className="w-5 h-5 shrink-0 text-[#D4AF37]" />
              <a href={BOUTIQUE_INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-[#E4405F] transition-colors">
                Follow on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
        &copy; {new Date().getFullYear()} {BOUTIQUE_NAME}. Crafted with Elegance in Kakinada.
      </div>
    </footer>
  );
}
