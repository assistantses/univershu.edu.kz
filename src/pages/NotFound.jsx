import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="container-c flex flex-col items-center justify-center py-24 text-center">
      <div className="text-7xl font-extrabold text-brand-100">404</div>
      <h1 className="mt-4 text-2xl font-bold text-brand">{t('notFound.title')}</h1>
      <p className="mt-2 text-muted">{t('notFound.text')}</p>
      <Link to="/" className="btn-brand mt-6">{t('notFound.backHome')}</Link>
    </div>
  )
}
