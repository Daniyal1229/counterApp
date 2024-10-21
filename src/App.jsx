import React, { useState } from 'react';
import './App.css'

function App() {

let [count, setCount] = useState(0);

let increment = ()=>{
  setCount(preCount => preCount+1);
}

let decrement = ()=>{
  if (count > 0) {
    setCount(preCount => preCount>0 ? preCount-1:0);
  }
}

let reset = ()=>{
  setCount(0)
}


  return (
    <>
      <h1>Counter App</h1>
      <div className='container'>
          <h2> {count} </h2>
          <div className="btns">
            <button onClick={decrement}> - </button>
            <button onClick={increment}> + </button>
          </div>
          <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App
