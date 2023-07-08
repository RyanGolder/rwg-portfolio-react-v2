import React from 'react';

function Project({ image, title, appLink, repoLink }) {
  return (
    <div className="project card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <a href={appLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View Application
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          View Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
