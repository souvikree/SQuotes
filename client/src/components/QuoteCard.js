import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 max-w-md mx-auto shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <p className="text-base md:text-lg text-gray-900 mb-4 italic font-medium">
        {quote}
      </p>
      <button
        className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-300"
        onClick={() => onSave(quote)}
      >
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;
