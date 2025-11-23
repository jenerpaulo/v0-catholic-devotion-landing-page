"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
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
  {
    id: 6,
    name: "Vela de Devoção",
    price: "R$ 22,00",
    image: "/elegant-catholic-devotion-candle.jpg",
    description: "Vela artesanal para devoções e oração",
  },
]

export function ProductsShowcase() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground mb-4 text-balance">
            Produtos para Sua Jornada Espiritual
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto leading-relaxed">
            Seleção cuidadosa de artigos religiosos que acompanham sua devoção e fé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 bg-card border-border/50 h-full flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-secondary/20">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground font-serif text-sm mb-4 leading-relaxed">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-sans font-light text-accent">{product.price}</span>
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

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-8 py-3 text-lg rounded-full">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
