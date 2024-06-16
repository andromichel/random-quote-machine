import React, { useState, useEffect } from 'react';
import './App.css';

const QUOTE_API_URL = 'https://api.quotable.io/random';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchNewQuote = async () => {
    const response = await fetch(QUOTE_API_URL);
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quote}</p>
        <p id="author">{author}</p>
        <button id="new-quote" onClick={fetchNewQuote}>New Quote</button>
        <a 
          id="tweet-quote" 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} 
          target="_blank" 
          rel="noopener noreferrer">
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
