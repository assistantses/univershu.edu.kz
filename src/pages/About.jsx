import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { brand } from '../brand.js'
import { images } from '../images.js'

const leadershipImages = images.leadership

export default function About() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true })
  const leadership = t('about.leadership', { returnObjects: true })
  const licenseItems = t('about.licenseItems', { returnObjects: true })
  const visionText = t('about.visionText', { name: brand.name, returnObjects: true })
  const inclusiveItems = t('about.inclusiveItems', { returnObjects: true })
  const historyText = t('about.historyText', {
    name: brand.name,
    founded: brand.founded,
    years: brand.stats.years,
    students: brand.stats.students,
    bachelor: brand.stats.bachelor,
    returnObjects: true,
  })
  const dormText = t('about.dormText', { name: brand.name, returnObjects: true })
  const inclusiveText = t('about.inclusiveText', { name: brand.name, returnObjects: true })

  return (
    <>
      <PageHeader title={t('about.pageTitle')} crumbs={[t('about.pageTitle')]} />

      <section id="history" className="container-c py-12">
        <span className="kicker">{t('about.historyKicker')}</span>
        <h2 className="section-title mt-1 mb-4">{t('about.historyTitle', { founded: brand.founded })}</h2>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {historyText.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="mission" className="bg-brand-50 py-12">
        <div className="container-c grid gap-8 md:grid-cols-2">
          <div>
            <span className="kicker">{t('about.missionKicker')}</span>
            <h2 className="section-title mt-1 mb-4">{t('about.missionTitle')}</h2>
            <p className="text-lg leading-relaxed text-muted">{t('about.missionText')}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map(([a, b]) => (
              <div key={a} className="rounded-xl bg-white p-5 shadow-card">
                <div className="font-bold text-brand">{a}</div>
                <div className="text-sm text-muted">{b}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-c mt-10 max-w-3xl">
          <h3 className="text-xl font-extrabold text-ink">{t('about.visionTitle')}</h3>
          <div className="mt-3 space-y-4 text-lg leading-relaxed text-muted">
            {visionText.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section id="leadership" className="container-c py-12">
        <span className="kicker">{t('about.teamKicker')}</span>
        <h2 className="section-title mt-1 mb-6">{t('about.leadershipTitle')}</h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {leadership.map((l, i) => (
            <div key={l.name} className="overflow-hidden rounded-xl border border-brand-100 bg-white shadow-card">
              <img src={leadershipImages[i]} alt={l.name} className="aspect-[3/4] w-full object-cover object-top" />
              <div className="p-4">
                <div className="text-base font-bold text-ink">{l.name}</div>
                <div className="mt-1 text-sm leading-snug text-muted">{l.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="dorm" className="container-c py-12">
        <span className="kicker">{t('about.campusKicker')}</span>
        <h2 className="section-title mt-1 mb-4">{t('about.dormTitle')}</h2>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {dormText.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section id="inclusive" className="bg-brand-50 py-12">
        <div className="container-c">
          <span className="kicker">{t('about.accessibilityKicker')}</span>
          <h2 className="section-title mt-1 mb-4">{t('about.inclusiveTitle')}</h2>
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            {inclusiveText.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {inclusiveItems.map((item) => (
              <li key={item} className="flex gap-2.5 text-base leading-relaxed text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="licenses" className="py-12">
        <div className="container-c">
          <span className="kicker">{t('about.docsKicker')}</span>
          <h2 className="section-title mt-1 mb-6">{t('about.licensesTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {licenseItems.map((d) => (
              <div key={d} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-card">
                <svg className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 15a4 4 0 100-8 4 4 0 000 8z" /><path d="M9 12l-3 9 6-3 6 3-3-9" />
                </svg>
                <span className="text-sm font-semibold text-ink">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
