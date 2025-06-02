import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contacts' },
  ];

  return (
    <div className="flex justify-center mt-[30px]">
      <div className="navbar-container flex items-center justify-between text-white rounded-[15px] border border-[#F92672] px-[14px] py-[10px] mx-auto">
        <div>
          <img
            className="logo-img p-[14px]"
            src="glitch_font.png"
            alt="Glitch Logo"
          />
        </div>

        <div className="navbar-links flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{ fontFamily: 'neopixel' }}
              className="navbar-text font-light cursor-pointer hover:text-[#ED246D] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
