import React from 'react';
import project1 from '../imgs/ai projesct5.webp';
import project2 from '../imgs/ai project2.png';
import project3 from '../imgs/ai porject.avif';
import project4 from '../imgs/ai projects.jpg'; // adjust the paths as necessary

function Projects() {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-gallery">
        <div className="project-item"><img src={project1} alt="Project 1" /></div>
        <div className="project-item"><img src={project2} alt="Project 2" /></div>
        <div className="project-item"><img src={project3} alt="Project 3" /></div>
        <div className="project-item"><img src={project4} alt="Project 4" /></div>
      </div>
    </section>
  );
}

export default Projects;
