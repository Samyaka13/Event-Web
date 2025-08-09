"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Clock, Star, Play, Zap, Target, X } from 'lucide-react';

function EnhancedEvents() {
  const [selectedZone, setSelectedZone] = useState<number | null>(null);
  const [hoveredZone, setHoveredZone] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Mouse tracking for subtle parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const experienceZones = [
    {
      title: "AI Art Studio",
      emoji: "🎨",
      description: "Transform your wildest ideas into stunning AI-generated masterpieces with state-of-the-art generative models",
      color: "from-violet-400 via-purple-500 to-indigo-600",
      glowColor: "violet-500",
      available: true,
      participants: 127,
      duration: "45 min",
      rating: 4.9,
      features: ["Real-time Generation", "Style Transfer", "Custom Prompts"]
    },
    {
      title: "Robotics Lab",
      emoji: "🤖",
      description: "Interact with cutting-edge autonomous robots and witness the future of human-machine collaboration",
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      glowColor: "cyan-500",
      available: true,
      participants: 89,
      duration: "60 min",
      rating: 4.8,
      features: ["Interactive Demos", "Programming Interface", "Live Robots"]
    },
    {
      title: "Neural Network Hub",
      emoji: "🧠",
      description: "Experience real-time AI decision making and explore the intricate world of neural networks",
      color: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "emerald-500",
      available: false,
      participants: 0,
      duration: "30 min",
      rating: 4.7,
      features: ["Neural Visualization", "Live Training", "Interactive Models"]
    },
    {
      title: "AI Music Studio",
      emoji: "🎧",
      description: "Create unique musical compositions and soundscapes with advanced AI music generation technology",
      color: "from-pink-400 via-rose-500 to-red-600",
      glowColor: "pink-500",
      available: true,
      participants: 156,
      duration: "40 min",
      rating: 4.9,
      features: ["Music Generation", "Beat Creation", "Voice Synthesis"]
    },
    {
      title: "VR Intelligence",
      emoji: "🕹️",
      description: "Immerse yourself in AI-powered virtual reality experiences that adapt to your every move",
      color: "from-orange-400 via-amber-500 to-yellow-600",
      glowColor: "orange-500",
      available: true,
      participants: 73,
      duration: "50 min",
      rating: 4.8,
      features: ["VR Headsets", "AI Adaptation", "Immersive Worlds"]
    },
    {
      title: "Code Arena",
      emoji: "💻",
      description: "Participate in live AI coding challenges and witness real-time code generation and optimization",
      color: "from-indigo-400 via-blue-500 to-cyan-600",
      glowColor: "indigo-500",
      available: true,
      participants: 234,
      duration: "35 min",
      rating: 4.9,
      features: ["Live Coding", "AI Assistant", "Real-time Collaboration"]
    }
  ];

  const stats = [
    { label: "Active Participants", value: "2.3K+", icon: Users },
    { label: "Experience Zones", value: "6", icon: Target },
    { label: "Average Rating", value: "4.8★", icon: Star },
    { label: "Live Sessions", value: "24/7", icon: Zap }
  ];

  return (
    <div id='Events' className="relative min-h-screen w-full overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Video Background with Parallax */}
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
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-white"
      >
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space-grotesk font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Experience AI
              </span>
              <br />
              <span className="text-white/90">Like Never Before</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 font-outfit text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12"
          >
            Immerse yourself in the future of technology through our interactive zones,
            hands-on demonstrations, and cutting-edge AI experiences.
          </motion.p>

          {/* Stats Section - Responsive Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4 backdrop-blur-xl bg-white/10 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-emerald-400" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Experience Zones Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {experienceZones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredZone(index)}
              onHoverEnd={() => setHoveredZone(null)}
              onClick={() => setSelectedZone(index)}
              className="group relative p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
                         rounded-2xl sm:rounded-3xl border border-white/20 cursor-pointer overflow-hidden
                         hover:border-emerald-500/50 transition-all duration-500"
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${zone.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Status Badge and Emoji */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <motion.span
                    className="text-3xl sm:text-4xl lg:text-5xl block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {zone.emoji}
                  </motion.span>
                  {zone.available && (
                    <div className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-400 border border-emerald-500/30">
                      <Play className="w-3 h-3" />
                      <span className="hidden sm:inline">Live</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-space-grotesk font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                  {zone.title}
                </h3>

                <p className="text-white/80 font-outfit text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300 line-clamp-3">
                  {zone.description}
                </p>

                {/* Zone Stats - Responsive */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{zone.participants}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{zone.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    <span>{zone.rating}</span>
                  </div>
                </div>

                {/* Features - Responsive */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {zone.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded-md sm:rounded-lg text-xs text-white/70">
                      {feature}
                    </span>
                  ))}
                </div>

                <motion.button
                  className={`w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-outfit font-medium text-sm sm:text-base transition-all duration-300 ${
                    zone.available
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:from-emerald-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-emerald-500/25'
                      : 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={zone.available ? { scale: 1.02 } : {}}
                  whileTap={zone.available ? { scale: 0.98 } : {}}
                  disabled={!zone.available}
                >
                  <span>{zone.available ? 'Enter Experience' : 'Coming Soon'}</span>
                  {zone.available && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.button
            className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 
                       rounded-full text-white font-outfit font-semibold text-base sm:text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center gap-2">
              Start Your AI Journey
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Modal for selected zone - Responsive */}
      <AnimatePresence>
        {selectedZone !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedZone(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 max-w-sm sm:max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedZone(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <span className="text-4xl sm:text-6xl mb-4 block">{experienceZones[selectedZone].emoji}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{experienceZones[selectedZone].title}</h3>
                <p className="text-white/80 mb-6 text-sm sm:text-base">{experienceZones[selectedZone].description}</p>
                
                {/* Features in modal */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {experienceZones[selectedZone].features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-lg text-xs text-white/70">
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl text-white font-semibold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300"
                  onClick={() => setSelectedZone(null)}
                >
                  Enter Experience
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EnhancedEvents;