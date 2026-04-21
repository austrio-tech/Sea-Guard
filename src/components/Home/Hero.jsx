import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-tagline mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          // OPERATIONAL EXCELLENCE
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Redefining <span className="text-glow">Maritime</span> Intelligence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Building the next generation of autonomous maritime systems.
        </motion.p>
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-primary">Explore Solution</button>
          <button className="btn-secondary">View Systems</button>
        </motion.div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse"></div>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;
