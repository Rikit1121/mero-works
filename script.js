// Meridian — interactions

document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = mobile.hasAttribute('hidden') ? false : mobile.classList.contains('is-open');
      if (open) {
        mobile.classList.remove('is-open');
        mobile.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        mobile.removeAttribute('hidden');
        // allow CSS to apply before transition-like display
        requestAnimationFrame(() => mobile.classList.add('is-open'));
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
    mobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobile.classList.remove('is-open');
        mobile.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.section__head, .vision__lead, .service, .process__step, .about__text, .about__panel, .feature-card, .figure, .hero-card');
  revealEls.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // Contact form (demo — no backend)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !validEmail || !message) {
        status.textContent = 'Please fill in your name, a valid email, and a message.';
        return;
      }
      status.textContent = `Thanks, ${name.split(' ')[0]} — your message is ready to send. (Connect a backend or form service to deliver it.)`;
      form.reset();
    });
  }
});
