import SectionHeading from './SectionHeading.jsx'
import entrancePhoto from '../assets/gallery/hotel-puerto-viejo-exterior-10.jpg'
import { useCopy } from '../i18n.js'
import './History.css'

const COPY = {
  en: {
    imageAlt: 'The Hotel Puerto Viejo entrance gate',
    eyebrow: 'Our Story',
    title: 'A legendary home base since 1987.',
    paragraphs: [
      "Hotel Puerto Viejo opened in 1987, the first hostel in town. In the late 1990s it was bought by Kurt Van Dyke, a surfer who saw what this stretch of the Caribbean coast could become. Under his watch, the place turned into the house for international surfers chasing the region's most powerful break — Salsa Brava, five minutes down the road.",
      'Not long after, Kurt met Sofi, a traveller from San José who came through and never quite left. They started a family, and Sofi took the hostel out of the notebook-and-pen era and ran it in a sharper, more modern way. Kurt has since passed the hostel down to their kids, Salvador and Lulu — with Sofi still at the helm today.',
      "In 2026, after a run of renovations and a fresh start, the family is still doing what they've always done, just better. Backpackers, travellers and surfers keep finding their way here — a legendary home base where people come to surf, explore, meet people, and stay longer than planned.",
    ],
    facts: [
      'Open since 1987 — the first hostel in Puerto Viejo',
      'Bought by surfer Kurt Van Dyke in the late 1990s',
      'Family-run ever since — by Sofi, Salvador and Lulu',
      'Freshly renovated for a 2026 relaunch',
    ],
  },
  es: {
    imageAlt: 'El portón de entrada del Hotel Puerto Viejo',
    eyebrow: 'Nuestra Historia',
    title: 'Un punto de encuentro legendario desde 1987.',
    paragraphs: [
      'Hotel Puerto Viejo abrió en 1987, el primer hostel del pueblo. A finales de los años 90 lo compró Kurt Van Dyke, un surfista que vio todo lo que esta parte de la costa caribeña podía llegar a ser. Bajo su mando, el lugar se convirtió en la casa de los surfistas internacionales que venían en busca de la ola más potente de la región: Salsa Brava, a cinco minutos por la calle.',
      'Poco después, Kurt conoció a Sofi, una viajera de San José que llegó de paso y nunca terminó de irse. Formaron una familia, y Sofi sacó al hostel de la era del cuaderno y el lápiz para administrarlo de una forma más ágil y moderna. Con los años, Kurt les pasó el hostel a sus hijos, Salvador y Lulu, y Sofi sigue al frente hasta hoy.',
      'En 2026, después de varias renovaciones y un nuevo comienzo, la familia sigue haciendo lo que siempre ha hecho, pero mejor. Mochileros, viajeros y surfistas siguen encontrando el camino hasta aquí: un punto de encuentro legendario donde la gente viene a surfear, explorar, conocer gente y quedarse más de lo planeado.',
    ],
    facts: [
      'Abierto desde 1987: el primer hostel de Puerto Viejo',
      'Comprado por el surfista Kurt Van Dyke a finales de los 90',
      'Negocio familiar desde entonces, con Sofi, Salvador y Lulu',
      'Recién renovado para su relanzamiento en 2026',
    ],
  },
}

function History() {
  const t = useCopy(COPY)

  return (
    <section id="story" className="history section wave-top">
      <div className="container history__grid">
        <img className="history__image" src={entrancePhoto} alt={t.imageAlt} loading="lazy" />
        <div className="history__content">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} align="left" />
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="history__facts">
            {t.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default History
