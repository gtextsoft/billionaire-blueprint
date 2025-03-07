
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center py-20 md:py-28">
      <div className="container text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 hero-text-shadow">
          <span className="gold-gradient">10-Figure Entrepreneur's</span> <br />
          Wealth Secrets Now Accessible To You!
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
          For the first time ever, you have the chance to unlock a billionaire's lifetime of wisdom, 
          high-end secrets, and privileged access to the world's most powerful men…
        </p>
        <Button className="bg-gold hover:bg-gold-dark text-navy-dark font-bold text-lg py-6 px-8 rounded-full" onClick={() => window.location.href = '/#'}>
          Unlock All 47 Books Now
        </Button>
        <div className="mt-12 animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
