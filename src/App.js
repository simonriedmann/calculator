import { useState } from 'react';


import ButtonAdd1 from './buttonadd1'
import ButtonAdd10 from './buttonadd10'
import ButtonAddRandom from './buttonaddrandom'
import ButtonMinus1 from './buttonminus1'
import ButtonMinus10 from './buttonminus10'
import ButtonMinusRandom from './buttonminusrandom'
import Number from './Number.js'

import './App.css';

function App() {

const [counter, setCounter] = useState(0)
const randomNumber = Math.floor(Math.random() * 100)

function incrementCountOne() {
  setCounter(prevCount => prevCount + 1)
}

function incrementCountTen() {
  setCounter(prevCount => prevCount + 10)
}

function incrementCountRandom() {
  setCounter(prevCount => prevCount + randomNumber)
}


function decrementCountOne() {
  setCounter(prevCount => prevCount - 1)
}

function decrementCountTen() {
  setCounter(prevCount => prevCount - 10)
}

function decrementCountRandom() {
  setCounter(prevCount => prevCount - randomNumber)
}

  return (
    <div className="App">
      <span>{counter}</span>
      <section className="buttonbox">
        <button className="button" onClick={decrementCountRandom}>-random</button>
        <button className="button" onClick={decrementCountTen}>-10</button>
        <button className="button" onClick={decrementCountOne}>-1</button>    
        <button className="button" onClick={incrementCountOne}>+1</button>
        <button className="button" onClick={incrementCountTen}>+10</button>  
        <button className="button" onClick={incrementCountRandom}>+random</button>
      </section>
    </div>
  );
}

export default App;
