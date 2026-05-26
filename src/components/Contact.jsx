export default function Contact() {
  const contacts = [
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-blue-400">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn', value: 'sayyed-asif-106b9b3a8', link: 'https://www.linkedin.com/in/sayyed-asif-106b9b3a8', color: 'blue',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-white">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub', value: 'asifsayyed614-ui', link: 'https://github.com/asifsayyed614-ui', color: 'white',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-green-400">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: 'Phone / WhatsApp', value: '+91 9152093633', link: 'tel:+919152093633', color: 'green',
    },
    {
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-pink-400">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email', value: 'asifsayyed614@gmail.com', link: 'mailto:asifsayyed614@gmail.com', color: 'pink',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10 overflow-hidden">
      <div className="blob w-64 h-64 bg-accent opacity-5 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="blob w-48 h-48 bg-accent2 opacity-5 absolute top-1/3 right-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="reveal flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-accent"></div>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">06 / Contact</span>
        </div>
        <h2 className="reveal font-display font-800 text-3xl sm:text-4xl lg:text-6xl text-bright mb-4" style={{ transitionDelay: '0.1s' }}>
          Let's Build
          <br />
          Something <span className="grad-text">Great</span>
        </h2>
        <p className="reveal text-muted font-body text-sm sm:text-base mb-8 sm:mb-12 max-w-lg" style={{ transitionDelay: '0.2s' }}>
          Open to internships, freelance projects, collaborations, and full-time opportunities. I'd love to bring your ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.link}
              target={contact.icon === '💼' || contact.icon === '🐙' ? '_blank' : undefined}
              rel={contact.icon === '💼' || contact.icon === '🐙' ? 'noopener noreferrer' : undefined}
              className="reveal neon-border-hover flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-transparent transition-all duration-300 group"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${contact.color === 'white' ? 'white/5' : `${contact.color}-500/10`} flex items-center justify-center flex-shrink-0 group-hover:bg-${contact.color === 'white' ? 'white/10' : `${contact.color}-500/20`} transition-all`}>
                {contact.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs text-muted tracking-widest uppercase mb-1">{contact.label}</div>
                <div className="font-body text-sm text-bright font-600 truncate">{contact.value}</div>
              </div>
              <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
            </a>
          ))}

          <div className="reveal sm:col-span-2 flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-border bg-card" style={{ transitionDelay: '0.25s' }}>
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-red-400">
     
     
     
     
     
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-1">Location</div>
              <div className="font-body text-sm text-bright font-600">Maharashtra, India</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="font-mono text-xs text-green-400">Open to remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
