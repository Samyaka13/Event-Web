"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award, Star, Users, Building } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";


function SpeakerSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const speakers = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            title: "Chief AI Scientist",
            company: "TechVision Labs",
            bio: "Leading researcher in machine learning and neural networks with 15+ years of experience in AI development.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=400&h=400&fit=crop&crop=face",
            expertise: ["Machine Learning", "Neural Networks", "Computer Vision"],
            social: { twitter: "@sarahchen", linkedin: "sarah-chen" },
            gradient: "from-purple-400 to-pink-500"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            title: "VP of Engineering",
            company: "FutureAI Inc",
            bio: "Pioneering the development of responsible AI systems and leading teams that build scalable AI solutions.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            expertise: ["Responsible AI", "System Architecture", "Team Leadership"],
            social: { twitter: "@marcusrod", linkedin: "marcus-rodriguez" },
            gradient: "from-blue-400 to-purple-500"
        },
        {
            id: 3,
            name: "Dr. Aisha Patel",
            title: "Director of AI Ethics",
            company: "Global Tech Solutions",
            bio: "Expert in AI ethics and policy, working to ensure AI development benefits all of humanity.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            expertise: ["AI Ethics", "Policy Development", "Social Impact"],
            social: { twitter: "@aishapatel", linkedin: "aisha-patel" },
            gradient: "from-orange-400 to-red-500"
        },
        {
            id: 4,
            name: "James Kim",
            title: "Senior Research Scientist",
            company: "DeepMind Research",
            bio: "Specializing in reinforcement learning and AGI safety, published 100+ papers in top-tier conferences.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            expertise: ["Reinforcement Learning", "AGI Safety", "Research"],
            social: { twitter: "@jameskim", linkedin: "james-kim" },
            gradient: "from-green-400 to-blue-500"
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % speakers.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, speakers.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % speakers.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + speakers.length) % speakers.length);
        setIsAutoPlaying(false);
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: -100,
            transition: { duration: 0.4, ease: "easeIn" }
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold relative z-10 mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Featured Speakers
                        </span>
                    </h2>
                    <p className="text-white/80 text-xl font-outfit max-w-2xl mx-auto">
                        Learn from industry leaders and visionaries shaping the future of AI
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Speaker Cards */}
                    <div className="relative h-[500px] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="backdrop-blur-xl bg-black/50 rounded-3xl border border-white/20 p-8 w-full max-w-4xl
                               hover:bg-black/60 transition-all duration-300 group">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <motion.div
                                            className="relative"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${speakers[currentSlide].gradient} opacity-20 blur-xl`} />
                                            <img
                                                src={speakers[currentSlide].image}
                                                alt={speakers[currentSlide].name}
                                                className="relative w-48 h-48 rounded-2xl object-cover border-2 border-white/20"
                                            />
                                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2">
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            </div>
                                        </motion.div>

                                        <div className="flex-1 text-center md:text-left">
                                            <motion.h3
                                                className="text-3xl font-space-grotesk font-bold text-white mb-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {speakers[currentSlide].name}
                                            </motion.h3>

                                            <motion.div
                                                className="flex items-center justify-center md:justify-start gap-2 mb-4"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <span className="text-lg font-outfit text-white/90">{speakers[currentSlide].title}</span>
                                                <Building className="w-4 h-4 text-white/60" />
                                                <span className="text-white/80 font-outfit">{speakers[currentSlide].company}</span>
                                            </motion.div>

                                            <motion.p
                                                className="text-white/80 font-outfit text-lg mb-6 leading-relaxed"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {speakers[currentSlide].bio}
                                            </motion.p>

                                            {/* Expertise Tags */}
                                            <motion.div
                                                className="flex flex-wrap justify-center md:justify-start gap-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                            >
                                                {speakers[currentSlide].expertise.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${speakers[currentSlide].gradient} 
                                     bg-opacity-20 border border-white/20 text-white/90 text-sm font-outfit`}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 
                         hover:bg-black/80 transition-all duration-300 group"
                        >
                            <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                        </motion.button>

                        {/* Slide Indicators */}
                        <div className="flex gap-2">
                            {speakers.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                                        : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 
                         hover:bg-black/80 transition-all duration-300 group"
                        >
                            <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function SponsorSection() {
    const sponsors = {
        platinum: [
            {
                id: 1,
                name: "TechCorp Industries",
                logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
                description: "Leading technology solutions provider",
                tier: "Platinum",
                gradient: "from-gray-300 to-gray-500"
            },
            {
                id: 2,
                name: "AI Innovations Ltd",
                logo: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=200&h=100&fit=crop",
                description: "Pioneering artificial intelligence research",
                tier: "Platinum",
                gradient: "from-gray-300 to-gray-500"
            }
        ],
        gold: [
            {
                id: 3,
                name: "DataFlow Systems",
                logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=200&h=100&fit=crop",
                description: "Advanced data processing solutions",
                tier: "Gold",
                gradient: "from-yellow-400 to-yellow-600"
            },
            {
                id: 4,
                name: "CloudTech Solutions",
                logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
                description: "Cloud infrastructure specialists",
                tier: "Gold",
                gradient: "from-yellow-400 to-yellow-600"
            },
            {
                id: 5,
                name: "Neural Networks Co",
                logo: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=200&h=100&fit=crop",
                description: "Deep learning and AI development",
                tier: "Gold",
                gradient: "from-yellow-400 to-yellow-600"
            }
        ],
        silver: [
            {
                id: 6,
                name: "StartupHub",
                logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
                description: "Supporting innovation startups",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600"
            },
            {
                id: 7,
                name: "DevTools Pro",
                logo: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=200&h=100&fit=crop",
                description: "Developer productivity tools",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600"
            },
            {
                id: 8,
                name: "CodeCraft",
                logo: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=100&fit=crop",
                description: "Custom software development",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600"
            },
            {
                id: 9,
                name: "TechStart",
                logo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=200&h=100&fit=crop",
                description: "Technology incubator",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600"
            }
        ]
    };

    const cardVariants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
            }
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-space-grotesk font-bold relative z-10 mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Our Sponsors
                        </span>
                    </h2>
                    <p className="text-white/80 text-xl font-outfit max-w-2xl mx-auto">
                        Powered by industry leaders who support innovation and technological advancement
                    </p>
                </motion.div>

                {/* Platinum Sponsors */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">Platinum Partners</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {sponsors.platinum.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="backdrop-blur-xl bg-black/50 rounded-2xl border border-white/20 p-8 
                           hover:bg-black/60 transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 opacity-20 blur-xl rounded-xl" />
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="relative w-32 h-16 object-cover rounded-xl border border-white/20"
                                        />
                                    </div>
                                    <h4 className="text-xl font-space-grotesk font-bold text-white mb-2">{sponsor.name}</h4>
                                    <p className="text-white/80 font-outfit mb-4">{sponsor.description}</p>
                                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${sponsor.gradient} bg-opacity-20 
                                 border border-white/20`}>
                                        <span className="text-white/90 text-sm font-outfit font-bold">{sponsor.tier} Sponsor</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Gold Sponsors */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">Gold Partners</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {sponsors.gold.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="backdrop-blur-xl bg-black/50 rounded-2xl border border-white/20 p-6 
                           hover:bg-black/60 transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-lg rounded-lg" />
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="relative w-24 h-12 object-cover rounded-lg border border-white/20"
                                        />
                                    </div>
                                    <h4 className="text-lg font-space-grotesk font-bold text-white mb-2">{sponsor.name}</h4>
                                    <p className="text-white/80 font-outfit text-sm mb-3">{sponsor.description}</p>
                                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${sponsor.gradient} bg-opacity-20 
                                 border border-white/20`}>
                                        <span className="text-white/90 text-xs font-outfit font-bold">{sponsor.tier}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Silver Sponsors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-space-grotesk font-bold text-white mb-2">Silver Partners</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {sponsors.silver.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="backdrop-blur-xl bg-black/50 rounded-xl border border-white/20 p-4 
                           hover:bg-black/60 transition-all duration-300 group"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-3">
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="w-20 h-10 object-cover rounded border border-white/20"
                                        />
                                    </div>
                                    <h4 className="text-sm font-space-grotesk font-bold text-white mb-1">{sponsor.name}</h4>
                                    <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${sponsor.gradient} bg-opacity-20 
                                 border border-white/20`}>
                                        <span className="text-white/90 text-xs font-outfit">{sponsor.tier}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}


export default function SpeakerSponsorSections() {
    return (
        <div>
            <SpeakerSection />
            <SponsorSection />
        </div>
    );
}