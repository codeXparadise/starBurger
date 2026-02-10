import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl text-center mb-4 text-brand-secondary">Truly Loved by People Like You</h2>
        <p className="text-center mb-16 opacity-70 font-body">Don't just take our word for it.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative pt-8">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              whileInView={{ rotate: review.rotation, scale: 1, opacity: 1 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring" }}
              className={`${review.color} p-8 shadow-lg min-h-[300px] flex flex-col justify-between transform origin-top`}
            >
              {/* Pin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-sm border border-red-500"></div>

              <div className="font-body text-lg font-medium leading-relaxed italic text-gray-800">
                "{review.text}"
              </div>
              
              <div className="mt-6">
                <div className="flex text-brand-secondary mb-2">
                   {[...Array(5)].map((_, i) => (
                     <span key={i} className="material-icons text-sm">{i < Math.floor(review.rating) ? 'star' : (i < review.rating ? 'star_half' : 'star_border')}</span>
                   ))}
                </div>
                <p className="font-bold text-gray-900 text-sm">- {review.author}, {review.location}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Photo Polaroid inserted in grid for visual break */}
          <motion.div 
            initial={{ rotate: 5, opacity: 0 }}
            whileInView={{ rotate: 5, opacity: 1 }}
            className="hidden md:block absolute top-10 right-10 bg-white p-2 shadow-2xl w-48 rotate-12 z-10"
          >
             <img src="https://cdn.pixabay.com/photo/2016/11/29/06/12/burger-1867752_1280.jpg" alt="Happy customers" className="w-full h-32 object-cover filter contrast-125" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;