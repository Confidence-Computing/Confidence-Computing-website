import React from 'react';
import HeroSection from '../sections/HeroSection.jsx';
import ProblemSection from '../sections/ProblemSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import PromiseSection from '../sections/PromiseSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import ProcessSection from '../sections/ProcessSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function MainLayout() {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <PromiseSection />
        <TestimonialsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
