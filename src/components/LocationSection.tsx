import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import { BOUTIQUE_MAPS_LINK, BOUTIQUE_PHONE } from '../constants';

export default function LocationSection() {
  return (
    <section className="py-40 px-6 bg-[#FFF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#D4AF37]">
              <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">Visit Our Flagship</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold italic text-[#2D2424] leading-[0.9]">
              In the heart <br />
              <span className="text-[#D4AF37]">of Kakinada.</span>
            </h2>
            <p className="text-xl text-stone-500 font-serif leading-relaxed italic max-w-lg">
              Visit our boutique to experience textures, discuss custom designs, and get perfectly fitted by our master tailors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#D4AF37]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#2D2424] mb-1">Our Address</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Devi Fashions Boutique,<br />
                  Ramanayyapeta, Kakinada,<br />
                  Andhra Pradesh 533005
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#D4AF37]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#2D2424] mb-1">Hours of Grace</h4>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Mon – Sat: 10:00 AM – 9:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a 
              href={BOUTIQUE_MAPS_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="px-10 py-5 rounded-full bg-[#2D2424] text-white font-bold flex items-center justify-center gap-4 hover:shadow-[0_20px_50px_-10px_rgba(45,36,36,0.3)] transition-all group"
            >
              GET DIRECTIONS
              <Navigation className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href={`tel:${BOUTIQUE_PHONE.replace(/\s/g, '')}`}
              className="px-10 py-5 rounded-full border-2 border-stone-200 text-[#2D2424] font-bold flex items-center justify-center gap-4 hover:bg-white transition-all"
            >
              <Phone className="w-5 h-5" />
              CONTACT US
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-[4rem] -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
          <div className="relative h-[600px] w-full rounded-[4rem] overflow-hidden shadow-3xl bg-stone-100 border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.407982236965!2d82.2474647!3d16.9443725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3826071060934d%3A0xc3453733e07971ee!2sRamanayyapeta%2C%20Kakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714740000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -top-10 -right-10 bg-white p-8 rounded-[3rem] shadow-2xl space-y-2 hidden md:block"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}
            </div>
            <p className="text-lg font-bold text-[#2D2424]">4.9 on Google</p>
            <p className="text-[10px] uppercase font-black tracking-widest text-stone-400 italic">500+ Local Reviews</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Star({ className, ...props }: { className?: string; [key: string]: any }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
