import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, AlertTriangle, ArrowRight, Timer } from 'lucide-react';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 3, 20, 23, 59, 59, 999); // April is month 3 (0-based)
      
      // If we're past April 20th, set target to next year's April 20th
      if (now > targetDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      }
      
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
      
      return { days, hours, minutes, seconds };
    };
    
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Format with leading zeros
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <AlertTriangle className="h-10 w-10 text-gold animate-pulse" />
          <h2 className="text-3xl font-bold text-navy relative">
            But There's a Catch…
            <div className="h-1 w-24 bg-gold absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
          </h2>
        </div>
        
        <p className="text-xl mb-10">
          This offer will <span className="font-bold bg-navy text-white px-2 py-1 rounded">NOT</span> last forever.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12 border-t-4 border-gold relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/10 rounded-full"></div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="h-7 w-7 text-gold" />
            <p className="text-xl font-bold text-navy">
              This special offer expires on <span className="text-gold-dark">April 20th</span>
            </p>
          </div>
          
          <p className="text-lg text-navy-light italic mb-8">Next price increase in:</p>
          
          <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
            <div className={`bg-gradient-to-br from-navy to-navy-dark text-white text-2xl font-bold p-4 rounded-xl relative overflow-hidden shadow-lg ${isAnimating ? 'scale-105' : ''} transition-all duration-300`}>
              <span className="relative z-10">{formatNumber(Math.floor(timeLeft.days))}</span>
              <div className="text-xs mt-1 text-gold-light font-normal uppercase tracking-wider">DAYS</div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gold"></div>
            </div>
            <div className={`bg-gradient-to-br from-navy to-navy-dark text-white text-2xl font-bold p-4 rounded-xl relative overflow-hidden shadow-lg ${isAnimating ? 'scale-105' : ''} transition-all duration-300`}>
              <span className="relative z-10">{formatNumber(Math.floor(timeLeft.hours))}</span>
              <div className="text-xs mt-1 text-gold-light font-normal uppercase tracking-wider">HOURS</div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gold"></div>
            </div>
            <div className={`bg-gradient-to-br from-navy to-navy-dark text-white text-2xl font-bold p-4 rounded-xl relative overflow-hidden shadow-lg ${isAnimating ? 'scale-105' : ''} transition-all duration-300`}>
              <span className="relative z-10">{formatNumber(timeLeft.minutes)}</span>
              <div className="text-xs mt-1 text-gold-light font-normal uppercase tracking-wider">MINS</div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gold"></div>
            </div>
            <div className={`bg-gradient-to-br from-navy to-navy-dark text-white text-2xl font-bold p-4 rounded-xl relative overflow-hidden shadow-lg ${isAnimating ? 'scale-105' : ''} transition-all duration-300`}>
              <span className="relative z-10">{formatNumber(timeLeft.seconds)}</span>
              <div className="text-xs mt-1 text-gold-light font-normal uppercase tracking-wider">SECS</div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gold"></div>
            </div>
          </div>

          
          <div className="text-navy font-bold mb-8 py-4 px-6 border-y-2 border-dashed border-navy-light bg-gray-50 rounded-lg transform rotate-1 hover:rotate-0 transition-transform">
            Once the timer hits zero, the price increases – <span className="text-gold-dark underline">NO EXCEPTIONS!</span>
          </div>
        </div>
        
        <p className="text-lg flex items-center justify-center gap-2">
          <Timer className="h-5 w-5 text-gold animate-pulse" />
          <span>If you are serious about transforming your life, you need to act</span>
          <span className="font-bold bg-navy text-white px-3 py-1 rounded-full shadow-md animate-pulse">NOW</span>
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;
