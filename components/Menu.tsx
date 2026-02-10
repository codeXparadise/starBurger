import React from 'react';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuCategory: React.FC<{ title: string; items: MenuItem[]; icon: string; color: string }> = ({ title, items, icon, color }) => (
  <div className="mb-12">
    <div className={`flex items-center gap-2 mb-6 ${color}`}>
      <span className="material-icons">{icon}</span>
      <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
    </div>
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="flex justify-between items-start border-b border-brand-secondary/10 pb-4 group hover:pl-2 transition-all"
        >
          <div>
            <h4 className="font-bold text-lg text-brand-secondary group-hover:text-brand-primary transition-colors">
              {item.name}
              {item.tags && item.tags.map(tag => (
                <span key={tag} className="ml-2 text-xs bg-brand-primary/20 text-brand-secondary px-2 py-0.5 rounded-full uppercase tracking-wide">{tag}</span>
              ))}
            </h4>
            <p className="text-sm text-brand-secondary/70 mt-1 max-w-md">{item.description}</p>
          </div>
          <div className="font-bold text-brand-primary text-lg">${item.price.toFixed(2)}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Menu: React.FC = () => {
  const veggieItems = MENU_ITEMS.filter(item => item.category === 'veggie');
  const beefItems = MENU_ITEMS.filter(item => item.category === 'beef');
  const sideItems = MENU_ITEMS.filter(item => item.category === 'sides');
  const dessertItems = MENU_ITEMS.filter(item => item.category === 'desserts');

  return (
    <section className="py-24 bg-[#3E2C1C] relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-5xl text-center mb-4 text-brand-primary">Burger Lovers Choice</h2>
        <div className="h-1 w-24 bg-brand-primary mx-auto mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto bg-brand-light/95 p-8 md:p-16 rounded-lg shadow-2xl">
          <div>
            <MenuCategory title="Veggie & Chicken" items={veggieItems} icon="grass" color="text-green-600" />
            <MenuCategory title="Add-ons" items={sideItems} icon="add_circle_outline" color="text-brand-secondary" />
          </div>
          <div>
            <MenuCategory title="Beef Legends" items={beefItems} icon="local_fire_department" color="text-red-600" />
            <MenuCategory title="Desserts" items={dessertItems} icon="icecream" color="text-pink-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;