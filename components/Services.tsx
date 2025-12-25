import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-accent font-bold text-sm tracking-widest uppercase mb-4 block">Expertise</span>
          <h2 className="text-slate-900 text-4xl md:text-5xl font-bold font-heading mb-4">Our Core Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            AZ-construction LTD provides comprehensive end-to-end development solutions for the modern Rwandan landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-all duration-500"></div>
                <div className="absolute top-6 left-6 p-3 bg-white rounded-lg shadow-xl text-slate-900">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex flex-col grow">
                <h3 className="text-slate-900 font-bold text-2xl mb-4 group-hover:text-gold-accent transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href="#contact" 
                    className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest group/btn hover:text-gold-accent transition-colors"
                  >
                    Inquire Now <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;