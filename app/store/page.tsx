import { Hero } from "@/components/hero"
import { ProductSlideshow } from "@/components/product-slideshow"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function StorePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductSlideshow />
      <BlogSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
