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
                <Cards/>   
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
                <Upcoming />
                <PreviousEvents/>
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
