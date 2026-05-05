import React, { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="chapter-label reveal">
          <span className="chapter-num">02</span>
          <span className="chapter-line"></span>
          <span className="chapter-title">Capabilities</span>
        </div>
        <h2 className="reveal">
          Engineering the <span className="accent">Future</span> of Your Business
        </h2>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
            <h3>Custom Web Development</h3>
            <p>High-performance websites built from scratch with modern frameworks. Fast, secure, and infinitely scalable.</p>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '.1s' }}>
            <div className="service-icon"><i className="fas fa-palette"></i></div>
            <h3>UI Designs</h3>
            <p>Pixel-perfect, aesthetically pleasing interfaces designed to provide intuitive and engaging user journeys.</p>
          </div>
          <div className="service-card reveal" style={{ transitionDelay: '.2s' }}>
            <div className="service-icon"><i className="fas fa-magic"></i></div>
            <h3>Effects & Animations</h3>
            <p>Sophisticated, high-end motion design and interactive effects that breathe life into every digital canvas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
