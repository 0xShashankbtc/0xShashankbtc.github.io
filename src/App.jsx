import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AITwinModal from './components/AITwinModal';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Initialize Ultra-Responsive Lightweight Lenis Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-body selection:bg-sky-500/20 flex flex-col justify-between">
        
        <Header
          onOpenContact={() => setIsContactOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenContact={() => setIsContactOpen(true)}
                  onOpenBooking={() => setIsBookingOpen(true)}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onOpenContact={() => setIsContactOpen(true)}
                  onOpenBooking={() => setIsBookingOpen(true)}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenBooking={() => setIsBookingOpen(true)}
                />
              }
            />
          </Routes>
        </main>

        <Footer />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

        <AITwinModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

      </div>
    </Router>
  );
}
