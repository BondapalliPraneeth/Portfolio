import type { SkillGroup } from './types'

// Mirrors the resume. No proficiency scores by design.
export const skillGroups: SkillGroup[] = [
  { id: 'voice', name: 'Speech & Agents', blurb: 'Real-time voice and tool-using agents.', items: ['Pipecat', 'STT / TTS integration', 'Voice-agent workflows', 'VAD', 'Tool calling'] },
  { id: 'ai', name: 'AI & Generative AI', blurb: 'Building with language models.', items: ['OpenAI API', 'Vertex AI', 'Gemini', 'Generative AI', 'NLP', 'Prompt engineering', 'Context design', 'Agentic AI'] },
  { id: 'rag', name: 'RAG & Retrieval', blurb: 'Grounding answers in documents.', items: ['RAG', 'Vector databases', 'Embeddings', 'Qdrant', 'BM25', 'Reciprocal Rank Fusion'] },
  { id: 'fw', name: 'AI Frameworks & Evaluation', blurb: 'Orchestration and observability.', items: ['LangChain', 'LangGraph', 'Langfuse', 'LangWatch', 'LangSmith', 'RAGAS'] },
  { id: 'back', name: 'Backend & Frontend', blurb: 'APIs and interfaces.', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'React.js', 'HTML', 'CSS', 'Tailwind CSS'] },
  { id: 'db', name: 'Databases', blurb: 'Persistence and retrieval stores.', items: ['PostgreSQL', 'MongoDB', 'SQL', 'Azure DB', 'Qdrant', 'Schema design', 'Query optimization', 'Connection pooling'] },
  { id: 'data', name: 'Data Engineering', blurb: 'Collecting and cleaning data.', items: ['Playwright', 'Web scraping', 'Browser automation', 'OCR (EasyOCR)', 'Geocoding'] },
  { id: 'cloud', name: 'Cloud & DevOps', blurb: 'Deploying and operating.', items: ['Azure', 'AWS', 'GCP', 'Linux (Ubuntu)', 'systemd', 'SSH', 'Tailscale VPN', 'CI/CD', 'Docker'] },
  { id: 'lang', name: 'Languages & Tools', blurb: 'Day to day.', items: ['Python', 'Java', 'JavaScript', 'Git', 'GitHub', 'VS Code', 'Postman'] },
]
