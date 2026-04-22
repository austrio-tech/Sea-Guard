import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/Logo.svg" alt="Seaguard Logo" />
        </Link>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/solution" onClick={closeMenu}>Solution</Link>
        <Link to="/investors" onClick={closeMenu}>Investors</Link>
        <Link to="/investors" className="mobile-cta" onClick={closeMenu}>Contact Us</Link>
      </div>

      <Link to="/investors" className="navbar-cta desktop-only">Contact Us</Link>

      <button className="mobile-toggle" onClick={toggleMenu}>
        {isOpen ? <X color="var(--green-neon)" /> : <Menu color="var(--green-neon)" />}
      </button>
    </nav>
  );
};

export default Navbar;
