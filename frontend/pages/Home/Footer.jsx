import React from "react";
import image from "../../public/glitch.png"

export default function GlitchBanner() {
  const socialLinks = [
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/glitchcet?igsh=MWFoNTBnd29zdnoyeQ==' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/company/105924902' },
    { name: 'DISCORD', url: 'https://discord.gg/cpgRQ9gQTq' },
  ];

  return (
    <div className=" flex-col gap-2 mx-auto md:ml-10 ">
        <div className="md:mt-12 mt-4  md:ml-12 flex flex-row md:gap-64 font-pixelify md:px-34 ">
            <p className="hidden md:flex" >
                2025 GLITCH CET • ALL RIGHTS RESERVED
            </p>
            <p className="hidden md:flex ml-12 ">
                THE GAME DEVELOPMENT CLUB OF CET
            </p>
            <p className="flex flex-row md:gap-6 gap-10 md:ml-10 ml-5 md:mb-0 mb-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer transition-colors duration-300 hover:text-[#ED246D]"
                  >
                    □  {social.name}
                  </a>
                ))}
            </p>
        </div>
        <img className="md:w-[1480px] md:h-[220px] mx-auto mb-10 " alt="Glitch Logo"
        src={image}
        />
    </div>
  );
}
