
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Quote } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="https://28coe.com/wp-content/uploads/2021/09/Dr.-Stephen-Akintayo-3-scaled.jpg" 
              alt="Dr. Stephen Akintayo" 
              className="rounded-xl shadow-xl relative z-10 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:rotate-1"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy/20 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-20 flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-navy">10-Figure Entrepreneur</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 relative inline-block">
              <span className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold/30"></span>
              Dear Success Seeker,
              <div className="h-0.5 w-full bg-gradient-to-r from-gold to-transparent mt-1"></div>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              My name is <span className="font-bold text-navy">Dr. Stephen Akintayo</span>, a 10-figure entrepreneur, 
              world-renowned real estate coach, and founder of a billion-naira empire.
            </p>
            <p className="text-gray-700 mb-6">
              And over the years, I've heard people ask:
            </p>
            <Card className="mb-4 bg-navy text-white transform transition-all duration-300 hover:translate-x-2 shadow-lg border-l-4 border-gold">
              <CardContent className="p-4 italic flex items-start gap-2">
                <Quote className="h-5 w-5 text-gold-light shrink-0 mt-0.5" />
                <p>"If he's truly a billionaire, why does he give out his secrets so freely?"</p>
              </CardContent>
            </Card>
            <Card className="mb-6 bg-navy text-white transform transition-all duration-300 hover:translate-x-2 shadow-lg border-l-4 border-gold">
              <CardContent className="p-4 italic flex items-start gap-2">
                <Quote className="h-5 w-5 text-gold-light shrink-0 mt-0.5" />
                <p>"Why not keep the knowledge to himself?"</p>
              </CardContent>
            </Card>
            <p className="text-gray-700 mt-8 font-bold text-lg relative inline-block">
              Here's the truth they don't know:
              <div className="h-0.5 w-full bg-gradient-to-r from-gold to-transparent mt-1"></div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
