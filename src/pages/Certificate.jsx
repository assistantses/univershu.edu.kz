import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import CertificatePages from '../components/CertificatePages.jsx'

// Страница подтверждения сертификата — QR-код на бумажном оригинале
// ведёт сюда. Транскрипт состоит из двух страниц, показанных друг под другом.
export default function Certificate() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('certificate.title')} crumbs={[t('certificate.title')]} />
      <div className="container-c py-12">
        <CertificatePages />
      </div>
    </>
  )
}
