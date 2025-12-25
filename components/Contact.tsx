import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, User, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-200 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white hidden lg:block -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-accent font-bold text-sm tracking-widest uppercase mb-4 block">Consultation</span>
          <h2 className="text-slate-900 text-4xl md:text-5xl font-bold font-heading mb-4">Partner With Us</h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg font-medium">
            Ready to break ground? Connect with our executive team to discuss your project requirements.
          </p>
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col lg:flex-row border border-slate-300">
          
          {/* Left Side: Information & Direct Channels */}
          <div className="lg:w-1/3 p-10 lg:p-14 bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <span className="w-10 h-1 bg-gold-accent"></span>
                Head Office
              </h3>

              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-center gap-5 mb-3">
                    <User className="text-gold-accent" size={24} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Principal Partner</span>
                  </div>
                  <p className="text-xl font-bold ml-11 group-hover:text-gold-accent transition-colors">{BUSINESS_INFO.owner}</p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-5 mb-3">
                    <Phone className="text-gold-accent" size={24} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Direct Consultation</span>
                  </div>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-bold ml-11 block hover:text-gold-accent transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="group">
                  <div className="flex items-center gap-5 mb-3">
                    <MapPin className="text-gold-accent" size={24} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Regional HQ</span>
                  </div>
                  <p className="text-xl font-bold ml-11">Kigali, {BUSINESS_INFO.country}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 space-y-4">
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Connect Fast:</p>
              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white py-5 px-6 rounded-xl font-bold shadow-lg transition-all transform hover:scale-[1.02]"
                >
                  <MessageCircle size={24} />
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Contact Form - High Contrast requested */}
          <div className="lg:w-2/3 p-10 lg:p-16 bg-white relative">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <CheckCircle2 size={48} className="text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading tracking-tight">Project Request Sent</h3>
                  <p className="text-gray-600 text-lg max-w-sm font-medium">
                    Our engineering department has received your request. We will reach out within one business day.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-12 px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs rounded hover:bg-slate-900 hover:text-white transition-all"
                  >
                    Submit New Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Project Inquiry</h3>
                  <p className="text-slate-500 mb-12 text-lg">Excellence begins with a conversation. Let us build your vision.</p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-[0.1em] text-slate-900 ml-1">Your Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Ex: Tuyizere Aimé"
                          className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gold-accent/20 focus:border-gold-accent transition-all text-slate-900 font-bold placeholder:text-slate-400 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold uppercase tracking-[0.1em] text-slate-900 ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="email@example.com"
                          className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gold-accent/20 focus:border-gold-accent transition-all text-slate-900 font-bold placeholder:text-slate-400 text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-[0.1em] text-slate-900 ml-1">Investment Type</label>
                      <div className="relative">
                        <select className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gold-accent/20 focus:border-gold-accent transition-all appearance-none cursor-pointer text-slate-900 font-bold text-lg">
                          <option>Luxury Residential</option>
                          <option>Commercial Plaza</option>
                          <option>Government Infrastructure</option>
                          <option>Industrial Facility</option>
                          <option>Professional Site Survey</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-900">
                          <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold uppercase tracking-[0.1em] text-slate-900 ml-1">Project Brief</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Briefly describe the location and scope of your project..."
                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-800 rounded-2xl focus:outline-none focus:ring-4 focus:ring-gold-accent/20 focus:border-gold-accent transition-all resize-none text-slate-900 font-bold placeholder:text-slate-400 text-lg leading-relaxed"
                      ></textarea>
                    </div>

                    <button 
                      disabled={formState === 'submitting'}
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-gold-accent hover:text-slate-900 text-white font-bold py-6 rounded-2xl flex items-center justify-center gap-4 transition-all transform hover:-translate-y-1 shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed text-xl uppercase tracking-widest"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send size={24} />
                          Secure My Consultation
                        </>
                      )}
                    </button>
                    <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mt-6">
                      Confidentiality Guaranteed • Response within 24 Hours
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;