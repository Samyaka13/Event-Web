"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Users, Star, TrendingUp, MapPin, Clock } from 'lucide-react';
import Typewriter from 'typewriter-effect';
const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    const headings = [
        "AI Convergence",
        "Tech Evolution",
        "Future Summit",
        "Digital Frontier"
    ];

    const backgroundImages = [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        '/HeroImage1.jpeg',
        '/HeroImage2.jpeg',
        '/HeroImage3.jpeg',

    ];

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 4000);

        const headingInterval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) =>
                (prevIndex + 1) % headings.length
            );
        }, 5000);

        return () => {
            clearInterval(imageInterval);
            clearInterval(headingInterval);
        };
    }, [backgroundImages.length, headings.length]);

    const eventStats = [
        { number: '1,500+', label: 'Attendees', icon: Users },
        { number: '50+', label: 'Companies', icon: Star },
        { number: '11hrs', label: 'Duration', icon: Clock },
    ];

    return (
        <div className="relative h-screen w-full pt-40 overflow-hidden">
            <div className="absolute inset-0">
                {backgroundImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${index === currentImageIndex
                            ? 'opacity-100 scale-105'
                            : 'opacity-0 scale-100'
                            }`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            willChange: 'opacity, transform'
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/50 to-orange-600/30 
                               transition-opacity duration-1000" />
            </div>
            <div className="relative z-10 flex items-center justify-between  h-full px-8 pb-16">

                <div className=" flex-col max-w-3xl  ">
                    <div className='h-56'>
                        <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight mb-6">
                            <span className="block w-full h bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                                <Typewriter
                                    options={{
                                        strings: ['AI Convergence 2025', 'Next Integration Hub', 'Digital Uprising Edge', "AI Exploration Base"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>

                        </h1>
                    </div>
                    <p className="text-white/80 text-4xl font-extrabold mb-4 leading-relaxed">
                        Where Innovation Meets Implementation
                    </p>
                    <h3 className="text-white/70 text-2xl mb-6 font-bold flex items-center space-x-3">
                        <Calendar className="mr-2" size={18} /> September 28, 2025
                        <MapPin className="ml-6 mr-2" size={18} /> The Marriott, New Delhi
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="group relative inline-flex items-center justify-center px-8 py-4 
                                       overflow-hidden font-medium transition-all bg-gradient-to-br
                                       from-purple-600 via-purple-700 to-purple-800
                                       hover:from-purple-700 hover:via-purple-800 hover:to-purple-900
                                       rounded-xl text-white">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000
                                         transform translate-x-12 bg-white opacity-10
                                         rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative flex items-center gap-2">
                                <span className="font-semibold">Explore Agenda</span>
                                <ChevronRight size={20}
                                    className="transition-transform duration-300 
                                             group-hover:translate-x-1" />
                            </span>
                        </button>

                        <button className="group relative inline-flex items-center justify-center px-8 py-4
                                       overflow-hidden font-medium transition-all bg-gradient-to-br
                                       from-orange-500 via-orange-600 to-orange-700
                                       hover:from-orange-600 hover:via-orange-700 hover:to-orange-800
                                       text-white rounded-xl">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 
                                         ease-in-out bg-white/20 group-hover:h-full group-hover:opacity-10"></span>
                            <span className="relative font-semibold group-hover:scale-105 transition-transform duration-150">
                                Register Now
                            </span>
                        </button>
                    </div>

                    {/* Event Cards Row */}
                    {/* <div className="grid grid-cols-3 gap-4 max-w-md">
                        <div className="bg-orange-500 rounded-2xl p-4 aspect-square flex flex-col justify-center items-center text-white transform hover:scale-105 transition-transform">
                            <div className="w-8 h-8 bg-white/20 rounded-full mb-2" />
                            <span className="text-sm font-medium">Keynotes</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 aspect-square flex flex-col justify-center items-center text-white border border-white/20 transform hover:scale-105 transition-transform">
                            <Users size={24} className="mb-2" />
                            <span className="text-sm font-medium">Networking</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 aspect-square flex flex-col justify-center items-center text-white border border-white/20 transform hover:scale-105 transition-transform">
                            <Star size={24} className="mb-2" />
                            <span className="text-sm font-medium">Exhibitions</span>
                        </div>
                    </div> */}
                </div>

                {/* Right Stats Panel */}
                <div className="hidden lg:flex flex-col space-y-6 pb-32">
                    {eventStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 min-w-[200px] transform hover:scale-105 transition-all duration-300 hover:bg-white/15"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <IconComponent className="text-orange-400" size={24} />
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-white/70 text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm">
                <div className="animate-bounce">
                    <ChevronRight className="rotate-90" size={20} />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
