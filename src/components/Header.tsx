
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-navy to-navy-dark py-5 w-full sticky top-0 z-50 shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="text-white font-bold text-xl md:text-2xl font-serif flex items-center gap-2 relative group">
          <div className="absolute -inset-1 bg-gold/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <BookOpen className="h-6 w-6 text-gold relative" />
          <span className="text-gold relative">Billionaire</span>
          <span className="relative">Blueprint</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-white bg-navy-light/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <Clock className="h-4 w-4 text-gold animate-pulse" />
            <span className="text-sm">Offer ends <span className="font-bold">April 20th</span></span>
          </div>

<link rel="stylesheet" href="/#" />
          <Button className="bg-gold hover:bg-gold-dark text-navy-dark font-bold group transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl rounded-full px-5" onClick={() => window.location.href = '/OfferSection'}>
            <Sparkles className="h-4 w-4 mr-1 text-navy-dark" />
            <span> Get Access Now </span>
            <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <link/>
        </div>
      </div>
    </header>
  );
};

export default Header;
