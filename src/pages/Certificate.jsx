import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import NotFound from './NotFound.jsx'

// Страницы-подтверждения сертификатов — на такую ссылку ведёт QR-код,
// напечатанный на самом документе.
const certificates = {
  final1: { file: '/final1.pdf', title: 'Сертификат соответствия' },
  final2: { file: '/final2.pdf', title: 'Сертификат аккредитации' },
}

export default function Certificate() {
  const { t } = useTranslation()
  const { id } = useParams()
  const cert = certificates[id]

  if (!cert) return <NotFound />

  return (
    <>
      <PageHeader title={cert.title} crumbs={[cert.title]} />
      <div className="container-c py-12">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-brand-100 shadow-card">
          <iframe src={cert.file} title={cert.title} className="h-[80vh] w-full" />
        </div>
        <div className="mt-6 text-center">
          <a href={cert.file} download className="btn-outline">
            {t('certificate.download')}
          </a>
        </div>
      </div>
    </>
  )
}
