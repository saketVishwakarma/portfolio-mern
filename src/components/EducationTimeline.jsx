import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./timeline.css";

const timelineData = [
  {
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Engineering",
    description: "XYZ University, 2018 - 2022. Specialized in full-stack development and software engineering."
  },
  {
    title: "Software Developer Intern",
    subtitle: "ABC Solutions",
    description: "Worked on backend development with Node.js and MongoDB, improving API performance by 25%."
  },
  {
    title: "Full Stack Developer",
    subtitle: "TechNova Pvt Ltd",
    description: "Led the development of client-facing applications using React, Node.js, and MongoDB."
  },
  {
    title: "Senior Developer",
    subtitle: "NextGen Systems",
    description: "Architected scalable solutions for enterprise clients, focusing on cloud deployments."
  }
];

const EducationSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true
    });
  }, []);

  return (
    <section id="education" className="timeline-section">
      <h3
        className="center"
        style={{
          color: '#6791ecff',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '3rem'
        }}
        data-aos="fade-down"
      >
        Education and professional journey
      </h3>

      <div className="container">
        <div className="row">
          <div className="col-12 timeline-wrapper">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                style={{ top: `${index * 180}px` }}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={`${index * 180}`}
              >
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
