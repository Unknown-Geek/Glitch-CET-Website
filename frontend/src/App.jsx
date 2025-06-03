import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./styles.css";
import Start from "./Start/Start";
import "./index.css"; // Importing the CSS file for styles
import Featured from "../pages/Home/Featured.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "../pages/Games/Cards.jsx";
import About from "../pages/Home/About.jsx";
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
                <Featured />
              </>
            }
          />

          <Route
            path="/games"
            element={
              <>
                <Navbar />
                <Cards />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
