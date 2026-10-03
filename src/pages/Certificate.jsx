import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'

// Публичного предпросмотра здесь нет: транскрипт открывается только
// по ссылке из QR-кода (/archive/:hash/:certId) и после ввода кода.
export default function Certificate() {
  const { t } = useTranslation()

  return (
    <>
      <PageHeader title={t('certificate.title')} crumbs={[t('certificate.title')]} />
      <div className="container-c py-12">
        <p className="mx-auto max-w-lg text-center text-muted">{t('certificate.codePrompt')}</p>
      </div>
    </>
  )
}
