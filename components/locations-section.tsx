"use client"

export function LocationsSection() {
  const locations = [
    {
      id: 1,
      name: "São Paulo",
      country: "Brasil",
      address: "Rua da Fé, 123 - São Paulo, SP",
      email: "sp@sedevacante.com",
      whatsapp: "5511987654321",
      priest: "Pe. João da Cruz",
      image: "/traditional-catholic-chapel-interior-brazil.jpg",
    },
    {
      id: 2,
      name: "Roma",
      country: "Itália",
      address: "Via Apostolica, 456 - Roma, RM",
      email: "roma@sedevacante.com",
      whatsapp: "393881234567",
      priest: "Pe. Pietro Romanelli",
      image: "/historic-catholic-basilica-rome-italy.jpg",
    },
    {
      id: 3,
      name: "Buenos Aires",
      country: "Argentina",
      address: "Avenida del Rosario, 789 - Buenos Aires",
      email: "ba@sedevacante.com",
      whatsapp: "541142567890",
      priest: "Pe. Carlos María",
      image: "/colonial-catholic-church-argentina.jpg",
    },
    {
      id: 4,
      name: "Lisboa",
      country: "Portugal",
      address: "Praça da Graça, 321 - Lisboa",
      email: "lisboa@sedevacante.com",
      whatsapp: "351918765432",
      priest: "Pe. António Silva",
      image: "/portuguese-catholic-monastery-church.jpg",
    },
    {
      id: 5,
      name: "México City",
      country: "México",
      address: "Avenida Sagrada, 654 - CDMX",
      email: "mexico@sedevacante.com",
      whatsapp: "525512345678",
      priest: "Pe. Miguel Ángel García",
      image: "/mexican-colonial-catholic-church.jpg",
    },
    {
      id: 6,
      name: "Paris",
      country: "França",
      address: "Rue de la Cathédrale, 987 - Paris",
      email: "paris@sedevacante.com",
      whatsapp: "33123456789",
      priest: "Pe. François Dupont",
      image: "/french-gothic-catholic-cathedral-paris.jpg",
    },
    {
      id: 7,
      name: "Varsóvia",
      country: "Polônia",
      address: "Ulica Wiary, 147 - Varsóvia",
      email: "varsovia@sedevacante.com",
      whatsapp: "48223456789",
      priest: "Pe. Stanisław Kowalski",
      image: "/polish-catholic-basilica-church.jpg",
    },
    {
      id: 8,
      name: "Madrid",
      country: "Espanha",
      address: "Calle del Apostol, 258 - Madrid",
      email: "madrid@sedevacante.com",
      whatsapp: "34912345678",
      priest: "Pe. Javier Ruiz",
      image: "/spanish-catholic-church-madrid.jpg",
    },
    {
      id: 9,
      name: "Viena",
      country: "Áustria",
      address: "Straße des Glaubens, 369 - Viena",
      email: "vienna@sedevacante.com",
      whatsapp: "43123456789",
      priest: "Pe. Joseph Müller",
      image: "/austrian-gothic-catholic-cathedral.jpg",
    },
    {
      id: 10,
      name: "Singapura",
      country: "Singapura",
      address: "Catholic Street, 741 - Singapura",
      email: "singapore@sedevacante.com",
      whatsapp: "6581234567",
      priest: "Pe. Thomas Tan",
      image: "/modern-catholic-church-singapore.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-sans font-light text-foreground text-balance">
            Nossas Comunidades Espirituais
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Presença da verdadeira fé em 10 localizações ao redor do mundo
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video bg-secondary/30 overflow-hidden relative">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-sans font-semibold text-foreground">{location.name}</h3>
                  <p className="text-sm text-muted-foreground font-serif">{location.country}</p>
                </div>

                <div className="space-y-2 text-sm font-serif text-muted-foreground">
                  <p className="line-clamp-2">{location.address}</p>
                  <p className="font-semibold text-foreground">{location.priest}</p>
                </div>

                {/* Contact Links */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={`mailto:${location.email}`}
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-serif rounded transition-colors"
                  >
                    Email
                  </a>
                  <a
                    href={`https://wa.me/${location.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-green-100 hover:bg-green-200 text-green-700 text-xs font-serif rounded transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
