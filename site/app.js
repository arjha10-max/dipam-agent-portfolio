const navLinks = Array.from(document.querySelectorAll('.rail-nav a'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = () => {
  const position = window.scrollY + window.innerHeight * 0.32;
  let activeSection = sections[0];

  for (const section of sections) {
    if (section.offsetTop <= position) {
      activeSection = section;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${activeSection.id}`);
  });
};

window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('resize', setActiveLink);
setActiveLink();

document.querySelectorAll('.stage-card').forEach((card) => {
  card.addEventListener('toggle', () => {
    if (card.open) {
      card.querySelectorAll('.budget-bars div').forEach((bar) => {
        bar.style.setProperty('--visible', '1');
      });
    }
  });
});
