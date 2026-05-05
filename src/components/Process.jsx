import React, { useEffect, useRef } from 'react';

const Process = () => {
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
    <section className="process" id="process" ref={sectionRef}>
      <div className="container">
        <div className="chapter-label reveal">
          <span className="chapter-num">06</span>
          <span className="chapter-line"></span>
          <span className="chapter-title">The Method</span>
        </div>
        <h2 className="reveal">
          How Every Great Idea <span className="accent">Comes to Life</span>
        </h2>
        <div className="process-grid">
          <div className="process-step reveal">
            <div className="process-number">01</div>
            <h3>Discovery</h3>
            <p>Understanding your goals, audience, and competitive landscape through deep research and strategy sessions.</p>
          </div>
          <div className="process-step reveal" style={{ transitionDelay: '.1s' }}>
            <div className="process-number">02</div>
            <h3>Design</h3>
            <p>Wireframes, mockups, and interactive prototypes crafted with meticulous attention to every detail.</p>
          </div>
          <div className="process-step reveal" style={{ transitionDelay: '.2s' }}>
            <div className="process-number">03</div>
            <h3>Develop</h3>
            <p>Clean, performant code built with modern technologies. Fully responsive and optimized for speed.</p>
          </div>
          <div className="process-step reveal" style={{ transitionDelay: '.3s' }}>
            <div className="process-number">04</div>
            <h3>Deliver</h3>
            <p>Thorough testing, deployment, and ongoing support to ensure everything runs flawlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Process);
