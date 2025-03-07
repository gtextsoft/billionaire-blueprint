
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import MissionSection from '@/components/MissionSection';
import OfferSection from '@/components/OfferSection';
import UrgencySection from '@/components/UrgencySection';
import HowToSection from '@/components/HowToSection';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <MissionSection />
        <OfferSection />
        <UrgencySection />
        <HowToSection />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
