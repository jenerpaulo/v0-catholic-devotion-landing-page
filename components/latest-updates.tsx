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
      image: "/papal-tiara-and-traditional-catholic-symbols.jpg",
    },
    side: [
      {
        label: "News",
        title: "New Chapel Opening in São Paulo",
        description: "A new traditional Latin Mass chapel will open next month in the São Paulo community.",
        date: "March 12, 2024",
      },
      {
        label: "Highlight",
        title: "Annual Conference Announced",
        description: "Join us for our annual conference on traditional Catholic theology this summer.",
        date: "March 10, 2024",
      },
      {
        label: "News",
        title: "Catechism Classes Expansion",
        description: "We are expanding our catechism program to include online classes for remote communities.",
        date: "March 8, 2024",
      },
    ],
  },
  pt: {
    featured: {
      label: "Declaração Oficial",
      title: "Declaração sobre o Estado da Igreja",
      description:
        "Nossos bispos divulgaram uma importante declaração sobre a crise atual na Igreja e a necessidade de manter a verdadeira tradição apostólica.",
      date: "15 de março de 2024",
      image: "/papal-tiara-and-traditional-catholic-symbols.jpg",
    },
    side: [
      {
        label: "Notícias",
        title: "Abertura de Nova Capela em São Paulo",
        description: "Uma nova capela de Missa Latina Tradicional abrirá no próximo mês na comunidade de São Paulo.",
        date: "12 de março de 2024",
      },
      {
        label: "Destaque",
        title: "Conferência Anual Anunciada",
        description: "Junte-se a nós para nossa conferência anual sobre teologia católica tradicional neste verão.",
        date: "10 de março de 2024",
      },
      {
        label: "Notícias",
        title: "Expansão das Aulas de Catecismo",
        description:
          "Estamos expandindo nosso programa de catecismo para incluir aulas online para comunidades remotas.",
        date: "8 de março de 2024",
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
          <Card className="lg:row-span-3 hover:shadow-xl transition-shadow bg-card border-border">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={content.featured.image || "/placeholder.svg"}
                  alt={content.featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <Badge className="w-fit mb-3 bg-accent text-accent-foreground font-serif">
                  {content.featured.label}
                </Badge>
                <h3 className="text-2xl font-sans font-semibold text-foreground mb-3 text-balance">
                  {content.featured.title}
                </h3>
                <p className="text-muted-foreground font-serif leading-relaxed mb-4 flex-grow">
                  {content.featured.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-serif">{content.featured.date}</span>
                  <button className="text-primary hover:text-primary/80 font-serif text-sm font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Updates - Smaller Cards */}
          <div className="space-y-6">
            {content.side.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <Badge
                    className="w-fit mb-2 font-serif"
                    variant={update.label === "Highlight" || update.label === "Destaque" ? "default" : "secondary"}
                  >
                    {update.label}
                  </Badge>
                  <h3 className="text-lg font-sans font-semibold text-foreground mb-2">{update.title}</h3>
                  <p className="text-muted-foreground font-serif text-sm leading-relaxed mb-3">{update.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-serif">{update.date}</span>
                    <button className="text-primary hover:text-primary/80 font-serif text-xs font-semibold">
                      Read More →
                    </button>
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
