import { useEffect, useRef } from 'react'

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.size = Math.random() * 1.8 + 0.5
    this.speedX = (Math.random() - 0.5) * 0.35
    this.speedY = (Math.random() - 0.5) * 0.35
    this.opacity = Math.random() * 0.35 + 0.1
    this.color = Math.random() > 0.7 ? '#818cf8' : '#38bdf8'
  }

  update(w, h) {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x < 0 || this.x > w) this.speedX *= -1
    if (this.y < 0 || this.y > h) this.speedY *= -1
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.opacity
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      resize()
      particles = []
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 15000))
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.06 * (1 - dist / 140)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)

        // Mouse repulsion
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          p.x -= dx * 0.015
          p.y -= dy * 0.015
        }
      })
      connect()
      animationId = requestAnimationFrame(animate)
    }

    const handleMouse = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    init()
    animate()
    window.addEventListener('resize', init)
    window.addEventListener('mousemove', handleMouse)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', init)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} id="particle-canvas" />
      <div className="grid-overlay" />
    </>
  )
}
