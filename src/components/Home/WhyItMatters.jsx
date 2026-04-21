import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/InfoSection.css';

const WhyItMatters = () => {
  return (
    <section className="info-section bg-navy-light">
      <div className="info-container">
        <motion.div 
          className="info-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mono text-green">{"// STRATEGIC IMPACT"}</span>
          <h2>Why It Matters</h2>
          <p>
            Traditional maritime operations are costly, limited in coverage, and dependent on 
            human presence. Seaguard introduces a smarter, more efficient approach based on 
            continuous monitoring and data-driven decision-making, ensuring national maritime 
            security and operational excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;
