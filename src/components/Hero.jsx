import Button from './Button.jsx'
import heroPhoto from '../assets/gallery/hotel-puerto-viejo-lounge-1.jpg'
import { useCopy } from '../i18n.js'
import './Hero.css'

const COPY = {
  en: {
    eyebrow: 'Puerto Viejo de Talamanca, Costa Rica',
    title: ['Sleep Slow.', 'Surf Often.'],
    subtitle:
      'The first hotel in town, half a block from the sea. Dorms and private rooms, a garden to hang out in, and Salsa Brava a five-minute walk away.',
    checkAvailability: 'Check Availability',
    seeRooms: 'See the Rooms',
  },
  es: {
    eyebrow: 'Puerto Viejo de Talamanca, Costa Rica',
    title: ['Duerme Tranqui.', 'Surfea Seguido.'],
    subtitle:
      'El primer hotel del pueblo, a media cuadra del mar. Dormitorios y habitaciones privadas, un jardín para relajarte y Salsa Brava a cinco minutos caminando.',
    checkAvailability: 'Ver Disponibilidad',
    seeRooms: 'Ver Habitaciones',
  },
}

function Hero() {
  const t = useCopy(COPY)

  return (
    <section id="top" className="hero" style={{ '--hero-photo': `url(${heroPhoto})` }}>
      <div className="container hero__content">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="hero__title">
          {t.title[0]}
          <br />
          <span className="hero__title-accent">{t.title[1]}</span>
        </h1>
        <p className="hero__subtitle">{t.subtitle}</p>
        <div className="hero__actions">
          <Button href="#booking" variant="primary">
            {t.checkAvailability}
          </Button>
          <Button href="#rooms" variant="light">
            {t.seeRooms}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
