import React from 'react';
import Project from './Project';
import weatherForecastImage from '../images/weather-forecast.png';
import outfitForecastImage from '../images/outfit-forecast.png';
import jateImage from '../images/JATE.png';

function Portfolio() {
  // Define your projects here
  const projects = [
    {
      image: weatherForecastImage,
      title: 'Weather Forecast',
      appLink: 'https://ryangolder.github.io/weather-forecast/',
      repoLink: 'https://github.com/RyanGolder/weather-forecast',
    },
    {
      image: outfitForecastImage,
      title: 'Outfit Forecast',
      appLink: 'https://elibrer.github.io/weather-fashion-app/',
      repoLink: 'https://github.com/Elibrer/weather-fashion-app',
    },
    {
      image: jateImage,
      title: 'JATE',
      appLink: 'https://pwa-text-editor-rwg-8f9b6c51a974.herokuapp.com/',
      repoLink: 'https://github.com/RyanGolder/pwa-text-editor',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="container py-5">
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Project
              image={project.image}
              title={project.title}
              appLink={project.appLink}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
