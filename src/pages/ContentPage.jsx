import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import NotFound from './NotFound.jsx'
import { brand } from '../brand.js'
import { pageContent } from '../data/pageContent.js'
import { images } from '../images.js'

function fillName(text) {
  return text.replace(/\{\{name\}\}/g, brand.name)
}

export default function ContentPage() {
  const { t, i18n } = useTranslation()
  const { key } = useParams()
  const entry = pageContent[key]

  if (!entry) return <NotFound />

  const lang = i18n.language
  const content = entry[lang] || entry.ru
  const title = t(`nav.${key}`)
  const photo = images.staffPhotos && images.staffPhotos[key]

  return (
    <>
      <PageHeader title={title} crumbs={[title]} />
      <div className="container-c max-w-3xl py-12">
        {photo && content.person && (
          <div className="mb-8 flex items-center gap-5 rounded-xl border border-brand-100 bg-white p-5 shadow-card">
            <img src={photo} alt={content.person.name} className="h-28 w-28 shrink-0 rounded-lg object-cover object-top" />
            <div>
              <div className="text-lg font-bold text-ink">{content.person.name}</div>
              <div className="mt-1 text-sm leading-snug text-muted">{content.person.role}</div>
            </div>
          </div>
        )}

        {content.p && content.p.length > 0 ? (
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {content.p.map((p, i) => <p key={i}>{fillName(p)}</p>)}
          </div>
        ) : !content.list ? (
          <p className="text-base text-brand-100">—</p>
        ) : null}

        {content.list && (
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.list.map((item) => (
              <li key={item} className="flex gap-2.5 text-base leading-relaxed text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{fillName(item)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
