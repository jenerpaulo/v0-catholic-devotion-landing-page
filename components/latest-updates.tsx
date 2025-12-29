"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const updates = {
  en: {
    featured: {
      label: "Official Statement",
      title: "Declaration on the State of the Church",
      description:
        "Our bishops have released an important declaration regarding the current crisis in the Church and the necessity of maintaining true apostolic tradition.",
      date: "March 15, 2024",
      image: "/images/celebracao.jpeg",
    },
    side: [
      {
        label: "News",
        title: "New Chapel Opening in São Paulo",
        description: "A new traditional Latin Mass chapel will open next month in the São Paulo community.",
        date: "March 12, 2024",
        image: "/images/encontro-bispo.jpeg",
      },
      {
        label: "Highlight",
        title: "Annual Conference Announced",
        description: "Join us for our annual conference on traditional Catholic theology this summer.",
        date: "March 10, 2024",
        image: "/images/bispocoz.webp",
      },
      {
        label: "News",
        title: "Catechism Classes Expansion",
        description: "We are expanding our catechism program to include online classes for remote communities.",
        date: "March 8, 2024",
        image: "/images/bispo-celeb.webp",
      },
    ],
  },
  pt: {
    featured: {
      label: "Especial",
      title: "Ordenação Sacerdotal",
      description:
        "No dia 20 de dezembro, nosso caríssimo Irmão Reverendo Frei João Maria Vianney, Vigário Conventual, foi ordenado sacerdote",
      date: "15 de março de 2024",
      image: "/images/celebracao.jpeg",
    },
    side: [
      {
        label: "Notícias",
        title: "Chegada do Rev. Pe. Leonardo Holtz e do Rev. Pe. Gabriel Spínola.",
        description: "Padres Leonardo Holtz e Gabriel Spínola vieram por ocasião das Ordenações que em breve acontecerão entre nós",
        date: "12 de março de 2024",
        image: "/images/encontro-bispo.jpeg",
      },
      {
        label: "Destaque",
        title: "Um Bispo na Cozinha!",
        description: "Junte-se a nós para nossa conferência anual sobre teologia católica tradicional neste verão.",
        date: "10 de março de 2024",
        image: "/images/bispocoz.webp",
      },
      {
        label: "Notícias",
        title: "Outras Duas Ordens Menores",
        description:
          "No dia 17 de dezembro de 2025, nossos caríssimos Irmãos — Frei Pacífico Maria, Frei João Maria Vianney e Frei Dimas Maria — receberam as Ordens Menores de Exorcista e Acólito.",
        date: "8 de março de 2024",
        image: "/images/bispo-celeb.webp",
      },
    ],
  },
}

export function LatestUpdates() {
  const { language, t } = useLanguage()
  const content = updates[language]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground mb-4 text-balance">
            {t.latestUpdatesTitle}
          </h2>
          <p className="text-lg text-muted-foreground font-serif">{t.latestUpdatesSubtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Update - Large Card */}
          <Card className="lg:row-span-3 hover:shadow-xl transition-shadow bg-card border-border max-h-[500px]">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden rounded-t-lg flex-shrink-0">
                <Image
                  src={content.featured.image || "/placeholder.svg"}
                  alt={content.featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow overflow-hidden">
                <Badge className="w-fit mb-3 bg-accent text-accent-foreground font-serif">
                  {content.featured.label}
                </Badge>
                <h3 className="text-2xl font-sans font-semibold text-foreground mb-3 text-balance">
                  {content.featured.title}
                </h3>
                <p className="text-muted-foreground font-serif leading-relaxed mb-4 flex-grow">
                  {content.featured.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-muted-foreground font-serif">{content.featured.date}</span>
                  <button className="text-primary hover:text-primary/80 font-serif text-sm font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Updates - Smaller Cards in Scrollable Container */}
          <div className="max-h-[500px] overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-background">
            {content.side.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Badge
                        className="w-fit mb-2 font-serif"
                        variant={update.label === "Highlight" || update.label === "Destaque" ? "default" : "secondary"}
                      >
                        {update.label}
                      </Badge>
                      <h3 className="text-lg font-sans font-semibold text-foreground mb-2">{update.title}</h3>
                      <p className="text-muted-foreground font-serif text-sm leading-relaxed mb-3">
                        {update.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-serif">{update.date}</span>
                        <button className="text-primary hover:text-primary/80 font-serif text-xs font-semibold">
                          Read More →
                        </button>
                      </div>
                    </div>
                    {update.image && (
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={update.image || "/placeholder.svg"}
                          alt={update.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
