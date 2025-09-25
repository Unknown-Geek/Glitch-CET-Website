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
import Contacts from "../pages/Contacts/Contacts.jsx";
import Upcoming from "../pages/Events/Upcoming.jsx";
import PreviousEvents from "../pages/Events/PreviousEvents.jsx";
import Execom from "../pages/Team/Execom.jsx";
import GameCard from "../pages/Games/GameCard.jsx";

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
                <Cards />
                <ScrollingText text="Glitch" />
              </>
            }
          />

          <Route
            path="/games"
            element={
              <>
                <Navbar />
                <div className="relative w-full h-full"> 
                  <div className="absolute top-95 lg:top-130 w-full z-10"> 
                    <ScrollingText text="Games" />
                  </div>
                  <div className="absolute top-10 w-full z-0"> 
                    <GameCard />
                  </div>
                  <div className="top-110 lg:top-160 absolute mt-[150px]"> 
                    <Cards />
                  </div>
                </div>
              </>
            }
          />

          <Route
            path="/events"
            element={
              <>
                <Navbar />
                <Upcoming />
                <PreviousEvents />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Navbar />
                <Execom />
                <ScrollingText text="TEAM" />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Navbar />
                <Contacts />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;