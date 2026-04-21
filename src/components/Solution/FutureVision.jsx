import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/FutureVision.css';

const FutureVision = () => {
  const roadmap = [
    { phase: "Phase 1", title: "Pilot Deployment", desc: "Initial testing and real-world validation of USV systems." },
    { phase: "Phase 2", title: "Regional Expansion", desc: "Scaling operations across the regional maritime zones." },
    { phase: "Phase 3", title: "National Integration", desc: "Full-scale integration with national maritime infrastructure." },
    { phase: "Phase 4", title: "Global Scaling", desc: "Expanding autonomous systems to international markets." }
  ];

  return (
    <section className="future-vision">
      <div className="vision-container">
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono text-green">// STRATEGIC ROADMAP</span>
          <h2>Future Vision</h2>
        </motion.div>

        <div className="roadmap-timeline">
          {roadmap.map((item, i) => (
            <motion.div 
              key={i}
              className="roadmap-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="roadmap-node">
                <div className="node-circle"></div>
                <div className="node-line"></div>
              </div>
              <div className="roadmap-content">
                <span className="phase mono text-green">{item.phase}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
