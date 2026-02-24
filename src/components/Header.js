import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/image-8.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    } else {
      scroller.scrollTo(section, {
        duration: 800,
        smooth: 'easeInOutQuart',
        offset: -80,
      });
    }
    setOpen(false);
  };

  const navItems = ['Home', 'About', 'Services', 'CaseStudies', 'Portfolio', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 py-4 px-6 md:px-12 transition-all duration-300 bg-black/90 backdrop-blur-md ${
        scrolled ? 'shadow-2xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" onClick={() => scroll.scrollToTop()} className="flex items-center">
          <img src={logo} alt="Orion Software Solutions" className="h-12 md:h-16 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-lg font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl text-lg"
          >
            Get Quote
          </motion.button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-indigo-400 focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl py-8 space-y-6 px-6 border-t border-white/20"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-xl font-bold text-slate-300 hover:text-indigo-400 py-3 border-b border-white/10"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 rounded-xl text-lg mt-4"
            >
              Get Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;