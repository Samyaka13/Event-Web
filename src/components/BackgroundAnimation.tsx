"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from "three";
// @ts-ignore
import HALO from "vanta/dist/vanta.halo.min"

function BackgroundAnimation() {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(HALO({
                el: vantaRef.current,
                THREE,
                color: 0x14b679,
                backgroundColor: 0x15173c,
                maxDistance: 34.0,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                // scale: 2.0,
                scaleMobile: 1.0,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return (
        <div className="fixed inset-0 z-0">
            <div ref={vantaRef} className="w-full h-full opacity-80" />
            <div className="absolute inset-0 bg-black/40 " />
        </div>
    );
}

export default BackgroundAnimation;
