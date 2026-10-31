import { Boxes, Cloud, Layers, PhoneCall } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

// Only counts derivable from the content files / resume. No performance claims.
const stats = [
  { icon: Boxes, n: String(projects.length), label: 'Featured projects' },
  { icon: Layers, n: String(skillGroups.length), label: 'Skill areas' },
  { icon: PhoneCall, n: '2', label: 'Telephony integrations' },
  { icon: Cloud, n: '3', label: 'Cloud platforms' },
]

export default function Stats() {
  return (
    <section aria-label="At a glance" className="relative z-10 -mt-6 pb-10">
      <div className="wrap">
        <Reveal>
          <ul className="card grid grid-cols-2 gap-y-6 p-6 md:grid-cols-4 md:p-8">
            {stats.map(({ icon: Icon, n, label }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-panel text-accent-soft"><Icon size={18} /></span>
                <span><span className="block text-2xl font-light text-strong">{n}</span><span className="text-xs text-mute">{label}</span></span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
