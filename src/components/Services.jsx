import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { IconCheck } from './icons.jsx'
import './Services.css'

const TABS = [
  {
    id: 'activities',
    label: 'Activities',
    sections: [
      {
        title: 'Entertainment',
        items: ['Pool table', 'Ping pong table', 'Internet access', 'Book exchange'],
      },
      {
        title: 'Platform Classes — ₡5,000 per class',
        items: ['Yoga', 'Pilates', 'Stretch class', 'Belly dance', 'And more'],
      },
      {
        title: 'Activity Nights',
        items: ['Board game night', 'Language exchange night'],
      },
    ],
  },
  {
    id: 'amenities',
    label: 'Amenities',
    items: [
      'Free WiFi throughout',
      'Free parking on site',
      'Bicycle parking',
      'Large shared kitchen',
      'Gardens & common areas',
      'Meeting rooms',
    ],
  },
  {
    id: 'services',
    label: 'Services',
    items: [
      'Daily housekeeping',
      'Tours & travel desk',
      'Bicycle rental',
      'Reception open 7:00 AM – 10:00 PM',
      'Late check-in available on request',
      'Transfer service for tours',
    ],
  },
  {
    id: 'good-to-know',
    label: 'Good to Know',
    items: [
      'Check-in: 3:00 PM – 10:00 PM',
      'Check-out: before 11:00 AM',
      'Payment on arrival — Visa, Maestro, Mastercard, JCB',
      '13% tax added at arrival',
      'Free cancellation up to 72 hours before arrival',
      'No-show reservations are charged in full',
    ],
  },
]

function FacilityList({ items }) {
  return (
    <ul className="services__grid">
      {items.map((item) => (
        <li className="services__item" key={item}>
          <IconCheck className="services__item-icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Services() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const activeTab = TABS.find((tab) => tab.id === activeId)

  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionHeading
          eyebrow="What's Included"
          title="Services & Facilities"
          description="Everything on offer, straight from the front desk — no surprises at check-in."
        />

        <div className="services__tabs" role="tablist" aria-label="Services and facilities categories">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === activeId}
              className={`services__tab ${tab.id === activeId ? 'is-active' : ''}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab.sections ? (
          <div className="services__sections" role="tabpanel">
            {activeTab.sections.map((section) => (
              <div className="services__section" key={section.title}>
                <h3 className="services__section-title">{section.title}</h3>
                <FacilityList items={section.items} />
              </div>
            ))}
          </div>
        ) : (
          <div role="tabpanel">
            <FacilityList items={activeTab.items} />
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
