import React from 'react';
import { motion } from 'framer-motion';
import { TOP_PICKS } from '../constants';

const TopPicks: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Fan Favorites</span>
          <h2 className="font-display text-4xl md:text-5xl mt-2 text-brand-secondary">Delicious Top Picks From Our Grill</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOP_PICKS.map((pick, idx) => (
            <motion.div 
              key={pick.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-4 text-center border border-gray-100 flex flex-col items-center overflow-hidden"
            >
              <div className="relative mb-6 w-full h-64 overflow-hidden rounded-xl group">
                 <img 
                    src={pick.image} 
                    alt={pick.name} 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110" 
                 />
                 {idx === 0 && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce z-20">HOT</span>}
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
              
              <h3 className="font-display text-2xl text-brand-secondary mb-2">{pick.name}</h3>
              <div className="text-sm text-gray-500 mb-4 flex gap-4 justify-center">
                 <span>R: ${pick.price - 2}</span>
                 <span className="font-bold text-brand-secondary">L: ${pick.price}</span>
              </div>
              <button className="w-full border-2 border-brand-primary text-brand-primary font-bold py-2 rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;