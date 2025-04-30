'use client';

import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'MOVIX',
    description: 'A movie search app using Redux.js, React.js, and SASS with dynamic features.',
    image: '/assets/movix.png',
    link: 'https://ayushmovix.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using Next.js and Tailwind CSS, showcasing my skills and projects.',
    image: '/assets/portfolio.png',
    link: 'https://ayushkushwaha.vercel.app/',
  },
  {
    title: 'RemoveQ',
    description: 'An innovative image optimization service enhancing website performance.',
    image: '/assets/removeq.png',
    link: 'https://removeq.com/',
  },
];

export default function ProjectSlider() {
  const ref = useRef(null);
  // Increase the multiplier from 50 to 100 (or another value like 75, 80)
  // This gives each project 100vh of scroll distance for its transition cycle.
  const scrollHeight = `${projects.length * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Remove the headerOpacity transform as the header is now outside the sticky section
  // const headerOpacity = useTransform(...) // No longer needed here

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

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

      {/* Scrollable container - now taller */}
      <div ref={ref} style={{ height: scrollHeight, position: 'relative' }}>
        {/* Sticky section */}
        <section
          // This section handles the overall centering
          className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        >
          {/* Optional: Add Progress Bar back inside sticky section if desired */}
          {/* <motion.div className="absolute left-0 top-0 h-2 ..." style={{ width: progressBarWidth }} /> */}

          {/* Projects Container: Removed flex-grow, added specific height (e.g., h-[70vh]), adjusted width */}
          <div className="relative w-[90vw] sm:w-[95vw] md:max-w-[500px] lg:max-w-[1100px] h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[85vh] flex items-center justify-center"> {/* Responsive sizing for all breakpoints */}
            {projects.map((project, index) => {
              // The animation ranges (start, end, start + 0.2, etc.) remain the same,
              // but they now map to a larger physical scroll distance due to increased scrollHeight.
              const start = index / projects.length;
              const end = (index + 1) / projects.length;
              const isFirst = index === 0;
              const isLast = index === projects.length - 1;

              // Conditional Opacity Transform
              let opacityInputRange = [start, start + 0.2, end - 0.2, end];
              let opacityOutputRange = [0, 1, 1, 0]; // Default fade in/out

              if (isFirst) {
                // First card: Start visible, only fade out
                opacityInputRange = [start, end - 0.2, end]; // Adjust input points
                opacityOutputRange = [1, 1, 0];          // Start at 1, fade out
              } else if (isLast) {
                // Last card: Fade in, stay visible
                opacityInputRange = [start, start + 0.2, end]; // Adjust input points
                opacityOutputRange = [0, 1, 1];           // Fade in, stay at 1
              }

              const opacity = useTransform(scrollYProgress, opacityInputRange, opacityOutputRange);

              // Conditional Y Transform for first card (optional: remove slide-in)
              const yInputRange = isFirst ? [start, end] : [start, start + 0.2];
              const yOutputRange = isFirst ? [0, 0] : [100, 0]; // Start at y=0 if first card
              const y = useTransform(scrollYProgress, yInputRange, yOutputRange);

              // Conditional Scale Transform for first card (optional: remove scale-in)
              const scaleInputRange = isFirst ? [start, end - 0.2, end] : [start, start + 0.2, end - 0.2, end];
              const scaleOutputRange = isFirst ? [1, 1, 0.9] : [0.9, 1, 1, 0.9]; // Start at scale=1 if first card
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
                    cursor: opacity > 0.5 ? 'pointer' : 'default'
                  }}
                  className="overflow-hidden rounded-xl drop-shadow-2xl bg-gray-900/80"
                  onClick={() => {
                    if (opacity.get() > 0.5) {
                      window.open(project.link, '_blank');
                    }
                  }}
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