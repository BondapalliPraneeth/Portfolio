import { useEffect, useRef } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Github } from '../ui/Icons'
import type { Project } from '../../data/types'
import { projects } from '../../data/projects'
import ProjectVisual from './ProjectVisual'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10">
      <h2 className="eyebrow md:col-span-3">{title}</h2>
      <div className="md:col-span-9">{children}</div>
    </section>
  )
}

export default function ProjectDetail({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', esc) }
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" aria-label={p.title} className="fixed inset-0 z-[70] overflow-y-auto bg-ink">
      <div className="wrap pb-24">
        <div className="sticky top-0 z-10 -mx-5 flex h-16 items-center justify-between bg-ink/85 px-5 backdrop-blur md:-mx-10 md:px-10">
          <button ref={closeRef} onClick={onClose} className="inline-flex h-11 items-center gap-2 text-sm text-strong hover:text-accent">
            <ArrowLeft size={16} /> Back to projects
          </button>
          <span className="eyebrow">{p.index} / 0{projects.length}</span>
        </div>

        <header className="pt-10 md:pt-16">
          <p className="eyebrow mb-5">{p.category}</p>
          <h1 className="display text-[clamp(2.4rem,7vw,5.5rem)] max-w-4xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-mute">{p.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 border border-line px-5 text-sm text-strong hover:border-silver"><Github size={16} /> Repository</a>}
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 bg-accent px-5 text-sm font-medium text-white"><ExternalLink size={16} /> Live demo</a>}
          </div>
        </header>

        <div className="my-12 border border-line bg-graphite p-4 md:p-8"><ProjectVisual kind={p.visual} /></div>

        <Block title="Problem"><p className="text-lg leading-relaxed text-silver">{p.problem}</p></Block>
        <Block title="Solution"><p className="text-lg leading-relaxed text-silver">{p.solution}</p></Block>

        <Block title="Workflow">
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {p.flow.map((s, i) => (
              <li key={s.label} className="bg-graphite p-5">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-2 text-strong">{s.label}</p>
                {s.note && <p className="mt-1 text-sm text-mute">{s.note}</p>}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-mute">{p.flowNote}</p>
        </Block>

        <Block title="What it involved">
          <ul className="space-y-3 text-silver">
            {p.highlights.map((h) => <li key={h} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />{h}</li>)}
          </ul>
        </Block>

        {p.decisions.length > 0 && <Block title="Engineering decisions"><ul className="space-y-3 text-silver">{p.decisions.map((d) => <li key={d} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />{d}</li>)}</ul></Block>}
        {p.challenges.length > 0 && <Block title="Challenges"><ul className="space-y-3 text-silver">{p.challenges.map((d) => <li key={d} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />{d}</li>)}</ul></Block>}

        <Block title="Stack"><ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="border border-line px-3 py-1.5 font-mono text-xs text-silver">{t}</li>)}</ul></Block>
      </div>
    </div>
  )
}
