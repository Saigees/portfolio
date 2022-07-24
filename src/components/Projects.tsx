import projects from "../data/projects";
import playPop, { Click } from "../lib/playPop";
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
              onClick={() => Click(project.url || project.githubUrl || "/404")}
            >
              <div className="header">
                <h1>{project.name}</h1>
                <p className="dot">•</p>
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
