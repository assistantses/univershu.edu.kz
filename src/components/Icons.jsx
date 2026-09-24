export function ServiceIcon({ name, className = 'w-8 h-8' }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'portal':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 21h8M12 18v3" />
        </svg>
      )
    case 'app':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    case 'test':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M9 11l3 3 8-8" />
          <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
        </svg>
      )
    case 'lib':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    default:
      return null
  }
}
