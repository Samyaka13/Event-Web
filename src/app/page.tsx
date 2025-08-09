"use client"
import Event from "@/components/Event";
import HeroSection from "@/components/HeroSection";
import Vision from "@/components/Vision";
import Test from "@/components/Test";
import { ReactLenis } from 'lenis/react'
import { useState, useEffect } from 'react';
import SpeakerSponsorSections from "@/components/SpeakerSection";

const options = {
  lerp: 0.1,
  duration: 2.5,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.0,
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ReactLenis root options={options}>
      <div className="relative w-full">

        <main className=" z-0 relative min-h-screen  w-full">
          <HeroSection />
          <Vision />
          <Event />
          <Test />
          <SpeakerSponsorSections />
        </main>
      </div>
    </ReactLenis>
  );
}
