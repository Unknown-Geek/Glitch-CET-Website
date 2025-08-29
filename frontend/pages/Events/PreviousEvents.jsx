import React, { useState } from 'react'
import ScrollingText from '../Home/ScrollingText';
import { useMediaQuery } from 'react-responsive';
import "./Previous.css";

function PreviousEvents() {
    const [SelectedCardIds, setSelectedCardIds] = useState([]);
    const stopScrolling = SelectedCardIds.length > 0;
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const toggleCard = (id) => {
        setSelectedCardIds(prev =>
            prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
        );
    };

    const events = [
        { id: 1, day: "28", month: "MAR", title: "GAME ON", subTitle: "A GAME DEVELOPMENT WORKSHOP USING UNITY", description1: "Glitch CET, in colloboration with DotsSlash CET conducted a hands-on worksop on game-developmentusing Unity led by Hani Muhamed and Janbaas Jamal.", description2: "The session introduced the participants to the basics of game design and development, offering practical insights into building games with Unity's powerful engine." },
        { id: 2, day: "02", month: "MAR", title: "SCRATCH MASTER", subTitle: "SCRATCH PROGRAMMING WORKSHOP", description1: "As part of the DotSlash For Juniors initiative, Glitch CET, in collaboration with DotSlash CET, conducted Scratch Masters,", description2: "a hands-on workshop exclusively for school students. Led by Abhinav KP and Abhiram G, the session introduced young minds to the basics of Scratch and game development, sparking creativity through code." },
        { id: 3, day: "15", month: "MAR", title: "WIX WORKSHOP", subTitle: "WEB DESIGN FOR SCHOOL CHILDREN", description1: "Glitch CET, in collaboration with DotSlash CET, hosted a hands-on Wix Workshop as part of the DotSlash For Juniors initiative. Led by Haripriya P H and Joanna Susan.", description2: "The session introduced school students to the world of web design, guiding them through building and launching their own websites." },
        { id: 4, day: "20", month: "MAR", title: "BASICS OF GAME DEVELOPMENT", subTitle: "WORKSHOP WITH KARMAPLAY", description1: "Glitch CET, in collaboration with KarmaPlay, hosted an engaging workshop introducing the Fundamentals of game development.", description2: "The session featured insightful talks by industry professionals - Ajmal Khan (Game Artist), Suriya Kumar (Game Programmer), and Ajith Ram (Director) - who shared their real-world experiences and creative journeys." },
        { id: 5, day: "28", month: "MAR", title: "GAME ON", subTitle: "A GAME DEVELOPMENT WORKSHOP USING UNITY", description1: "Glitch CET, in colloboration with DotsSlash CET conducted a hands-on worksop on game-developmentusing Unity led by Hani Muhamed and Janbaas Jamal.", description2: "The session introduced the participants to the basics of game design and development, offering practical insights into building games with Unity's powerful engine." },
        { id: 6, day: "28", month: "MAR", title: "GAME ON", subTitle: "A GAME DEVELOPMENT WORKSHOP USING UNITY", description1: "Glitch CET, in colloboration with DotsSlash CET conducted a hands-on worksop on game-developmentusing Unity led by Hani Muhamed and Janbaas Jamal.", description2: "The session introduced the participants to the basics of game design and development, offering practical insights into building games with Unity's powerful engine." },
    ];

    return (
        <div className="px-5 mb-[100px] ">
            <h1
                className="text-xl ml-[20px] mt-[20px] md:text-5xl font-normal mb-20 text-white"
                style={{ fontFamily: "Morton" }}
            >
                <span className="text-[#ED246D]">//</span>Previous{" "}
                <span className="text-[#ED246D]">EVENTS</span>
            </h1>


            <div className={`flex flex-row mb-[70px] overflow-x-scroll overflow-y-hidden } `}>
                <div className="flex w-fit " > 
                    {events.map((event, index) => {
                        const { title, subTitle, description1, description2, day, month, id } = event;
                        const clicked = SelectedCardIds.includes(id);
                        const barCount = isMobile
                            ? (clicked ? 12 : 35)
                            : (clicked ? 15 : 50);
                        {/* Previous event card */ }
                        return (
                            <div onClick={() => toggleCard(id)} className={`relative overflow-x-hidden overflow-y-hidden z-10 border-[1px] rounded-[3px] flex flex-col items-center justify-center py-[5px] lg:py-[20px] cursor-pointer ${clicked ? "w-[340px] lg:w-[800px] mx-[3px] lg:mx-[10px] " : "w-[290px]  lg:w-[340px] mx-[20px] "}  `}>

                                {/* background image */}
                                <img className={`absolute z-0 pointer-events-none opacity-[0.2] brightness-[1.6] ${clicked ? "h-[205%] w-[125%] lg:w-[105%] " : "h-[95%] w-[110%] "} `} src="DotsBG.png" alt="" />

                                {/* title */}
                                <div className={`flex flex-row items-center justify-center ${clicked?"px-[4px] lg:px-[20px]":"px-[10px] lg:px-[20px]"} `}>

                                    <div className="mt-[10px] flex flex-col gap-[3px] ">
                                        <div className="flex space-x-0.5 flex-col gap-[3px]">
                                            {Array.from({ length: isMobile ? "8" : "12" }, (_, i) => i).map((_, index) => (
                                                <div
                                                    key={index}
                                                    style={{ backgroundColor: "#ED246D" }}
                                                    className="rounded-sm w-[10px] h-[2px]"
                                                ></div>
                                            ))}
                                        </div>

                                    </div>
                                    <span className={`leading-none px-[6px] ${clicked ? "text-[32px] lg:text-[70px] " : "text-[35px]"} `} style={{ fontFamily: "Neopixel" }}>{title}</span>
                                </div>
                                <span className={`text-center my-[20px] font-light ${clicked ? "text-[16px] lg:text-3xl " : "text-xl "} `} style={{ fontFamily: "Neopixel" }}>{subTitle} </span>

                                {/* event image and description */}
                                <div className={`flex flex-row mt-[30px] lg:mt-[60px] justify-center items-center `}>
                                    <img className={`w-[150px] lg:w-[250px] lg:px-0  ${clicked ? "h-[50%] lg:h-[90%] ml-[10px] " : "px-[5px]"} `} src='event.png' alt="event" />
                                    {clicked && (
                                        <div className={`ml-[0px] lg:ml-[15px] ${clicked?"pr-[4px] ":""} `}>
                                            <span style={{ fontFamily: "Pixelify Sans" }} className="flex justify-center items-center w-[200px] lg:w-[370px] pl-[25px] text-[13px] lg:text-xl ">{description1}</span>
                                            <span style={{ fontFamily: "Pixelify Sans" }} className="flex justify-center items-center w-[200px] lg:w-[370px] pl-[25px] text-[13px] lg:text-xl mt-[25px] ">{description2}</span>
                                        </div>
                                    )}
                                </div>

                                <div className={`${clicked ? "flex flex-row mt-[40px] px-[10px] lg:px-[20px] " : "px-[10px] sm:px-[5px] md:px-[10px] lg:px-[20px] "}`}>
                                    {/* lineBar */}
                                    <div className={` my-[10px] ${clicked ? "flex flex-col" : "flex flex-row"} `}>
                                        <div className={`flex space-x-0.5 ${clicked ? "flex-col gap-[3px] " : "flex-row"} `}>
                                            {Array.from({ length: barCount }, (_, i) => i).map((_, index) => (
                                                <div
                                                    key={index}
                                                    style={{ backgroundColor: "#ED246D" }}
                                                    className={`rounded-sm ${clicked ? "w-[10px] h-[2px]" : "w-[3px] h-3"} `}
                                                ></div>
                                            ))}
                                        </div>

                                    </div>

                                    {/* Date */}
                                    <div className={`text-center mt-[5px] ${clicked ? "flex flex-row text-center px-[5px] lg:px-[10px] " : ""} `}>
                                        <span style={{ fontFamily: "Morton" }} className={` ${clicked ? "text-2xl lg:text-7xl mt-[20px] lg:mt-[0px] " : "text-6xl lg:text-7xl"} `}>{day}</span>
                                        <div className={` ${clicked ? "flex justify-center items-center ml-[8px] lg:ml-[16px] " : ""} `}>
                                            <span style={{ fontFamily: "Morton" }} className={`text-2xl text-[#ED246D] px-[8px] ${clicked ? "text-2xl lg:text-5xl " : ""} `}>{month}</span>
                                            <span style={{ fontFamily: "Morton" }} className={`text-2xl leading-none ${clicked ? "text-2xl lg:text-5xl ml-[6px] lg:ml-[12px] mr-[10px] " : ""} `}>{clicked ? "2025" : "25"} </span>
                                        </div>
                                    </div>

                                    {/* lineBar */}
                                    <div className="flex flex-col my-[10px] ">
                                        <div className={`flex  space-x-0.5 ${clicked ? "flex-col gap-[3px] " : "flex-row"} `}>
                                            {Array.from({ length: barCount }, (_, i) => i).map((_, index) => (
                                                <div
                                                    key={index}
                                                    style={{ backgroundColor: "#ED246D" }}
                                                    className={`rounded-sm ${clicked ? "w-[10px] h-[2px]" : "w-[3px] h-3"} `}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <ScrollingText text="EVENTS" />
        </div>
    )
}

export default PreviousEvents