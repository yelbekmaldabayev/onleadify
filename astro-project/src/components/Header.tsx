import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#about", label: "О нас" },
  { href: "#contact", label: "Контакты" },
]

const Logo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <style>{`
      @keyframes spinClockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinCounterClockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
      .white-orbit {
        transform-origin: 20px 20px;
        animation: spinClockwise 10s linear infinite;
      }
      .purple-orbit {
        transform-origin: 20px 20px;
        animation: spinCounterClockwise 8s linear infinite;
      }
    `}</style>
    <defs>
      <filter id="header-glow-white" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="header-glow-purple" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <linearGradient id="header-logo-gradient" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff"/>
        <stop offset="1" stopColor="#e4e4e7"/>
      </linearGradient>
      <linearGradient id="header-logo-gradient-2" x1="2" y1="20" x2="38" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a78bfa"/>
        <stop offset="0.5" stopColor="#8b5cf6"/>
        <stop offset="1" stopColor="#7c3aed"/>
      </linearGradient>
    </defs>
    {/* White glowing circle - clockwise */}
    <ellipse className="white-orbit" cx="20" cy="20" rx="14" ry="5" stroke="url(#header-logo-gradient)" strokeWidth="2" fill="none" filter="url(#header-glow-white)" transform="rotate(60 20 20)"/>
    {/* Purple ring - counter-clockwise */}
    <ellipse className="purple-orbit" cx="20" cy="20" rx="16" ry="6" stroke="url(#header-logo-gradient-2)" strokeWidth="2.5" fill="none" filter="url(#header-glow-purple)" transform="rotate(-30 20 20)"/>
  </svg>
)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 transition-transform group-hover:scale-105">
              <Logo />
            </div>
            <span className="text-lg font-semibold text-foreground tracking-tight">Onleadify</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Связаться
            </a>
            <a href="/contact" className="inline-flex items-center justify-center h-9 px-4 text-sm bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md transition-colors">
              Обсудить проект
            </a>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Связаться
                </a>
                <a href="/contact" className="inline-flex items-center justify-center h-9 px-4 text-sm bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md transition-colors">
                  Обсудить проект
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
