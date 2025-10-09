import React from 'react';
import games from '../../public/games.png';
import image1 from '../../public/image.png';
import image2 from '../../public/image.png';
import image3 from '../../public/image.png';
import image4 from '../../public/image.png';
import image5 from '../../public/image.png';
import image6 from '../../public/image.png';
import image7 from '../../public/image.png';
import image8 from '../../public/image.png';
import image9 from '../../public/image.png';

import button from '../../public/button.png';
import square from '../../public/Squares.png';

const cardsData = [
  { image: image1, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(01)" },
  { image: image2, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(02)" },
  { image: image3, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(03)" },
  { image: image4, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(04)" },
  { image: image5, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(05)" },
  { image: image6, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(06)" },
  { image: image7, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(07)" },
  { image: image8, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(08)" },
  { image: image9, button: button, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(09)" },
];


function Featured() {
  return (
    <div className="bg-black overflow-x-hidden">
      <div className="p-4 md:p-10 mx-auto">
        <h1
          className="text-3xl md:text-6xl font-normal  mb-4 "
          style={{ fontFamily: "Morton" }}
        >
          <span className=" text-[#ED246D]">//</span>OUR{" "}
          <span className=" text-[#ED246D]">GAMES</span>
        </h1>
        {/* Wrapper for scrolling on mobile */}
        <div
          className="
            flex gap-3 max-w-screen md:gap-6 overflow-x-scroll sm:grid sm:grid-cols-2 lg:grid-cols-3
            md:ml-5 pb-4 -ml-4 pl-4 md:pl-0 
          "
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
        {cardsData.map(({ image, square, text, number }, idx) => (
          <div
            key={idx}
            className="
              min-w-[280px] max-w-[320px] sm:min-w-0 sm:max-w-[480px]
              w-[280px] sm:w-full h-[420px] md:h-[500px] border border-white shrink-0
              flex flex-col bg-black
            "
          >
            <div className="pt-4 md:pt-6 px-3 md:px-6 flex flex-col h-full relative pb-8">
              <img 
                className='w-full max-w-[280px] md:max-w-[400px] mx-auto mb-3 md:mb-6' 
                src={image} 
                alt={`Card image ${idx + 1}`} 
              />
              
              <p className="font-pixelify text-white uppercase text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-left">
                {text}
              </p>
              
              <div className='flex flex-row justify-between items-center mt-auto mb-2 md:mb-4 relative z-10'>
                <p className="font-pixelify text-white text-sm md:text-base">
                  {number}
                </p>
                <button
                  style={{ backgroundColor: '#F92672' }}
                  className="font-pixelify px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded text-black hover:text-white transition-colors duration-200"
                >
                  CHECK IT OUT
                </button>
              </div>
              
              <img
                className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-3 h-3 md:w-6 md:h-6 z-0"
                src={square}
                alt={`Square ${idx + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}


export default Featured;
