import SectionHeading from './SectionHeading.jsx'
import { IconWave } from './icons.jsx'
import './SurfForecast.css'

function SurfForecast() {
  return (
    <section id="surf-forecast" className="surf-forecast section">
      <div className="container">
        <SectionHeading
          eyebrow="Salsa Brava"
          title="3-Day Surf Forecast"
          description="Live conditions for Salsa Brava, five minutes' walk from the hotel — updated automatically by Surf-Forecast.com."
        />

        <div className="surf-forecast__widget">
          <div className="wf-width-cont surf-fc-widget widget-centered">
            <div className="widget-container">
              <div className="external-cont">
                <iframe
                  className="surf-fc-i"
                  allowtransparency="true"
                  title="Salsa Brava 3-day surf forecast"
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
                      Salsa Brava surf forecast
                    </a>{' '}
                    by{' '}
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
