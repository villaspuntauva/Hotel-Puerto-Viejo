import SectionHeading from './SectionHeading.jsx'
import { IconPin } from './icons.jsx'
import { useCopy } from '../i18n.js'
import './Location.css'

const COPY = {
  en: {
    eyebrow: 'Find Us',
    title: 'Right in the middle of town, half a block from the sea.',
    address:
      "217m south of Hot Rock's Bar, Puerto Viejo de Talamanca, Limón Province, Costa Rica · +506 2750 0620",
    nearby: [
      ['The beach', 'half a block'],
      ['Playa el Chino', '4 min walk'],
      ['Salsa Brava surf break', '5 min walk'],
      ['Cahuita National Park', '20 min by car'],
      ['Manzanillo', '25 min by car'],
    ],
    note: "Getting here: direct shuttles run from San José (about 4 hours) and Limón, or hop a local bus to Puerto Viejo — we're right in the centre of town, no taxi required. Bike rentals available on site.",
    mapTitle: 'Map to Hotel Puerto Viejo',
  },
  es: {
    eyebrow: 'Cómo Llegar',
    title: 'En pleno centro del pueblo, a media cuadra del mar.',
    address:
      "217 m al sur del Hot Rock's Bar, Puerto Viejo de Talamanca, provincia de Limón, Costa Rica · +506 2750 0620",
    nearby: [
      ['La playa', 'media cuadra'],
      ['Playa el Chino', '4 min caminando'],
      ['Ola de Salsa Brava', '5 min caminando'],
      ['Parque Nacional Cahuita', '20 min en carro'],
      ['Manzanillo', '25 min en carro'],
    ],
    note: 'Para llegar: hay shuttles directos desde San José (unas 4 horas) y desde Limón, o puedes tomar un bus local a Puerto Viejo. Estamos en pleno centro, no necesitas taxi. Alquiler de bicicletas en el hotel.',
    mapTitle: 'Mapa al Hotel Puerto Viejo',
  },
}

function Location() {
  const t = useCopy(COPY)

  return (
    <section id="location" className="location section wave-top">
      <div className="container location__grid">
        <div className="location__info">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} align="left" />
          <p className="location__address">
            <IconPin />
            {t.address}
          </p>

          <ul className="location__list">
            {t.nearby.map(([place, distance]) => (
              <li key={place}>
                <span>{place}</span>
                <span className="location__distance">{distance}</span>
              </li>
            ))}
          </ul>

          <p className="location__note">{t.note}</p>
        </div>

        <div className="location__map">
          <iframe
            title={t.mapTitle}
            src="https://www.google.com/maps?q=Hotel+Puerto+Viejo,+Puerto+Viejo+de+Talamanca,+Costa+Rica&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Location
