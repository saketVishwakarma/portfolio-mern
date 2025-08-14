// components/ProjectsSection.jsx
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Newsletter App",
    description: "A simple Newsletter App using Mailchimp API with NodeJS and Express.",
    link: "https://desolate-gorge-12284.herokuapp.com/",
  },
  {
    title: "Blog Website",
    description: "A personal blog built with NodeJS and MongoDB.",
    link: "https://mighty-thicket-34252.herokuapp.com/",
  },
  {
    title: "To-Do List",
    description: "Task manager app built with NodeJS and MongoDB for organizing daily tasks.",
    link: "https://ancient-lake-46661.herokuapp.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="center blue-text text-lighten-2" data-aos="fade-up">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col s12 m6 l3" key={index} data-aos="zoom-in-up" data-aos-delay={index * 100}>
              <div className="card-panel hoverable">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn cyan lighten-1">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
