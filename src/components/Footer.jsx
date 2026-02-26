import { Linkedin, Github, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const socials = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative z-10 py-10 px-6 border-t border-primary/[0.08] text-center">
      <div className="flex justify-center gap-3 mb-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-lg border border-primary/10 bg-surface-card flex items-center justify-center text-slate-500 no-underline hover:text-primary hover:border-primary/30 hover:bg-primary-dim hover:-translate-y-0.5 transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-slate-600">
        <span className="text-primary">&lt;</span> Designed &amp; Built by{' '}
        <span className="text-primary">Tebogo Legoabe</span>{' '}
        <span className="text-primary">/&gt;</span>
        <br />
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
