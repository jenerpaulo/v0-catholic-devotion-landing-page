import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Logo Sedevacante" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-sans font-light">Sedevacante</span>
            </div>
            <p className="text-primary-foreground/80 font-serif leading-relaxed max-w-md">
              Preservando a tradição autêntica da Igreja Católica Apostólica Romana. Um caminho de fé, esperança e amor
              através de comunidades espirituais no mundo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-serif">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/#localizacoes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Localizações
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Loja
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 font-serif text-primary-foreground/80">
              <li>contato@sedevacante.com.br</li>
              <li>(12) 98840-6441</li>
              <li>Segunda a Sexta</li>
              <li>9h às 18h</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 font-serif text-sm">
              © 2025 Sedevacante. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 font-serif text-sm">
              <Link
                href="/privacidade"
                className="text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
