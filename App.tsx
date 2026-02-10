import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import Menu from './components/Menu';
import TopPicks from './components/TopPicks';
import Deals from './components/Deals';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Reels from './components/Reels';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen text-brand-secondary overflow-x-hidden selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Story />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="reels">
            <Reels />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="picks">
          <TopPicks />
        </section>
        <section id="deals">
          <Deals />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="reservation">
          <Reservation />
        </section>
        <section id="locations">
          <Locations />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;