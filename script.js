// Mero Works — interactions

document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];

  // Homepage hero stat — auto-counts real projects
  const statEl = document.getElementById('statProjects');
  if (statEl) statEl.textContent = String(projects.length) + (statEl.dataset.suffix || '');

  // /projects — render cards from the single data source
  const grid = document.getElementById('projectsGrid');
  if (grid) {
    const base = grid.dataset.base || '';
    const ghIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    const cardHTML = (p) => {
      const hasCover = !!p.cover;
      const coverClass = hasCover ? ' project-card__cover--img' : '';
      const coverStyle = hasCover ? ` style="background-image:url('${esc(base + p.cover)}')"` : '';
      const monogram = esc(p.monogram || (p.name ? p.name[0] : '?'));
      const statusType = p.statusType === 'active' ? ' project-card__status--active' : p.statusType === 'live' ? ' project-card__status--live' : '';
      const stack = (p.stack || []).map((t) => `<li class="tag">${esc(t)}</li>`).join('');
      const github = p.github
        ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" class="btn btn--dark">${ghIcon} GitHub</a>`
        : '';
      const demo = p.demo
        ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer" class="btn btn--outline">Live Demo</a>`
        : '<span class="btn btn--outline btn--disabled" aria-disabled="true" title="Demo coming soon">Demo — soon</span>';
      return `<article class="project-card">
        <div class="project-card__cover${coverClass}" data-monogram="${monogram}"${coverStyle} role="img" aria-label="${esc(p.name)} cover art">
          <span class="project-card__status${statusType}"><span class="dot"></span> ${esc(p.status)}</span>
        </div>
        <div class="project-card__body">
          <h2 class="project-card__title">${esc(p.name)}</h2>
          <p class="project-card__desc">${esc(p.description)}</p>
          <ul class="project-card__stack" aria-label="Technology stack">${stack}</ul>
          <div class="project-card__actions">${github}${demo}</div>
        </div>
      </article>`;
    };

    const teaserHTML = `<article class="project-card project-card--more">
        <div class="project-card__more-inner">
          <span class="project-card__more-badge">More on the way</span>
          <h2 class="project-card__title">New builds in progress</h2>
          <p class="project-card__desc">We're actively shipping more products and client work. Want to see something specific, or build the next one with us?</p>
          <a href="${base}index.html#contact" class="btn btn--outline">Start a project</a>
        </div>
      </article>`;

    grid.innerHTML = projects.map(cardHTML).join('') + teaserHTML;
  }

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
  const revealEls = document.querySelectorAll('.section__head, .vision__lead, .service, .process__step, .about__text, .about__panel, .feature-card, .figure, .hero-card, .page-header__inner, .project-card');
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

  // Contact form — Web3Forms (https://web3forms.com)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('cfSubmit');

  if (form && status && submitBtn) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameVal = form.querySelector('[name="name"]').value.trim();
      const emailVal = form.querySelector('[name="email"]').value.trim();
      const messageVal = form.querySelector('[name="message"]').value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      const accessKey = form.querySelector('[name="access_key"]').value;

      // Client-side validation
      if (!nameVal || !validEmail || !messageVal) {
        status.textContent = 'Please fill in your name, a valid email, and a message.';
        status.className = 'contact-form__status contact-form__status--error';
        return;
      }

      // Warn dev if the key hasn't been replaced yet
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY') {
        status.textContent = 'Form not yet configured — see README for setup instructions.';
        status.className = 'contact-form__status contact-form__status--error';
        return;
      }

      // Loading state
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      status.textContent = '';
      status.className = 'contact-form__status';

      try {
        const data = new FormData(form);
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data,
        });
        const json = await res.json();

        if (res.ok && json.success) {
          status.textContent = `Message sent, ${nameVal.split(' ')[0]}! We'll be in touch soon.`;
          status.className = 'contact-form__status contact-form__status--success';
          form.reset();
        } else {
          throw new Error(json.message || 'Submission failed');
        }
      } catch (err) {
        status.textContent = 'Something went wrong. Please email us directly at merowworks@gmail.com';
        status.className = 'contact-form__status contact-form__status--error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
      }
    });
  }
});
