import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/SolutionHero.css';

const SolutionHero = () => {
  return (
    <section className="solution-hero">
      <div className="solution-hero-content">
        <motion.span 
          className="mono text-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {"// THE SEAGUARD ADVANTAGE"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Advanced <span className="text-glow">Autonomous</span> Systems
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          A distributed autonomous maritime system powered by unmanned surface vehicles (USVs), 
          redefining the standard for maritime security and intelligence.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionHero;
