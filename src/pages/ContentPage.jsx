import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import NotFound from './NotFound.jsx'
import { brand } from '../brand.js'
import { pageContent } from '../data/pageContent.js'

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

  return (
    <>
      <PageHeader title={title} crumbs={[title]} />
      <div className="container-c max-w-3xl py-12">
        {content.p && content.p.length > 0 ? (
          <div className="space-y-4 text-muted">
            {content.p.map((p, i) => <p key={i}>{fillName(p)}</p>)}
          </div>
        ) : !content.list ? (
          <p className="text-sm text-brand-100">—</p>
        ) : null}

        {content.list && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.list.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{fillName(item)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
