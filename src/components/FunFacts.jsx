import { useState } from 'react'
import funFacts from '../data/funFacts.js'
import Reveal from './Reveal.jsx'
import '../styles/funfacts.css'

function FunFacts() {
  const [selectedFact, setSelectedFact] = useState(null)

  return (
    <section id="datos-curiosos" className="section section-alt">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Datos curiosos</h2>
          <p className="section-subtitle">
            Algunas cosas sobre mí que quizás no sabías. Haz clic en una
            tarjeta para conocer más.
          </p>
        </Reveal>

        <div className="funfacts-grid">
          {funFacts.map((fact) => (
            <Reveal key={fact.id}>
              <button
                className="funfact-card"
                onClick={() => setSelectedFact(fact)}
              >
                <span className="funfact-icon">{fact.icon}</span>
                <h3 className="funfact-title">{fact.title}</h3>
                <p className="funfact-text">{fact.shortText}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal: solo se muestra si hay un dato curioso seleccionado */}
      {selectedFact && (
        <div className="modal-overlay" onClick={() => setSelectedFact(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedFact(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={selectedFact.image}
              alt={selectedFact.title}
              className="modal-image"
            />
            <h3>{selectedFact.title}</h3>
            <p>{selectedFact.longText}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default FunFacts
