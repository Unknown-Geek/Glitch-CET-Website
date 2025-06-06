import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./styles.css";
import Start from "./Start/Start";
import "./index.css"; // Importing the CSS file for styles
import Featured from "../pages/Home/Featured.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "../pages/Games/Cards.jsx";
import About from "../pages/Home/About.jsx";
import ScrollingText from "../pages/Home/ScrollingText.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Start />
                <About />
                <ScrollingText text="Glitch" />
                <Featured />   
                <ScrollingText text="Glitch" />            
              </>
            }
          />

          <Route
            path="/games"
            element={
              <>
                <Navbar />
                <ScrollingText text="Games"/>
                <Cards />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Navbar />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Navbar />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Navbar />
              </>
            }
          />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
