import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import './styles.css'
import Start from './Start/Start'
import './index.css' // Importing the CSS file for styles
import Featured from '../pages/Home/Featured.jsx' 
function App() {

  return (
    
    <>
      <Navbar/>
      <Start/>
      <Featured />
    </>)
}

export default App
