import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="text-center">
      <h2>Contact</h2>
      <div className="contact-links">
        <a className="btn btn-primary" href="mailto:rgolder78@gmail.com" target="_blank" rel="noopener noreferrer">
          Email: rgolder78@gmail.com
        </a>
        <button className="btn btn-primary" onClick={() => window.open("https://github.com/RyanGolder", "_blank")} target="_blank" rel="noopener noreferrer">
          GitHub
        </button>
        <button className="btn btn-primary" onClick={() => window.open("https://www.linkedin.com/in/ryan-golder-00b867138/", "_blank")} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </button>
      </div>
    </section>
  );
};

export default Contact;
