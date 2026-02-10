import React from 'react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#2D2418] to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl text-center text-brand-primary mb-16">Where To Find Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {LOCATIONS.map(loc => (
            <div key={loc.id} className="bg-white text-brand-secondary p-8 rounded-lg shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
              <h3 className="font-display text-2xl mb-4">{loc.name}</h3>
              
              <div className="flex items-start gap-3 mb-3 text-sm">
                <span className="material-icons text-brand-primary text-xl">place</span>
                <p>{loc.address}</p>
              </div>
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className="material-icons text-brand-primary text-xl">phone</span>
                <p>{loc.phone}</p>
              </div>
              <div className="flex items-start gap-3 mb-8 text-sm">
                <span className="material-icons text-brand-primary text-xl">schedule</span>
                <p>{loc.hours}</p>
              </div>
              
              <button className="w-full py-3 border-2 border-brand-secondary rounded hover:bg-brand-secondary hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">
                View on Map
              </button>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-brand-light border-2 border-dashed border-brand-primary text-brand-secondary p-8 rounded-lg shadow-xl flex flex-col justify-center text-center">
            <h3 className="font-display text-3xl mb-4">Order Your Fresh Burger Now</h3>
            <p className="text-sm mb-8 opacity-80 leading-relaxed">Craving that juicy bite? Order in seconds for pickup or delivery directly from our kitchen.</p>
            <button className="w-full py-3 bg-brand-primary text-white rounded shadow-lg hover:bg-orange-600 transition-colors font-bold uppercase tracking-wide">
              Order Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;