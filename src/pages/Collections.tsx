import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { BOUTIQUE_NAME, BOUTIQUE_MAPS_LINK, BOUTIQUE_INSTAGRAM_LINK } from '../constants';
import Button from '../components/Button';
import { MapPin, Play, X, Video, Instagram, Search as SearchIcon, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { 
    id: 'blouses',
    title: "Designer Blouses", 
    products: [
      { 
        id: 1, 
        name: "Intricate Maggam Blouse", 
        image: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-a-red-dress-34444-large.mp4",
        inStock: true,
        trending: true
      },
      { 
        id: 2, 
        name: "Velvet Bridal Blouse", 
        image: "https://images.unsplash.com/photo-1598501479155-9069d32d3080?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-posing-in-a-white-dress-34446-large.mp4",
        inStock: true 
      },
      { 
        id: 11, 
        name: "Hand-Embroidered Zardosi", 
        image: "https://images.unsplash.com/photo-1610030469915-9923293237a4?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-in-a-white-dress-and-a-hat-34448-large.mp4",
        inStock: true,
        premium: true
      },
      { 
        id: 3, 
        name: "Mirror Work Elegance", 
        image: "https://images.unsplash.com/photo-1581375225381-8047ab08400a?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-a-dark-dress-34447-large.mp4",
        inStock: false 
      },
      { 
        id: 12, 
        name: "Kalamkari Boutique Special", 
        image: "https://images.unsplash.com/photo-1560457079-9a6532ccb118?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-green-dress-posing-34449-large.mp4",
        inStock: true 
      },
      {
        id: 18,
        name: "Golden Peacock Work",
        image: "https://images.unsplash.com/photo-1595914146118-2e1f487f3c12?auto=format&fit=crop&q=60&w=600",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-a-red-dress-34444-large.mp4",
        inStock: true,
        trending: true
      },
      {
        id: 19,
        name: "Emerald Silk Artisan",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-with-a-red-dress-and-a-traditional-fan-34445-large.mp4",
        inStock: true
      }
    ]
  },
  { 
    id: 'sarees',
    title: "Sarees", 
    products: [
      { 
        id: 4, 
        name: "Premium Kanchipuram Silk", 
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-smiling-while-wearing-a-red-traditional-dress-34441-large.mp4",
        inStock: true 
      },
      { 
        id: 5, 
        name: "Banarasi Heritage", 
        image: "https://images.unsplash.com/photo-1610488656641-5df770176880?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-with-a-red-dress-and-a-traditional-fan-34445-large.mp4",
        inStock: true 
      },
      { 
        id: 6, 
        name: "Designer Chiffon Partywear", 
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-in-a-white-dress-and-a-hat-34448-large.mp4",
        inStock: true 
      },
      {
        id: 15,
        name: "Artistic Organza Saree",
        image: "https://images.unsplash.com/photo-1621415715017-d516248cc92d?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-a-red-dress-34444-large.mp4",
        inStock: true,
        trending: true
      },
      {
        id: 16,
        name: "Handloom Cotton Delight",
        image: "https://images.unsplash.com/photo-1610189012906-400030248408?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-posing-in-a-white-dress-34446-large.mp4",
        inStock: true
      },
      {
        id: 17,
        name: "Traditional Pattu Saree",
        image: "https://images.unsplash.com/photo-1609357605129-26f69abb5db6?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-smiling-while-wearing-a-red-traditional-dress-34441-large.mp4",
        inStock: true,
        premium: true
      },
    ]
  },
  { 
    id: 'bridals',
    title: "Bridal Wear", 
    products: [
      { 
        id: 7, 
        name: "Royal Wedding Lehenga", 
        image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-singing-and-posing-in-a-purple-dress-34442-large.mp4",
        inStock: true 
      },
      { 
        id: 8, 
        name: "Golden Sequin Gown", 
        image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-in-a-royal-blue-gown-34443-large.mp4",
        inStock: true 
      },
      {
        id: 20,
        name: "Velvet Bridal Masterpiece",
        image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-a-red-dress-34444-large.mp4",
        inStock: true,
        premium: true
      },
    ]
  },
  {
    id: 'kurtis',
    title: "Designer Kurtis",
    products: [
      {
        id: 9,
        name: "Hand-Painted Floral Kurti",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-green-dress-posing-34449-large.mp4",
        inStock: true
      },
      {
        id: 10,
        name: "Ethnic Chikankari Long Kurti",
        image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-posing-in-a-white-dress-34446-large.mp4",
        inStock: true
      }
    ]
  },
  {
    id: 'leggings',
    title: "Leggings & Bottoms",
    products: [
      {
        id: 13,
        name: "Premium Lycra Leggings",
        image: "https://images.unsplash.com/photo-1506629082928-19274681613d?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-a-red-dress-34444-large.mp4",
        inStock: true,
        trending: true
      },
      {
        id: 14,
        name: "Ethnic Palazzo Pants",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
        video: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-with-a-red-dress-and-a-traditional-fan-34445-large.mp4",
        inStock: true
      }
    ]
  }
];

