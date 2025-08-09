"use client"
import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Send,
  ArrowUp,
  Heart,
  ExternalLink,
  Clock,
  Users,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { handleScroll } from './Navbar';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Event Info",
      icon: Calendar,
      links: [
        { name: "Schedule", href: "#schedule", icon: Clock },
        { name: "Speakers", href: "#speakers", icon: Users },
        { name: "Sponsors", href: "#sponsors", icon: Heart },
        { name: "Location", href: "#location", icon: MapPin }
      ]
    },
    {
      title: "Resources",
      icon: Globe,
      links: [
        { name: "Registration", href: "#register", icon: ExternalLink },
        { name: "Event Guide", href: "#guide", icon: ExternalLink },
        { name: "Code of Conduct", href: "#conduct", icon: ExternalLink },
        { name: "FAQs", href: "#faqs", icon: ExternalLink }
      ]
    },
    {
      title: "Connect",
      icon: Users,
      links: [
        { name: "Community", href: "#community", icon: Users },
        { name: "Newsletter", href: "#newsletter", icon: Mail },
        { name: "Support", href: "#support", icon: Phone },
        { name: "Contact", href: "#contact", icon: Mail }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400', gradient: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-500', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400', gradient: 'from-pink-400 to-purple-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500', gradient: 'from-red-500 to-red-600' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900" />
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-4 py-16"
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mb-6"
              >
                <h3 className="text-4xl font-space-grotesk font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  TECHVIBE 2025
                  </span>
                </h3>
                <p className="text-white/80 font-outfit text-lg leading-relaxed mb-6">
                  Join the most innovative AI conference of the year. Connect with industry leaders, 
                  discover cutting-edge technologies, and shape the future of artificial intelligence.
                </p>
              </motion.div>

              {/* Event Details */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 text-white/90"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="font-outfit">September 28, 2025</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 text-white/90"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-outfit">New Delhi</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h4 className="text-2xl font-space-grotesk font-bold text-white mb-4">
                Stay Updated
              </h4>
              <p className="text-white/80 font-outfit mb-6">
                Get the latest updates about speakers, schedules, and exclusive event content.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-black/60 backdrop-blur-sm border border-white/20 
                             rounded-xl text-white placeholder-white/60 font-outfit focus:outline-none 
                             focus:border-purple-400 transition-all duration-300"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r 
                             from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 
                             hover:to-pink-600 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-green-400 font-outfit text-sm"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                      Thanks for subscribing!
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h4 className="text-2xl font-space-grotesk font-bold text-white mb-6">
                Quick Access
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {['Schedule', 'Speakers', 'Events', 'Agenda'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={()=>handleScroll(item)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-2 p-3 bg-black/40 backdrop-blur-sm 
                             border border-white/10 rounded-xl hover:border-purple-400/50 
                             transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    <span className="text-white/90 font-outfit group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div onClick={()=>handleScroll(section.title)} key={section.title}>
                
                <div className="flex items-center gap-2 mb-6">
                  <section.icon className="w-5 h-5 text-purple-400" />
                  <h4 className="text-lg font-space-grotesk font-bold text-white">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-white/70 hover:text-white 
                                 font-outfit transition-all duration-300 group"
                      >
                        <link.icon className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Social Media & Bottom Bar */}
          <motion.div variants={itemVariants} className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-white/80 font-outfit mr-2">Follow us:</span>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-black/40 backdrop-blur-sm border border-white/10 
                             rounded-xl hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <social.icon className={`w-5 h-5 text-white/70 ${social.color} transition-colors`} />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="flex items-center gap-4 text-white/60 font-outfit text-sm">
                <span>© 2025 AI Summit. All rights reserved.</span>
                <span>•</span>
                <motion.a 
                  href="#privacy" 
                  whileHover={{ color: '#ffffff' }}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <span>•</span>
                <motion.a 
                  href="#terms" 
                  whileHover={{ color: '#ffffff' }}
                  className="hover:text-white transition-colors"
                >
                  Terms
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-pink-500 
                       rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 z-50"
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}

export default Footer;