// Central site content. Edit here; nothing else needs touching for text/links.
export const profile = {
  name: 'Bondapalli Praneeth',
  title: 'AI Engineer & Generative AI Developer',
  tagline: 'Building Intelligent Systems. Engineering What’s Next.',
  heroTags: ['Python', 'FastAPI', 'LLMs', 'RAG', 'Pipecat'],
  wordmark: 'BONDAPALLI.PRANEETH',
  monogram: 'BP',
  role: 'AI Engineer · Generative AI Developer · Agentic AI',
  location: 'Hyderabad, India',
  headline: ['Building Intelligent Systems.', 'Engineering What’s Next.'],
  intro:
    'I’m Praneeth — an AI-focused engineer building conversational AI, intelligent retrieval systems, and practical Generative AI applications.',
  // Edit freely. Currently reflects the resume ("May 2026 – Present").
  status: 'AI Engineering Intern · Farm Vaidya AI',
  about: {
    heading: 'Curiosity into Engineering.',
    paragraphs: [
      'I’m a Computer Science student in Hyderabad who learns by building. My work sits where language models meet real engineering constraints: latency, retrieval quality, messy data, and systems that have to keep running.',
      'As an AI Engineering Intern at Farm Vaidya AI I work on real-time voice agents, retrieval over domain knowledge bases, and agricultural data pipelines. I care less about demos and more about whether a system is grounded, observable, and maintainable.',
    ],
    interests: [
      'Conversational AI',
      'RAG & knowledge retrieval',
      'Agentic systems',
      'Data engineering',
      'Production-oriented applications',
    ],
  },
  education: [
    { degree: 'B.Tech, Computer Science and Engineering', school: 'Anurag University', years: '2022 – Present' },
  ],
  certifications: ['NPTEL – Machine Learning', 'Microsoft AI Challenge'],
  email: 'bondapallipraneeth@gmail.com',
  social: {
    github: 'https://github.com/bondapallipraneeth',
    linkedin: 'https://www.linkedin.com/in/bondapalli-praneeth-1522a53b4/',
  },
  // Replace public/Praneeth-Resume.pdf to update. Set to null for a disabled download state.
  resumePath: '/Praneeth-Resume.pdf' as string | null,
  // Contact form: paste a Formspree endpoint (https://formspree.io/f/xxxx) to enable it.
  // While empty, the form is replaced by a working mailto link.
  formEndpoint: '',
}

export const principles = [
  { t: 'Solve the real problem', d: 'Start from the user’s workflow and the data they actually have, then pick the smallest system that works.' },
  { t: 'Measure before optimizing', d: 'Trace and time a pipeline end to end before touching it. Intuition about latency is usually wrong.' },
  { t: 'Ground the answer', d: 'Responses should come from retrievable, inspectable sources — and say so when the source is missing.' },
  { t: 'Design for observability', d: 'If a call or a retrieval can’t be traced afterwards, it can’t be debugged or improved.' },
  { t: 'Keep experiments reproducible', d: 'Chunking, embedding and retrieval settings are written down so a result can be re-run, not remembered.' },
]
