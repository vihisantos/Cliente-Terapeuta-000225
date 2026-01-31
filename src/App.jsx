import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GyroLoader from './components/GyroLoader';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import QuantumInfo from './pages/QuantumInfo';
import './App.css';

import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Simulate loading for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <GyroLoader />;
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terapia" element={<QuantumInfo />} />
          </Routes>
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
