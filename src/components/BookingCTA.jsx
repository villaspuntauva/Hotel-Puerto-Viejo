import Button from './Button.jsx'
import './BookingCTA.css'

function BookingCTA() {
  return (
    <section id="booking" className="booking-cta grain">
      <div className="container booking-cta__inner">
        <p className="eyebrow eyebrow--light">Beds go fast in high season</p>
        <h2>Your Wave Is Waiting</h2>
        <p>
          Call or WhatsApp us directly, or check live availability and book online
          through Hostelworld.
        </p>
        <div className="booking-cta__actions">
          <Button href="https://wa.me/50627500620" variant="light">
            WhatsApp Us
          </Button>
          <Button
            href="https://www.hostelworld.com/hostels/p/325980/hostel-puerto-viejo/"
            variant="ghost"
            className="booking-cta__ghost"
          >
            Check Availability
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
