import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BOUTIQUE_NAME, COLORS, BOUTIQUE_WHATSAPP_LINK, BOUTIQUE_INSTAGRAM_LINK } from '../constants';
import { cn } from '../lib/utils';
import { DeviLogo } from './DeviLogo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Orders', path: '/orders' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 outline-none w-full',
        scrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-[0_15px_50px_-15px_rgba(45,36,36,0.1)] py-4' 
          : 'bg-transparent py-10'
      )}
    >
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 bg-white z-[110] flex items-center px-8"
          >
            <form onSubmit={handleSearch} className="flex-grow max-w-[1400px] mx-auto flex items-center gap-6">
              <Search className="w-6 h-6 text-stone-400" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search for sarees, blouses, leggings..." 
                className="flex-grow bg-transparent border-none focus:ring-0 text-xl font-serif italic text-stone-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => setIsSearchOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center group/nav">
        <NavLink to="/" className="flex items-center space-x-4 group">
          <motion.div 
            className="relative"
            animate={{ scale: scrolled ? 1 : 1.25 }}
            transition={{ duration: 0.5 }}
          >
            <DeviLogo className={cn("transition-transform duration-500", scrolled ? "w-10 h-10" : "w-14 h-14")} />
            <div className="absolute -inset-4 bg-stone-900/5 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
          </motion.div>
          <div className="flex flex-col">
            <motion.span 
              className="font-serif font-bold tracking-tight uppercase leading-none" 
              style={{ color: "#2D2424" }}
              animate={{ fontSize: scrolled ? "1.25rem" : "1.75rem" }}
              transition={{ duration: 0.5 }}
            >
              DEVI <span style={{ color: "#D48C8C" }}>FASHIONS</span>
            </motion.span>
            <motion.span 
              className="font-black tracking-[0.4em] uppercase text-stone-400 mt-1"
              animate={{ fontSize: scrolled ? "8px" : "10px" }}
              transition={{ duration: 0.5 }}
            >
              Boutique • Kakinada
            </motion.span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'text-xs font-bold uppercase tracking-[0.2em] transition-all relative py-2 group',
                  isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: COLORS.secondary }}
                    initial={{ scaleX: isActive ? 1 : 0 }}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          ))}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-stone-500 hover:text-stone-900 transition-colors p-2"
          >
            <Search className="w-5 h-5" />
          </button>
          <a 
            href={BOUTIQUE_INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-stone-500 hover:text-[#E4405F] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href={BOUTIQUE_WHATSAPP_LINK}
            className="px-6 py-2 border-2 border-stone-900 text-stone-900 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all shadow-sm hover:shadow-lg"
          >
            Inquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(true)} className="p-2">
            <Search className="w-6 h-6" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium"
                  style={{ color: COLORS.primary }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
