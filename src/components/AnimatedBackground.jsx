'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: null, y: null }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })
    window.addEventListener('mouseleave', () => {
      mouse.x = null
      mouse.y = null
    })

    // Particle config
    const COUNT = 90
    const CONNECT_DIST = 140
    const MOUSE_DIST = 180

    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4', '#a5b4fc']

    class Particle {
      constructor() { this.reset(true) }
      reset(init = false) {
        this.x = Math.random() * canvas.width
        this.y = init ? Math.random() * canvas.height : canvas.height + 10
        this.size = Math.random() * 1.8 + 0.4
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = -(Math.random() * 0.5 + 0.1)
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.6 + 0.2
        this.pulse = Math.random() * Math.PI * 2
        this.pulseSpeed = Math.random() * 0.02 + 0.005
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed
        this.alpha = 0.2 + Math.abs(Math.sin(this.pulse)) * 0.5
        if (this.y < -10) this.reset()
        if (this.x < -10 || this.x > canvas.width + 10) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.shadowBlur = 8
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const particles = Array.from({ length: COUNT }, () => new Particle())

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18
            ctx.save()
            ctx.globalAlpha = alpha
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            grad.addColorStop(0, particles[i].color)
            grad.addColorStop(1, particles[j].color)
            ctx.strokeStyle = grad
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }

        // Mouse connections
        if (mouse.x !== null) {
          const dx = particles[i].x - mouse.x
          const dy = particles[i].y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_DIST) {
            const alpha = (1 - dist / MOUSE_DIST) * 0.4
            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = particles[i].color
            ctx.lineWidth = 0.8
            ctx.shadowBlur = 6
            ctx.shadowColor = particles[i].color
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
            ctx.restore()

            // Repel slightly
            particles[i].x -= dx * 0.002
            particles[i].y -= dy * 0.002
          }
        }
      }
    }

    const drawGlowOrbs = (t) => {
      const orbs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.2, r: 220, color: '#6366f1' },
        { x: canvas.width * 0.85, y: canvas.height * 0.7, r: 180, color: '#8b5cf6' },
        { x: canvas.width * 0.5, y: canvas.height * 0.9, r: 160, color: '#ec4899' },
      ]
      orbs.forEach((orb, i) => {
        const pulse = Math.sin(t * 0.0008 + i * 2) * 20
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r + pulse)
        grad.addColorStop(0, orb.color + '18')
        grad.addColorStop(0.5, orb.color + '08')
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.r + pulse, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawGrid = () => {
      ctx.save()
      ctx.globalAlpha = 0.025
      ctx.strokeStyle = '#6366f1'
      ctx.lineWidth = 0.5
      const spacing = 60
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
      ctx.restore()
    }

    let t = 0
    const animate = () => {
      t++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Base dark bg
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawGlowOrbs(t)

      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  )
}
