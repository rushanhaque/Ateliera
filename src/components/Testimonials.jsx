import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Atelier transformed our online presence completely. The attention to detail and understanding of our brand was exceptional.",
    name: "Danish Faiz",
    role: "CEO, Erfolg Living"
  },
  {
    quote: "Working with Atelier was an absolute pleasure. They delivered a fast, scalable app that our team loves. 10/10 would recommend.",
    name: "Laiba Masood",
    role: "Manager, SIAAM land transport & co"
  },
  {
    quote: "The tool we got built for us is very reliable and efficient. It saved us countless hours of manual work.",
    name: "MO Saud",
    role: "MD, AF International"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleStart = (clientX) => {
    setTouchEnd(null);
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setTouchEnd(clientX);
  };

  const handleEnd = () => {
    if (!isDragging || !startX || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = startX - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    } else if (isRightSwipe) {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }

    setIsDragging(false);
    setStartX(0);
    setTouchEnd(null);
  };

  const onTouchStart = (e) => handleStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => handleMove(e.targetTouches[0].clientX);
  const onTouchEnd = () => handleEnd();

  const onMouseDown = (e) => handleStart(e.clientX);
  const onMouseMove = (e) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => { if (isDragging) handleEnd(); };

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]); // Reset timer when current changes manually

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="chapter-label reveal">
          <span className="chapter-num">05</span>
          <span className="chapter-line"></span>
          <span className="chapter-title">Client Trust</span>
        </div>
        <h2 className="reveal">
          What Clients <span className="accent">Say</span>
        </h2>
        <div className="testimonial-carousel reveal">
          <div 
            className="testimonial-track" 
            style={{ 
              transform: `translateX(-${current * 100}%)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            {testimonials.map((t, idx) => (
              <div className="testimonial-slide" key={idx}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">"</div>
                  <blockquote>{t.quote}</blockquote>
                  <div className="testimonial-stars">★ ★ ★ ★ ★</div>
                  <div className="testimonial-author">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === current ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
