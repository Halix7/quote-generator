import { useState } from 'react'
import data from "./data.json";
import {PiQuotesFill} from "react-icons/pi";
import {BsTwitter} from "react-icons/bs";
import {BiLogoTumblr} from "react-icons/bi"
const getRandomQuote=()=>{
 return data[Math.floor(Math.random() * data.length)];
}
const getRandomColor=()=>{
  const red = Math.floor(Math.random() * 128);
  const green=Math.floor(Math.random() * 128);
  const blue=Math.floor(Math.random() * 128);
  return `rgb(${red},${green},${blue})`;
}
const transition="all 1s";
function App() {
  const [quotes, setQuotes] = useState(getRandomQuote());
 const [randomColor, setRandomColor] = useState(getRandomColor());
  const changeQuote=()=>{
    setQuotes(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
    <>

      <main className='flex justify-center items-center h-[100vh] raleway  flex-col' style={{backgroundColor:randomColor , transition}}>
        <header id='quote-box' className='md:w-[42rem] border py-8 px-12 bg-white mx-4  rounded-lg shadow-xl' style={{transition}} >
          <div id='quote-content' className=' mb-6 '>
            <div className='flex text-xl md:text-2xl '>

        <PiQuotesFill className='rotate-180 text-[4rem]  h-8 font-extrabold  '  style={{color:randomColor , transition}}/>
        <h1 id='text' style={{color:randomColor, transition}}>
          {quotes.quote}
          
          </h1>
            </div>
        <h4 id='author' className='flex justify-end ' style={{color:randomColor, transition}}>- {quotes.author}</h4>

          </div>
          <div className='flex justify-between'>
          <div className='flex gap-3'>

          <a id="tweet-quote" href='twitter.com/intent/tweet' target='_blank'  rel="noreferrer" className='text-white   px-2 md:px-3 py-2 md:py-3 rounded-[0.250rem] cursor-pointer' style={{backgroundColor:randomColor, transition}}>

        <BsTwitter />
          </a>
          <a id="tumblr-quote" href='https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=George%20Eliot&content=It%20is%20never%20too%20late%20to%20be%20what%20you%20might%20have%20been.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button' target='_blank'  rel="noreferrer" className='text-white  px-2 md:px-3 py-2 md:py-3 rounded-[0.180rem] cursor-pointer' style={{backgroundColor:randomColor, transition}}>
          <BiLogoTumblr/>
          </a>
          </div>
          <button id="new-quote" className='py-1 md:py-2 px-4 rounded-[0.250rem] font-sans text-white active:scale-125' style={{backgroundColor:randomColor, transition}} onClick={changeQuote}>
            New quote
          </button>
          </div>
        </header>
        <footer className='mt-4 font-medium text-white'>
          <h2>by Rohit</h2>
        </footer>
      </main>
    </>
  )
}

export default App
