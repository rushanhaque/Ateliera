import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileActive((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileActive(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            ATELIER<span className="accent">.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Works</a>
            <a href="#team">Team</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">Connect</a>
          </div>
          <button 
            className={`hamburger ${mobileActive ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileActive ? 'active' : ''}`} id="mobileMenu">
        <a href="#about" onClick={closeMobileMenu}>About</a>
        <a href="#services" onClick={closeMobileMenu}>Services</a>
        <a href="#work" onClick={closeMobileMenu}>Works</a>
        <a href="#team" onClick={closeMobileMenu}>Team</a>
        <a href="#process" onClick={closeMobileMenu}>Process</a>
        <a href="#contact" onClick={closeMobileMenu}>Connect</a>
      </div>
    </>
  );
};

export default React.memo(Navbar);
