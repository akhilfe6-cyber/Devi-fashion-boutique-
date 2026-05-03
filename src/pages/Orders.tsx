import React from 'react';
import { motion } from 'motion/react';
import { DeviLogo } from '../components/DeviLogo';
import { Package, Truck, CheckCircle, Clock, MessageCircle } from 'lucide-react';
import { COLORS, BOUTIQUE_WHATSAPP_LINK } from '../constants';
import { cn } from '../lib/utils';

const mockOrders = [
  {
    id: "DF-8812",
    date: "May 2, 2026",
    status: "Delivered",
    currentStep: 5,
    estimatedDelivery: "May 2, 2026",
    deliveryAddress: "Hitech City, Hyderabad, 500081",
    items: [
      { name: "Intricate Maggam Blouse", price: "₹4,500", image: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=200" }
    ],
    total: "₹4,500"
  },
  {
    id: "DF-8795",
    date: "April 28, 2026",
    status: "In Transit",
    currentStep: 4,
    estimatedDelivery: "May 6, 2026",
    deliveryAddress: "Whitefield, Bangalore, 560066",
    items: [
      { name: "Kanchipuram Silk Saree", price: "₹12,800", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=200" }
    ],
    total: "₹12,800"
  }
];

const trackingSteps = [
  { label: "Booked", icon: Package },
  { label: "Designing", icon: Clock },
  { label: "Production", icon: Package },
  { label: "QC Pass", icon: CheckCircle },
  { label: "Shipping", icon: Truck },
  { label: "Delivered", icon: CheckCircle }
];

export default function Orders() {
  const getWhatsAppTrackingLink = (orderId: string) => {
    return `https://wa.me/917093326969?text=Hi, I want to track my order ${orderId}. Please provide me with the latest status.`;
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-[#FFF9F5] min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D48C8C]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-[#D4AF37]"
              >
                <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Platinum Guest</span>
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-bold text-[#2D2424] italic"
              >
                Couture <span className="text-stone-300">Journal</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-[2.5rem] bg-white shadow-2xl border border-stone-100 flex items-center gap-6"
            >
              <div className="relative">
                <DeviLogo className="w-14 h-14" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full border-2 border-white"
                ></motion.div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#2D2424]">Guest Account</p>
                <p className="text-[10px] text-stone-400 font-serif italic">Verified Elite Member</p>
              </div>
            </motion.div>
          </div>
          
          <div className="h-[1px] w-full bg-stone-200"></div>
        </header>

        <div className="space-y-10">
          {mockOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[3rem] p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.06)] border border-stone-50 group hover:shadow-[0_45px_90px_-25px_rgba(212,140,140,0.2)] transition-all duration-700 relative overflow-hidden"
            >
              {/* Luxury Accent Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#D4AF37]/20 group-hover:bg-[#D48C8C] transition-colors duration-500"></div>

              <div className="flex flex-wrap justify-between items-start gap-8 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-grow">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Reference</p>
                    <p className="text-lg font-bold text-[#2D2424]">{order.id}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Creation Date</p>
                    <p className="font-medium text-stone-600">{order.date}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">ETA</p>
                    <p className="font-bold text-[#2D2424]">{order.estimatedDelivery}</p>
                  </div>
                  <div className="space-y-2 lg:text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Current Status</p>
                    <div className="flex items-center gap-3 font-bold justify-start lg:justify-end">
                      <div className={cn(
                        "w-2 h-2 rounded-full animate-ping",
                        order.status === "Delivered" ? "bg-emerald-500" : "bg-blue-500"
                      )}></div>
                      <span className={cn(
                        "text-sm uppercase tracking-widest",
                        order.status === "Delivered" ? "text-emerald-600" : "text-blue-600"
                      )}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="mb-12 relative">
                <div className="absolute top-[1.4rem] left-0 w-full h-[2px] bg-stone-100"></div>
                <div 
                  className="absolute top-[1.4rem] left-0 h-[2px] bg-[#D4AF37] transition-all duration-1000"
                  style={{ width: `${(order.currentStep / (trackingSteps.length - 1)) * 100}%` }}
                ></div>
                <div className="flex justify-between relative z-10">
                  {trackingSteps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = i <= order.currentStep;
                    const isCurrent = i === order.currentStep;
                    
                    return (
                      <div key={i} className="flex flex-col items-center space-y-4">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                          isActive ? "bg-[#D4AF37] text-white shadow-lg" : "bg-white text-stone-300 border border-stone-100 shadow-sm",
                          isCurrent && "ring-4 ring-[#D4AF37]/20 scale-110"
                        )}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={cn(
                          "text-[9px] font-black uppercase tracking-widest hidden md:block",
                          isActive ? "text-[#2D2424]" : "text-stone-300"
                        )}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {order.items.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-10 items-center bg-stone-50/50 p-8 rounded-[2rem] border border-stone-100/50">
                  <div className="w-40 h-48 rounded-[2rem] overflow-hidden shadow-xl shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex-grow space-y-4 text-center md:text-left">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D48C8C] mb-2">Authenticated Collection</p>
                      <h3 className="text-3xl font-bold text-[#2D2424]">{item.name}</h3>
                    </div>
                    <p className="text-2xl text-[#D4AF37] font-serif italic">{item.price}</p>
                  </div>
                  <div className="shrink-0 flex flex-col gap-3">
                    <button className="px-10 py-4 rounded-full bg-white shadow-lg text-[#2D2424] text-[10px] font-black uppercase tracking-widest hover:bg-[#2D2424] hover:text-white transition-all duration-500 active:scale-95 border border-stone-100">
                      View Certificate
                    </button>
                    <a 
                      href={getWhatsAppTrackingLink(order.id)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-xl"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Track via WhatsApp
                    </a>
                  </div>
                </div>
              ))}

              <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8 px-2">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Delivery Location</p>
                    <p className="text-[#2D2424] font-serif italic text-lg leading-relaxed">{order.deliveryAddress}</p>
                  </div>
                  <div className="h-10 w-[1px] bg-stone-100 hidden md:block"></div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Investment Total</p>
                    <p className="text-4xl font-black text-[#2D2424] tracking-tighter">{order.total}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => window.open(getWhatsAppTrackingLink(order.id), '_blank')}
                    className="h-14 px-8 rounded-full bg-stone-100 text-stone-600 hover:text-[#25D366] hover:bg-white hover:shadow-xl flex items-center justify-center gap-3 transition-all border border-stone-100"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp Support</span>
                  </button>
                  <button className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center transition-all hover:shadow-2xl hover:-translate-y-1">
                    <Clock className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exclusive Membership Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[4rem] bg-[#2D2424] text-white overflow-hidden relative shadow-3xl"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=2000')] opacity-5 object-cover"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">Privilege Service</span>
              <h2 className="text-4xl md:text-6xl font-bold italic leading-none">Curated for <br /> Exclusivity.</h2>
              <p className="text-stone-400 font-serif italic text-xl">Our luxury concierge ensures your vision is manifested to perfection.</p>
            </div>
            <a 
              href="https://wa.me/917093326969"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#2D2424] px-12 py-6 rounded-full font-bold shadow-2xl hover:bg-[#D4AF37] hover:text-white hover:-translate-y-2 transition-all active:scale-95 text-lg"
            >
              CHAT WITH CONCIERGE
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

