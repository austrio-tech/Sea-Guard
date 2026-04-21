import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target } from 'lucide-react';
import '../styles/Solution.css';

const Solution = () => {
  return (
    <div className="solution-container">
      <section className="solution-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Solution
        </motion.h1>
        <p className="info-content">A distributed autonomous maritime system powered by unmanned surface vehicles (USVs).</p>
      </section>

      <section className="problem-solution-grid">
        <motion.div 
          className="card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>The Problem</h2>
          <ul>
            <li>High operational costs</li>
            <li>Limited monitoring coverage</li>
            <li>Slow response time</li>
          </ul>
        </motion.div>
        <motion.div 
          className="card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2>The Solution</h2>
          <ul>
            <li>Coastal control stations</li>
            <li>Multiple deployed USVs</li>
            <li>Centralized data analysis</li>
          </ul>
        </motion.div>
      </section>

      <section className="tech-section">
        <h2 style={{ textAlign: 'center', color: '#01FF70', fontSize: '2.5rem' }}>Technology & Capabilities</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <Zap color="#01FF70" size={40} />
            <h3>SEAGUARD System</h3>
            <p>Electric USVs with jet propulsion and AI navigation.</p>
          </div>
          <div className="tech-item">
            <Shield color="#01FF70" size={40} />
            <h3>Capabilities</h3>
            <p>Surveillance, Inspection, Environmental monitoring, SAR.</p>
          </div>
          <div className="tech-item">
            <Target color="#01FF70" size={40} />
            <h3>Market Opportunity</h3>
            <p>Defense, Oil & Gas, Fisheries, Ports, Environment.</p>
          </div>
        </div>
      </section>

      <section className="market-section">
        <h2 style={{ textAlign: 'center', color: '#01FF70', marginBottom: '3rem', fontSize: '2.5rem' }}>Competitive Advantage</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Cost Efficiency</h3>
            <p>Significantly lower cost compared to global systems.</p>
          </div>
          <div className="about-card">
            <h3>Flexibility</h3>
            <p>High flexibility and customization for multiple industries.</p>
          </div>
          <div className="about-card">
            <h3>Scalability</h3>
            <p>Scalable architecture adaptable to national integration.</p>
          </div>
        </div>
      </section>

      <section className="roadmap-section">
        <h2 style={{ textAlign: 'center', color: '#01FF70', marginBottom: '4rem', fontSize: '2.5rem' }}>Future Roadmap</h2>
        <div className="roadmap-grid">
          <div className="roadmap-step">
            <h3>Phase 1</h3>
            <p>Pilot deployment</p>
          </div>
          <div className="roadmap-step">
            <h3>Phase 2</h3>
            <p>Regional expansion</p>
          </div>
          <div className="roadmap-step">
            <h3>Phase 3</h3>
            <p>National system integration</p>
          </div>
          <div className="roadmap-step">
            <h3>Phase 4</h3>
            <p>Global scaling</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
