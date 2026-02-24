import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';
import { FaArrowRight, FaTimes, FaUser, FaClock, FaTag } from 'react-icons/fa';

const posts = [
  {
    id: 1,
    title: 'How we built BoozeInDoors: Real‑time inventory with WebSockets',
    excerpt: 'Learn how we helped a retail chain sync inventory across 50+ stores in milliseconds.',
    date: 'Feb 15, 2026',
    author: 'Sphelele Ngobese',
    readTime: '5 min read',
    tags: ['React Native', 'Spring Boot', 'WebSockets'],
    content: `
      <p>When BoozeInDoors came to us, they were struggling with inventory discrepancies across their 50+ liquor stores. Customers would order items that were out of stock, leading to frustration and lost sales.</p>
      <p>We built a real‑time inventory system using React Native for the store associates' app and Spring Boot with WebSockets for the backend. Every time a sale is made, inventory updates instantly across all locations.</p>
      <p>Key challenges we overcame:</p>
      <ul>
        <li>Handling high concurrency during peak hours (e.g., Friday nights).</li>
        <li>Ensuring data consistency with eventual consistency patterns.</li>
        <li>Building a fallback offline mode for stores with poor connectivity.</li>
      </ul>
      <p>The result: 40% increase in order volume, 99.9% uptime, and a 4.8⭐ rating on app stores.</p>
    `,
  },
  {
    id: 2,
    title: 'Top 5 AI trends for 2026 every business should know',
    excerpt: 'From multimodal models to edge AI – what’s coming and how to prepare.',
    date: 'Feb 5, 2026',
    author: 'Thabo Mokoena',
    readTime: '7 min read',
    tags: ['AI', 'Machine Learning', 'Trends'],
    content: `
      <p>Artificial intelligence is moving faster than ever. Here are the five trends we believe will define 2026:</p>
      <ol>
        <li><strong>Multimodal AI:</strong> Models that understand text, images, and audio together (think GPT‑5 with vision).</li>
        <li><strong>Edge AI:</strong> Running models on devices (phones, cameras) for low‑latency, private inference.</li>
        <li><strong>AI‑generated code:</strong> Tools like Copilot now write 40% of code in some projects.</li>
        <li><strong>Explainable AI:</strong> Regulators demand transparency, so we're building interpretable models.</li>
        <li><strong>AI in cybersecurity:</strong> Real‑time threat detection using behavioral analysis.</li>
      </ol>
      <p>Businesses that adopt these early will have a significant competitive advantage.</p>
    `,
  },
  {
    id: 3,
    title: 'Securing payment gateways: A Spring Boot guide with PayFast',
    excerpt: 'Step‑by‑step on JWT, tokenization, and PCI compliance.',
    date: 'Jan 22, 2026',
    author: 'Johan van der Merwe',
    readTime: '6 min read',
    tags: ['Spring Boot', 'PayFast', 'Security'],
    content: `
      <p>Integrating a payment gateway is one of the most critical parts of any e‑commerce platform. Here's how we do it securely with PayFast and Spring Boot.</p>
      <p><strong>1. Use JWT for authentication:</strong> Never send raw credentials. Generate short‑lived tokens.</p>
      <p><strong>2. Tokenize sensitive data:</strong> PayFast provides tokens for cards; store only the token.</p>
      <p><strong>3. Implement idempotency keys:</strong> Prevent duplicate charges by requiring a unique key per request.</p>
      <p><strong>4. Validate webhooks:</strong> Always verify that incoming webhooks are from PayFast using signatures.</p>
      <p><strong>5. Keep PCI compliance simple:</strong> Never store card numbers – let PayFast handle that.</p>
      <p>Following these practices, we've processed over R5 million with zero security incidents.</p>
    `,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  return (
    <section id="blog" className="relative py-32 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 border border-indigo-200">
            ✦ Insights
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-800">Latest from our</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              blog
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-slate-100 group cursor-pointer"
              onClick={() => openModal(post)}
            >
              <p className="text-sm text-indigo-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <FaUser className="inline" />
                  <span>{post.author}</span>
                  <FaClock className="ml-2 inline" />
                  <span>{post.readTime}</span>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                  Read more <FaArrowRight className="ml-2 w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <FaTimes size={24} />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-indigo-500" />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTag className="text-pink-500" />
                      <span>{selectedPost.tags.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Featured image placeholder (optional) */}
                <div className="w-full h-48 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl mb-6 flex items-center justify-center text-indigo-300 text-6xl">
                  📄
                </div>

                {/* Content */}
                <div
                  className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-slate-600 mb-4">Enjoyed this article? Let's discuss your project.</p>
                  <button
                    onClick={() => {
                      closeModal();
                      scroller.scrollTo('contact', { smooth: true, duration: 800, offset: -80 });
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/25 transition"
                  >
                    Get in touch
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

export default Blog;