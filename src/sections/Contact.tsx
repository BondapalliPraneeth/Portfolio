import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { Github, Gmail, Linkedin } from '../components/ui/Icons'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'

type State = 'idle' | 'sending' | 'ok' | 'error'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [state, setState] = useState<State>('idle')

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard unavailable */ }
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('sending')
    try {
      const res = await fetch(profile.formEndpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(e.currentTarget) })
      if (!res.ok) throw new Error(String(res.status))
      setState('ok'); e.currentTarget.reset()
    } catch { setState('error') }
  }

  const field = 'w-full border border-line bg-graphite px-4 py-3 text-strong placeholder:text-mute focus:border-accent focus:outline-none'

  return (
    <section id="contact" className="relative overflow-hidden pb-10 pt-28 md:pt-44">
      <svg aria-hidden className="pointer-events-none absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 opacity-40 md:block" viewBox="0 0 200 200" fill="none" stroke="#262a2e">
        {[90, 70, 50, 30].map((r) => <circle key={r} cx="100" cy="100" r={r} />)}
        <path d="M100 10 L190 100 L100 190 L10 100 Z" stroke="#8b5cf6" strokeOpacity=".25" />
      </svg>
      <div className="wrap relative">
        <p className="eyebrow mb-5 flex items-center gap-3">Contact</p>
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,7vw,6rem)] max-w-4xl">Have an interesting <em>problem to solve?</em></h2>
          <p className="mt-6 max-w-xl text-lg text-mute">I’m always glad to talk about conversational AI, retrieval systems, and data pipelines. Send a note and I’ll get back to you.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-12 md:grid-cols-12">
          <div className="min-w-0 md:col-span-5">
            <div className="flex items-center gap-2 border-b border-line pb-4">
              <a href={`mailto:${profile.email}`} className="flex min-w-0 items-center gap-3 text-lg text-strong hover:text-accent md:text-xl"><Mail size={18} className="shrink-0" /><span className="truncate">{profile.email}</span></a>
              <button onClick={copy} aria-label="Copy email address" className="ml-auto grid h-11 w-11 shrink-0 place-items-center text-mute hover:text-strong">
                {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
              </button>
            </div>
            <pre aria-label="Contact summary" className="mt-6 overflow-x-auto rounded-xl border border-line bg-graphite p-4 font-mono text-xs leading-relaxed text-silver"><code>{`$ whoami\n${profile.name}\n$ location\n${profile.location}\n$ contact --email\n${profile.email}`}</code></pre>
            <p className="sr-only" role="status">{copied ? 'Email copied' : ''}</p>
            <ul className="mt-6 space-y-1">
              <li><a href={profile.social.github} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-3 text-silver hover:text-accent"><Github size={18} /> GitHub</a></li>
              <li><a href={`mailto:${profile.email}`} className="inline-flex h-11 items-center gap-3 text-silver hover:text-accent"><Gmail size={18} /> Gmail</a></li>
              <li><a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-3 text-silver hover:text-accent"><Linkedin size={18} /> LinkedIn</a></li>
            </ul>
          </div>

          <div className="md:col-span-7">
            {profile.formEndpoint ? (
              <form onSubmit={submit} className="space-y-4">
                <label className="block"><span className="eyebrow mb-2 block">Name</span><input name="name" required autoComplete="name" className={field} /></label>
                <label className="block"><span className="eyebrow mb-2 block">Email</span><input name="email" type="email" required autoComplete="email" className={field} /></label>
                <label className="block"><span className="eyebrow mb-2 block">Message</span><textarea name="message" required rows={5} className={field} /></label>
                <button disabled={state === 'sending'} className="h-12 btn-grad rounded-full px-7 text-sm font-medium disabled:opacity-60">{state === 'sending' ? 'Sending…' : 'Send message'}</button>
                <p role="status" className="text-sm">
                  {state === 'ok' && <span className="text-accent">Message sent.</span>}
                  {state === 'error' && <span className="text-red-400">Couldn’t send. Please email me directly instead.</span>}
                </p>
              </form>
            ) : (
              <div className="border border-line bg-graphite p-6 md:p-8">
                <p className="text-silver">The quickest way to reach me is email.</p>
                <a href={`mailto:${profile.email}?subject=Hello%20Praneeth`} className="mt-6 inline-flex h-12 items-center gap-2 btn-grad rounded-full px-7 text-sm font-medium"><Mail size={16} /> Write an email</a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
      <footer className="wrap relative mt-28 border-t border-line pt-10 text-sm text-mute">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div><p className="font-mono text-sm text-strong"><span className="text-accent-soft">&lt;</span>{profile.name}<span className="text-accent-soft"> /&gt;</span></p><p className="mt-3 max-w-[16rem] text-xs leading-relaxed">AI engineer building conversational AI, retrieval systems and data pipelines.</p></div>
          <nav aria-label="Footer"><p className="eyebrow mb-4">Quick links</p><ul className="space-y-2"><li><a className="hover:text-strong" href="#about">About</a></li><li><a className="hover:text-strong" href="#experience">Experience</a></li><li><a className="hover:text-strong" href="#projects">Projects</a></li><li><a className="hover:text-strong" href="#skills">Skills</a></li></ul></nav>
          <div><p className="eyebrow mb-4">Focus</p><ul className="space-y-2"><li>Conversational AI</li><li>RAG &amp; retrieval</li><li>Data pipelines</li><li>Full-stack apps</li></ul></div>
          <div><p className="eyebrow mb-4">Contact</p><ul className="space-y-2"><li><a className="hover:text-strong break-all" href={`mailto:${profile.email}`}>{profile.email}</a></li><li>{profile.location}</li></ul></div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-1"><a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center hover:text-accent-soft"><Github /></a><a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-11 w-11 place-items-center hover:text-accent-soft"><Gmail /></a><a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center hover:text-accent-soft"><Linkedin /></a></div>
        <p className="mt-4 border-t border-line pt-6 text-center text-xs">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </section>
  )
}
