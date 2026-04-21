import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/InfoSection.css';

const WhatWeDo = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <motion.div 
          className="info-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono text-green">// CORE MISSION</span>
          <h2>What We Do</h2>
          <p>
            Seaguard Marine Systems develops intelligent unmanned surface systems designed to 
            transform how maritime environments are monitored, analyzed, and managed. 
            We bridge the gap between traditional operations and future-ready autonomous technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
