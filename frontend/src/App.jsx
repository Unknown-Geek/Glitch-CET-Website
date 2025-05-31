import { useState } from 'react'
import './index.css' // Importing the CSS file for styles
import Featured from '../pages/Home/featured.jsx' // Importing the Featured component
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Featured />
   </div>
  )
}

export default App
