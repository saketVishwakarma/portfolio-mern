import React, { useEffect } from 'react';
import projects from '../data/projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProjectsSection.css';

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 150,
      duration: 1800,
      easing: 'ease-in-out-back',
    });
  }, []);

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="container">
        <h2 className="center blue-text text-lighten-2" data-aos="fade-up" data-aos-duration="900">
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="900"
              data-aos-easing="ease-in-out-back"
            >
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <p className="tech">{project.Technologies}</p>

              <div className="btn-group">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-repo"
                  aria-label={`${project.title} Repository`}
                >
                  Repo
                </a>

                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-demo"
                    aria-label={`${project.title} Live Demo`}
                  >
                    Play
                  </a>
                ) : ""
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
