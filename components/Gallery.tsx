import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const GalleryItem: React.FC<{ src: string; alt: string; className?: string; delay: number }> = ({ src, alt, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
    className={`rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer ${className}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
      <p className="text-white font-display text-xl tracking-wide">{alt}</p>
    </div>
  </motion.div>
);

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm">The Star Life</span>
          <h2 className="font-display text-5xl md:text-6xl text-brand-secondary mt-2">Eat. Snap. Repeat.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="md:col-span-8 md:row-span-2">
            <GalleryItem src={IMAGES.ads.fresh} alt="Fresh & Premium" className="h-full min-h-[400px]" delay={0} />
          </div>
          <div className="md:col-span-4">
            <GalleryItem src={IMAGES.ads.warned} alt="You've Been Warned" className="h-64" delay={0.1} />
          </div>
          <div className="md:col-span-4">
            <GalleryItem src={IMAGES.ads.waiting} alt="Still Waiting?" className="h-64" delay={0.2} />
          </div>
          
          <div className="md:col-span-4">
             <GalleryItem src={IMAGES.ads.pain} alt="Fixing Pain" className="h-80" delay={0.3} />
          </div>
          <div className="md:col-span-4">
             <GalleryItem src={IMAGES.ads.delivery} alt="We Deliver Big" className="h-80" delay={0.4} />
          </div>
          <div className="md:col-span-4">
             <GalleryItem src={IMAGES.ads.insist} alt="We Insist" className="h-80" delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;