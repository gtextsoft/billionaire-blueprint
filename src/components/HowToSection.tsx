
import React from 'react';
import { Button } from '@/components/ui/button';

const HowToSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-navy text-center mb-12">
          Here's How to Get Access:
        </h2>
        
        <div className="space-y-10">
          <div className="flex items-start gap-6">
            <div className="h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">
                Click the button below to secure your bundle at this exclusive price
              </h3>
              <Button className="mt-4 bg-gold hover:bg-gold-dark text-navy-dark font-bold">
                Get Access Now
              </Button>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">
                Make your payment and get immediate access to all 47 books
              </h3>
              <p className="text-gray-600">
                Secure payment options available. Your books will be delivered instantly via email.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="h-10 w-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-lg flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-navy">
                Start applying the knowledge and watch your life and finances transform
              </h3>
              <p className="text-gray-600">
                Each book contains actionable wisdom that you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
