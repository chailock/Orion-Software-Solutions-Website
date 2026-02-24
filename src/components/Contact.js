import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your Formspree endpoint
    fetch('https://formspree.io/f/your-endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(() => alert('Thanks! We\'ll respond soon.'))
      .catch(() => alert('Oops! Something went wrong.'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl max-w-4xl w-full border border-slate-200 shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Let's Build Together
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 bg-white/80 border border-slate-200 rounded-xl focus:border-indigo-400 outline-none text-slate-800 placeholder-slate-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 bg-white/80 border border-slate-200 rounded-xl focus:border-indigo-400 outline-none text-slate-800 placeholder-slate-400"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 bg-white/80 border border-slate-200 rounded-xl focus:border-indigo-400 outline-none text-slate-800 placeholder-slate-400 resize-none"
              required
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-xl font-bold text-lg hover:from-purple-600 transition-shadow shadow-xl text-white"
            >
              Send Message
            </motion.button>
          </form>
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Get in Touch</h3>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-pink-500" />
                  <span>Volksrust, Mpumalanga, South Africa</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-indigo-500" />
                  <a href="mailto:info@orionsoftware.co.za" className="hover:text-indigo-600">info@orionsoftware.co.za</a>
                </p>
                <p className="flex items-center gap-3">
                  <FaPhone className="text-green-500" />
                  <span>+27 (0) 12 345 6789</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://github.com/orion-software" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-400 hover:text-indigo-600 transition-colors"><FaGithub /></a>
                <a href="https://linkedin.com/company/orion-software" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-400 hover:text-indigo-600 transition-colors"><FaLinkedin /></a>
                <a href="https://twitter.com/orion_software" target="_blank" rel="noopener noreferrer" className="text-3xl text-slate-400 hover:text-indigo-600 transition-colors"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;