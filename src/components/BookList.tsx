import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { books, bookCategories } from '@/lib/books-data';

export const BookList = () => {
  const booksByCategory = bookCategories.reduce((acc, category) => {
    acc[category] = books.filter(book => book.category === category);
    return acc;
  }, {} as Record<string, typeof books>);

  return (
    <div className="space-y-8 p-4">
      {bookCategories.map(category => (
        <div key={category} className="category-section">
          <h3 className="text-2xl font-semibold mb-4 text-white">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {booksByCategory[category].map(book => (
              <Card key={book.id} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6 space-y-2">
                  <h4 className="text-xl font-semibold tracking-tight text-gray-900">{book.title}</h4>
                  <p className="text-sm text-gray-500">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;