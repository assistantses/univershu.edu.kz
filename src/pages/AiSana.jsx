import { useTranslation } from 'react-i18next'
import { brand } from '../brand.js'
import { pageContent } from '../data/pageContent.js'
import { images } from '../images.js'

// /page/aiAqu — на сайте-образце это не обычный текстовый раздел, а отдельная
// промо-страница с тёмным hero-баннером, инфографикой дорожной карты и фото
// с презентации программы студентам. Поэтому своя страница, а не generic
// ContentPage (текст берём из pageContent.js, чтобы не дублировать переводы).
export default function AiSana() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const content = pageContent.aiAqu[lang] || pageContent.aiAqu.ru

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 py-20 text-center text-white">
        <div className="container-c">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">AI-SANA</h1>
          <p className="mt-2 text-2xl font-bold text-sky-300 sm:text-3xl">{brand.name}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{content.p[0]}</p>
        </div>
      </div>

      <div className="container-c py-12">
        <img src={images.aiSana.title} alt="AI-SANA" className="mx-auto w-full max-w-3xl rounded-xl shadow-card" />

        <div className="mt-10 overflow-x-auto rounded-xl border border-brand-100 bg-white p-4 shadow-card">
          <img src={images.aiSana.roadmap} alt={t('aiSanaPage.stagePrepTitle')} className="mx-auto min-w-[640px]" />
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl bg-brand-50 p-6 text-center">
            <div className="text-2xl font-extrabold text-brand">95</div>
            <p className="mt-1 text-sm text-muted">{t('aiSanaPage.statUniversities')}</p>
          </div>
          <div className="rounded-xl bg-brand-50 p-6 text-center">
            <div className="text-2xl font-extrabold text-brand">27</div>
            <p className="mt-1 text-sm text-muted">{t('aiSanaPage.statAnchor')}</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {content.p.slice(1).map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <img src={images.aiSana.event} alt="AI-SANA" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
          {images.aiSana.classPhotos.map((src) => (
            <img key={src} src={src} alt="AI-SANA" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
          ))}
        </div>
      </div>
    </>
  )
}
