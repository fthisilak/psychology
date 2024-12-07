'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { services } from '@/data/services'

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null)
  const [centerIndex, setCenterIndex] = useState(1) // Ortadaki kartın indeksi
  
  const getVisibleServices = () => {
    const leftIndex = centerIndex - 1 < 0 ? services.length - 1 : centerIndex - 1
    const rightIndex = centerIndex + 1 >= services.length ? 0 : centerIndex + 1
    return {
      left: services[leftIndex],
      center: services[centerIndex],
      right: services[rightIndex]
    }
  }

  const slideLeft = () => {
    setCenterIndex(prev => prev === 0 ? services.length - 1 : prev - 1)
  }

  const slideRight = () => {
    setCenterIndex(prev => prev === services.length - 1 ? 0 : prev + 1)
  }

  // Otomatik kaydırma için
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const { left, center, right } = getVisibleServices()

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Size özel profesyonel psikolojik destek hizmetlerimiz
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-center gap-8 relative">
            {/* Sol Kart */}
            <div 
              className="service-card h-[400px] w-[300px] bg-white rounded-2xl shadow-lg cursor-pointer transform scale-75 opacity-40 blur-[1px] transition-all duration-500"
              onClick={slideLeft}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-between p-8">
                <div className="w-56 h-56 relative mb-6">
                  <Image
                    src={left.icon}
                    alt={left.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                    {left.title}
                  </h3>
                  <p className="text-gray-600 text-center text-base mb-6">
                    {left.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Orta Kart */}
            <div className="service-card h-[400px] w-[300px] bg-white rounded-2xl shadow-lg z-10">
              <div className="relative w-full h-full flex flex-col items-center justify-between p-8">
                <div className="w-56 h-56 relative mb-6">
                  <Image
                    src={center.icon}
                    alt={center.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                    {center.title}
                  </h3>
                  <p className="text-gray-600 text-center text-base mb-6">
                    {center.shortDescription}
                  </p>
                </div>
                <button 
                  className="bg-blue-500 text-white px-8 py-3 rounded-full text-base
                           hover:bg-blue-600 transition-all duration-300 transform 
                           hover:scale-105 shadow-lg"
                  onClick={() => setActiveService(center)}
                >
                  Detaylı Bilgi
                </button>
              </div>
            </div>

            {/* Sağ Kart */}
            <div 
              className="service-card h-[400px] w-[300px] bg-white rounded-2xl shadow-lg cursor-pointer transform scale-75 opacity-40 blur-[1px] transition-all duration-500"
              onClick={slideRight}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-between p-8">
                <div className="w-56 h-56 relative mb-6">
                  <Image
                    src={right.icon}
                    alt={right.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 text-center text-base mb-6">
                    {right.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gezinme Okları */}
          <button 
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Modal - değişiklik yok */}
        {activeService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="modal-card max-w-2xl w-full p-8 animate-fadeIn bg-white rounded-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative mr-4">
                    <Image
                      src={activeService.icon}
                      alt={activeService.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">{activeService.title}</h3>
                </div>
                <button 
                  onClick={() => setActiveService(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="prose prose-blue max-w-none">
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {activeService.description}
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Faydalar:</h4>
                <ul className="space-y-4 mb-6">
                  {activeService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg 
                        className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-base leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-end mt-8">
                <button
                  className="bg-blue-500 text-white px-8 py-3 rounded-full 
                           hover:bg-blue-600 transition-all duration-300 
                           transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={() => setActiveService(null)}
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesSection