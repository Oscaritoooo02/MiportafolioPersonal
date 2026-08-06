import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import "../styles/projects.css";

function Projects() {
  return (
    <section id="proyectos" className="section section-alt">
      <div className="container">

        <Reveal>
          <h2 className="section-title">Mis Proyectos</h2>

          <p className="section-subtitle">
            Estos son algunos de los proyectos que he desarrollado durante mi
            formación universitaria y de manera personal.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
