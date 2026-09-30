import SectionHeading from './SectionHeading.jsx'
import RoomCarousel from './RoomCarousel.jsx'
import { IconUsers } from './icons.jsx'
import { useCopy } from '../i18n.js'
import './Rooms.css'

const WHATSAPP = 'https://wa.me/50686011560'

// Carousel photos: `<name>-<number>` files in src/assets/rooms or the HPV FINAL gallery.
// Add a numbered photo to either folder and it joins that room's carousel.
const PHOTO_FILES = import.meta.glob(
  ['../assets/rooms/*.{jpg,jpeg,png,webp}', '../assets/gallery/HPV FINAL/*.{jpg,jpeg,png,webp}'],
  { eager: true, import: 'default' },
)

function photosNamed(name) {
  return Object.entries(PHOTO_FILES)
    .map(([path, src]) => ({ src, match: path.split('/').pop().match(/^(.+)-(\d+)\.\w+$/) }))
    .filter(({ match }) => match?.[1] === name)
    .sort((a, b) => a.match[2] - b.match[2])
    .map(({ src }) => src)
}

// Room types, descriptions and prices as listed on Hostelworld.
const ROOMS = [
  { id: 'mixed-dorm', photos: photosNamed('mixed-dorm'), price: 14.52, unit: 'bed' },
  { id: 'female-dorm', photos: photosNamed('female-dorm'), price: 14.52, unit: 'bed' },
  { id: 'male-dorm', photos: photosNamed('male-dorm'), price: 14.52, unit: 'bed' },
  { id: 'twin-private', photos: photosNamed('twin-private'), price: 35.73, unit: 'room' },
  { id: 'double-private', photos: photosNamed('double-private'), price: 40.2, unit: 'room' },
  {
    id: 'triple-private',
    photos: [...photosNamed('private-room-3ppl'), ...photosNamed('private-room')],
    price: 44.67,
    unit: 'room',
  },
]

const COPY = {
  en: {
    eyebrow: "Where You'll Sleep",
    title: 'Basic, comfortable, and half a block from the sea.',
    description:
      'There are over 50 rooms available, ranging from dorm bunks to private rooms with A/C — simple rooms, fair prices, since 1987.',
    from: 'from',
    units: { bed: 'bed', room: 'room' },
    book: 'Book this room →',
    carousel: { previous: 'Previous photo', next: 'Next photo', photo: 'Photo' },
    bookMessage: (room) => `Hi! I'd like to book the ${room}.`,
    rooms: {
      'mixed-dorm': {
        name: 'Basic 6 Bed Mixed Dorm',
        capacity: 'Mixed · 6 beds · shared bath',
        description: 'Spacious room, fan, good air flow, lockers.',
      },
      'female-dorm': {
        name: 'Basic 4 Bed Female Dorm',
        capacity: 'Female · 4 beds · shared bath',
        description: 'Comfortable room, 4 beds, lockers, fan.',
      },
      'male-dorm': {
        name: 'Basic 4 Bed Male Dorm',
        capacity: 'Male · 4 beds · shared bath',
        description: 'Cosy room, 4 beds, fan, lockers.',
      },
      'twin-private': {
        name: 'Basic Twin Room Private Shared Bathroom',
        capacity: 'Sleeps 2 · shared bath',
        description:
          'Basic private room with shared bathroom. Small rustic room with two beds, fan. Located on the second floor. Fully equipped community kitchen. Parking.',
      },
      'double-private': {
        name: 'Basic Double Bed Private Shared Bathroom',
        capacity: 'Sleeps 2 · shared bath',
        description: 'In order to secure a Private Room, you will need to book the entire room.',
      },
      'triple-private': {
        name: 'Basic 3 Bed Private Shared Bathroom',
        capacity: 'Sleeps 3 · shared bath',
        description:
          'Basic private room with shared bathroom. Small rustic room with three beds, fan. Located on the second floor. Fully equipped community kitchen. Parking.',
      },
    },
  },
  es: {
    eyebrow: 'Dónde Vas a Dormir',
    title: 'Sencillo, cómodo y a media cuadra del mar.',
    description:
      'Tenemos más de 50 habitaciones, desde camarotes en dormitorios hasta habitaciones privadas con A/C: habitaciones sencillas a precios justos, desde 1987.',
    from: 'desde',
    units: { bed: 'cama', room: 'habitación' },
    book: 'Reservar esta habitación →',
    carousel: { previous: 'Foto anterior', next: 'Foto siguiente', photo: 'Foto' },
    bookMessage: (room) => `¡Hola! Me gustaría reservar: ${room}.`,
    rooms: {
      'mixed-dorm': {
        name: 'Dormitorio Mixto Básico de 6 Camas',
        capacity: 'Mixto · 6 camas · baño compartido',
        description: 'Habitación amplia, ventilador, buena ventilación, casilleros.',
      },
      'female-dorm': {
        name: 'Dormitorio Femenino Básico de 4 Camas',
        capacity: 'Femenino · 4 camas · baño compartido',
        description: 'Habitación cómoda, 4 camas, casilleros, ventilador.',
      },
      'male-dorm': {
        name: 'Dormitorio Masculino Básico de 4 Camas',
        capacity: 'Masculino · 4 camas · baño compartido',
        description: 'Habitación acogedora, 4 camas, ventilador, casilleros.',
      },
      'twin-private': {
        name: 'Habitación Privada Básica con Dos Camas y Baño Compartido',
        capacity: 'Para 2 personas · baño compartido',
        description:
          'Habitación privada básica con baño compartido. Habitación rústica pequeña con dos camas y ventilador. Ubicada en el segundo piso. Cocina comunitaria totalmente equipada. Parqueo.',
      },
      'double-private': {
        name: 'Habitación Privada Básica con Cama Doble y Baño Compartido',
        capacity: 'Para 2 personas · baño compartido',
        description: 'Para asegurar una habitación privada, debes reservar la habitación completa.',
      },
      'triple-private': {
        name: 'Habitación Privada Básica de 3 Camas con Baño Compartido',
        capacity: 'Para 3 personas · baño compartido',
        description:
          'Habitación privada básica con baño compartido. Habitación rústica pequeña con tres camas y ventilador. Ubicada en el segundo piso. Cocina comunitaria totalmente equipada. Parqueo.',
      },
    },
  },
}

function RoomCard({ room, t }) {
  const copy = t.rooms[room.id]

  return (
    <article className="room-card">
      <RoomCarousel photos={room.photos} name={copy.name} labels={t.carousel} />
      <div className="room-card__body">
        <div className="room-card__heading">
          <h3>{copy.name}</h3>
          <p className="room-card__price">
            {t.from} <span>${room.price.toFixed(2)}</span> / {t.units[room.unit]}
          </p>
        </div>
        <p className="room-card__capacity">
          <IconUsers /> {copy.capacity}
        </p>
        <p className="room-card__description">{copy.description}</p>
        <a
          href={`${WHATSAPP}?text=${encodeURIComponent(t.bookMessage(copy.name))}`}
          className="room-card__link"
          target="_blank"
          rel="noreferrer"
        >
          {t.book}
        </a>
      </div>
    </article>
  )
}

function Rooms() {
  const t = useCopy(COPY)

  return (
    <section id="rooms" className="rooms section">
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="rooms__grid">
          {ROOMS.map((room) => (
            <RoomCard room={room} t={t} key={room.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
