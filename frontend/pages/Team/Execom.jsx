import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./TeamCards.css";

import webteam1 from "../../assets/Web Team/Karthik.png";
import webteam2 from "../../assets/Web Team/Parikshit.png";
import webteam3 from "../../assets/Web Team/Robin.png";
import webteam4 from "../../assets/Web Team/Rohan.png";
import webteam5 from "../../assets/Web Team/Shravan.png";

import execom1 from "../../assets/Team/TeamCard0.png";
import execom2 from "../../assets/Team/TeamCard1.png";
import execom3 from "../../assets/Team/TeamCard2.png";
import execom4 from "../../assets/Team/TeamCard3.png";
import execom5 from "../../assets/Team/TeamCard4.png";
import execom6 from "../../assets/Team/TeamCard5.png";
import execom7 from "../../assets/Team/TeamCard6.png";
import execom8 from "../../assets/Team/TeamCard7.png";
import execom9 from "../../assets/Team/TeamCard8.png";
import execom10 from "../../assets/Team/TeamCard9.png";
import execom11 from "../../assets/Team/TeamCard10.png";
import execom12 from "../../assets/Team/TeamCard11.png";
import execom13 from "../../assets/Team/TeamCard12.png";
import execom14 from "../../assets/Team/TeamCard13.png";
import execom15 from "../../assets/Team/TeamCard14.png";
import execom16 from "../../assets/Team/TeamCard15.png";
import execom17 from "../../assets/Team/TeamCard16.png";
import execom18 from "../../assets/Team/TeamCard17.png";
import execom19 from "../../assets/Team/TeamCard18.png";

export default function Execom() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Team arrays
  const teamCards = [
    execom1, execom2, execom3, execom4, execom5, execom6, execom7,
    execom8, execom9, execom10, execom11, execom12, execom13, execom14,
    execom15, execom16, execom17, execom18, execom19,
  ];
  const duplicatedTeamCards = [...teamCards, ...teamCards];

  const webTeamMembers = [
    { name: "Karthik", image: webteam1 },
    { name: "Parikshit", image: webteam2 },
    { name: "Robin", image: webteam3 },
    { name: "Rohan", image: webteam4 },
    { name: "Shravan", image: webteam5 },
  ];

  // Execom slider for mobile
  const [execomRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { 
      perView: 1.5, 
      spacing: 15,
    },
    range: {
      align: false,
    },
    rtl: false,
  });

  // Web team focus carousel (mobile only)
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { 
      perView: 1.4,
      spacing: 15,
    },
    range: {
      align: false,
    },
    rtl: false,
    renderMode: 'performance',
    initial: 0,
    drag: true,
    rubberband: true,
    dragSpeed: 1,
    animationEnded(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setCurrentSlide(0);
    },
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative p-4 sm:p-6 lg:p-8 h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-3"
          style={{
            backgroundImage: "url('/bgtest.png')",
            opacity: 0.8,
          }}
        ></div>
        <div className="relative text-center space-y-4 z-10 max-w-4xl mx-auto px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
            style={{ fontFamily: "Morton" }}
          >
            MEET THE
          </h1>
          <h1
            className="text-5xl sm:text-8xl md:text-9xl lg:text-8xl xl:text-9xl text-[#ED246D]"
            style={{ fontFamily: "Morton" }}
          >
            TEAM.
          </h1>
        </div>
      </div>

      {/* EXECOM Section */}
      <div className="team-scroll-wrapper">
        <div className="flex items-center mb-6 md:mb-10 px-4">
          <h1 className="text-[#ED246D] text-3xl md:text-5xl font-bold" style={{ fontFamily: "Morton" }}>//</h1>
          <h1 className="text-white text-3xl md:text-5xl font-bold ml-2" style={{ fontFamily: "Morton" }}>GLITCH</h1>
          <h1 className="text-[#ED246D] text-3xl md:text-5xl font-bold ml-2 md:ml-4" style={{ fontFamily: "Morton" }}>EXECOM</h1>
        </div>

        {isMobile ? (
          <div className="execom-carousel-wrapper">
            <div ref={execomRef} className="keen-slider execom-carousel">
              {teamCards.map((cardSrc, index) => (
                <div key={index} className="keen-slider__slide flex justify-center">
                  <img
                    src={cardSrc}
                    alt={`Team Member ${index + 1}`}
                    loading="lazy"
                    className="rounded-2xl w-72 h-auto shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="team-scroll-container">
            {duplicatedTeamCards.map((cardSrc, index) => (
              <div key={`team-card-${index}`} className="team-card">
                <img src={cardSrc} alt={`Team Member ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* WEB TEAM Section */}
      <div className="team-scroll-wrapper mt-12 md:mt-20">
        <div className="flex items-center mb-6 md:mb-10 px-4">
          <h1 className="text-[#ED246D] text-3xl md:text-5xl font-bold" style={{ fontFamily: "Morton" }}>//</h1>
          <h1 className="text-white text-3xl md:text-5xl font-bold ml-2" style={{ fontFamily: "Morton" }}>WEB</h1>
          <h1 className="text-[#ED246D] text-3xl md:text-5xl font-bold ml-2 md:ml-4" style={{ fontFamily: "Morton" }}>TEAM</h1>
        </div>

        {isMobile ? (
          // 🎯 Focus Carousel for Mobile
          <>
            {/* <p className="text-white/60 text-center text-sm mb-4 px-4">
              👈 Swipe to explore 👉
            </p> */}
            <div ref={sliderRef} className="keen-slider web-focus-carousel">
              {webTeamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide ${
                    currentSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-60 blur-sm"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-64 md:w-72 h-auto object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Slider Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {webTeamMembers.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-[#ED246D]"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          // Normal Grid for Desktop
          <div className="web-team-container">
            {webTeamMembers.map((member, index) => (
              <div key={index} className="web-team-card">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
}
