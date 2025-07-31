"use client"
import React from 'react'
import { Sun, Coffee, Users, Lightbulb, Clock } from 'lucide-react';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

function Event() {
  const schedule = [
    {
      time: "9:00 AM – 12:30 PM",
      title: "Morning Sessions",
      icon: Sun,
      description: "Keynotes & Technical Workshops",
      activities: [
        "Opening Keynote: AI in 2025",
        "Technical Workshops",
        "Innovation Showcases"
      ],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      time: "12:30 PM – 2:00 PM",
      title: "Lunch & Networking",
      icon: Coffee,
      description: "Connect with Industry Leaders",
      activities: [
        "Networking Lunch",
        "1:1 Meeting Opportunities",
        "Exhibition Area Open"
      ],
      gradient: "from-blue-400 to-purple-500"
    },
    {
      time: "2:00 PM – 6:00 PM",
      title: "Afternoon Panels",
      icon: Users,
      description: "Expert Panel Discussions",
      activities: [
        "AI Ethics Panel",
        "Future of Work",
        "Technology Roadmap"
      ],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      time: "6:00 PM – 8:00 PM",
      title: "Evening Experience",
      icon: Lightbulb,
      description: "Networking & Awards",
      activities: [
        "Closing Keynote",
        "Awards Ceremony",
        "Networking Reception"
      ],
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-20 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold relative z-10 mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative flex flex-col md:flex-row gap-6 p-6 backdrop-blur-xl bg-black/50 
                         rounded-2xl border border-white/20 hover:bg-black/60 transition-all duration-300"
            >
              {/* Timeline Connector */}
              {index !== schedule.length - 1 && (
                <div className="absolute left-[2.35rem] top-[5rem] w-[2px] h-[calc(100%+2rem)] 
                               bg-gradient-to-b from-purple-500 to-orange-500 opacity-20 md:left-[7.5rem]" />
              )}

              {/* Time Section */}
              <div className="flex items-center gap-4 md:w-48">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient}`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <Clock className="w-4 h-4 text-white/80" />
                <span className="text-white/90 font-outfit text-sm">{item.time}</span>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 font-outfit mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.activities.map((activity, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-2 text-white/90 font-outfit"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-orange-400" />
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
