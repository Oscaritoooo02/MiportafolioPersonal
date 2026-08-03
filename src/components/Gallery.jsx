import { useState } from 'react'
import gallery from '../data/gallery.js'
import Reveal from './Reveal.jsx'
import '../styles/gallery.css'

function Gallery() {
  // Imagen actualmente abierta en el lightbox (null = cerrado)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="galeria" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Galería</h2>
          <p className="section-subtitle">
            Algunos momentos que me gusta recordar.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((photo) => (
            <Reveal key={photo.id}>
              <button
                className="gallery-item"
                onClick={() => setSelectedImage(photo)}
              >
                <img src={photo.src} alt={photo.caption} />
                <span className="gallery-overlay">{photo.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox: muestra la imagen seleccionada en grande */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
