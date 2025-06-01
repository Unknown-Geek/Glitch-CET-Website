import React from 'react';
import './Start.css'

function Start() {
    return (
        <div className="start-box relative min-h-[100vh] w-full flex flex-col items-center justify-center py-[40px] px-[20px] box-border overflow-hidden z-0">
            <div className="flex flex-col items-center text-center">
                
                {/* Hatchi Image */}
                <div className="z-[1] mb-[20px]">
                    <img className="w-[82px] h-[82px]" src='hachi.png' />
                </div>

                {/* Title Image */}
                <div className="z-[1] mb-[10px]">
                    <img className="text1" src='glitch_font.png' />
                </div>

                {/* Background Logo */}
                <img
                    className="bg-img absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-[25%] opacity-[0.2] brightness-[0.8] contrast-[1.0] z-0 pointer-events-none"
                    src='image.png'
                />

                {/* Description Text */}
                <div className="z-[1] text-center mb-[20px]">
                    <div>
                        <span style={{ fontFamily: 'Morton' }} className="text2 font-normal text-white leading-none my-[6px]">CET'S </span>
                        <span style={{ fontFamily: 'Morton' }} className="text2 font-normal text-[#ED246D] leading-none my-[6px]">FIRST </span>
                    </div>
                    <div>
                        <span style={{ fontFamily: 'Morton' }} className="text2 font-normal text-white leading-none my-[6px]">GAME DEV </span>
                        <span style={{ fontFamily: 'Morton' }} className="text2 font-normal text-[#ED246D] leading-none my-[6px]">CLUB </span>
                    </div>
                </div>

                {/* Arrow */}
                <div className="arrow z-[1]">
                    <img
                        className="animate-smooth-pause-drop"
                        src='ArrowComponent.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default Start;