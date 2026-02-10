import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: string; title: string; desc: string; color: string; delay: number }> = ({ icon, title, desc, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
  >
    <span className={`material-icons text-5xl mb-6 ${color} group-hover:scale-110 transition-transform duration-300`}>{icon}</span>
    <h3 className="text-2xl font-bold mb-3 font-display text-white">{title}</h3>
    <p className="text-white/70 leading-relaxed">{desc}</p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-brand-secondary relative text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-5xl text-center mb-16 text-brand-primary">What Makes Us Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard 
            icon="eco" 
            title="Fresh Ingredients" 
            desc="Locally sourced veggies and ethically raised beef. No freezers, just fresh." 
            color="text-green-400"
            delay={0}
          />
          <FeatureCard 
            icon="local_fire_department" 
            title="Flame Grilled" 
            desc="We cook over open flames to lock in that signature smoky Star-Burger taste." 
            color="text-yellow-400"
            delay={0.1}
          />
          <FeatureCard 
            icon="favorite" 
            title="Made with Love" 
            desc="Every burger is assembled with care. If we wouldn't eat it, we won't serve it." 
            color="text-pink-400"
            delay={0.2}
          />
          <FeatureCard 
            icon="bolt" 
            title="Super Fast" 
            desc="Hungry? We get it. From order to first bite in record time." 
            color="text-blue-400"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;