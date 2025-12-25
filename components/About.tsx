import React from 'react';
// Fix: Added ArrowRight to the imports from lucide-react
import { CheckCircle, ShieldCheck, Zap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=1200" 
                alt="Elite Construction Management" 
                className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-slate-50 -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-r-4 border-b-4 border-gold-accent/20 -z-0"></div>
            
            <div className="absolute -bottom-8 -left-8 bg-slate-900 p-8 rounded-sm shadow-2xl hidden md:block z-20 border-l-4 border-gold-accent">
              <span className="text-gold-accent text-5xl font-bold block mb-1">Elite</span>
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Engineering Standards</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-accent font-bold text-sm tracking-widest uppercase mb-4 block">Proven Excellence</span>
            <h2 className="text-slate-900 text-4xl md:text-5xl font-bold font-heading mb-8 leading-tight">
              A Legacy of Trust in the <br /> Land of a Thousand Hills
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              AZ-construction LTD is Rwanda's leading firm for high-stakes development projects. We combine local topographic knowledge with international engineering standards to deliver assets that are both visually stunning and structurally immortal.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <ShieldCheck className="text-gold-accent" />, title: 'Absolute Safety' },
                { icon: <Zap className="text-gold-accent" />, title: 'Rapid Execution' },
                { icon: <Award className="text-gold-accent" />, title: 'Premium Finish' },
                { icon: <CheckCircle className="text-gold-accent" />, title: 'Regulatory Compliance' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="shrink-0">{item.icon}</div>
                  <span className="text-slate-900 font-bold text-sm uppercase tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-slate-950 font-bold group border-b-2 border-gold-accent pb-2 hover:text-gold-accent transition-colors"
            >
              CONNECT WITH OUR PRINCIPAL
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;