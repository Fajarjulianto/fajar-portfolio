import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <h3>My Projects</h3>
          <div className="project-content">
            <ProjectCard
              image="/assets/fajarmotor.png"
              name="Fajar Motor"
              description="Simple Landing Page"
              tech1="Next JS"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/fajar-motor"
              liveDemoLink="https://fajar-motor.vercel.app/"
            />
            <ProjectCard
              image="/assets/todofj.png"
              name="To do List"
              description="Simple To Do List App"
              tech1="React"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/todofj"
              liveDemoLink="https://todofj.vercel.app/"
            />
            <ProjectCard
              image="/assets/grocery.png"
              name="FR Grocery App"
              description="Online Grocery Ecommerce"
              tech1="Next JS"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/grocery"
              liveDemoLink="https://grocery-five-chi.vercel.app/"
            />
            <ProjectCard
              image="/assets/bestro.png"
              name="E-Bestro"
              description="Petrokimia Gresik Scholarship System"
              tech1="Next JS"
              tech2="Tailwind CSS"
              repositoryLink="https://github.com/Fajarjulianto/e-bestro"
            />
          </div>
          <h2 className="new-projects">New projects coming soon..</h2>
        </div>
      </section>
    </>
  );
}

export default Projects;
