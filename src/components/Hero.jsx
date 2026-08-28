import Button from './Button.jsx'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero grain">
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">Puerto Viejo de Talamanca, Costa Rica</p>
        <h1 className="hero__title">
          Sleep Slow.
          <br />
          Surf Often.
        </h1>
        <p className="hero__subtitle">
          The first hotel in town, half a block from the sea. Dorms and private rooms,
          a garden to hang out in, and Salsa Brava a five-minute walk away.
        </p>
        <div className="hero__actions">
          <Button href="#booking" variant="primary">
            Check Availability
          </Button>
          <Button href="#rooms" variant="light">
            See the Rooms
          </Button>
        </div>
      </div>

      <a href="#intro" className="hero__scroll" aria-label="Scroll to next section">
        <span />
      </a>
    </section>
  )
}

export default Hero
