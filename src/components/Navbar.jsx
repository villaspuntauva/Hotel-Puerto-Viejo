import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Button from './Button.jsx'
import { IconClose, IconMenu } from './icons.jsx'
import './Navbar.css'

const LINKS = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#story', label: 'Our Story' },
  { href: '#location', label: 'Location' },
]

function Navbar() {
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
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Button href="#booking" variant="primary" className="navbar__cta--mobile" onClick={closeMenu}>
            Book Now
          </Button>
        </nav>

        <div className="navbar__actions">
          <Button href="#booking" variant="primary" className="navbar__cta">
            Book Now
          </Button>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
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
