import React from 'react';
import resumePDF from '../assets/resume.pdf';

const Resume = () => {
  const proficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'];

  return (
    <section id="resume" className="container py-5">
      <h2 className="text-center">Resume</h2>
      <div className="text-center">
        <a href={resumePDF} download="resume.pdf" className="btn btn-primary">
          Download Resume
        </a>
      </div>
      <div className="mt-4">
        <h3>Proficiencies:</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
