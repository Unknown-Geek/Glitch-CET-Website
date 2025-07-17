import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ScrollingText from "../Home/ScrollingText";
import "./ScrollingCards.css";

export default function Upcoming() {
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
                        mixBlendMode: "screen",
                        opacity: 0.4,
                        // filter: "contrast(0.8)"
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

            <div className="min-h-screen bg-[#0B0C1B] py-6 px-2 md:p-9 relative">
                <h1
                    className="text-xl md:text-5xl font-normal mb-8 md:mb-12 text-white"
                    style={{ fontFamily: "Morton" }}
                >
                    <span className="text-[#ED246D]">//</span>UPCOMING{" "}
                    <span className="text-[#ED246D]">EVENTS</span>
                </h1>

                <div className="overflow-x-clip relative">
                    {/* Background dulling overlay */}
                    <AnimatePresence>
                        {hoveredCardIndex !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black z-20 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    <div className="flex scroll-container gap-4 md:gap-6 w-max relative z-30">
                        {duplicatedEvents.map((event, index) => (
                            <div
                                key={`event-${event.id}-${index}`}
                                className="event-card rounded-2xl p-6 sm:p-9 flex flex-col border-2 border-[#FAFAFA] relative"
                                style={{
                                    width: isMobile ? "80vw" : "516px",
                                    height: isMobile ? "80%" : "638px",
                                    background: 'linear-gradient(135deg, #F92672 0%, #E91E63 50%, #C2185B 100%)',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={() => {
                                    if (!isMobile) setHoveredCardIndex(index);
                                }}
                                onMouseLeave={() => {
                                    if (!isMobile) setHoveredCardIndex(null);
                                }}
                                onClick={() => {
                                    if (isMobile) {
                                        setHoveredCardIndex(prev => prev === index ? null : index);
                                    }
                                }}
                            >
                                {/* Card Header - Date and Arrow */}
                                <div className="flex justify-between items-start  ">
                                    <div className="text-left">
                                        <div
                                            className="text-5xl sm:text-6xl mb-[-10px] font-bold leading-none text-white"
                                            style={{ fontFamily: "Morton" }}
                                        >
                                            {event.day}
                                        </div>
                                        <div
                                            className="text-3xl sm:text-5xl font-medium leading-none mb-2 text-white"
                                            style={{ fontFamily: "Morton" }}
                                        >
                                            {event.month}
                                        </div>
                                        <div className="text-lg sm:text-xl text-black" style={{ fontFamily: "Morton" }}>
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
                                            className="w-10 h-10 sm:w-12 sm:h-12"
                                            style={{
                                                filter: hoveredCardIndex === index
                                                    ? 'brightness(0) saturate(100%) invert(0)'
                                                    : 'brightness(1)',
                                                transition: 'filter 0.3s ease-in-out'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Mascot Image */}
                                <div className="flex justify-center items-center ">
                                    <img
                                        src="/hachi3d.png"
                                        alt="Hachi Mascot"
                                        className="w-2xl md:mascot-image max-w-[80%] "
                                    />
                                </div>

                                {/* Event Details */}
                                <div
                                    className="text-left text-base sm:text-xl opacity-80 mb-2 uppercase tracking-wide text-white font-neopixel"
                                    style={{ fontFamily: "Neopixel" }}
                                >
                                    <span className="text-black">=</span> UPCOMING EVENT
                                </div>
                                <h3
                                    className="text-2xl sm:text-4xl font-bold leading-tight"
                                    style={{ fontFamily: "Morton" }}
                                >
                                    {event.title.split(' ').map((word, wordIndex) => (
                                        <div key={wordIndex} className={wordIndex === 0 ? "text-black" : "text-white"}>
                                            {word}
                                        </div>
                                    ))}
                                </h3>

                                {/* Card Background Dimming Effect */}
                                {hoveredCardIndex === index && (
                                    <div
                                        data-dimming="true"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            borderRadius: '1rem',
                                            zIndex: 35,
                                            pointerEvents: 'none',
                                            content: '""'
                                        }}
                                    />
                                )}

                                {/* Animated Overlay */}
                                <AnimatePresence>
                                    {hoveredCardIndex === index && (
                                        <motion.div
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                            className="border-t-4 border-[#eb0056] p-2 md:p-4"
                                            style={{
                                                position: 'absolute',
                                                bottom: '0',
                                                left: '0',
                                                right: '0',
                                                height: isMobile ? '50%' : '40%',
                                                background: 'linear-gradient(135deg, #0B0C1B 0%, #1a1b2e 100%)',
                                                borderRadius: '1rem',
                                            
                                                zIndex: '40',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <div style={{ position: 'relative', zIndex: '1' }}>
                                                <div style={{ marginBottom: '1rem' }}>
                                                    <div className="text-xs md:text-lg hidden md:block"
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
                                                    <p className="text-xs md:text-[14px] overflow-y-scroll md:overflow-auto"
                                                        style={{
                                                            fontFamily: "Neopixel",
                                                            lineHeight: '1.6',
                                                            color: 'black',
                                                            textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 0 1px 0 white, 1px 0 0 white, 0 -1px 0 white, -1px 0 0 white',
                                                             
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        {event.description.toUpperCase()}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

