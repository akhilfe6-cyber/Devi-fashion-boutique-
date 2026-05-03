/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Orders from './pages/Orders';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        className="flex-grow flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/collections" 
            element={<Collections />} 
          />
          <Route 
            path="/gallery" 
            element={<Gallery />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
          <Route 
            path="/orders" 
            element={<Orders />} 
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFF9F5]">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
