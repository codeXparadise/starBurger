import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Deals: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
            <h2 className="font-display text-4xl text-brand-secondary">Hot Deals</h2>
            <span className="material-icons text-brand-secondary bg-gray-200 rounded-full p-1">chevron_right</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Deal 1: Happy Meal */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-red-600 rounded-3xl relative overflow-hidden h-96 flex items-center text-white"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-transparent z-10"></div>
             <img src={IMAGES.products.happy} className="absolute right-0 top-0 h-full w-2/3 object-cover object-center" alt="Happy Meal" />
             
            <div className="relative z-20 p-8 max-w-xs h-full flex flex-col justify-center">
              <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase self-start mb-4">Kids Special</span>
              <h3 className="font-display text-5xl leading-tight mb-2">The Happy <br/> Box</h3>
              <p className="font-bold text-xl mb-6 text-white/90">Toy + Burger + Fries</p>
              <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-white transition-colors self-start shadow-xl">
                Order Now
              </button>
            </div>
          </motion.div>

          {/* Deal 2: Milkshakes */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#FCD34D] rounded-3xl relative overflow-hidden h-96 flex items-center justify-end text-brand-secondary"
          >
             <img src={IMAGES.products.drinks} className="absolute left-0 top-0 h-full w-2/3 object-cover" alt="Milkshakes" />
             <div className="absolute inset-0 bg-gradient-to-l from-[#FCD34D] via-[#FCD34D]/80 to-transparent z-10"></div>
             
             <div className="relative z-20 p-8 max-w-xs h-full flex flex-col justify-center text-right">
              <h3 className="font-display text-4xl mb-2">Thick & Creamy</h3>
              <h2 className="font-display text-6xl mb-4 text-brand-secondary">Shakes</h2>
              <div className="self-end bg-white text-brand-primary text-2xl font-black px-6 py-2 transform -rotate-2 shadow-lg mb-6">
                BUY 1 GET 1
              </div>
               <button className="bg-brand-secondary text-white font-bold px-8 py-3 rounded-full hover:bg-brand-primary transition-colors self-end shadow-xl">
                Slurp It
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Deals;