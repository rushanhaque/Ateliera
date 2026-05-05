import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}></div>

      <div className="hero-content">
        <p className="hero-eyebrow" style={{ animation: 'fadeInUp 1s ease 0.2s both' }}>
          Digital Agency
        </p>
        <h1 style={{ animation: 'fadeInUp 1s ease 0.3s both' }}>
          <span className="hero-line1">Crafting the Exceptional</span>
          <span className="accent hero-line2">Experience</span>
        </h1>
        <p className="hero-sub" style={{ animation: 'fadeInUp 1s ease 0.4s both' }}>
          Studio crafting high-performance, beautifully engineered digital experiences for brands that refuse to blend in.
        </p>
        <div className="hero-btns" style={{ animation: 'fadeInUp 1s ease 0.5s both' }}>
          <div className="btn-group">
            <a href="#contact" className="btn-primary">
              Book a Free Consultation <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero h1 {
          font-size: clamp(3.5rem, 5.5vw, 5rem);
        }
        .hero-line1 {
          display: block;
          white-space: nowrap;
        }
        .hero-line2 {
          display: block;
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="marquee-section">
        <div className="marquee-track">
          <span>Custom Web Development</span>
          <span>Frontend Engineering</span>
          <span>UI/UX Design</span>
          <span>Software Development</span>
          <span>Web Animations</span>
          <span>Performance Optimization</span>
          <span>Custom Web Development</span>
          <span>Frontend Engineering</span>
          <span>UI/UX Design</span>
          <span>Software Development</span>
          <span>Web Animations</span>
          <span>Performance Optimization</span>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
