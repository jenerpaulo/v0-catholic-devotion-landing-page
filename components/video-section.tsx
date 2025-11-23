"use client"

export function VideoSection() {
  const videos = [
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
  ]

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground text-balance">
              Conheça Nossa Mensagem
            </h2>
            <p className="text-lg text-muted-foreground font-serif">
              Um testemunho autêntico da fé católica tradicional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {videos.map((video) => (
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

          {/* Description */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl mx-auto">
              Descubra a importância da tradição e da continuidade da fé que nos une como comunidade global dedicada à
              preservação dos verdadeiros ensinamentos da Igreja Católica Apostólica Romana.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
