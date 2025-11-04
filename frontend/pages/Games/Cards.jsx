import React, { useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'
import bortal from '../../assets/Bortal.mp4'
//import video5 from '../../assets/video5.mp4'
import button from '../../public/button.png';
import square from '../../public/Squares.png';

const cardsData = [
  // Place WINNERS first
  {
    video: bortal,
    button: button,
    square: square,
    text:
      "A puzzle platformer with bubbles as portals.Find the exit flag to finish the game.Made in Global Game Jam Kerala in 48hrs by Janbaas,Hani,Anthony and Govardhan .",
    number: "(05)",
        award: "GAME JAM KERALA — Winners",
    creators:
      "JANBAAS (CS 27), HANI (CS 27), ANTHONY , GOVARDHAN ",
  },

  {
    video: video2,
    button: button,
    square: square,
    text:
      "Introducing Palli-Pult: Once upon a time, in a faraway college canteen, a peculiar palli tumbled into a pot of sambar. The result? Six days of holidays and one epic strike! Inspired by this legendary mishap, we present Palli-Pult. Your goal: launch pallis into sambar and other objects to score 15 points within the time limit. Only then can you unlock even more holidays!",
    number: "(02)",
     award: "Ctrl+ Create — Winners",
    creators:
      "AKHIL KRISHNA A PILLAI (EL 28), AMRITA REJI (EL 28), ASIYA BADUSHA KHAN S (EL 28)",
  },
    {
    video: video1,
    button: button,
    square: square,
    text:
      "A 2D top-down puzzle-adventure game where you are a student trapped inside a corrupted reality. Navigate the glitched simulation of your college, solve puzzles using a command-line interface, and reboot the system before you're deleted, forever.",
    number: "(01)",
      award: "Ctrl+ Create — Runner Up",
    creators: "Rohan Kishore (EL 29)",
  },
  {
    video: video3,
    button: button,
    square: square,
    text:
      "A horror survival game where reality slowly twists and once-normal things become disturbing anomalies. These transformed creatures chase you relentlessly through dark, unpredictable environments. Your only goal is to survive long enough to escape before the world completely breaks.",
    number: "(03)",
    award: "Ctrl+ Create — 2nd Runner Up",
    creators: "Johan Antony Davis (CSE 27)",
  },
  {
    video: video4,
    button: button,
    square: square,
    text:
      "Explore a dark dungeon as a lone hero in this top-down, pixel-art adventure game. You'll need to navigate dimly lit corridors, solve puzzles, and avoid danger as you attempt to escape the confines of the mysterious maze.",
    number: "(04)",
    award: "Ctrl+ Create — Honourable Mention",
    creators: "Saad Abdul Latheef (ECE 28)",
  },

  //{ video: video5, button: button, square: square, text: "2d platformer based on bubble teleportation", number: "(05)" },
];

function VideoCard({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement?.play();
          } else {
            videoElement?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className='w-full max-w-[280px] md:max-w-[400px] mx-auto mb-3 md:mb-6 rounded-lg'
      src={video}
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}


function Featured() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoPlayer = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-black overflow-x-hidden">
      <div className="p-4 md:p-10 mx-auto 0">
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
          md:mt-20
            flex gap-3 max-w-screen md:gap-6 overflow-x-scroll sm:grid sm:grid-cols-2 lg:grid-cols-3
            md:ml-5 pb-4 -ml-4 pl-4 md:pl-0 md:space-y-8
          "
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
        {cardsData.map((card, idx) => (
          <div
            key={idx}
            className="
              min-w-[280px] max-w-[320px] sm:min-w-0 sm:max-w-[480px]
              w-[280px] sm:w-full h-[420px] md:h-[620px] border border-white shrink-0
              flex flex-col bg-black
            "
          >
            <div className="pt-4 md:pt-6 px-3 md:px-6 flex flex-col h-full relative pb-8">
              {card.video ? (
                <VideoCard video={card.video} />
              ) : (
                <img 
                  className='w-full max-w-[280px] md:max-w-[400px] mx-auto mb-3 md:mb-6' 
                  src={card.image} 
                  alt={`Card ${idx + 1}`} 
                />
              )}
              
              <p className="font-pixelify text-white uppercase text-xs md:text-sm leading-relaxed mb-2 md:mb-4 text-left overflow-y-auto">
                {card.text}
              </p>

              {(card.award || card.creators) && (
                <div className="mb-4 md:mb-6 text-left">
                  {card.award && (
                    <p className="font-pixelify text-[#ED246D] uppercase text-[10px] md:text-xs leading-snug">
                      {card.award}
                    </p>
                  )}
                  {card.creators && (
                    <p className="font-pixelify text-white/80 uppercase text-[10px] md:text-xs leading-snug">
                      {card.creators}
                    </p>
                  )}
                </div>
              )}
              
              <div className='flex flex-row justify-between items-center mt-auto mb-2 md:mb-4 relative z-10'>
                <p className="font-pixelify text-white text-sm md:text-base">
                  {card.number}
                </p>
                <button
                  onClick={() => card.video && openVideoPlayer(card.video)}
                  style={{ backgroundColor: '#F92672' }}
                  className="font-pixelify px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded text-black hover:text-white transition-colors duration-200"
                >
                  CHECK IT OUT
                </button>
              </div>
              
              <img
                className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-3 h-3 md:w-6 md:h-6 z-0"
                src={card.square}
                alt={`Square ${idx + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={closeVideoPlayer}
              className="absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-lg border-2 border-[#ED246D] bg-[#1A1A2E] hover:bg-[#ED246D] transition-all duration-300 text-white"
              aria-label="Close video player"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Player */}
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl border-2 border-[#ED246D]"
              controlsList="nodownload"
            />
          </div>
        </div>
      )}
    </div>
  );
}


export default Featured;
