import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Erfolg Living',
    category: 'Web',
    tag: 'Web Design & Development',
    url: 'https://www.erfolgliving.com',
    description: 'A cinematic web experience for a luxury brand, engineered for high performance and deep user engagement.',
    result: '40% boost in engagement',
    tech: 'React, Three.js'
  },
  {
    title: 'Novellect',
    category: 'Web',
    tag: 'Frontend Development',
    url: 'https://novellect.vercel.app',
    description: 'Dynamic platform for personalized book discovery, focusing on interactive user experiences.',
    result: '3x longer sessions',
    tech: 'Next.js, React'
  },
  {
    title: 'SIAAM Logistics',
    category: 'Web',
    tag: 'Custom Dashboard',
    url: 'https://transport-vehicle-g-sheet-for-siaam.vercel.app/',
    image: '/assets/images/project3.png',
    description: 'Custom logistics dashboard synchronized with Google Workspace for real-time operational efficiency.',
    result: '20+ hours saved weekly',
    tech: 'React, API Sync'
  },
  {
    title: 'Choudhry Sons Exports',
    category: 'Web',
    tag: 'E-Commerce & Brand',
    url: 'https://chaudharysons.vercel.app/',
    image: '/assets/images/choudhry.png',
    description: 'Premium showcase website for a heritage metal handicrafts exporter operating since 1974, with a curated multi-category product catalogue reaching 30+ countries.',
    result: 'Global reach across 30+ countries',
    tech: 'HTML, CSS, JavaScript'
  }
];

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState('All');

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

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio" id="work" ref={sectionRef}>
      <div className="container">
        <div className="chapter-label reveal">
          <span className="chapter-num">03</span>
          <span className="chapter-line"></span>
          <span className="chapter-title">Selected Works</span>
        </div>
        <h2 className="reveal">
          Featured <span className="accent">Work</span>
        </h2>
        
        <div className="portfolio-grid">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.title} 
              className="project-card reveal reveal-scale" 
              style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
            >
              <div className="project-image-wrap">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-preview-img" 
                  />
                ) : (
                  <iframe 
                    src={project.url} 
                    className="project-iframe" 
                    title={project.title}
                    loading="lazy"
                  ></iframe>
                )}
              </div>
              <div className="project-content">
                <span className="project-tag">{project.tag} &bull; {project.tech}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.description}</p>
                
                <div className="project-stats">
                  <div className="project-stat">
                    <h4>Key Impact</h4>
                    <p className="accent">{project.result}</p>
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-secondary project-link-btn">
                    Visit Site ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MID PAGE CTA */}
        <div className="mid-cta reveal">
          <h2>Ready to upgrade your digital presence?</h2>
          <p>Let's discuss how our engineering can solve your most critical business bottlenecks.</p>
          <a href="#contact" className="btn-secondary">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Portfolio);
