'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/faqs'

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative bg-blue-100">
      <div className="relative py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-blue-700 text-lg">
            Merak ettiklerinize hızlı cevaplar
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              <button
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div 
                  className={`mt-4 text-gray-600 leading-relaxed overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection