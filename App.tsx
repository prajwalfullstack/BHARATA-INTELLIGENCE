import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import Founder from './components/Founder';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-darkgray bg-offwhite">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Impact />
        <Roadmap />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;