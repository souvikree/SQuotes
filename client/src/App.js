import React, { useState, useEffect } from 'react';
import axios from 'axios';

import QuoteList from './components/QuoteList.js'; // Add .js extension
import QuoteCard from './components/QuoteCard.js'; // Add .js extension
import './index.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleSaveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 md:flex-row">
      {/* Random Quote Section */}
      <div className="fixed top-0 left-0 w-full md:w-1/3 bg-gray-100 border-b md:border-r border-gray-300 h-auto md:h-full p-4 overflow-y-auto z-0">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">Random Quote</h1>
        <QuoteCard quote={quote} onSave={handleSaveQuote} />
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
            onClick={fetchQuote}
          >
            Get New Quote
          </button>
        </div>
      </div>

      {/* Saved Quotes Section */}
      <div className="flex-1 ml-0 md:ml-[33.33%] p-4 mt-96  md:mt-0">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Saved Quotes</h2>
        <div className="max-w-full overflow-y-auto h-screen">
          <QuoteList quotes={savedQuotes} />
        </div>
      </div>
    </div>
  );
};

export default App;
