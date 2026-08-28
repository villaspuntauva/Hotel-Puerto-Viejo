import logo from '../assets/logo.png'
import { IconFacebook, IconInstagram, IconWhatsapp } from './icons.jsx'
import './Footer.css'

const EXPLORE_LINKS = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#story', label: 'Our Story' },
  { href: '#location', label: 'Location' },
]

const SOCIALS = [
  { href: 'https://www.instagram.com/hotelpuertoviejocr/', label: 'Instagram', Icon: IconInstagram },
  { href: 'https://www.facebook.com/hotelpuertoviejocr/', label: 'Facebook', Icon: IconFacebook },
  { href: 'https://wa.me/50627500620', label: 'WhatsApp', Icon: IconWhatsapp },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Hotel Puerto Viejo" className="footer__logo-img" />
          <p className="footer__tagline">Surf Hostel · Puerto Viejo de Talamanca, Costa Rica</p>
          <div className="footer__socials">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a href={href} key={label} aria-label={label} target="_blank" rel="noreferrer">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__column">
          <h4>Explore</h4>
          <ul>
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+50627500620">+506 2750 0620</a>
            </li>
            <li>
              <a href="https://wa.me/50627500620" target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
            </li>
            <li>217m south of Hot Rock&apos;s Bar, Puerto Viejo, Costa Rica</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Hotel Puerto Viejo. Made with love and sea salt in Talamanca.</p>
      </div>
    </footer>
  )
}

export default Footer
