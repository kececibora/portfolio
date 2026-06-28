// Ambient page atmosphere: drifting cyan/violet gradient blobs behind a faint
// engineering blueprint grid and a whisper of noise. Pure CSS — no per-frame JS,
// so it stays cheap and respects reduced-motion via the global CSS rule.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* two quiet glow blobs — restrained, not a neon SaaS wash */}
      <div className="absolute -left-[10%] top-[-12%] h-[55vmax] w-[55vmax] rounded-full bg-accent/[0.055] blur-[150px] animate-drift" />
      <div className="absolute -right-[12%] top-[28%] h-[50vmax] w-[50vmax] rounded-full bg-accent-2/[0.05] blur-[160px] animate-drift-2" />

      {/* full-bleed blueprint grid — the structural signature */}
      <div className="blueprint-grid absolute inset-0 opacity-60" />

      {/* gentle top spotlight to ground the hero */}
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(55%_55%_at_50%_0%,rgba(63,224,255,0.06),transparent_70%)]" />

      {/* fine noise texture */}
      <div className="noise absolute inset-0 opacity-[0.035]" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,rgba(5,6,9,0.85)_100%)]" />
    </div>
  )
}
