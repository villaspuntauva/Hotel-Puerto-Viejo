import SectionHeading from './SectionHeading.jsx'
import { IconPin, IconStar, IconSun, IconWave } from './icons.jsx'
import { useCopy } from '../i18n.js'
import gardenPhoto from '../assets/gallery/hotel-puerto-viejo-garden-9.jpg'
import terracePhoto from '../assets/gallery/hotel-puerto-viejo-balcony-2.jpg'
import loungePhoto from '../assets/gallery/hotel-puerto-viejo-lounge-2.jpg'
import './Intro.css'

const PHOTOS = [gardenPhoto, terracePhoto, loungePhoto]

const ICONS = [IconPin, IconWave, IconStar, IconSun]

const COPY = {
  en: {
    eyebrow: 'Welcome',
    title: 'The first hotel in Puerto Viejo, still half a block from the sea.',
    text: 'Hotel Puerto Viejo has been putting up backpackers and surfers since 1987 — long before "surf hostel" was a category. Expect a rustic garden courtyard, a well-worn shared kitchen, bikes to borrow, and a crew that knows this stretch of coast better than anyone.',
    stats: [
      { value: 'Half a block', label: 'to the sea' },
      { value: '416m', label: 'to Salsa Brava' },
      { value: '8.8/10', label: 'on Hostelworld' },
      { value: '1987', label: 'open since' },
    ],
    photos: ['The jungle garden path', 'Upstairs terrace', 'The lounge'],
  },
  es: {
    eyebrow: 'Bienvenidos',
    title: 'El primer hotel de Puerto Viejo, todavía a media cuadra del mar.',
    text: 'Hotel Puerto Viejo recibe mochileros y surfistas desde 1987, mucho antes de que existiera el concepto de "surf hostel". Aquí encontrarás un patio con jardín rústico, una cocina compartida con mucha historia, bicis para usar y un equipo que conoce esta costa mejor que nadie.',
    stats: [
      { value: 'Media cuadra', label: 'del mar' },
      { value: '416 m', label: 'de Salsa Brava' },
      { value: '8.8/10', label: 'en Hostelworld' },
      { value: '1987', label: 'abierto desde' },
    ],
    photos: ['El sendero del jardín', 'La terraza del segundo piso', 'La sala común'],
  },
}

function Intro() {
  const t = useCopy(COPY)

  return (
    <section id="intro" className="intro section">
      <div className="container intro__grid">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="left" />
        <p className="intro__text">{t.text}</p>
      </div>

      <div className="container intro__photos">
        {PHOTOS.map((src, index) => (
          <figure className="intro__photo" key={src}>
            <img src={src} alt={t.photos[index]} loading="lazy" />
            <figcaption>{t.photos[index]}</figcaption>
          </figure>
        ))}
      </div>

      <div className="container intro__stats">
        {t.stats.map(({ value, label }, index) => {
          const Icon = ICONS[index]
          return (
            <div className="intro__stat" key={index}>
              <Icon className="intro__stat-icon" />
              <p className="intro__stat-value">{value}</p>
              <p className="intro__stat-label">{label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Intro
