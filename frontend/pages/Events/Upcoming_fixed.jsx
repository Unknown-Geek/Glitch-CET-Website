import ScrollingText from "../Home/ScrollingText"

export default function Upcoming() {
    // Event data array
    const events = [
        {
            id: 1,
            day: "28",
            month: "JUN",
            time: "4:00 PM",
            title: "WIX\nWORKSHOP"
        },
        {
            id: 2,
            day: "02",
            month: "JUL",
            time: "6:00 PM",
            title: "REACT\nBOOTCAMP"
        },
        {
            id: 3,
            day: "15",
            month: "JUL",
            time: "3:00 PM",
            title: "UI/UX\nMASTERCLASS"
        },
        {
            id: 4,
            day: "20",
            month: "JUL",
            time: "5:00 PM",
            title: "PYTHON\nBASICS"
        }
    ];

    // Duplicate events for seamless infinite scroll
    const duplicatedEvents = [...events, ...events];
    
    return (
        <div>
            <div className="relative p-5 h-screen flex items-center justify-center bg-[#0B0C1B]">
                {/* Background Image with Blend Mode */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/bgevents.svg')",
                        mixBlendMode: "overlay",
                        opacity: 0.4,
                        filter: "brightness(0.7) contrast(0.8)"
                    }}
                ></div>
                
                {/* Content */}
                <div className="text-center space-y-7 z-10">
                    <img className="w-xl md:w-2xl mx-auto" src='glitch_font.png' />
                    <h1 className="text-5xl md:text-8xl text-[#ED246D]" style={{ fontFamily: "Morton" }}>
                        EVENTS
                    </h1>
                </div>
            </div>
            
            <ScrollingText text="EVENTS" />
            
            <div className="min-h-screen bg-[#0B0C1B] p-6 sm:p-9">
                <h1
                    className="text-3xl md:text-5xl font-normal mb-8 md:mb-12"
                    style={{ fontFamily: "Morton" }}
                >
                    <span className="text-[#ED246D]">//</span>UPCOMING{" "}
                    <span className="text-[#ED246D]">EVENTS</span>
                </h1>
                
                {/* Infinite Scrolling Cards Container */}
                <div className="overflow-hidden">
                    <style jsx>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .infinite-scroll {
                            animation: scroll 20s linear infinite;
                        }
                        .infinite-scroll:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    
                    <div className="flex infinite-scroll gap-6 md:gap-8 w-max">
                        {duplicatedEvents.map((event, index) => (
                            <div 
                                key={`${event.id}-${index}`} 
                                className="rounded-2xl p-6 text-white relative w-80 flex-shrink-0 flex flex-col"
                                style={{ 
                                    backgroundColor: '#F92672',
                                    border: '2px solid #F92672',
                                    minHeight: '400px'
                                }}
                            >
                                {/* Header with date and lightning */}
                                <div className="flex justify-between items-start mb-4 bg-[#F92672]">
                                    <div>
                                        <div className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Morton" }}>{event.day}</div>
                                        <div className="text-lg" style={{ fontFamily: "Morton" }}>{event.month}</div>
                                        <div className="text-sm opacity-80">{event.time}</div>
                                    </div>
                                    <div className="text-2xl">⚡</div>
                                </div>
                                
                                {/* Hachi Image - Centered and contained */}
                                <div className="flex justify-center mb-4">
                                    <img 
                                        src="/hachi3d.png" 
                                        alt="Hachi Mascot" 
                                        className="w-32 h-32 md:w-40 md:h-40 object-contain"
                                    />
                                </div>
                                
                                {/* Event Details - Fixed at bottom */}
                                <div className="text-center">
                                    <div className="text-xs opacity-80 mb-2">= UPCOMING EVENT</div>
                                    <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: "Morton" }}>
                                        {event.title.split('\n').map((line, lineIndex) => (
                                            <div key={lineIndex}>{line}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
