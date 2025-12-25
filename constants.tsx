import React from 'react';
import { Compass, Building2, Layers, Truck } from 'lucide-react';
import { Service, Phase, NavLink } from './types';

export const BUSINESS_INFO = {
  name: 'AZ-construction LTD',
  owner: 'Tuyizere Aimé Vanny',
  phone: '+250 0788 325 017',
  whatsapp: '250788325017',
  country: 'Rwanda',
  tagline: 'Precision Engineering. Rwandan Heritage.',
  email: 'contact@az-construction.rw'
};

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Phases', href: '#phases' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Land Preparation',
    description: 'Expert grading and excavation specifically designed for Rwanda\'s challenging hillside topographies.',
    icon: <Truck className="w-8 h-8 text-[#B8860B]" />,
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Architectural Design',
    description: 'Bespoke architectural solutions that blend contemporary luxury with environmental sustainability.',
    icon: <Compass className="w-8 h-8 text-[#B8860B]" />,
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Structural Build',
    description: 'Precision construction using premium materials and advanced structural integrity monitoring.',
    icon: <Building2 className="w-8 h-8 text-[#B8860B]" />,
    imageUrl: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Elite Finishing',
    description: 'World-class interior and exterior finishing, bringing uncompromising luxury to every square meter.',
    icon: <Layers className="w-8 h-8 text-[#B8860B]" />,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS = [
  {
    title: "Hillside Infinity Villa",
    category: "Luxury Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    description: "A premium private residence featuring infinity pools, stone cladding, and floor-to-ceiling glass to capture the rolling hills of Kigali.",
    client: "Private Investor",
    status: "Completed",
    features: ["Infinity Pool", "Hillside Engineering", "Smart Home Automation"]
  },
  {
    title: "Rwanda Foam Corporate Plaza",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Modern commercial complex with retail spaces on the ground floor and corporate offices above. Innovative facade design using primary colors.",
    client: "Rwanda Foam Ltd",
    status: "Handover Phase",
    features: ["Steel-Glass Facade", "Underground Parking", "Solar Powered"]
  },
  {
    title: "Kigali Horizon Apartments",
    category: "Residential Development",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    description: "High-density premium apartment blocks. Optimized for urban lifestyle with communal roof gardens and sustainable water management.",
    client: "Urban Living Rwanda",
    status: "Completed",
    features: ["Roof Terrace", "Rainwater Harvesting", "Modular Interiors"]
  },
  {
    title: "ZenITH Premium Estates",
    category: "Residential Render",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Upcoming estate project showcasing the fusion of brick aesthetics with modern concrete frames. Designed for growing families.",
    client: "AZ Development",
    status: "Pre-sales",
    features: ["Custom Kitchens", "Eco-bricks", "Gated Security"]
  },
  {
    title: "Structural Shell: Sector B",
    category: "Industrial On-Site",
    image: "https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=1200",
    description: "Documentation of the core structural build phase. Showcasing precision brickwork and reinforced concrete framing.",
    client: "Manufacturing Group",
    status: "Under Construction",
    features: ["Heavy Load Floors", "High Ceilings", "Precision Brickwork"]
  },
  {
    title: "The Stone House",
    category: "Architectural Landmark",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    description: "Experimental residential design focusing on local stone materials and thermal mass cooling.",
    client: "Confidential",
    status: "Completed",
    features: ["Local Stone", "Natural Cooling", "Custom Woodwork"]
  }
];

export const PHASES: Phase[] = [
  {
    id: 1,
    title: 'Planning & Legal',
    description: 'Comprehensive feasibility studies and rigorous adherence to Rwanda housing & development regulations.',
    duration: '2-4 Weeks'
  },
  {
    id: 2,
    title: 'Site Engineering',
    description: 'Critical earthworks and foundation stabilization using industry-leading heavy machinery.',
    duration: '3-6 Weeks'
  },
  {
    id: 3,
    title: 'Main Shell Build',
    description: 'Deployment of structural teams and advanced material logistics for efficient vertical development.',
    duration: '6-12 Months'
  },
  {
    id: 4,
    title: 'Luxury Handover',
    description: 'Final structural certification, safety audit, and the formal keys delivery ceremony.',
    duration: '2-3 Weeks'
  }
];