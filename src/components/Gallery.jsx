import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { useCopy } from '../i18n.js'
import './Gallery.css'

// Every photo in the gallery folders is picked up automatically. Name new files
// `<category>-<number>` (e.g. `kitchen-12.jpg`) and they land in the right filter.
const FILES = import.meta.glob('../assets/gallery/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const FILTERS = [
  { id: 'all' },
  { id: 'common', categories: ['commonarea', 'hallway', 'stairs', 'platform'] },
  { id: 'rooms', categories: ['rooms', 'mixed-dorm', 'private-room', 'private-room-3ppl'] },
  { id: 'kitchen', categories: ['kitchen'] },
  { id: 'bathrooms', categories: ['bathroom'] },
  { id: 'garden', categories: ['garden'] },
  { id: 'exterior', categories: ['exterior'] },
]

const COPY = {
  en: {
    eyebrow: 'Take a Look Around',
    title: 'The house, the garden, and the walk to the water.',
    filtersLabel: 'Filter photos',
    filters: {
      all: 'All',
      common: 'Common areas',
      rooms: 'Rooms',
      kitchen: 'Kitchen',
      bathrooms: 'Bathrooms',
      garden: 'Garden',
      exterior: 'Outside',
    },
    captions: {
      bathroom: 'Shared bathrooms',
      commonarea: 'Common areas',
      exterior: 'Outside the hotel',
      garden: 'The garden',
      hallway: 'Upstairs hallway',
      kitchen: 'Shared kitchen',
      'mixed-dorm': 'Mixed dorm',
      platform: 'Garden platform',
      'private-room': 'Private room',
      'private-room-3ppl': 'Private room for 3',
      rooms: 'Room walkways',
      stairs: 'Stairs to the upper floor',
      'bar-restaurant': 'The bar & restaurant',
      'front-entrance': 'Front entrance',
      'garden-deck': 'Garden deck',
      'garden-path': 'Garden pathway',
      'garden-patio': 'Garden patio',
      'hammock-lounge': 'Hammock lounge & book exchange',
      'reception-dining': 'Reception & dining area',
    },
    enlarge: 'Enlarge photo:',
    showAll: (count) => `Show all ${count} photos`,
    showFewer: 'Show fewer photos',
    close: 'Close',
    previous: 'Previous photo',
    next: 'Next photo',
  },
  es: {
    eyebrow: 'Echa un Vistazo',
    title: 'La casa, el jardín y el camino al mar.',
    filtersLabel: 'Filtrar fotos',
    filters: {
      all: 'Todas',
      common: 'Áreas comunes',
      rooms: 'Habitaciones',
      kitchen: 'Cocina',
      bathrooms: 'Baños',
      garden: 'Jardín',
      exterior: 'Exterior',
    },
    captions: {
      bathroom: 'Baños compartidos',
      commonarea: 'Áreas comunes',
      exterior: 'Exterior del hotel',
      garden: 'El jardín',
      hallway: 'Pasillo del segundo piso',
      kitchen: 'Cocina compartida',
      'mixed-dorm': 'Dormitorio mixto',
      platform: 'Plataforma del jardín',
      'private-room': 'Habitación privada',
      'private-room-3ppl': 'Habitación privada para 3',
      rooms: 'Pasillos de las habitaciones',
      stairs: 'Escaleras al segundo piso',
      'bar-restaurant': 'El bar y restaurante',
      'front-entrance': 'Entrada principal',
      'garden-deck': 'Terraza del jardín',
      'garden-path': 'Sendero del jardín',
      'garden-patio': 'Patio del jardín',
      'hammock-lounge': 'Zona de hamacas e intercambio de libros',
      'reception-dining': 'Recepción y comedor',
    },
    enlarge: 'Ampliar foto:',
    showAll: (count) => `Ver las ${count} fotos`,
    showFewer: 'Ver menos fotos',
    close: 'Cerrar',
    previous: 'Foto anterior',
    next: 'Foto siguiente',
  },
}

