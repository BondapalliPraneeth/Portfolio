import { principles } from '../data/profile'
import { Reveal, SectionHead } from '../components/ui/Reveal'

export default function Principles() {
  return (
    <section id="approach" className="py-28 md:py-40">
      <div className="wrap">
        <SectionHead n="05" label="Approach" title={<>How I <em className="text-silver">work</em>.</>} />
        <ol className="border-t border-line">
          {principles.map((p, i) => (
            <li key={p.t}>
              <Reveal>
                <div className="group grid gap-3 border-b border-line py-8 transition-colors md:grid-cols-12 md:gap-10 md:py-10">
                  <span className="font-mono text-xs text-accent md:col-span-1">0{i + 1}</span>
                  <h3 className="display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-4xl">{p.t}</h3>
                  <p className="text-mute md:col-span-6">{p.d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
