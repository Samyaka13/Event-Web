"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Award, Star, Users, Building, ExternalLink, Twitter, Linkedin, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

function SpeakerSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const speakers = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            title: "Chief AI Scientist",
            company: "TechVision Labs",
            bio: "Leading researcher in machine learning and neural networks with 15+ years of experience in AI development and breakthrough innovations that have shaped the industry.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=400&h=400&fit=crop&crop=face",
            expertise: ["Machine Learning", "Neural Networks", "Computer Vision", "Deep Learning"],
            social: { twitter: "@sarahchen", linkedin: "sarah-chen" },
            gradient: "from-purple-400 to-pink-500",
            accent: "purple"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            title: "VP of Engineering",
            company: "FutureAI Inc",
            bio: "Pioneering the development of responsible AI systems and leading teams that build scalable AI solutions used by millions worldwide.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            expertise: ["Responsible AI", "System Architecture", "Team Leadership", "Scalability"],
            social: { twitter: "@marcusrod", linkedin: "marcus-rodriguez" },
            gradient: "from-blue-400 to-purple-500",
            accent: "blue"
        },
        {
            id: 3,
            name: "Dr. Aisha Patel",
            title: "Director of AI Ethics",
            company: "Global Tech Solutions",
            bio: "Expert in AI ethics and policy, working to ensure AI development benefits all of humanity through thoughtful governance and inclusive practices.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            expertise: ["AI Ethics", "Policy Development", "Social Impact", "Governance"],
            social: { twitter: "@aishapatel", linkedin: "aisha-patel" },
            gradient: "from-orange-400 to-red-500",
            accent: "orange"
        },
        {
            id: 4,
            name: "James Kim",
            title: "Senior Research Scientist",
            company: "DeepMind Research",
            bio: "Specializing in reinforcement learning and AGI safety, published 100+ papers in top-tier conferences and advancing the frontier of AI research.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            expertise: ["Reinforcement Learning", "AGI Safety", "Research", "Publications"],
            social: { twitter: "@jameskim", linkedin: "james-kim" },
            gradient: "from-green-400 to-blue-500",
            accent: "green"
        }
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % speakers.length);
            }, 6000);
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
        hidden: { opacity: 0, x: isMobile ? 50 : 100, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: isMobile ? -50 : -100,
            scale: 0.9,
            transition: { duration: 0.5, ease: "easeIn" }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div id='Speakers' className="relative min-h-screen w-full overflow-hidden py-12 sm:py-16 lg:py-20">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900" />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.h2 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 mb-4 sm:mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Featured Speakers
                        </span>
                    </motion.h2>
                    <motion.p 
                        className="text-white/80 text-lg sm:text-xl font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Learn from industry leaders and visionaries shaping the future of AI
                    </motion.p>
                </motion.div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Speaker Cards */}
                    <div className="relative min-h-[600px] sm:min-h-[500px] lg:min-h-[550px] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center p-4"
                            >
                                <div className="backdrop-blur-2xl bg-black/50 rounded-2xl sm:rounded-3xl border border-white/20 
                                              p-6 sm:p-8 lg:p-10 w-full max-w-5xl hover:bg-black/60 transition-all duration-500 group
                                              shadow-2xl hover:shadow-purple-500/20">
                                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                                        {/* Speaker Image */}
                                        <motion.div
                                            className="relative flex-shrink-0"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${speakers[currentSlide].gradient} 
                                                           opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                                            <img
                                                src={speakers[currentSlide].image}
                                                alt={speakers[currentSlide].name}
                                                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl object-cover 
                                                         border-2 border-white/30 shadow-lg"
                                            />
                                            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full p-2">
                                                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                                            </div>
                                            {/* Social Links Overlay */}
                                            <motion.div 
                                                className="absolute bottom-3 left-3 flex gap-2"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <div className="bg-black/70 backdrop-blur-sm rounded-full p-2 hover:bg-black/90 transition-colors cursor-pointer">
                                                    <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                                                </div>
                                                <div className="bg-black/70 backdrop-blur-sm rounded-full p-2 hover:bg-black/90 transition-colors cursor-pointer">
                                                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                                                </div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Speaker Info */}
                                        <motion.div 
                                            className="flex-1 text-center lg:text-left"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <motion.h3
                                                variants={itemVariants}
                                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3"
                                            >
                                                {speakers[currentSlide].name}
                                            </motion.h3>

                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
                                            >
                                                <span className="text-lg sm:text-xl text-white/90 font-medium">
                                                    {speakers[currentSlide].title}
                                                </span>
                                                <div className="hidden sm:flex items-center gap-2">
                                                    <Building className="w-4 h-4 text-white/60" />
                                                    <span className="text-white/80">{speakers[currentSlide].company}</span>
                                                </div>
                                                <div className="sm:hidden text-white/80 text-center">
                                                    {speakers[currentSlide].company}
                                                </div>
                                            </motion.div>

                                            <motion.p
                                                variants={itemVariants}
                                                className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl"
                                            >
                                                {speakers[currentSlide].bio}
                                            </motion.p>

                                            {/* Expertise Tags */}
                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
                                            >
                                                {speakers[currentSlide].expertise.map((skill, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.7 + idx * 0.1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${speakers[currentSlide].gradient} 
                                                                  bg-opacity-20 border border-white/20 text-white/90 text-xs sm:text-sm font-medium
                                                                  hover:bg-opacity-30 transition-all duration-300 cursor-default`}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Enhanced Navigation Controls */}
                    <motion.div 
                        className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {/* Auto-play Control */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 
                                     hover:bg-black/80 transition-all duration-300 group"
                        >
                            {isAutoPlaying ? (
                                <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-purple-400 transition-colors" />
                            ) : (
                                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-purple-400 transition-colors" />
                            )}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prevSlide}
                            className="p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 
                                     hover:bg-black/80 transition-all duration-300 group"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-400 transition-colors" />
                        </motion.button>

                        {/* Enhanced Slide Indicators */}
                        <div className="flex gap-2 sm:gap-3">
                            {speakers.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 ${
                                        index === currentSlide
                                            ? 'bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-500/50'
                                            : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                >
                                    {index === currentSlide && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={nextSlide}
                            className="p-2 sm:p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 
                                     hover:bg-black/80 transition-all duration-300 group"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-400 transition-colors" />
                        </motion.button>
                    </motion.div>

                    {/* Speaker Counter */}
                    <motion.div
                        className="text-center mt-6 sm:mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <span className="text-white/60 text-sm">
                            {String(currentSlide + 1).padStart(2, '0')} / {String(speakers.length).padStart(2, '0')}
                        </span>
                    </motion.div>
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
                description: "Leading technology solutions provider with global reach and innovation focus",
                tier: "Platinum",
                gradient: "from-gray-300 to-gray-500",
                website: "techcorp.com"
            },
            {
                id: 2,
                name: "AI Innovations Ltd",
                logo: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=200&h=100&fit=crop",
                description: "Pioneering artificial intelligence research and breakthrough technologies",
                tier: "Platinum",
                gradient: "from-gray-300 to-gray-500",
                website: "aiinnovations.com"
            }
        ],
        gold: [
            {
                id: 3,
                name: "DataFlow Systems",
                logo: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=200&h=100&fit=crop",
                description: "Advanced data processing solutions",
                tier: "Gold",
                gradient: "from-yellow-400 to-yellow-600",
                website: "dataflow.com"
            },
            {
                id: 4,
                name: "CloudTech Solutions",
                logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop",
                description: "Cloud infrastructure specialists",
                tier: "Gold",
                gradient: "from-yellow-400 to-yellow-600",
                website: "cloudtech.com"
            },
            {
                id: 5,
                name: "Neural Networks Co",
                logo: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=200&h=100&fit=crop",
                description: "Deep learning and AI development",
                tier: "Gold",
                gradient: "from-yellow-400 to-yellow-600",
                website: "neuralnetworks.com"
            }
        ],
        silver: [
            {
                id: 6,
                name: "StartupHub",
                logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
                description: "Supporting innovation startups",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600",
                website: "startuphub.com"
            },
            {
                id: 7,
                name: "DevTools Pro",
                logo: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=200&h=100&fit=crop",
                description: "Developer productivity tools",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600",
                website: "devtools.com"
            },
            {
                id: 8,
                name: "CodeCraft",
                logo: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=100&fit=crop",
                description: "Custom software development",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600",
                website: "codecraft.com"
            },
            {
                id: 9,
                name: "TechStart",
                logo: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=200&h=100&fit=crop",
                description: "Technology incubator",
                tier: "Silver",
                gradient: "from-gray-400 to-gray-600",
                website: "techstart.com"
            }
        ]
    };

    const cardVariants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0,
            scale: 0.9
        },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.8,
            }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div id='Sponsers' className="relative min-h-screen w-full overflow-hidden py-12 sm:py-16 lg:py-20">
            {/* Enhanced Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900" />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <motion.h2 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 mb-4 sm:mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                            Our Sponsors
                        </span>
                    </motion.h2>
                    <motion.p 
                        className="text-white/80 text-lg sm:text-xl font-light max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Powered by industry leaders who support innovation and technological advancement
                    </motion.p>
                </motion.div>

                {/* Platinum Sponsors */}
                <motion.div
                    className="mb-12 sm:mb-16 lg:mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Platinum Partners
                        </h3>
                        <motion.div 
                            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                        {sponsors.platinum.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                variants={cardVariants}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.02, y: -8 }}
                                className="backdrop-blur-2xl bg-black/50 rounded-2xl sm:rounded-3xl border border-white/20 
                                         p-6 sm:p-8 lg:p-10 hover:bg-black/60 transition-all duration-500 group
                                         shadow-2xl hover:shadow-gray-500/20 cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div 
                                        className="relative mb-6 sm:mb-8"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 opacity-20 blur-xl rounded-2xl 
                                                      group-hover:opacity-30 transition-opacity duration-500" />
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="relative w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 object-cover rounded-xl 
                                                     border-2 border-white/20 shadow-lg"
                                        />
                                    </motion.div>
                                    
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                        {sponsor.name}
                                    </h4>
                                    
                                    <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                                        {sponsor.description}
                                    </p>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r ${sponsor.gradient} 
                                                       bg-opacity-20 border border-white/20 group-hover:bg-opacity-30 transition-all duration-300`}>
                                            <span className="text-white/90 text-sm sm:text-base font-bold">
                                                {sponsor.tier} Sponsor
                                            </span>
                                        </div>
                                        
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                                        >
                                            <ExternalLink className="w-4 h-4 text-white/80" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Gold Sponsors */}
                <motion.div
                    className="mb-12 sm:mb-16 lg:mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Gold Partners
                        </h3>
                        <motion.div 
                            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {sponsors.gold.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                variants={cardVariants}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="backdrop-blur-2xl bg-black/50 rounded-xl sm:rounded-2xl border border-white/20 
                                         p-4 sm:p-6 lg:p-8 hover:bg-black/60 transition-all duration-500 group
                                         shadow-xl hover:shadow-yellow-500/20 cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div 
                                        className="relative mb-4 sm:mb-6"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-20 blur-lg rounded-lg 
                                                      group-hover:opacity-30 transition-opacity duration-500" />
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="relative w-20 h-10 sm:w-24 sm:h-12 lg:w-32 lg:h-16 object-cover rounded-lg 
                                                     border-2 border-white/20 shadow-lg"
                                        />
                                    </motion.div>
                                    
                                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                                        {sponsor.name}
                                    </h4>
                                    
                                    <p className="text-white/80 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 leading-relaxed">
                                        {sponsor.description}
                                    </p>
                                    
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${sponsor.gradient} 
                                                       bg-opacity-20 border border-white/20 group-hover:bg-opacity-30 transition-all duration-300`}>
                                            <span className="text-white/90 text-xs sm:text-sm font-bold">
                                                {sponsor.tier}
                                            </span>
                                        </div>
                                        
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                                        >
                                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Silver Sponsors */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-8 sm:mb-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            Silver Partners
                        </h3>
                        <motion.div 
                            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </motion.div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
                        {sponsors.silver.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                variants={cardVariants}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="backdrop-blur-xl bg-black/50 rounded-lg sm:rounded-xl border border-white/20 
                                         p-3 sm:p-4 lg:p-6 hover:bg-black/60 transition-all duration-500 group
                                         shadow-lg hover:shadow-gray-500/20 cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div 
                                        className="relative mb-2 sm:mb-3"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 object-cover rounded 
                                                     border border-white/20 shadow"
                                        />
                                    </motion.div>
                                    
                                    <h4 className="text-xs sm:text-sm lg:text-base font-bold text-white mb-1 sm:mb-2 leading-tight">
                                        {sponsor.name}
                                    </h4>
                                    
                                    <div className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r ${sponsor.gradient} 
                                                   bg-opacity-20 border border-white/20 group-hover:bg-opacity-30 transition-all duration-300`}>
                                        <span className="text-white/90 text-xs font-medium">
                                            {sponsor.tier}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Become a Sponsor CTA */}
                <motion.div
                    className="text-center mt-16 sm:mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                      rounded-2xl border border-white/20 p-6 sm:p-8 hover:from-purple-500/30 
                                      hover:to-pink-500/30 transition-all duration-500 cursor-pointer group">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                                Become a Sponsor
                            </h3>
                            <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                                Join our community of innovative partners and showcase your brand to industry leaders
                            </p>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                                          rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 
                                          transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                                <span>Learn More</span>
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default function SpeakerSponsorSections() {
    return (
        <div className="font-sans">
            <SpeakerSection />
            <SponsorSection />
        </div>
    );
}