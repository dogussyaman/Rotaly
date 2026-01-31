import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { CategoriesSection } from '@/components/home/categories-section'
import { FeaturedProperties } from '@/components/home/featured-properties'
import { DestinationsSection } from '@/components/home/destinations-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <FeaturedProperties />
        <DestinationsSection />
      </main>
      <Footer />
    </div>
  )
}
