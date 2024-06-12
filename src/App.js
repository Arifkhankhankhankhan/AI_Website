import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Team from './component/Team';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
