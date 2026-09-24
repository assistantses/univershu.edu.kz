import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader.jsx'
import { brand } from '../brand.js'
import { images } from '../images.js'

export default function Contacts() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHeader title={t('contacts.pageTitle')} crumbs={[t('contacts.pageTitle')]} />
      <div className="container-c grid gap-10 py-12 lg:grid-cols-2">
        <div>
          <h2 className="section-title mb-6">{t('contacts.contactUs')}</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-bold text-brand">{t('contacts.addressLabel')}</dt>
              <dd className="text-muted">{t('common.city')}, {t('common.district')}, {t('common.address')}</dd>
            </div>
            <div>
              <dt className="font-bold text-brand">{t('contacts.phoneLabel')}</dt>
              <dd><a href={`tel:${brand.phoneRaw}`} className="text-muted hover:text-brand">{brand.phone}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-brand">{t('contacts.emailLabel')}</dt>
              <dd><a href={`mailto:${brand.email}`} className="text-muted hover:text-brand">{brand.email}</a></dd>
            </div>
            <div>
              <dt className="font-bold text-brand">{t('contacts.instagramLabel')}</dt>
              <dd className="text-muted">{brand.instagram}</dd>
            </div>
          </dl>
          <div className="mt-6 overflow-hidden rounded-xl border border-brand-100">
            <img src={images.contactsMap} alt={t('contacts.mapAlt')} className="w-full" />
          </div>

          <div className="mt-6 rounded-xl border border-teal/30 bg-teal/5 p-5">
            <h3 className="font-bold text-ink">{t('contacts.admissionTitle')}</h3>
            <p className="mt-1 text-sm text-muted">{t('contacts.admissionPeriod')}</p>
            <p className="text-sm text-muted">{t('contacts.admissionHours')}</p>
          </div>
        </div>

        <div>
          <h2 className="section-title mb-6">{t('contacts.formTitle')}</h2>
          {sent ? (
            <div className="rounded-xl border border-gold/40 bg-gold/10 p-6 text-sm text-ink">
              {t('contacts.thankYou')}
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="space-y-4"
            >
              {[
                { name: 'name', label: t('contacts.nameLabel'), type: 'text' },
                { name: 'email', label: t('contacts.emailLabel'), type: 'email' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="mb-1 block text-sm font-semibold text-ink">{f.label}</label>
                  <input required type={f.type} name={f.name}
                         className="w-full rounded-lg border border-brand-100 px-4 py-2.5 outline-none focus:border-brand" />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-sm font-semibold text-ink">{t('contacts.messageLabel')}</label>
                <textarea required rows="4" name="message"
                          className="w-full rounded-lg border border-brand-100 px-4 py-2.5 outline-none focus:border-brand" />
              </div>
              <button type="submit" className="btn-gold w-full">{t('contacts.submit')}</button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
