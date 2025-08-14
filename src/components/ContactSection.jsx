""// File: components/ContactSection.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="section" style={{ padding: '8rem 1rem 5rem', zIndex: 10, position: 'relative' }}
>
      <div className="container">
        <h2 className="center text-lighten-2 green-text" data-aos="fade-up">Contact Me</h2>

        <form className="row" data-aos="fade-up">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <textarea id="message" className="materialize-textarea"></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <div className="center">
            <button className="btn neon-btn">Send Message</button>
          </div>
        </form>

        <div className="center social-icons" style={{ marginTop: '2rem' }}>
          <a
            href="https://github.com/saketVishwakarma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large waves-effect waves-light tooltipped"
            data-tooltip="GitHub"
         style={{textalign: 'center', marginRight: '1rem',justifyContent: 'center'
         }}
          >
            <FaGithub size={55} />
          </a>
           
          <a
            href="https://linkedin.com/in/saket-vishwakarma13"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large waves-effect waves-light tooltipped"
            data-tooltip="LinkedIn"
            style={{ marginRight: '1rem',justifyContent: 'center'
         }}
            
          >
           <FaLinkedin size={50} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
