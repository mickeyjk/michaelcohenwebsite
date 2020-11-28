/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import useSticky from '../hooks/useSticky.js';
import Navbar from './Header/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

const App = ({ data }) => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const { isSticky, element } = useSticky();

  const { allDataJson } = data;
  const portfolio = allDataJson.edges[0].node.data;
  const heroData = portfolio.hero;
  const aboutData = portfolio.about;
  const projectsData = portfolio.projects;
  const contactData = portfolio.contact;
  const footerData = portfolio.footer;

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Navbar headerNames={data} sticky={isSticky} />
      <Hero element={element} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
