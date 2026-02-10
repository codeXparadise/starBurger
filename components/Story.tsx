import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Story: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 relative"
            >
                {/* Image Masking Effect */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2">
                    <img src={IMAGES.ads.ingredients} alt="Fresh Ingredients" className="w-full h-auto" />
                </div>
                 <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -bottom-6 -right-6 bg-yellow-400 text-brand-dark font-display text-2xl p-6 rounded-full shadow-xl rotate-12"
                 >
                     100% Fresh
                 </motion.div>
            </motion.div>

            <div className="w-full md:w-1/2">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block bg-brand-light border border-brand-primary/20 text-brand-primary px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider"
                >
                    Inside The Bun
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-display text-5xl md:text-6xl mb-6 text-brand-secondary leading-tight"
                >
                    See What's Inside
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg opacity-80 leading-relaxed font-body mb-8"
                >
                    We don't hide anything. From the crispy tikki to the fresh onion and tomatoes, layered with our signature Mexican sauce and lettuce. Every layer is purposefully made to give you the crunch you crave.
                </motion.p>
                
                <button className="text-brand-primary font-bold uppercase tracking-widest border-b-2 border-brand-primary pb-1 hover:text-brand-secondary hover:border-brand-secondary transition-colors">
                    Read Our Story
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Story;