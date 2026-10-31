import { useReducedMotion } from 'motion/react'
import type { Project } from '../../data/types'

// Lightweight 2D SVG visuals (cheap on mobile). Decorative: text content carries the meaning.
const A = 'var(--color-accent-soft)'
const L = 'var(--color-line)'
const S = 'var(--color-mute)'

function Voice({ still }: { still: boolean }) {
  const bars = Array.from({ length: 44 }, (_, i) => i)
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden>
      {[60, 150, 250, 340].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={44} r={9} fill="var(--color-graphite)" stroke={i === 2 ? A : L} />
          {i < 3 && <line x1={x + 9} y1={44} x2={[150, 250, 340][i] - 9} y2={44} stroke={L} strokeDasharray="4 4" style={still ? undefined : { animation: 'flow 1.2s linear infinite' }} />}
        </g>
      ))}
      <g transform="translate(0 130)">
        {bars.map((i) => {
          const h = 8 + Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.17)) * 62
          return (
            <rect key={i} x={20 + i * 8.5} y={-h / 2} width={3} height={h} rx={1.5} fill={i > 14 && i < 30 ? A : S} opacity={i > 14 && i < 30 ? 0.95 : 0.45}
              style={still ? undefined : { transformOrigin: `${21.5 + i * 8.5}px 0`, animation: `wave ${1.1 + (i % 7) * 0.13}s ease-in-out ${i * 0.03}s infinite alternate` }} />
          )
        })}
      </g>
      <style>{`@keyframes wave{from{transform:scaleY(.35)}to{transform:scaleY(1.1)}}`}</style>
    </svg>
  )
}

function Pipeline({ still }: { still: boolean }) {
  const nodes = [[50, 60], [50, 150], [170, 105], [290, 60], [290, 150], [360, 105]]
  const edges = [[0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5]]
  return (
    <svg viewBox="0 0 400 210" className="h-full w-full" aria-hidden>
      {edges.map(([a, b], i) => (
        <g key={i}>
          <line x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={L} />
          {!still && (
            <circle r={2.6} fill={A}>
              <animateMotion dur={`${2 + (i % 3) * 0.6}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} path={`M${nodes[a][0]},${nodes[a][1]} L${nodes[b][0]},${nodes[b][1]}`} />
            </circle>
          )}
        </g>
      ))}
      {nodes.map(([x, y], i) => <rect key={i} x={x - 11} y={y - 11} width={22} height={22} rx={3} fill="var(--color-graphite)" stroke={i === 2 ? A : L} />)}
    </svg>
  )
}

function Resume({ still }: { still: boolean }) {
  return (
    <svg viewBox="0 0 400 210" className="h-full w-full" aria-hidden>
      <rect x={50} y={20} width={120} height={170} rx={4} fill="var(--color-graphite)" stroke={L} />
      {[40, 56, 72, 100, 116, 132, 148].map((y, i) => <rect key={y} x={64} y={y} width={i % 3 === 0 ? 50 : 90} height={5} rx={2} fill={S} opacity={0.4} />)}
      <rect x={64} y={86} width={92} height={5} rx={2} fill={A} opacity={0.85} />
      <rect x={230} y={20} width={120} height={170} rx={4} fill="var(--color-graphite)" stroke={L} />
      {[40, 56, 72, 88, 104].map((y) => <rect key={y} x={244} y={y} width={78} height={5} rx={2} fill={S} opacity={0.4} />)}
      <line x1={170} y1={104} x2={230} y2={104} stroke={A} strokeDasharray="4 4" style={still ? undefined : { animation: 'flow 1s linear infinite' }} />
      <circle cx={300} cy={150} r={20} fill="none" stroke={A} strokeDasharray="95 40" opacity={0.9} />
    </svg>
  )
}

function Rag({ still }: { still: boolean }) {
  return (
    <svg viewBox="0 0 400 210" className="h-full w-full" aria-hidden>
      {[0, 1, 2].map((i) => <rect key={i} x={20 + i * 4} y={40 + i * 4} width={44} height={60} rx={3} fill="var(--color-graphite)" stroke={L} />)}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={110} y={30 + i * 26} width={34} height={16} rx={2} fill="var(--color-graphite)" stroke={i === 1 || i === 4 ? A : L} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={144} y1={38 + i * 26} x2={230} y2={105} stroke={i === 1 || i === 4 ? A : L} opacity={i === 1 || i === 4 ? 0.9 : 0.5} strokeDasharray={i === 1 || i === 4 ? '4 4' : undefined} style={!still && (i === 1 || i === 4) ? { animation: 'flow 1.1s linear infinite' } : undefined} />)}
      <circle cx={240} cy={105} r={16} fill="var(--color-graphite)" stroke={A} />
      <line x1={256} y1={105} x2={300} y2={105} stroke={L} />
      <rect x={300} y={80} width={80} height={50} rx={4} fill="var(--color-graphite)" stroke={A} />
      {[92, 104, 116].map((y, i) => <rect key={y} x={310} y={y} width={i === 2 ? 30 : 58} height={4} rx={2} fill={S} opacity={0.6} />)}
    </svg>
  )
}

export default function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  const still = !!useReducedMotion()
  return (
    <div className="aspect-[400/210] w-full">
      {kind === 'voice' && <Voice still={still} />}
      {kind === 'pipeline' && <Pipeline still={still} />}
      {kind === 'resume' && <Resume still={still} />}
      {kind === 'rag' && <Rag still={still} />}
    </div>
  )
}
