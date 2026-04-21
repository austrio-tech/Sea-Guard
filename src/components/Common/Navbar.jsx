import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/Logo.png" alt="Seaguard Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/solution">Solution</Link>
        <Link to="/investors">Investors</Link>
      </div>
      <Link to="/investors" className="navbar-cta">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
