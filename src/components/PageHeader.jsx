import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PageHeader({ title, crumbs = [] }) {
  const { t } = useTranslation()
  return (
    <div className="bg-brand text-white">
      <div className="container-c py-10">
        <nav className="mb-2 text-xs text-white/60">
          <Link to="/" className="hover:text-white">{t('pageHeader.home')}</Link>
          {crumbs.map((c) => (
            <span key={c}> / <span className="text-white/90">{c}</span></span>
          ))}
        </nav>
        <h1 className="text-3xl font-extrabold sm:text-4xl">{title}</h1>
      </div>
    </div>
  )
}
