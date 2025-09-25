import React from "react";
import mario from "../../public/mario.png";

function GameCard() {
    const games = ["SUPER MARIO", "SUPER MARIO", "SUPER MARIO", "SUPER MARIO", "SUPER MARIO"];
    
    // Rotations for the 5-card desktop view 
    const rotations = ["-rotate-[18deg]", "-rotate-[10deg]", "rotate-0", "rotate-[10deg]", "rotate-[18deg]"];
    const zIndexes = [10, 20, 30, 20, 10]; 
    
    // Vertical offsets for the 5-card desktop view 
    const yOffsetsDesktop = ["lg:translate-y-[100px]", "lg:translate-y-[48px]", "lg:translate-y-0", "lg:translate-y-[48px]", "lg:translate-y-[100px]"];

    const rotationsMobile = ["-rotate-9", "rotate-0", "rotate-9"];
    
    const zIndexesMobile = [20, 30, 20]; 

    const yOffsetsMobile = ["translate-y-4", "translate-y-0", "translate-y-4"];


    // Define the cards to map based on screen size 
    const mobileCards = games.slice(1, 4); 

    return (
        <div className="flex justify-center items-center mt-[30px] w-full">
            {/* Render 3 cards for mobile (default) */}
            <div className="flex justify-center items-center lg:hidden w-full">
                {mobileCards.map((game, index) => (
                    <div
                        key={index}
                        className={`
                            relative
                            ${rotationsMobile[index]}
                            ${index > 0 ? '-ml-8' : ''}
                            ${yOffsetsMobile[index]}
                            
                            w-64 h-[350px] 
                            
                            text-white 
                            rounded-3xl 
                            flex flex-col items-center justify-start
                            shadow-[0_0_25px_rgba(255,0,128,0.7)]
                            border border-white/400
                            transition-transform duration-300 hover:scale-115 
                            overflow-hidden
                            hover:text-black
                            p-4
                        `}
                        style={{
                            backgroundColor: "#ED246D",
                            zIndex: zIndexesMobile[index],
                        }}
                    >
                        {/* Mobile Text Sizes */}
                        <h1 style={{backgroundColor: "#ED246D", fontFamily: "Morton",}} className="text-[26px] lg:text-[32px] font-bold text-black text-center mt-4 z-10">
                            SUPER <br /> 
                        </h1>
                        <h1 style={{backgroundColor: "#ED246D", fontFamily: "Morton",}} className="text-[24px] lg:text-[28px] font-bold text-center z-10">
                            MARIO
                        </h1>

                        {/* Image */}
                        <img
                            style={{backgroundColor: "#ED246D"}}
                            src={mario}
                            alt="Mario"
                            className="w-full h-70 object-contain mt-2 z-0"
                        />

                        {/* Side text */}
                        <p style={{backgroundColor: "#ED246D", fontFamily: "Neopixel",}} className="absolute left-[-25px] top-[60%] -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.2em] z-10 whitespace-nowrap">
                            FANTASY ADVENTURE
                        </p>
                    </div>
                ))}
            </div>

            {/* Render 5 cards for desktop */}
            <div className="hidden lg:flex justify-center items-center w-full">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className={`
                            relative
                            ${rotations[index]}
                            ${index > 0 ? '-ml-28' : ''} 
                            ${yOffsetsDesktop[index]}
                            
                            w-85 h-[500px] 
                            
                            text-white 
                            rounded-3xl 
                            flex flex-col items-center justify-start
                            shadow-[0_0_25px_rgba(255,0,128,0.7)]
                            border border-white/400
                            transition-transform duration-300 hover:scale-115 
                            overflow-hidden
                            hover:text-black
                            p-4
                        `}
                        style={{
                            backgroundColor: "#ED246D",
                            zIndex: zIndexes[index], // Desktop z-index
                        }}
                    >
                        {/* Desktop Text Sizes */}
                        <h1 style={{backgroundColor: "#ED246D", fontFamily: "Morton",}} className="text-[40px] font-bold text-black text-center mt-4 z-10">
                            SUPER <br /> 
                        </h1>
                        <h1 style={{backgroundColor: "#ED246D", fontFamily: "Morton",}} className="text-[36px] font-bold text-center z-10">
                            MARIO
                        </h1>

                        {/* Image */}
                        <img
                            style={{backgroundColor: "#ED246D"}}
                            src={mario}
                            alt="Mario"
                            className="w-full h-70 object-contain mt-4 z-0"
                        />

                        {/* Side text */}
                        <p style={{backgroundColor: "#ED246D", fontFamily: "Neopixel",}} className="absolute left-[-35px] top-[60%] -translate-y-1/2 -rotate-90 text-xs tracking-[0.2em] z-10 whitespace-nowrap">
                            FANTASY ADVENTURE
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameCard;