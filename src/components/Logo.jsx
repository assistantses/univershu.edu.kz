import { brand } from '../brand.js'

// Вымышленный логотип-шаблон: щит + монограмма. Легко заменить.
export default function Logo({ className = '', variant = 'dark' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink'
  const [first, ...rest] = brand.name.split(' ')
  const second = rest.join(' ')
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M24 2l18 6v12c0 12-8 20-18 26C14 40 6 32 6 20V8l18-6z" fill="#0345BF" />
        <path d="M24 6l14 4.7V20c0 9.6-6 16.2-14 21-8-4.8-14-11.4-14-21v-9.3L24 6z" fill="#1F5FE0" />
        <path d="M24 14l3.2 6.5 7.2 1-5.2 5 1.2 7.1L24 30.3l-6.4 3.3 1.2-7.1-5.2-5 7.2-1L24 14z" fill="#CDB020" />
      </svg>
      <div className={`leading-[1.05] ${textColor}`}>
        <div className="text-sm font-extrabold uppercase tracking-tight">{first}</div>
        <div className="text-sm font-extrabold uppercase tracking-tight">{second}</div>
      </div>
    </div>
  )
}
