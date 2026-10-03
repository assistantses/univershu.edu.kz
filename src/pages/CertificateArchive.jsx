import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import CertificatePages from '../components/CertificatePages.jsx'

const API_BASE = import.meta.env.VITE_API_URL || ''

// Ссылка из QR-кода на бумажном сертификате: /archive/:hash/:certId.
// hash не даёт угадать/перебрать чужую ссылку, а код, который нужно ввести
// в модалке, — второй фактор: просто открытая по неосторожности ссылка
// сама по себе сертификат не покажет.
export default function CertificateArchive() {
  const { hash, certId } = useParams()
  const { t } = useTranslation()
  const [code, setCode] = useState('')
  // Адреса страниц и PDF: приходят с бэкенда вместе с пропуском,
  // пока кода нет — показываем только форму ввода.
  const [doc, setDoc] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onCodeChange = (e) => {
    setCode(e.target.value.replace(/\D/g, '').slice(0, 4))
  }

  const submit = async (e) => {
    e.preventDefault()
    if (code.length !== 4) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/certificate/${hash}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certId, code }),
      })
      const data = await res.json()
      if (data.valid) setDoc({ pages: data.pages, pdf: data.pdf })
      else setError(t('certificate.codeError'))
    } catch {
      setError(t('certificate.codeError'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader title={t('certificate.title')} crumbs={[t('certificate.title')]} />
      <div className="container-c py-12">
        {!doc ? (
          <form onSubmit={submit} className="mx-auto w-full max-w-sm rounded-2xl border border-brand-100 bg-white p-8 shadow-card">
            <h1 className="mb-1 text-xl font-extrabold text-brand">{t('certificate.codeTitle')}</h1>
            <p className="mb-6 text-sm text-muted">{t('certificate.codePrompt')}</p>
            {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}
            <input
              value={code}
              onChange={onCodeChange}
              placeholder={t('certificate.codePlaceholder')}
              type="text"
              inputMode="numeric"
              pattern="\d{4}"
              maxLength={4}
              autoComplete="one-time-code"
              autoFocus
              className="mb-6 w-full rounded-lg border border-brand-100 px-4 py-2.5 text-center text-lg tracking-[0.4em] outline-none focus:border-brand"
            />
            <button disabled={loading || code.length !== 4} className="btn-brand w-full">{t('certificate.codeSubmit')}</button>
          </form>
        ) : (
          <CertificatePages pages={doc.pages} pdf={doc.pdf} />
        )}
      </div>
    </>
  )
}
