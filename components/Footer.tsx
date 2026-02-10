import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  const socialImages = [IMAGES.placeholders.social1, IMAGES.placeholders.social2, IMAGES.placeholders.social3, IMAGES.placeholders.social4];

  return (
    <>
      <section className="py-16 bg-brand-light border-b border-brand-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="material-icons text-pink-500 text-4xl">camera_alt</span>
            <h3 className="font-display text-3xl text-brand-secondary">Follow the Fun @StarBurgerTown</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {socialImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer shadow-md">
                <img alt="Social feed" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={img} />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-icons text-white text-3xl">favorite</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1F1508] text-white pt-20 pb-10 border-t-8 border-brand-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
             <div className="text-center md:text-left mb-8 md:mb-0">
               <span className="font-display text-5xl text-brand-primary block mb-4">Star-Burger</span>
               <p className="opacity-50 max-w-xs">Serving the galaxy's best burgers since 2015. Come for the food, stay for the vibes.</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center md:text-left">
               <div>
                 <h4 className="font-bold mb-4 text-brand-primary">COMPANY</h4>
                 <ul className="space-y-2 opacity-70 text-sm">
                   <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold mb-4 text-brand-primary">SUPPORT</h4>
                 <ul className="space-y-2 opacity-70 text-sm">
                   <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
                 </ul>
               </div>
                <div>
                 <h4 className="font-bold mb-4 text-brand-primary">SOCIAL</h4>
                 <ul className="space-y-2 opacity-70 text-sm">
                   <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                 </ul>
               </div>
             </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
            <p>© 2023 Star-Burger Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#">Terms of Service</a>
               <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;