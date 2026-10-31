import { useCallback, useEffect, useState } from 'react'
import Nav from './components/layout/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Certificates from './sections/Certificates'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import ProjectDetail from './components/projects/ProjectDetail'
import { projects } from './data/projects'

const parse = () => {
  const m = window.location.hash.match(/^#\/project\/([\w-]+)$/)
  return m ? m[1] : null
}

export default function App() {
  const [slug, setSlug] = useState<string | null>(parse)
  useEffect(() => {
    const on = () => setSlug(parse())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const close = useCallback(() => { window.location.hash = '#projects' }, [])
  const project = projects.find((p) => p.slug === slug)

  // Unknown project route: fall back to the page instead of a blank screen.
  useEffect(() => { if (slug && !project) window.location.hash = '#projects' }, [slug, project])

  return (
    <div className="grain">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-accent focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Contact />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Experience />
      </main>
      {project && <ProjectDetail project={project} onClose={close} />}
    </div>
  )
}
