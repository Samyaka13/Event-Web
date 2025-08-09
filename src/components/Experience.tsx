"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

function Experience() {
  const experienceZones = [
    {
      title: "AI Art Zone",
      emoji: "🎨",
      description: "Transform your ideas into stunning AI-generated masterpieces",
      color: "from-purple-500 to-pink-500",
      available: true
    },
    {
      title: "Robotics Lab",
      emoji: "🤖",
      description: "Interact with cutting-edge robotics and automation systems",
      color: "from-blue-500 to-cyan-500",
      available: true
    },
    {
      title: "Neural Hub",
      emoji: "🧠",
      description: "Experience real-time AI decision making and neural networks",
      color: "from-green-500 to-emerald-500",
      available: false
    },
    {
      title: "Music AI Studio",
      emoji: "🎧",
      description: "Create unique musical compositions with AI assistance",
      color: "from-orange-500 to-red-500",
      available: true
    },
    {
      title: "VR Intelligence",
      emoji: "🕹️",
      description: "Immerse yourself in AI-powered virtual reality experiences",
      color: "from-indigo-500 to-purple-500",
      available: true
    },
    {
      title: "Code Arena",
      emoji: "💻",
      description: "Participate in live AI coding challenges and competitions",
      color: "from-yellow-500 to-orange-500",
      available: true
    }
  ];

  return (
    <div  className="relative min-h-screen w-full bg-black py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-orange-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(114,39,175,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Experience AI Like Never Before
            </span>
          </motion.h2>
          <p className="text-white/70 text-xl font-outfit max-w-2xl mx-auto">
            Immerse yourself in the future of technology through our interactive zones and hands-on demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experienceZones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                translateZ: 20
              }}
              className="group relative p-6 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 
                         overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} opacity-0 
                             group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{zone.emoji}</span>
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-3">
                  {zone.title}
                </h3>
                <p className="text-white/70 font-outfit mb-6">
                  {zone.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-outfit text-white/80 
                                 hover:text-white transition-colors group">
                  <span>Explore Zone</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
                
                {zone.available && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-emerald-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Live Demo</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
