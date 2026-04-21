import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/ProblemSolution.css';

const ProblemSolution = () => {
  const problems = ["High operational costs", "Limited monitoring coverage", "Slow response time"];
  const solutions = ["Coastal control stations", "Multiple deployed USVs", "Centralized data analysis"];

  return (
    <section className="problem-solution">
      <div className="ps-container">
        <div className="ps-grid">
          <motion.div 
            className="ps-card problem"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="ps-header">
              <span className="mono">// ANALYSIS</span>
              <h3>The Problem</h3>
            </div>
            <ul className="ps-list">
              {problems.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="ps-card solution"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="ps-header">
              <span className="mono text-green">// INNOVATION</span>
              <h3 className="text-green">The Solution</h3>
            </div>
            <ul className="ps-list">
              {solutions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="how-it-works"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4>How It Works</h4>
          <div className="process-flow">
            <div className="step">
              <span className="step-num">01</span>
              <p>Deployment of USV Fleets</p>
            </div>
            <div className="connector"></div>
            <div className="step">
              <span className="step-num">02</span>
              <p>Real-time Data Capture</p>
            </div>
            <div className="connector"></div>
            <div className="step">
              <span className="step-num">03</span>
              <p>AI Analysis & Command</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
