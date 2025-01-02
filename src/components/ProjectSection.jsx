'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useEffect } from 'react';
import { Pagination } from 'swiper/modules';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using Next.js and Tailwind CSS, showcasing my skills and projects.',
    image: '/assets/portfolio.png',
    link: 'https://ayushkushwaha.vercel.app/',
  },
  {
    title: 'MOVIX',
    description: 'A movie search app using Redux.js, React.js, and SASS with dynamic features.',
    image: '/assets/movix.png',
    link: 'https://ayushmovix.vercel.app/',
  },
  {
    title: 'RemoveQ',
    description: 'An innovative image optimization service enhancing website performance.',
    image: '/assets/removeq.png',
    link: 'https://removeq.com/',
  },
];

export default function ProjectSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.pagination.init();
      swiperRef.current.swiper.pagination.update();
    }
  }, []);

  return (
    <section className="py-16 relative top-[180px]">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-light text-gray-800">
          Crafting Digital Excellence
        </h2>
        <p className="text-lg text-gray-400 mt-2">From concept to code</p>
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1.2}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        className="max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-[27rem] overflow-hidden rounded-lg drop-shadow-lg">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-orange-500 rounded-lg font-bold hover:bg-orange-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination items-center justify-center mt-8"></div>
    </section>
  );
}
