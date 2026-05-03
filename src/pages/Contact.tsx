import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BOUTIQUE_ADDRESS, BOUTIQUE_PHONE, BOUTIQUE_EMAIL, BOUTIQUE_WHATSAPP_LINK, BOUTIQUE_MAPS_LINK } from '../constants';
import { MapPin, Phone, Mail, Clock, Send, Map as MapIcon, Navigation } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    garmentType: '',
    fabricPreference: '',
    colorChoice: '',
    designInspiration: '',
    contactNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Custom Order Request*%0A%0A` +
      `*Garment Type:* ${formData.garmentType}%0A` +
      `*Fabric Preference:* ${formData.fabricPreference}%0A` +
      `*Color Choice:* ${formData.colorChoice}%0A` +
      `*Design Inspiration:* ${formData.designInspiration || 'N/A'}%0A` +
      `*Contact Number:* ${formData.contactNumber}`;

    const whatsappUrl = `https://wa.me/${BOUTIQUE_PHONE.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#FFF9F5] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D48C8C]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        <section>
          <header className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold mb-6 italic"
              style={{ color: "#2D2424" }}
            >
              Get In <span className="text-[#D48C8C]">Touch</span>
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              className="h-1 bg-[#D4AF37] mx-auto rounded-full"
            ></motion.div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#D4AF37] mb-2 tracking-widest text-[10px] font-black uppercase">
                    <MapPin className="w-4 h-4" />
                    Address
                  </div>
                <a 
                  href={BOUTIQUE_MAPS_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block text-[#2D2424] font-serif text-xl italic leading-relaxed hover:text-[#D48C8C] transition-colors group"
                >
                  {BOUTIQUE_ADDRESS}
                  <span className="block h-[1px] w-0 group-hover:w-full bg-[#D48C8C] transition-all duration-500 mt-1"></span>
                </a>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#D4AF37] mb-2 tracking-widest text-[10px] font-black uppercase">
                    <Phone className="w-4 h-4" />
                    Voice
                  </div>
                  <a 
                    href={`tel:${BOUTIQUE_PHONE.replace(/\s/g, '')}`} 
                    className="text-2xl font-bold text-[#2D2424] hover:text-[#D48C8C] transition-colors"
                  >
                    {BOUTIQUE_PHONE}
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#D4AF37] mb-2 tracking-widest text-[10px] font-black uppercase">
                    <Mail className="w-4 h-4" />
                    Inquiry
                  </div>
                  <a 
                    href={`mailto:${BOUTIQUE_EMAIL}`} 
                    className="text-xl font-medium text-stone-500 hover:text-[#2D2424] transition-colors"
                  >
                    {BOUTIQUE_EMAIL}
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#D4AF37] mb-2 tracking-widest text-[10px] font-black uppercase">
                    <Clock className="w-4 h-4" />
                    Hours
                  </div>
                  <div className="text-stone-500 font-serif italic">
                    <p>Mon – Sat: 10AM – 7PM</p>
                    <p className="text-rose-400 font-bold">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-white rounded-[3rem] shadow-2xl border border-stone-50 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D48C8C]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                <h3 className="text-3xl font-bold text-[#2D2424] relative z-10">Bespoke Consultation</h3>
                <p className="text-stone-500 font-serif text-lg leading-relaxed relative z-10">
                  Planning a special event? Book a personalized session with our lead designer to curate your perfect look.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                  <Button 
                    variant="whatsapp" 
                    fullWidth 
                    onClick={() => window.open(BOUTIQUE_WHATSAPP_LINK, '_blank')}
                  >
                    ORDER ON WHATSAPP
                  </Button>
                  <Button 
                    variant="call" 
                    fullWidth 
                    onClick={() => window.location.href = `tel:${BOUTIQUE_PHONE.replace(/\s/g, '')}`}
                  >
                    CALL NOW
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Order Updates</span>
                  <a 
                    href={`${BOUTIQUE_WHATSAPP_LINK}&text=Hi, I want to track my order status.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:brightness-110"
                  >
                    Track My Order
                    <Send className="w-3 h-3" />
                  </a>
                </div>

                <div className="pt-6">
                  <Button 
                    variant="outline" 
                    fullWidth 
                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white group"
                    onClick={() => window.open(BOUTIQUE_MAPS_LINK, '_blank')}
                  >
                    <Navigation className="mr-3 w-5 h-5 group-hover:block hidden animate-pulse" />
                    <MapIcon className="mr-3 w-5 h-5 group-hover:hidden block" />
                    GET GOOGLE DIRECTIONS
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[4rem] overflow-hidden shadow-3xl h-[600px] border-8 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15263.6391448694!2d82.235967!3d16.9859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3828413b59fdf9%3A0x6b6c68e378!2sRamanayyapeta%2C%20Kakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714736123456!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-[2s] scale-110"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* Custom Order Request Form */}
        <section className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold italic text-[#2D2424]">Custom Order Request</h2>
              <p className="text-stone-500 font-serif italic text-lg leading-relaxed">
                Tell us about your dream design and we'll bring it to life.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-3xl border border-stone-50"
            >
              <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] ml-4">Garment Type</label>
                    <input 
                      required
                      type="text" 
                      name="garmentType"
                      value={formData.garmentType}
                      onChange={handleInputChange}
                      placeholder="e.g. Designer Saree, Bridal Blouse" 
                      className="w-full px-8 py-5 rounded-3xl bg-stone-50 border-transparent focus:border-[#D48C8C] focus:bg-white focus:ring-0 transition-all font-serif italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] ml-4">Fabric Preference</label>
                    <input 
                      required
                      type="text" 
                      name="fabricPreference"
                      value={formData.fabricPreference}
                      onChange={handleInputChange}
                      placeholder="e.g. Silk, Georgette, Velvet" 
                      className="w-full px-8 py-5 rounded-3xl bg-stone-50 border-transparent focus:border-[#D48C8C] focus:bg-white focus:ring-0 transition-all font-serif italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] ml-4">Color Choice</label>
                    <input 
                      required
                      type="text" 
                      name="colorChoice"
                      value={formData.colorChoice}
                      onChange={handleInputChange}
                      placeholder="e.g. Royal Blue, Crimson Red" 
                      className="w-full px-8 py-5 rounded-3xl bg-stone-50 border-transparent focus:border-[#D48C8C] focus:bg-white focus:ring-0 transition-all font-serif italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] ml-4">Contact Number</label>
                    <input 
                      required
                      type="tel" 
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="Your 10-digit number" 
                      className="w-full px-8 py-5 rounded-3xl bg-stone-50 border-transparent focus:border-[#D48C8C] focus:bg-white focus:ring-0 transition-all font-serif italic"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] ml-4">Design Inspiration (Optional)</label>
                  <textarea 
                    name="designInspiration"
                    value={formData.designInspiration}
                    onChange={handleInputChange}
                    placeholder="Describe any specific ideas, patterns, or references..." 
                    rows={4}
                    className="w-full px-8 py-6 rounded-[2rem] bg-stone-50 border-transparent focus:border-[#D48C8C] focus:bg-white focus:ring-0 transition-all font-serif italic"
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-center">
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    className="px-16"
                    onClick={() => {}} // Form handles submit
                  >
                    SUBMIT REQUEST via WHATSAPP
                    <Send className="ml-3 w-5 h-5 translate-y-[1px]" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
