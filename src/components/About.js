import React from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FaRocket, FaShieldAlt, FaGlobeAfrica, FaCode, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  const scrollToContact = () => {
    scroller.scrollTo('contact', { duration: 800, smooth: true, offset: -80 });
  };

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: FaRocket, color: 'from-amber-500 to-orange-500' },
    { value: '98%', label: 'Client Satisfaction', icon: FaUsers, color: 'from-indigo-500 to-purple-500' },
    { value: '24h', label: 'Response Time', icon: FaChartLine, color: 'from-pink-500 to-rose-500' },
    { value: '100%', label: 'Uptime Guarantee', icon: FaShieldAlt, color: 'from-emerald-500 to-teal-500' },
  ];

  const features = [
    {
      icon: FaCode,
      title: 'Enterprise Architecture',
      description: 'Scalable microservices, cloud-native applications, and CI/CD pipelines for Fortune 500 companies.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Security First',
      description: 'SOC 2 compliant, JWT authentication, payment gateway security (PayFast certified partner).',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaGlobeAfrica,
      title: 'Local Expertise, Global Reach',
      description: 'Mpumalanga-based team serving clients across Africa, Europe, and North America. 24/7 support.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: FaRocket,
      title: 'Future-Ready Tech',
      description: 'React 19, Spring Boot 3.3+, AI/ML integration, React Native with Expo Router. Always current.',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 border border-indigo-200">✦ About Orion</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Enterprise Software</span><br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2025, Orion Software Solutions delivers world-class custom software, AI solutions, and digital transformation services from Volksrust, South Africa. 50+ successful projects delivered.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} whileHover={{ y: -5 }} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                <Icon className={`text-4xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
              >
                <Icon className={`text-4xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Ready to build something extraordinary?</h3>
              <p className="text-slate-600">Let's discuss your next project and bring your vision to life.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/25 transition-shadow whitespace-nowrap overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 rounded-xl animate-ping opacity-75 group-hover:opacity-100" />
              <span className="relative z-10">Partner With Orion →</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;