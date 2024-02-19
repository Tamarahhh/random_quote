import React, { useState } from 'react'
import './RandomQuote.css'
import Twitter_icon from '../Assets/Twitter_icon.png'
import Reload_icon from '../Assets/Reload_icon.png'

const RandomQuote = () => {

    let quotes = [];
    
    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(select);
    }

    const [quote,setQuote] = useState({
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell"
      });

     const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    }

      loadQuotes();
  return (

    <div className='container'> 
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='breakline'></div>
        <div className='bottom'>
            <div className='author'>- {quote.author.split(',')[0]}</div>
            <div className='icons'>
                <img src={Reload_icon} onClick={()=>{random()}} alt='reload icon' />
                <img src={Twitter_icon} onClick={()=>{twitter()}} alt='twitter-x icon' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
