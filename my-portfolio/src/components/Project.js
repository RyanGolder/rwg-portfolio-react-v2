import React from 'react';

function Project({ image, title, appLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <a href={appLink} target="_blank" rel="noopener noreferrer">
        View Application
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
}

export default Project;
