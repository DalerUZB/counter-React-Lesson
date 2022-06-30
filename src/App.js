import React, { useState } from 'react'
import './App.css';

function App() {
  const list = [2, 3, 5]

  const [counter, setCounter] = useState(0);
  const [forIndex, setForIndex] = useState(0)
  const [saved, setSaved] = useState(list[0])


  const increment = () => {
    setCounter(counter + saved)
  }
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - saved)

    }

  }

  const globalFunc = (index, item) => {
    setForIndex(index)
    setSaved(item)
  }


  return (
    <div className="App">
      <div className='parent'>

        <ul className='ul'>
          {list.map((item, index) => (
            <li
              onClick={() => globalFunc(index, item)}
              className={index === forIndex ? "buttonChange" : ''}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className='counterParentDiv'>
          <button onClick={increment}>+</button>
          <h2>{counter}</h2>
          <button onClick={decrement}>-</button>
        </div>
      </div>

    </div>
  );
}

export default App;
