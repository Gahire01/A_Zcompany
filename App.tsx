
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.body.style.opacity = '1';
  }, []);

  return (
    <main className="min-h-screen selection:bg-gold-accent/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
