'use client'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const OfficeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  Paylaşımlı Ofis İmkanı
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Modern ve profesyonel ofis ortamımızda, psikolog ve 
                  danışmanlar için paylaşımlı ofis imkanı sunuyoruz. 
                  Tam donanımlı terapi odalarımız, bekleme salonu ve 
                  diğer imkanlarımızla sizleri ağırlamaktan mutluluk duyarız.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Tam donanımlı terapi odaları</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Profesyonel sekreterya hizmeti</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Ücretsiz Wi-Fi ve içecek servisi</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/office/shared-office.jpg"
                  alt="Paylaşımlı Ofis"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeSection