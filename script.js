// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Smooth skill bar animation on scroll
const skillBars = document.querySelectorAll('.skill-bar-fill');
const observerOptions = {
  threshold: 0.5,
};

const skillBarObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillLevel = entry.target.getAttribute('data-skill-level');
      entry.target.style.width = `${skillLevel}%`;
    }
  });
}, observerOptions);

skillBars.forEach(skillBar => skillBarObserver.observe(skillBar));

// Add hover effects on project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.02)';
    card.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.3)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
  });
});
