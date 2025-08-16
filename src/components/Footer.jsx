// Footer.jsx
import React from "react";
import "./css/Footer.css"; // we'll move footer-specific CSS here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="/assets/resume.pdf"
          className="footer-btn"
          download
        >
          Download Resume
        </a>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Saket Kumar Vishwakarma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
