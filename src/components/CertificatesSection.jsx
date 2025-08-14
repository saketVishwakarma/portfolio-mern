// components/CertificatesSection.jsx
import React from 'react';
import certificates from '../data/certificates.json';
const CertificatesSection = () => {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="row" style={{alignItems: 'center'}}>
       
        <h2 className="center pink-text text-lighten-2" data-aos="fade-up">Certificates</h2>
        <div className="row">
          {certificates.map((cert, idx) => (
            <div className="col s12 m4 l3" key={idx} data-aos="flip-left" data-aos-delay={idx * 100}>
              <div className="card-panel hoverable">
                <h6>{cert.title}</h6>
                <p className="grey-text">Issued by: {cert.issuer}</p>
                <a href={cert.link} className="btn purple lighten-2" target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default CertificatesSection;
