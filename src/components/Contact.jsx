import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, ArrowRight, Copy, Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { personalInfo } from '../data/portfolio'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="bg-transparent border-none cursor-pointer p-1 flex items-center transition-colors duration-200"
      style={{ color: copied ? '#00ff88' : '#64748b' }}
      aria-label="Copy"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// Contact" title="Let's Connect" />
        <Reveal>
          <p className="text-slate-400 text-base -mt-6 mb-8 max-w-lg">
            Interested in working together? I&apos;d love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {/* Left column — contact info */}
            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`} className="card-base flex items-center gap-3 p-4 no-underline text-inherit group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(56,189,248,0.08)' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-semibold text-primary tracking-wider uppercase">Email</div>
                  <div className="text-sm text-slate-400">{personalInfo.email}</div>
                </div>
              </a>

              <div className="card-base flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(56,189,248,0.08)' }}>
                  <Phone size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] font-semibold text-primary tracking-wider uppercase">Phone</div>
                  <div className="text-sm text-slate-400 flex items-center gap-2">
                    {personalInfo.phone}
                    <CopyButton text="+27714227470" />
                  </div>
                </div>
              </div>

              <div className="card-base flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(56,189,248,0.08)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-semibold text-primary tracking-wider uppercase">Location</div>
                  <div className="text-sm text-slate-400">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Right column — social + CTA */}
            <div className="space-y-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base flex items-center gap-3 p-4 no-underline text-inherit"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(56,189,248,0.12)' }}>
                  <Linkedin size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] font-semibold text-primary tracking-wider uppercase">LinkedIn</div>
                  <div className="text-sm text-slate-400">Tebogo Legoabe</div>
                </div>
                <ExternalLink size={14} className="text-slate-600" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base flex items-center gap-3 p-4 no-underline text-inherit"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-accent-purple shrink-0" style={{ background: 'rgba(129,140,248,0.1)' }}>
                  <Github size={18} />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] font-semibold text-primary tracking-wider uppercase">GitHub</div>
                  <div className="text-sm text-slate-400">View Repositories</div>
                </div>
                <ExternalLink size={14} className="text-slate-600" />
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Let's%20Connect`}
                className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 bg-gradient-to-r from-primary to-accent-purple text-surface font-bold text-sm tracking-wide rounded-lg no-underline shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={16} /> Send Me a Message <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
