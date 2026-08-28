import SectionHeading from './SectionHeading.jsx'
import { IconBed, IconUsers } from './icons.jsx'
import './Rooms.css'

const ROOMS = [
  {
    id: 'mixed-dorm',
    tone: 'tone-1',
    name: 'Shared Dorm',
    capacity: 'Mixed · shared bath',
    price: 16,
    tags: ['Fan-cooled', 'Free WiFi', 'Shared kitchen access'],
  },
  {
    id: 'private-fan',
    tone: 'tone-3',
    name: 'Private Room',
    capacity: 'Sleeps 2',
    price: 30,
    tags: ['Fan-cooled', 'Garden courtyard', 'Free WiFi'],
  },
  {
    id: 'private-ac',
    tone: 'tone-4',
    name: 'Private Room with A/C',
    capacity: 'Sleeps 2',
    price: 42,
    tags: ['Air-conditioned', 'Free WiFi', 'Quiet floor'],
  },
]

function RoomCard({ room }) {
  return (
    <article className="room-card">
      <div className={`room-card__image grain ${room.tone}`} aria-hidden="true">
        <IconBed className="room-card__image-icon" />
      </div>
      <div className="room-card__body">
        <div className="room-card__heading">
          <h3>{room.name}</h3>
          <p className="room-card__price">
            <span>${room.price}</span> / night
          </p>
        </div>
        <p className="room-card__capacity">
          <IconUsers /> {room.capacity}
        </p>
        <ul className="room-card__tags">
          {room.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a href="#booking" className="room-card__link">
          Book this room →
        </a>
      </div>
    </article>
  )
}

function Rooms() {
  return (
    <section id="rooms" className="rooms section">
      <div className="container">
        <SectionHeading
          eyebrow="Where You'll Sleep"
          title="Basic, comfortable, and half a block from the sea."
          description="There are over 50 rooms available, ranging from dorm bunks to private rooms with A/C — simple rooms, fair prices, since 1987."
        />
        <div className="rooms__grid">
          {ROOMS.map((room) => (
            <RoomCard room={room} key={room.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
