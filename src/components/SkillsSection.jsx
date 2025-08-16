import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/skill.css';

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Cloud');

  useEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h3 className="center" data-aos="fade-down" data-aos-duration="900">
          Skills
        </h3>

        <div className="skill-category-container">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              className={`btn skill-category-button ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="row center-align">
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className="skill-card-row">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="skill-progress">
                <div
                  className="skill-progress-filled"
                  style={{ width: `${skill.proficiency}%` }}
                >
                  {skill.proficiency}% <span className="skill-emoji">🎮</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
