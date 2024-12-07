'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: '/images/about/clinic.jpg',
      alt: 'Kliniğimizin ana görünümü',
      description: 'Modern ve ferah ana terapi merkezimiz'
    },
    {
      src: '/images/about/clinic-2.jpg',
      alt: 'Terapi odamız',
      description: 'Konforlu ve huzurlu terapi odalarımız'
    },
    {
      src: '/images/about/clinic-3.jpg',
      alt: 'Bekleme salonumuz',
      description: 'Rahat bekleme salonumuz'
    }
  ];

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section id="about" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-100" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Biz Kimiz?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sağlıklı bir yaşam için profesyonel destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Yeni Kart Tasarımı */}
          <div className="custom-card">
            <div className="relative h-[400px] w-full">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-4 rounded-b-lg">
                <p className="text-center">{images[currentImageIndex].description}</p>
              </div>
            
              {/* Yön tuşları */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19l-7-7 7-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Sağ taraf - İçerik */}
          <div className="about-content-card space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              Profesyonel ve Güvenilir Psikolojik Destek
            </h3>
            
            <p className="text-gray-600">
              2010 yılından bu yana, alanında uzman psikolog kadromuzla 
              binlerce danışanımıza hizmet verdik. Modern ve huzurlu klinik 
              ortamımızda, her yaştan danışanımıza özel yaklaşımlar sunuyoruz.
            </p>

            <p className="text-gray-600">
              Amacımız, bireylerin ruhsal sağlığını korumak ve geliştirmek için 
              bilimsel temelli yaklaşımlar sunarak, yaşam kalitelerini artırmaktır.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Neden Biz?</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Alanında uzman psikolog kadrosu</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Modern ve konforlu klinik ortamı</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Bilimsel temelli yaklaşım</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Esnek randevu sistemi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection