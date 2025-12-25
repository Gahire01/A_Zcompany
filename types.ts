
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export interface NavLink {
  name: string;
  href: string;
}