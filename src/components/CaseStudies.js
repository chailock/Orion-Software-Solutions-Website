import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const caseStudies = [
  {
    id: 1,
    client: 'BoozeInDoors',
    industry: 'Retail Tech',
    title: 'Real-time inventory & delivery platform',
    challenge: 'Needed to sync inventory across 50+ liquor stores in real-time while handling high order volumes.',
    solution: 'Built a React Native app with Expo, Spring Boot microservices, and WebSocket for live updates. Integrated PayFast for payments and AI age verification.',
    result: '40% increase in order volume, 99.9% uptime, and 4.8⭐ app rating.',
    metric: '+40% Revenue',
    gradient: 'from-amber-500 to-orange-500',
    image: '🍺'
  },
  {
    id: 2,
    client: 'FinTech Startup',
    industry: 'Financial Services',
    title: 'Secure payment gateway API',
    challenge: 'Required PCI-compliant API handling millions in transactions with fraud detection.',
    solution: 'Spring Boot API with JWT, tokenization, and integration with PayFast. Implemented rate limiting and real-time fraud checks.',
    result: 'Processed R5M+ in first month with zero security incidents.',
    metric: 'R5M+ Processed',
    gradient: 'from-emerald-500 to-teal-500',
    image: '💳'
  },
  {
    id: 3,
    client: 'Digital Artist',
    industry: 'Creative',
    title: 'Immersive 3D portfolio',
    challenge: 'Wanted a unique online gallery to showcase 3D artwork with smooth mobile performance.',
    solution: 'Used React Three Fiber and optimized 3D models. Implemented lazy loading and gesture controls.',
    result: 'Featured on Awwwards, increased commissions by 150%.',
    metric: '150% More Leads',
    gradient: 'from-purple-500 to-pink-500',
    image: '🎨'
  }
];

const CaseStudies = () => {
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (study) => {
    setSelected(study);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelected(null), 300);
  };

  return (
    <section id="casestudies" className="relative py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 border border-indigo-200">✦ Client Success Stories</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Real results for</span><br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">real businesses</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className={`h-40 bg-gradient-to-r ${study.gradient} p-6 flex items-center justify-between`}>
                <span className="text-6xl">{study.image}</span>
                <span className="text-white font-bold text-3xl">{study.metric}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">{study.industry}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">{study.client}</h3>
                <p className="text-slate-600 text-sm mb-4">{study.title}</p>
                <button onClick={() => openModal(study)} className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
                  Read case study
                  <FaArrowRight className="ml-2 w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeModal}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><FaTimes size={24} /></button>
              <div className={`h-32 bg-gradient-to-r ${selected.gradient} px-8 py-6`}>
                <span className="text-5xl">{selected.image}</span>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{selected.client}</h3>
                <p className="text-indigo-600 mb-4">{selected.industry}</p>
                <div className="space-y-4">
                  <div><h4 className="font-semibold text-slate-800">Challenge</h4><p className="text-slate-600">{selected.challenge}</p></div>
                  <div><h4 className="font-semibold text-slate-800">Solution</h4><p className="text-slate-600">{selected.solution}</p></div>
                  <div><h4 className="font-semibold text-slate-800">Result</h4><p className="text-slate-600">{selected.result}</p></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;