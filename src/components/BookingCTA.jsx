import Button from './Button.jsx'
import { useCopy } from '../i18n.js'
import './BookingCTA.css'

const COPY = {
  en: {
    eyebrow: 'Beds go fast in high season',
    title: 'Your Wave Is Waiting',
    text: 'Call or WhatsApp us directly, or check live availability and book online through Hostelworld.',
    whatsapp: 'WhatsApp Us',
    checkAvailability: 'Check Availability',
  },
  es: {
    eyebrow: 'En temporada alta las camas vuelan',
    title: 'Tu Ola Te Espera',
    text: 'Llámanos o escríbenos por WhatsApp, o revisa la disponibilidad en tiempo real y reserva en línea por Hostelworld.',
    whatsapp: 'Escríbenos por WhatsApp',
    checkAvailability: 'Ver Disponibilidad',
  },
}

function BookingCTA() {
  const t = useCopy(COPY)

  return (
    <section id="booking" className="booking-cta grain">
      <div className="container booking-cta__inner">
        <p className="eyebrow eyebrow--light">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>{t.text}</p>
        <div className="booking-cta__actions">
          <Button href="https://wa.me/message/GZKHAOGRVBSNO1" variant="light">
            {t.whatsapp}
          </Button>
          <Button
            href="https://www.hostelworld.com/hostels/p/325980/hostel-puerto-viejo/"
            variant="ghost"
            className="booking-cta__ghost"
          >
            {t.checkAvailability}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
