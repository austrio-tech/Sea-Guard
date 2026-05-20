import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import Home from './pages/Home';
import Solution from './pages/Solution';
import Investors from './pages/Investors';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <SpeedInsights />
        <Analytics />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
