import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/fajar-julianto-2128a3255/"
              >
              <IconBrandLinkedin width={32} height={32} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Fajarjulianto"
              >
             <IconBrandGithub width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
