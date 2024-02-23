import "../dist/styles.css";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";


const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=scss,bootstrap",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=js,vite",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind,react",
    id: 4,
  },
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Fajar Julianto</h1>
                <h2>Junior Frontend Developer</h2>
                <p>Hi everyone<span className="wave">👋🏼</span>,welcome to my portfolio website.</p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/fajar-julianto-2128a3255/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Fajarjulianto"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
                {/* <a href="" className="hero-btn"><IconFileDownload margin-right="2px"/>Download CV</a> */}
              </div>
             

              <div className="hero-img"></div>
            </div>
            
            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
