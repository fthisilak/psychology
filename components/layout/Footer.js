'use client'
import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-900">İletişim</h3>
            <div className="space-y-3 text-blue-800">
              <p>Örnek Mahallesi, 123. Sokak No:4</p>
              <p>Kadıköy/İstanbul</p>
              <p>Tel: (0216) 123 45 67</p>
              <p>E-posta: info@klinik.com</p>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-900">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {['Hakkımızda', 'Hizmetlerimiz', 'Uzmanlarımız', 'İletişim'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-blue-800 hover:text-blue-900 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-900">Çalışma Saatleri</h3>
            <ul className="space-y-3 text-blue-800">
              <li>Pazartesi - Cuma: 09:00 - 18:00</li>
              <li>Cumartesi: 10:00 - 15:00</li>
              <li>Pazar: Kapalı</li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-900">Bizi Takip Edin</h3>
            <div className="flex space-x-5">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-800 hover:text-blue-900 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-800 hover:text-blue-900 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-800 hover:text-blue-900 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright */}
        <div className="border-t border-blue-200 mt-12 pt-8 text-center text-blue-800">
          <p>&copy; {new Date().getFullYear()} Psikoloji Kliniği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer