import React, { useState } from 'react';
import { NAV_LINKS, IMAGES } from '../constants';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo with masking to blend white background */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-brand-primary">
              <img 
                src={IMAGES.brand.logo} 
                alt="Star Burger Logo" 
                className="w-full h-full object-cover mix-blend-multiply" 
              />
          </div>
          <span className={`font-display text-2xl md:text-3xl ${isScrolled ? 'text-brand-secondary' : 'text-white drop-shadow-md'}`}>Star-Burger</span>
        </div>

        <div className={`hidden md:flex gap-8 font-bold ${isScrolled ? 'text-brand-secondary' : 'text-white drop-shadow-sm'}`}>
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-brand-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
        >
          Order Now 
          <span className="material-icons text-sm">arrow_forward</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;