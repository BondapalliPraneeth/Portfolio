import { Award, GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'

// Entries come from profile.ts only; no dates or "verified" claims are invented.
export default function Certificates() {
  const items = [
    ...profile.education.map((e) => ({ icon: GraduationCap, t: e.degree, s: `${e.school} · ${e.years}` })),
    ...profile.certifications.map((c) => ({ icon: Award, t: c, s: 'Certification' })),
  ]
  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-10">
          <p className="eyebrow mb-3">Achievements</p>
          <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">Certifications &amp; <em>Badges</em></h2>
        </Reveal>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, s }, i) => (
            <li key={t}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="card card-hover flex h-full items-center gap-4 p-5">
                  <span className="btn-grad grid h-12 w-12 shrink-0 place-items-center rounded-full"><Icon size={20} /></span>
                  <span className="min-w-0"><span className="block text-sm font-medium text-strong">{t}</span><span className="text-xs text-mute">{s}</span></span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
