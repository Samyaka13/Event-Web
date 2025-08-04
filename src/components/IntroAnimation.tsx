"use client";
import React, { useEffect, useState } from 'react';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const phases = [
      { duration: 800, delay: 0 },      // Initial fade in
      { duration: 1000, delay: 800 },   // Text reveal
      { duration: 800, delay: 1800 },   // Particle burst
      { duration: 600, delay: 2600 }    // Fade out
    ];

    phases.forEach((phase, index) => {
      setTimeout(() => {
        setCurrentPhase(index + 1);

        if (index === phases.length - 1) {
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, phase.duration);
        }
      }, phase.delay);
    });

    return () => {};
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-green-900 to-black flex items-center justify-center overflow-hidden">

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23ffffff' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")] animate-pulse`}
        ></div>
      </div>

      {/* Particle burst */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-1000 ${
              currentPhase >= 3 ? 'animate-ping opacity-0' : 'opacity-60'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              transform: currentPhase >= 3
                ? `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(${Math.random() * 2 + 1})`
                : 'none'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div className={`mx-auto mb-8 relative transition-all duration-1000 ${
          currentPhase >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="w-32 h-32 mx-auto relative">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 transition-all duration-1000 ${
              currentPhase >= 2 ? 'animate-spin' : ''
            }`} style={{ animationDuration: '3s' }}>
              <div className="absolute inset-1 rounded-full bg-black flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                  <div className={`text-white font-bold text-2xl transition-all duration-500 ${
                    currentPhase >= 2 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    ✦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          currentPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Welcome
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
            Creating amazing experiences
          </p>
        </div>

        <div className={`mt-12 transition-all duration-500 ${
          currentPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-48 h-1 mx-auto bg-gray-800 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000 ${
              currentPhase >= 3 ? 'w-full' : 'w-0'
            }`}></div>
          </div>
          <p className="text-gray-400 text-sm mt-4 font-light">
            {currentPhase < 3 ? 'Loading...' : 'Ready!'}
          </p>
        </div>
      </div>

      {currentPhase >= 3 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-transparent via-white to-transparent opacity-80 animate-ping"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      )}

      {/* Black fade-out overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-600 ${
        currentPhase >= 4 ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default IntroAnimation;
