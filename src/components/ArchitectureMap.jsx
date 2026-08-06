import { Cpu, Radio, Smartphone, Sparkles } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'

const nodes = [
  {
    key: 'mobile',
    code: '01 / INTERFACE',
    title: 'Flutter',
    detail: 'Mobile + Web',
    icon: Smartphone,
    position: 'left-[4%] top-[9%]',
  },
  {
    key: 'backend',
    code: '02 / SERVICES',
    title: 'Node + Firebase',
    detail: 'API + Cloud',
    icon: Radio,
    position: 'right-[4%] top-[9%]',
  },
  {
    key: 'automation',
    code: '03 / AUTOMATION',
    title: 'AI + Automation',
    detail: 'Agents + Workflows',
    icon: Sparkles,
    position: 'bottom-[9%] left-[4%]',
  },
  {
    key: 'device',
    code: '04 / DEVICE',
    title: 'ESP32 + Arduino',
    detail: 'BLE + Sensors',
    icon: Cpu,
    position: 'bottom-[9%] right-[4%]',
  },
]

const routes = [
  { d: 'M 23 22 C 30 22, 31 39, 42 45', dur: '3.4s', begin: '-0.7s' },
  { d: 'M 77 22 C 70 22, 69 39, 58 45', dur: '3.8s', begin: '-2.1s' },
  { d: 'M 23 78 C 31 78, 32 61, 42 55', dur: '4s', begin: '-1.4s' },
  { d: 'M 77 78 C 69 78, 68 61, 58 55', dur: '3.6s', begin: '-2.8s' },
]

export function ArchitectureMap({ copy, facts }) {
  const reduce = useReducedMotion()

  return (
    <figure className="architecture-map panel-card crop relative overflow-hidden shadow-card">
      <div className="flex items-center gap-3 border-b border-line/80 bg-panel-2/70 px-4 py-3 sm:px-5">
        <span className="label">SYS. MAP / 01</span>
        <span className="hidden h-px flex-1 bg-gradient-to-r from-line to-transparent sm:block" />
        <span className="ml-auto inline-flex items-center gap-2 font-mono text-[11px] text-faint">
          <span className="relative flex h-1.5 w-1.5">
            {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />}
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {copy.status}
        </span>
      </div>

      <div className="architecture-stage relative min-h-[390px] overflow-hidden sm:min-h-[430px]">
        <div className="blueprint-grid absolute inset-0 opacity-80" />
        <div className="architecture-glow absolute inset-0" />

        <svg
          aria-hidden="true"
          className="architecture-routes absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {routes.map((route) => (
            <path key={route.d} d={route.d} className="architecture-route" pathLength="1" />
          ))}
          {!reduce &&
            routes.map((route) => (
              <circle key={`${route.d}-packet`} r="0.72" className="architecture-packet">
                <animateMotion
                  path={route.d}
                  dur={route.dur}
                  begin={route.begin}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
        </svg>

        <span className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.18em] text-faint/80">
          39.93°N / 32.86°E
        </span>
        <span className="absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.18em] text-faint/80">
          SCALE 1:1 / RBK
        </span>

        {nodes.map((node) => {
          const Icon = node.icon
          return (
            <div
              key={node.key}
              className={`architecture-node absolute z-10 w-[40%] max-w-[188px] rounded-xl border border-line/90 bg-ink/85 p-3 backdrop-blur-md sm:p-4 ${node.position}`}
            >
              <div className="flex items-start gap-2.5">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-lg border border-accent/20 bg-accent/[0.07] text-accent sm:h-9 sm:w-9">
                  <Icon size={16} strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-mono text-[8px] tracking-[0.12em] text-faint sm:text-[9px]">
                    {node.code}
                  </span>
                  <strong className="mt-0.5 block font-display text-[11px] font-semibold leading-tight text-text sm:text-[13px]">
                    {node.title}
                  </strong>
                </span>
              </div>
              <span className="mt-2 block border-t border-line/70 pt-2 font-mono text-[9px] text-muted sm:text-[10px]">
                {node.detail}
              </span>
            </div>
          )
        })}

        <div className="architecture-core absolute left-1/2 top-1/2 z-20 grid h-[116px] w-[138px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-accent/35 bg-ink/95 text-center shadow-glow sm:h-[132px] sm:w-[164px]">
          <span aria-hidden className="architecture-core-orbit absolute -inset-3 rounded-[1.35rem] border border-dashed border-accent/20" />
          <span>
            <span className="block font-mono text-[9px] tracking-[0.22em] text-accent/75">RBK / CORE</span>
            <strong className="mt-1.5 block font-display text-base font-semibold leading-tight text-text sm:text-lg">
              {copy.core}
            </strong>
            <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[9px] text-faint sm:text-[10px]">
              <span className="h-1 w-1 rounded-full bg-accent-2" />
              MODEL → BUILD
            </span>
          </span>
        </div>
      </div>

      <figcaption className="border-t border-line/80 bg-panel-2/45 px-4 py-4 sm:px-5">
        <div className="grid grid-cols-3 gap-2">
          {facts.map((fact) => (
            <span key={fact.k} className="min-w-0">
              <strong className="block font-display text-base font-semibold text-text">{fact.k}</strong>
              <span className="mt-0.5 block font-mono text-[9px] leading-tight text-faint sm:truncate sm:text-[10px]">{fact.v}</span>
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  )
}
