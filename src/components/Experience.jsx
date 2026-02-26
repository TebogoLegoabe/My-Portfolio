import { Calendar, Building2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// Experience" title="Where I've Worked" />

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div
            className="absolute left-[19px] top-0 bottom-0 w-0.5 opacity-30"
            style={{
              background: 'linear-gradient(to bottom, #38bdf8, #818cf8, #38bdf8)',
            }}
          />

          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative pl-14 mb-10">
                {/* Node */}
                <div className="absolute left-[10px] top-1.5 w-5 h-5 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="card-base p-6">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-accent-green tracking-wide mb-1">
                    <Calendar size={12} />
                    {exp.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-0.5">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-primary mb-3">
                    <Building2 size={14} />
                    {exp.company}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 font-mono text-[11px] text-accent-purple rounded"
                        style={{
                          background: 'rgba(129,140,248,0.08)',
                          border: '1px solid rgba(129,140,248,0.15)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
