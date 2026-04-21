import React from 'react';
import { motion } from 'framer-motion';
import BoatModel from '../components/Home/BoatModel';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Redefining Maritime Intelligence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building the next generation of autonomous maritime systems.
        </motion.p>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-left">
          <BoatModel />
        </div>
        <div className="highlights-right">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Key Highlights
          </motion.h2>
          <ul className="highlights-list">
            <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>70–90% operational cost reduction</motion.li>
            <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>24/7 continuous monitoring</motion.li>
            <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>Scalable distributed system</motion.li>
            <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>AI-powered operations</motion.li>
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="info-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>
        <motion.div 
          className="info-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p>Seaguard Marine Systems develops intelligent unmanned surface systems designed to transform how maritime environments are monitored, analyzed, and managed.</p>
        </motion.div>
      </section>

      {/* Why It Matters */}
      <section className="info-section" style={{ backgroundColor: '#001226' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why It Matters
        </motion.h2>
        <motion.div 
          className="info-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p>Traditional maritime operations are costly, limited in coverage, and dependent on human presence. Seaguard introduces a smarter, more efficient approach based on continuous monitoring and data-driven decision-making.</p>
        </motion.div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <h2 style={{ textAlign: 'center', color: '#01FF70', marginBottom: '3rem', fontSize: '2.5rem' }}>About Us</h2>
        <div className="about-grid">
          <motion.div className="about-card" whileHover={{ scale: 1.05 }}>
            <h3>Who We Are</h3>
            <p>Seaguard Marine Systems is a maritime technology company focused on building scalable, intelligent, and cost-efficient unmanned surface systems.</p>
          </motion.div>
          <motion.div className="about-card" whileHover={{ scale: 1.05 }}>
            <h3>Vision</h3>
            <p>To transform how nations understand, monitor, and manage their maritime environments.</p>
          </motion.div>
          <motion.div className="about-card" whileHover={{ scale: 1.05 }}>
            <h3>Mission</h3>
            <p>Delivering intelligent maritime systems that enhance security, efficiency, and sustainability.</p>
          </motion.div>
          <motion.div className="about-card" whileHover={{ scale: 1.05 }}>
            <h3>Core Values</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>• Innovation</li>
              <li>• Efficiency</li>
              <li>• Sustainability</li>
              <li>• Strategic Impact</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
