import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart, ShieldCheck, Zap } from 'lucide-react';
import '../../styles/WhyInvest.css';

const WhyInvest = () => {
  const reasons = [
    { icon: <TrendingUp />, title: "High-Growth Market", desc: "Early-stage opportunity in a multi-billion dollar maritime tech sector." },
    { icon: <BarChart />, title: "Scalable Model", desc: "Subscription and data-driven revenue streams for sustainable growth." },
    { icon: <Zap />, title: "Cost Advantage", desc: "Significantly lower operational costs compared to global competitors." },
    { icon: <ShieldCheck />, title: "Strategic Impact", desc: "Critical infrastructure for national security and environmental monitoring." }
  ];

  const lookingFor = ["Strategic partners", "Investment funding", "Government collaboration"];

  return (
    <section className="why-invest">
      <div className="invest-container">
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono text-green">{"// STRATEGIC VALUE"}</span>
          <h2>Why Invest With Us</h2>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              className="reason-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="reason-icon text-green">{reason.icon}</div>
              <h4>{reason.title}</h4>
              <p>{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="looking-for-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono text-green">{"// COLLABORATION"}</span>
          <h3>What We’re Looking For</h3>
          <div className="looking-grid">
            {lookingFor.map((item, i) => (
              <div key={i} className="looking-item">
                <span className="text-green">▶</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvest;
