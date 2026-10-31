import { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectVisual from '../components/projects/ProjectVisual'
import { Reveal } from '../components/ui/Reveal'

export default function Projects() {
  const track = useRef<HTMLUListElement>(null)
  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 420), behavior: 'smooth' })
  }
  const arrow = 'grid h-11 w-11 place-items-center rounded-full border border-accent/60 text-strong transition-colors hover:bg-accent/20'
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">My Creative <em>Projects</em></h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous projects" className={arrow}><ChevronLeft size={18} /></button>
            <button onClick={() => scroll(1)} aria-label="Next projects" className={arrow}><ChevronRight size={18} /></button>
          </div>
        </Reveal>
        <ul ref={track} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10">
          {projects.map((p) => (
            <li key={p.slug} className="w-[82%] shrink-0 snap-start sm:w-[22rem]">
              <a href={`#/project/${p.slug}`} aria-label={`${p.title} — view case study`} className="group card card-hover flex h-full flex-col overflow-hidden">
                <div className="border-b border-line bg-ink p-3"><ProjectVisual kind={p.visual} /></div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow mb-2">{p.category}</p>
                  <h3 className="text-lg font-semibold text-strong">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mute">{p.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-silver">{t}</li>)}
                  </ul>
                  <span className="mt-auto flex items-center justify-between pt-5 text-sm text-strong">
                    Case study <span className="grid h-9 w-9 place-items-center rounded-full border border-accent/60 transition-colors group-hover:bg-accent"><ArrowRight size={15} /></span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
