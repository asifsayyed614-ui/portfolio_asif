'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const roles = ['Full Stack Developer', 'UI/UX Designer', 'MERN Stack Developer', 'React Developer']

  useEffect(() => {
    const current = roles[roleIndex]

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setTypedText(current.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)

          if (charIndex === current.length) {
            setTimeout(() => setDeleting(true), 1800)
          }
        } else {
          setTypedText(current.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)

          if (charIndex === 0) {
            setDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
          }
        }
      },
      deleting ? 60 : 100
    )

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  useEffect(() => {
    const starsContainer = document.getElementById('stars-container')
    if (!starsContainer) return

    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      const size = Math.random() * 2 + 0.5
      star.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--d:${
        2 + Math.random() * 4
      }s;--delay:-${Math.random() * 4}s;opacity:${Math.random() * 0.5 + 0.1};`
      starsContainer.appendChild(star)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="blob w-96 h-96 bg-accent opacity-5 top-0 right-0 translate-x-1/2 -translate-y-1/4"></div>
      <div className="blob w-80 h-80 bg-accent2 opacity-5 bottom-0 left-0 -translate-x-1/3 translate-y-1/4"></div>
      <div className="blob w-64 h-64 bg-accent3 opacity-3 top-1/2 left-1/2"></div>

      <div id="stars-container" className="absolute inset-0 overflow-hidden pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="reveal-right flex justify-center lg:justify-end order-first lg:order-last mt-0 lg:mt-0" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              <div className="hero-rings hero-ring absolute inset-0 -m-8 hidden lg:block"></div>
              <div
                className="hero-rings hero-ring absolute inset-0 -m-16 opacity-50 hidden lg:block"
                style={{ animationDirection: 'reverse', animationDuration: '40s' }}
              ></div>

              <div className="relative neon-border rounded-2xl p-5 sm:p-6 w-72 sm:w-80 float-badge">
                <div className="absolute -top-3 -right-3 bg-accent text-bg font-mono text-xs font-700 px-3 py-1 rounded-full">
                  MH, India
                </div>

                <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full border-2 border-accent/40 overflow-hidden mb-4 mx-auto ring-4 ring-accent/10 flex items-center justify-center">
                  <img
                    src="/asif.png"
                    alt="Asif Sayyed"
                    className="w-full h-full object-cover object-center mt-0"
                  />
                </div>

                <div className="text-center mb-5">
                  <div className="font-display font-700 text-lg sm:text-xl text-bright mb-1">Asif Sayyed</div>
                  <div className="font-mono text-xs text-accent tracking-widest">Full Stack Dev · UI Designer</div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 bg-bg/50 rounded-lg px-3 py-2">
                    <span className="text-sm flex-shrink-0">🎓</span>
                    <span className="font-body text-xs text-muted">B.Voc AIDS · Nexcore Alliance</span>
                  </div>
                  <div className="flex items-center gap-3 bg-bg/50 rounded-lg px-3 py-2">
                    <span className="text-sm flex-shrink-0">🚀</span>
                    <span className="font-body text-xs text-muted">MERN Stack · Figma · Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 bg-bg/50 rounded-lg px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
                    <span className="font-body text-xs text-muted">Open to Opportunities</span>
                  </div>
                </div>
              </div>

              <div
                className="hero-float-chips absolute -left-10 top-1/4 bg-surface border border-border rounded-full px-3 py-1.5 items-center gap-2 animate-float hidden lg:flex"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="text-xs">⚛️</span>
                <span className="font-mono text-xs text-accent2">React</span>
              </div>
              <div
                className="hero-float-chips absolute -right-8 bottom-1/4 bg-surface border border-border rounded-full px-3 py-1.5 items-center gap-2 animate-float hidden lg:flex"
                style={{ animationDelay: '1.5s' }}
              >
                <span className="text-xs">🎨</span>
                <span className="font-mono text-xs text-accent">Figma</span>
              </div>
              <div
                className="hero-float-chips absolute -left-6 bottom-10 bg-surface border border-border rounded-full px-3 py-1.5 items-center gap-2 animate-float hidden lg:flex"
                style={{ animationDelay: '2.5s' }}
              >
                <span className="text-xs">🟢</span>
                <span className="font-mono text-xs text-green-400">Node</span>
              </div>
            </div>
          </div>

          <div className="order-last lg:order-first">
            <div className="reveal inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-mono text-xs text-muted tracking-widest uppercase">Available for work</span>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h1 className="font-display font-800 leading-none tracking-tight mb-2">
                <span className="hero-heading text-4xl sm:text-5xl lg:text-7xl text-bright block">Crafting</span>
                <span className="hero-heading text-4xl sm:text-5xl lg:text-7xl block">
                  <span className="grad-text glitch" data-text="Digital">
                    Digital
                  </span>
                </span>
                <span className="hero-heading text-4xl sm:text-5xl lg:text-7xl text-bright block">Worlds</span>
              </h1>
            </div>

            <div className="reveal mt-4 mb-6" style={{ transitionDelay: '0.2s' }}>
              <p className="font-mono text-sm text-muted">
                <span className="text-accent">// </span>
                <span className="typing text-text">{typedText}</span>
              </p>
            </div>

            <p className="reveal text-muted font-body text-sm sm:text-base leading-relaxed mb-8 max-w-lg" style={{ transitionDelay: '0.3s' }}>
              Asif Sayyed — developer and designer pursuing <span className="text-accent font-600">B.Voc AIDS</span> at Nexcore Alliance.
              Building modern web experiences with the <span className="text-accent2 font-600">MERN stack</span> and crafting beautiful
              interfaces with <span className="text-accent font-600">Figma</span>.
            </p>

            <div className="reveal flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10" style={{ transitionDelay: '0.4s' }}>
              <a
                href="https://www.linkedin.com/in/sayyed-asif-106b9b3a8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-bg font-display font-700 text-sm px-5 sm:px-6 py-3 hover:bg-transparent hover:text-accent border border-accent transition-all duration-300"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/asifsayyed614-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border text-text font-display font-700 text-sm px-5 sm:px-6 py-3 hover:border-accent2 hover:text-accent2 transition-all duration-300"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            <div className="reveal stats-row flex gap-4 sm:gap-6 pt-6 border-t border-border" style={{ transitionDelay: '0.5s' }}>
              <div>
                <div className="font-display font-800 text-2xl sm:text-3xl text-bright">
                  14<span className="text-accent text-lg">+</span>
                </div>
                <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">Technologies</div>
              </div>
              <div className="w-px bg-border"></div>
              <div>
                <div className="font-display font-800 text-2xl sm:text-3xl text-bright">
                  6<span className="text-accent2 text-lg">+</span>
                </div>
                <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">Projects</div>
              </div>
              <div className="w-px bg-border"></div>
              <div>
                <div className="font-display font-800 text-2xl sm:text-3xl text-bright">
                  9<span className="text-accent3 text-lg">×</span>
                </div>
                <div className="font-mono text-xs text-muted tracking-widest uppercase mt-1">AI Certs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-xs text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent"></div>
      </div>
    </section>
  )
}
