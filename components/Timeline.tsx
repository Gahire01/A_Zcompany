
import React from 'react';
import { motion } from 'framer-motion';
import { PHASES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="phases" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl font-bold font-heading mb-4">Our Methodology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A structured, disciplined approach to construction that guarantees safety, efficiency, and excellence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-slate-800"></div>

          <div className="space-y-16">
            {PHASES.map((phase, idx) => (
              <motion.div 
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-accent shadow-[0_0_15px_rgba(184,134,11,0.5)] z-10"></div>

                {/* Content */}
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-12">
                  <div className={`p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-gold-accent/30 transition-colors shadow-xl ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-gold-accent font-bold text-sm uppercase tracking-widest block mb-2">
                      Phase {phase.id} • {phase.duration}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
