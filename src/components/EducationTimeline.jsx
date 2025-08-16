import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/timeline.css";
import timelineData from "../data/education.json";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);

  return (
    <section id="education" className="timeline-section">
      <h3 className="edu-title" data-aos="fade-down">
        Education and professional journey
      </h3>
      <div className="container">
        <div className="timeline-wrapper">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 180}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
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
