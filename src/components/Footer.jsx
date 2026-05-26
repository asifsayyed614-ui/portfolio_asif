export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="py-10 sm:py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-border">
          <div>
            <div className="font-display font-800 text-2xl tracking-tight mb-3">
              <span className="text-bright">Asif</span>
              <span className="text-accent">.</span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed mb-4">
              Full Stack Developer & UI Designer based in Maharashtra, India. Building digital experiences with code and creativity.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-mono text-xs text-green-400">Available for opportunities</span>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">Navigation</div>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Education', 'Certificates', 'Contact'].map((item, i) => (
                <a key={i} href={`#${item.toLowerCase()}`} className="font-body text-sm text-muted hover:text-accent transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">Get in Touch</div>
            <div className="space-y-3">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
                  label: 'asifsayyed614@gmail.com', link: 'mailto:asifsayyed614@gmail.com',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
                  label: '+91 9152093633', link: 'tel:+919152093633',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                  label: 'LinkedIn', link: 'https://www.linkedin.com/in/sayyed-asif-106b9b3a8',
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
                  label: 'GitHub', link: 'https://github.com/asifsayyed614-ui',
                },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.link}
                  target={i > 1 ? '_blank' : undefined}
                  rel={i > 1 ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-all flex-shrink-0">
                    {contact.icon}
                  </div>
                  <span className="font-body text-sm truncate">{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-muted">
            © 2026 <span className="text-text">Asif Sayyed</span> — Crafted with care & code
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-muted">Made with</span>
            <span className="text-accent3">❤</span>
            <span className="font-mono text-xs text-muted">in Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
