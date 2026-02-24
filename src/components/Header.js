// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { animateScroll as scroll, scroller } from 'react-scroll';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../images/image-8.jpg';

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (section) => {
//     if (location.pathname !== '/') {
//       window.location.href = `/#${section}`;
//     } else {
//       scroller.scrollTo(section, {
//         duration: 800,
//         smooth: 'easeInOutQuart',
//         offset: -80,
//       });
//     }
//     setOpen(false);
//   };

//   const navItems = ['Home', 'About', 'Services', 'CaseStudies', 'Portfolio', 'Contact'];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 w-full z-50 py-4 px-6 md:px-12 transition-all duration-300 bg-black/90 backdrop-blur-md ${
//         scrolled ? 'shadow-2xl' : ''
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <Link to="/" onClick={() => scroll.scrollToTop()} className="flex items-center">
//           <img src={logo} alt="Orion Software Solutions" className="h-12 md:h-16 w-auto object-contain" />
//         </Link>
//         <div className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <button
//               key={item}
//               onClick={() => scrollToSection(item.toLowerCase())}
//               className="text-lg font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 relative group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
//             </button>
//           ))}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={() => scrollToSection('contact')}
//             className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl text-lg"
//           >
//             Get Quote
//           </motion.button>
//         </div>
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-3xl text-indigo-400 focus:outline-none"
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-black/95 backdrop-blur-xl py-8 space-y-6 px-6 border-t border-white/20"
//           >
//             {navItems.map((item, i) => (
//               <motion.button
//                 key={item}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="block w-full text-left text-xl font-bold text-slate-300 hover:text-indigo-400 py-3 border-b border-white/10"
//               >
//                 {item}
//               </motion.button>
//             ))}
//             <motion.button
//               whileTap={{ scale: 0.98 }}
//               onClick={() => scrollToSection('contact')}
//               className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold py-4 rounded-xl text-lg mt-4"
//             >
//               Get Quote
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

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
      className={`fixed top-0 w-full z-50 py-3 px-6 md:px-12 transition-all duration-300 bg-black/90 backdrop-blur-md ${
        scrolled ? 'shadow-2xl shadow-indigo-950/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          onClick={() => scroll.scrollToTop()}
          className="flex items-center relative group focus:outline-none"
        >
          <div className="relative flex items-center gap-3 md:gap-4">
            {/* Big shiny metallic orbital O */}
            <div className="relative inline-block">
              <span
                className="text-6xl sm:text-7xl md:text-8xl font-black tracking-[-0.06em]"
                style={{
                  fontFamily: "'Montserrat', 'Futura', system-ui, sans-serif",
                  background: 'linear-gradient(135deg, #e0e0e0, #ffffff, #c0c0c0, #f8f8f8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter:
                    'drop-shadow(0 0 10px rgba(220,220,255,0.95)) drop-shadow(0 0 20px rgba(255,255,255,0.75)) brightness(1.1)',
                }}
              >
                O
              </span>

              {/* Orbit ring glow */}
              <div className="absolute inset-[-12%] flex items-center justify-center pointer-events-none">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse-slow opacity-85 blur-sm" />
              </div>

              {/* Shooting comet streak */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[60px] border-l-transparent border-t-[9px] border-t-white/95 border-b-[9px] border-b-transparent blur-md opacity-95 transform rotate-[-38deg] animate-shoot"
              />

              {/* Twinkling stars - brighter for black bg */}
              <div className="absolute top-[18%] left-[22%] w-4 h-4 bg-white rounded-full shadow-[0_0_14px_5px_rgba(255,255,255,0.95)] animate-twinkle opacity-100" />
              <div className="absolute bottom-[25%] right-[18%] w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_12px_4px_rgba(240,245,255,0.9)] animate-twinkle delay-700 opacity-95" />
              <div className="absolute -top-4 -right-5 w-5 h-5 bg-white rounded-full shadow-[0_0_16px_7px_rgba(255,250,220,0.85)] animate-twinkle delay-1200" />
            </div>

            {/* Text part */}
            <div className="flex flex-col leading-tight">
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-200 drop-shadow-[0_1px_6px_rgba(255,255,255,0.6)]"
              >
                rion
              </span>
              <span className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.12em] text-gray-300/95 uppercase mt-[-2px] drop-shadow-sm">
                Software Solutions
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-lg font-medium text-slate-200 hover:text-indigo-300 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl text-lg transition-shadow"
          >
            Get Quote
          </motion.button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-indigo-300 focus:outline-none"
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
                className="block w-full text-left text-xl font-bold text-slate-200 hover:text-indigo-300 py-3 border-b border-white/10"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold py-4 rounded-xl text-lg mt-4"
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