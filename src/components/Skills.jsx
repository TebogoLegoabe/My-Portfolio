import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// Skills" title="Technical Skills" />

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card-base p-6 h-full">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-primary"
                    style={{ background: 'rgba(56,189,248,0.08)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 tracking-wide mb-3">
                    {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-slate-400 rounded-md transition-all duration-200 cursor-default hover:text-primary hover:border-primary/40"
                        style={{
                          background: 'rgba(56,189,248,0.04)',
                          border: '1px solid rgba(56,189,248,0.1)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

