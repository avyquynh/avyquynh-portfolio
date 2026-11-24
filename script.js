const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

document.querySelectorAll('#hero .fade-up').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});
