import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// Education" title="Academic Background" />

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card-base p-6 border-l-[3px] border-l-primary">
                <div className="font-mono text-xs text-accent-green tracking-wide mb-2">
                  {edu.year}
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-primary">{edu.school}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
