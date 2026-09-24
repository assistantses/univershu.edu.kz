import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import AccessibilityPanel from './AccessibilityPanel.jsx'
import { brand, nav } from '../brand.js'
import { SUPPORTED_LANGS } from '../i18n/index.js'

const LANG_LABELS = { kk: 'ҚАЗ', ru: 'РУС', en: 'ENG' }

// Header follows a hamburger-only layout: no visible top-level nav bar,
// every link (incl. on desktop) lives in the slide-out panel — mirrors
// the reference site's structure.
export default function Header() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)

  const close = () => { setOpen(false); setExpanded(null) }
  const changeLang = (l) => i18n.changeLanguage(l)

  const LangSwitcher = ({ className = '' }) => (
    <div className={className}>
      {SUPPORTED_LANGS.map((l) => (
        <button
          key={l}
          onClick={() => changeLang(l)}
          aria-pressed={i18n.language === l}
          className={`rounded px-2 py-1 text-xs font-bold transition ${
            i18n.language === l ? 'bg-ink/10 text-ink' : 'text-muted hover:text-ink'
          }`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <header className="sticky top-0 z-40 h-16 bg-white shadow-sm">
        <div className="container-c flex h-16 items-center justify-between gap-4">
          <Link to="/" aria-label={brand.name} onClick={close}>
            <Logo />
          </Link>

          <div className="flex items-center gap-3">
            <LangSwitcher className="hidden items-center gap-1 sm:flex" />

            <label className="relative hidden md:block">
              <span className="sr-only">{t('header.searchPlaceholder')}</span>
              <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder={t('header.searchPlaceholder')}
                className="w-40 rounded bg-[#EFEFF0] py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted focus:w-56 transition-all"
              />
            </label>

            <button
              onClick={() => setOpen(true)}
              className="rounded p-2 text-ink hover:bg-black/5"
              aria-label={t('header.menu')}
              aria-expanded={open}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Off-canvas nav panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between border-b border-black/5 px-5">
          <Logo />
          <button onClick={close} className="rounded p-2 text-ink hover:bg-black/5" aria-label={t('header.closeMenu')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-1 border-b border-black/5 px-5 py-3">
          <LangSwitcher className="flex items-center gap-1" />
          <AccessibilityPanel className="ml-auto" />
        </div>

        <div className="border-b border-black/5 px-5 py-3">
          <label className="relative block">
            <span className="sr-only">{t('header.searchPlaceholder')}</span>
            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder={t('header.searchSite')}
              className="w-full rounded bg-[#EFEFF0] py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted"
            />
          </label>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {nav.map((item) => (
            <div key={item.key} className="border-b border-black/5">
              {item.children ? (
                <button
                  onClick={() => setExpanded((v) => (v === item.key ? null : item.key))}
                  className="flex w-full items-center justify-between px-5 py-2 text-left text-sm font-semibold text-ink hover:bg-black/5"
                >
                  {t(`nav.${item.key}`)}
                  <svg
                    className={`h-4 w-4 shrink-0 text-muted transition-transform ${expanded === item.key ? 'rotate-90' : ''}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ) : item.to === '#' ? (
                <Link
                  to={item.to}
                  onClick={close}
                  className="block px-5 py-2 text-sm font-semibold text-ink hover:bg-black/5"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ) : (
                <NavLink
                  to={item.to}
                  onClick={close}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block px-5 py-2 text-sm font-semibold hover:bg-black/5 ${isActive ? 'text-brand' : 'text-ink'}`
                  }
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              )}
              {item.children && expanded === item.key && (
                <div className="bg-black/[0.03] pb-1">
                  {item.children.map((c, ci) => (
                    <Link
                      key={`${c.key}-${ci}`}
                      to={c.to}
                      onClick={close}
                      className="block px-8 py-1.5 text-sm text-muted hover:text-ink"
                    >
                      {t(`nav.${c.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="space-y-2 px-5 py-4 text-sm">
            <a href={`tel:${brand.phoneRaw}`} className="flex items-center gap-2 text-ink hover:text-brand">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
              </svg>
              {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-2 text-ink hover:text-brand">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {brand.email}
            </a>
            <a href="#" className="flex items-center gap-2 text-ink hover:text-brand">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              {brand.instagram}
            </a>
          </div>
        </nav>
      </aside>
    </>
  )
}
