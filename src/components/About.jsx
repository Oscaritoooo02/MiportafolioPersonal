import aboutImage from "../assets/images/about.jpeg";
import Reveal from "./Reveal";
import "../styles/about.css";

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
              src={aboutImage}
              alt="Fotografía personal"
              className="about-photo"
            />
          </Reveal>

          <Reveal className="about-text-col">
            <p>
              Soy una persona curiosa y disciplinada...
            </p>

            <p>
              Me considero una persona responsable...
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
