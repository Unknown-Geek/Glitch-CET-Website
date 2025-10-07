import React from "react";
import image from "../../public/glitch.png"

export default function GlitchBanner() {
  return (

        <div className="flex md:mt-6 mt-4 mb-12 md:ml-12 flex-row md:gap-64 font-pixelify ">
            <p className="hidden md:flex" >
                2025 GLITCH CET • ALL RIGHTS RESERVED
            </p>
            <p className="hidden md:flex ml-12 ">
                THE GAME DEVELOPMENT CLUB OF CET
            </p>
            <p className="flex flex-row md:gap-6 gap-10 md:ml-10 ml-5">
                <span>□  INSTAGRAM</span>
                <span>□  LINKEDIN</span>
                <span>□  Discord</span>
            </p>
        </div>


  );
}
