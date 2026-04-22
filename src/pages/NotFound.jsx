import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <motion.div 
          className="glitch-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="glitch" data-text="404">404</h1>
        </motion.div>
        
        <motion.div 
          className="not-found-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="mono text-green">{"// SYSTEM ERROR"}</span>
          <h2>Coordinates Not Found</h2>
          <p>The maritime zone you are trying to access is outside our operational perimeter.</p>
          
          <Link to="/" className="btn-primary">
            Return to Base
          </Link>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="grid-overlay"></div>
    </div>
  );
};

export default NotFound;
