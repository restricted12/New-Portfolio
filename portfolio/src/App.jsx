import React from 'react';
import Header from '../src/components/header/header.jsx';
import About from './components/about/about.jsx';
import StatsAndSkills from './components/skills/skills.jsx'
import Resume from './components/Resume/resume.jsx';
import PortfolioSection from './components/portfolio/portfolio.jsx';
import ServicesSection from './components/servicess/service.jsx';
import TestimonialsSection from './components/testimonial/testimonial.jsx';
import ContactSection from './components/contact/contact.jsx';

function App() {
  return (
    <>
      <Header />
      <About />
      <StatsAndSkills/>
      <Resume/>
      <PortfolioSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </>
  );
}

export default App;
