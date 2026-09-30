import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { IconCheck } from './icons.jsx'
import { useCopy } from '../i18n.js'
import './Services.css'

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

const COPY = {
  en: {
    eyebrow: "What's Included",
    title: 'Services & Facilities',
    description: 'Everything on offer, straight from the front desk — no surprises at check-in.',
    tabsLabel: 'Services and facilities categories',
    schedule: {
      title: 'Weekly Schedule',
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
      prices: { paid: '₡5,000', donation: 'By donation' },
      note: 'Yoga & Pilates ₡5,000 per class · Morning stretch & Belly dance by voluntary contribution · Private lessons available:',
    },
    tabs: [
      {
        id: 'activities',
        label: 'Activities',
        schedule: true,
        sections: [
          {
            title: 'Entertainment',
            items: ['Ping pong table', 'Internet access', 'Book exchange'],
          },
        ],
      },
      {
        id: 'amenities',
        label: 'Amenities',
        items: [
          'Free WiFi throughout',
          'Free parking on site',
          'Bicycle parking',
          'Large shared kitchen',
          'Gardens & common areas',
          'Meeting rooms',
        ],
      },
      {
        id: 'services',
        label: 'Services',
        items: [
          'Daily housekeeping',
          'Tours & travel desk',
          'Bicycle rental',
          'Reception open 7:00 AM – 10:00 PM',
          'Late check-in available on request',
          'Transfer service for tours',
        ],
      },
      {
        id: 'good-to-know',
        label: 'Good to Know',
        items: [
          'Check-in: 3:00 PM – 10:00 PM',
          'Check-out: before 11:00 AM',
          'Payment on arrival — Visa, Maestro, Mastercard, JCB',
          '13% tax added at arrival',
          'Free cancellation up to 72 hours before arrival',
          'No-show reservations are charged in full',
        ],
      },
    ],
  },
  es: {
    eyebrow: 'Qué Incluye',
    title: 'Servicios e Instalaciones',
    description: 'Todo lo que ofrecemos, directo desde la recepción, sin sorpresas al hacer check-in.',
    tabsLabel: 'Categorías de servicios e instalaciones',
    schedule: {
      title: 'Horario Semanal',
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
      prices: { paid: '₡5.000', donation: 'Contribución voluntaria' },
      note: 'Yoga y Pilates ₡5.000 por clase · Estiramiento matutino y Danza del vientre con contribución voluntaria · Clases privadas disponibles:',
    },
    tabs: [
      {
        id: 'activities',
        label: 'Actividades',
        schedule: true,
        sections: [
          {
            title: 'Entretenimiento',
            items: ['Mesa de ping pong', 'Acceso a internet', 'Intercambio de libros'],
          },
        ],
      },
      {
        id: 'amenities',
        label: 'Comodidades',
        items: [
          'WiFi gratis en todo el hotel',
          'Parqueo gratis en el hotel',
          'Parqueo para bicicletas',
          'Cocina compartida grande',
          'Jardines y áreas comunes',
          'Salas de reuniones',
        ],
      },
      {
        id: 'services',
        label: 'Servicios',
        items: [
          'Limpieza diaria',
          'Tours y asesoría de viajes',
          'Alquiler de bicicletas',
          'Recepción abierta de 7:00 a. m. a 10:00 p. m.',
          'Check-in tardío disponible a solicitud',
          'Servicio de transporte para tours',
        ],
      },
      {
        id: 'good-to-know',
        label: 'Bueno Saber',
        items: [
          'Check-in: 3:00 p. m. – 10:00 p. m.',
          'Check-out: antes de las 11:00 a. m.',
          'Pago al llegar: Visa, Maestro, Mastercard, JCB',
          'Se agrega un 13% de impuesto al llegar',
          'Cancelación gratis hasta 72 horas antes de la llegada',
          'Las reservas no presentadas se cobran en su totalidad',
        ],
      },
    ],
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

function FacilityList({ items }) {
  return (
    <ul className="services__grid">
      {items.map((item) => (
        <li className="services__item" key={item}>
          <IconCheck className="services__item-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function WeeklySchedule({ t }) {
  return (
    <div className="schedule">
      <h3 className="services__section-title">{t.title}</h3>
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
  const [activeId, setActiveId] = useState(t.tabs[0].id)
  const activeTab = t.tabs.find((tab) => tab.id === activeId)

  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="services__tabs" role="tablist" aria-label={t.tabsLabel}>
          {t.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === activeId}
              className={`services__tab ${tab.id === activeId ? 'is-active' : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab.sections ? (
          <div className="services__sections" role="tabpanel">
            {activeTab.schedule && <WeeklySchedule t={t.schedule} />}
            {activeTab.sections.map((section) => (
              <div className="services__section" key={section.title}>
                <h3 className="services__section-title">{section.title}</h3>
                <FacilityList items={section.items} />
              </div>
            ))}
          </div>
        ) : (
          <div role="tabpanel">
            <FacilityList items={activeTab.items} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
