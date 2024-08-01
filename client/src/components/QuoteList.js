import React from 'react';

const QuoteList = ({ quotes }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {quotes.length === 0 ? (
        <p className="text-gray-600 text-center text-lg mt-6">No quotes saved yet!</p>
      ) : (
        <div className="space-y-4 mt-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <p className="text-base md:text-lg text-gray-800">{quote}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuoteList;