// Earlier photos named by what they show rather than by category.
const LEGACY = {
  'bar-restaurant': 'commonarea',
  'front-entrance': 'exterior',
  'garden-deck': 'garden',
  'garden-path': 'garden',
  'garden-patio': 'garden',
  'hammock-lounge': 'commonarea',
  'reception-dining': 'commonarea',
}

const PHOTOS = Object.entries(FILES)
  .map(([path, src]) => {
    const name = path.split('/').pop().replace(/\.\w+$/, '')
    if (LEGACY[name]) {
      return { id: name, src, category: LEGACY[name], captionKey: name, order: 0 }
    }
    const match = name.match(/^(.+)-(\d+)$/)
    if (!match) return null
    const [, category, number] = match
    return { id: name, src, category, captionKey: category, order: Number(number) }
  })
  .filter(Boolean)
  .sort((a, b) => a.category.localeCompare(b.category) || a.order - b.order)

// "All" opens on a mix of every category rather than one area at a time.
function interleave(photos) {
  const groups = {}
  photos.forEach((photo) => (groups[photo.category] ??= []).push(photo))
  const byCategory = Object.values(groups)
  const mixed = []
  for (let i = 0; mixed.length < photos.length; i++) {
    byCategory.forEach((group) => group[i] && mixed.push(group[i]))
  }
  return mixed
}

const INITIAL_COUNT = 12

function Gallery() {
  const t = useCopy(COPY)
  const caption = (photo) => t.captions[photo.captionKey] ?? photo.captionKey
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const dialogRef = useRef(null)

  const active = FILTERS.find((f) => f.id === filter)
  const photos = active.categories
    ? PHOTOS.filter((photo) => active.categories.includes(photo.category))
    : interleave(PHOTOS)
  const visible = expanded ? photos : photos.slice(0, INITIAL_COUNT)
  const current = openIndex === null ? null : photos[openIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (current && !dialog.open) dialog.showModal()
    if (!current && dialog.open) dialog.close()
  }, [current])

  const step = (delta) => setOpenIndex((i) => (i + delta + photos.length) % photos.length)

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') step(1)
    if (event.key === 'ArrowLeft') step(-1)
  }

  function chooseFilter(id) {
    setFilter(id)
    setExpanded(false)
  }

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />

        <div className="gallery__filters" role="group" aria-label={t.filtersLabel}>
          {FILTERS.map((f) => (
            <button
              type="button"
              key={f.id}
              className={`gallery__filter ${f.id === filter ? 'is-active' : ''}`}
              aria-pressed={f.id === filter}
              onClick={() => chooseFilter(f.id)}
            >
              {t.filters[f.id]}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {visible.map((photo, index) => (
            <figure className="gallery__item" key={photo.id}>
              <button
                type="button"
                className="gallery__open"
                onClick={() => setOpenIndex(index)}
                aria-label={`${t.enlarge} ${caption(photo)}`}
              >
                <img src={photo.src} alt={caption(photo)} loading="lazy" />
              </button>
              <figcaption>{caption(photo)}</figcaption>
            </figure>
          ))}
        </div>

        {photos.length > INITIAL_COUNT && (
          <div className="gallery__more">
            <button type="button" className="gallery__more-button" onClick={() => setExpanded(!expanded)}>
              {expanded ? t.showFewer : t.showAll(photos.length)}
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setOpenIndex(null)}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.target === dialogRef.current && setOpenIndex(null)}
      >
        {current && (
          <>
            <img src={current.src} alt={caption(current)} />
            <p className="lightbox__caption">
              {caption(current)} · {openIndex + 1} / {photos.length}
            </p>
            <button type="button" className="lightbox__close" onClick={() => setOpenIndex(null)} aria-label={t.close}>
              ×
            </button>
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label={t.previous}>
              ‹
            </button>
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label={t.next}>
              ›
            </button>
          </>
        )}
      </dialog>
    </section>
  )
}

export default Gallery
