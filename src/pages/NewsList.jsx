import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { news, localize } from '../data/content.js'

const DATE_LOCALES = { kk: 'kk-KZ', ru: 'ru-RU', en: 'en-US' }
const fmt = (d, lang) => new Date(d).toLocaleDateString(DATE_LOCALES[lang] || 'ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

export default function NewsList() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <PageHeader title={t('news.pageTitle')} crumbs={[t('news.pageTitle')]} />
      <div className="container-c py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => {
            const l = localize(n, i18n.language)
            return (
              <Link key={n.id} to={`/news/${n.id}`}
                    className="group overflow-hidden rounded-xl border border-brand-100 bg-white shadow-card transition hover:shadow-card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt={l.title} loading="lazy"
                       className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded bg-gold/15 px-2 py-0.5 font-semibold text-gold-dark">{l.tag}</span>
                    <span className="text-muted">{fmt(n.date, i18n.language)}</span>
                  </div>
                  <h3 className="mt-2 font-bold text-ink group-hover:text-brand">{l.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted">{l.excerpt}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
