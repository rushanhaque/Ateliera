document.addEventListener('DOMContentLoaded', () => {
  // ===== REGISTER GSAP PLUGINS =====
  gsap.registerPlugin(ScrollTrigger);

  // ===== HERO ANIMATION (LOAD) =====
  const tlHero = gsap.timeline();
  
  // Split text preparation (very basic simulation for the hero)
  const heroLines = document.querySelectorAll('.split-line-inner');
  
  tlHero.to(heroLines, {
    y: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.out",
    delay: 0.2
  })
  .to('#heroEyebrow', { opacity: 1, duration: 1 }, "-=0.8")
  .to('#heroSub', { opacity: 1, y: 0, duration: 1 }, "-=0.6")
  .to('#heroBtns', { opacity: 1, y: 0, duration: 1 }, "-=0.6")
  .to('.hero-orb', {
    opacity: (i, el) => el.classList.contains('hero-orb-3') ? 0.05 : 0.15,
    duration: 2,
    stagger: 0.2
  }, "-=1.5");

  // ===== SCROLL REVEAL (NATIVE SMOOTH) =====
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // Parallax Decorative Lines (GSAP is okay here for scrub)
  if (typeof gsap !== 'undefined') {
    gsap.to('.deco-line-1', {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
    
    gsap.to('.deco-line-2', {
      yPercent: 80,
      ease: "none",
      scrollTrigger: {
        trigger: "#services",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== SMOOTH SCROLL FOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        // Offset for navbar
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== ANIMATED COUNTERS =====
  const counters = document.querySelectorAll('[data-target]');
  let counterAnimated = new Set();

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterAnimated.has(entry.target)) {
        counterAnimated.add(entry.target);
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 1500;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // Snappier cubic ease
      el.textContent = Math.ceil(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ===== TESTIMONIAL CAROUSEL =====
  const track = document.getElementById('testimonialTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;
  
  if (track && dots.length > 0) {
    const totalSlides = dots.length;

    function goToSlide(index) {
      currentSlide = index;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
    });

    // Auto-advance
    setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 6000);
  }

  // ===== CONTACT FORM =====
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      const originalText = btn.textContent;
      
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#2d6a4f'; // success green
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }

});
