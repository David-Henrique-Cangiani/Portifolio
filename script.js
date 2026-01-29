// Animação de scroll
ScrollReveal().reveal('.section-title', {
  duration: 1000,
  origin: 'top',
  distance: '30px',
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.project-card', {
  duration: 1000,
  origin: 'bottom',
  distance: '30px',
  interval: 200
});
