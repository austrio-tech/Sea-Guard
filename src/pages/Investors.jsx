import React from 'react';
import InvestorsHero from '../components/Investors/InvestorsHero';
import WhyInvest from '../components/Investors/WhyInvest';
import ContactSection from '../components/Investors/ContactSection';
import '../styles/Investors.css';

const Investors = () => {
  return (
    <div className="investors-page">
      <InvestorsHero />
      <WhyInvest />
      <ContactSection />
    </div>
  );
};

export default Investors;
