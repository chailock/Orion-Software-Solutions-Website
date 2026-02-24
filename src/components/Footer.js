import React, { useState } from 'react';
import { scroller, animateScroll } from 'react-scroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ActivityTicker from './ActivityTicker';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Replace with your newsletter service (e.g., Mailchimp)
    console.log('Subscribed:', email);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, { duration: 800, smooth: true, offset: -80 });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-center">
          <ActivityTicker />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Orion</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Enterprise software and AI solutions crafted in South Africa, delivered worldwide.</p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/orion-software" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors"><FaGithub size={20} /></a>
              <a href="https://linkedin.com/company/orion-software" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors"><FaLinkedin size={20} /></a>
              <a href="https://twitter.com/orion_software" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'CaseStudies', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button onClick={() => scrollToSection(item.toLowerCase())} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Custom Software</li>
              <li>AI & Machine Learning</li>
              <li>Mobile Development</li>
              <li>Cloud & DevOps</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <FaMapMarkerAlt className="mt-1 text-pink-400 flex-shrink-0" />
                <span>Volksrust, Mpumalanga<br />South Africa</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <FaEnvelope className="text-indigo-400 flex-shrink-0" />
                <a href="mailto:info@orionsoftware.co.za" className="hover:text-indigo-400 transition-colors">info@orionsoftware.co.za</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <FaPhone className="text-green-400 flex-shrink-0" />
                <span>+27 (0) 73 513 5428</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tech Insights</h4>
            <p className="text-slate-400 text-sm mb-3">Get monthly updates on AI, software trends, and case studies.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition"
              >
                Subscribe
              </button>
            </form>
            {subscribed && <p className="text-green-400 text-xs mt-2">Thanks! Check your inbox.</p>}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Orion Software Solutions. All rights reserved.</p>
          
          <button onClick={() => animateScroll.scrollToTop()} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;