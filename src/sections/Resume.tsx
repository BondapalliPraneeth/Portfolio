import { Download } from 'lucide-react'
import { profile } from '../data/profile'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import { Reveal, SectionHead } from '../components/ui/Reveal'

export default function Resume() {
  const r = experience[0]
  return (
    <section id="resume" className="py-28 md:py-40">
      <div className="wrap">
        <SectionHead n="06" label="Resume" title={<>The short <em className="text-silver">version</em>.</>} />
        <Reveal>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            <div className="bg-graphite p-6 md:p-8">
              <p className="eyebrow mb-4">Education</p>
              {profile.education.map((e) => <p key={e.school} className="text-silver">{e.degree}<br /><span className="text-mute">{e.school} · {e.years}</span></p>)}
              <p className="eyebrow mb-3 mt-8">Certifications</p>
              <ul className="space-y-1 text-silver">{profile.certifications.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="bg-graphite p-6 md:p-8">
              <p className="eyebrow mb-4">Experience</p>
              <p className="text-silver">{r.title}<br /><span className="text-mute">{r.org}<br />{r.start} – {r.end}</span></p>
            </div>
            <div className="bg-graphite p-6 md:p-8">
              <p className="eyebrow mb-4">Projects</p>
              <ul className="space-y-1 text-silver">{projects.slice(0, 3).map((p) => <li key={p.slug}>{p.title}</li>)}</ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {profile.resumePath ? (
              <a href={profile.resumePath} download="Bondapalli-Praneeth-Resume.pdf" className="inline-flex h-12 items-center gap-2 bg-accent px-7 text-sm font-medium text-white transition-colors hover:bg-accent-soft">
                <Download size={16} /> Download PDF
              </a>
            ) : (
              <button disabled className="inline-flex h-12 cursor-not-allowed items-center gap-2 border border-line px-7 text-sm text-mute"><Download size={16} /> Resume coming soon</button>
            )}
            {profile.resumePath && <a href={profile.resumePath} target="_blank" rel="noreferrer" className="text-sm text-mute underline-offset-4 hover:text-strong hover:underline">Open in new tab</a>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
