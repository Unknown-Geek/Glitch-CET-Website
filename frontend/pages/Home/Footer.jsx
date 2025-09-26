import React from "react";
import image from "../../public/glitch.png"

export default function GlitchBanner() {
  return (
    <div className=" flex-col gap-2 ml-6 mr-6 ">
        <div className="md:mt-12 mt-4  md:ml-12 flex flex-row md:gap-64 font-pixelify ">
            <p className="hidden md:flex" >
                2025 GLITCH CET • ALL RIGHTS RESERVED
            </p>
            <p className="hidden md:flex ml-12 ">
                THE GAME DEVELOPMENT CLUB OF CET
            </p>
            <p className="flex flex-row md:gap-6 gap-10 md:ml-10 ml-5 md:mb-0 mb-2">
                <span>□  INSTAGRAM</span>
                <span>□  LINKEDIN</span>
                <span>□  Discord</span>
            </p>
        </div>
        <img className="md:w-[1480px] md:h-[220px] md:ml-12 mb-10 " alt="Glitch Logo"
        src={image}
        />
    </div>
  );
}
