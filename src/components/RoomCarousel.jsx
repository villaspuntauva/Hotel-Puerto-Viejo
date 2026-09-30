import { useRef, useState } from 'react'

// Swipeable photo strip: native scroll-snap handles touch swipes, buttons and dots
// scroll the same track so every input stays in sync.
function RoomCarousel({ photos, name, labels }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const hasMany = photos.length > 1

  function goTo(target) {
    const track = trackRef.current
    const next = (target + photos.length) % photos.length
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
  }

  function handleScroll() {
    const track = trackRef.current
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') goTo(index + 1)
    if (event.key === 'ArrowLeft') goTo(index - 1)
  }

  return (
    <div className="room-carousel" role="group" aria-roledescription="carousel" aria-label={name}>
      <div
        className="room-carousel__track"
        ref={trackRef}
        onScroll={hasMany ? handleScroll : undefined}
        onKeyDown={hasMany ? handleKeyDown : undefined}
        tabIndex={hasMany ? 0 : undefined}
      >
        {photos.map((src, i) => (
          <img
            key={src}
            className="room-carousel__slide"
            src={src}
            alt={`${name} — ${labels.photo} ${i + 1} / ${photos.length}`}
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>

      {hasMany && (
        <>
          <button
            type="button"
            className="room-carousel__nav room-carousel__nav--prev"
            onClick={() => goTo(index - 1)}
            aria-label={labels.previous}
          >
            ‹
          </button>
          <button
            type="button"
            className="room-carousel__nav room-carousel__nav--next"
            onClick={() => goTo(index + 1)}
            aria-label={labels.next}
          >
            ›
          </button>
          <div className="room-carousel__dots">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`room-carousel__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`${labels.photo} ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <span className="room-carousel__count" aria-hidden="true">
            {index + 1} / {photos.length}
          </span>
        </>
      )}
    </div>
  )
}

export default RoomCarousel
