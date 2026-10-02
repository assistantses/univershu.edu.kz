import { useTranslation } from 'react-i18next'
import { certificateSet } from '../images.js'

// Страницы транскрипта одна под другой + кнопки скачивания PDF.
// Набор файлов зависит от домена (см. certificateSet в src/images.js),
// используется на /certificate и на /archive/:hash/:certId.
export default function CertificatePages() {
  const { t } = useTranslation()
  const { pages, pdf } = certificateSet()

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {pages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${t('certificate.title')} — ${i + 1}`}
            loading="lazy"
            className="w-full rounded-xl border border-brand-100 shadow-card"
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-4">
        {pdf.map((href, i) => (
          <a key={href} href={href} download className="btn-outline">
            {t('certificate.download')} {i + 1}
          </a>
        ))}
      </div>
    </>
  )
}
