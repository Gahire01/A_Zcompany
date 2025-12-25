
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Overlay for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
      
      {/* Background Image - Keeping as requested */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 animate-slow-zoom"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=90&w=2560")',
          filter: 'brightness(0.6)'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-20 text-white mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge removed per client request */}
          
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-8 leading-[1.1] tracking-tight">
            Elevating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold-accent">
              Skyline of Rwanda
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-2xl border-l-2 border-gold-accent pl-6">
            {BUSINESS_INFO.tagline} We transform complex hillside topographies into sustainable architectural landmarks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-gold-accent hover:bg-[#966b09] text-slate-950 font-bold rounded-sm flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-2xl shadow-gold-accent/20 group"
            >
              CONSULT AN EXPERT 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="px-10 py-5 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-bold rounded-sm transition-all flex items-center justify-center backdrop-blur-md"
            >
              VIEW PORTFOLIO
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Discover More</span>
          <ChevronDown size={24} className="text-gold-accent animate-bounce" />
        </div>
      </motion.div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
