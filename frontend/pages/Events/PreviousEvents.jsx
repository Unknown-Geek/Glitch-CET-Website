import React, { useState, useEffect } from 'react';
import ScrollingText from '../Home/ScrollingText';
import { useMediaQuery } from 'react-responsive';
import client from '../../sanity-client';
import "./Previous.css";

function PreviousEvents() {
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  const [events, setEvents] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleCard = (id) => {
    setSelectedCardIds(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    // Fetch previous events from Sanity
    client.fetch(`
      *[_type == "previousEvent"] | order(id asc){
        _id,
        id,
        title,
        subTitle,
        description1,
        description2,
        day,
        month,
        "imageUrl": image.asset->url
      }
    `).then((data) => setEvents(data));
  }, []);

  return (
    <div className="px-5 mb-[100px]">
      <h1
        className="text-xl ml-[20px] mt-[20px] md:text-5xl font-normal mb-20 text-white"
        style={{ fontFamily: "Morton" }}
      >
        <span className="text-[#ED246D]">//</span> Previous{" "}
        <span className="text-[#ED246D]">EVENTS</span>
      </h1>

      <div className="flex flex-row mb-[70px] overflow-x-scroll overflow-y-hidden">
        <div className="flex w-fit">
          {events.map(event => {
            const { title, subTitle, description1, description2, day, month, id, imageUrl, _id } = event;
            const clicked = selectedCardIds.includes(id);
            const barCount = isMobile ? (clicked ? 12 : 35) : (clicked ? 15 : 50);

            return (
              <div
                key={_id}
                onClick={() => toggleCard(id)}
                className={`relative overflow-x-hidden overflow-y-hidden z-10 border-[1px] rounded-[3px] flex flex-col items-center justify-center py-[5px] lg:py-[20px] cursor-pointer ${clicked ? "w-[340px] lg:w-[800px] mx-[3px] lg:mx-[10px]" : "w-[290px] lg:w-[340px] mx-[20px]"}`}
              >
                {/* background placeholder */}
                <div className={`absolute z-0 pointer-events-none opacity-[0.2] brightness-[1.6] ${clicked ? "h-[205%] w-[125%] lg:w-[105%]" : "h-[95%] w-[110%]"}`} style={{ backgroundImage: `url('/DotsBG.png')`, backgroundSize: 'cover' }} />

                {/* Title */}
                <div className={`flex flex-row items-center justify-center ${clicked ? "px-[4px] lg:px-[20px]" : "px-[10px] lg:px-[20px]"}`}>
                  <div className="mt-[10px] flex flex-col gap-[3px]">
                    <div className="flex space-x-0.5 flex-col gap-[3px]">
                      {Array.from({ length: isMobile ? 8 : 12 }, (_, i) => i).map(i => (
                        <div key={i} style={{ backgroundColor: "#ED246D" }} className="rounded-sm w-[10px] h-[2px]" />
                      ))}
                    </div>
                  </div>
                  <span className={`leading-none px-[6px] ${clicked ? "text-[32px] lg:text-[70px]" : "text-[35px]"}`} style={{ fontFamily: "Neopixel" }}>{title}</span>
                </div>

                <span className={`text-center my-[20px] font-light ${clicked ? "text-[16px] lg:text-3xl" : "text-xl"}`} style={{ fontFamily: "Neopixel" }}>
                  {subTitle}
                </span>

                {/* Image & Description */}
                <div className={`flex flex-row mt-[30px] lg:mt-[60px] justify-center items-center`}>
                  <img
                    className={`w-[150px] lg:w-[250px] lg:px-0 ${clicked ? "h-[50%] lg:h-[90%] ml-[10px]" : "px-[5px]"}`}
                    src={imageUrl}
                    alt={title}
                  />
                  {clicked && (
                    <div className={`ml-[0px] lg:ml-[15px] ${clicked ? "pr-[4px]" : ""}`}>
                      <span style={{ fontFamily: "Pixelify Sans" }} className="flex justify-center items-center w-[200px] lg:w-[370px] pl-[25px] text-[13px] lg:text-xl">{description1}</span>
                      <span style={{ fontFamily: "Pixelify Sans" }} className="flex justify-center items-center w-[200px] lg:w-[370px] pl-[25px] text-[13px] lg:text-xl mt-[25px]">{description2}</span>
                    </div>
                  )}
                </div>

                {/* Date + bars */}
                <div className={`${clicked ? "flex flex-row mt-[40px] px-[10px] lg:px-[20px]" : "px-[10px] sm:px-[5px] md:px-[10px] lg:px-[20px]"}`}>
                  {/* Left line bar */}
                  <div className={`my-[10px] ${clicked ? "flex flex-col" : "flex flex-row"}`}>
                    <div className={`flex space-x-0.5 ${clicked ? "flex-col gap-[3px]" : "flex-row"}`}>
                      {Array.from({ length: barCount }, (_, i) => (
                        <div key={i} style={{ backgroundColor: "#ED246D" }} className={`rounded-sm ${clicked ? "w-[10px] h-[2px]" : "w-[3px] h-3"}`} />
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className={`text-center mt-[5px] ${clicked ? "flex flex-row text-center px-[5px] lg:px-[10px]" : ""}`}>
                    <span style={{ fontFamily: "Morton" }} className={`${clicked ? "text-2xl lg:text-7xl mt-[20px] lg:mt-[0px]" : "text-6xl lg:text-7xl"}`}>{day}</span>
                    <div className={`${clicked ? "flex justify-center items-center ml-[8px] lg:ml-[16px]" : ""}`}>
                      <span style={{ fontFamily: "Morton" }} className={`text-2xl text-[#ED246D] px-[8px] ${clicked ? "text-2xl lg:text-5xl" : ""}`}>{month}</span>
                      <span style={{ fontFamily: "Morton" }} className={`text-2xl leading-none ${clicked ? "text-2xl lg:text-5xl ml-[6px] lg:ml-[12px] mr-[10px]" : ""}`}>{clicked ? "2025" : "25"}</span>
                    </div>
                  </div>

                  {/* Right line bar */}
                  <div className="flex flex-col my-[10px]">
                    <div className={`flex space-x-0.5 ${clicked ? "flex-col gap-[3px]" : "flex-row"}`}>
                      {Array.from({ length: barCount }, (_, i) => (
                        <div key={i} style={{ backgroundColor: "#ED246D" }} className={`rounded-sm ${clicked ? "w-[10px] h-[2px]" : "w-[3px] h-3"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollingText text="EVENTS" />
    </div>
  );
}

export default PreviousEvents;
