import "../styles/projects.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="project-header">
        <h3>{project.title}</h3>

        <span className="project-type">
          {project.type}
        </span>
      </div>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-section">
        <h4>Tecnologías utilizadas</h4>

        <div className="project-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h4>Mi aporte</h4>

        <ul>
          {project.contributions.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-footer">
        <span className="project-role">
          {project.role}
        </span>
      </div>

    </div>
  );
}

export default ProjectCard;
