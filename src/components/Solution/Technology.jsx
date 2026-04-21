import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Activity } from 'lucide-react';
import '../../styles/Technology.css';

const Technology = () => {
  const techSpecs = [
    { icon: <Zap />, title: "Electric USV", desc: "Sustainable electric propulsion for long-range missions." },
    { icon: <Activity />, title: "Jet Propulsion", desc: "High-efficiency jet system for superior maneuverability." },
    { icon: <Cpu />, title: "AI Navigation", desc: "Advanced obstacle avoidance and path planning." },
    { icon: <Shield />, title: "Real-time Data", desc: "Encrypted, low-latency transmission for instant command." }
  ];

  const capabilities = ["Surveillance", "Inspection", "Environmental Monitoring", "Search and Rescue"];

  return (
    <section className="technology">
      <div className="tech-container">
        <div className="tech-grid">
          <motion.div 
            className="tech-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono text-green">// SYSTEM SPECS</span>
            <h2>SEAGUARD System</h2>
            <div className="specs-grid">
              {techSpecs.map((spec, i) => (
                <div key={i} className="spec-item">
                  <div className="spec-icon text-green">{spec.icon}</div>
                  <div className="spec-text">
                    <h5>{spec.title}</h5>
                    <p>{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="cap-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono text-green">// OPERATIONAL RANGE</span>
            <h2>Capabilities</h2>
            <div className="cap-list">
              {capabilities.map((cap, i) => (
                <motion.div 
                  key={i}
                  className="cap-item"
                  whileHover={{ x: 10 }}
                >
                  <span className="cap-marker"></span>
                  {cap}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
