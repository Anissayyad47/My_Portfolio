import React, { useState, useEffect } from 'react';
import './Css/EXP.css';

function EXP() {
  const [showTopNav, setShowTopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowTopNav(scrollTop < 50); // Top navbar appears near top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showTopNav && <div className="top-navbar">Top Navbar</div>}

      <div
        className={`right-navbar ${
          showTopNav ? 'fade-out' : 'fade-in'
        }`}
      >
        Right Navbar
      </div>

      <div className="page-content">
        <h1>Scroll Down</h1>
        <p style={{ height: '2000px' }}>Page content here...</p>
      </div>
    </>
  );
}

export default EXP;
