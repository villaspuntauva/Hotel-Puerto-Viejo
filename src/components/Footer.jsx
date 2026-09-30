import logo from '../assets/logo.png'
import { IconFacebook, IconInstagram, IconWhatsapp } from './icons.jsx'
import { useCopy } from '../i18n.js'
import './Footer.css'

const COPY = {
  en: {
    tagline: 'Surf Hostel · Puerto Viejo de Talamanca, Costa Rica',
    explore: 'Explore',
    links: [
      { href: '#rooms', label: 'Rooms' },
      { href: '#services', label: 'Services' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#story', label: 'Our Story' },
      { href: '#location', label: 'Location' },
    ],
    contact: 'Contact',
    whatsapp: 'Message us on WhatsApp',
    address: "217m south of Hot Rock's Bar, Puerto Viejo, Costa Rica",
    madeWith: 'Made with love and sea salt in Talamanca.',
  },
  es: {
    tagline: 'Surf Hostel · Puerto Viejo de Talamanca, Costa Rica',
    explore: 'Explorar',
    links: [
      { href: '#rooms', label: 'Habitaciones' },
      { href: '#services', label: 'Servicios' },
      { href: '#gallery', label: 'Galería' },
      { href: '#story', label: 'Nuestra Historia' },
      { href: '#location', label: 'Ubicación' },
    ],
    contact: 'Contacto',
    whatsapp: 'Escríbenos por WhatsApp',
    address: "217 m al sur del Hot Rock's Bar, Puerto Viejo, Costa Rica",
    madeWith: 'Hecho con amor y sal de mar en Talamanca.',
  },
}

const SOCIALS = [
  { href: 'https://www.instagram.com/hotelpuertoviejocr/', label: 'Instagram', Icon: IconInstagram },
  { href: 'https://www.facebook.com/hotelpuertoviejocr/', label: 'Facebook', Icon: IconFacebook },
  { href: 'https://wa.me/message/GZKHAOGRVBSNO1', label: 'WhatsApp', Icon: IconWhatsapp },
]

function Footer() {
  const t = useCopy(COPY)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Hotel Puerto Viejo" className="footer__logo-img" />
          <p className="footer__tagline">{t.tagline}</p>
          <div className="footer__socials">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h4>{t.explore}</h4>
          <ul>
            {t.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>{t.contact}</h4>
          <ul>
            <li>
              <a href="tel:+50627500620">+506 2750 0620</a>
            </li>
            <li>
              <a href="https://wa.me/message/GZKHAOGRVBSNO1" target="_blank" rel="noreferrer">
                {t.whatsapp}
              </a>
            </li>
            <li>{t.address}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} Hotel Puerto Viejo. {t.madeWith}
        </p>
      </div>
    </footer>
  )
}

export default Footer
