import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Button from './Button.jsx'
import { IconClose, IconMenu } from './icons.jsx'
import { LANGUAGES, LANGUAGE_PATHS, useCopy, useLanguage } from '../i18n.js'
import './Navbar.css'

const COPY = {
  en: {
    links: [
      { href: '#rooms', label: 'Rooms' },
      { href: '#services', label: 'Services' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#story', label: 'Our Story' },
      { href: '#location', label: 'Location' },
    ],
    bookNow: 'Book Now',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
  },
  es: {
    links: [
      { href: '#rooms', label: 'Habitaciones' },
      { href: '#services', label: 'Servicios' },
      { href: '#gallery', label: 'Galería' },
      { href: '#story', label: 'Nuestra Historia' },
      { href: '#location', label: 'Ubicación' },
    ],
    bookNow: 'Reservar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    languageLabel: 'Idioma',
  },
}

const LANGUAGE_NAMES = { en: 'English', es: 'Español' }

function LanguageToggle({ label }) {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label={label}>
      {LANGUAGES.map((code) => (
        <a
          key={code}
          href={LANGUAGE_PATHS[code]}
          hrefLang={code}
          lang={code}
          className={`lang-toggle__option ${code === lang ? 'is-active' : ''}`}
          aria-current={code === lang ? 'page' : undefined}
          aria-label={LANGUAGE_NAMES[code]}
          onClick={(event) => {
            event.preventDefault()
            setLang(code)
          }}
        >
          {code.toUpperCase()}
        </a>
      ))}
    </div>
  )
}

function Navbar() {
  const t = useCopy(COPY)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Hotel Puerto Viejo" className="navbar__logo-img" />
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {t.links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Button href="#booking" variant="primary" className="navbar__cta--mobile" onClick={closeMenu}>
            {t.bookNow}
          </Button>
        </nav>

        <div className="navbar__actions">
          <Button href="#booking" variant="primary" className="navbar__cta">
            {t.bookNow}
          </Button>
          <LanguageToggle label={t.languageLabel} />
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
