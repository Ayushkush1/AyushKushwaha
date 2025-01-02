"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16 relative top-[240px]">
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-light text-gray-800">
                    What I Bring to the Table
                </h2>
                <p className="text-lg text-gray-400 mt-2">
                    Skills That Drive Results
                </p>
            </motion.div>

            {/* Skill Cards */}
            <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Full Stack Development */}
                <motion.div variants={itemVariants} className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Full Stack Development
                    </h3>
                    <AnimatedPercentage isVisible={isVisible} percentage={75} />
                    <p className="text-sm text-gray-500">
                        MongoDB, Express.js, React.js, Node.js
                    </p>
                </motion.div>

                {/* Frontend Development */}
                <motion.div variants={itemVariants} className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Frontend Development
                    </h3>
                    <AnimatedPercentage isVisible={isVisible} percentage={85} />
                    <p className="text-sm text-gray-500">
                        HTML, CSS, JavaScript, React.js, Next.js
                    </p>
                </motion.div>

                {/* Backend Development */}
                <motion.div variants={itemVariants} className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Backend Development
                    </h3>
                    <AnimatedPercentage isVisible={isVisible} percentage={65} />
                    <p className="text-sm text-gray-500">
                        Node.js, Express.js, RESTful APIs
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

const AnimatedPercentage = ({ isVisible, percentage }: { isVisible: boolean, percentage: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = percentage;
            const duration = 2000;
            const increment = end / (duration / 10);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 10);

            return () => clearInterval(timer);
        }
    }, [isVisible, percentage]);

    return (
        <motion.p
            className="text-6xl font-black text-yellow-500 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {count}%
        </motion.p>
    );
};

// Framer Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default SkillsSection;
