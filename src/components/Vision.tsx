"use client"
import React, { useEffect, useRef, useState } from 'react';

function Vision() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            title: "Innovation Hub",
            description: "Creating a central nexus where cutting-edge AI technologies converge with practical applications, fostering an environment of continuous innovation and learning.",
            icon: "🚀",
            gradient: "from-purple-500/20 to-purple-600/10"
        },
        {
            title: "Future Forward",
            description: "Pioneering the path to tomorrow's technological landscape, where AI integration becomes seamless and accessible across industries and applications.",
            icon: "🔮",
            gradient: "from-orange-500/20 to-orange-600/10"
        }
    ];

    return (
        <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden">
            {/* Dark backdrop for better content visibility */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-20 container mx-auto px-4 py-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold relative z-10 mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-xl">
                            Our Vision
                        </span>
                    </h2>
                    <p className="text-white font-outfit text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                        Empowering the future through innovative AI solutions and fostering a community of technological advancement and learning.
                    </p>
                </div>

                {/* Cards Section - Now in row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 backdrop-blur-xl bg-black/50 rounded-2xl border border-white/20 
                                       transform hover:scale-105 transition-all duration-500 hover:bg-black/60 
                                       hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20
                                       ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                                       cursor-pointer overflow-hidden`}
                            style={{ animationDelay: `${400 + index * 200}ms` }}
                        >
                            {/* Background gradient effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </span>
                                    <h3 className="text-2xl font-space-grotesk font-bold text-white group-hover:text-purple-200 transition-colors duration-300 drop-shadow-lg">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-white/90 font-outfit leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Items - Centered */}
                <div className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-1000 
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {['Research', 'Innovation', 'Implementation', 'Impact'].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 group-hover:scale-150 transition-all duration-300 shadow-lg" />
                                <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 animate-ping opacity-40" />
                            </div>
                            <span className="text-white/90 font-outfit group-hover:text-white transition-all duration-300 group-hover:font-semibold drop-shadow-lg">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-size: 200% 200%; background-position: left center; }
                    50% { background-size: 200% 200%; background-position: right center; }
                }
                
                @keyframes expand-width {
                    0% { width: 0; }
                    100% { width: 100%; }
                }
                
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-gradient-x { animation: gradient-x 3s ease infinite; }
                .animate-expand-width { animation: expand-width 2s ease-out 1s forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-float { animation: float 3s ease-in-out infinite; }
            `}</style>
        </div>
    );
}

export default Vision;