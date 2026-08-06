import Reveal from './Reveal.jsx'
import '../styles/about.css'

function About() {
  return (
    <section id="sobre-mi" className="section section-alt">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-subtitle">
            Un poco más sobre quién soy y qué me apasiona.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-photo-col">
          
            <img
              src="/src/assets/images/about.jpeg"
              alt="Fotografía personal"
              className="about-photo"
            />
          </Reveal>

          <Reveal className="about-text-col">
            <p>
              Soy una persona curiosa y disciplinada, apasionada por aprender
              cosas nuevas cada día. Actualmente estudio en la universidad,
              donde combino mis estudios con proyectos personales que me
              permiten seguir creciendo.
            </p>
            <p>
              Me considero una persona responsable, creativa y con muchas
              ganas de dejar huella en todo lo que hago. Disfruto trabajar en
              equipo y siempre busco la manera de mejorar mis habilidades.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
