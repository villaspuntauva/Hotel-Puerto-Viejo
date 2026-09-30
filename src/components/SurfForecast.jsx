import SectionHeading from './SectionHeading.jsx'
import { IconWave } from './icons.jsx'
import { useCopy } from '../i18n.js'
import './SurfForecast.css'

const COPY = {
  en: {
    title: '3-Day Surf Forecast',
    description:
      "Live conditions for Salsa Brava, five minutes' walk from the hotel — updated automatically by Surf-Forecast.com.",
    iframeTitle: 'Salsa Brava 3-day surf forecast',
    creditLink: 'Salsa Brava surf forecast',
    by: 'by',
  },
  es: {
    title: 'Pronóstico de Surf a 3 Días',
    description:
      'Condiciones en tiempo real de Salsa Brava, a cinco minutos caminando del hotel, actualizadas automáticamente por Surf-Forecast.com.',
    iframeTitle: 'Pronóstico de surf a 3 días para Salsa Brava',
    creditLink: 'Pronóstico de surf de Salsa Brava',
    by: 'por',
  },
}

function SurfForecast() {
  const t = useCopy(COPY)

  return (
    <section id="surf-forecast" className="surf-forecast section">
      <div className="container">
        <SectionHeading
          eyebrow="Salsa Brava"
          title={t.title}
          description={t.description}
        />

        <div className="surf-forecast__widget">
          <div className="wf-width-cont surf-fc-widget widget-centered">
            <div className="widget-container">
              <div className="external-cont">
                <iframe
                  className="surf-fc-i"
                  allowtransparency="true"
                  title={t.iframeTitle}
                  src="https://www.surf-forecast.com/breaks/Salsa-Brava/forecasts/widget/m"
                  scrolling="no"
                  frameBorder="0"
                  marginWidth="0"
                  marginHeight="0"
                />
                <div className="footer">
                  <a className="logo" href="https://www.surf-forecast.com/" target="_blank" rel="noopener noreferrer">
                    <IconWave />
                  </a>
                  <div className="about" id="cmt">
                    <a href="https://www.surf-forecast.com/breaks/Salsa-Brava" target="_blank" rel="noopener noreferrer">
                      {t.creditLink}
                    </a>{' '}
                    {t.by}{' '}
                    <a href="https://www.surf-forecast.com/" target="_blank" rel="noopener noreferrer">
                      surf-forecast.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SurfForecast
