// Fix: Import React to resolve "Cannot find namespace 'React'" error.
import React from 'react';

export interface Metric {
  id: string;
  value: string;
  label: string;
  color: 'primary' | 'secondary' | 'accent';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export interface RoadmapPhase {
  year: string;
  title: string;
  subtitle: string;
  features: string[];
  status: 'completed' | 'active' | 'future';
}