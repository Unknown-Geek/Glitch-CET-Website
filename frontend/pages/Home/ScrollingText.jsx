import React from 'react'

function ScrollingText({text}) {
    return (
        <div className="overflow-hidden border-t-7 border-b-7 border-[#D4D29C] h-[130px] sm:h-[150px] md:h-[180px] lg:h-[225px] flex items-center">
            <style>
        {`
          @keyframes scroll-right {
            0% { transform: translateX(-30%); }
            100% { transform: translateX(0); }
          }
          .scroll-animation {
          display:inline-flex;        
          animation: scroll-right 20s linear infinite;
          }
        `}
            </style>
            <div className="flex scroll-animation w-fit">
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
