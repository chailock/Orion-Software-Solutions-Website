import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExitPopup from './components/ExitPopup';
import Blog from './components/Blog'

function App() {
  return (
    <Router>
      <div className="bg-slate-50 text-white min-h-screen">
        <Header />
        <Element name="home"><Hero /></Element>
       <Element name="about"><About /></Element>
        <Element name="services"><Services /></Element>
        <Element name="casestudies"><CaseStudies /></Element>
        <Element name="portfolio"><Portfolio /></Element>
        <Blog />
        
        <Element name="faq"><FAQ /></Element>
        <Element name="contact"><Contact /></Element>
        <Footer />
        <ExitPopup />
      </div>
    </Router>
  );
}

export default App;