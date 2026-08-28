import SectionHeading from './SectionHeading.jsx'
import './History.css'

const FACTS = [
  'Open since 1987 — the first hostel in Puerto Viejo',
  'Bought by surfer Kurt Van Dyke in the late 1990s',
  'Family-run ever since — by Sofi, Salvador and Lulu',
  'Freshly renovated for a 2026 relaunch',
]

function History() {
  return (
    <section id="story" className="history section">
      <div className="container history__grid">
        <div className="history__image grain" aria-hidden="true" />
        <div className="history__content">
          <SectionHeading
            eyebrow="Our Story"
            title="A legendary home base since 1987."
            align="left"
          />
          <p>
            Hotel Puerto Viejo opened in 1987, the first hostel in town. In the late
            1990s it was bought by Kurt Van Dyke, a surfer who saw what this stretch of
            the Caribbean coast could become. Under his watch, the place turned into the
            house for international surfers chasing the region&apos;s most powerful
            break — Salsa Brava, five minutes down the road.
          </p>
          <p>
            Not long after, Kurt met Sofi, a traveller from San José who came through
            and never quite left. They started a family, and Sofi took the hostel out of
            the notebook-and-pen era and ran it in a sharper, more modern way. Kurt has
            since passed the hostel down to their kids, Salvador and Lulu — with Sofi
            still at the helm today.
          </p>
          <p>
            In 2026, after a run of renovations and a fresh start, the family is still
            doing what they&apos;ve always done, just better. Backpackers, travellers
            and surfers keep finding their way here — a legendary home base where people
            come to surf, explore, meet people, and stay longer than planned.
          </p>
          <ul className="history__facts">
            {FACTS.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default History
