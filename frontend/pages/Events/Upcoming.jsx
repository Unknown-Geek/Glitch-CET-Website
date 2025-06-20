import ScrollingText from "../Home/ScrollingText"
import "./ScrollingCards.css"
import { useState } from "react"

export default function Upcoming() {
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

    const events = [
        { id: 1, day: "28", month: "JUN", time: "4:00 PM", title: "WIX WORKSHOP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." },
        { id: 2, day: "02", month: "JUL", time: "6:00 PM", title: "REACT BOOTCAMP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." },
        { id: 3, day: "15", month: "JUL", time: "3:00 PM", title: "UI/UX MASTERCLASS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." },
        { id: 4, day: "20", month: "JUL", time: "5:00 PM", title: "PYTHON BASICS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." }
    ];

    const duplicatedEvents = [...events, ...events];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative p-4 sm:p-6 lg:p-8 h-screen flex items-center justify-center bg-[#0B0C1B] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/bgevents.svg')",
                        mixBlendMode: "overlay",
                        opacity: 0.4,
                        filter: " contrast(0.8)"
                    }}
                ></div>
                <div className="relative text-center space-y-4 z-10 max-w-4xl mx-auto px-4">
                    <img 
                        className="w-64 sm:w-80 md:w-96 lg:w-2xl xl:w-3xl mx-auto" 
                        src="/glitch_font.png" 
                        alt="Glitch Logo"
                    />
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#ED246D]" 
                        style={{ fontFamily: "Morton" }}
                    >
                        EVENTS
                    </h1>
                </div>
            </div>

            <ScrollingText text="EVENTS" />

            <div className="min-h-screen bg-[#0B0C1B] p-6 sm:p-9">
                <h1
                    className="text-3xl md:text-5xl font-normal mb-8 md:mb-12 text-white"
                    style={{ fontFamily: "Morton" }}
                >
                    <span className="text-[#ED246D]">//</span>UPCOMING{" "}
                    <span className="text-[#ED246D]">EVENTS</span>
                </h1>

                <div className="overflow-x-clip">
                    <div className="flex scroll-container gap-6 md:gap-8 w-max">
                        {duplicatedEvents.map((event, index) => (
                            <div 
                                key={`event-${event.id}-${index}`}
                                className={`event-card w-[546px] h-[648px] rounded-2xl p-8 flex flex-col border-2 border-[#FAFAFA] relative`}
                                style={{ 
                                    background: 'linear-gradient(135deg, #F92672 0%, #E91E63 50%, #C2185B 100%)',
                                    backgroundColor: '#F92672',
                                    backgroundImage: 'linear-gradient(135deg, #F92672 0%, #E91E63 50%, #C2185B 100%)',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={() => setHoveredCardIndex(index)}
                                onMouseLeave={() => setHoveredCardIndex(null)}
                            >
                            
                                {/* Card Header - Date and Arrow */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-left">
                                        <div 
                                            className="text-7xl mb-[-10px] font-bold leading-none  text-white" 
                                            style={{ fontFamily: "Morton" }}
                                        >
                                            {event.day}
                                        </div>
                                        <div 
                                            className="text-5xl font-medium leading-none mb-2 text-white" 
                                            style={{ fontFamily: "Morton" }}
                                        >
                                            {event.month}
                                        </div>
                                        <div className=" text-xl text-black" style={{ fontFamily: "Morton" }}>
                                            {event.time}
                                        </div>
                                    </div>
                                    <div 
                                        className="transform rotate-270"
                                        style={{
                                            transform: hoveredCardIndex === index 
                                                ? 'rotate(-40deg) scale(1.15)' 
                                                : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease-in-out'
                                        }}
                                    >
                                        <img 
                                            src="/Arrow.svg" 
                                            alt="Arrow" 
                                            className="w-12 h-12"
                                            style={{
                                                filter: hoveredCardIndex === index 
                                                    ? 'brightness(0) saturate(100%) invert(0)' 
                                                    : 'brightness(1)',
                                                transition: 'filter 0.3s ease-in-out'
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Hachi Mascot Image */}
                                <div className="flex justify-center items-center mb-4">
                                    <img 
                                        src="/hachi3d.png" 
                                        alt="Hachi Mascot" 
                                        className="mascot-image"
                                    />
                                </div>
                                
                                {/* Event Details */}
                                <div className="text-left text-xl opacity-80 mb-3 uppercase tracking-wide text-white font-neopixel" style={{ fontFamily: "Neopixel" }}>
                                    <span className="text-black">=</span> UPCOMING EVENT
                                </div>
                                <h3 
                                    className="text-4xl font-bold leading-tight" 
                                    style={{ fontFamily: "Morton" }}
                                >
                                    {event.title.split(' ').map((word, wordIndex) => (
                                        <div key={wordIndex} className={wordIndex === 0 ? "text-black" : "text-white"}>
                                            {word}
                                        </div>
                                    ))}
                                </h3>

                                {/* Card Overlay - slides from bottom of this card */}
                                {hoveredCardIndex === index && (
                                    <div className="border-t-4 border-[#eb0056]  "
                                        style={{
                                            position: 'absolute',
                                            bottom: '0',
                                            left: '0',
                                            right: '0',
                                            height: '50%',
                                            background: 'linear-gradient(135deg, #0B0C1B 0%, #1a1b2e 100%)',
                                            borderRadius: '1rem 1rem 1rem 1rem',
                                            padding: '2rem',
                                            zIndex: '40',
                                            transform: 'translateY(0)',
                                            transition: 'transform 0.1s ease-out',
                                            maxHeight: '60%',
                                            overflow: 'hidden',
                                          
                                        }}
                                    >
                                        <div style={{ position: 'relative', zIndex: '1' }}>
                                            <div style={{ marginBottom: '1rem' }}>
                                                <div 
                                                    style={{ 
                                                        fontFamily: "Neopixel",
                                                        fontSize: '0.75rem',
                                                        opacity: '0.8',
                                                        marginBottom: '0.5rem',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                        color: 'white'
                                                    }}
                                                >
                                                    = EVENT DESCRIPTION
                                                </div>
                                                <p 
                                                    style={{ 
                                                        fontFamily: "Neopixel",
                                                        lineHeight: '1.6',
                                                        color: 'black',
                                                        textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 0 1px 0 white, 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white',
                                                        fontSize: '14px',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {event.description.toUpperCase()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

