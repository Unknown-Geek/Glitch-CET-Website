import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <div className="flex justify-center mt-[30px]">
      <div className="navbar-container flex items-center justify-between text-white rounded-[15px] border border-[#F92672] px-[14px] py-[10px] mx-auto  ">
        <div>
          <img
            className="logo-img p-[14px]"
            src="glitch_font.png"
            alt="logo"
          />
        </div>

        <div className="navbar-links flex items-center">
          {['Home', 'Games', 'Events', 'Team', 'Contact'].map((item, index) => (
            <span
              key={index}
              style={{ fontFamily: 'neopixel' }}
              className="navbar-text font-light cursor-pointer hover:text-[#ED246D]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
