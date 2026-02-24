import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

const ExitPopup = () => {
  const [show, setShow] = useState(false);
  const INTERVAL_MS = 60_000; // 60 seconds

  useEffect(() => {
    // Don't show immediately → first popup after 60s
    const timer = setTimeout(() => {
      setShow(true);
    }, INTERVAL_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    // When popup is closed → schedule the next one
    const nextTimer = setTimeout(() => {
      setShow(true);
    }, INTERVAL_MS);

    return () => clearTimeout(nextTimer);
  }, [show]);

  // Optional: close when clicking outside / backdrop
  const handleBackdropClick = () => {
    setShow(false);
  };

  const handleContact = () => {
    setShow(false);
    scroller.scrollTo('contact', {
      smooth: true,
      duration: 800,
      offset: -80,
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85, y: 40 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close popup"
            >
              <FaTimes size={26} />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 mb-5">
              👋 Hey — still here? Let's talk!
            </h3>

            <p className="text-slate-600 mb-7 leading-relaxed">
              You've been exploring for a while. Book a <strong>free 30-minute consultation</strong> — no pressure, just ideas.
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleContact}
                className="px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg hover:brightness-105 transition-all text-lg"
              >
                Get my free consultation
              </button>

              <button
                onClick={() => setShow(false)}
                className="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-2 self-center mt-2"
              >
                No thanks, maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitPopup;