import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import Founder from './components/Founder';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#join' || hash === '#get-started') {
        setCurrentView('join');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('landing');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="font-sans antialiased text-darkgray bg-offwhite">
      {/* 
        We keep Header and Footer visible in both views, 
        or we can conditionally render them. 
        For GetStarted, we might want a simplified header or the same one.
        The design requires the Header to handle the 'hash' change via links.
      */}
      <Header />
      
      <main>
        {currentView === 'landing' ? (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Impact />
            <Roadmap />
            <Founder />
            <FinalCTA />
          </>
        ) : (
          <GetStarted />
        )}
      </main>

      {currentView === 'landing' && <Footer />}
      {/* We hide the standard Footer on GetStarted page for a cleaner focus, or keep it. Let's hide it to keep focus on the form. */}
    </div>
  );
}

export default App;