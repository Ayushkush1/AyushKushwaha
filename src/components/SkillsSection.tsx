"use client";

import React, { useEffect, useRef, useState } from 'react';

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
            <div className="text-center mb-12">
                <h2 className="text-3xl font-light text-gray-800">
                    What I Bring to the Table
                </h2>
                <p className="text-lg text-gray-400 mt-2">
                    Skills That Drive Results
                </p>
            </div>

            {/* Skill Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Full Stack Development */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Full Stack Development
                    </h3>
                    <AnimatedPercentage isVisible={isVisible} percentage={75} />
                    <p className="text-sm text-gray-500">
                        MongoDB, Express.js, React.js, Node.js
                    </p>
                </div>

                {/* Frontend Development */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Frontend Development
                    </h3>
                    <AnimatedPercentage isVisible={isVisible} percentage={85} />
                    <p className="text-sm text-gray-500">
                        HTML, CSS, JavaScript, React.js, Next.js
                    </p>
                </div>

                {/* Backend Development */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Backend Development
                    </h3>
                    <AnimatedPercentage isVisible={isVisible} percentage={65} />
                    <p className="text-sm text-gray-500">
                        Node.js, Express.js, RESTful APIs
                    </p>
                </div>
            </div>
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
        <p className="text-6xl font-black text-yellow-500 mb-4">{count}%</p>
    );
};

export default SkillsSection;