import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaPython, FaAws, FaDatabase, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSpringboot, SiExpo, SiNextdotjs, SiTensorflow } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'BoozeInDoors',
    shortDesc: 'On-demand alcohol delivery platform',
    category: 'Mobile App',
    tech: ['React Native', 'Spring Boot', 'PayFast'],
    icon: '🍺',
    gradient: 'from-amber-500 to-orange-500',
    color: 'orange',
    image: '📱💳',
    detailed: {
      overview: 'A mobile app for ordering alcohol from local stores with real-time tracking and secure payments.',
      challenge: 'Integrating with multiple liquor stores inventory systems and ensuring age verification compliance.',
      solution: 'Built a React Native app with Expo, Spring Boot microservices, and PayFast payment gateway. Implemented ID verification via AI.',
      results: 'Processed 5,000+ orders in first month, 4.8⭐ rating on app stores.',
      features: ['Real-time order tracking', 'Age verification with AI', 'Secure payments', 'Store inventory sync'],
      link: 'https://example.com/boozeindoors'
    }
  },
  {
    id: 2,
    title: 'AI Customer Support Chatbot',
    shortDesc: 'Intelligent chatbot for e-commerce',
    category: 'AI/ML',
    tech: ['Python', 'TensorFlow', 'React'],
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500',
    color: 'purple',
    image: '🤖💬',
    detailed: {
      overview: 'An AI-powered chatbot that handles customer inquiries, returns, and product recommendations.',
      challenge: 'Understanding natural language and integrating with existing e-commerce platforms.',
      solution: 'Trained a custom NLP model on customer service data, integrated with Shopify via API.',
      results: 'Reduced support tickets by 40%, increased customer satisfaction by 25%.',
      features: ['Natural language understanding', '24/7 automated responses', 'Product recommendations', 'Sentiment analysis'],
      link: 'https://example.com/ai-chatbot'
    }
  },
  {
    id: 3,
    title: 'SecurePay API',
    shortDesc: 'Payment gateway integration',
    category: 'Backend',
    tech: ['Java', 'Spring Boot', 'JWT'],
    icon: '🔒',
    gradient: 'from-emerald-500 to-teal-500',
    color: 'emerald',
    image: '🛒🔐',
    detailed: {
      overview: 'A robust payment processing API with PayFast integration and JWT authentication.',
      challenge: 'Ensuring PCI compliance and handling high transaction volumes.',
      solution: 'Built with Spring Boot, using encryption and tokenization. Load-tested for 10,000 concurrent users.',
      results: 'Processed over R5 million in transactions with 99.99% uptime.',
      features: ['PCI DSS compliant', 'Tokenization', 'Fraud detection', 'Webhook management'],
      link: 'https://example.com/securepay'
    }
  },
  {
    id: 4,
    title: '3D Artist Gallery',
    shortDesc: 'Interactive portfolio for digital artist',
    category: 'UI/UX',
    tech: ['React', 'Three.js', 'Framer Motion'],
    icon: '🎨',
    gradient: 'from-sky-500 to-cyan-500',
    color: 'sky',
    image: '🎨3️⃣',
    detailed: {
      overview: 'An immersive 3D gallery to showcase digital artwork with smooth animations.',
      challenge: 'Creating a performant 3D experience that works on mobile devices.',
      solution: 'Used React Three Fiber and optimized 3D models. Implemented lazy loading.',
      results: 'Featured on Awwwards, increased artist commissions by 150%.',
      features: ['3D model viewer', 'Smooth camera controls', 'Mobile responsive', 'Social sharing'],
      link: 'https://example.com/3d-gallery'
    }
  },
  {
    id: 5,
    title: 'CloudOps Dashboard',
    shortDesc: 'Multi-cloud management platform',
    category: 'Cloud',
    tech: ['Next.js', 'AWS', 'Terraform'],
    icon: '☁️',
    gradient: 'from-rose-500 to-red-500',
    color: 'rose',
    image: '☁️📊',
    detailed: {
      overview: 'A dashboard to monitor and manage cloud resources across AWS, Azure, and GCP.',
      challenge: 'Unifying disparate APIs and providing real-time metrics.',
      solution: 'Next.js frontend with serverless functions, AWS AppSync for real-time data.',
      results: 'Saved client 30% on cloud costs through optimization insights.',
      features: ['Real-time cost monitoring', 'Resource scaling', 'Multi-cloud support', 'Alerts and reporting'],
      link: 'https://example.com/cloudops'
    }
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    shortDesc: 'Digital banking for rural communities',
    category: 'Mobile',
    tech: ['React Native', 'Expo', 'Node.js'],
    icon: '🏦',
    gradient: 'from-indigo-500 to-blue-500',
    color: 'indigo',
    image: '🏦📲',
    detailed: {
      overview: 'A banking app that works offline and syncs later, designed for areas with poor connectivity.',
      challenge: 'Handling offline transactions and secure sync.',
      solution: 'React Native with Expo, SQLite for local storage, end-to-end encryption.',
      results: 'Onboarded 10,000+ users in remote areas, processed 50,000+ transactions.',
      features: ['Offline transactions', 'Biometric login', 'QR code payments', 'Transaction history'],
      link: 'https://example.com/mobile-banking'
    }
  }
];

