import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import ExpertsSection from '@/components/home/ExpertsSection'
import BlogSection from '@/components/home/BlogSection'
import OfficeSection from '@/components/home/OfficeSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ContactSection from '@/components/home/ContactSection'
import FaqSection from '@/components/home/FaqSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <OfficeSection />
      <FaqSection />
    </>
  )
}