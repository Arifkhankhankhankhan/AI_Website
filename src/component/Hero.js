import React from 'react';
import heroImage from '../imgs/ai imgs.jpg'; // adjust the path as necessary

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Specialized Artificial Intelligence Startup</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <a href="#" className="btn">Explore More</a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="AI Brain" />
      </div>
    </section>
  );
}

export default Hero;
