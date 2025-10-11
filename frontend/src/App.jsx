import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./styles.css";
import Start from "./Start/Start";
import "./index.css"; // Importing the CSS file for styles
import Footer  from "../pages/Home/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "../pages/Games/Cards.jsx";
import About from "../pages/Home/About.jsx";
import ScrollingText from "../pages/Home/ScrollingText.jsx";
import Contacts from "../pages/Contacts/Contacts.jsx";
import Upcoming from "../pages/Events/Upcoming.jsx";
import PreviousEvents from "../pages/Events/PreviousEvents.jsx";
import Execom from "../pages/Team/Execom.jsx";
import GameCard from "../pages/Games/GameCard.jsx";
import Footer1 from "../pages/Events/Footer.jsx";

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
                <Footer />
              </>
            }
          />

<Route
  path="/games"
  element={
    <>
      <Navbar />
      <div className="w-full min-h-screen"> 
        <div className="w-full"> 
          <GameCard />
        </div>
        <div className="w-full "> 
          <ScrollingText text="Games" />
        </div>
        <div className="w-full mt-12"> 
          <Cards />
        </div>
      </div>
      <Footer />
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
                <Footer1 />
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
                <Footer1 />
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