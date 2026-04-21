import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/AboutUs.css';

const AboutUs = () => {
  const coreValues = ["Innovation", "Efficiency", "Sustainability", "Strategic Impact"];

  return (
    <section className="about-us">
      <div className="about-container">
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono text-green">// OUR IDENTITY</span>
          <h2>About Seaguard</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-main-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Who We Are</h3>
            <p>
              Seaguard Marine Systems is a maritime technology company focused on building 
              scalable, intelligent, and cost-efficient unmanned surface systems. Our team 
              combines expertise in maritime engineering, artificial intelligence, and 
              strategic operations.
            </p>
          </motion.div>

          <div className="about-secondary-grid">
            <motion.div 
              className="about-sub-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-icon text-green">👁</div>
              <h4>Vision</h4>
              <p>To transform how nations understand, monitor, and manage their maritime environments.</p>
            </motion.div>

            <motion.div 
              className="about-sub-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="card-icon text-green">🎯</div>
              <h4>Mission</h4>
              <p>Delivering intelligent maritime systems that enhance security, efficiency, and sustainability.</p>
            </motion.div>
          </div>
        </div>

        <div className="core-values-section">
          <motion.h4 
            className="mono text-green"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            // CORE VALUES
          </motion.h4>
          <div className="values-list">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                className="value-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="value-number">0{index + 1}</span>
                <span className="value-text">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
