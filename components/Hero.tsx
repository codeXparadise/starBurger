import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { IMAGES } from '../constants';

const FloatingElement: React.FC<{ src: string; speed: number; className: string; rotation?: number }> = ({ src, speed, className, rotation = 0 }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, speed * 200]);
    const rotate = useTransform(scrollY, [0, 1000], [0, rotation * 360]);
    
    return (
        <motion.img 
            style={{ y, rotate }}
            src={src} 
            className={`absolute pointer-events-none drop-shadow-2xl ${className}`}
            alt="Decorative Ingredient"
        />
    );
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(burgerRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "elastic.out(1, 0.7)"
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-brand-primary min-h-screen pt-24 overflow-hidden flex items-center justify-center">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
      
      {/* Parallax Floating Ingredients */}
      <FloatingElement src={IMAGES.decor.basil} speed={-1.5} className="top-20 left-10 w-24 md:w-32 z-10" rotation={0.5} />
      <FloatingElement src={IMAGES.decor.tomato} speed={-0.5} className="top-40 right-20 w-32 md:w-48 z-10" rotation={-0.2} />
      <FloatingElement src={IMAGES.decor.pepper} speed={-2} className="bottom-20 left-20 w-40 md:w-56 z-20 blur-[1px]" rotation={0.8} />
      <FloatingElement src={IMAGES.decor.onion} speed={-1} className="bottom-40 right-10 w-28 md:w-40 z-10" rotation={-0.5} />
      <FloatingElement src={IMAGES.decor.mushroom} speed={-0.8} className="top-1/2 left-0 -translate-x-1/2 w-32 z-0 opacity-80" rotation={1} />

      <div className="container mx-auto px-4 text-center relative z-30">
        <motion.div>
          <h1 ref={textRef} className="font-display text-6xl md:text-9xl text-white mb-2 drop-shadow-lg leading-tight">
            EAT WITHOUT<br />
            <span className="text-brand-dark opacity-90">REGRET</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium font-display italic"
          >
            "The juiciest patties, the freshest buns, and flavor that hits different."
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ delay: 1.2 }}
             className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-light transition-transform hover:scale-105">
              SEE OUR MENU
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-transform hover:scale-105">
              BOOK A TABLE
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Burger Image */}
      <motion.div 
        ref={burgerRef}
        className="absolute bottom-0 md:-bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[45rem] z-20"
      >
          {/* Masking container if needed, but pedestal image looks like it fits the theme well without complex masking */}
          <img 
            alt="Juicy Burger on Pedestal" 
            className="w-full h-auto drop-shadow-2xl" 
            src={IMAGES.hero.main}
          />
      </motion.div>
      
      {/* Checkered divider */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlP/AOW3ME4AAAAWJREFuOI1jYMQHGDEwhhQwmEkUAAgwAClOAAW70v2fAAAAAElFTkSuQmCC')] bg-repeat-x z-30"></div>
    </div>
  );
};

export default Hero;