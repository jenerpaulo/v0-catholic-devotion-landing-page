import { DarkHero } from "@/components/dark-hero"
import { LocationsSection } from "@/components/locations-section"
import { VideoSection } from "@/components/video-section"
import { ProductsShowcase } from "@/components/products-showcase"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <DarkHero />
      <LocationsSection />
      <VideoSection />
      <ProductsShowcase />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
