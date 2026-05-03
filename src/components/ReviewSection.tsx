import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Upload, User, Send, CheckCircle2, Instagram } from 'lucide-react';
import { BOUTIQUE_INSTAGRAM_LINK } from '../constants';
import Button from './Button';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Sowmya Reddy",
    rating: 5,
    comment: "The Maggam work on my bridal blouse was beyond my expectations. Every pearl and zardosi thread was placed with such perfection. Truly the best boutique in Kakinada!",
    image: "https://images.unsplash.com/photo-1583391733956-6c7827647ec3?auto=format&fit=crop&q=80&w=400",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Meenakshi K.",
    rating: 5,
    comment: "Excellent fitting and timely delivery. I ordered a custom lehenga from Vizag, and they handled the measurements so professionally over WhatsApp.",
    date: "1 week ago"
  }
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) return;

    const newReview: Review = {
      id: Date.now(),
      name,
      rating,
      comment,
      date: "Just now"
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setComment("");
      setRating(0);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="mt-48 space-y-24">
      <div className="text-center space-y-6">
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]">The Collective Voice</span>
        <h2 className="text-5xl md:text-8xl font-bold italic text-[#2D2424]">Client <span className="text-[#D48C8C]">Adoration</span></h2>
        <p className="text-stone-500 text-xl font-serif italic max-w-2xl mx-auto">We measure our success through the smiles of our patrons.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Review Form */}
        <div className="bg-white p-12 rounded-[4rem] shadow-3xl border border-stone-100 space-y-10 sticky top-32">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-[#2D2424]">Share Your Experience</h3>
            <p className="text-stone-500 font-serif italic text-sm">Help us grow by leaving your valuable feedback.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating Stars */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="transition-all duration-300 hover:scale-125"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star 
                      className={`w-8 h-8 ${
                        star <= (hover || rating) 
                        ? "text-[#D4AF37] fill-[#D4AF37]" 
                        : "text-stone-200"
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anjali Sharma"
                  className="w-full h-16 bg-stone-50 border-none rounded-2xl px-6 focus:ring-2 focus:ring-[#D48C8C]/20 transition-all font-serif italic text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Your Story</label>
                <textarea 
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="How was your couture journey with us?"
                  className="w-full bg-stone-50 border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#D48C8C]/20 transition-all font-serif italic text-lg resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                type="button"
                onClick={() => window.open(BOUTIQUE_INSTAGRAM_LINK, '_blank')}
                className="w-full h-16 rounded-2xl border-2 border-stone-200 flex items-center justify-center gap-3 text-stone-600 hover:text-[#ee2a7b] hover:border-[#ee2a7b] transition-all group"
              >
                <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="text-xs font-black uppercase tracking-widest">Comment on Instagram</span>
              </button>
              
              <Button 
                type="submit" 
                className="w-full h-16 gap-3"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    SUBMITTED
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    POST REVIEW
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#2D2424]">Recent Testimonials</h4>
            <span className="text-stone-400 text-xs font-serif italic">{reviews.length} Experiences Shared</span>
          </div>

          <div className="space-y-6 max-h-[800px] overflow-y-auto pr-4 scrollbar-hide">
            <AnimatePresence>
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-8 rounded-3xl border border-stone-50 shadow-sm space-y-4 group hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-[#2D2424]">{review.name}</p>
                        <p className="text-[10px] text-stone-400 uppercase tracking-widest">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-stone-100"}`} />
                      ))}
                    </div>
                  </div>

                  <p className="text-stone-600 font-serif italic leading-relaxed text-lg">
                    “{review.comment}”
                  </p>

                  {review.image && (
                    <div className="pt-2">
                      <img 
                        src={review.image} 
                        loading="lazy"
                        className="w-32 h-32 rounded-2xl object-cover shadow-lg hover:rotate-2 transition-transform cursor-zoom-in" 
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
