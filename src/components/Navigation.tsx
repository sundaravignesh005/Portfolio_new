import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Work', 'Stack', 'Experience', 'Contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'backdrop-blur-lg' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(9, 9, 11, 0.8)' : 'transparent',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-mono-custom text-sm tracking-widest">
          SV<span className="text-gold">.</span>DEV
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted hover:text-text transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hire Button */}
        <a
          href="#contact"
          className="bg-gold hover:bg-gold-hover text-bg px-6 py-2 rounded font-medium text-sm inline-flex items-center gap-2 transition-all"
        >
          Hire me
          <ArrowUpRight size={16} />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
