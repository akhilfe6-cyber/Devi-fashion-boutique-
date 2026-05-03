import React from 'react';
import { motion } from 'motion/react';
import { BOUTIQUE_NAME } from '../constants';
import { Heart, Target, Users, Award, Play, Quote } from 'lucide-react';
import ReviewSection from '../components/ReviewSection';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-[#FFF9F5] min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#D48C8C]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-[#D48C8C]/10 rounded-[4rem] group-hover:rotate-12 transition-transform duration-1000 rotate-6 translate-x-6 translate-y-6"></div>
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-3xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Boutique" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* 3D Floaties */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-stone-50 hidden md:block"
            >
              <Award className="w-10 h-10 text-[#D4AF37] mb-2" />
              <p className="text-[10px] font-black tracking-widest text-stone-400 uppercase">Trusted Design</p>
              <p className="text-xl font-bold text-[#2D2424]">EST. 2020</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12"
          >
            <div className="space-y-4">
              <span className="block text-xs font-black tracking-[0.5em] text-[#D4AF37] uppercase">The Legacy</span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight italic text-[#2D2424]">
                The Art of <span className="text-[#D48C8C]">Details</span>
              </h1>
            </div>

            <p className="text-stone-500 text-2xl font-serif italic leading-relaxed border-l-8 pl-10 border-[#D4AF37]/30">
              “We don't just stitch clothes; we curate memories. Every thread at Devi Fashions tells a story of elegance and empowerment.”
            </p>

            <div className="space-y-8 text-stone-600 leading-relaxed text-lg font-serif italic">
              <p>
                Founded in the heart of Ramanayyapeta, Kakinada, {BOUTIQUE_NAME} was born from a singular vision: to bring high-end, personalized couture to the contemporary woman. 
              </p>
              <p>
                Our journey began with a small team of passionate artisans who believed that perfect fitting is a right, not a luxury. Today, we specialize in bridal masterpieces and bespoke daily wear that blends traditional Indian craftsmanship with modern silhouettes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Brand Evolution & Active Lifestyle */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="block text-xs font-black tracking-[0.5em] text-[#D4AF37] uppercase">The Evolution</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight italic text-[#2D2424]">
                Expanding <span className="text-[#D48C8C]">Horizons</span>
              </h2>
            </div>
            <p className="text-stone-500 text-xl font-serif italic leading-relaxed">
              From signature blouses to the modern <span className="font-bold text-[#D48C8C]">Devi Active</span> line, our brand has evolved to support the contemporary woman in every phase of her day. Whether it's a high-profile wedding or a balanced active lifestyle, our leggings and western fusion collections are designed for movement.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <p className="text-4xl font-bold text-[#D4AF37] mb-2">5k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Happy Clients</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <p className="text-4xl font-bold text-[#D48C8C] mb-2">20+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Expert Artisans</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 relative">
            <div className="space-y-6 pt-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800" 
                  loading="lazy"
                  className="w-full h-full object-cover" 
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-[#D48C8C]/20 flex items-center justify-center p-8 text-center"
              >
                <p className="text-2xl font-bold italic text-[#2D2424]">“Movement meets elegance in our new Bottoms collection.”</p>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1506629082928-19274681613d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20">
          {[
            { 
              title: "Our Mission", 
              desc: "To empower every woman with designs that celebrate her unique identity and cultural heritage through precision tailoring.",
              icon: <Heart className="w-8 h-8 text-[#D48C8C]" />
            },
            { 
              title: "Our Vision", 
              desc: "To be Kakinada's premier fashion destination, setting new standards in personalized bridal and ethnic couture.",
              icon: <Target className="w-8 h-8 text-[#D4AF37]" />
            },
            { 
              title: "Our Values", 
              desc: "Integrity in craftsmanship, passion for innovation, and a relentless focus on customer delight in every stitch.",
              icon: <Users className="w-8 h-8 text-[#2D2424]" />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-16 rounded-[4rem] border border-white hover:bg-white hover:shadow-3xl transition-all duration-700"
            >
              <div className="mb-8">{item.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-[#2D2424]">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed text-lg italic font-serif opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <section className="mt-48 space-y-24">
          <div className="text-center space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">Voices of Elegance</span>
            <h2 className="text-5xl md:text-8xl font-bold italic text-[#2D2424]">Stories of <span className="text-[#D48C8C]">Heritage</span></h2>
            <p className="text-stone-500 text-xl font-serif italic max-w-2xl mx-auto">See how our master artisans brought these bridal visions to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                name: "Anjali Rao",
                location: "Hyderabad",
                quote: "The intricate threadwork on my Kanchi silk blouse was so precise. I felt like a queen on my wedding day. Truly the best in Andhra!",
                image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1200"
              },
              {
                name: "Priya Sharma",
                location: "Kakinada",
                quote: "I visited the Ramanayyapeta boutique with just an idea, and they turned it into a masterpiece. Their attention to detail is unmatched.",
                image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200"
              }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group space-y-10"
              >
                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-stone-200">
                <img 
                  src={testi.image} 
                  alt={testi.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0" 
                />
                  <div className="absolute inset-0 bg-[#2D2424]/20 group-hover:bg-[#2D2424]/10 transition-colors"></div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white border border-white/40 shadow-2xl"
                  >
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </motion.button>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-white text-xs font-black uppercase tracking-widest">{testi.name}</p>
                    <p className="text-white/70 text-[10px] font-serif italic">{testi.location}</p>
                  </div>
                </div>

                <div className="px-10 space-y-6 relative">
                  <Quote className="w-12 h-12 text-[#D4AF37]/10 absolute -top-4 -left-2" />
                  <p className="text-2xl text-stone-600 font-serif italic leading-relaxed">
                    “{testi.quote}”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Verified Masterpiece</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <ReviewSection />
      </div>
    </div>
  );
}
