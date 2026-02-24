import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

const ExitPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !show) {
        setShow(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [show]);

  const handleContact = () => {
    setShow(false);
    scroller.scrollTo('contact', { smooth: true, duration: 800, offset: -80 });
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={() => setShow(false)}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
            <FaTimes size={20} />
          </button>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">👋 Wait! Let's build something amazing</h3>
          <p className="text-slate-600 mb-6">Get a free 30-minute consultation to discuss your project and see how we can help.</p>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleContact}
              className="text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg transition"
            >
              Claim your free consultation
            </button>
            <button onClick={() => setShow(false)} className="text-sm text-slate-500 hover:text-slate-700">
              No thanks, I'll explore more
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExitPopup;