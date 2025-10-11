import React, { useState, useEffect } from "react";
import mario from "../../public/mario.png";
import arrow2 from "../../public/ArrowComponent.png";

const ALL_GAMES = [
    "SUPER MARIO 1",
    "SUPER MARIO 2",
    "SUPER MARIO 3",
    "SUPER MARIO 4",
    "SUPER MARIO 5",
    "SUPER MARIO 6",
];

const ALL_ROTATIONS = [
    "-rotate-[18deg]",
    "-rotate-[10deg]",
    "rotate-0",
    "rotate-[10deg]",
    "rotate-[18deg]",
];
const ALL_Z_INDEXES = [10, 20, 30, 20, 10];
const ALL_Y_OFFSETS_DESKTOP = [
    "lg:translate-y-[100px]",
    "lg:translate-y-[48px]",
    "lg:translate-y-0",
    "lg:translate-y-[48px]",
    "lg:translate-y-[100px]",
];

const MOBILE_ROTATIONS = ["-rotate-3", "rotate-3"];
const MOBILE_Z_INDEXES = [20, 20];
const MOBILE_Y_OFFSETS = ["translate-y-2", "translate-y-2"];

function GameCard() {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobileLayout, setIsMobileLayout] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobileLayout(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cardsToShow = isMobileLayout ? 2 : 5;

    const shuffleCardsRight = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + ALL_GAMES.length) % ALL_GAMES.length);
    };

    const shuffleCardsLeft = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % ALL_GAMES.length);
    };

    const cardsToRender = Array(cardsToShow)
        .fill(null)
        .map((_, index) => {
            const globalIndex = (startIndex + index) % ALL_GAMES.length;
            return {
                game: ALL_GAMES[globalIndex],
                key: globalIndex,
                rotation: ALL_ROTATIONS[index],
                zIndex: ALL_Z_INDEXES[index],
                yOffsetDesktop: ALL_Y_OFFSETS_DESKTOP[index],
                rotationMobile: MOBILE_ROTATIONS[index],
                zIndexMobile: MOBILE_Z_INDEXES[index],
                yOffsetMobile: MOBILE_Y_OFFSETS[index],
            };
        });

    return (
        
        <div className="flex flex-col justify-center items-center mt-[20px] w-full overflow-hidden">
            {/* Featured Games Title */}
            <h1 
                className="mt-4 md:mt-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-8 md:mb-12"
                style={{ fontFamily: "Morton" }}
            >
                FEATURED GAMES
            </h1>

            {/* Mobile Arrows */}
            {isMobileLayout && (
                <div className="flex justify-center gap-4 mb-4">
                    <button
                        onClick={shuffleCardsLeft}
                        className="cursor-pointer -rotate-180 w-9 h-9 flex items-center justify-center rounded-md 
                        border-2 border-[#8B3B6D] bg-[#1A1A2E] hover:bg-[#8B3B6D] transition-colors duration-300"
                    >
                        <img src={arrow2} alt="arrow" className="w-6 h-6 -rotate-90 object-contain" />
                    </button>

                    <button
                        onClick={shuffleCardsRight}
                        className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-md 
                        border-2 border-[#8B3B6D] bg-[#1A1A2E] hover:bg-[#8B3B6D] transition-colors duration-300"
                    >
                        <img src={arrow2} alt="arrow" className="w-6 h-6 rotate-270 object-contain" />
                    </button>
                </div>
            )}

            {/* Cards Wrapper */}
            <div className="flex justify-center items-center relative w-full max-w-[95vw]">
                {/* Left Arrow (desktop only) */}
                {!isMobileLayout && (
                    <button
                        onClick={shuffleCardsLeft}
                        className="absolute cursor-pointer -rotate-180 left-2 top-1/2 z-10 
                        w-10 h-10 flex items-center justify-center rounded-md 
                        border-2 border-[#8B3B6D] bg-[#1A1A2E] 
                        hover:bg-[#8B3B6D] hover:border transition-colors duration-300"
                    >
                        <img src={arrow2} alt="arrow" className="w-7 h-7 -rotate-90 object-contain" />
                    </button>
                )}

                {/* Cards */}
                <div className="flex justify-center items-center">
                    {cardsToRender.map((card, index) => {
                        const parts = card.game.split(" ");
                        const superText = parts[0];
                        const marioText = parts[1];
                        const number = parts[2];

                        return (
                            <div
                                key={card.key}
                                className={`
                  relative
                  ${isMobileLayout ? card.rotationMobile : card.rotation}
                  ${index > 0 ? (isMobileLayout ? "-ml-4" : "-ml-24") : ""}
                  ${isMobileLayout ? card.yOffsetMobile : card.yOffsetDesktop}
                  ${isMobileLayout ? "w-44 h-[260px]" : "w-80 h-[500px]"}
                  rounded-3xl flex flex-col items-center justify-start
                  shadow-[0_0_25px_rgba(255,0,128,0.7)]
                  border border-white/40
                  transition-all duration-500 ease-in-out
                  overflow-hidden p-4
                `}
                                style={{
                                    backgroundColor: "#ED246D",
                                    zIndex: isMobileLayout ? card.zIndexMobile : card.zIndex,
                                }}
                            >
                                <h1
                                    style={{ backgroundColor: "#ED246D", fontFamily: "Morton" }}
                                    className={`font-bold text-black text-center mt-2 z-10 ${isMobileLayout ? "text-[20px]" : "text-[40px]"
                                        }`}
                                >
                                    {superText}
                                </h1>

                                <h1
                                    style={{ backgroundColor: "#ED246D", fontFamily: "Morton" }}
                                    className={`font-bold text-white text-center z-10 ${isMobileLayout ? "text-[20px]" : "text-[36px]"
                                        }`}
                                >
                                    {marioText} {number}
                                </h1>

                                <img
                                    style={{ backgroundColor: "#ED246D" }}
                                    src={mario}
                                    alt="Mario"
                                    className={`w-full h-60 object-contain z-0 ${isMobileLayout ? "mt-1" : "mt-4"
                                        }`}
                                />

                                {!isMobileLayout && (
                                    <p
                                        style={{ backgroundColor: "#ED246D", fontFamily: "Neopixel" }}
                                        className="absolute left-[-35px] top-[60%] -translate-y-1/2 -rotate-90 text-xs tracking-[0.2em] z-10 whitespace-nowrap"
                                    >
                                        FANTASY ADVENTURE
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow (desktop only) */}
                {!isMobileLayout && (
                    <button
                        onClick={shuffleCardsRight}
                        className="absolute cursor-pointer right-2 top-1/2 -rotate-180 z-10 
                        w-10 h-10 flex items-center justify-center rounded-md 
                        border-2 border-[#8B3B6D] bg-[#1A1A2E] 
                        hover:bg-[#8B3B6D] hover:border transition-colors duration-300"
                    >
                        <img src={arrow2} alt="arrow" className="w-7 h-7 rotate-90 object-contain" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default GameCard;
