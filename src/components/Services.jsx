import SectionHeading from './SectionHeading.jsx'
import { IconBike, IconCar, IconCheck, IconCompass, IconLeaf, IconPot, IconWifi } from './icons.jsx'
import { formatPrice, useCopy } from '../i18n.js'
import loungePhoto from '../assets/gallery/hotel-puerto-viejo-lounge-4.jpg'
import gamesPhoto from '../assets/gallery/hotel-puerto-viejo-games-room-1.jpg'
import patioPhoto from '../assets/gallery/hotel-puerto-viejo-patio-1.jpg'
import './Services.css'

const SPACE_PHOTOS = [loungePhoto, gamesPhoto, patioPhoto]

// Yoga and Pilates are priced in colones; the English page shows dollars.
const CLASS_PRICE_CRC = 5000

const PRICES = {
  yoga: 'paid',
  pilates: 'paid',
  stretch: 'donation',
  bellyDance: 'donation',
}

const SCHEDULE = [
  {
    day: 'mon',
    activities: [
      { time: [8, 0], id: 'yoga' },
      { time: [9, 30], id: 'stretch' },
      { time: [17, 0], id: 'crafts' },
    ],
  },
  {
    day: 'tue',
    activities: [
      { time: [8, 0], id: 'pilates' },
      { time: [17, 30], id: 'bellyDance' },
      { time: [18, 0, 20, 0], id: 'languageExchange' },
    ],
  },
  { day: 'wed', activities: [{ time: [9, 30], id: 'stretch' }] },
  { day: 'thu', activities: [{ time: [18, 0, 20, 0], id: 'boardGames' }] },
  {
    day: 'fri',
    activities: [
      { time: [8, 0], id: 'pilates' },
      { time: [9, 30], id: 'stretch' },
    ],
  },
  { day: 'sat', activities: [{ time: [9, 30], id: 'yoga' }] },
]

const HIGHLIGHT_ICONS = {
  wifi: IconWifi,
  parking: IconCar,
  kitchen: IconPot,
  gardens: IconLeaf,
  bikes: IconBike,
  tours: IconCompass,
}

