'use client'

import { useState } from 'react'

const ShelfThumb = () => (
  <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shelf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f5f0e8"/><stop offset="100%" stopColor="#e8e0d0"/>
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#shelf-bg)"/>
    {/* Navbar */}
    <rect x="0" y="0" width="400" height="36" fill="#f0ebe0"/>
    <rect x="14" y="10" width="18" height="18" rx="3" fill="#e8520a" opacity="0.9"/>
    <text x="38" y="23" fontFamily="Georgia, serif" fontSize="13" fontWeight="bold" fill="#1a1a1a">Shelf</text>
    <rect x="330" y="8" width="58" height="20" rx="4" fill="#1a1a1a"/>
    <text x="359" y="22" textAnchor="middle" fontFamily="Arial" fontSize="9" fill="white">+ Add Book</text>
    {/* Stats row */}
    {[['0','Total Books'],['0','Read'],['0','Reading'],['0','Wishlist']].map(([n,l],i) => (
      <g key={i}>
        <text x={20 + i*70} y="58" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#1a1a1a">{n}</text>
        <text x={20 + i*70} y="70" fontFamily="Arial" fontSize="7" fill="#888">{l}</text>
      </g>
    ))}
    {/* Progress bar */}
    <rect x="14" y="78" width="372" height="4" rx="2" fill="#ddd"/>
    <text x="380" y="76" fontFamily="Arial" fontSize="7" fill="#888">0%</text>
    {/* Search bar */}
    <rect x="14" y="90" width="230" height="22" rx="11" fill="white" stroke="#ddd" strokeWidth="1"/>
    <text x="30" y="105" fontFamily="Arial" fontSize="8" fill="#aaa">Search books, authors...</text>
    {/* Filter pills */}
    {['All','Fiction','Non-Fiction','Sci-Fi','Fantasy','Mystery'].map((t,i) => (
      <rect key={t} x={14 + i*55} y="120" width={t==='Non-Fiction'?52:42} height="16" rx="8"
        fill={i===0 ? '#1a1a1a' : 'white'} stroke={i===0 ? 'none' : '#ddd'} strokeWidth="1"/>
    ))}
    {['All','Fiction','Non-Fiction','Sci-Fi','Fantasy','Mystery'].map((t,i) => (
      <text key={t} x={35 + i*55} y="132" textAnchor="middle" fontFamily="Arial" fontSize="7"
        fill={i===0 ? 'white' : '#555'}>{t}</text>
    ))}
    {/* Empty state */}
    <rect x="175" y="145" width="22" height="26" rx="2" fill="none" stroke="#ccc" strokeWidth="1.5"/>
    <line x1="180" y1="150" x2="192" y2="150" stroke="#ccc" strokeWidth="1"/>
    <line x1="180" y1="155" x2="192" y2="155" stroke="#ccc" strokeWidth="1"/>
  </svg>
)

