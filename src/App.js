import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
import Solution from './pages/Solution';
import Investors from './pages/Investors';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/investors" element={<Investors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
