'use client';

import { useRef, useEffect } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { title } from 'process';

const projects = [
  {
    title: 'Six Table',
    description: 'A creative agency specializing in modern web development solutions for businesses.',
    image: '/assets/six-table.png',
    link: 'https://six-table.vercel.app/',
  },
  {
    title: 'Proposal Pro',
    description: 'Manage all your proposals and invoices in one place with ease.',
    image: '/assets/proposal-pro.png',
    link: 'https://proposal-pro-sable.vercel.app/',
  },
 
  {
    title: 'NinzaHost',
    description: 'Reliable and affordable web hosting with cPanel, free SSL, and round-the-clock support.',
    image: '/assets/ninzahost.png',
    link: 'https://www.ninzahost.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'Showcasing my work and expertise through a sleek Next.js and Tailwind CSS portfolio.',
    image: '/assets/portfolio.png',
    link: 'https://ayushkushwaha.vercel.app/',
  },
  {
    title: 'RemoveQ',
    description: 'A service focused on optimizing images to boost website speed and performance.',
    image: '/assets/removeq.png',
    link: 'https://removeq.com/',
  },
];

export default function ProjectSlider() {
  const ref = useRef(null);
  // Increased scroll height for smoother transitions
  // Each project gets 120vh of scroll distance for smoother pacing
  const scrollHeight = `${projects.length * 120}vh`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Progress bar for visual feedback
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Optional: Add smooth scrolling behavior
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div> {/* Main container */}
      {/* Header is now outside the scroll/sticky container */}
      <motion.div
        className="text-center mb-8 relative z-30 pt-16" // Adjust styling as needed
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="pb-1 text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
          Crafting Digital Excellence
        </h2>
        <p className="text-lg text-gray-600 mt-2">From concept to code</p>
      </motion.div>

      {/* Scrollable container with improved height for smoother transitions */}
      <div ref={ref} style={{ height: scrollHeight, position: 'relative' }}>
       

        {/* Sticky section */}
        <section
          className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        >
          {/* Optional: Add Progress Bar back inside sticky section if desired */}
          {/* <motion.div className="absolute left-0 top-0 h-2 ..." style={{ width: progressBarWidth }} /> */}

          {/* Projects Container: Removed flex-grow, added specific height (e.g., h-[70vh]), adjusted width */}
          <div className="relative w-[90vw] sm:w-[95vw] md:max-w-[500px] lg:max-w-[1100px] h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[85vh] flex items-center justify-center"> {/* Responsive sizing for all breakpoints */}
            {projects.map((project, index) => {
              // Improved transition ranges for smoother automatic scrolling
              // Each project now has more controlled transition zones
              const projectProgress = 1 / projects.length; // 0.25 for 4 projects
              const start = index * projectProgress;
              const end = (index + 1) * projectProgress;

              // Transition zones: 30% for fade-in, 40% visible, 30% fade-out
              const fadeInDuration = projectProgress * 0.3;
              const visibleDuration = projectProgress * 0.4;
              const fadeOutStart = start + fadeInDuration + visibleDuration;

              // More precise opacity control for automatic transitions
              let opacityInputRange, opacityOutputRange;

              if (index === 0) {
                // First project: starts visible, fades out
                opacityInputRange = [start, fadeOutStart, end];
                opacityOutputRange = [1, 1, 0];
              } else if (index === projects.length - 1) {
                // Last project: fades in, stays visible
                opacityInputRange = [start, start + fadeInDuration, end];
                opacityOutputRange = [0, 1, 1];
              } else {
                // Middle projects: complete fade in/out cycle
                opacityInputRange = [start, start + fadeInDuration, fadeOutStart, end];
                opacityOutputRange = [0, 1, 1, 0];
              }

              const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

              // Smoother Y transform with reduced movement for less distraction
              const yInputRange = [start, start + fadeInDuration];
              const yOutputRange = index === 0 ? [0, 0] : [50, 0]; // Reduced from 100 to 50
              const y = useTransform(scrollYProgress, yInputRange, yOutputRange);

              // Refined scale transform for subtle emphasis
              let scaleInputRange, scaleOutputRange;

              if (index === 0) {
                // First project: consistent scale, slight shrink at end
                scaleInputRange = [start, fadeOutStart, end];
                scaleOutputRange = [1, 1, 0.95];
              } else if (index === projects.length - 1) {
                // Last project: scale in, stay at full size
                scaleInputRange = [start, start + fadeInDuration, end];
                scaleOutputRange = [0.95, 1, 1];
              } else {
                // Middle projects: complete scale cycle
                scaleInputRange = [start, start + fadeInDuration, fadeOutStart, end];
                scaleOutputRange = [0.95, 1, 1, 0.95];
              }

              const scale = useTransform(scrollYProgress, scaleInputRange, scaleOutputRange);


              return (
                <motion.div
                  key={index}
                  style={{
                    opacity,
                    y,
                    scale,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: projects.length - index,
                    cursor: 'pointer',
                    transition: 'cursor 0.3s ease'
                  }}
                  className="overflow-hidden rounded-xl drop-shadow-2xl bg-gray-900/80"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />

                  {/* Content - Modified to appear at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end text-center text-white bg-black/50">
                    <h3 className="text-2xl font-bold my-4">{project.title}</h3>
                    <p className="text-md mb-6">{project.description}</p>
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className="px-6 py-2 mb-6 bg-orange-600 hover:bg-orange-700 rounded-full transition-colors duration-300"
                    >
                      View Project
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}