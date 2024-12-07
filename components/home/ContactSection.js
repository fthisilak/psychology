'use client'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white" />
      
      <div className="relative py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              İletişim & Randevu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Randevu almak veya bilgi edinmek için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz. 
              En kısa sürede size geri dönüş yapacağız.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">İletişim Bilgileri</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 mb-2">Adres</h4>
                    <p className="text-gray-600">Örnek Mahallesi, 123. Sokak No:4</p>
                    <p className="text-gray-600">Kadıköy/İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 mb-2">Telefon</h4>
                    <a 
                      href="tel:02161234567" 
                      className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center group"
                    >
                      (0216) 123 45 67
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 mb-2">E-posta</h4>
                    <a 
                      href="mailto:info@klinik.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center group"
                    >
                      info@klinik.com
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="flex items-center mb-8">
                <Clock className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Çalışma Saatleri</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Pazartesi - Cuma</span>
                  <span className="font-medium text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Cumartesi</span>
                  <span className="font-medium text-gray-900">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Pazar</span>
                  <span className="font-medium text-gray-900">Kapalı</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-3">Randevu Bilgilendirmesi</h4>
                <p className="text-gray-600 mb-4">
                  Randevu almak için lütfen telefon numaramızdan bizi arayınız. 
                  Online randevu sistemimiz yakında hizmetinizde olacaktır.
                </p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group">
                  Randevu Al
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection