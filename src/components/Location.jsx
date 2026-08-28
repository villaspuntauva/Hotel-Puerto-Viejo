import SectionHeading from './SectionHeading.jsx'
import { IconPin } from './icons.jsx'
import './Location.css'

const NEARBY = [
  ['The beach', 'half a block'],
  ['Playa el Chino', '4 min walk'],
  ['Salsa Brava surf break', '5 min walk'],
  ['Cahuita National Park', '20 min by car'],
  ['Manzanillo', '25 min by car'],
]

function Location() {
  return (
    <section id="location" className="location section">
      <div className="container location__grid">
        <div className="location__info">
          <SectionHeading
            eyebrow="Find Us"
            title="Right in the middle of town, half a block from the sea."
            align="left"
          />
          <p className="location__address">
            <IconPin />
            217m south of Hot Rock&apos;s Bar, Puerto Viejo de Talamanca, Limón Province,
            Costa Rica · +506 2750 0620
          </p>

          <ul className="location__list">
            {NEARBY.map(([place, distance]) => (
              <li key={place}>
                <span>{place}</span>
                <span className="location__distance">{distance}</span>
              </li>
            ))}
          </ul>

          <p className="location__note">
            Getting here: direct shuttles run from San José (about 4 hours) and Limón, or
            hop a local bus to Puerto Viejo — we&apos;re right in the centre of town, no
            taxi required. Bike rentals available on site.
          </p>
        </div>

        <div className="location__map">
          <iframe
            title="Map to Hotel Puerto Viejo"
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