const ComplaintDeskThumb = () => (
  <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#060d1f"/><stop offset="100%" stopColor="#0a1628"/>
      </linearGradient>
      <linearGradient id="cd-text" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#60a5fa"/>
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#cd-bg)"/>
    {/* Grid lines */}
    {[0,1,2,3,4,5,6].map(i => <line key={`v${i}`} x1={i*67} y1="0" x2={i*67} y2="180" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.4"/>)}
    {[0,1,2,3].map(i => <line key={`h${i}`} x1="0" y1={i*60} x2="400" y2={i*60} stroke="#1e3a5f" strokeWidth="0.5" opacity="0.4"/>)}
    {/* Navbar */}
    <rect x="0" y="0" width="400" height="30" fill="#060d1f" opacity="0.95"/>
    <rect x="12" y="8" width="16" height="16" rx="3" fill="#3b82f6"/>
    <text x="34" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="white">Complaint</text>
    <text x="100" y="20" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#3b82f6">Desk</text>
    {['Home','Submit Complaint','Track Complaint','Admin'].map((t,i) => (
      <g key={t}>
        {i===0 && <rect x={160 + i*58} y="8" width="36" height="16" rx="3" fill="#3b82f6"/>}
        <text x={178 + i*58} y="20" textAnchor="middle" fontFamily="Arial" fontSize="7"
          fill={i===0 ? 'white' : '#94a3b8'}>{t}</text>
      </g>
    ))}
    {/* Badge */}
    <rect x="130" y="42" width="140" height="14" rx="7" fill="#0f2040" stroke="#1e3a5f" strokeWidth="1"/>
    <circle cx="138" cy="49" r="3" fill="#3b82f6"/>
    <text x="200" y="53" textAnchor="middle" fontFamily="Arial" fontSize="7" fill="#94a3b8">Online Complaint Management System</text>
    {/* Hero text */}
    <text x="200" y="80" textAnchor="middle" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="white">Your Voice,</text>
    <text x="200" y="100" textAnchor="middle" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#60a5fa">Our Priority</text>
    <text x="200" y="115" textAnchor="middle" fontFamily="Arial" fontSize="7" fill="#64748b">Submit complaints, receive a unique ticket ID, and track real-time status.</text>
    {/* Buttons */}
    <rect x="100" y="122" width="85" height="18" rx="4" fill="#3b82f6"/>
    <text x="142" y="135" textAnchor="middle" fontFamily="Arial" fontSize="7" fill="white">Submit a Complaint</text>
    <rect x="195" y="122" width="85" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
    <text x="237" y="135" textAnchor="middle" fontFamily="Arial" fontSize="7" fill="#94a3b8">Track Your Complaint</text>
    {/* Stats */}
    {[['24h','Avg. Response'],['99%','Resolution'],['10K+','Resolved'],['4.9★','Satisfaction']].map(([v,l],i) => (
      <g key={i}>
        <rect x={14 + i*95} y="148" width="88" height="28" rx="6" fill="#0f1e35"/>
        <text x={58 + i*95} y="161" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="white">{v}</text>
        <text x={58 + i*95} y="171" textAnchor="middle" fontFamily="Arial" fontSize="6" fill="#64748b">{l}</text>
      </g>
    ))}
  </svg>
)

const MobileAppThumb = () => (
  <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mob-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2e1065"/><stop offset="100%" stopColor="#1e1b4b"/>
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#mob-bg)"/>
    <rect x="130" y="10" width="80" height="140" rx="12" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5"/>
    <rect x="138" y="22" width="64" height="116" rx="4" fill="#0f0a1e"/>
    <rect x="138" y="22" width="64" height="12" rx="4" fill="#1a1040"/>
    <rect x="143" y="40" width="54" height="20" rx="4" fill="#312e81" opacity="0.8"/>
    <rect x="143" y="65" width="25" height="25" rx="4" fill="#4338ca" opacity="0.7"/>
    <rect x="172" y="65" width="25" height="25" rx="4" fill="#7c3aed" opacity="0.7"/>
    <rect x="143" y="95" width="54" height="8" rx="2" fill="#4338ca" opacity="0.5"/>
    <rect x="143" y="120" width="54" height="14" rx="7" fill="#6366f1" opacity="0.8"/>
    <rect x="230" y="20" width="140" height="140" rx="8" fill="#1a1040" opacity="0.7"/>
    <text x="300" y="38" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontFamily="Arial" opacity="0.8">COMPONENTS</text>
    {[0,1,2,3,4].map(i => <rect key={i} x="245" y={48 + i*22} width="110" height="14" rx="4" fill="#312e81" opacity="0.6"/>)}
    <rect x="245" y="48" width="40" height="14" rx="4" fill="#6366f1" opacity="0.8"/>
  </svg>
)

const DashboardThumb = () => (
  <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dash-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a0a1a"/><stop offset="100%" stopColor="#3b0a2a"/>
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#dash-bg)"/>
    <rect x="0" y="0" width="70" height="180" fill="#0f0a0f" opacity="0.8"/>
    {[0,1,2,3,4].map(i => <rect key={i} x="10" y={20 + i*28} width="50" height="18" rx="4" fill={i===0 ? '#be185d' : '#1f1020'} opacity="0.8"/>)}
    <rect x="80" y="10" width="75" height="45" rx="6" fill="#1f0a1f" opacity="0.9"/>
    <rect x="165" y="10" width="75" height="45" rx="6" fill="#1f0a1f" opacity="0.9"/>
    <rect x="250" y="10" width="75" height="45" rx="6" fill="#1f0a1f" opacity="0.9"/>
    <text x="117" y="30" textAnchor="middle" fill="#f9a8d4" fontSize="8" fontFamily="Arial">Revenue</text>
    <text x="117" y="45" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">$24k</text>
    <text x="202" y="30" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="Arial">Users</text>
    <text x="202" y="45" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">1.2k</text>
    <rect x="80" y="65" width="175" height="105" rx="6" fill="#1f0a1f" opacity="0.9"/>
    {[40,60,35,75,50,80,45].map((h, i) => (
      <rect key={i} x={92 + i*23} y={155 - h} width="16" height={h} rx="3" fill="#be185d" opacity={0.5 + i*0.07}/>
    ))}
    <rect x="265" y="65" width="125" height="105" rx="6" fill="#1f0a1f" opacity="0.9"/>
    <circle cx="327" cy="117" r="35" fill="none" stroke="#be185d" strokeWidth="20" strokeDasharray="88 132"/>
    <circle cx="327" cy="117" r="35" fill="none" stroke="#7c3aed" strokeWidth="20" strokeDasharray="44 176" strokeDashoffset="-88"/>
  </svg>
)

const EcomThumb = () => (
  <svg viewBox="0 0 400 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ecom-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#022c22"/><stop offset="100%" stopColor="#064e3b"/>
      </linearGradient>
    </defs>
    <rect width="400" height="180" fill="url(#ecom-bg)"/>
    <rect x="0" y="0" width="75" height="180" fill="#011a14" opacity="0.9"/>
    <rect x="8" y="15" width="59" height="20" rx="4" fill="#065f46" opacity="0.8"/>
    {[0,1,2,3,4].map(i => <rect key={i} x="8" y={45 + i*26} width="59" height="16" rx="3" fill={i===0 ? '#059669' : '#022c22'} opacity="0.8"/>)}
    <rect x="85" y="8" width="305" height="28" rx="5" fill="#011a14" opacity="0.8"/>
    <rect x="340" y="12" width="40" height="20" rx="10" fill="#059669" opacity="0.8"/>
    {[0,1,2].map(col => (
      <g key={col}>
        <rect x={85 + col*108} y="45" width="100" height="65" rx="6" fill="#011a14" opacity="0.9"/>
        <rect x={90 + col*108} y="50" width="90" height="40" rx="4" fill="#022c22" opacity="0.8"/>
        <rect x={90 + col*108} y="95" width="60" height="7" rx="2" fill="#6ee7b7" opacity="0.5"/>
      </g>
    ))}
    {[0,1,2].map(i => <rect key={i} x={85 + i*108} y="120" width="100" height="50" rx="6" fill="#011a14" opacity="0.9"/>)}
    <text x="135" y="148" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="bold" fontFamily="Arial">$8.2k</text>
    <text x="243" y="148" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="Arial">342</text>
    <text x="351" y="148" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold" fontFamily="Arial">94%</text>
  </svg>
)

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const devProjects = [
    { name: 'Shelf — Book Collection Manager', desc: 'A personal book tracking app with reading progress, genre filters, wishlist, and search. Built with a clean minimal UI.', tags: ['React', 'Node.js', 'MongoDB'], thumb: <ShelfThumb />, link: 'https://github.com/asifsayyed614-ui' },
    { name: 'ComplaintDesk', desc: 'Online complaint management system where users submit complaints, receive a unique ticket ID, and track real-time status updates.', tags: ['HTML', 'Tailwind', 'JS'], thumb: <ComplaintDeskThumb />, link: 'https://github.com/asifsayyed614-ui' },
    { name: 'BookMyShow Clone', desc: 'A web application clone of BookMyShow featuring movie discovery, search functionality, location selection, and a dynamic hero carousel.', tags: ['React', 'Tailwind', 'Frontend'], thumb: <img src="/bookmyshow.png" alt="BookMyShow Clone" className="w-full h-full object-cover object-top"/>, link: 'https://github.com/asifsayyed614-ui' },
  ]

  const designProjects = [
    { name: 'Mobile App Design System', desc: 'Complete mobile UI design for RedBus — Home, Booking, Help, and Account screens with components, color tokens, and interactive Figma prototypes.', tags: ['Figma', 'Design System'], thumb: <img src="/redbus-design.png" alt="RedBus Mobile App Design" className="w-full h-full object-cover object-top"/>, link: 'https://www.linkedin.com/in/sayyed-asif-106b9b3a8' },
    { name: 'Gozoop Web Design', desc: 'Complete website UI redesign for Gozoop including Home, Work, and Menu Bar interfaces with a sleek dark theme.', tags: ['Figma', 'Web Design'], thumb: <img src="/gozoop.png" alt="Gozoop Web Design" className="w-full h-full object-cover object-top"/>, link: 'https://www.linkedin.com/in/sayyed-asif-106b9b3a8' },
    { name: 'Smartwatch UI Design', desc: 'Comprehensive smartwatch UI design featuring watch face, app grid, fitness tracking, messaging, weather, and settings screens.', tags: ['Figma', 'Wearable UI'], thumb: <img src="/smartwatch-design.png" alt="Smartwatch UI Design" className="w-full h-full object-cover object-top"/>, link: 'https://www.linkedin.com/in/sayyed-asif-106b9b3a8' },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="reveal flex items-center gap-3 mb-3">
          <div className="w-6 h-px bg-accent"></div>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">03 / Projects</span>
        </div>
        <h2 className="reveal font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-bright mb-4 text-center" style={{ transitionDelay: '0.1s' }}>
          Featured <span className="grad-text">Work</span>
        </h2>
        <p className="reveal text-center text-muted font-body text-sm sm:text-base mb-6 sm:mb-8" style={{ transitionDelay: '0.2s' }}>
          A curated collection of development and design projects
        </p>

        <div className="reveal flex justify-center gap-2 mb-8 sm:mb-12" style={{ transitionDelay: '0.3s' }}>
          {['all', 'dev', 'design'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-mono text-xs px-4 sm:px-5 py-2 rounded-full tracking-widest uppercase transition-all border ${
                filter === tab ? 'border-accent text-accent bg-accent/10' : 'border-border text-muted hover:border-accent2/40 hover:text-text'
              }`}
            >
              {tab === 'all' ? 'All' : tab === 'dev' ? 'Dev' : 'UI/UX'}
            </button>
          ))}
        </div>

        {(filter === 'all' || filter === 'dev') && (
          <div className="mb-10 sm:mb-12">
            <div className="reveal flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-accent2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              </div>
              <span className="font-display font-700 text-base sm:text-lg text-bright">Development Projects</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {devProjects.map((project, i) => (
                <div key={i} className="reveal card-hover bg-card border border-border rounded-xl overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="h-40 sm:h-44 overflow-hidden">{project.thumb}</div>
                  <div className="p-4 sm:p-5">
                    <div className="font-mono text-xs text-accent mb-2 tracking-wider">Web Development</div>
                    <h3 className="font-display font-700 text-sm sm:text-base text-bright mb-2">{project.name}</h3>
                    <p className="font-body text-xs text-muted mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="font-mono text-xs bg-bg border border-border text-muted px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:text-accent2 transition-colors">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'design') && (
          <div>
            <div className="reveal flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-accent3 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <span className="font-display font-700 text-base sm:text-lg text-bright">UI/UX Design Projects</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {designProjects.map((project, i) => (
                <div key={i} className="reveal card-hover bg-card border border-border rounded-xl overflow-hidden" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="h-40 sm:h-44 overflow-hidden">{project.thumb}</div>
                  <div className="p-4 sm:p-5">
                    <div className="font-mono text-xs text-accent2 mb-2 tracking-wider">UI/UX Design</div>
                    <h3 className="font-display font-700 text-sm sm:text-base text-bright mb-2">{project.name}</h3>
                    <p className="font-body text-xs text-muted mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="font-mono text-xs bg-bg border border-border text-muted px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent2 hover:text-accent3 transition-colors">
                      View on LinkedIn →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
