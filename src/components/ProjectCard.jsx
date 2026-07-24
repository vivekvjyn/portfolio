export default function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      {project.image && (
        <img src={project.image} alt={project.name} className="project-image" />
      )}
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      {project.tools && project.tools.length > 0 && (
        <div className="project-tools">
          {project.tools.map((tool) => (
            <img
              key={tool.name}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool.icon}/${tool.icon}-original.svg`}
              alt={tool.name}
              title={tool.name}
              width="24"
              height="24"
              className={tool.icon === 'flask' ? 'logo-invert' : ''}
            />
          ))}
        </div>
      )}
      <span className="project-link">{project.label}</span>
    </a>
  );
}
