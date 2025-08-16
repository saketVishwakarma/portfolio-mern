import React from 'react';
import certificates from '../data/certificates.json';
import './css/certificate.css';

const CertificatesSection = () => (
  <section id="certificates" className="certificates-section">
    <div className="container">
      <h2 className="cert-title " data-aos="fade-up">CERTIFICATES</h2>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div
            className="certificate-card"
            key={idx}
            data-aos="flip-left"
            data-aos-delay={idx * 140}
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h6 className="cert-card-title">{cert.title}</h6>
            <p className="cert-card-issuer">Issued by: <span>{cert.issuer}</span></p>
            <a
              href={cert.link}
              className="cert-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
