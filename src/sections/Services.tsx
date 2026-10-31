import { Bot, Database, Layout, Mic, Workflow } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'

// Areas of work taken from the resume bullets.
const areas = [
  { icon: Mic, t: 'Conversational AI', d: 'Real-time voice agents with streaming STT, LLM and TTS over live calls.' },
  { icon: Database, t: 'RAG Systems', d: 'Retrieval over domain knowledge bases, incl. hybrid vector + BM25 search.' },
  { icon: Bot, t: 'Agentic Workflows', d: 'LLM tool calling, context design and agent evaluation.' },
  { icon: Workflow, t: 'Data Pipelines', d: 'Resilient scraping, PostgreSQL storage and geocoded market data.' },
  { icon: Layout, t: 'Full-Stack Apps', d: 'React, Node/Express and FastAPI services with MongoDB or Postgres.' },
]

export default function Services() {
  return (
    <section id="build" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow mb-3">What I build</p>
          <h2 className="display text-[clamp(1.7rem,3.6vw,2.6rem)]">Systems that <em>work in practice</em></h2>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {areas.map(({ icon: Icon, t, d }, i) => (
            <li key={t}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="card card-hover h-full p-5">
                  <Icon size={22} className="text-accent-soft" />
                  <h3 className="mt-5 text-sm font-medium text-strong">{t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-mute">{d}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
