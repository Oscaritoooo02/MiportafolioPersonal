import '../styles/hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-container">
        <div className="hero-photo-wrapper">
      
          <img
            src="/src/assets/images/profile.jpeg"
            alt="Foto de perfil"
            className="hero-photo"
          />
        </div>

        <div className="hero-text">
          {/* Cambia el nombre, la carrera y la descripción por los tuyos */}
          <p className="hero-greeting">Hola, mi nombre es</p>
          <h1 className="hero-name">Oscar Agurcia</h1>
          <h2 className="hero-career">Estudiante de Ingeniería en Ciencias Computacionales</h2>
          <p className="hero-description">
            Bienvenido a mi espacio personal. Aquí comparto un poco sobre mi
            historia, mis intereses y algunos momentos importantes de mi vida.
          </p>
          <a href="#sobre-mi" className="btn">
            Conóceme
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