const COPY = {
  en: {
    eyebrow: 'Amenities & Activities',
    title: 'Hostel amenities in Puerto Viejo',
    description:
      'Free WiFi, free parking and a big shared kitchen, half a block from the Caribbean — plus yoga, Pilates and community nights every week.',
    spaces: [
      { title: 'Garden lounge', text: 'Big cushioned sofas under the palms — the best spot to meet people.' },
      { title: 'Ping pong & games', text: 'A covered games room with a ping pong table and board game nights.' },
      { title: 'Shady patio', text: 'Long wooden tables for meals, card games and planning tomorrow.' },
    ],
    highlights: [
      { id: 'wifi', title: 'Free WiFi', text: 'Free WiFi throughout the hotel, plus internet access for guests.' },
      { id: 'parking', title: 'Free parking', text: 'Free parking on site for cars, plus bicycle parking.' },
      { id: 'kitchen', title: 'Shared kitchen', text: 'A large, fully equipped kitchen to cook your own meals.' },
      { id: 'gardens', title: 'Gardens & common areas', text: 'Tropical gardens and lounges to relax and meet other travellers.' },
      { id: 'bikes', title: 'Bike rental', text: 'Rent a bicycle and ride to the beaches around Puerto Viejo.' },
      { id: 'tours', title: 'Tours & transfers', text: 'Book tours and tour transfers at our travel desk.' },
    ],
    alsoTitle: 'Also at the hotel',
    also: [
      'Daily housekeeping',
      'Reception open 7:00 AM – 10:00 PM',
      'Late check-in on request',
      'Meeting rooms',
      'Ping pong table',
      'Book exchange',
    ],
    policiesTitle: 'Good to know',
    policies: [
      { term: 'Check-in', detail: '3:00 PM – 10:00 PM' },
      { term: 'Check-out', detail: 'Before 11:00 AM' },
      { term: 'Payment', detail: 'On arrival — Visa, Maestro, Mastercard, JCB' },
      { term: 'Taxes', detail: '13% added at arrival' },
      { term: 'Cancellation', detail: 'Free up to 72 hours before arrival; no-shows are charged in full' },
    ],
    schedule: {
      title: 'Yoga, Pilates & weekly events',
      intro: "Community, movement and good times — open to the public, everyone's welcome.",
      days: { mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' },
      am: 'AM',
      pm: 'PM',
      activities: {
        yoga: 'Yoga',
        stretch: 'Morning stretch',
        crafts: 'Arts & crafts',
        pilates: 'Pilates',
        bellyDance: 'Belly dance',
        languageExchange: 'Language exchange',
        boardGames: 'Board game night',
      },
      prices: { paid: formatPrice(CLASS_PRICE_CRC, 'CRC', 'en'), donation: 'By donation' },
      note: `Yoga & Pilates ${formatPrice(CLASS_PRICE_CRC, 'CRC', 'en')} per class · Morning stretch & Belly dance by voluntary contribution · Private lessons available:`,
    },
  },
  es: {
    eyebrow: 'Comodidades y Actividades',
    title: 'Comodidades del hostal en Puerto Viejo',
    description:
      'WiFi y parqueo gratis y una gran cocina compartida, a media cuadra del Caribe, además de yoga, Pilates y noches de comunidad cada semana.',
    spaces: [
      { title: 'Sala del jardín', text: 'Sillones grandes bajo las palmeras: el mejor lugar para conocer gente.' },
      { title: 'Ping pong y juegos', text: 'Una sala techada con mesa de ping pong y noches de juegos de mesa.' },
      { title: 'Patio con sombra', text: 'Mesas largas de madera para comer, jugar cartas y planear el día.' },
    ],
    highlights: [
      { id: 'wifi', title: 'WiFi gratis', text: 'WiFi gratis en todo el hotel y acceso a internet para huéspedes.' },
      { id: 'parking', title: 'Parqueo gratis', text: 'Parqueo gratis en el hotel para carros y para bicicletas.' },
      { id: 'kitchen', title: 'Cocina compartida', text: 'Una cocina grande y totalmente equipada para cocinar tus comidas.' },
      { id: 'gardens', title: 'Jardines y áreas comunes', text: 'Jardines tropicales y salas para descansar y conocer a otros viajeros.' },
      { id: 'bikes', title: 'Alquiler de bicicletas', text: 'Alquila una bicicleta y recorre las playas de Puerto Viejo.' },
      { id: 'tours', title: 'Tours y transporte', text: 'Reserva tours y transporte a los tours en nuestra recepción.' },
    ],
    alsoTitle: 'También en el hotel',
    also: [
      'Limpieza diaria',
      'Recepción abierta de 7:00 a. m. a 10:00 p. m.',
      'Check-in tardío a solicitud',
      'Salas de reuniones',
      'Mesa de ping pong',
      'Intercambio de libros',
    ],
    policiesTitle: 'Bueno saber',
    policies: [
      { term: 'Check-in', detail: '3:00 p. m. – 10:00 p. m.' },
      { term: 'Check-out', detail: 'Antes de las 11:00 a. m.' },
      { term: 'Pago', detail: 'Al llegar: Visa, Maestro, Mastercard, JCB' },
      { term: 'Impuestos', detail: 'Se agrega un 13% al llegar' },
      {
        term: 'Cancelación',
        detail: 'Gratis hasta 72 horas antes de la llegada; las reservas no presentadas se cobran en su totalidad',
      },
    ],
    schedule: {
      title: 'Yoga, Pilates y eventos semanales',
      intro: 'Comunidad, movimiento y buenos momentos: abierto al público, ¡todos son bienvenidos!',
      days: { mon: 'Lun', tue: 'Mar', wed: 'Mié', thu: 'Jue', fri: 'Vie', sat: 'Sáb' },
      am: 'a. m.',
      pm: 'p. m.',
      activities: {
        yoga: 'Yoga',
        stretch: 'Estiramiento matutino',
        crafts: 'Manualidades',
        pilates: 'Pilates',
        bellyDance: 'Danza del vientre',
        languageExchange: 'Intercambio de idiomas',
        boardGames: 'Noche de juegos de mesa',
      },
      prices: { paid: formatPrice(CLASS_PRICE_CRC, 'CRC', 'es'), donation: 'Contribución voluntaria' },
      note: `Yoga y Pilates ${formatPrice(CLASS_PRICE_CRC, 'CRC', 'es')} por clase · Estiramiento matutino y Danza del vientre con contribución voluntaria · Clases privadas disponibles:`,
    },
  },
}

// Single times read "8:00 AM"; ranges on the hour read "6–8 PM", as on the flyer.
function formatTime([hour, minute, endHour, endMinute], { am, pm }) {
  const period = (h) => (h < 12 ? am : pm)
  const clock = (h, m, showMinutes) => `${h % 12 || 12}${showMinutes ? `:${String(m).padStart(2, '0')}` : ''}`
  if (endHour === undefined) return `${clock(hour, minute, true)} ${period(hour)}`
  const showMinutes = minute !== 0 || endMinute !== 0
  return `${clock(hour, minute, showMinutes)}–${clock(endHour, endMinute, showMinutes)} ${period(endHour)}`
}

function WeeklySchedule({ t }) {
  return (
    <div className="schedule services__card">
      <h3 className="services__card-title">{t.title}</h3>
      <p className="schedule__intro">{t.intro}</p>
      <ol className="schedule__days">
        {SCHEDULE.map(({ day, activities }) => (
          <li className="schedule__day" key={day}>
            <span className="schedule__day-name">{t.days[day]}</span>
            <ul className="schedule__activities">
              {activities.map(({ time, id }) => (
                <li className="schedule__activity" key={id}>
                  <span className="schedule__time">{formatTime(time, t)}</span>
                  <span className="schedule__name">{t.activities[id]}</span>
                  {PRICES[id] && <span className="schedule__price">{t.prices[PRICES[id]]}</span>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="schedule__note">
        {t.note} <a href="tel:+50683963766">+506 8396 3766</a>
      </p>
    </div>
  )
}

function Services() {
  const t = useCopy(COPY)

  return (
    <section id="services" className="services section wave-top">
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <ul className="services__spaces">
          {t.spaces.map(({ title, text }, index) => (
            <li className="services__space" key={title}>
              <img src={SPACE_PHOTOS[index]} alt={title} loading="lazy" />
              <div className="services__space-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="services__highlights">
          {t.highlights.map(({ id, title, text }) => {
            const Icon = HIGHLIGHT_ICONS[id]
            return (
              <li className="services__highlight" key={id}>
                <span className="services__highlight-icon">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            )
          })}
        </ul>

        <div className="services__columns">
          <WeeklySchedule t={t.schedule} />

          <aside className="services__aside">
            <div className="services__card">
              <h3 className="services__card-title">{t.policiesTitle}</h3>
              <dl className="services__policies">
                {t.policies.map(({ term, detail }) => (
                  <div className="services__policy" key={term}>
                    <dt>{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="services__card">
              <h3 className="services__card-title">{t.alsoTitle}</h3>
              <ul className="services__also">
                {t.also.map((item) => (
                  <li key={item}>
                    <IconCheck className="services__also-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Services
