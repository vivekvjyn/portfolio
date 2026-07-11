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
      <span className="project-tag">{project.tag}</span>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.description}</p>
      {project.tools && (
        <div className="project-tools">
          {project.tools.slice(0, 6).map((tool) => (
            <img
              key={tool.name}
              src={tool.custom || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon}/${tool.icon}-original.svg`}
              alt={tool.name}
              title={tool.name}
              width="24"
              height="24"
            />
          ))}
          {project.tools.length > 6 && (
            <span className="tools-overflow">+{project.tools.length - 6}</span>
          )}
        </div>
      )}
      <span className="project-link">{project.label}</span>
    </a>
  );
}
