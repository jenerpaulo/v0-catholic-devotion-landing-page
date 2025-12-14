"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function DarkHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/traditional-catholic-dark-architecture-church-inte.jpg"
          alt="Traditional Catholic Church Architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 flex items-center justify-center">
        <div className="text-center max-w-3xl space-y-8">
          {/* Cross symbol */}
          <div className="flex justify-center mb-6">
            <div className="text-6xl text-accent">✝</div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-sans font-light text-white leading-tight text-balance">
              {t.heroTitle}
            </h1>
            <p className="text-2xl lg:text-3xl text-amber-100 font-serif leading-relaxed">{t.heroTagline}</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg lg:text-xl text-gray-200 font-serif leading-relaxed max-w-2xl mx-auto">
              {t.heroDescription}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black font-serif px-8 py-3 rounded-lg text-base font-semibold"
              >
                {t.heroButton1}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/50 hover:bg-white/10 text-white font-serif px-8 py-3 rounded-lg text-base bg-transparent"
              >
                {t.heroButton2}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white text-sm font-serif">{t.heroScroll}</div>
        <div className="text-white mt-2">↓</div>
      </div>
    </section>
  )
}
