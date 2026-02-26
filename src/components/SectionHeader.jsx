import Reveal from './Reveal'

export default function SectionHeader({ label, title }) {
  return (
    <Reveal>
      <p className="font-mono text-xs text-primary tracking-[3px] uppercase mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-10">
        {title}
      </h2>
    </Reveal>
  )
}
