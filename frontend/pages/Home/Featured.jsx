import React from 'react';
import featured from '../../public/Featured.png'; 
import image1 from '../../public/image.png';
import image2 from '../../public/image.png';
import image3 from '../../public/image.png';
import image4 from '../../public/image.png';
import image5 from '../../public/image.png';
import image6 from '../../public/image.png';

import square from '../../public/Squares.png';

const cardsData = [
  { image: image1, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(01)" },
  { image: image2, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(02)" },
  { image: image3, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(03)" },
  { image: image4, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(04)" },
  { image: image5, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(05)" },
  { image: image6, square: square, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam urna. Ut sit amet augue sem. Duis quis varius ante. Nullam ac accumsan tellus. ", number: "(06)" },
];

function Featured() {
  return (
    <div className="bg-black p-5 max-w-[1600px] mx-auto">
      <img className="pb-5 pt-5 md:ml-5" src={featured} alt="Featured" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:ml-5">
        {cardsData.map(({ image, button, square, text, number }, idx) => (
          <div key={idx} className="w-full max-w-[480.49px] h-[480px] border border-white">
            <div className="pt-8 flex flex-col items-center justify-start h-full relative">
              <img src={image} alt={`Card image ${idx + 1}`} />
              <p className="pr-12 pl-13 pb-5 font-pixelify text-white uppercase ">{text}</p>
              
              <button style={{ backgroundColor: '#F92672' }} className="ml-12 mt-5 self-start font-pixelify w-[145.15px] h-[38.02px] top-[291.3px] left-[2px] p-[8.01px] gap-[6.01px] rounded-[10.01px] absolute bg-hotPink text-black">
                CHECK IT OUT 
              </button>

              <p className="self-start pl-12 pt-5 font-pixelify text-white mt-10">{number}</p>
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
