import React from 'react';
import './animations.css';
import yellow from '../../public/yellow_arrow.png';
import line from '../../public/Line 6.png';

const socials = [
  { src: '/email.png', hover: 'glitchclubcet@gmail.com', alt: 'Email',link:'glitchclubcet@gmail.com' },
  { src: '/linkedin.png', hover: 'glitchcet', alt: 'LinkedIn',link:'https://www.linkedin.com/company/105924902' },
  { src: '/discord.png', hover: 'discord.gg/opgRQ9gQTq', alt: 'Discord',link:'https://discord.gg/cpgRQ9gQTq' },
  { src: '/instagram.png', hover: 'glitchcet', alt: 'Instagram',link:'https://www.instagram.com/glitchcet?igsh=MWFoNTBnd29zdnoyeQ==' },
];

function Contacts() {
  return (
    <div className="w-full px-4 ">
      {/* Top logo/image */}
      <div className="reveal-container mx-auto mt-5 flex justify-center">
        <img
          src="/bg-image.png"
          alt="Revealing"
          className="reveal-image w-12 h-12 md:w-32 md:h-32"
        />
      </div>

      {/* Social Links */}
      <div className="flex flex-col md:gap-2 gap-16 mt-10 items-center ">
        {socials.map(({ src, alt, hover,link }) => (
          <div
  key={alt}
  className="cursor-pointer w-full max-w-[1000px] flex flex-col items-center"
  onClick={() => window.open(link, '_blank')}
>
  <div className="group flex flex-row items-center justify-between gap-4 md:gap-12 w-full">
    {/* Icon */}
    <img
      src={src}
      alt={alt}
      className="hover-slide-disappear-up  md:w-[471px] w-[300px] md:h-16 h-8"
    />

    {/* Arrow and hover content */}
    <div className="relative group cursor-pointer">
      <img
        src="/arrow_slant.png"
        alt="Arrow"
        className="w-10 h-10 md:w-12 md:h-12 hover:opacity-0"
      />
      <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4 md:gap-6">
        <p className="text-amber-100 text-xs md:text-sm font-pixelify whitespace-nowrap">
          {hover}
        </p>
        <img src={yellow} alt="Extra" className="w-16 h-16 md:w-14 md:h-14" />
      </div>
    </div>
  </div>

<div className="pink-line" />

</div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