const getTechIcon = (tech) => {
  switch(tech) {
    case 'React Native':
    case 'React':
      return <FaReact className="text-blue-400" />;
    case 'Spring Boot':
      return <SiSpringboot className="text-green-500" />;
    case 'PayFast':
    case 'Java':
      return <FaDatabase className="text-purple-400" />;
    case 'Python':
      return <FaPython className="text-yellow-500" />;
    case 'TensorFlow':
      return <SiTensorflow className="text-orange-500" />;
    case 'Next.js':
      return <SiNextdotjs className="text-black" />;
    case 'AWS':
      return <FaAws className="text-orange-400" />;
    case 'Expo':
      return <SiExpo className="text-gray-600" />;
    default:
      return <FaDatabase className="text-gray-400" />;
  }
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-100 via-transparent to-transparent opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 border border-indigo-200">✦ Our Work</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Featured</span><br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">Real-world solutions that deliver measurable results for our clients.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative flex items-center justify-center`}>
                <span className="text-6xl">{project.icon}</span>
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.shortDesc}</p>
                <div className="flex items-center gap-3 mb-4">
                  {project.tech.map((t, i) => (
                    <div key={i} className="text-lg" title={t}>{getTechIcon(t)}</div>
                  ))}
                </div>
                <button onClick={() => openModal(project)} className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                  View Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeModal}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', damping: 25 }} className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"><FaTimes size={24} /></button>
              <div className="p-8">
                <div className={`-mx-8 -mt-8 px-8 py-6 bg-gradient-to-r ${selectedProject.gradient} mb-6`}>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{selectedProject.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <p className="text-white/90">{selectedProject.shortDesc}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6"><h4 className="text-xl font-semibold text-slate-800 mb-2">Overview</h4><p className="text-slate-600 leading-relaxed">{selectedProject.detailed.overview}</p></div>
                <div className="mb-6"><h4 className="text-xl font-semibold text-slate-800 mb-2">The Challenge</h4><p className="text-slate-600 leading-relaxed">{selectedProject.detailed.challenge}</p></div>
                <div className="mb-6"><h4 className="text-xl font-semibold text-slate-800 mb-2">Our Solution</h4><p className="text-slate-600 leading-relaxed">{selectedProject.detailed.solution}</p></div>
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedProject.detailed.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedProject.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6"><h4 className="text-xl font-semibold text-slate-800 mb-2">Results</h4><p className="text-slate-600 leading-relaxed">{selectedProject.detailed.results}</p></div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-500">Tech stack:</span>
                    {selectedProject.tech.map((t, i) => (
                      <div key={i} className="text-xl" title={t}>{getTechIcon(t)}</div>
                    ))}
                  </div>
                  <a href={selectedProject.detailed.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                    <FaExternalLinkAlt size={14} />
                    <span className="text-sm">Live project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;