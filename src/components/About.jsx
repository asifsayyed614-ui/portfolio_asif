export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-accent"></div>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">01 / About</span>
        </div>
        <h2 className="reveal font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-bright mb-8 sm:mb-12" style={{ transitionDelay: '0.1s' }}>
          Who I <span className="grad-text">Am</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="reveal text-muted font-body text-sm sm:text-base leading-relaxed mb-6" style={{ transitionDelay: '0.1s' }}>
              Hey! I'm <span className="text-bright font-600">Asif Sayyed</span> — a passionate Full Stack Developer and UI/UX Designer
              based in Maharashtra, India. Over the past <span className="text-accent font-600">6 months</span>, I've been intensively
              crafting web experiences that blend clean code with thoughtful design.
            </p>
            <p className="reveal text-muted font-body text-sm sm:text-base leading-relaxed mb-8" style={{ transitionDelay: '0.2s' }}>
              Currently pursuing my <span className="text-accent2 font-600">B.Voc in AI & ML</span> at Nexcore Alliance, I operate at the
              intersection of frontend craft, backend architecture, and UI design — always learning, always shipping.
            </p>

            <div className="reveal space-y-3" style={{ transitionDelay: '0.3s' }}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                      <path d="M7 8h2m2 0h6M7 11h4m2 0h4"/>
                    </svg>
                  ),
                  title: 'Full Stack Development', desc: 'MERN · Next.js · REST APIs', badge: '6 mo', color: 'accent',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                    </svg>
                  ),
                  title: 'UI/UX Design', desc: 'Figma · Prototyping · Design Systems', badge: '6 mo', color: 'accent2',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                    </svg>
                  ),
                  title: 'Backend & Databases', desc: 'Node · Express · MongoDB', badge: '4 mo', color: 'green-400',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a7 7 0 0 1 7 7c0 4-3 6-4 8H9c-1-2-4-4-4-8a7 7 0 0 1 7-7z"/><path d="M9 17h6M9.5 21h5"/>
                    </svg>
                  ),
                  title: 'AI & Machine Learning', desc: 'B.Voc AIML · Intel AI Certified', badge: 'Pursuing', color: 'accent3',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="neon-border-hover group flex items-center gap-3 sm:gap-4 bg-card rounded-xl p-3 sm:p-4 border border-border transition-all duration-300 hover:border-transparent"
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-${item.color}/10 text-${item.color} flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-700 text-sm text-bright mb-0.5">{item.title}</div>
                    <div className="font-mono text-xs text-muted">{item.desc}</div>
                  </div>
                  <span className={`font-mono text-xs text-${item.color} border border-${item.color}/30 bg-${item.color}/10 px-2 py-1 rounded-full flex-shrink-0`}>
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="reveal grid grid-cols-3 gap-3 sm:gap-4" style={{ transitionDelay: '0.2s' }}>
              {[
                { num: '6', suffix: 'mo', label: 'Experience', color: 'accent' },
                { num: '6', suffix: '+', label: 'Projects', color: 'accent2' },
                { num: '14', suffix: '+', label: 'Tech Stack', color: 'accent3' },
              ].map((stat, i) => (
                <div key={i} className={`bg-card border border-border rounded-xl p-3 sm:p-5 text-center hover:border-${stat.color}/40 transition-all duration-300`}>
                  <div className={`font-display font-800 text-2xl sm:text-3xl text-${stat.color} mb-1`}>
                    {stat.num}
                    <span className={`text-${stat.color}/60 text-base sm:text-lg`}>{stat.suffix}</span>
                  </div>
                  <div className="font-mono text-xs text-muted tracking-wider uppercase" style={{ fontSize: '0.6rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="tl-container">
                <div className="tl-line"></div>
                {[
                  { date: '2025 — Ongoing', title: 'B.Voc AIML · Nexcore Alliance', desc: 'Expanding into ML, neural networks, computer vision, and NLP while shipping full-stack projects.', color: 'accent2', purple: true },
                  { date: 'Aug 2025 — Ongoing', title: 'Full Stack & MERN Development', desc: 'Built BookMyShow clone, travel website, portfolio clones — deepening React, Node, and Express skills.', color: 'accent' },
                  { date: 'Nov 2025 — Present', title: 'UI/UX Design with Figma', desc: 'Designed mobile apps, dashboards, and e-commerce admin panels — mastering prototyping and design systems.', color: 'accent2' },
                ].map((item, i) => (
                  <div key={i} className="tl-item">
                    <div className={`tl-dot ${item.purple ? 'purple' : ''}`}></div>
                    <div className={`font-mono text-xs text-${item.color} mb-1`}>// {item.date}</div>
                    <div className="font-display font-700 text-sm text-bright mb-1">{item.title}</div>
                    <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal bg-card border border-border rounded-xl p-4 sm:p-5" style={{ transitionDelay: '0.4s' }}>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">// quick_facts.json</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    label: 'Vibe coder',
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
                  },
                  {
                    label: 'Problem solver',
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto" fill="none" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
                  },
                  {
                    label: 'Design-minded',
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto" fill="none" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                  },
                  {
                    label: 'Always learning',
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"/></svg>,
                  },
                  {
                    label: 'AI enthusiast',
                    icon: <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="#818cf8"/></svg>,
                  },
                  {
                    label: 'Based in India',
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto" fill="none" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    ),
                  },
                ].map((fact, i) => (
                  <div key={i} className="bg-bg rounded-lg p-2.5 text-center hover:bg-accent/5 transition-colors">
                    <div className="mb-1">{fact.icon}</div>
                    <div className="font-mono text-muted" style={{ fontSize: '0.55rem' }}>{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
