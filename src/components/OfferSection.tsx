
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Book, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookList } from './BookList';  // Add this import

const OfferSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-white">
          Over the years, I have written <span className="text-gold">45 books</span> filled with the <br/>
          same strategies that built my empire.
        </h2>
        
        <div className="text-white space-y-6 text-center lg:text-left mb-8">
            <p className="text-lg">
              Each book is a roadmap to success containing the exact principles I used to break barriers 
              and build wealth beyond limits.
            </p>
            
            <p className="text-lg">
              And for the first time ever, I am making <span className="font-bold text-gold">ALL 45 books</span> available 
              to you at an unbelievable price.
            </p>
            
            <p className="text-lg">
              If you can dedicate yourself to just reading and applying even 5% of the knowledge in these books, 
              your life's trajectory will completely transform beyond your imagination.
            </p>
            
            <p className="text-lg">
              You will no longer be clueless. You will no longer be stuck.
            </p>
            
            <p className="text-lg font-bold">
              Once you access this life-changing knowledge, the only thing standing between you and success… will be YOU.
            </p>
          </div>
          
          <BookList />
          
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-navy">Here's What You Get:</h3>
              
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0" />
                  <span>Access to <strong>45 Books</strong> packed with real-world strategies for building wealth, creating influence, and dominating your industry.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0" />
                  <span>Billionaire secrets from high-level rooms and conversations with the world's most powerful men.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0" />
                  <span>A proven roadmap to financial independence, entrepreneurship, and generational wealth.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-6 w-6 text-gold flex-shrink-0" />
                  <span>No fluff, no hype, just real strategies that have built billion-dollar empires.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        <div className="bg-navy-light p-8 rounded-lg mt-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gold">A Once-in-a-Lifetime Offer</h3>
          <p className="text-white text-center mb-8 text-lg">
            These books contain billionaire-level secrets that should cost a fortune.<br/>
            But for today, you will be getting them for an unbelievable price
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-white overflow-hidden">
              <div className="bg-navy-light text-white p-4 text-center font-bold">
                <Book className="h-8 w-8 mx-auto mb-2" />
                Ebook Package
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-navy">N100,000</div>
                <p className="text-gray-600 mb-4">All 45 books in Ebook format</p>
                <Button className="w-full bg-navy hover:bg-navy-dark" onClick={() => window.location.href = 'https://paystack.com/pay/5ugkve6-8l'}>Access All 45 Books Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white overflow-hidden border-gold-dark border-2 transform scale-105 shadow-xl">
              <div className="bg-gold text-navy p-4 text-center font-bold">
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold-dark text-white text-xs py-1 px-3 rounded-full">BEST VALUE</span>
                <Book className="h-8 w-8 mx-auto mb-2" />
                <Headphones className="h-8 w-8 mx-auto mb-2" />
                Complete Bundle
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-navy">N170,000</div>
                <p className="text-gray-600 mb-4">All 45 books in BOTH Ebook & Audiobook formats</p>
                <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-bold" onClick={() => window.location.href = 'https://paystack.com/pay/pi8pm1848j'}>Access All 45 Books Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white overflow-hidden">
              <div className="bg-navy-light text-white p-4 text-center font-bold">
                <Headphones className="h-8 w-8 mx-auto mb-2" />
                Audiobook Package
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2 text-navy">N120,000</div>
                <p className="text-gray-600 mb-4">All 45 books in Audiobook format</p>
                <Button className="w-full bg-navy hover:bg-navy-dark" onClick={() => window.location.href = 'https://paystack.com/pay/pq4680ru-r'}>Access All 45 Books Now</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center text-white">
            <p className="text-lg mb-4">
              This is access to a lifetime knowledge for the price of a weekend getaway
            </p>
            <p className="text-lg mb-6">
              Let's break it down — N170,000 divided by 365<br/>
              This means that you get access to a lifetime of wisdom for just <span className="text-gold font-bold">N466 a day</span><br/>
              Less than N500 is what it'll cost you in a day to set a great path for yourself and posterity
            </p>
            <p className="text-xl font-bold">
              This is a great steal, and I know it. But as I said, my goal is simple:
            </p>
            <p className="text-2xl text-gold font-bold my-4">
              Ignorance should never be an excuse for staying broke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
