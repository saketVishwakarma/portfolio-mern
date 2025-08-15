import React, { useEffect,useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import M from 'materialize-css';
function ContactSection() {
  const form = useRef();
  useEffect(() => {
    M.updateTextFields();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k2qtndk', 'template_jhwyzbn', form.current, '86StoHDtCrnA2rtNU')
      .then((result) => {
          alert("Message sent successfully!");
      }, (error) => {
          alert("Failed to send, please try again.");
      });
    e.target.reset();
  };

  return (
   <section
      id="contact"
      className="section"
      style={{ padding: '8rem 1rem 5rem', zIndex: 10, position: 'relative' }}
    >
      <div className="container">
        <h2 className="center text-lighten-2 green-text" data-aos="fade-up">
          Contact Me
        </h2>

        <form ref={form} className="row" data-aos="fade-up" onSubmit={sendEmail}>
          <div className="input-field col s12">
            <input id="name" name="name" type="text" className="validate" defaultValue="" required />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-field col s12">
            <input id="email" name="email" type="email" className="validate" defaultValue="" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field col s12">
            <textarea
              id="message"
              name="message"
              className="materialize-textarea"
              defaultValue=""
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <div className="center">
            <button className="btn neon-btn" type="submit">
              Send Message
            </button>
          </div>
        </form>

       <div className="social-icons">
  <a
    href="https://github.com/saketVishwakarma"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
    aria-label="GitHub"
  >
    <FaGithub size={36} />
  </a>
  <a
    href="https://linkedin.com/in/saket-vishwakarma13"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={32} />
  </a>
</div>

      </div>
    </section>
  );
}

export default ContactSection;
