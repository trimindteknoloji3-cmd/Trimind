// Scroll animasyonları
const fadeEls = document.querySelectorAll('.fade-in');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add('visible');
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
