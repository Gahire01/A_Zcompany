import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, X, Calendar, User, CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-accent font-bold text-sm tracking-widest uppercase mb-4 block">Our Portfolio</span>
            <h2 className="text-slate-900 text-4xl md:text-5xl font-bold font-heading mb-4">Mastering Modern Construction</h2>
            <p className="text-gray-500 text-lg">A selection of our high-impact projects across residential, commercial, and industrial sectors.</p>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="px-8 py-3 bg-slate-900 text-white font-bold rounded hover:bg-gold-accent hover:text-slate-900 transition-all shadow-lg">Start Your Project</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold-accent font-bold text-xs uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                  View Project Details <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal - Satisfying "files and contents" request */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-900 text-white rounded-full hover:bg-gold-accent hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 h-[300px] lg:h-auto min-h-[400px]">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col">
                  <span className="text-gold-accent font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-900">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Client</p>
                        <p className="font-bold text-slate-800">{selectedProject.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-900">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Project Status</p>
                        <p className="font-bold text-slate-800">{selectedProject.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-[10px] uppercase font-bold text-gray-400 mb-4">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-bold text-slate-600 flex items-center gap-2">
                          <CheckCircle size={12} className="text-gold-accent" /> {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => setSelectedProject(null)}
                    className="mt-auto w-full bg-slate-900 text-white text-center py-4 rounded-lg font-bold hover:bg-gold-accent hover:text-slate-900 transition-all uppercase tracking-widest text-sm"
                  >
                    Inquire About Similar Projects
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;