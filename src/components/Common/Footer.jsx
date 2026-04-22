import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo">
          <img src="/Logo.svg" alt="Seaguard Logo" />
          <p>Redefining Maritime Intelligence with autonomous systems.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/solution">Solution</a></li>
            <li><a href="/investors">Investors</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: seaguard.om@gmail.com</p>
          <p>Phone: +968 95698351</p>
          <p>Inquiries: investors.seaguardmarine@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Seaguard Marine Systems. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
