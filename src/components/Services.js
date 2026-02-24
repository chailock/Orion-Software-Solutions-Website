import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FaCode, FaRobot, FaMobileAlt, FaServer, FaCloud, FaPaintBrush, FaTimes, FaCheckCircle } from 'react-icons/fa';

const services = [
  { 
    title: 'Custom Software Development', 
    shortDesc: 'Tailored full-stack solutions with React, TypeScript, and Java/Spring Boot for scalable apps.',
    icon: FaCode,
    gradient: 'from-indigo-500 to-blue-500',
    color: 'indigo',
    detailed: {
      overview: 'We build enterprise-grade web applications from the ground up, tailored to your unique business processes.',
      highlights: [
        'Modern React 19 with TypeScript',
        'Spring Boot 3.3+ microservices',
        'CI/CD pipelines with GitHub Actions',
        'Database design (PostgreSQL, MongoDB)',
        'Real-time features with WebSockets',
        'Comprehensive testing (Jest, Cypress)'
      ],
      useCase: 'A logistics company increased operational efficiency by 40% with our custom dashboard.'
    }
  },
  { 
    title: 'AI & Machine Learning', 
    shortDesc: 'Intelligent features like predictive analytics, chatbots, and automation integrated seamlessly.',
    icon: FaRobot,
    gradient: 'from-purple-500 to-pink-500',
    color: 'purple',
    detailed: {
      overview: 'We integrate AI into your existing systems to automate decisions, predict trends, and enhance user experiences.',
      highlights: [
        'Custom chatbots with NLP (OpenAI, Rasa)',
        'Predictive analytics (scikit‑learn, TensorFlow)',
        'Image recognition for quality control',
        'Personalized recommendation engines',
        'Automated document processing',
        'Model deployment on AWS SageMaker'
      ],
      useCase: 'An e‑commerce client saw a 25% increase in sales with our AI‑powered product recommendations.'
    }
  },
  { 
    title: 'Mobile App Development', 
    shortDesc: 'React Native apps with Expo Router for iOS/Android, including e-commerce and payments.',
    icon: FaMobileAlt,
    gradient: 'from-emerald-500 to-teal-500',
    color: 'emerald',
    detailed: {
      overview: 'We create cross‑platform mobile apps that deliver native performance and feel.',
      highlights: [
        'React Native + Expo for rapid development',
        'Offline support and real-time sync',
        'Payment integration (PayFast, Stripe)',
        'Push notifications (Firebase)',
        'App store deployment assistance',
        'Performance optimization'
      ],
      useCase: 'Our food delivery app processed 10,000+ orders in its first month.'
    }
  },
  { 
    title: 'Backend & API Services', 
    shortDesc: 'Robust Spring Boot APIs, secure payment gateways (PayFast), and webhook handling.',
    icon: FaServer,
    gradient: 'from-orange-500 to-amber-500',
    color: 'orange',
    detailed: {
      overview: 'We design and build secure, scalable backends that power your applications.',
      highlights: [
        'RESTful & GraphQL APIs',
        'JWT authentication & OAuth2',
        'PayFast certified payment gateway',
        'Webhook management',
        'Rate limiting and DDOS protection',
        'API documentation (Swagger/OpenAPI)'
      ],
      useCase: 'A fintech startup processes $1M+ monthly transactions through our secure APIs.'
    }
  },
  { 
    title: 'Cloud Deployment', 
    shortDesc: 'Netlify, AWS hosting with CI/CD, optimized for performance and scalability.',
    icon: FaCloud,
    gradient: 'from-rose-500 to-red-500',
    color: 'rose',
    detailed: {
      overview: 'We ensure your applications are reliably hosted and can scale effortlessly.',
      highlights: [
        'AWS (EC2, S3, Lambda, RDS)',
        'Netlify & Vercel for frontend',
        'Docker containerization',
        'Kubernetes orchestration',
        'Auto-scaling and load balancing',
        'Monitoring (CloudWatch, Sentry)'
      ],
      useCase: 'We migrated a legacy system to AWS, reducing hosting costs by 30% and improving uptime to 99.9%.'
    }
  },
  { 
    title: 'UI/UX & Optimization', 
    shortDesc: 'Responsive designs with bright, modern themes and 3D galleries for artist sites.',
    icon: FaPaintBrush,
    gradient: 'from-sky-500 to-cyan-500',
    color: 'sky',
    detailed: {
      overview: 'We craft beautiful, intuitive interfaces that users love and that perform flawlessly.',
      highlights: [
        'User research and wireframing',
        'High‑fidelity prototypes (Figma)',
        'Responsive design for all devices',
        '3D galleries with React Three Fiber',
        'Accessibility (WCAG 2.1)',
        'Performance optimization (Lighthouse 90+)'
      ],
      useCase: 'An artist’s portfolio site won an Awwward for its immersive 3D experience.'
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const scrollToContact = () => {
    scroller.scrollTo('contact', { duration: 800, smooth: true, offset: -80 });
  };

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 border border-indigo-200">✦ What We Do</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Custom Software &</span><br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business impact.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                  <div className="absolute inset-0 bg-white rounded-2xl" />
                </div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.shortDesc}</p>
                  <button onClick={() => openModal(service)} className="flex items-center text-sm font-medium focus:outline-none">
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>Learn more</span>
                    <svg className="w-4 h-4 ml-2 text-indigo-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-center mt-20">
          <p className="text-slate-600 text-lg mb-4">Need a custom solution?</p>
          <button onClick={scrollToContact} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-shadow cursor-pointer">
            Let's talk about your project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {modalOpen && selectedService && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeModal}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', damping: 25 }} className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"><FaTimes size={24} /></button>
              <div className="p-8">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center`}>
                  <selectedService.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">{selectedService.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{selectedService.detailed.overview}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Key capabilities:</h4>
                  <ul className="space-y-2">
                    {selectedService.detailed.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className={`text-${selectedService.color}-500 mt-1 flex-shrink-0`} />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Client success story:</h4>
                  <p className="text-slate-600 italic">"{selectedService.detailed.useCase}"</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={() => { closeModal(); scrollToContact(); }} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-shadow">
                    Discuss this service
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;