import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import ModernizationSection from './components/ModernizationSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import IndustriesSection from './components/IndustriesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Track active section for navigation highlighting
      const sections = [
        'services-overview', 
        'modernization', 
        'why-choose-us',
        'process', 
        'industries', 
        'case-studies', 
        'contact'
      ];
      
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#0f172a] selection:bg-[#004ac6] selection:text-white relative font-sans overflow-x-hidden">
      
      {/* Background Architectural Subtle Light Accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-blue-500/8 via-cyan-500/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[35%] -left-[120px] w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full" />
        <div className="absolute top-[65%] -right-[120px] w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern-light opacity-60" />
      </div>

      {/* Modern Header Navigation */}
      <Header 
        scrollProgress={scrollProgress} 
        activeSection={activeSection} 
      />

      {/* Main Single-Page Content Flow */}
      <main className="relative z-10 pt-20">
        <Hero />
        <ServicesOverview />
        <ModernizationSection />
        <WhyChooseUs />
        <ProcessSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

    </div>
  );
}
