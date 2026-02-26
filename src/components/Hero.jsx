import { Mail, Briefcase, Linkedin, ExternalLink, ChevronDown } from 'lucide-react'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { personalInfo, roles } from '../data/portfolio'

export default function Hero() {
  const typedText = useTypingEffect(roles)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 z-10">
      <div className="text-center max-w-3xl">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-accent-green text-xs font-mono opacity-0"
          style={{
            background: 'rgba(0,255,136,0.08)',
            border: '1px solid rgba(0,255,136,0.2)',
            animation: 'fadeInUp 0.6s 0.2s forwards',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-glow shadow-[0_0_8px_rgba(0,255,136,0.6)]" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] mb-4 text-gradient-light opacity-0"
          style={{ animation: 'fadeInUp 0.6s 0.4s forwards' }}
        >
          {personalInfo.name}
        </h1>

        {/* Typed role */}
        <div
          className="font-mono text-lg md:text-xl text-primary mb-4 min-h-[1.6em] opacity-0"
          style={{ animation: 'fadeInUp 0.6s 0.6s forwards' }}
        >
          &gt; {typedText}
          <span className="animate-blink">|</span>
        </div>

        {/* Summary */}
        <p
          className="text-base text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed opacity-0"
          style={{ animation: 'fadeInUp 0.6s 0.8s forwards' }}
        >
          {personalInfo.summary}
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center opacity-0"
          style={{ animation: 'fadeInUp 0.6s 1s forwards' }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent-purple text-surface font-bold text-sm tracking-wide rounded-lg cursor-pointer border-none shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail size={16} /> Get In Touch
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-primary font-semibold text-sm tracking-wide rounded-lg cursor-pointer border border-primary/30 hover:bg-primary-dim hover:border-primary/50 transition-all duration-300"
          >
            <Briefcase size={16} /> View Experience
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-primary font-semibold text-sm tracking-wide rounded-lg border border-primary/30 hover:bg-primary-dim hover:border-primary/50 transition-all duration-300 no-underline"
          >
            <Linkedin size={16} /> LinkedIn <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce-slow">
        <span className="font-mono text-[10px] tracking-[2px] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
