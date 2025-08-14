// File: components/HeroSection.jsx
import React from 'react';
import profilePic from '/assets/saket.jpg';

function HeroSection() {
  return (
    <section id="hero" className="section center-align" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s12 m6" data-aos="fade-right">
            <img
              src={profilePic}
              alt="Saket Kumar Vishwakarma"
              className="responsive-img circle z-depth-3"
              style={{ maxWidth: '300px', border: '4px solid #00adb5' }}
            />
          </div>
          <div className="col s12 m6" data-aos="fade-left">
            <h3 className="blue-text text-darken-2">Hi, I'm Saket 👋</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
             Experienced in building secure CI/CD pipelines, automating infrastructure with Terraform, and deploying cloud-native apps on Azure. Skilled in Docker, Kubernetes, GitHub Actions, and full stack (React, Node.js). Also proficient in data analytics using PySpark, Pandas, and SQL across MongoDB, MySQL, and PostgreSQL. Passionate about bridging DevOps, development, and data to deliver smart, scalable, and secure solutions.
            </p>
            <a
              href="/assets/resume.pdf"
              className="btn-large waves-effect waves-light teal lighten-1 mt-2"
              download
              style={{ marginTop: '1.5rem' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
