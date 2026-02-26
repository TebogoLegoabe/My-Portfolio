import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// Projects" title="Featured Work" />

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card-base overflow-hidden h-full flex flex-col">
                  {/* Visual header */}
                  <div
                    className="h-40 flex items-center justify-center relative"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(56,189,248,0.06))',
                    }}
                  >
                    <Icon size={40} className="text-primary/20" />
                    <span className="absolute top-3 right-4 text-4xl font-black font-mono text-primary/[0.06]">
                      {project.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 font-mono text-[11px] text-accent-green rounded"
                          style={{
                            background: 'rgba(0,255,136,0.06)',
                            border: '1px solid rgba(0,255,136,0.15)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
