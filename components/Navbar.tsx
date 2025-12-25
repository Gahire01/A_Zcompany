import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gold-accent flex items-center justify-center rounded">
            <span className="text-slate-900 font-bold text-xl tracking-tighter">AZ</span>
          </div>
          <span className="text-white font-heading font-bold text-lg lg:text-xl tracking-tight uppercase">
            AZ-construction LTD
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-[#B8860B] transition-colors font-medium text-sm tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-gold-accent hover:bg-[#966b09] text-slate-900 px-5 py-2 rounded font-bold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Phone size={16} />
            <span className="text-sm">CALL NOW</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 shadow-2xl animate-fade-in-down border-t border-slate-800">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white text-lg font-medium border-b border-slate-800 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-gold-accent text-slate-900 py-3 rounded text-center font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Specialist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;