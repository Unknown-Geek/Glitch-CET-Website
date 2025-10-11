import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contacts' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center mt-[30px] px-4">
      <div className="navbar-container flex items-center justify-between text-white md:rounded-[15px] md:border md:border-[#F92672] md:px-[14px] md:py-[10px] mx-auto w-full md:w-auto">
        {/* Logo */}
        <div>
          <img
            className="logo-img p-[8px]"
            src="glitch_font.png"
            alt="Glitch Logo"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              style={{ fontFamily: 'neopixel' }}
              className={({ isActive }) =>
                `navbar-text font-light cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-[#ED246D]' : 'text-white'
                } hover:text-[#ED246D]`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none rounded-lg border-2 border-[#ED246D] bg-[#1A1A2E] hover:bg-[#ED246D] transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white group-hover:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0D0E20] border-l border-[#F92672] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-10 h-10 focus:outline-none rounded-lg border-2 border-[#ED246D] bg-[#1A1A2E] hover:bg-[#ED246D] transition-all duration-300 text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-6 px-6 mt-8">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={closeMenu}
              style={{ fontFamily: 'neopixel' }}
              className={({ isActive }) =>
                `text-xl font-light cursor-pointer transition-colors duration-200 ${
                  isActive ? 'text-[#ED246D]' : 'text-white'
                } hover:text-[#ED246D]`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
