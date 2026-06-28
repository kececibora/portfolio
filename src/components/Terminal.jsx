import { useEffect, useRef, useState } from 'react'

// Build-log style terminal using real-ish commands from an actual Flutter + ERP
// workflow. Build logs are universal, so this stays English regardless of UI
// language — it reads as a real code artifact, not invented marketing copy.
const SCRIPT = [
  { prompt: '$', text: 'flutter test', tone: 'text', tag: 'all passed', tagTone: 'accent' },
  { prompt: '$', text: 'node sync-logo-stock.js', tone: 'text' },
  { prompt: '›', text: 'syncing stock + purchasing', tone: 'muted', tag: 'OK', tagTone: 'accent' },
  { prompt: '$', text: 'flutter build apk --release', tone: 'text' },
  { prompt: '›', text: 'app-release.apk ready', tone: 'muted', tag: 'DONE', tagTone: 'accent-2' },
]

const toneClass = {
  text: 'text-text',
  muted: 'text-muted',
  accent: 'text-accent',
  'accent-2': 'text-accent-2',
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Terminal() {
  const [line, setLine] = useState(0)
  const [chars, setChars] = useState(0)
  const [finished, setFinished] = useState(false)
  const timer = useRef()

  useEffect(() => {
    if (prefersReducedMotion()) {
      setLine(SCRIPT.length)
      setFinished(true)
      return
    }

    const current = SCRIPT[line]
    if (!current) {
      setFinished(true)
      return
    }

    if (chars < current.text.length) {
      timer.current = setTimeout(() => setChars((c) => c + 1), 26 + Math.random() * 34)
    } else {
      // line complete — pause, then advance
      timer.current = setTimeout(() => {
        setLine((l) => l + 1)
        setChars(0)
      }, 420)
    }

    return () => clearTimeout(timer.current)
  }, [line, chars])

  return (
    <div className="panel-card crop overflow-hidden shadow-card">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-line bg-panel-2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 font-mono text-xs text-faint">~/rbkececi — build.log</span>
        <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-accent/70">
          LIVE
        </span>
      </div>

      {/* body */}
      <div className="space-y-2 px-5 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {SCRIPT.map((row, i) => {
          if (i > line) return null
          const isCurrent = i === line && !finished
          const shown = isCurrent ? row.text.slice(0, chars) : row.text
          const showTag = (i < line || finished) && row.tag
          return (
            <div key={i} className="flex flex-wrap items-center gap-x-2">
              <span className="select-none text-accent/70">{row.prompt}</span>
              <span className={toneClass[row.tone]}>
                {shown}
                {isCurrent && <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-accent animate-blink" />}
              </span>
              {showTag && (
                <span
                  className={`ml-auto rounded border px-2 py-[2px] text-[10px] font-medium uppercase tracking-wider ${
                    row.tagTone === 'accent-2'
                      ? 'border-accent-2/30 bg-accent-2/10 text-accent-2'
                      : 'border-accent/30 bg-accent/10 text-accent'
                  }`}
                >
                  {row.tag}
                </span>
              )}
            </div>
          )
        })}

        {finished && (
          <div className="flex items-center gap-2 pt-1">
            <span className="select-none text-accent/70">$</span>
            <span className="inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-accent animate-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
