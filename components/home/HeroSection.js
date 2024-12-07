// app/components/HeroSection.jsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ChevronDown } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full bg-gradient-to-b from-blue-100 to-white flex items-center justify-center relative">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
              {/* Updated Hero Card */}
              <div className="hero-card">
                <div className="hero-content text-center max-w-3xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-800 tracking-tight leading-tight">
                    Profesyonel <br />
                    <span className="text-blue-600">Psikolojik Destek</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Uzman kadromuzla yanınızdayız
                  </p>
                  {/* Removed CTA Button */}
                  {/* <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Randevu Al
                  </button> */}
                </div>
              </div>
              
              {/* Scroll Down Arrow */}
              <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
                onClick={scrollToNext}
              >
                <div className="flex flex-col items-center">
                  <ChevronDown size={24} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSection