'use client'
import Image from 'next/image'
import { experts } from '@/data/experts'

const ExpertsSection = () => {
  return (
    <section id="experts" className="section-padding bg-gradient-to-b from-white to-blue-100 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Uzman Kadromuz</h2>
          <p className="section-subtitle">
            Alanında deneyimli uzman psikologlarımızla tanışın
          </p>
        </div>

        <div className="flex justify-evenly flex-wrap gap-8">
          {experts.map((expert) => (
            <div key={expert.id} className="expert-card w-full max-w-[400px]">
              <div className="relative h-[300px] z-[1]">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              
              <div className="p-6 z-[1] relative bg-white">
                <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
                <p className="text-primary font-medium mb-3">{expert.title}</p>
                <p className="text-gray-600 mb-4">{expert.description}</p>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Uzmanlık Alanları:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {expert.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertsSection