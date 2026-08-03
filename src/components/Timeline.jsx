import timeline from '../data/timeline.js'
import Reveal from './Reveal.jsx'
import '../styles/timeline.css'

function Timeline() {
  return (
    <section id="mi-historia" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Mi historia</h2>
          <p className="section-subtitle">
            Un recorrido por las etapas más importantes de mi vida.
          </p>
        </Reveal>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true"></div>

          {timeline.map((stage, index) => (
            <Reveal key={stage.id} className="timeline-item-wrapper">
              <div
                className={`timeline-item ${
                  index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'
                }`}
              >
                <div className="timeline-card">
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="timeline-image"
                  />
                  <span className="timeline-year">{stage.year}</span>
                  <h3 className="timeline-title">{stage.title}</h3>
                  <p className="timeline-description">{stage.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
