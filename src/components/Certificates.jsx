export default function Certificates() {
  const certificates = [
    // Anthropic certs
    {
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic', tags: ['AI Fluency', 'Anthropic'], date: '2025', tagColor: 'green',
      certBg: '#7a9a5a', certText: '#1a1a1a', certPartners: 'ANTHROPIC',
      desc: 'Core AI fluency framework covering foundational concepts, capabilities, and responsible use of AI.',
    },
    {
      title: 'Claude 101',
      issuer: 'Anthropic', tags: ['Claude AI', 'Anthropic'], date: '2025', tagColor: 'stone',
      certBg: '#d6cfc4', certText: '#1a1a1a', certPartners: 'ANTHROPIC',
      desc: 'Introduction to Claude — covering prompting, capabilities, and practical applications.',
    },
    {
      title: 'AI Fluency for Educators',
      issuer: 'Anthropic', tags: ['Education', 'Anthropic'], date: '2025', tagColor: 'teal',
      certBg: '#8fbfb0', certText: '#1a1a1a', certPartners: 'ANTHROPIC',
      desc: 'Equipping educators with AI fluency skills to integrate AI tools effectively in teaching.',
    },
    {
      title: 'AI Fluency for Nonprofits',
      issuer: 'Anthropic · GivingTuesday', tags: ['Nonprofits', 'Anthropic'], date: '2025', tagColor: 'emerald',
      certBg: '#8fbfb0', certText: '#1a1a1a', certPartners: 'ANTHROPIC · GIVINGTUESDAY',
      desc: 'Applying AI fluency in nonprofit contexts — leveraging AI for social impact.',
    },
    {
      title: 'AI Fluency for Students',
      issuer: 'Anthropic', tags: ['Students', 'Anthropic'], date: '2025', tagColor: 'slate',
      certBg: '#9fa8c0', certText: '#1a1a1a', certPartners: 'ANTHROPIC',
      desc: 'Student-focused AI fluency program covering responsible and effective use of AI in academics.',
    },
    {
      title: 'Teaching the AI Fluency Framework',
      issuer: 'Anthropic', tags: ['Teaching', 'Anthropic'], date: '2025', tagColor: 'blue',
      certBg: '#5b8fc4', certText: '#1a1a1a', certPartners: 'ANTHROPIC',
      desc: 'Advanced certification for teaching the AI Fluency Framework — pedagogy and curriculum design.',
    },
    // Intel × CBSE certs
    {
      title: 'AI Aware — AI For All',
      issuer: 'Intel · CBSE · Digital India', tags: ['AI Aware', 'Intel'], date: '07/01/2026', tagColor: 'blue',
      isIntel: true, stage: 'AI Aware',
      desc: 'Participated in AI For All program and completed the AI Aware stage under Digital India initiative.',
    },
    {
      title: 'AI Appreciate — AI For All',
      issuer: 'Intel · CBSE · Digital India', tags: ['AI Appreciate', 'Intel'], date: '07/01/2026', tagColor: 'amber',
      isIntel: true, stage: 'AI Appreciate',
      desc: 'Participated in AI For All program and completed the AI Appreciate stage under Digital India initiative.',
    },
    // AISECT cert
    {
      title: 'Yuva AI For ALL - English',
      issuer: 'AISECT Learn · INDIAai', tags: ['Yuva AI', 'AISECT'], date: '27 January 2026', tagColor: 'indigo',
      isAisect: true,
      desc: 'Successfully completed Yuva AI For ALL (English) offered by AISECT LEARN, a unit of AISECT LTD.',
    },
  ]

  const tagClasses = {
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    green: 'bg-green-500/10 border-green-500/30 text-green-400',
    stone: 'bg-stone-500/10 border-stone-400/30 text-stone-400',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    slate: 'bg-slate-500/10 border-slate-400/30 text-slate-400',
    indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
  }

  const IntelCertSVG = ({ stage }) => (
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* White background */}
      <rect width="480" height="300" fill="#ffffff"/>
      {/* Blue diagonal shapes */}
      <polygon points="0,0 80,0 0,120" fill="#1a6bb5" opacity="0.85"/>
      <polygon points="480,300 400,300 480,180" fill="#1a6bb5" opacity="0.85"/>
      <polygon points="0,0 50,0 0,70" fill="#4a9fd4" opacity="0.5"/>
      <polygon points="480,300 450,300 480,250" fill="#4a9fd4" opacity="0.5"/>
      {/* Gold border */}
      <rect x="8" y="8" width="464" height="284" fill="none" stroke="#c8a84b" strokeWidth="3" rx="2"/>
      <rect x="12" y="12" width="456" height="276" fill="none" stroke="#c8a84b" strokeWidth="1" rx="1"/>
      {/* Blue header bar */}
      <rect x="8" y="55" width="464" height="3" fill="#1a6bb5"/>
      {/* intel logo text */}
      <text x="38" y="42" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#0068b5" fontStyle="italic">intel.</text>
      {/* Digital India text */}
      <text x="390" y="35" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#f47920" textAnchor="middle">Digital India</text>
      <text x="390" y="45" fontFamily="Arial, sans-serif" fontSize="6" fill="#555" textAnchor="middle">Power To Empower</text>
      {/* Certificate of Participation */}
      <text x="240" y="90" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#1a1a1a" textAnchor="middle" letterSpacing="1">Certificate of Participation</text>
      <line x1="100" y1="95" x2="380" y2="95" stroke="#1a6bb5" strokeWidth="0.8"/>
      {/* Body text */}
      <text x="50" y="130" fontFamily="Arial, sans-serif" fontSize="9" fill="#333">This is to certify that Dr./Ms./Mr.</text>
      <text x="230" y="130" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#1a1a1a">Asif Sayyed</text>
      <text x="50" y="155" fontFamily="Arial, sans-serif" fontSize="9" fill="#333">participated in</text>
      <text x="130" y="155" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#1a1a1a">AI For All</text>
      <text x="175" y="155" fontFamily="Arial, sans-serif" fontSize="9" fill="#333">program and completed the</text>
      <text x="330" y="155" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#1a1a1a">{stage}</text>
      <text x="50" y="170" fontFamily="Arial, sans-serif" fontSize="9" fill="#333">stage on</text>
      <text x="95" y="170" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#1a1a1a">07/01/2026</text>
      {/* Footer line */}
      <line x1="50" y1="240" x2="200" y2="240" stroke="#333" strokeWidth="0.8"/>
      <line x1="280" y1="240" x2="430" y2="240" stroke="#333" strokeWidth="0.8"/>
      <text x="125" y="255" fontFamily="Arial, sans-serif" fontSize="7" fill="#555" textAnchor="middle">Director – Asia Pacific & Japan, Intel</text>
      <text x="355" y="255" fontFamily="Arial, sans-serif" fontSize="7" fill="#555" textAnchor="middle">Director (Training & Skill Education), CBSE</text>
    </svg>
  )

  const AisectCertSVG = () => (
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Cream background */}
      <rect width="480" height="300" fill="#f5f0e8"/>
      {/* Blue decorative border */}
      <rect x="6" y="6" width="468" height="288" fill="none" stroke="#2a5fa8" strokeWidth="2.5" rx="2"/>
      <rect x="10" y="10" width="460" height="280" fill="none" stroke="#c8a84b" strokeWidth="1" rx="1"/>
      {/* AISECT Learn label */}
      <rect x="20" y="18" width="90" height="28" rx="4" fill="#2a5fa8"/>
      <text x="65" y="28" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">AL AISECT</text>
      <text x="65" y="38" fontFamily="Arial, sans-serif" fontSize="7" fill="#cce" textAnchor="middle">LEARN</text>
      {/* INDIAai */}
      <text x="420" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#e05a1a" textAnchor="middle">INDIA</text>
      <text x="445" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#2a5fa8" textAnchor="middle">ai</text>
      {/* CERTIFICATE heading */}
      <text x="240" y="85" fontFamily="Georgia, serif" fontSize="26" fontWeight="bold" fill="#2a5fa8" textAnchor="middle" letterSpacing="4">CERTIFICATE</text>
      <line x1="120" y1="92" x2="360" y2="92" stroke="#c8a84b" strokeWidth="1"/>
      {/* Body */}
      <text x="240" y="120" fontFamily="Arial, sans-serif" fontSize="10" fill="#555" textAnchor="middle">This is to certify that</text>
      <text x="240" y="145" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Sayyed Asif</text>
      <line x1="160" y1="150" x2="320" y2="150" stroke="#999" strokeWidth="0.8"/>
      <text x="240" y="168" fontFamily="Arial, sans-serif" fontSize="10" fill="#555" textAnchor="middle">has successfully completed</text>
      <text x="240" y="195" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#1a1a1a" textAnchor="middle">Yuva AI For ALL - English</text>
      <text x="240" y="218" fontFamily="Arial, sans-serif" fontSize="9" fill="#555" textAnchor="middle">on  January 27, 2026  offered by AISECT LEARN (A unit of AISECT LTD.)</text>
      {/* Footer */}
      <line x1="190" y1="255" x2="310" y2="255" stroke="#333" strokeWidth="0.8"/>
      <text x="250" y="268" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" fill="#333" textAnchor="middle">AUTHORISED SIGNATORY</text>
      <text x="250" y="278" fontFamily="Arial, sans-serif" fontSize="7" fill="#555" textAnchor="middle">AISECT LEARN</text>
      <text x="420" y="278" fontFamily="Arial, sans-serif" fontSize="7" fill="#555" textAnchor="middle">ID: jLe6hr7S4F</text>
    </svg>
  )

  const AnthropicCertSVG = ({ cert }) => (
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="480" height="300" fill={cert.certBg}/>
      <rect x="10" y="10" width="460" height="280" fill="none" stroke="white" strokeWidth="5" rx="2" opacity="0.35"/>
      {/* Badge */}
      <rect x="140" y="28" width="200" height="26" rx="13" fill="none" stroke={cert.certText} strokeWidth="1.5" opacity="0.65"/>
      <circle cx="158" cy="41" r="8" fill="none" stroke={cert.certText} strokeWidth="1.5" opacity="0.65"/>
      <polyline points="154,41 157,44 163,38" fill="none" stroke={cert.certText} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
      <text x="172" y="46" fontFamily="serif" fontSize="8.5" fill={cert.certText} opacity="0.65" letterSpacing="1.5">CERTIFICATE of COMPLETION</text>
      {/* Name */}
      <text x="240" y="108" fontFamily="Georgia, serif" fontSize="21" fill={cert.certText} textAnchor="middle" opacity="0.9">Asif Sayyed</text>
      <text x="240" y="128" fontFamily="Georgia, serif" fontSize="9.5" fill={cert.certText} textAnchor="middle" opacity="0.55">has completed</text>
      {/* Title */}
      {cert.title.length > 22 ? (
        <>
          <text x="240" y="165" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="bold" fill={cert.certText} textAnchor="middle" opacity="0.95">
            {cert.title.split(' ').slice(0, Math.ceil(cert.title.split(' ').length / 2)).join(' ')}
          </text>
          <text x="240" y="188" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="bold" fill={cert.certText} textAnchor="middle" opacity="0.95">
            {cert.title.split(' ').slice(Math.ceil(cert.title.split(' ').length / 2)).join(' ')}
          </text>
        </>
      ) : (
        <text x="240" y="172" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="bold" fill={cert.certText} textAnchor="middle" opacity="0.95">
          {cert.title}
        </text>
      )}
      {/* Issuer */}
      <text x="240" y="242" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="bold" fill={cert.certText} textAnchor="middle" opacity="0.65" letterSpacing="1.5">
        {cert.certPartners}
      </text>
    </svg>
  )

  return (
    <section id="certificates" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-accent3"></div>
          <span className="font-mono text-xs text-accent3 tracking-widest uppercase">05 / Certificates</span>
        </div>
        <h2 className="reveal font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-bright mb-8 sm:mb-12" style={{ transitionDelay: '0.1s' }}>
          Certifi<span className="grad-text">cates</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`reveal card-hover ${i === 0 ? 'neon-border' : 'border border-border'} rounded-xl overflow-hidden bg-card`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Certificate preview */}
              <div className="overflow-hidden">
                {cert.isIntel ? (
                  <IntelCertSVG stage={cert.stage} />
                ) : cert.isAisect ? (
                  <AisectCertSVG />
                ) : (
                  <AnthropicCertSVG cert={cert} />
                )}
              </div>

              {/* Card info */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-4 h-px bg-${cert.tagColor}-400`}></div>
                  <span className={`font-mono text-xs tracking-widest uppercase text-${cert.tagColor}-400`}>{cert.issuer}</span>
                </div>
                <h3 className="font-display font-700 text-sm sm:text-base text-bright mb-2">{cert.title}</h3>
                <p className="font-body text-xs sm:text-sm text-muted mb-4 leading-relaxed">{cert.desc}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.tags.map((tag, j) => (
                    <span key={j} className={`font-mono text-xs px-2 py-0.5 rounded border ${j === 0 ? tagClasses[cert.tagColor] : 'bg-bg border-border text-muted'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-mono text-xs text-muted">// {cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
