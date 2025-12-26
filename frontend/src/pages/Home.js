import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Hobbies from '../components/Hobbies';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Hobbies />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
