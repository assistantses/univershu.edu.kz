import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'

// /page/programs — на сайте-образце это не обычный текстовый раздел,
// а две карточки-выбора (Бакалавриат / Магистратура), ведущие на страницы
// со списком специальностей. Поэтому своя страница, а не generic ContentPage.
export default function ProgramsOverview() {
  const { t } = useTranslation()

  const cards = [
    { title: t('programsPage.bachelorTitle'), desc: t('programsPage.bachelorDesc'), to: '/page/bachelor' },
    { title: t('programsPage.masterTitle'), desc: t('programsPage.masterDesc'), to: '/page/master' },
  ]

  return (
    <>
      <PageHeader title={t('nav.programs')} crumbs={[t('nav.education'), t('nav.programs')]} />
      <div className="container-c py-12">
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{t('programsPage.intro')}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.to} className="flex flex-col items-center gap-4 rounded-xl bg-brand-50 p-10 text-center shadow-card">
              <h2 className="text-2xl font-extrabold text-ink">{c.title}</h2>
              <p className="text-base leading-relaxed text-muted">{c.desc}</p>
              <Link to={c.to} className="btn-brand mt-2">{t('programsPage.choose')}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
