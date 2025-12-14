"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const downloadables = {
  en: [
    {
      id: 1,
      title: "Traditional Catholic Catechism",
      description: "Complete catechism based on the Council of Trent teachings",
      type: "PDF",
      size: "2.5 MB",
      pages: 156,
    },
    {
      id: 2,
      title: "Latin Mass Missal",
      description: "Complete ordinary and propers for the Traditional Latin Mass",
      type: "PDF",
      size: "4.8 MB",
      pages: 342,
    },
    {
      id: 3,
      title: "Sedevacantism Explained",
      description: "Theological treatise on the Sedevacantist position",
      type: "eBook",
      size: "1.2 MB",
      pages: 89,
    },
    {
      id: 4,
      title: "Traditional Prayer Book",
      description: "Collection of traditional Catholic prayers and devotions",
      type: "PDF",
      size: "3.1 MB",
      pages: 198,
    },
    {
      id: 5,
      title: "Lives of the Saints",
      description: "Hagiography of traditional Catholic saints",
      type: "eBook",
      size: "5.6 MB",
      pages: 423,
    },
    {
      id: 6,
      title: "Liturgical Calendar",
      description: "Traditional Roman Catholic liturgical calendar",
      type: "PDF",
      size: "0.8 MB",
      pages: 24,
    },
  ],
  pt: [
    {
      id: 1,
      title: "Catecismo Católico Tradicional",
      description: "Catecismo completo baseado nos ensinamentos do Concílio de Trento",
      type: "PDF",
      size: "2.5 MB",
      pages: 156,
    },
    {
      id: 2,
      title: "Missal da Missa Latina",
      description: "Ordinário e próprios completos para a Missa Latina Tradicional",
      type: "PDF",
      size: "4.8 MB",
      pages: 342,
    },
    {
      id: 3,
      title: "Sedevacantismo Explicado",
      description: "Tratado teológico sobre a posição sedevacantista",
      type: "eBook",
      size: "1.2 MB",
      pages: 89,
    },
    {
      id: 4,
      title: "Livro de Orações Tradicional",
      description: "Coletânea de orações e devoções católicas tradicionais",
      type: "PDF",
      size: "3.1 MB",
      pages: 198,
    },
    {
      id: 5,
      title: "Vidas dos Santos",
      description: "Hagiografia dos santos católicos tradicionais",
      type: "eBook",
      size: "5.6 MB",
      pages: 423,
    },
    {
      id: 6,
      title: "Calendário Litúrgico",
      description: "Calendário litúrgico católico romano tradicional",
      type: "PDF",
      size: "0.8 MB",
      pages: 24,
    },
  ],
}

export function DownloadablesSection() {
  const { language, t } = useLanguage()
  const content = downloadables[language]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground mb-4 text-balance">
            {t.downloadablesTitle}
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">{t.downloadablesSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-sans font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground font-serif">
                      {item.type} • {item.pages} pages • {item.size}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground font-serif text-sm leading-relaxed mb-4">{item.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif gap-2">
                  <Download className="w-4 h-4" />
                  {t.downloadButton}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
