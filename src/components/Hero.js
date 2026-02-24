import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import TrustBadge from './TrustBadge';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    scroller.scrollTo('contact', { smooth: true, duration: 800, offset: -80 });
  };

  const scrollToPortfolio = () => {
    scroller.scrollTo('portfolio', { smooth: true, duration: 800, offset: -80 });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50% at 50% 0%,#000_70%,transparent_110%)]" />
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ x: mousePosition.x * -0.02, y: mousePosition.y * -0.02 }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
            >
              ✦ Enterprise‑grade software
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-indigo-200 via-white to-indigo-200 bg-clip-text text-transparent">
                Build software
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                that means business
              </span>
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-lg leading-relaxed">
              From AI‑powered platforms to scalable mobile apps – we turn complex ideas into high‑performance reality.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-shadow"
              >
                Start a project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPortfolio}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View portfolio
              </motion.button>
            </div>
            <div className="mt-6">
              <TrustBadge />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex"><span className="text-slate-500 mr-4">1</span><span className="text-purple-400">function</span><span className="text-blue-400 ml-2">OrionApp</span><span className="text-slate-300">()</span><span className="text-slate-300">{' {'}</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">2</span><span className="text-slate-300 ml-4">const</span><span className="text-yellow-300 ml-2">[data, setData]</span><span className="text-slate-300 ml-2">=</span><span className="text-purple-400 ml-2">useState</span><span className="text-slate-300">(</span><span className="text-green-400">null</span><span className="text-slate-300">);</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">3</span><span className="text-slate-300 ml-4">return</span><span className="text-slate-300 ml-2">{'( '}</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">4</span><span className="text-blue-400 ml-8">&lt;div&gt;</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">5</span><span className="text-slate-300 ml-12">{'🚀'}</span><span className="text-orange-300 ml-2">Launch successful</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">6</span><span className="text-blue-400 ml-8">&lt;/div&gt;</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">7</span><span className="text-slate-300 ml-4">{');'}</span></div>
                <div className="flex"><span className="text-slate-500 mr-4">8</span><span className="text-slate-300">{'}'}</span></div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-slate-300">System ready</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">AI inference: 0.2ms</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-indigo-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;