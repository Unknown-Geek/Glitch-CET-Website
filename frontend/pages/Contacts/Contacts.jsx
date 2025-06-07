import React from 'react';
import './animations.css';
import yellow from '../../public/yellow_arrow.png'; // Adjust the path as necessary
import line from '../../public/Line 6.png'; // Adjust the path as necessary

const socials = [
  { src: '/email.png', hover: 'glitchclubcet@gmail.com', alt: 'Email', width: 470, height: 81 },
  { src: '/linkedin.png', hover: 'glitchcet', alt: 'LinkedIn', width: 470, height: 81 },
  { src: '/discord.png', hover: 'discord.gg/opgRQ9gQTq', alt: 'Discord', width: 470, height: 81 },
  { src: '/instagram.png', hover: 'glitchcet', alt: 'Instagram', width: 470, height: 81 },
];

function Contacts() {
  return (
    <div>
      <div className="reveal-container mx-auto mt-5">
        <img src="/bg-image.png" alt="Revealing" className="reveal-image w-32 h-32" />
      </div>

      <div className="flex flex-col gap-10 mt-10 items-center">
{socials.map(({ src, alt, width, height, hover }) => (
  <div
    key={alt}
    className="cursor-pointer"
    onClick={() => window.open('https://example.com', '_blank')}
  >
    {/* Social icon + arrow row */}
    <div className="group flex items-center gap-72 relative">
      {/* First image with hover animation */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="hover-slide-disappear-up"
      />

      {/* Arrow and hover reveal content */}
      <div className="relative group cursor-pointer inline-block">
        <img
          src="/arrow_slant.png"
          alt="Arrow"
          className="w-full h-full object-contain hover:opacity-0"
        />
        <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-10">
          <p className="text-amber-100 text-sm whitespace-nowrap font-pixelify">{hover}</p>
          <img src={yellow} alt="Extra" className="w-24 h-24" />
        </div>
      </div>
    </div>

    {/* Line below each row */}
    <div className="h-[1px] bg-pink-500  w-[calc(470px+72px+96px)]" />
  </div>
))}

      </div>
    </div>
  );
}

export default Contacts;
