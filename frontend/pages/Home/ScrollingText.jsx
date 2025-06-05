import React, { useState, useEffect, useRef } from 'react'

function ScrollingText({ text }) {
    const [direction, setDirection] = useState('right');
    const lastScrollDirection = useRef(null);
    const touchStartY = useRef(null);
    useEffect(() => {
        const handleScroll = (e) => {
            const currentDirection = e.deltaY > 0 ? 'down':'up';

            if (lastScrollDirection.current && lastScrollDirection.current !== currentDirection) {
                setDirection((prev) => (prev === 'left' ? 'right':'left'));
            }
            lastScrollDirection.current = currentDirection;
        };

        const handleTouchStart = (e) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e) => {
            const currentY = e.touches[0].clientY;
            const deltaY = touchStartY.current - currentY;
            handleScroll({deltaY});
        };

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div className="overflow-hidden border-t-7 border-b-7 border-[#D4D29C] h-[130px] sm:h-[150px] md:h-[180px] lg:h-[225px] flex items-center">
            <style>
                {`
            @keyframes scroll-right {
            0%{transform: translateX(-30%);}
            100%{transform: translateX(0);}
            }
            @keyframes scroll-left {
            0%{transform: translateX(0);}
            100%{transform: translateX(-30%);}
            }
            .scroll-right{
                animation: scroll-right 20s linear infinite;
            }
            .scroll-left{
                animation: scroll-left 20s linear infinite;
            }
        `}
            </style>
            <div className={`flex w-fit ${direction === 'right' ? 'scroll-right' : 'scroll-left'}`}>
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span style={{ fontFamily: "Morton", color: "transparent", WebkitTextStroke: "1px white", }} className='py-[10px] text-[65px] sm:text-[100px] md:text-[130px] lg:text-[200px]'>
                            {text}.
                        </span>
                        <span style={{ fontFamily: "Morton" }} className='text-white mx-[25px] py-[10px] text-[65px] sm:text-[100px] md:text-[130px] lg:text-[200px] '>
                            {text}.
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default ScrollingText
