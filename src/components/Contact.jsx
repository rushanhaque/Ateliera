import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error
  const [errorMsg, setErrorMsg] = useState('');

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

    if (sectionRef.current) {
      const reveals = sectionRef.current.querySelectorAll('.reveal');
      reveals.forEach((el) => observer.observe(el));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Basic validation
    if (!name || name.trim().length < 2) {
      setStatus('error');
      setErrorMsg('Please enter a valid name.');
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!message || message.trim().length < 10) {
      setStatus('error');
      setErrorMsg('Message must be at least 10 characters long.');
      return;
    }

    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="chapter-label reveal">
          <span className="chapter-num">07</span>
          <span className="chapter-line"></span>
          <span className="chapter-title">The Conversation</span>
        </div>
        <h2 className="reveal">
          Let's Build Something <span className="accent">Extraordinary</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-left">
            <h3 className="animated-text">Have a project in mind?</h3>
            <p className="animated-text" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              I'd love to hear about it. Whether you need a new website, a complex web app, or a performance overhaul — let's talk and make it happen.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-envelope"></i></div>
                <span>rushanulhaque@gmail.com</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-phone"></i></div>
                <span>+91 76680 47608</span>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-map-marker-alt"></i></div>
                <span>Moradabad, India</span>
              </div>
            </div>
          </div>

          <form className="contact-form reveal reveal-right" onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Or send us a message directly</h4>
              <p style={{ color: 'var(--text-m)', fontSize: '0.9rem' }}>We typically respond within 24 hours.</p>
            </div>

            {status === 'error' && (
              <div style={{ padding: '1rem', background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#991B1B', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.9rem' }}>
                <i className="fas fa-exclamation-circle" style={{ marginRight: '0.5rem' }}></i> {errorMsg}
              </div>
            )}

            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required aria-required="true" />
              <input type="email" name="email" placeholder="Your Work Email" required aria-required="true" />
            </div>
            <input type="text" name="subject" placeholder="Project Budget & Timeline" />
            <textarea name="message" placeholder="Describe your business challenge..." required aria-required="true"></textarea>

            <button
              type="submit"
              className="btn-primary"
              style={{
                ...(status === 'sent' ? { background: '#0F766E', color: '#fff' } : {}),
                ...(status === 'error' ? { background: '#991B1B', color: '#fff' } : {})
              }}
              disabled={status === 'sending'}
            >
              {status === 'idle' && 'Request Free Audit →'}
              {status === 'sending' && 'Sending Request...'}
              {status === 'sent' && 'Request Received ✓'}
              {status === 'error' && 'Try Again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
