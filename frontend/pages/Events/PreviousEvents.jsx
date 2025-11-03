import React, { useState } from 'react'
import ScrollingText from '../Home/ScrollingText';
import { useMediaQuery } from 'react-responsive';
import "./Previous.css";
import gd from "../../public/basics_of_gd.jpg";
import treasure from "../../public/treasure.jpg";
import jam from "../../public/game_jam.jpg";
import gameon from "../../public/game_on.jpg";
import scratch from "../../public/scratch.jpg";
import wix from "../../public/wix.jpg";
import pressf from "../../public/pressf.jpg";
import arena from "../../public/game_arena.jpg";
import ctrl from "../../public/ctrl_create (2).jpg";
import efootball from "../../public/efootball.jpg";
import figma from "../../public/figma.jpg";
import blender from "../../public/blender.jpg";
import orientation from "../../public/orientation.jpg";

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
    { 
        id: 1, 
        day: "28", 
        month: "MAR", 
        title: "Basics of game development workshop",
        subTitle: "Game dev basics workshop held with industry experts from KarmaPlay.",
        description1: "Game dev basics workshop held with industry experts from KarmaPlay.",
        description2: "Game dev basics workshop held with industry experts from KarmaPlay.",
        image: gd
    },
    { 
        id: 2, 
        day: "02", 
        month: "MAR", 
        title: "Treasure hunt",
        subTitle: "A game-based treasure hunt with Tesla 25 where every clue was unlocked through play.",
        description1: "A game-based treasure hunt with Tesla 25 where every clue was unlocked through play.",
        description2: "A game-based treasure hunt with Tesla 25 where every clue was unlocked through play.",
        image: treasure
    },
    {   
        id: 3, 
        day: "15", 
        month: "MAR", 
        title: "Game jam",
        subTitle: "An online game jam with DotSlash’25 where teams built games within a time limit.",
        description1: "An online game jam with DotSlash’25 where teams built games within a time limit.",
        description2: "An online game jam with DotSlash’25 where teams built games within a time limit.",
        image: jam
    },
    { 
        id: 4, 
        day: "20", 
        month: "MAR", 
        title: "Game on",
        subTitle: "A hands-on Unity workshop with DotSlash’25 for beginners in game dev.",
        description1: "A hands-on Unity workshop with DotSlash’25 for beginners in game dev.",
        description2: "A hands-on Unity workshop with DotSlash’25 for beginners in game dev.",
        image: gameon
    },
    { 
        id: 5, 
        day: "10", 
        month: "APR", 
        title: "Scratch masters workshop",
        subTitle: "A beginner-friendly Scratch workshop for kids hosted with DotSlash’25.",
        description1: "A beginner-friendly Scratch workshop for kids hosted with DotSlash’25.",
        description2: "A beginner-friendly Scratch workshop for kids hosted with DotSlash’25.",
        image: scratch
    },
    { 
        id: 6, 
        day: "18", 
        month: "APR", 
        title: "Wix workshop",
        subTitle: "A Wix workshop for school students with DotSlash’25.",
        description1: "A Wix workshop for school students with DotSlash’25.",
        description2: "A Wix workshop for school students with DotSlash’25.",
        image: wix
    },
    { 
        id: 7, 
        day: "22", 
        month: "APR", 
        title: "Press F to Start",
        subTitle: "A 5-day Unity workshop series where beginners can learn game development from scratch.",
        description1: "A 5-day Unity workshop series where beginners can learn game development from scratch.",
        description2: "A 5-day Unity workshop series where beginners can learn game development from scratch.",
        image: pressf
    },
    { 
        id: 8, 
        day: "01", 
        month: "MAY", 
        title: "Game Arena",
        subTitle: "An interactive gaming session conducted with CodeRecet.",
        description1: "An interactive gaming session conducted with CodeRecet.",
        description2: "An interactive gaming session conducted with CodeRecet.",
        image: arena
    },
    { 
        id: 9, 
        day: "05", 
        month: "MAY", 
        title: "Ctrl +Create",
        subTitle: "A 30 day game development challenge where you create games and compete with each other.",
        description1: "A 30 day game development challenge where you create games and compete with each other.",
        description2: "A 30 day game development challenge where you create games and compete with each other.",
        image: ctrl
    },
    { 
        id: 10, 
        day: "09", 
        month: "MAY", 
        title: "E-Football",
        subTitle: "E-Football: A competitive E-Football tournament for gaming enthusiasts.",
        description1: "E-Football: A competitive E-Football tournament for gaming enthusiasts.",
        description2: "E-Football: A competitive E-Football tournament for gaming enthusiasts.",
        image: efootball
    },
    { 
        id: 11, 
        day: "12", 
        month: "MAY", 
        title: "Figma Workshop",
        subTitle: "A hands-on Figma workshop to learn UI/UX design basics.",
        description1: "A hands-on Figma workshop to learn UI/UX design basics.",
        description2: "A hands-on Figma workshop to learn UI/UX design basics.",
        image: figma
    },
    { 
        id: 12, 
        day: "18", 
        month: "MAY", 
        title: "Blender Workshop",
        subTitle: "A beginner-friendly Blender workshop for 3D modeling and animation.",
        description1: "A beginner-friendly Blender workshop for 3D modeling and animation.",
        description2: "A beginner-friendly Blender workshop for 3D modeling and animation.",
        image: blender
    },
    { 
        id: 13, 
        day: "21", 
        month: "MAY", 
        title: "Orientation",
        subTitle: "An orientation session for first-year students to learn our club’s activities, goals, and opportunities.",
        description1: "An orientation session for first-year students to learn our club’s activities, goals, and opportunities.",
        description2: "An orientation session for first-year students to learn our club’s activities, goals, and opportunities.",
        image: orientation
    }   
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
                        const { title, subTitle, description1, description2, day, month, id,image } = event;
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
                                    <img className={`w-[150px] lg:w-[250px] lg:px-0  ${clicked ? "h-[50%] lg:h-[90%] ml-[10px] " : "px-[5px]"} `} src={image} alt="event" />
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