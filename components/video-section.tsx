"use client"

import { useLanguage } from "@/lib/language-context"

const videos = {
  en: [
    {
      id: 1,
      title: "Sedevacantist - Message of Faith",
      src: "https://www.youtube.com/embed/Nm6onv77qOE?si=F9i8SPPBregMuw8d",
    },
    {
      id: 2,
      title: "Our Global Mission",
      src: "https://www.youtube.com/embed/_urhsh_MUh0?si=dcnQQpV5NcVBkbws",
    },
    {
      id: 3,
      title: "Tradition and Continuity",
      src: "https://www.youtube.com/embed/JbjVSLNVMPM?si=6694_wtqwWzVqJWV",
    },
  ],
  pt: [
    {
      id: 1,
      title: "Sedevacante - Mensagem de Fé",
      src: "https://www.youtube.com/embed/Nm6onv77qOE?si=F9i8SPPBregMuw8d",
    },
    {
      id: 2,
      title: "Nossa Missão Global",
      src: "https://www.youtube.com/embed/_urhsh_MUh0?si=dcnQQpV5NcVBkbws",
    },
    {
      id: 3,
      title: "Tradição e Continuidade",
      src: "https://www.youtube.com/embed/JbjVSLNVMPM?si=6694_wtqwWzVqJWV",
    },
  ],
}

export function VideoSection() {
  const { language, t } = useLanguage()
  const content = videos[language]

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground text-balance">{t.videosTitle}</h2>
            <p className="text-lg text-muted-foreground font-serif">{t.videosSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {content.map((video) => (
              <div key={video.id} className="space-y-3">
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <h3 className="text-center font-serif text-foreground text-sm">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
