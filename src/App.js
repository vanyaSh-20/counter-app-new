import './App.css';
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button
        className='btn'
        onClick={() => { setCount(count + 1) }}>
        Increment</button>
      <button
        className='btn2'
        onClick={() => { setCount(count - 1) }}
        disabled={count === 0}>
        Decrement</button>
      <button
        className='btn3'
        onClick={() => { setCount(0) }}
        disabled={count === 0}>Reset</button>
    </div>
  );
}

export default App;
