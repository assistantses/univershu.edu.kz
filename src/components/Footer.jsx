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
          <div className="h-40 overflow-hidden border border-white/10">
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Казахстан%2C%20Шымкент%2C%20проспект%20Жибек%20жолы&z=15"
              title={t('footer.directionsTitle')}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
