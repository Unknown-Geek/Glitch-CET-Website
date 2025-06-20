import ScrollingText from "../Home/ScrollingText"
import "./ScrollingCards.css"
import { useState } from "react"

export default function Upcoming() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [activeCardIndex, setActiveCardIndex] = useState(null);

    const events = [
        { id: 1, day: "28", month: "JUN", time: "4:00 PM", title: "WIX WORKSHOP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." },
        { id: 2, day: "02", month: "JUL", time: "6:00 PM", title: "REACT BOOTCAMP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." },
        { id: 3, day: "15", month: "JUL", time: "3:00 PM", title: "UI/UX MASTERCLASS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." },
        { id: 4, day: "20", month: "JUL", time: "5:00 PM", title: "PYTHON BASICS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id aliquam velit. Ut sit amet auctor sem. Nullam ac tincidunt tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dolor erat, ornare non scelerisque neo, hendrerit a ligula." }
    ];

    const duplicatedEvents = [...events, ...events];

    const handleCardClick = (event, cardIndex) => {
        setSelectedEvent(event);
        setActiveCardIndex(cardIndex);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setSelectedEvent(null);
        setActiveCardIndex(null);
    };

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
                        filter: "brightness(0.7) contrast(0.8)"
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

                <div className="overflow-hidden">
                    <div className="flex scroll-container gap-6 md:gap-8 w-max">
                        {duplicatedEvents.map((event, index) => (
                            <div 
                                key={`event-${event.id}-${index}`}
                                className={`event-card w-[546px] h-[648px] rounded-2xl p-8 flex flex-col overflow-hidden border-2 border-[#FAFAFA] relative ${activeCardIndex === index ? 'blurred' : ''}`}
                                style={{ 
                                    background: 'linear-gradient(135deg, #F92672 0%, #E91E63 50%, #C2185B 100%)',
                                    backgroundColor: '#F92672',
                                    backgroundImage: 'linear-gradient(135deg, #F92672 0%, #E91E63 50%, #C2185B 100%)'
                                }}
                                onClick={() => handleCardClick(events.find(e => e.id === event.id), index)}
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
                                    <div className="transform rotate-180">
                                        <img 
                                            src="/Arrow.svg" 
                                            alt="Arrow" 
                                            className="w-8 h-8"
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
                                {activeCardIndex === index && selectedEvent && (
                                    <div className={`card-overlay ${showOverlay ? 'show' : ''}`}>
                                        <button className="close-overlay" onClick={(e) => {
                                            e.stopPropagation();
                                            closeOverlay();
                                        }}>
                                            ×
                                        </button>
                                        
                                        <div className="flex items-center mb-4">
                                            <div className="text-left mr-6">
                                                <div 
                                                    className="text-4xl font-bold leading-none mb-1 text-white" 
                                                    style={{ fontFamily: "Morton" }}
                                                >
                                                    {selectedEvent.day}
                                                </div>
                                                <div 
                                                    className="text-2xl font-medium leading-none mb-1 text-white" 
                                                    style={{ fontFamily: "Morton" }}
                                                >
                                                    {selectedEvent.month}
                                                </div>
                                                <div className="text-sm text-[#F92672]" style={{ fontFamily: "Morton" }}>
                                                    {selectedEvent.time}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h2 
                                                    className="text-2xl font-bold mb-2" 
                                                    style={{ fontFamily: "Morton" }}
                                                >
                                                    {selectedEvent.title.split(' ').map((word, wordIndex) => (
                                                        <span key={wordIndex} className={wordIndex === 0 ? "text-[#F92672]" : "text-white"}>
                                                            {word}{wordIndex < selectedEvent.title.split(' ').length - 1 ? ' ' : ''}
                                                        </span>
                                                    ))}
                                                </h2>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <div 
                                                className="text-xs opacity-80 mb-2 uppercase tracking-wide text-white font-neopixel" 
                                                style={{ fontFamily: "Neopixel" }}
                                            >
                                                = EVENT DESCRIPTION
                                            </div>
                                            <p className="text-white text-sm leading-relaxed">
                                                {selectedEvent.description}
                                            </p>
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

