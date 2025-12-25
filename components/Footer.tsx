import React from 'react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gold-accent flex items-center justify-center rounded">
                <span className="text-slate-900 font-bold text-xl tracking-tighter">AZ</span>
              </div>
              <span className="text-white font-heading font-bold text-2xl tracking-tight uppercase">
                AZ-construction LTD
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              Premium construction solutions and real estate development in Rwanda. We specialize in turning vision into high-value physical assets.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-gold-accent transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Operating Location</h4>
            <p className="text-gray-500 leading-relaxed">
              Headquarters: Kigali Business District<br />
              {BUSINESS_INFO.country}<br />
              Land of a Thousand Hills
            </p>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:row justify-between items-center text-sm text-gray-600">
          <p>© {year} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;