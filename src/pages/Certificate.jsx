import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { images } from '../images.js'

// Страница подтверждения сертификата — QR-код на бумажном оригинале
// ведёт сюда. Один сертификат состоит из двух страниц (ser1, ser2),
// показанных друг под другом.
export default function Certificate() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('certificate.title')} crumbs={[t('certificate.title')]} />
      <div className="container-c py-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <div className="overflow-hidden rounded-xl border border-brand-100 shadow-card">
            <iframe src={images.certificates.ser1} title={`${t('certificate.title')} — 1`} className="h-[80vh] w-full" />
          </div>
          <div className="overflow-hidden rounded-xl border border-brand-100 shadow-card">
            <iframe src={images.certificates.ser2} title={`${t('certificate.title')} — 2`} className="h-[80vh] w-full" />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <a href={images.certificates.ser1} download className="btn-outline">{t('certificate.download')} 1</a>
          <a href={images.certificates.ser2} download className="btn-outline">{t('certificate.download')} 2</a>
        </div>
      </div>
    </>
  )
}
