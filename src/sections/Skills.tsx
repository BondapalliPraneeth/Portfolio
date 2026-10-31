import { Bot, Cloud, Code2, Database, Layout, Mic, Search, ServerCog, Workflow } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { Reveal } from '../components/ui/Reveal'

const icons = { voice: Mic, ai: Bot, rag: Search, fw: Workflow, back: Layout, db: Database, data: ServerCog, cloud: Cloud, lang: Code2 } as const

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-10">
          <p className="eyebrow mb-3">Expertise</p>
          <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">Skills &amp; <em>Technologies</em></h2>
        </Reveal>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.id as keyof typeof icons] ?? Code2
            return (
              <li key={g.id}>
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <div className="card card-hover h-full p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-soft"><Icon size={18} /></span>
                      <div><h3 className="text-sm font-semibold text-strong">{g.name}</h3><p className="text-xs text-mute">{g.blurb}</p></div>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {g.items.map((it) => <li key={it} className="rounded-full border border-line px-2.5 py-1 text-xs text-silver">{it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
