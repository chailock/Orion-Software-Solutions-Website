import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How quickly can you start development?",
    answer: "We can typically begin within 1-2 weeks after an initial consultation and scope definition."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We serve clients across Africa, Europe, and North America. All meetings are held via video call."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core stack includes React, TypeScript, Spring Boot, React Native, and AWS. We're always adopting new tech."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer fixed-price quotes for well-defined projects and hourly/dedicated team models for ongoing work."
  },
  {
    question: "Is there ongoing support after launch?",
    answer: "Yes, we provide maintenance and support packages to ensure your software stays secure and up-to-date."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Generate FAQ schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 border border-indigo-200">✦ Got Questions?</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Frequently Asked</span><br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
          </h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800">{faq.question}</span>
                <FaChevronDown className={`text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;