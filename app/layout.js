import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Psikoloji Kliniği | Profesyonel Psikolojik Destek',
  description: 'Uzman psikolog kadromuzla bireysel terapi, çift terapisi, aile danışmanlığı ve daha fazlası için yanınızdayız.',
  keywords: ['psikoloji', 'terapi', 'psikolog', 'danışmanlık', 'mental sağlık'],
  authors: [{ name: 'Klinik Adı' }],
  creator: 'Klinik Adı',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.websitesi.com',
    site_name: 'Psikoloji Kliniği',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Psikoloji Kliniği',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className={`min-h-screen flex flex-col ${inter.className}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}