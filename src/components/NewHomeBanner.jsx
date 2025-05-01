'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { Twitter, Linkedin, Github, Instagram, Files, MonitorDown } from "lucide-react";

export default function NewHomeBanner() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const titles = ['Designer', 'Developer', 'UI/UX Designer'];
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2500); // Change every 2.5 seconds
        return () => clearInterval(interval);
    }, [titles]); // Add titles as a dependency

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden  pt-24 px-4 sm:px-8 md:px-16 lg:px-32">


            <div className="relative container mx-auto px-2 sm:px-4">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] py-8 lg:py-0">
                    {/* Left Column */}
                    <div className="relative space-y-4 sm:space-y-6 lg:space-y-8 pl-2 sm:pl-5">
                        {/* Animated background blobs */}
                        <motion.div
                            className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-100 rounded-full blur-3xl opacity-40 -z-10"
                            animate={{
                                scale: [1, 1.15, 1],
                                x: [0, 20, 0, -20, 0],
                                y: [0, 10, 0, -10, 0],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-32 left-40 w-60 h-60 bg-gradient-to-br from-pink-300 via-orange-100 to-yellow-200 rounded-full blur-2xl opacity-30 -z-10"
                            animate={{
                                scale: [1, 1.1, 1],
                                x: [0, -30, 0, 30, 0],
                                y: [0, -15, 0, 15, 0],
                                rotate: [0, -8, 8, 0]
                            }}
                            transition={{
                                duration: 16,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-60 left-10 w-52 h-52 bg-gradient-to-br from-yellow-100 via-orange-200 to-pink-200 rounded-full blur-2xl opacity-25 -z-10"
                            animate={{
                                scale: [1, 1.18, 1],
                                x: [0, 15, 0, -15, 0],
                                y: [0, 20, 0, -20, 0],
                                rotate: [0, 12, -12, 0]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <div className="space-y-4 sm:space-y-6">
                            <div className="space-y-3 sm:space-y-4">
                                <span className="text-lg sm:text-xl text-orange-600">Hello! 👋</span>
                                <div className="space-y-2 sm:space-y-3">
                                    <h2 className="text-xl sm:text-2xl text-gray-700">I'm <span className="font-bold">Ayush</span>,</h2>
                                    <h1 className="text-4xl sm:text-5xl lg:text-7xl pb-3 font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent relative min-h-[1em]">
                                        {currentTitle === 2 ? '' : 'Web'}{' '}
                                        <motion.span
                                            key={currentTitle}
                                            initial={{ opacity: 1, y: 0 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ 
                                                duration: 0.5,
                                                type: currentTitle === 0 && titles[currentTitle] === 'Developer' ? "tween" : "spring",
                                                stiffness: 100
                                            }}
                                            className="inline-block"
                                        >
                                            {titles[currentTitle]}
                                        </motion.span>
                                    </h1>
                                </div>
                                <p className="text-base sm:text-md lg:text-lg text-gray-600 max-w-xl leading-relaxed">
                                    Transforming ideas into elegant solutions with cutting-edge technology.
                                    Specializing in full-stack development with a keen eye for design and user experience.
                                </p>
                            </div>
                        </div>




                        <div className="flex flex-col sm:flex-row gap-6">
                            <motion.a
                                href="/assets/resume.pdf"
                                className="group relative px-6 py-3 font-medium text-gray-800 overflow-hidden border-2 border-orange-400 hover:border-orange-500 bg-white/80 backdrop-blur-sm transition-all duration-300 rounded-full"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(120deg, transparent 30%, #ffe5b4 50%, transparent 70%)",
                                        opacity: 0.7
                                    }}
                                    animate={{
                                        x: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <span className="relative flex items-center gap-2 z-10">
                                    <Files className="w-5 h-5" />
                                    <span>Download CV</span>
                                </span>
                            </motion.a>
                            <motion.a
                                href="/portfolio"
                                className="group relative px-6 py-3 font-medium text-gray-800 overflow-hidden border-2 border-orange-500 hover:border-orange-600 bg-white/80 backdrop-blur-sm transition-all duration-300 rounded-full"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(120deg, transparent 30%, #ffd6a5 50%, transparent 70%)",
                                        opacity: 0.7
                                    }}
                                    animate={{
                                        x: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <span className="relative flex items-center gap-2 z-10">
                                    <MonitorDown className="w-5 h-5" />
                                    <span>View Projects</span>
                                </span>
                            </motion.a>
                        </div>



                    </div>

                    {/* Right Column - Profile & Tech Stack */}
                    <motion.div className="relative pr-10 mt-8 lg:mt-0">
                        <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] mx-auto">
                            {/* Background gradient blob */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{ duration: 20, repeat: Infinity }}
                            />

                            {/* Decorative circles */}
                            <motion.div
                                className="absolute inset-0 border-[2px] border-dashed border-orange-300/30 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Code-related decorative elements */}
                            <div className="absolute inset-0 hidden sm:block">
                                {/* Code syntax elements */}
                                <motion.div
                                    className="absolute -top-6 left-1/4 text-sm font-mono text-orange-500/70"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        y: [-2, 0, -2]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    const developer = {'{'}
                                </motion.div>

                                <motion.div
                                    className="absolute top-1/4 -left-16 text-sm font-mono text-orange-500/70"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        x: [-2, 0, -2]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    &lt;div className="skills"&gt;
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-1/4 -right-20 text-sm font-mono text-orange-500/70"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        x: [2, 0, 2]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    return &lt;Portfolio /&gt;
                                </motion.div>



                                <motion.div
                                    className="absolute bottom-1/4 -left-16 text-sm font-mono text-orange-500/70"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        x: [2, 0, 2]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    npm install success!
                                </motion.div>



                                {/* Circular code path */}
                                <motion.div
                                    className="absolute inset-8 border-[1px] border-orange-300/50 rounded-full"
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                        scale: { duration: 3, repeat: Infinity }
                                    }}
                                />
                            </div>
                            <motion.div
                                className="absolute inset-4 border-[1px] border-orange-200/40 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Dots pattern */}
                            <div className="absolute  -right-12 top-1/4 hidden sm:block">
                                <motion.div
                                    className="space-y-2 font-mono text-sm text-orange-500/70"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        x: [2, 0, 2]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <div>import React from 'react';</div>

                                </motion.div>
                            </div>
                            {/* Wave pattern */}
                            <motion.div
                                className="absolute -left-12 bottom-1/4 w-20 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"
                                animate={{
                                    scaleX: [1, 1.5, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            {/* Profile Image */}
                            <Image
                                src="/assets/Profile-removebg.png"
                                alt="Ayush Profile"
                                fill
                                className="object-contain z-10"
                                priority
                            />
                        </div>

                        {/* Floating Tech Icons */}
                        <div className="absolute -right-4 sm:-right-12 lg:-right-24 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 sm:gap-6 lg:gap-8">
                            {[
                                { Icon: FaReact, color: '#61DAFB' },
                                { Icon: FaJsSquare, color: '#F7DF1E' },
                                { Icon: FaHtml5, color: '#E34F26' },
                                { Icon: FaCss3Alt, color: '#1572B6' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-3 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm"
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, 10, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: index * 0.2,
                                        repeat: Infinity
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <item.Icon className="text-3xl" style={{ color: item.color }} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Social Links */}
                <motion.div
                    className="fixed left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-4 sm:gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                >
                    {[
                        { Icon: Github, color: '#333', href: 'https://github.com' },
                        { Icon: Linkedin, color: '#0A66C2', href: 'https://linkedin.com' },
                        { Icon: Twitter, color: '#1DA1F2', href: 'https://twitter.com' },
                        { Icon: Instagram, color: '#E4405F', href: 'https://instagram.com' }
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/80 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            style={{ color: item.color }}
                        >
                            <item.Icon size={20} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
