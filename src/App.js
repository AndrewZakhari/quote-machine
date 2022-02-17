import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const QUOTES = [
  ' Our greatest glory is not in never falling, but in rising every time we fall',
  ' Magic is believing in yourself, if you can do that, you can make anything happen',
  ' All our dreams can come true, if we have the courage to pursue them',
  ' The secret of getting ahead is getting started',
  ' Don’t wish it were easier. Wish you were better',
  ' The secret of change is to focus all of your energy, not on fighting the old, but on building the new',
  ' Setting goals is the first step into turning the invisible into the visible',
  ' If you don’t like something, change it. If you can’t change it, change your attitude',
  ' Decide upon your major definite purpose in life and then organize all your activities around it',
  ' Try not to become a person of success, but rather try to become a person of value',
]
const authors = [
    'Confucius',
    'Jogann Wolfgang von Goethe',
    'Walt Disney',
    'Mark Twain',
    'Jim Rohn',
    'Socrates',
    'Tony Robbins',
    'Maya Angelou',
    'Brian Tracy',
    'Albert Einstein'
]

let randomIndex = Math.floor(Math.random() *9)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      bool: false,
      quote: QUOTES[randomIndex],
      author: authors[randomIndex],
    }
    this.generateQuote = this.generateQuote.bind(this)
  } 
  randomNumber(arr){
    for(let i = 0; i < QUOTES.length; i++){
      return arr[i]
    }
  }
   generateQuote() { 
     let randomIndex = Math.floor(Math.random() *9);
     if(this.state.bool){
       this.setState({
         bool: false,
         quote: QUOTES[randomIndex],
         author: authors[randomIndex]
       });
     } else {
      this.setState (state => ({
        bool: true,
        quote : this.randomNumber(QUOTES),
        author : this.randomNumber(authors),
      })); 
    }
    }
    
  
  render(){
  return (
    <div id="quote-box" className="App">
       {/*On first load we generate a random quote*/}
     {/*Also get the author on first load */}
     <div id="Quote_author">
       <h1>,,</h1>
     <h3 id="text" className='text-white text-center'>{
     this.state.quote
     }</h3> 
      <hr/> 
     <h4 id="author" className='text-white text-center'>{
       this.state.author
 }
  </h4></div>
     {/*#author should refresh to the new quote's author every time the #new-quote button is 
     pressed */}
     <div id="buttons" className='d-flex justify-content-center'>
     <button onClick={this.generateQuote} id="new-quote" className='btn btn-secondary'>Generate quote</button>
     {/*Clicking on the #new-quote button should get a new quote and display it in #text */}
     <a href='https://twitter.com/intent/tweet' rel="noreferrer" target="_blank" className='text-center'><button
      id="tweet-quote" className='btn btn-primary'>
       Tweet Quote <FontAwesomeIcon icon={faShareNodes} /></button></a>
       </div>
    {/*Pressing the button should take us to twitter to tweet */}

    </div>
  );
}
} 

export default App;
