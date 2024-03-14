import PropTypes from 'prop-types';
import '../style/ProjectCard.css'; 

const ProjectCard = ({ image, name, description, tech1, tech2, repositoryLink, liveDemoLink }) => {


  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="project-details">
        <div className="project-header">
          <h3>{name}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="technologies">
            <p className="technology-icon">{tech1}</p>
            <p className="technology-icon">{tech2}</p>
        </div>
        <div className="project-links">
          <a href={repositoryLink} target="_blank" rel="noopener noreferrer">Code</a>
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">View</a>
        </div>
      </div>
    </div>
  );
};


ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech1: PropTypes.string.isRequired,
  tech2: PropTypes.string.isRequired,
  repositoryLink: PropTypes.string.isRequired,
  liveDemoLink: PropTypes.string.isRequired
};

export default ProjectCard;
