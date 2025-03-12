
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container max-w-4xl text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Don't Wait. This Opportunity might never happen Again.
        </h2>
        
        <p className="text-xl mb-10">
          Click Below to Get Instant Access!
        </p>
        
        <Button 
          onClick={() => window.location.href = '#/offersection'}
          className="bg-gold hover:bg-gold-dark text-navy-dark font-bold text-lg py-6 px-10 animate-pulse"
        >
          Access All 47 Books Now
        </Button>
        
        <div className="mt-12 text-sm text-gray-400">
          <p>© 2023 Dr. Stephen Akintayo. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="#" className="underline hover:text-gold">Privacy Policy</a> | 
            <a href="#" className="underline hover:text-gold ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
