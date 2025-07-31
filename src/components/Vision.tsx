"use client"
import React, { useEffect, useRef, useState } from 'react';

function Vision() {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loadVanta = async () => {
                try {
                    const THREE = await import('three');
                    const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;

                    if (!vantaEffect && vantaRef.current) {
                        const effect = BIRDS({
                            el: vantaRef.current,
                            THREE: THREE,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 600,
                            minWidth: 500,
                            scale: 1.0,
                            scaleMobile: 1.0,
                            backgroundColor: 0x000000,
                            color1: 0x8b5cf6, // Purple
                            color2: 0xf97316, // Orange
                            colorMode: "variance",
                            birdSize: 1.2,
                            wingSpan: 25.0,
                            separation: 60.0,
                            alignment: 25.0,
                            cohesion: 25.0,
                            quantity: 4.0,
                            speedLimit: 5.0,
                            backgroundAlpha: 0.0
                        });
                        setVantaEffect(effect);
                    }
                } catch (error) {
                    console.error('Error loading Vanta:', error);
                }
            };

            loadVanta();
        }

        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20" />

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left side with Vanta animation */}
                    <div className="hidden lg:block relative">
                        {/* Vanta.js container */}
                        <div 
                            ref={vantaRef}
                            className="absolute inset-0 rounded-3xl overflow-hidden"
                            style={{ height: '600px', width: '100%' }}
                        />
                        
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-3xl pointer-events-none" />
                        
                        {/* Optional: Add a subtle border */}
                        <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
                        
                        {/* Optional: Add some text overlay on the animation */}
                        <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                            <div className="text-white/90 font-space-grotesk text-xl font-bold mb-2 drop-shadow-lg">
                                AI Innovation
                            </div>
                            <div className="text-white/70 font-outfit text-sm drop-shadow-md">
                                Soaring into the future of technology
                            </div>
                        </div>
                    </div>

                    {/* Right side content */}
                    <div className="flex flex-col gap-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold">
                                <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                                    Our Vision
                                </span>
                            </h2>
                            <p className="text-white/70 font-outfit text-lg leading-relaxed max-w-xl">
                                Empowering the future through innovative AI solutions and fostering a community of technological advancement and learning.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {/* Vision cards with enhanced hover effects */}
                            <div className="p-8 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 transform hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30">
                                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                                    Innovation Hub
                                </h3>
                                <p className="text-white/70 font-outfit leading-relaxed">
                                    Creating a central nexus where cutting-edge AI technologies converge with practical applications, fostering an environment of continuous innovation and learning.
                                </p>
                            </div>

                            <div className="p-8 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 transform hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-orange-500/30">
                                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                                    Future Forward
                                </h3>
                                <p className="text-white/70 font-outfit leading-relaxed">
                                    Pioneering the path to tomorrow's technological landscape, where AI integration becomes seamless and accessible across industries and applications.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8">
                            {['Research', 'Innovation', 'Implementation', 'Impact'].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-orange-400 group-hover:scale-150 transition-transform duration-300" />
                                    <span className="text-white/80 font-outfit group-hover:text-white transition-colors duration-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vision;