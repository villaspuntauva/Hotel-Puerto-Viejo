import SectionHeading from './SectionHeading.jsx'
import receptionDining from '../assets/gallery/reception-dining.jpg'
import barRestaurant from '../assets/gallery/bar-restaurant.jpg'
import frontEntrance from '../assets/gallery/front-entrance.jpg'
import gardenPatio from '../assets/gallery/garden-patio.jpg'
import hammockLounge from '../assets/gallery/hammock-lounge.jpg'
import gardenDeck from '../assets/gallery/garden-deck.jpg'
import gardenPath from '../assets/gallery/garden-path.jpg'
import './Gallery.css'

const PHOTOS = [
  { id: 1, src: receptionDining, span: 'tall', caption: 'Reception & dining area' },
  { id: 2, src: barRestaurant, span: '', caption: 'The bar & restaurant' },
  { id: 3, src: frontEntrance, span: '', caption: 'Front entrance' },
  { id: 4, src: gardenPatio, span: 'wide', caption: 'Garden patio' },
  { id: 5, src: hammockLounge, span: '', caption: 'Hammock lounge & book exchange' },
  { id: 6, src: gardenDeck, span: 'tall', caption: 'Garden deck' },
  { id: 7, src: gardenPath, span: '', caption: 'Garden pathway' },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <SectionHeading
          eyebrow="Take a Look Around"
          title="The house, the garden, and the walk to the water."
        />
        <div className="gallery__grid">
          {PHOTOS.map((photo) => (
            <figure
              className={`gallery__item ${photo.span ? `gallery__item--${photo.span}` : ''}`}
              key={photo.id}
            >
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
