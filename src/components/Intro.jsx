import SectionHeading from './SectionHeading.jsx'
import { IconPin, IconStar, IconSun, IconWave } from './icons.jsx'
import './Intro.css'

const STATS = [
  { icon: IconPin, value: 'Half a block', label: 'to the sea' },
  { icon: IconWave, value: '416m', label: 'to Salsa Brava' },
  { icon: IconStar, value: '8.8/10', label: 'on Hostelworld' },
  { icon: IconSun, value: '1987', label: 'open since' },
]

function Intro() {
  return (
    <section id="intro" className="intro section">
      <div className="container intro__grid">
        <SectionHeading
          eyebrow="Welcome"
          title="The first hotel in Puerto Viejo, still half a block from the sea."
          align="left"
        />
        <p className="intro__text">
          Hotel Puerto Viejo has been putting up backpackers and surfers since 1987 —
          long before &quot;surf hostel&quot; was a category. Expect a rustic garden
          courtyard, a well-worn shared kitchen, bikes to borrow, and a crew that knows
          this stretch of coast better than anyone.
        </p>
      </div>

      <div className="container intro__stats">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div className="intro__stat" key={label}>
            <Icon className="intro__stat-icon" />
            <p className="intro__stat-value">{value}</p>
            <p className="intro__stat-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Intro
