import React, { useEffect, useRef, useState, useCallback } from 'react';

const teamMembers = [
  {
    name: "Rushan Haque",
    bio: "Often found debugging his coffee consumption levels while contemplating the mysteries of the universe.",
    image: "/assets/images/rushan.jpeg",
    imagePlaceholder: "RH",
    links: {
      portfolio: "https://rushanhaque.online/",
      github: "https://github.com/rushanhaque",
      linkedin: "https://www.linkedin.com/in/rushanhaque/"
    },
    skills: ["Technical Leadership", "System Architecture", "React/Next.js", "Performance Optimization"]
  },
  {
    name: "Adeeba Fatima Zaidi",
    bio: "A firm believer that every problem can be solved with a well-organized spreadsheet and a cat video.",
    image: "/assets/images/adeeba.jpg",
    imagePlaceholder: "AZ",
    links: {
      portfolio: "https://adeebazaidiportfolio.vercel.app/",
      github: "https://github.com/adeebazaidi",
      linkedin: "https://www.linkedin.com/in/adeeba-fatima-zaidi-a53295274/"
    },
    skills: ["Machine Learning", "Python/TensorFlow", "AI Integration", "NLP"]
  },
  {
    name: "Saniya Mehdi",
    bio: "Collects antique fountain pens and has a suspicious amount of knowledge about 18th-century botany.",
    image: "/assets/images/saniya.jpeg",
    imagePlaceholder: "SM",
    links: {
      portfolio: "https://portfoliosaniyamehdi.vercel.app/",
      github: "https://github.com/Saniya-Mehdi",
      linkedin: "https://www.linkedin.com/in/saniya-mehdi-619856287/"
    },
    skills: ["Deep Learning", "Computer Vision", "PyTorch", "Neural Networks"]
  },
  {
    name: "Mohammad Adi",
    bio: "Spends his weekends trying to convince his plants to grow faster through the power of positive reinforcement.",
    image: "/assets/images/adi.jpeg",
    imagePlaceholder: "MA",
    links: {
      portfolio: "#",
      github: "#",
      linkedin: "https://www.linkedin.com/in/mohd-adi-628544277/"
    },
    skills: ["Statistical Modeling", "Big Data (Spark)", "SQL/NoSQL", "Python/R"]
  },
  {
    name: "Sarah Imran",
    bio: "Has an unrivaled talent for finding the perfect playlist for every mood, no matter how obscure.",
    image: "/assets/images/sarah.jpg",
    imagePlaceholder: "SR",
    links: {
      portfolio: "#",
      github: "https://github.com/sarahimran33-jpg",
      linkedin: "https://www.linkedin.com/in/sarah-imran-b0058035b/"
    },
    skills: ["UI/UX Design", "Figma", "CSS/SCSS", "A11y", "Prototyping"]
  },
];

const Team = () => {
  const sectionRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

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

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => reveals?.forEach((el) => observer.unobserve(el));
  }, []);

  const openModal = useCallback((member) => {
    setActiveModal(member);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <section className="team" id="team" ref={sectionRef}>
      <div className="container">
        <div className="chapter-label reveal">
          <span className="chapter-num">04</span>
          <span className="chapter-line"></span>
          <span className="chapter-title">The Experts</span>
        </div>
        <h2 className="reveal" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>
          Meet the <span className="accent">Developers</span> Behind the Code
        </h2>

        <div className="team-grid" style={{ marginTop: '2.5rem' }}>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="team-card reveal reveal-scale"
              style={{ transitionDelay: `${idx * 0.1}s`, cursor: 'pointer' }}
              onClick={() => openModal(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openModal(member) }}
              aria-label={`View details for ${member.name}`}
            >
              <div className="team-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {member.image ? (
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-m)', opacity: 0.2 }}>
                    {member.imagePlaceholder}
                  </span>
                )}
              </div>
              <div className="team-content" style={{ textAlign: 'center', padding: '1.2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.05rem', fontWeight: 600 }}>{member.name}</h3>
                <button 
                  className="btn-secondary" 
                  style={{ 
                    padding: '0.5rem 0.8rem', 
                    fontSize: '0.75rem', 
                    width: '100%',
                    borderRadius: '8px',
                    letterSpacing: '0.5px'
                  }}
                >
                  View Full Profile &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <div className="modal-avatar" style={{ overflow: 'hidden' }}>
                {activeModal.image ? (
                  <img src={activeModal.image} alt={activeModal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  activeModal.imagePlaceholder
                )}
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>{activeModal.name}</h3>
              </div>
            </div>

            <div className="modal-body">
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-m)' }}>About</h4>
              <p style={{ color: 'var(--text-p)', lineHeight: 1.7, marginBottom: '2rem' }}>{activeModal.bio}</p>

              <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-m)' }}>Core Skills</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {activeModal.skills.map((skill, i) => (
                  <span key={i} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-l)', fontWeight: 500 }}>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="team-links" style={{ justifyContent: 'flex-start' }}>
                {activeModal.links.portfolio && (
                  <a href={activeModal.links.portfolio} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    <i className="fas fa-globe"></i> Portfolio
                  </a>
                )}
                {activeModal.links.linkedin && (
                  <a href={activeModal.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    <i className="fab fa-linkedin-in"></i> LinkedIn
                  </a>
                )}
                {activeModal.links.github && (
                  <a href={activeModal.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Team);
