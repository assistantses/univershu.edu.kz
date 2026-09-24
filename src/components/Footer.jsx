import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { brand } from '../brand.js'

export default function Footer() {
  const { t } = useTranslation()
  const usefulLinks = t('footer.usefulLinks', { returnObjects: true })

  return (
    <footer className="mt-20 bg-night text-white/70">
      <div className="container-c grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t('footer.contactsTitle')}</h4>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>{t('common.city')}, {t('common.district')}, {t('common.address')}</p>
            <a href={`tel:${brand.phoneRaw}`} className="block hover:text-white">{brand.phone}</a>
            <a href={`mailto:${brand.email}`} className="block hover:text-white">{brand.email}</a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t('footer.usefulLinksTitle')}</h4>
          <ul className="space-y-2 text-sm">
            {usefulLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{t('footer.directionsTitle')}</h4>
          <div className="relative flex h-40 items-center justify-center overflow-hidden border border-white/10 bg-white/5">
            <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M0 20h200M0 50h200M0 80h200M30 0v100M100 0v100M160 0v100" stroke="white" strokeWidth="1" />
            </svg>
            <svg className="relative h-8 w-8 text-teal" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
            </svg>
            <p className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/60">{t('common.city')}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-c flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>{t('footer.copyright', { name: brand.name })}</p>
          <Link to="/admin" className="hover:text-white">{t('footer.monitoring')}</Link>
        </div>
      </div>
    </footer>
  )
}
