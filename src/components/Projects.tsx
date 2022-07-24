import projects from "../data/projects";
import "../styles/components/projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="list">
        {projects.map((project) => {
          return (
            <div
              className="project"
              onClick={() => {
                window.location.href =
                  project.url || project.githubUrl || "/404";
              }}
            >
              <div className="header">
                <h1>{project.name}</h1>
                <p>•</p>
                <p>{project.position}</p>
              </div>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
