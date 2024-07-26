import { useState } from 'react'
import './App.css'

function Count() {
  let [count, setCount] = useState(0)

  return (

    <div className="card">
    <div id="value">{count}</div>
    <button id="increment" onClick={() => setCount(count + 1)}>
      Increment
    </button>
    <button id="decrement" onClick={() => setCount(count - 1)}>
      Decrement
    </button>
  </div>
  )
}

export default Count
