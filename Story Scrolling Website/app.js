

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Set up parallax effect for the header section
gsap.to('.layer__header', {
  y: '-=100px',
  ease: 'none',
  scrollTrigger: {
    trigger: '.main-header',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

gsap.to('.layer__base', {
  y: '-=50px',
  ease: 'none',
  scrollTrigger: {
    trigger: '.main-header',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

gsap.to('.layer__middle', {
  y: '-=25px',
  ease: 'none',
  scrollTrigger: {
    trigger: '.main-header',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

// Set up scrolling animations for each section
gsap.utils.toArray('.main-article').forEach((section) => {
  // Set up fade in effect for the section content
  gsap.fromTo(
    section.querySelector('.main-article__content'),
    { opacity: 0, y: '+=50px' },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    }
  );

  // Set up parallax effect for the section background
  gsap.to(section, {
    backgroundPosition: 'center 100px',
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
});

