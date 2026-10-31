export type FlowStep = { label: string; note?: string }

export type Project = {
  slug: string
  index: string
  title: string
  category: string
  /** Filter group on the projects section. */
  type: 'AI' | 'Data' | 'Web'
  summary: string
  tech: string[]
  /** Bullet points taken from the resume. */
  highlights: string[]
  problem: string
  solution: string
  flow: FlowStep[]
  flowNote: string
  decisions: string[]
  challenges: string[]
  /** Implemented vs. experimental. Edit once confirmed against the repository. */
  status: string
  visual: 'voice' | 'pipeline' | 'resume' | 'rag'
  repo?: string
  demo?: string
}

export type Role = {
  org: string
  title: string
  start: string
  end: string
  points: string[]
}

export type SkillGroup = {
  id: string
  name: string
  blurb: string
  items: string[]
}
