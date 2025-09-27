"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Terço do Sagrado Coração",
    price: "R$ 45,00",
    image: "/beautiful-catholic-rosary-with-sacred-heart-medal.jpg",
    description: "Terço artesanal com medalha do Sagrado Coração de Jesus",
  },
  {
    id: 2,
    name: "Livro de Orações Marianas",
    price: "R$ 32,00",
    image: "/elegant-catholic-prayer-book-with-virgin-mary-cove.jpg",
    description: "Coletânea das mais belas orações à Nossa Senhora",
  },
  {
    id: 3,
    name: "Escapulário do Carmo",
    price: "R$ 28,00",
    image: "/traditional-brown-scapular-of-our-lady-of-mount-ca.jpg",
    description: "Escapulário tradicional de Nossa Senhora do Carmo",
  },
  {
    id: 4,
    name: "Imagem de São José",
    price: "R$ 65,00",
    image: "/placeholder-9he95.png",
    description: "Imagem artesanal de São José com o Menino Jesus",
  },
  {
    id: 5,
    name: "Novena de Santa Teresinha",
    price: "R$ 18,00",
    image: "/delicate-prayer-booklet-with-saint-therese-of-lisi.jpg",
    description: "Novena completa de Santa Teresinha do Menino Jesus",
  },
]

export function ProductSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const getVisibleProducts = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length
      visible.push(products[index])
    }
    return visible
  }

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground mb-4 text-balance">
            Produtos Espirituais
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto leading-relaxed">
            Descubra nossa seleção cuidadosa de artigos religiosos que acompanham sua jornada de fé
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleProducts().map((product, index) => (
              <Card
                key={`${product.id}-${currentIndex}-${index}`}
                className="group hover:shadow-lg transition-all duration-300 bg-card border-border/50"
              >
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-secondary/20">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground font-serif text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-sans font-light text-accent">{product.price}</span>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif rounded-full"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-border hover:bg-secondary bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-border hover:bg-secondary bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
