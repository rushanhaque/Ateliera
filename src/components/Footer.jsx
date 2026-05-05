import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              ATELIER<span className="accent">.</span>
            </a>
            <p className="footer-tagline">Crafting digital excellence through high-performance engineering.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#team">Team</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Social</h4>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
