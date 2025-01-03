'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const techLogos = [
    '/assets/react-logo.png',
    '/assets/nodejs-logo.png',
    '/assets/tailwind-logo.png',
    '/assets/javascript-logo.png',
    '/assets/html-logo.png',
    '/assets/css-logo.png',
    '/assets/next-logo.png',
    '/assets/figma-logo.png',
    '/assets/mongodb-logo.png',
];

// Function to generate a random position
const generateRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
});

export default function HomeBanner() {
    const [positions, setPositions] = useState(
        techLogos.map(() => generateRandomPosition())
    );

    // Update positions periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setPositions(techLogos.map(() => generateRandomPosition()));
        }, 5000); // Update every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative lg:h-[80vh] md:h-[55vh] h-[65vh] bg-gray-50">
            {/* Hero Content */}
            <div className="relative z-10">
                <div className="flex flex-col about_blank items-center text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff6f00] to-[#ffe601] font-black lg:text-9xl sm:text-7xl md:text-9xl px-12 py-2 relative">
                    <h1>AYUSH</h1>
                    <h1>KUSHWAHA</h1>
                </div>
                <a href='/assets/resume.pdf' target="_blank" className="absolute top-[140%] cursor-pointer lg:top-[115%] md:top-[120%] inset-0 flex justify-center items-center">
                    <img
                        src="/assets/Profile.png"
                        alt="hero"
                        className="h-72 md:h-80 lg:h-80 object-contain animate-float"
                    />
                </a>
                <div className="absolute md:h-32 lg:h-32 md:w-20 lg:w-28 h-20 w-14 -rotate-12 top-[130%] left-[77%] sm:top-[120%] lg:top-[95%] sm:left-[65%] lg:left-[58%]">
                    <img src="/assets/arrow.png" alt="" />
                </div>
                <div className="absolute font-serif top-[177%] left-[85%] sm:top-[174%] lg:top-[142%] sm:left-[73%] lg:left-[64%]">
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [-5, 0, -5] }} // Moves up and down smoothly
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="lg:text-lg md:text-lg text-xs font-semibold text-red-500"
                    >
                        <a href="/assets/resume.pdf" target="_blank">Hire Me</a>
                    </motion.div>
                </div>

                <div className="flex text-xs font-semibold flex-col justify-center items-center relative top-[250px] lg:top-[220px] text-center">
                    <p>PASSIONATE FRONT-END DEVELOPER SKILLED</p>
                    <span>IN BUILDING DYNAMIC WEB APPS</span>
                </div>
            </div>

            {/* Randomly Moving and Rotating Logos */}
            {techLogos.map((logo, index) => (
                <motion.div
                    key={logo}
                    className="absolute"
                    style={{
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={positions[index]}
                    transition={{
                        duration: 5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                    }}
                >
                    <motion.img
                        src={logo}
                        alt="tech-logo"
                        className="lg:w-12 w-8 h-8 lg:h-12 object-contain"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}










































































// 'use client';

// import { motion } from 'framer-motion';

// // Array of tech logo URLs
// const techLogos = [
//     '/assets/react-logo.png',
//     '/assets/nodejs-logo.png',
//     '/assets/tailwind-logo.png',
//     '/assets/javascript-logo.png',
//     '/assets/html-logo.png',
//     '/assets/css-logo.png',
//     '/assets/next-logo.png',
//     '/assets/figma-logo.png',
// ];

// // Precomputed random positions for logos
// const precomputedPositions = [
//     { top: '10%', left: '20%' },
//     { top: '15%', left: '70%' },
//     { top: '10%', left: '50%' },
//     { top: '60%', left: '30%' },
//     { top: '70%', left: '80%' },
//     { top: '85%', left: '10%' },
//     { top: '45%', left: '90%' },
//     { top: '35%', left: '40%' },
// ];

// export default function HomeBanner() {
//     return (
//         <div className="relative h-screen bg-gray-50">
//             {/* Hero Content */}
//             <div className="relative z-10">
//                 <div className="flex flex-col items-center text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff6f00] to-[#ffe601] font-black lg:text-9xl sm:text-7xl md:text-9xl px-12 py-2 relative">
//                     <h1>AYUSH</h1>
//                     <h1>KUSHWAHA</h1>
//                 </div>
//                 <div className="absolute top-[145%] lg:top-[115%] inset-0 flex justify-center items-center">
//                     <img
//                         src="/assets/Profile.png"
//                         alt="hero"
//                         className="h-80 lg:h-80 object-contain animate-float"
//                     />
//                 </div>
//                 <div className="flex text-xs font-semibold flex-col justify-center items-center relative top-[250px] lg:top-[220px] text-center">
//                     <p>PASSIONATE FRONT-END DEVELOPER SKILLED</p>
//                     <span>IN BUILDING DYNAMIC WEB APPS</span>
//                 </div>
//             </div>

//             {/* Randomly Positioned Logos */}
//             {techLogos.map((logo, index) => (
//                 <motion.div
//                     key={logo}
//                     className="absolute"
//                     style={{
//                         ...precomputedPositions[index], // Apply precomputed random positions
//                         transform: 'translate(-50%, -50%)',
//                     }}
//                     animate={{
//                         scale: [1, 1.1, 1], // Subtle pulsating effect
//                         rotate: [0, 360], // Rotate the logo
//                     }}
//                     transition={{
//                         duration: 10, // Adjust for smooth animations
//                         repeat: Infinity,
//                         ease: 'linear',
//                     }}
//                 >
//                     <motion.img
//                         src={logo}
//                         alt="tech-logo"
//                         className="w-12 h-12 object-contain"
//                         animate={{
//                             rotate: [-360, 360], // Independent rotation
//                         }}
//                         transition={{
//                             duration: 5,
//                             repeat: Infinity,
//                             ease: 'linear',
//                         }}
//                     />
//                 </motion.div>
//             ))}
//         </div>
//     );
// }




















































































