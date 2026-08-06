import aboutImage from "../assets/images/about.jpeg";
import Reveal from "./Reveal";
import "../styles/about.css";

function About() {
  return (
    <section id="sobre-mi" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>

        <p className="section-subtitle">
          Un poco más sobre quién soy y qué me apasiona.
        </p>

        <div className="about-grid">
          <Reveal className="about-photo-col">
            <img
              src={aboutImage}
              alt="Fotografía personal"
              className="about-photo"
            />
          </Reveal>

          <Reveal className="about-text-col">
            <p>
              Soy una persona curiosa y disciplinada, apasionada por aprender
              cosas nuevas cada día. Actualmente estudio Ingeniería en Ciencias
              Computacionales, donde combino mis estudios con proyectos
              personales que me permiten seguir creciendo tanto profesional como
              personalmente.
            </p>

            <p>
              Me considero una persona responsable, creativa y con muchas ganas
              de dejar huella en todo lo que hago. Disfruto trabajar en equipo,
              desarrollar soluciones tecnológicas y aprender nuevas herramientas
              que fortalezcan mis conocimientos.
            </p>

            <p>
              Además de la programación, me apasiona la fotografía, los viajes,
              la tecnología y seguir construyendo proyectos que aporten valor y
              me acerquen a mis metas profesionales.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
