'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-blue-500">Ana Sayfa</Link>
            <Link href="#about" className="hover:text-blue-500">Hakkımızda</Link>
            <Link href="#services" className="hover:text-blue-500">Hizmetlerimiz</Link>
            <Link href="#experts" className="hover:text-blue-500">Uzmanlarımız</Link>
            <Link href="#contact" className="hover:text-blue-500">İletişim</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header