import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ScrollingText from "../Home/ScrollingText";
import "./TeamCards.css";

export default function Execom() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // Array of team card images
    const teamCards = Array.from({ length: 19 }, (_, i) => `/assets/Team/TeamCard${i}.png`);
    // Duplicate the array to create seamless infinite scroll
    const duplicatedTeamCards = [...teamCards, ...teamCards];

    // Web Team members
    const webTeamMembers = [
        { name: "Karthik", image: "/assets/Web Team/Karthik.png" },
        { name: "Parikshit", image: "/assets/Web Team/Parikshit.png" },
        { name: "Robin", image: "/assets/Web Team/Robin.png" },
        { name: "Rohan", image: "/assets/Web Team/Rohan.png" },
        { name: "Shravan", image: "/assets/Web Team/Shravan.png" }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative p-4 sm:p-6 lg:p-8 h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-3"
                    style={{
                        backgroundImage: "url('/bgtest.png')",
                        opacity: 0.8,
                    }}
                ></div>
                <div className="relative text-center space-y-4 z-10 max-w-4xl mx-auto px-4">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
                        style={{ fontFamily: 'Morton' }}
                    >
                        MEET THE 
                    </h1>
                    <h1
                        className="text-5xl sm:text-8xl md:text-9xl lg:text-8xl xl:text-9xl text-[#ED246D]"
                        style={{ fontFamily: 'Morton' }}
                    >
                        TEAM.
                    </h1>
                </div>
            </div>

            {/* Scrolling Team Cards */}
            <div className="team-scroll-wrapper">
                <div className="flex items-center mb-10">
                    <h1 className="text-[#ED246D] text-5xl font-bold  " style={{ fontFamily: 'Morton' }}>//</h1>
                    <h1 className="text-white text-5xl font-bold  " style={{ fontFamily: 'Morton' }}> GLITCH </h1>
                    <h1 className="text-[#ED246D] text-5xl font-bold ml-4 " style={{ fontFamily: 'Morton' }}>EXECOM</h1>
                </div>
                <div className="team-scroll-container">
                    {duplicatedTeamCards.map((cardSrc, index) => (
                        <div key={`team-card-${index}`} className="team-card">
                            <img src={cardSrc} alt={`Team Member ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Web Team Section */}
            <div className="team-scroll-wrapper">
                <div className="flex items-center mb-10">
                    <h1 className="text-[#ED246D] text-5xl font-bold" style={{ fontFamily: 'Morton' }}>//</h1>
                    <h1 className="text-white text-5xl font-bold" style={{ fontFamily: 'Morton' }}> WEB </h1>
                    <h1 className="text-[#ED246D] text-5xl font-bold ml-4" style={{ fontFamily: 'Morton' }}>TEAM</h1>
                </div>
                <div className="web-team-container">
                    {webTeamMembers.map((member, index) => (
                        <div key={`web-team-${index}`} className="web-team-card">
                            <img src={member.image} alt={`${member.name}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
