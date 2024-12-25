'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { Pagination } from 'swiper/modules';

export default function ProjectSlider() {
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    // Reset all slides
    swiper.slides.forEach((slide) => {
      slide.classList.remove('scale-105', 'z-10', 'opacity-80');
    });

    // Add classes to active and neighboring slides
    const activeIndex = swiper.activeIndex;
    const prevIndex = activeIndex - 1;
    const nextIndex = activeIndex + 1;

    swiper.slides[activeIndex]?.classList.add('scale-105', 'z-10');
    swiper.slides[prevIndex]?.classList.add('opacity-80');
    swiper.slides[nextIndex]?.classList.add('opacity-80');
  };

  return (
    <section className="py-16 relative top-[180px]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-gray-800">
          Crafting Digital Excellence
        </h2>
        <p className="text-lg text-gray-500 mt-2">From concept to code</p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} ${
              index === 1 ? 'w-5 h-5 bg-gray-800' : 'w-3 h-3'
            }"></span>`,
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => handleSlideChange(swiper)}
        className="max-w-5xl mx-auto"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg p-10 text-center shadow-lg transform">
            <div className="mb-6">
            </div>
            <h3 className="text-4xl font-semibold text-white">01</h3>
            <p className="text-white text-sm mt-2">PROJECT</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-amber-100 rounded-lg p-10 text-center shadow-lg transform">
            <div className="mb-6">
            </div>
            <h3 className="text-4xl font-semibold text-gray-800">02</h3>
            <p className="text-gray-500 text-sm mt-2">PROJECT</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-amber-100 rounded-lg p-10 text-center shadow-lg transform">
            <div className="mb-6">
            </div>
            <h3 className="text-4xl font-semibold text-gray-800">03</h3>
            <p className="text-gray-500 text-sm mt-2">PROJECT</p>
          </div>
        </SwiperSlide>
        
        {/* Slide 4 */} 
        <SwiperSlide>
          <div className="bg-amber-100 rounded-lg p-10 text-center shadow-lg transform">
            <div className="mb-6">
            </div>
            <h3 className="text-4xl font-semibold text-gray-800">04</h3>
            <p className="text-gray-500 text-sm mt-2">PROJECT</p>
          </div>
        </SwiperSlide>
        
        {/* Slide 5 */}
        <SwiperSlide>
          <div className="bg-amber-100 rounded-lg p-10 text-center shadow-lg transform">
            <div className="mb-6">
            </div>
            <h3 className="text-4xl font-semibold text-gray-800">05</h3>
            <p className="text-gray-500 text-sm mt-2">PROJECT</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
