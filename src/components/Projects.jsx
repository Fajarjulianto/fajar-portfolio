import ProjectCard from "./ProjectCard";

function Projects() {
    return (
      <>
        <section id="projects" className="project">
          <div className="container">
          <h3>Portofolio</h3>
          <div className="project-content">
            <ProjectCard 
              image="/assets/project-1.png"
              name="To do List"
              description="Simple To Do List App"
              tech1="React"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/todofj"
              liveDemoLink="https://todofj.vercel.app/"
            />
            <ProjectCard 
              image="/assets/project-2.png"
              name="Movie DB"
              description="Web App to search movie information"
              tech1="React"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/what-movies"
            />
            <ProjectCard 
              image="/assets/project-3.png"
              name="Weather App"
              description="website to find out the weather in your city"
              tech1="React"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/weather-app"
            />
            </div>
            <h2 className="new-projects">New projects coming soon..</h2>
          </div>
        </section>
      </>
    );
  }
            
export default Projects;
  