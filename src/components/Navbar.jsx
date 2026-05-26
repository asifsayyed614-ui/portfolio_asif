'use client'

import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Education', 'Certificates', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.4 }
    )
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase())
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="font-display font-800 text-xl tracking-tight">
          <span className="text-bright">Asif</span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 ${
                active === link.toLowerCase()
                  ? 'text-accent bg-accent/10'
                  : 'text-muted hover:text-text'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 font-mono text-xs tracking-widest uppercase border border-accent text-accent px-4 py-2 rounded-full hover:bg-accent hover:text-bg transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 py-4 flex flex-col gap-2">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-3 rounded-lg transition-all ${
                active === link.toLowerCase()
                  ? 'text-accent bg-accent/10'
                  : 'text-muted hover:text-text hover:bg-card'
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 font-mono text-xs tracking-widest uppercase border border-accent text-accent px-4 py-3 rounded-lg text-center hover:bg-accent hover:text-bg transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
