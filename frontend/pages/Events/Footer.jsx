import React from "react";

export default function GlitchBanner() {
  const socialLinks = [
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/glitchcet?igsh=MWFoNTBnd29zdnoyeQ==' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/company/105924902' },
    { name: 'DISCORD', url: 'https://discord.gg/cpgRQ9gQTq' },
  ];

  return (

        <div className="flex md:mt-6 mt-4 mb-12 md:ml-12 flex-row md:gap-64 font-pixelify ">
            <p className="hidden md:flex" >
                2025 GLITCH CET • ALL RIGHTS RESERVED
            </p>
            <p className="hidden md:flex ml-12 ">
                THE GAME DEVELOPMENT CLUB OF CET
            </p>
            <p className="flex flex-row md:gap-6 gap-10 md:ml-10 ml-5">
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


  );
}
