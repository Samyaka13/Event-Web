"use client"
import React, { useEffect, useRef, useState } from 'react';

function Test() {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loadVanta = async () => {
                const THREE = await import('three');
                const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;
                
                if (!vantaEffect && vantaRef.current) {
                    setVantaEffect(
                        BIRDS({
                            el: vantaRef.current,
                            THREE: THREE,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            scale: 1.0,
                            scaleMobile: 1.0,
                            backgroundColor: 0x000000,
                            color1: 0x5c1d91,
                            color2: 0xea580c,
                            birdSize: 2,
                            wingSpan: 40,
                            speedLimit: 5,
                            separation: 30,
                            alignment: 30,
                            cohesion: 30,
                            quantity: 4
                        })
                    );
                }
            };

            loadVanta();
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div ref={vantaRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" style={{ zIndex: 1 }} />
            <div className="relative z-10 min-h-screen">
                checkdasfsdfdsfdfgdfgsfgsdfgsdfgdf
            </div>
        </div>
    );
}

export default Test;
