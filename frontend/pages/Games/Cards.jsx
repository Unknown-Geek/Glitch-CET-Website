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
    <div className="bg-black p-5 max-w-[1600px] mx-auto">
      <img className="pb-5 pt-5 md:ml-5" src={games} alt="Featured" />

      {/* Wrapper for scrolling on mobile */}
      <div
        className="
          flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3
          md:ml-5
        "
      >
        {cardsData.map(({ image, button, square, text, number }, idx) => (
          <div
            key={idx}
            className="
              min-w-[300px] sm:min-w-0
              w-full max-w-[480.49px] h-[480px] border border-white shrink-0
            "
          >
            <div className="pt-8 flex flex-col items-center justify-start h-full relative">
              <img src={image} alt={`Card image ${idx + 1}`} />
              
              <p className="pr-12 pl-13 pb-5 font-pixelify text-white uppercase">
                {text}
              </p>
              <div className='flex flex-row md:gap-42 gap-12 mt-8'>
              <p className="md:mt-6 mt-8 pt-5 font-pixelify text-white">
                {number}
              </p>
              <button
                style={{ backgroundColor: '#F92672' }}
                className="ml-12 mt-12 md:mr-12 mr-2 self-start font-pixelify w-28 h-8 rounded bg-hotPink text-black hover:text-white"
              >
                CHECK IT OUT
              </button>
              </div>
              <img
                className="absolute right-15 top-3/4 transform -translate-y-1/2"
                src={square}
                alt={`Square ${idx + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Featured;
