import React, { useEffect, useRef } from 'react';

const About = () => {
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

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <style>{`
        .about h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .about .chapter-label {
          margin-bottom: 0.8rem;
        }
        .about-image-wrap {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="chapter-label reveal">
              <span className="chapter-num">01</span>
              <span className="chapter-line"></span>
              <span className="chapter-title">The Maker</span>
            </div>
            <h2 className="reveal">
              We Don't Just Build Apps. <br /><span className="accent">We Build Businesses.</span>
            </h2>
            <p className="reveal" style={{ transitionDelay: '.1s' }}>
              Atelier is a premium digital product agency bridging the gap between high-end design aesthetics and robust, scalable engineering. We exist because too many companies settle for generic solutions that fail to convert.
            </p>
            <p className="reveal" style={{ transitionDelay: '.2s' }}>
              We partner with forward-thinking brands to deliver custom web platforms and digital experiences that solve complex operational problems and directly increase your bottom line.
            </p>
            <div className="about-stats reveal" style={{ transitionDelay: '.3s' }}>
              <div className="about-stat">
                <div className="number">10+</div>
                <div className="label">Successful Launches</div>
              </div>
              <div className="about-stat">
                <div className="number">99%</div>
                <div className="label">Client Retention</div>
              </div>
              <div className="about-stat">
                <div className="number">3+</div>
                <div className="label">Years Expertise</div>
              </div>
            </div>
          </div>
          <div className="about-image-wrap reveal reveal-right">
            <div className="about-image">
              <img
                src="/assets/images/image1.png"
                alt="Atelier Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
