import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import '../styles/Investors.css';

const Investors = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Investor', // hardcoding the category to subject to fit the API
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Replace empty strings with "Not Provided"
    const cleanedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key,
        value.toString().trim() === '' ? "Not Provided" : value
      ])
    );

    const payload = {
      ...cleanedData,
      service: "gmail",
      sourcetype: "contact",
      from: "seaguard",
      to: "SEAGUARD"
    };
    const API = 'https://backend-service-ino.onrender.com/api/email/send_web_contact';
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Investor', // hardcoding the category to subject to fit the API
        message: ''
      });
    } catch (error) {
      console.error('API Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="investors-container">
      <section className="investors-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          For Investors
        </motion.h1>
        <p className="info-content">Partner with us to redefine the future of maritime intelligence.</p>
      </section>

      <section className="invest-grid">
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TrendingUp color="#01FF70" size={32} style={{ marginBottom: '1rem' }} />
          <h3>Why Invest</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• High-growth market</li>
            <li>• Scalable business model</li>
            <li>• Early-stage opportunity in the region</li>
            <li>• Strong cost advantage</li>
          </ul>
        </motion.div>
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Users color="#01FF70" size={32} style={{ marginBottom: '1rem' }} />
          <h3>What We're Looking For</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>• Strategic partners</li>
            <li>• Investment funding</li>
            <li>• Government collaboration</li>
          </ul>
        </motion.div>
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <ShieldCheck color="#01FF70" size={32} style={{ marginBottom: '1rem' }} />
          <h3>Strategic Impact</h3>
          <p>Enhancing national security and maritime efficiency through innovative autonomous technology.</p>
        </motion.div>
      </section>

      <section className="contact-section">
        <h2 style={{ color: '#01FF70', fontSize: '2.5rem' }}>Contact Us</h2>
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select 
                id="category" 
                name="category" 
                value={formData.subject}  // hardcoding the category to subject to fit the API
                onChange={handleChange} 
                required
              >
                <option value="Investor">Investor</option>
                <option value="Student">Student</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Tell us about your inquiry..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Send Message'}
            </button>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </motion.div>
        <h2 style={{ color: '#01FF70', fontSize: '2.5rem', paddingTop: '3rem' }}>Get In Touch</h2>
        <div className="contact-cards">
          <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
            <Mail color="#01FF70" size={32} style={{ margin: '0 auto 1rem' }} />
            <h3>Email</h3>
            <p>seaguard.om@gmail.com</p>
          </motion.div>
          <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
            <Phone color="#01FF70" size={32} style={{ margin: '0 auto 1rem' }} />
            <h3>Phone</h3>
            <p>+968 95698351</p>
          </motion.div>
          <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
            <Users color="#01FF70" size={32} style={{ margin: '0 auto 1rem' }} />
            <h3>Investor Inquiries</h3>
            <p>investors.seaguardmarine@gmail.com</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
