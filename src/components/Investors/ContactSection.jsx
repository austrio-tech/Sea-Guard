import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Investor Inquiry',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = {
      ...formData,
      service: process.env.REACT_APP_PAYLOAD_SERVICE || "gmail",
      sourcetype: process.env.REACT_APP_PAYLOAD_SOURCETYPE || "contact",
      from: process.env.REACT_APP_PAYLOAD_FROM || "seaguard",
      to: process.env.REACT_APP_PAYLOAD_TO || "SEAGUARD"
    };

    const API = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setStatus({ type: 'success', message: 'Inquiry sent successfully. Our team will contact you shortly.' });
      setFormData({ name: '', phone: '', email: '', subject: 'Investor Inquiry', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mono text-green">{"// ESTABLISH CONTACT"}</span>
            <h2>Get In Touch</h2>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="text-green" />
                <div>
                  <p className="label">General Inquiries</p>
                  <p className="value">seaguard.om@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="text-green" />
                <div>
                  <p className="label">Investor Relations</p>
                  <p className="value">investors.seaguardmarine@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="text-green" />
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+968 95698351</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="text-green" />
                <div>
                  <p className="label">Region</p>
                  <p className="value">Muscat, Oman</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Inquiry" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'TRANSMITTING...' : 'SEND INQUIRY'}
              </button>

              {status.message && (
                <div className={`status-msg ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
