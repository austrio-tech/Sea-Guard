import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/InvestorsHero.css';

const InvestorsHero = () => {
  return (
    <section className="investors-hero">
      <div className="investors-hero-content">
        <motion.span 
          className="mono text-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {"// STRATEGIC PARTNERSHIPS"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          For <span className="text-glow">Investors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Partner with Seaguard Marine Systems to redefine the future of maritime intelligence 
          and capture the rapidly growing autonomous systems market.
        </motion.p>
      </div>
    </section>
  );
};

export default InvestorsHero;
