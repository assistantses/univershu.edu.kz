import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { images } from '../images.js'

const API_BASE = import.meta.env.VITE_API_URL || ''

// Ссылка из QR-кода на бумажном сертификате: /archive/:hash/:certId.
// hash не даёт угадать/перебрать чужую ссылку, а код, который нужно ввести
// в модалке, — второй фактор: просто открытая по неосторожности ссылка
// сама по себе сертификат не покажет.
export default function CertificateArchive() {
  const { hash, certId } = useParams()
  const { t } = useTranslation()
  const [code, setCode] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/certificate/${hash}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certId, code }),
      })
      const data = await res.json()
      if (data.valid) setUnlocked(true)
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
        {!unlocked ? (
          <form onSubmit={submit} className="mx-auto w-full max-w-sm rounded-2xl border border-brand-100 bg-white p-8 shadow-card">
            <h1 className="mb-1 text-xl font-extrabold text-brand">{t('certificate.codeTitle')}</h1>
            <p className="mb-6 text-sm text-muted">{t('certificate.codePrompt')}</p>
            {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t('certificate.codePlaceholder')}
              inputMode="numeric"
              autoFocus
              className="mb-6 w-full rounded-lg border border-brand-100 px-4 py-2.5 text-center text-lg tracking-widest outline-none focus:border-brand"
            />
            <button disabled={loading} className="btn-brand w-full">{t('certificate.codeSubmit')}</button>
          </form>
        ) : (
          <>
            <div className="mx-auto flex max-w-3xl flex-col gap-6">
              <img
                src={images.certificates.ser1}
                alt={`${t('certificate.title')} — 1`}
                className="w-full rounded-xl border border-brand-100 shadow-card"
              />
              <img
                src={images.certificates.ser2}
                alt={`${t('certificate.title')} — 2`}
                className="w-full rounded-xl border border-brand-100 shadow-card"
              />
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <a href={images.certificates.ser1} download className="btn-outline">{t('certificate.download')} 1</a>
              <a href={images.certificates.ser2} download className="btn-outline">{t('certificate.download')} 2</a>
            </div>
          </>
        )}
      </div>
    </>
  )
}
