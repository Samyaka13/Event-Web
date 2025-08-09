"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    ChevronRight, Calendar, Users, Star, TrendingUp, MapPin, Clock,
    Zap, Award, Globe, ArrowDown, Sparkles, Play
} from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { handleScroll } from './Navbar';

const HeroSection = () => {
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentTime, setCurrentTime] = useState(new Date());
    const [scrollY, setScrollY] = useState(0);

    const headings = useMemo(() => [
        "AI Convergence 2025",
        "Next Integration Hub", 
        "Digital Uprising Edge",
        "AI Exploration Base"
    ], []);

    const eventStats = useMemo(() => [
        { number: '1,500+', label: 'Attendees', icon: Users, color: 'from-blue-400 to-blue-600' },
        { number: '50+', label: 'Companies', icon: Star, color: 'from-yellow-400 to-orange-500' },
        { number: '11hrs', label: 'Duration', icon: Clock, color: 'from-green-400 to-green-600' },
        { number: '25+', label: 'Speakers', icon: Award, color: 'from-purple-400 to-purple-600' },
    ], []);

    const highlights = useMemo(() => [
        "🚀 Latest AI Breakthroughs",
        "🤝 Networking Opportunities", 
        "💡 Innovation Workshops",
        "🌐 Global Tech Leaders",
        "🔬 Live Demonstrations",
        "🎯 Interactive Sessions"
    ], []);

    // Enhanced entrance animation
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Scroll tracking for parallax
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Heading rotation with smooth transitions
    useEffect(() => {
        const headingInterval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 4000);
        return () => clearInterval(headingInterval);
    }, [headings.length]);

    // Mouse tracking for parallax effect
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
        });
    }, []);

    // Live clock update
    useEffect(() => {
        const clockInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(clockInterval);
    }, []);

    // Calculate time until event
    const eventDate = new Date('2025-09-28T09:00:00');
    const timeUntilEvent = eventDate.getTime() - currentTime.getTime();
    const daysUntil = Math.ceil(timeUntilEvent / (1000 * 3600 * 24));

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div
            className="relative min-h-screen w-full pt-20 md:pt-32  overflow-hidden"
            // onMouseMove={handleMouseMove}
            id='Hero'
        >
            <div
                className="absolute inset-0 z-0"
                // style={{
                //     transform: `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0) translateY(${scrollY * 0.5}px)`
                // }}
            >
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-110 md:scale-105"
                >
                    <source src="/Eg1.mp4" type="video/webm" />
                    <source src="/Eg1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                
                {/* Enhanced gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-orange-600/40" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Dynamic particles */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>

                {/* Floating orbs */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"
                            style={{
                                left: `${10 + (i * 12)}%`,
                                top: `${20 + (i * 8)}%`,
                                animationDelay: `${i * 0.5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-6 lg:px-8 pb-16 lg:pb-0">
                {/* Enhanced Left Content */}
                <div className={`flex-col max-w-4xl lg:max-w-3xl xl:max-w-4xl w-full lg:w-auto transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* Event Countdown Banner */}
                    <div className="mb-4 sm:mb-6 inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-500/30 to-orange-500/30 
                                    backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                        <Zap className="text-yellow-400 mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-white/90 text-xs sm:text-sm font-medium">
                            {daysUntil > 0 ? `${daysUntil} days to go • Live Event` : 'Event Today!'}
                        </span>
                        <Sparkles className="text-yellow-400 ml-2 w-3 h-3 animate-pulse" />
                    </div>

                    {/* Dynamic heading with responsive sizing */}
                    <div className='h-40 sm:h-48 md:h-56 lg:h-64 mb-4 sm:mb-6'>
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                            <span className="block w-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 
                                           bg-clip-text text-transparent drop-shadow-lg">
                                <Typewriter
                                    options={{
                                        strings: headings,
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        deleteSpeed: 30,
                                    }}
                                />
                            </span>
                        </h1>
                    </div>

                    <p className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 leading-relaxed 
                                  max-w-3xl">
                        Where Innovation Meets Implementation
                    </p>

                    {/* Event Details - Responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 text-white/80 max-w-4xl">
                        <div className="flex items-center space-x-2 bg-white/10 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm 
                                        border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <Calendar className="text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-semibold text-sm sm:text-base">Sept 28, 2025</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm 
                                        border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <MapPin className="text-orange-400 w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-semibold text-sm sm:text-base">Marriott, Delhi</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm 
                                        border border-white/20 hover:bg-white/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                            <Globe className="text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-semibold text-sm sm:text-base">Hybrid Event</span>
                        </div>
                    </div>

                    <div className="mb-6 sm:mb-8 overflow-hidden hidden sm:block">
                        <div className="flex space-x-8 whitespace-nowrap">
                            {highlights.map((highlight, index) => (
                                <span key={index} className="text-white/70 text-sm sm:text-base lg:text-lg font-medium animate-pulse">
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile highlights - Visible only on small screens */}
                    <div className="mb-6 grid grid-cols-2 gap-2 sm:hidden">
                        {highlights.slice(0, 4).map((highlight, index) => (
                            <div key={index} className="text-white/70 text-xs font-medium bg-white/5 px-2 py-1 rounded-md">
                                {highlight}
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Action Buttons - Responsive */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 
                                           overflow-hidden font-medium transition-all duration-300 bg-gradient-to-br
                                           from-purple-600 via-purple-700 to-purple-800
                                           hover:from-purple-500 hover:via-purple-600 hover:to-purple-700
                                           rounded-xl text-white shadow-lg hover:shadow-purple-500/25
                                           transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out 
                                             transform translate-x-1 translate-y-1 bg-purple-800 
                                             group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 
                                             border-2 border-purple-700 rounded-xl"></span>
                            <span className="relative flex items-center gap-2">
                                <span onClick={() => handleScroll('Agenda')} className="font-semibold text-sm sm:text-base">
                                    Explore Agenda
                                </span>
                                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </button>

                        <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4
                                           overflow-hidden font-medium transition-all duration-300 bg-gradient-to-br
                                           from-orange-500 via-orange-600 to-orange-700
                                           hover:from-orange-400 hover:via-orange-500 hover:to-orange-600
                                           text-white rounded-xl shadow-lg hover:shadow-orange-500/25
                                           transform hover:scale-105 active:scale-95 w-full sm:w-auto">
                            <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out 
                                             transform -skew-x-12 -translate-x-full group-hover:w-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"></span>
                            <span className="relative font-semibold flex items-center gap-2 text-sm sm:text-base">
                                Register Now
                                <TrendingUp size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                            </span>
                        </button>

                        {/* Play button for mobile */}
                        <button className="sm:hidden group relative inline-flex items-center justify-center px-6 py-3
                                           overflow-hidden font-medium transition-all duration-300 bg-white/10
                                           hover:bg-white/20 backdrop-blur-sm text-white rounded-xl border border-white/20
                                           transform hover:scale-105 active:scale-95">
                            <Play size={16} className="mr-2" />
                            <span className="font-semibold text-sm">Watch Trailer</span>
                        </button>
                    </div>
                </div>

                {/* Enhanced Stats Panel - Responsive */}
                <div className="w-full lg:w-auto flex lg:flex-col flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 
                                lg:pb-32 mt-8 lg:mt-0">
                    {eventStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`group bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 
                                           min-w-[160px] sm:min-w-[200px] lg:min-w-[220px] transform hover:scale-110 transition-all duration-300 
                                           hover:bg-white/15 hover:border-white/30 cursor-pointer flex-1 sm:flex-initial
                                           ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                                        <IconComponent className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="flex space-x-1">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                                                style={{ animationDelay: `${i * 0.2}s` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-transparent 
                                               group-hover:bg-gradient-to-r group-hover:from-purple-400 
                                               group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-white/70 text-xs sm:text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Enhanced Scroll Indicator - Responsive positioning */}
            <button
                onClick={scrollToContent}
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 
                           text-white/80 hover:text-white transition-all duration-300 
                           group cursor-pointer lg:block hidden"
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-medium group-hover:text-orange-400 transition-colors">
                        Discover More
                    </span>
                    <div className="animate-bounce group-hover:animate-pulse">
                        <ArrowDown size={20} className="group-hover:text-orange-400 transition-colors" />
                    </div>
                </div>
            </button>

            {/* Loading Animation */}
            {!isVisible && (
                <div className="absolute inset-0 z-30 bg-black flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-white/70 text-sm sm:text-base">Loading Experience...</p>
                    </div>
                </div>
            )}


        </div>
    );
};

export default HeroSection;