import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/MarketInsight.css';

const MarketInsight = () => {
  const sectors = ["Defense & Security", "Oil & Gas", "Fisheries", "Ports & Logistics", "Environmental Monitoring"];
  const advantages = [
    { title: "Lower Cost", desc: "Significantly lower cost compared to global systems." },
    { title: "High Flexibility", desc: "Customizable for multiple industry needs." },
    { title: "Scalable Architecture", desc: "Easily expandable for national integration." },
    { title: "Industry Adaptable", desc: "Versatile across defense and commercial sectors." }
  ];

  return (
    <section className="market-insight">
      <div className="market-container">
        <div className="market-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono text-green">{"// MARKET DYNAMICS"}</span>
            <h2>Market Insight & Opportunity</h2>
            <p className="market-intro">
              A rapidly growing global maritime technology market worth billions. 
              Seaguard is positioned to lead with a unique business model and 
              unparalleled competitive advantages.
            </p>
          </motion.div>
        </div>

        <div className="market-grid">
          <motion.div 
            className="market-section-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4>Target Sectors</h4>
            <div className="sector-tags">
              {sectors.map((sector, i) => (
                <span key={i} className="sector-tag">{sector}</span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="market-section-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4>Business Model</h4>
            <ul className="model-list">
              <li>System sales & integration</li>
              <li>Subscription-based monitoring</li>
              <li>Data-as-a-Service (DaaS)</li>
              <li>Enterprise & Gov contracts</li>
            </ul>
          </motion.div>
        </div>

        <div className="advantages-section">
          <h4 className="centered">Competitive Advantage</h4>
          <div className="advantages-grid">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i} 
                className="adv-card"
                whileHover={{ y: -10 }}
              >
                <h5>{adv.title}</h5>
                <p>{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsight;
