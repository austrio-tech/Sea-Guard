import React from 'react';
import { motion } from 'framer-motion';
import BoatModel from './BoatModel';
import '../../styles/Highlights.css';

const Highlights = () => {
  const highlights = [
    { title: "Cost Reduction", value: "70–90%", desc: "Significant operational cost reduction compared to manned vessels." },
    { title: "Continuous Ops", value: "24/7", desc: "Uninterrupted monitoring and autonomous operations day and night." },
    { title: "Scalability", value: "Distributed", desc: "A scalable system of multiple USVs for broad area coverage." },
    { title: "AI-Powered", value: "Autonomous", desc: "Advanced navigation and data analysis powered by AI." }
  ];

  return (
    <section className="highlights">
      <div className="highlights-container">
        <div className="highlights-left">
          <BoatModel />
        </div>
        <div className="highlights-right">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono text-green">{"// SYSTEM ADVANTAGES"}</span>
            <h2>Key Highlights</h2>
          </motion.div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="highlight-value text-green">{item.value}</div>
                <div className="highlight-title">{item.title}</div>
                <div className="highlight-desc">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
