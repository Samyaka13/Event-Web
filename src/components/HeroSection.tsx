"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
    ChevronRight, Calendar, Users, Star, TrendingUp, MapPin, Clock,
    Zap, Award, Globe, ArrowDown
} from 'lucide-react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentTime, setCurrentTime] = useState(new Date());

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
        "🌐 Global Tech Leaders"
    ], []);

    // Enhanced entrance animation
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
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
            className="relative h-screen w-full pt-40 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Enhanced Video Background with Parallax */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-110"
                >
                    <source src="/Eg1.mp4" type="video/webm" />
                    <source src="/Eg1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/40 to-orange-600/20" />
                
                {/* Animated Overlay Particles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between h-full px-8 pb-16">
                {/* Enhanced Left Content */}
                <div className={`flex-col max-w-4xl transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* Event Countdown Banner */}
                    <div className="mb-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-orange-500/20 
                                    backdrop-blur-sm rounded-full border border-white/20">
                        <Zap className="text-yellow-400 mr-2" size={16} />
                        <span className="text-white/90 text-sm font-medium">
                            {daysUntil > 0 ? `${daysUntil} days to go` : 'Event Today!'}
                        </span>
                    </div>

                    <div className='h-56 mb-4'>
                        <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
                            <span className="block w-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 
                                           bg-clip-text text-transparent">
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

                    <p className="text-white/90 text-3xl md:text-4xl font-extrabold mb-6 leading-relaxed">
                        Where Innovation Meets Implementation
                    </p>

                    {/* Event Details with Enhanced Styling */}
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-white/80">
                        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                            <Calendar className="text-purple-400" size={18} />
                            <span className="font-semibold">September 28, 2025</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                            <MapPin className="text-orange-400" size={18} />
                            <span className="font-semibold">The Marriott, New Delhi</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                            <Globe className="text-green-400" size={18} />
                            <span className="font-semibold">Hybrid Event</span>
                        </div>
                    </div>

                    {/* Highlights Ticker */}
                    <div className="mb-8 overflow-hidden">
                        <div className="flex animate-marquee space-x-8 whitespace-nowrap">
                            {[...highlights, ...highlights].map((highlight, index) => (
                                <span key={index} className="text-white/70 text-lg font-medium">
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button className="group relative inline-flex items-center justify-center px-8 py-4 
                                           overflow-hidden font-medium transition-all duration-300 bg-gradient-to-br
                                           from-purple-600 via-purple-700 to-purple-800
                                           hover:from-purple-500 hover:via-purple-600 hover:to-purple-700
                                           rounded-xl text-white shadow-lg hover:shadow-purple-500/25
                                           transform hover:scale-105">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out 
                                             transform translate-x-1 translate-y-1 bg-purple-800 
                                             group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 
                                             border-2 border-purple-700 rounded-xl"></span>
                            <span className="relative flex items-center gap-2">
                                <span className="font-semibold">Explore Agenda</span>
                                <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </button>

                        <button className="group relative inline-flex items-center justify-center px-8 py-4
                                           overflow-hidden font-medium transition-all duration-300 bg-gradient-to-br
                                           from-orange-500 via-orange-600 to-orange-700
                                           hover:from-orange-400 hover:via-orange-500 hover:to-orange-600
                                           text-white rounded-xl shadow-lg hover:shadow-orange-500/25
                                           transform hover:scale-105">
                            <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out 
                                             transform -skew-x-12 -translate-x-full group-hover:w-full"></span>
                            <span className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"></span>
                            <span className="relative font-semibold flex items-center gap-2">
                                Register Now
                                <TrendingUp size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Enhanced Stats Panel */}
                <div className="hidden lg:flex flex-col space-y-6 pb-32">
                    {eventStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 
                                           min-w-[220px] transform hover:scale-110 transition-all duration-300 
                                           hover:bg-white/15 hover:border-white/30 cursor-pointer
                                           ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                                        <IconComponent className="text-white" size={24} />
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
                                <div className="text-3xl font-bold text-white mb-1 group-hover:text-transparent 
                                               group-hover:bg-gradient-to-r group-hover:from-purple-400 
                                               group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-white/70 text-sm font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <button 
                onClick={scrollToContent}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 
                           text-white/80 hover:text-white transition-all duration-300 
                           group cursor-pointer"
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-medium group-hover:text-orange-400 transition-colors">
                        Discover More
                    </span>
                    <div className="animate-bounce group-hover:animate-pulse">
                        <ArrowDown size={24} className="group-hover:text-orange-400 transition-colors" />
                    </div>
                </div>
            </button>

            {/* Loading Animation */}
            {!isVisible && (
                <div className="absolute inset-0 z-30 bg-black flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
