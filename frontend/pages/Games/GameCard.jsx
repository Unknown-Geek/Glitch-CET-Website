import React from "react";
import mario from "../../public/mario.png";

function GameCard() {
    const games = ["SUPER MARIO", "SUPER MARIO", "SUPER MARIO", "SUPER MARIO", "SUPER MARIO"];
    const rotations = ["-rotate-[18deg]", "-rotate-[10deg]", "rotate-0", "rotate-[10deg]", "rotate-[18deg]"];
    const zIndexes = [10, 20, 30, 20, 10]; 
    
    const yOffsets = ["translate-y-25", "translate-y-12", "translate-y-0", "translate-y-12", "translate-y-25"];

    return (
        <div className="flex justify-center items-center mt-[30px] w-full ">
            {games.map((game, index) => (
                <div
                    key={index}
                    className={`
                        relative
                        ${rotations[index]}
                        ${index > 0 ? '-ml-28' : ''} 
                        ${yOffsets[index]} 
                        text-white 
                        rounded-3xl 
                        w-85 h-[500px] 
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
                        zIndex: zIndexes[index],
                    }}
                >
                    {/* Title */}
                    <h1 style={{backgroundColor: "#ED246D", fontFamily: "Morton",}} className="text-[40px] font-bold text-black text-center mt-4 z-10">
                        SUPER <br /> 
                    </h1>
                    <h1 style={{backgroundColor: "#ED246D", fontFamily: "Morton",}} className="text-[36px] font-bold  text-center z-10">
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
    );
}

export default GameCard;