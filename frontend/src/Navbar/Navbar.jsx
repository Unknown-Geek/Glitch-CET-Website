import React from 'react';
import { NavLink } from 'react-router-dom';
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
            className="logo-img p-[8px]"
            src="glitch_font.png"
            alt="Glitch Logo"
          />
        </div>

        <div className="navbar-links flex items-center space-x-6">
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
      </div>
    </div>
  );
}

export default Navbar;
