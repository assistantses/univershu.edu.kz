import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { pageContent } from '../data/pageContent.js'
import { images } from '../images.js'

// /page/sdg — на сайте-образце: колесо целей рядом с текстом, две декоративные
// кнопки (без ссылок — на сайте-образце у них тоже нет href) и иконки целей
// с подписью "Цель N" под каждой. Поэтому своя страница, а не generic ContentPage
// (текст берём из pageContent.js).
const GOAL_NUMBERS = [4, 5, 8, 15, 17]

export default function Sdg() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const content = pageContent.sdg[lang] || pageContent.sdg.ru

  return (
    <>
      <PageHeader title={t('nav.sdg')} crumbs={[t('nav.sdg')]} />
      <div className="container-c py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <img src={images.sdgWheel} alt={t('nav.sdg')} className="w-48 shrink-0 sm:w-56" />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {content.p.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-teal py-5 text-center text-lg font-extrabold uppercase tracking-wide text-white">
            {t('sdgPage.policy')}
          </div>
          <div className="rounded-xl bg-teal py-5 text-center text-lg font-extrabold uppercase tracking-wide text-white">
            {t('sdgPage.plans')}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {GOAL_NUMBERS.map((n, i) => (
            <div key={n} className="text-center">
              <div className="overflow-hidden rounded-xl shadow-card">
                <img src={images.sdgIcons[n]} alt={content.list[i]} className="w-full" />
              </div>
              <div className="mt-2 font-bold text-ink">{t('sdgPage.goal', { n })}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
