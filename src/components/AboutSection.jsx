'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="py-16 relative top-[150px] bg-gray-50">
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-light text-gray-800">Who I Am</h2>
                <p className="text-lg text-gray-400 mt-2">
                    A passionate developer turning ideas into impactful digital experiences
                </p>
            </motion.div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                {/* Image */}
                <motion.div
                    className="w-64 h-64 rounded-full overflow-hidden shadow-md relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img
                        src="/assets/Profile-removebg.png"
                        alt="Profile"
                        className="w-64 h-64 rounded-full bg-orange-100 object-cover" 
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="text-center md:text-left max-w-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-gray-700 text-base mb-4">
                        I'm a <span className="font-bold text-black">Full Stack MERN Developer</span> who loves creating web applications that are both functional and visually appealing. With experience in React.js, Node.js, MongoDB, and Next.js, I specialize in building complete solutions from frontend to backend.
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        In my free time, I love sketching and capturing nature through photography. You can check out my personal work on Instagram:
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Personal: <a href="https://instagram.com/awsm_ayush_" target="_blank" className="text-blue-500">@awsm_ayush_</a> Artistic: <a href="https://instagram.com/_artistic_ayush" target="_blank" className="text-blue-500">@_artistic_ayush</a>
                    </p>
                    <p className="text-gray-900 font-md text-lg">
                        My goal is to create user-friendly digital products that make a real impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
