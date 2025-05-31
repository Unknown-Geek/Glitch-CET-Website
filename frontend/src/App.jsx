import { useState } from 'react'
import './index.css' // Importing the CSS file for styles
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Glitch CET Website</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Count is: {count}
        </button>
      </div>
    </>
  )
}

export default App
