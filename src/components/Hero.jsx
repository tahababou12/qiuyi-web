import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Qiuyi Feng
        </h1>
        <h2 className="text-2xl md:text-3xl text-[var(--secondary-color)] mb-6">
          Data Scientist & ML Engineer
        </h2>
        <p className="text-[var(--text-color)] max-w-2xl mx-auto mb-8">
          MS in Statistical Practice candidate at Boston University, 
          specializing in machine learning, data science, and AI development.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:qiuyif@bu.edu" className="bg-transparent border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] px-6 py-3 rounded hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
