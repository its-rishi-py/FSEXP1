import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>COUNTER</h1>
      <div className="card3">
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
      <div className="card2">
        <button>
          Count is {count}
        </button>
      </div>
      <div className="card1">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  )
}
export default App
