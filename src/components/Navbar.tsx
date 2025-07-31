"use client"
import React from 'react';

const Navbar = () => {
    const navItems = ['Event', 'Schedule', 'Speakers', 'Gallery'];

    return (
        <div className="relative z-20 w-full flex justify-center px-4 py-6">
            <nav className="relative max-w-5xl w-full px-6 py-3 
                     backdrop-blur-md bg-white/5 border border-white/10 
                     rounded-full flex items-center justify-between
                     shadow-lg shadow-black/5 font-space-grotesk">
                <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold tracking-wider">
                        <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                            TECH
                        </span>
                        <span className="text-white font-light">VIBE</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative px-4 py-2 text-sm font-medium text-white/70
                       transition-all duration-300 rounded-full
                       hover:text-white hover:bg-white/10
                       after:absolute after:bottom-0 after:left-0 after:right-0
                       after:h-[2px] after:w-0 after:mx-auto
                       after:bg-gradient-to-r from-purple-400 to-orange-400
                       after:transition-all after:duration-300
                       hover:after:w-2/3 font-outfit"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <button className="px-5 py-2 text-sm font-semibold text-white
                         bg-gradient-to-r from-purple-600 to-orange-500
                         rounded-full transition-all duration-300
                         hover:from-purple-700 hover:to-orange-600
                         hover:shadow-lg hover:shadow-purple-500/25
                         hover:scale-105">
                    Register Now
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
