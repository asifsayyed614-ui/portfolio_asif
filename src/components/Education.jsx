export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-accent2"></div>
          <span className="font-mono text-xs text-accent2 tracking-widest uppercase">04 / Education</span>
        </div>
        <h2 className="reveal font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-bright mb-8 sm:mb-12" style={{ transitionDelay: '0.1s' }}>
          Academic <span className="grad-text2">Background</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          <div className="reveal neon-border card-hover rounded-xl p-5 sm:p-7 bg-card" style={{ transitionDelay: '0.1s' }}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center text-xl sm:text-2xl">🎓</div>
              <span className="font-mono text-xs text-accent border border-accent/30 bg-accent/10 px-2 py-1 rounded-full">Current</span>
            </div>
            <div className="font-mono text-xs text-muted mb-2">2025 — Present</div>
            <h3 className="font-display font-700 text-base sm:text-lg text-bright mb-1">B.Voc in AI & Machine Learning</h3>
            <div className="font-body text-sm text-accent mb-3 font-600">Nexcore Alliance</div>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-4">
              ML algorithms, neural networks, NLP, computer vision, and real-world AI application development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['B.Voc AIDS', 'ML', 'Neural Networks'].map((tag, i) => (
                <span key={i} className="font-mono text-xs bg-bg border border-border text-muted px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal card-hover border border-border rounded-xl p-5 sm:p-7 bg-card" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent2/10 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">💻</div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs text-muted mb-2">Self-Directed — Ongoing</div>
                <h3 className="font-display font-700 text-base sm:text-lg text-bright mb-1">Full Stack Web Development & UI/UX Design</h3>
                <div className="font-body text-sm text-accent2 mb-3 font-600">Online Platforms · Personal Projects</div>
                <p className="font-body text-xs sm:text-sm text-muted leading-relaxed mb-4">
                  Continuously building real-world applications — deepening expertise in MERN, Next.js, Tailwind, and Figma.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MERN Stack', 'React', 'Next.js', 'Figma', 'Self-Taught'].map((tag, i) => (
                    <span
                      key={i}
                      className={`font-mono text-xs px-2 py-0.5 rounded ${
                        i === 4 ? 'bg-accent2/10 border-accent2/30 text-accent2 border' : 'bg-bg border-border text-muted border'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
