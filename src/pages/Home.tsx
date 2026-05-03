import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle2, ArrowRight, Play, Star, MessageSquareCode, ShoppingCart, Truck, Instagram } from 'lucide-react';
import { BOUTIQUE_PHONE, BOUTIQUE_WHATSAPP_LINK } from '../constants';
import LuxuryCarousel from '../components/LuxuryCarousel';
import InstagramFeed from '../components/InstagramFeed';
import LocationSection from '../components/LocationSection';

const highlights = [
  "Bespoke Bridal Wear",
  "Intricate Maggam Work",
  "Premium Silk Selection",
  "Design Consultation",
  "Pan-India Delivery"
];

const bookingSteps = [
  {
    icon: <MessageSquareCode className="w-8 h-8" />,
    title: "Start Conversation",
    desc: "Share your vision or reference images with our designers on WhatsApp.",
    color: "bg-[#25D366]"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Virtual Selection",
    desc: "Receive curated fabric choices and design sketches tailored for you.",
    color: "bg-[#D4AF37]"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Perfect Delivery",
    desc: "Final masterpiece delivered to your doorstep with guaranteed fit.",
    color: "bg-[#2D2424]"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FFF9F5] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=2000" 
            alt="High-end Boutique" 
            className="w-full h-full object-cover opacity-[0.12] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#FFF9F5]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 text-center lg:text-left">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                  <span className="text-[10px] font-black tracking-[0.6em] text-[#D4AF37] uppercase">The Landmark of Luxury</span>
                </div>
                
                <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.85] mix-blend-multiply italic">
                  <span className="block text-[#2D2424]">DEVI</span>
                  <span className="block text-[#D48C8C] drop-shadow-2xl">FASHIONS</span>
                </h1>

                <p className="text-2xl font-serif italic text-stone-500 max-w-xl mx-auto lg:mx-0">
                  “Where tradition meets <span className="text-stone-900 font-bold border-b-2 border-[#D4AF37]/30">perfection</span> in every stitch.”
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6">
                  <Link to="/collections">
                    <Button size="lg" className="min-w-[240px] h-16 text-lg">
                      EXPLORE EDIT
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-w-[240px] h-16 text-lg border-stone-200"
                    onClick={() => window.open(BOUTIQUE_WHATSAPP_LINK, '_blank')}
                  >
                    BOOK ORDER
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 w-[500px] h-[650px] rounded-[10rem] overflow-hidden border-[16px] border-white shadow-3xl">
                <img src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/40 to-transparent"></div>
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-2 border-dashed border-[#D4AF37] rounded-full flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-[#D4AF37] rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stage Slider */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <LuxuryCarousel />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#FFF9F5] rounded-full blur-[200px] -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-32">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">Effortless Elegance</span>
            <h2 className="text-4xl md:text-7xl font-bold italic text-[#2D2424]">How to Order <span className="text-[#D48C8C]">Bespoke</span></h2>
            <p className="text-xl text-stone-500 font-serif italic">Your dream ensemble is just three steps away from becoming a reality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {bookingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-12 rounded-[4rem] bg-white border border-stone-50 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_45px_100px_-20px_rgba(212,140,140,0.2)] transition-all duration-700 text-center space-y-8"
              >
                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center text-white mx-auto shadow-2xl group-hover:rotate-6 transition-transform`}>
                  {step.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-[#2D2424]">{step.title}</h3>
                  <p className="text-stone-500 font-serif leading-relaxed italic">{step.desc}</p>
                </div>
                <div className="pt-6">
                  <div className="h-[2px] w-12 bg-stone-100 mx-auto group-hover:w-24 group-hover:bg-[#D4AF37] transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="h-16 px-12 text-lg hover:scale-105 active:scale-95 transition-all" onClick={() => window.open(BOUTIQUE_WHATSAPP_LINK, '_blank')}>
              CONSULT WITH DESIGNER
            </Button>
          </div>
        </div>
      </section>

      {/* Signature Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-stone-200 pb-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">Signature Collections</span>
              <h2 className="text-6xl md:text-8xl font-bold italic text-[#2D2424]">Our <span className="text-[#D48C8C]">Visual</span> Diary</h2>
            </div>
            <Link to="/collections">
              <button className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-[#D4AF37]">
                VIEW ALL WORK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Designer Blouses", img: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-2 lg:row-span-2" },
              { title: "Bridal Couture", img: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800", span: "" },
              { title: "Heritage Sarees", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", span: "" },
              { title: "Artistic Kurtis", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800", span: "lg:col-span-2" },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-[4rem] shadow-2xl ${cat.span} min-h-[400px] cursor-pointer`}
              >
                <img src={cat.img} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/90 via-transparent to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.title}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">Click to discover</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <InstagramFeed />

      {/* Map & Visit Section */}
      <LocationSection />

      {/* Final Luxury Call to Action */}
      <section className="py-40 px-6 pb-60">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto rounded-[6rem] overflow-hidden bg-[#2D2424] p-12 md:p-32 text-center text-white relative shadow-5xl"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D2424] via-[#2D2424]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-12">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block p-6 bg-white/5 rounded-full backdrop-blur-2xl border border-white/10"
            >
              <Star className="w-10 h-10 text-[#D4AF37] fill-[#D4AF37]" />
            </motion.div>
            <h2 className="text-5xl md:text-[8rem] font-bold italic leading-tight">Define Your <br /> <span className="text-[#D4AF37]">Masterpiece.</span></h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-xl font-serif italic leading-relaxed">
              Step into the world of Devi Fashions. Your custom couture journey begins with a single conversation.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
              <Button size="lg" className="min-w-[320px] h-20 text-xl" onClick={() => window.open(BOUTIQUE_WHATSAPP_LINK, '_blank')}>
                START CUSTOM ORDER
              </Button>
              <Link to="/contact">
                <button className="text-stone-300 font-black uppercase tracking-[0.4em] text-sm hover:text-[#D48C8C] transition-colors flex items-center gap-4 group">
                  EXPLORE OUR BOUTIQUE <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
