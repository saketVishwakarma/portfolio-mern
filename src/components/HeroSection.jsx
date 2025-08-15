import React from 'react';
import profilePic from '/assets/saket.jpg';
import profilePicAlt from '/assets/saket_alt.JPG';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="profile-pic-hover">
          <img
            src={profilePic}
            alt="Saket Kumar Vishwakarma"
            className="profile-pic main-pic"
          />
          <img
            src={profilePicAlt}
            alt="Saket Alternate"
            className="profile-pic alt-pic"
          />
        </div>
        <div className="intro-text">
          <h3>Hi, I'm Saket 👋</h3>
          <p>
            Experienced in building secure CI/CD pipelines, automating infrastructure with Terraform,
            and deploying cloud-native apps on Azure. Skilled in Docker, Kubernetes, GitHub Actions,
            and full stack (React, Node.js). Also proficient in data analytics using PySpark, Pandas,
            and SQL across MongoDB, MySQL, and PostgreSQL. Passionate about bridging DevOps,
            development, and data to deliver smart, scalable, and secure solutions.
          </p>
          <a
            href="/assets/resume.pdf"
            className="btn-resume"
            download
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
