import React from 'react';

const InputField: React.FC<{ label: string; placeholder: string; type?: string; full?: boolean }> = ({ label, placeholder, type = "text", full }) => (
  <div className={`flex flex-col ${full ? 'col-span-2' : ''}`}>
    <label className="text-sm font-bold text-gray-700 mb-1 ml-1">{label}*</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
    />
  </div>
);

const SelectField: React.FC<{ label: string; options: string[] }> = ({ label, options }) => (
  <div className="flex flex-col">
    <label className="text-sm font-bold text-gray-700 mb-1 ml-1">{label}*</label>
    <div className="relative">
      <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary cursor-pointer">
        {options.map(opt => <option key={opt}>{opt}</option>)}
      </select>
      <span className="material-icons absolute right-3 top-3 text-gray-400 pointer-events-none">expand_more</span>
    </div>
  </div>
);

const Reservation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-600 relative overflow-hidden">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/05/31/13/45/restaurant-791934_1280.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-5xl text-center text-brand-primary mb-12">Reserve a Table</h2>

        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto p-8 md:p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" placeholder="John Smith" />
            <InputField label="Phone Number" placeholder="(555) 555-5555" type="tel" />
            <InputField label="Email Address" placeholder="john@example.com" type="email" />
            <SelectField label="Number of Guests" options={['2 Guests', '3 Guests', '4 Guests', '5+ Guests']} />
            <InputField label="Date" placeholder="mm/dd/yyyy" type="date" />
            <SelectField label="Time" options={['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM']} />
            
            <div className="col-span-2">
              <label className="text-sm font-bold text-gray-700 mb-1 ml-1">Special Requests</label>
              <textarea 
                placeholder="Window seat, birthday celebration, allergies..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
              ></textarea>
            </div>

            <div className="col-span-2 mt-4">
              <button type="button" className="w-full md:w-auto bg-brand-primary text-white font-bold text-lg px-12 py-4 rounded-lg shadow-lg hover:bg-brand-secondary transition-colors uppercase tracking-wider">
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;