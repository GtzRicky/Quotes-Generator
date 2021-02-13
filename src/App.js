import React, { useState } from 'react';
import Data from './quotes.json';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import randomColor from 'randomcolor';


const randomArray = (length) => Math.floor(Math.random() * length);

const getQuote = () => Data.quotes[randomArray(Data.quotes.length)];

const QuoteBox = ({ quoteShowed, colorShowed, getNewQuote }) => {

  const { quote, author } = quoteShowed;

  return (
    <div className="QuoteBox">
      <div className="TextQuote" style={{color: colorShowed}}>"{quote}"</div>
      <div className="Author" style={{color: colorShowed}}>~ {author}</div>
      <div className="Links">
        <a href="https://twitter.com/intent/tweet" className="Icon">
          <FontAwesomeIcon icon={faTwitter} size="2x"/>
        </a>
        <button className="Button" style={{color: colorShowed}} onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  )
}

function App() {

  const [color, setColor] = useState(randomColor());
  const [newQuote, setNewQuote] = useState(getQuote());

  const handleQuoteChange = () => {
    setNewQuote(getQuote());
    setColor(randomColor());
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox quoteShowed={newQuote} colorShowed={color} getNewQuote={handleQuoteChange}/>
    </div>
  );
}

export default App;
