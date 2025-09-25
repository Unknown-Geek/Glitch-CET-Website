import React, { useState, useEffect } from "react";
import mario from "../../public/mario.png";
import arrow from "../../public/arrow.png";

const ALL_GAMES = [
    "SUPER MARIO 1",
    "SUPER MARIO 2",
    "SUPER MARIO 3",
    "SUPER MARIO 4",
    "SUPER MARIO 5",
    "SUPER MARIO 6",
];

// Desktop (5 cards)
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

// Mobile (3 cards)
const MOBILE_ROTATIONS = ["-rotate-9", "rotate-0", "rotate-9"];
const MOBILE_Z_INDEXES = [20, 30, 20];
const MOBILE_Y_OFFSETS = ["translate-y-4", "translate-y-0", "translate-y-4"];

function GameCard() {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobileLayout, setIsMobileLayout] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobileLayout(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cardsToShow = isMobileLayout ? 3 : 5;

    const shuffleCards = () => {
        // Reverse direction: move right instead of left (shifting card 5 to position 1)
        setStartIndex((prevIndex) => (prevIndex - 1 + ALL_GAMES.length) % ALL_GAMES.length);
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
        <div className="flex justify-center items-center mt-[30px] w-full">
            {cardsToRender.map((card, index) => {
                // Split text
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
              ${index > 0 ? (isMobileLayout ? "-ml-8" : "-ml-28") : ""}
              ${isMobileLayout ? card.yOffsetMobile : ""}
              ${card.yOffsetDesktop}
              ${isMobileLayout ? "w-64 h-[350px]" : "w-85 h-[500px]"}
              
              rounded-3xl
              flex flex-col items-center justify-start
              shadow-[0_0_25px_rgba(255,0,128,0.7)]
              border border-white/400
              transition-all duration-500 ease-in-out
              overflow-hidden
              p-4
            `}
                        style={{
                            backgroundColor: "#ED246D",
                            zIndex: isMobileLayout ? card.zIndexMobile : card.zIndex,
                        }}
                    >
                        {/* SUPER (black) */}
                        <h1
                            style={{ backgroundColor: "#ED246D", fontFamily: "Morton" }}
                            className={`font-bold text-black text-center mt-4 z-10 ${isMobileLayout ? "text-[26px]" : "text-[40px]"
                                }`}
                        >
                            {superText}
                        </h1>

                        {/* MARIO (white) + Number */}
                        <h1
                            style={{ backgroundColor: "#ED246D", fontFamily: "Morton" }}
                            className={`font-bold text-white text-center z-10 ${isMobileLayout ? "text-[24px]" : "text-[36px]"
                                }`}
                        >
                            {marioText} {number}
                        </h1>

                        {/* Mario image */}
                        <img
                            style={{ backgroundColor: "#ED246D" }}
                            src={mario}
                            alt="Mario"
                            className={`w-full h-70 object-contain z-0 ${isMobileLayout ? "mt-2" : "mt-4"
                                }`}
                        />

                        {/* Side text (desktop only) */}
                        {!isMobileLayout && (
                            <p
                                style={{ backgroundColor: "#ED246D", fontFamily: "Neopixel" }}
                                className="absolute left-[-35px] top-[60%] -translate-y-1/2 -rotate-90 text-xs tracking-[0.2em] z-10 whitespace-nowrap"
                            >
                                FANTASY ADVENTURE
                            </p>
                        )}

                        <button
                            onClick={shuffleCards}
                            className="absolute left-[270px] top-[45%] cursor-pointer -translate-y-1/2 -rotate-90 z-10"
                        >
                            <img
                                style={{ backgroundColor: "#ED246D" }}
                                src={arrow}
                                alt="arrow"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default GameCard;