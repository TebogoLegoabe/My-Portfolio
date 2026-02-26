import Reveal from './Reveal'
import AnimatedCounter from './AnimatedCounter'
import SectionHeader from './SectionHeader'
import { stats } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="// About" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
            <div className="text-slate-400 text-base leading-loose space-y-4">
              <p>
                I&apos;m an{' '}
                <span className="text-primary font-semibold">
                  Electrical &amp; Information Engineering
                </span>{' '}
                graduate from Wits University with a passion for building at
                the intersection of hardware and software. My experience spans
                from testing embedded communication devices at{' '}
                <span className="text-primary font-semibold">Schauenburg Systems</span>{' '}
                to developing secure enterprise messaging platforms at{' '}
                <span className="text-primary font-semibold">Sedna Inc</span>.
              </p>
              <p>
                I bring strong capability in{' '}
                <span className="text-primary font-semibold">backend development</span>,{' '}
                <span className="text-primary font-semibold">system architecture</span>,
                and{' '}
                <span className="text-primary font-semibold">
                  hardware-software integration
                </span>
                , with a practical, results-driven approach to engineering
                challenges.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-base text-center p-5">
                  <div className="text-3xl font-black text-gradient">
                    <AnimatedCounter target={stat.value} />
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 tracking-wider uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
