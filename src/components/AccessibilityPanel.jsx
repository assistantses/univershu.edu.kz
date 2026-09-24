import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const FONT_KEY = 'aqu_a11y_font' // 'normal' | 'md' | 'lg'
const CONTRAST_KEY = 'aqu_a11y_contrast' // 'normal' | 'dark'

function apply(font, contrast) {
  const root = document.documentElement
  root.classList.remove('a11y-font-md', 'a11y-font-lg')
  if (font === 'md') root.classList.add('a11y-font-md')
  if (font === 'lg') root.classList.add('a11y-font-lg')
  root.classList.toggle('a11y-contrast-dark', contrast === 'dark')
}

export default function AccessibilityPanel({ className = '' }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [font, setFont] = useState(() => localStorage.getItem(FONT_KEY) || 'normal')
  const [contrast, setContrast] = useState(() => localStorage.getItem(CONTRAST_KEY) || 'normal')
  const ref = useRef(null)

  useEffect(() => {
    apply(font, contrast)
    localStorage.setItem(FONT_KEY, font)
    localStorage.setItem(CONTRAST_KEY, contrast)
  }, [font, contrast])

  useEffect(() => {
    if (!open) return
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="rounded-full border border-ink/20 px-3 py-1 text-xs font-semibold text-ink hover:bg-black/5"
      >
        {t('header.accessibility')}
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-64 rounded-lg border border-brand-100 bg-white p-4 text-left shadow-card">
          <div className="mb-3">
            <div className="mb-1 text-xs font-bold uppercase text-muted">{t('a11y.fontSize')}</div>
            <div className="flex gap-2">
              {[['normal', 'A'], ['md', 'A+'], ['lg', 'A++']].map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setFont(k)}
                  className={`flex-1 rounded border px-2 py-1 text-sm font-bold ${font === k ? 'border-brand bg-brand-50 text-brand' : 'border-brand-100 text-ink'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase text-muted">{t('a11y.contrast')}</div>
            <div className="flex gap-2">
              {[['normal', t('a11y.normal')], ['dark', t('a11y.dark')]].map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setContrast(k)}
                  className={`flex-1 rounded border px-2 py-1 text-sm font-semibold ${contrast === k ? 'border-brand bg-brand-50 text-brand' : 'border-brand-100 text-ink'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
