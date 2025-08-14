import React from "react";
import "./timeline.css";

const EducationSection = () => {
  const timelineData = [
    {
      title: "Bachelor of Technology",
      subtitle: "Computer Science & Engineering",
      description: "XYZ University, 2018 - 2022. Specialized in full-stack development and software engineering.",
      side: "left"
    },
    {
      title: "Software Developer Intern",
      subtitle: "ABC Solutions",
      description: "Worked on backend development with Node.js and MongoDB, improving API performance by 25%.",
      side: "right"
    },
    {
      title: "Full Stack Developer",
      subtitle: "TechNova Pvt Ltd",
      description: "Led the development of client-facing applications using React, Node.js, and MongoDB.",
      side: "left"
    },
    {
      title: "Senior Developer",
      subtitle: "NextGen Systems",
      description: "Architected scalable solutions for enterprise clients, focusing on cloud deployments.",
      side: "right"
    }
  ];

  return (
    <section id="education" className="timeline">
       <h3
          className="center"
          style={{
            color: '#00e5ff',
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
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${item.side}`}
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
    </section>
  );
};

export default EducationSection;
