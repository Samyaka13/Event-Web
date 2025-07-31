"use client"
import React from 'react'
import { Sun, Coffee, Users, Lightbulb, Clock } from 'lucide-react';

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

  return (
    <div className="relative min-h-screen w-full bg-black py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-orange-900/20" />

      <div className="relative z-10 container mx-auto">
        <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold text-center mb-20">
          <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Event Schedule
          </span>
        </h2>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row gap-6 p-6 backdrop-blur-md bg-white/5 
                         rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Timeline Connector */}
              {index !== schedule.length - 1 && (
                <div className="absolute left-[2.35rem] top-[5rem] w-[2px] h-[calc(100%+2rem)] 
                               bg-gradient-to-b from-purple-500 to-orange-500 opacity-20 md:left-[7.5rem]" />
              )}

              {/* Time Section */}
              <div className="flex items-center gap-4 md:w-48">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient}`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <Clock className="w-4 h-4 text-white/60" />
                <span className="text-white/80 font-outfit text-sm">{item.time}</span>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 font-outfit mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/80 font-outfit">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-orange-400" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
