import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { BOUTIQUE_INSTAGRAM_LINK } from '../constants';

const feedPosts = [
  { id: 1, img: "https://images.unsplash.com/photo-1595914146118-2e1f487f3c12?auto=format&fit=crop&q=80&w=600", likes: "1.2k" },
  { id: 2, img: "https://images.unsplash.com/photo-1610030469915-9923293237a4?auto=format&fit=crop&q=80&w=600", likes: "850" },
  { id: 3, img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600", likes: "2.4k" },
  { id: 4, img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600", likes: "1.1k" },
  { id: 5, img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600", likes: "970" },
  { id: 6, img: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=600", likes: "3.2k" },
  { id: 7, img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600", likes: "1.5k" },
  { id: 8, img: "https://images.unsplash.com/photo-1610189012906-400030248408?auto=format&fit=crop&q=80&w=600", likes: "2.1k" }
];

export default function InstagramFeed() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Instagram className="w-8 h-8 text-[#ee2a7b]" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-stone-400">Social Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold italic text-[#2D2424]">Join our <span className="text-[#ee2a7b]">Vibrant Community</span></h2>
          </div>
          <a 
            href={BOUTIQUE_INSTAGRAM_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="px-10 py-5 rounded-full bg-stone-900 text-white font-bold flex items-center gap-4 hover:bg-[#ee2a7b] transition-all group hover:-translate-y-1 shadow-2xl"
          >
            FOLLOW @MOKSHITASBOUTIQUE0815
            <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {feedPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -12 }}
              className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-stone-100"
            >
              <img 
                src={post.img} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-[#2D2424]/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white gap-6 p-8 text-center">
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 fill-[#ee2a7b] text-[#ee2a7b]" />
                  <span className="text-xl font-bold">{post.likes}</span>
                </div>
                <div className="space-y-4">
                  <a 
                    href={BOUTIQUE_INSTAGRAM_LINK} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors text-xs font-black uppercase tracking-widest"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Comment on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
