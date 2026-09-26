import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { brand } from '../brand.js'
import { news, announcements, sports, features, services, partners, achievements, localize } from '../data/content.js'
import { ServiceIcon } from '../components/Icons.jsx'
import Carousel from '../components/Carousel.jsx'
import ImageSlideshow from '../components/ImageSlideshow.jsx'
import { images } from '../images.js'

const heroImages = [images.heroSlide1, images.heroSlide2]

const DATE_LOCALES = { kk: 'kk-KZ', ru: 'ru-RU', en: 'en-US' }
const fmt = (d, lang) => new Date(d).toLocaleDateString(DATE_LOCALES[lang] || 'ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

function DropText({ text, className = '', as: Tag = 'span' }) {
  return (
    <Tag className={className}>
      {text.split('').map((ch, i) => (
        <span key={i} className="drop-letter" style={{ animationDelay: `${i * 0.03}s` }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </Tag>
  )
}

function Hero() {
  const { t } = useTranslation()
  const heroSlides = [
    { image: heroImages[0], title: t('home.heroSlide1Title'), titleAnim: 'drop', subtitle: t('home.heroSlide1Subtitle') },
    { image: heroImages[1], title: t('home.heroSlide2Title'), titleAnim: 'side', subtitle: t('home.heroSlide2Subtitle') },
  ]
  const [slide, setSlide] = useState(0)
  const len = heroSlides.length

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % len), 6000)
    return () => clearInterval(timer)
  }, [len])

  useEffect(() => { setSlide(0) }, [t])

  const current = heroSlides[slide]
  const prev = () => setSlide((s) => (s - 1 + len) % len)
  const next = () => setSlide((s) => (s + 1) % len)

  return (
    <section id="hero" className="relative flex h-[580px] items-center overflow-hidden bg-ink text-white sm:h-[600px] lg:h-[700px]">
      {heroSlides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0"
               style={{ backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(21, 20, 22, 0.45)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        </div>
      ))}

      <div className="container-c relative">
        <div key={slide}>
          {current.titleAnim === 'drop' ? (
            <DropText text={current.title} className="kicker block text-teal" />
          ) : (
            <span className="kicker slide-in-side inline-block text-teal">{current.title}</span>
          )}
          <h1 className="rise-in mt-3 max-w-3xl text-4xl font-bold leading-[1.15] tracking-[-0.5px] sm:text-[70px] sm:leading-[96px] sm:tracking-[-1px]"
              style={{ animationDelay: '0.35s' }}>
            {current.subtitle}
          </h1>
        </div>
      </div>

      <button onClick={prev} aria-label={t('home.prevSlide')}
              className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-sm font-semibold text-white/60 hover:text-white">
        ‹ Prev
      </button>
      <button onClick={next} aria-label={t('home.nextSlide')}
              className="absolute right-6 top-1/2 z-10 -translate-y-1/2 text-sm font-semibold text-white/60 hover:text-white">
        Next ›
      </button>
    </section>
  )
}

function Card({ to, image, title, subtitle }) {
  return (
    <Link to={to} className="group block bg-white shadow-card transition hover:shadow-card-hover">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img src={image} alt={title} loading="lazy"
               className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="p-5">
        {subtitle && <div className="text-xs text-muted">{subtitle}</div>}
        <h3 className="mt-1 font-bold leading-snug text-ink group-hover:text-brand">{title}</h3>
      </div>
    </Link>
  )
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const featureList = features[lang] || features.ru

  return (
    <>
      <Hero />

      <div className="container-c mt-10 space-y-4">
        {/* ADMISSIONS CTA BAND */}
        <Link to="/#services" className="block bg-teal py-6 text-center transition-colors hover:bg-teal-dark">
          <span className="text-sm font-extrabold uppercase tracking-widest text-white">
            {t('home.ctaApplicant')}
          </span>
        </Link>

        {/* RANKING / TRUST BAND */}
        <Link to="/about#licenses" className="group block bg-gold py-6 text-center transition-colors hover:bg-emerald-500">
          <p className="text-sm font-bold uppercase tracking-wide text-ink transition-colors group-hover:text-white">
            {t('home.qsRanking')}
          </p>
        </Link>
      </div>

      {/* QS CERTIFICATE — placeholder image, replace with the university's real certificate */}
      <a
        href={images.qsCertificate}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mx-auto mt-8 block max-w-md overflow-hidden shadow-card"
      >
        <img
          src={images.qsCertificate}
          alt={t('home.qsCertAlt')}
          className="w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(119,219,31,0)] transition-colors group-hover:bg-[rgba(119,219,31,0.5)]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl font-bold leading-none text-ink opacity-0 transition group-hover:opacity-100">
            +
          </span>
        </div>
      </a>

      {/* NEWS */}
      <section id="news" className="bg-cream py-16">
        <div className="container-c">
          <h2 className="section-title mb-10 text-center">{t('home.newsTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 6).map((n) => {
              const l = localize(n, lang)
              return <Card key={n.id} to={`/news/${n.id}`} image={n.image} title={l.title} subtitle={fmt(n.date, lang)} />
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/news" className="btn-action">{t('home.showAllNews')}</Link>
          </div>
        </div>
      </section>

      {/* SPORT */}
      <section className="bg-white py-16">
        <div className="container-c">
          <h2 className="section-title mb-10 text-center">{t('home.sportTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((s) => {
              const l = localize(s, lang)
              return <Card key={s.id} to="/news" image={s.image} title={l.title} />
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/news" className="btn-action">{t('home.showAll')}</Link>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="bg-cream py-16">
        <div className="container-c">
          <h2 className="section-title mb-10 text-center">{t('home.announcementsTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {announcements.map((a) => {
              const l = localize(a, lang)
              return <Card key={a.id} to="/news" image={a.image} title={l.title} subtitle={fmt(a.date, lang)} />
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/news" className="btn-action">{t('home.showAllAnnouncements')}</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16">
        <div className="container-c grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title mb-4">{t('home.whyUs', { name: brand.name })}</h2>
            <p className="mb-6 text-sm text-muted">{t('home.whyUsIntro', { name: brand.name })}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {featureList.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="overflow-hidden">
              <img src={images.whyUsCampus} alt={t('home.campusAlt')}
                   className="h-full w-full object-cover" loading="lazy" />
            </div>
            <Link to="/about" className="btn-action mt-4 inline-flex">{t('home.moreAboutUni')}</Link>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP — plain typography, no cards */}
      <section id="services" className="bg-white pb-16">
        <div className="container-c grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const l = localize(s, lang)
            return (
              <a key={s.id} href={s.href} className="group">
                <div className="mb-3 text-brand">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-extrabold uppercase tracking-wide text-brand group-hover:text-brand-dark">{l.title}</h3>
                <p className="mt-2 text-sm text-muted">{l.desc}</p>
              </a>
            )
          })}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-cream py-16">
        <div className="container-c">
          <h2 className="section-title mb-10 text-center">{t('home.partnersTitle')}</h2>
          <Carousel prevLabel={t('home.prevSlide')} nextLabel={t('home.nextSlide')}>
            {partners.map((p, i) => (
              <div key={p.id} className="flex h-32 w-48 shrink-0 items-center justify-center grayscale transition hover:grayscale-0">
                <img src={p.logo} alt={`${t('home.partnerAlt')} ${i + 1}`} className="max-h-24 max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-white py-16">
        <div className="container-c">
          <h2 className="section-title mb-10 text-center">{t('home.achievementsTitle')}</h2>
          <ImageSlideshow images={achievements} prevLabel={t('home.prevSlide')} nextLabel={t('home.nextSlide')} />
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white pt-16">
        <div className="container-c max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{t('home.aboutTitle')}</h2>
          <p className="mt-6 text-lg text-muted">
            {t('home.aboutText', { name: brand.name, founded: brand.founded })}
          </p>
        </div>
      </section>

      {/* STATS STRIP — plain, no cards */}
      <section className="bg-white py-16">
        <div className="container-c flex flex-col items-center gap-10 sm:flex-row sm:justify-evenly sm:gap-6">
          {[
            { v: brand.founded, l: t('home.yearFounded') },
            { v: brand.stats.students, l: t('home.studentsLabel') },
            { v: brand.stats.faculties, l: t('home.facultiesLabel') },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <div className="text-lg text-ink">{x.l}</div>
              <div className="mt-2 text-4xl font-extrabold text-ink">{x.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/about" className="btn-action">{t('home.moreAbout', { name: brand.name })}</Link>
        </div>
      </section>
    </>
  )
}
