import { useTranslation } from 'react-i18next'

// Страницы транскрипта одна под другой + одна кнопка скачивания PDF.
// Адреса приходят из ответа на /api/certificate/{hash}/verify и содержат
// короткоживущий пропуск: файлы лежат в бэкенде, а не в статике, и без
// пропуска не отдаются (см. CertificateController).
export default function CertificatePages({ pages, pdf }) {
  const { t } = useTranslation()

  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {pages.map((page, i) => (
          <img
            key={page.svg}
            src={page.svg}
            alt={`${t('certificate.title')} — ${i + 1}`}
            loading="lazy"
            className="w-full rounded-xl border border-brand-100 shadow-card"
          />
        ))}
      </div>
      {pdf && (
        <div className="mt-6 flex justify-center">
          <a href={pdf} download className="btn-outline">
            {t('certificate.download')}
          </a>
        </div>
      )}
    </>
  )
}
