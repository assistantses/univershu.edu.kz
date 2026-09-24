import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { news, localize } from '../data/content.js'

const DATE_LOCALES = { kk: 'kk-KZ', ru: 'ru-RU', en: 'en-US' }
const fmt = (d, lang) => new Date(d).toLocaleDateString(DATE_LOCALES[lang] || 'ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

export default function NewsDetail() {
  const { t, i18n } = useTranslation()
  const { id } = useParams()
  const item = news.find((n) => n.id === id)

  if (!item) {
    return (
      <>
        <PageHeader title={t('news.notFoundTitle')} crumbs={[t('news.pageTitle')]} />
        <div className="container-c py-16 text-center">
          <p className="text-muted">{t('news.notFoundText')}</p>
          <Link to="/news" className="btn-brand mt-6">{t('news.backToAll')}</Link>
        </div>
      </>
    )
  }

  const l = localize(item, i18n.language)
  const others = news.filter((n) => n.id !== item.id).slice(0, 3)

  return (
    <>
      <PageHeader title={l.title} crumbs={[t('news.pageTitle'), l.tag]} />
      <div className="container-c grid gap-10 py-12 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-xs">
            <span className="rounded bg-gold/15 px-2 py-0.5 font-semibold text-gold-dark">{l.tag}</span>
            <span className="text-muted">{fmt(item.date, i18n.language)}</span>
          </div>
          <img src={item.image} alt={l.title} className="mb-6 w-full rounded-xl shadow-card" />
          <div className="space-y-4 text-[15px] leading-relaxed text-ink">
            {l.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Link to="/news" className="btn-outline mt-8">← {t('news.backToAll')}</Link>
        </article>
        <aside>
          <h3 className="mb-4 font-bold text-brand">{t('news.otherNews')}</h3>
          <div className="space-y-4">
            {others.map((n) => {
              const ol = localize(n, i18n.language)
              return (
                <Link key={n.id} to={`/news/${n.id}`} className="flex gap-3 group">
                  <img src={n.image} alt="" className="h-16 w-24 shrink-0 rounded-lg object-cover" />
                  <div>
                    <div className="text-xs text-muted">{fmt(n.date, i18n.language)}</div>
                    <div className="text-sm font-semibold text-ink group-hover:text-brand">{ol.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </aside>
      </div>
    </>
  )
}
