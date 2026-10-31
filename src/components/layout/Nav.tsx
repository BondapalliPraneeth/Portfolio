import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../../data/profile'
import ThemeToggle from '../ui/ThemeToggle'
import { useActiveSection } from '../../hooks/useEnv'

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'contact', label: 'Contact' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
]
const ids = navItems.map((n) => n.id)

export default function Nav() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-line bg-graphite/80 px-4 shadow-[0_10px_40px_-12px_rgba(99,102,241,.45)] backdrop-blur-xl md:h-16 md:px-6">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5 text-strong">
          <span className="btn-grad grid h-9 w-9 place-items-center rounded-xl text-sm font-bold">{profile.monogram}</span>
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                className={`relative px-3 py-2 text-xs font-medium transition-colors ${active === n.id ? 'text-strong after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-accent' : 'text-silver hover:text-strong'}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="lg:hidden grid h-10 w-10 place-items-center text-strong" aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-ink px-6 pt-6">
          <ul>
            {navItems.map((n, i) => (
              <li key={n.id} className="border-b border-line">
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 text-2xl font-medium text-strong">
                  <span className="text-xs text-accent-soft">0{i + 1}</span>{n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