interface ProductCardProps {
  product: any;
  category: string;
  onWatchVideo: (url: string) => void;
  key?: number | string;
}

function ProductCard({ product, category, onWatchVideo }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappLink = `https://wa.me/917093326969?text=${encodeURIComponent(
    `Hi ${BOUTIQUE_NAME}, I want to order the "${product.name}" from the ${category} collection.\n\n` +
    `My Delivery Location: [Please enter your full address here]\n\n` +
    `Product Ref: ${product.image}`
  )}`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group bg-white rounded-[2.5rem] overflow-hidden border border-stone-50 transition-all duration-700 ${
        category === "Designer Blouses" 
          ? "shadow-[0_20px_50px_-20px_rgba(212,140,140,0.2)] hover:shadow-[0_45px_100px_-20px_rgba(212,140,140,0.4)]" 
          : "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(212,140,140,0.25)]"
      }`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2424]/60 via-transparent to-transparent z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Luxury Shimmer Effect */}
        <motion.div 
          className="absolute inset-0 z-[6] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={isHovered ? { x: ['100%', '-100%'] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Base Image */}
        <motion.img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Video Preview Overlay */}
        <AnimatePresence>
          {isHovered && product.video && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            >
              <video 
                src={product.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
          {product.trending && (
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="px-3 py-1 bg-[#D48C8C] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-white rounded-full animate-ping"></span>
              Trending
            </motion.span>
          )}
          {product.premium && (
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-1 bg-[#D4AF37] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg"
            >
              Premium
            </motion.span>
          )}
          {product.inStock ? (
            <span className="px-3 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest rounded-full">In Stock</span>
          ) : (
            <span className="px-3 py-1 bg-rose-500/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest rounded-full">Out of Stock</span>
          )}
        </div>

        {/* Floating Watch Video Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => onWatchVideo(product.video)}
          className="absolute bottom-6 right-6 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/40 transition-all shadow-2xl"
        >
          <Play className="w-5 h-5 fill-white" />
        </motion.button>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#2D2424] leading-snug group-hover:text-[#D48C8C] transition-colors">{product.name}</h3>
            <p className="text-stone-400 text-[10px] font-serif italic uppercase tracking-[0.2em]">{category.slice(0, -1)} Selection</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => window.open(BOUTIQUE_INSTAGRAM_LINK, '_blank')}
              className="p-2 text-stone-300 hover:text-[#ee2a7b] transition-all hover:scale-110"
              title="View on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onWatchVideo(product.video)}
              className="p-2 text-stone-300 hover:text-[#D4AF37] transition-all hover:scale-110"
              title="Watch Video"
            >
              <Video className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="pt-2 flex flex-col gap-3">
          <Button 
            variant={category === "Designer Blouses" ? "secondary" : "primary"} 
            size="sm" 
            fullWidth 
            onClick={() => window.open(whatsappLink, '_blank')}
            disabled={!product.inStock}
            className={cn(
              "flex items-center justify-center gap-2",
              !product.inStock ? "bg-stone-300 shadow-none pointer-events-none" : "hover:scale-[1.02] shadow-lg"
            )}
          >
            <MessageCircle className="w-4 h-4" />
            Order on WhatsApp
          </Button>
          {!product.inStock && (
            <a 
              href={`https://wa.me/917093326969?text=Hi, when will "${product.name}" be back in stock?`}
              className="text-[10px] uppercase tracking-widest text-[#D48C8C] font-bold text-center hover:opacity-70 transition-opacity"
            >
              Notify Me When Available
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredCategories = categories.map(cat => ({
    ...cat,
    products: cat.products.filter(product => 
      product.name.toLowerCase().includes(searchQuery) || 
      cat.title.toLowerCase().includes(searchQuery)
    )
  })).filter(cat => cat.products.length > 0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-[#FFF9F5] min-h-screen relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D48C8C]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-6"
          >
            Exclusively Yours
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-bold mb-6 italic tracking-tighter"
            style={{ color: "#2D2424" }}
          >
            {searchQuery ? (
              <>Search <span className="text-[#D48C8C]">Results</span></>
            ) : (
              <>The <span className="text-[#D48C8C]">Crafted</span> Edit</>
            )}
          </motion.h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-xl leading-relaxed font-serif italic mb-12">
            {searchQuery ? (
              `Showing results for "${searchQuery}" across our designer collections.`
            ) : (
              "“Explore hand-stitched elegance and timeless designs crafted specifically for your most celebrated moments.”"
            )}
          </p>

          {!searchQuery && (
            /* Quick Navigation Pills */
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 sticky top-24 z-50 py-4"
            >
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="px-8 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-stone-100 text-[10px] font-black uppercase tracking-widest text-[#2D2424] hover:bg-[#D48C8C] hover:text-white transition-all hover:-translate-y-1 active:scale-95"
                >
                  {cat.title}
                </button>
              ))}
            </motion.div>
          )}
        </header>

        <div className="space-y-40 mt-24">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, idx) => (
              <section key={cat.id} id={cat.id} className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">Collection {idx + 1}</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-[#2D2424] italic">{cat.title}</h2>
                  </div>
                  <div className="h-[1px] flex-grow bg-stone-200 mb-4 hidden md:block"></div>
                  <div className="text-right">
                    <p className="text-stone-400 font-serif italic">{cat.products.length} Masterpieces</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                  {cat.products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      category={cat.title} 
                      onWatchVideo={(url) => setActiveVideo(url)}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20 text-center space-y-8"
            >
              <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-300">
                <SearchIcon className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#2D2424]">We couldn't find a match</h2>
                <p className="text-stone-500 font-serif italic">Try searching for styles like "Silk", "Maggam", or "Bridal".</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/collections'}
                className="mx-auto"
              >
                Clear Search
              </Button>
            </motion.div>
          )}
        </div>

        {/* Action Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-[#2D2424] rounded-[4rem] text-center text-white relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D48C8C]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight italic">Didn't find what you were looking for?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed font-serif opacity-80">
              We specialize in custom stitching. Share your own design idea or let us sketch one for you.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open(`https://wa.me/917093326969?text=${encodeURIComponent("Hi Devi Fashions, I'm interested in a custom design consultation. I have some ideas I'd like to discuss for my next outfit.")}`, '_blank')}
              >
                Custom Design Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-stone-900"
                onClick={() => window.open(BOUTIQUE_MAPS_LINK, '_blank')}
              >
                <MapPin className="mr-2 w-5 h-5" />
                Visit Our Boutique
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-xl"
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 group"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              
              <VideoPlayer src={activeVideo} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function VideoPlayer({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) videoRef.current.volume = val;
  };

  const onTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <div className="relative w-full h-full group/player overflow-hidden">
      <video 
        ref={videoRef}
        src={src} 
        autoPlay 
        loop
        onTimeUpdate={onTimeUpdate}
        className="w-full h-full object-contain"
        onClick={togglePlay}
      />
      
      {/* Custom Controls Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col gap-4 transition-all duration-500 opacity-0 group-hover/player:opacity-100"
      >
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#D4AF37]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={togglePlay}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {isPlaying ? <X className="w-8 h-8 rotate-45" /> : <Play className="w-8 h-8 fill-current" />}
            </button>

            <div className="flex items-center gap-3 group/volume">
              <div className="text-white opacity-60 group-hover/volume:opacity-100 transition-opacity">
                {volume === 0 ? <X className="w-5 h-5 shrink-0" /> : <Play className="w-5 h-5 shrink-0 rotate-90" />}
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-[#D4AF37] bg-white/20 rounded-lg h-1 appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="text-white/60 text-[10px] font-black uppercase tracking-widest">
            Devi Fashions Premium Preview
          </div>
        </div>
      </motion.div>

      {/* Large Center Play Toggle (Visible on Pause) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20"
          >
            <Play className="w-10 h-10 fill-current translate-x-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

