"use client"
import React from 'react';

const Navbar = () => {
  const navItems = ['Event', 'Schedule', 'Speakers', 'Gallery'];

  return (
    <nav className="relative z-20 border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-2xl sm:text-3xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              TECH
            </span>
            <span>VIBE</span>
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 px-4 py-2 rounded-lg text-lg font-medium
                         transition-all duration-300 ease-in-out
                         hover:text-white hover:bg-white/10
                         relative after:absolute after:bottom-0 after:left-0
                         after:h-[2px] after:w-0 after:bg-gradient-to-r
                         after:from-purple-400 after:to-orange-400
                         after:transition-all after:duration-300
                         hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-orange-500 
                           text-white px-6 py-2.5 rounded-lg font-semibold
                           transition-all duration-300 ease-in-out
                           hover:from-purple-700 hover:to-orange-600
                           hover:scale-105 hover:shadow-lg
                           hover:shadow-purple-500/25
                           text-sm sm:text-base">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
