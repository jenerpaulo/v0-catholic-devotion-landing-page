"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"

const posts = {
  en: [
    {
      id: 1,
      title: "The Importance of Latin Mass",
      excerpt: "Understanding why the traditional Latin Mass is essential to Catholic worship and spirituality.",
      image: "/traditional-latin-mass-priest-altar.jpg",
      author: "Fr. John Smith",
      date: "March 14, 2024",
    },
    {
      id: 2,
      title: "Sede Vacante: Understanding the Position",
      excerpt: "A comprehensive explanation of the Sedevacantist position and its theological foundations.",
      image: "/empty-papal-throne-vatican.jpg",
      author: "Fr. Michael Jones",
      date: "March 10, 2024",
    },
    {
      id: 3,
      title: "Traditional Catholic Family Life",
      excerpt: "Guidance on raising children in the traditional Catholic faith in modern times.",
      image: "/traditional-catholic-family-prayer.jpg",
      author: "Fr. Thomas Brown",
      date: "March 5, 2024",
    },
    {
      id: 4,
      title: "The Sacred Liturgy",
      excerpt: "Exploring the richness and beauty of traditional Catholic liturgical worship.",
      image: "/ornate-catholic-altar-traditional-mass.jpg",
      author: "Fr. David Wilson",
      date: "February 28, 2024",
    },
    {
      id: 5,
      title: "Defending the Faith",
      excerpt: "Apologetics and defense of traditional Catholic teaching against modernist errors.",
      image: "/ancient-catholic-theological-books.jpg",
      author: "Fr. Robert Taylor",
      date: "February 25, 2024",
    },
    {
      id: 6,
      title: "Marian Devotion",
      excerpt: "The role of devotion to Our Lady in the traditional Catholic spiritual life.",
      image: "/beautiful-virgin-mary-statue-church.jpg",
      author: "Fr. James Anderson",
      date: "February 20, 2024",
    },
  ],
  pt: [
    {
      id: 1,
      title: "A Importância da Missa Latina",
      excerpt: "Compreendendo por que a Missa Latina tradicional é essencial para o culto e espiritualidade católica.",
      image: "/traditional-latin-mass-priest-altar.jpg",
      author: "Pe. João Silva",
      date: "14 de março de 2024",
    },
    {
      id: 2,
      title: "Sede Vacante: Compreendendo a Posição",
      excerpt: "Uma explicação abrangente da posição sedevacantista e seus fundamentos teológicos.",
      image: "/empty-papal-throne-vatican.jpg",
      author: "Pe. Miguel Santos",
      date: "10 de março de 2024",
    },
    {
      id: 3,
      title: "Vida Familiar Católica Tradicional",
      excerpt: "Orientação sobre criar filhos na fé católica tradicional nos tempos modernos.",
      image: "/traditional-catholic-family-prayer.jpg",
      author: "Pe. Tomás Costa",
      date: "5 de março de 2024",
    },
    {
      id: 4,
      title: "A Sagrada Liturgia",
      excerpt: "Explorando a riqueza e beleza do culto litúrgico católico tradicional.",
      image: "/ornate-catholic-altar-traditional-mass.jpg",
      author: "Pe. David Almeida",
      date: "28 de fevereiro de 2024",
    },
    {
      id: 5,
      title: "Defendendo a Fé",
      excerpt: "Apologética e defesa do ensino católico tradicional contra erros modernistas.",
      image: "/ancient-catholic-theological-books.jpg",
      author: "Pe. Roberto Ferreira",
      date: "25 de fevereiro de 2024",
    },
    {
      id: 6,
      title: "Devoção Mariana",
      excerpt: "O papel da devoção a Nossa Senhora na vida espiritual católica tradicional.",
      image: "/beautiful-virgin-mary-statue-church.jpg",
      author: "Pe. Tiago Oliveira",
      date: "20 de fevereiro de 2024",
    },
  ],
}

export function PostsSlider() {
  const { language, t } = useLanguage()
  const content = posts[language]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground mb-4 text-balance">
            {t.postsTitle}
          </h2>
          <p className="text-lg text-muted-foreground font-serif">{t.postsSubtitle}</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 px-4 overflow-hidden" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate content for seamless loop */}
        {[...content, ...content].map((post, index) => (
          <Card
            key={`${post.id}-${index}`}
            className="flex-shrink-0 w-[350px] hover:shadow-lg transition-shadow bg-card border-border"
          >
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-sans font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground font-serif text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-serif">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <button className="mt-4 text-primary hover:text-primary/80 font-serif text-sm font-semibold">
                  Read Article →
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
