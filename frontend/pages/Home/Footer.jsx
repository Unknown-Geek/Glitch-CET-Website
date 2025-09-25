import React from "react";
import image from "../../public/glitch.png"

export default function GlitchBanner() {
  return (
    <div className="hidden md:flex flex-col gap-2 ml-6 mr-6 ">
        <div className="mt-12  ml-12 flex flex-row gap-64 font-pixelify ">
            <p >
                2025 GLITCH CET • ALL RIGHTS RESERVED
            </p>
            <p className="ml-12">
                THE GAME DEVELOPMENT CLUB OF CET
            </p>
            <p className="flex flex-row gap-6 ml-10">
                <span>□  INSTAGRAM</span>
                <span>□  LINKEDIN</span>
                <span>□  Discord</span>
            </p>
        </div>
        <img className="w-[1480px] h-[220px] ml-12 mb-10 " alt="Glitch Logo"
        src={image}
        />
    </div>
  );
}
