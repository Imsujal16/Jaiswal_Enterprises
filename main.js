/* ============================================================
   JAISWAL ENTERPRISES — MAIN.JS
   Shared Interactions, Animations, Form Handling
   3-Page Hub & Spoke Architecture
   ============================================================ */

'use strict';

/* ─── PAGE CONTEXT ───────────────────────────────────────── */
const PAGE = document.body.dataset.page || 'index';

/* ─── CUSTOM CURSOR ──────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = 'a, button, .brick-type-card, .spec-cell, .fuel-card, .form-field input, .form-field textarea, .form-field select, .check-item, .hub-card, .testimonial-card, .gallery-item, .brief-panel-link';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ─── NAV SCROLL BEHAVIOR ────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── MOBILE NAV ─────────────────────────────────────────── */
const hamburger = document.getElementById('navHamburger');
const mobileNav = document.getElementById('mobileNav');

function openMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.add('open');
  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.classList.add('open');
  }
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  if (hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('open');
  }
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });
}
if (mobileNav) {
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) closeMobileNav();
  });
}

/* ─── HERO PARALLAX ──────────────────────────────────────── */
(function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ─── PAGE HERO PARALLAX (sub-pages) ─────────────────────── */
(function initPageParallax() {
  const heroBg = document.getElementById('pageHeroBg');
  if (!heroBg) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        heroBg.style.transform = `translateY(${scrolled * 0.2}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
})();

/* ─── COUNTER ANIMATION ──────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1800;
      const start    = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 4);
        const value    = Math.round(eased * target);
        el.textContent = target >= 10000
          ? value.toLocaleString('en-IN')
          : value;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ─── FLOATING LABEL DETECTION ───────────────────────────── */
(function initFloatingLabels() {
  const fields = document.querySelectorAll('.form-field input, .form-field textarea, .form-field select');
  fields.forEach(field => {
    const parent = field.closest('.form-field');
    if (!parent) return;

    const check = () => {
      parent.classList.toggle('has-value', field.value.trim() !== '');
    };

    field.addEventListener('input', check);
    field.addEventListener('change', check);
    check();
  });
})();

/* ─── ENQUIRY FORM(S) ────────────────────────────────────── */
(function initForms() {
  document.querySelectorAll('.enquiry-form').forEach(form => {
    const formWrapper = form.closest('.enquiry-right') || form.parentElement;
    const success     = formWrapper ? formWrapper.querySelector('.form-success') : null;
    const submitBtn   = form.querySelector('.form-submit-btn');
    const submitText  = form.querySelector('.form-submit-btn span');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;

      if (submitText) submitText.textContent = 'Sending…';
      if (submitBtn)  { submitBtn.disabled = true; submitBtn.style.opacity = '0.7'; }

      await new Promise(resolve => setTimeout(resolve, 1400));

      form.style.opacity    = '0';
      form.style.transition = 'opacity 0.4s ease';
      setTimeout(() => {
        form.style.display = 'none';
        if (success) success.classList.add('visible');
      }, 400);
    });

    // Clear errors on input
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => {
        const parent = field.closest('.form-field');
        if (parent) markValid(parent);
      });
    });
  });

  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const parent = field.closest('.form-field');
      if (!field.value.trim()) { markInvalid(parent); valid = false; }
      else markValid(parent);
    });
    return valid;
  }

  function markInvalid(parent) {
    if (!parent) return;
    parent.style.borderBottom = '1px solid #d4002a';
    const line = parent.querySelector('.form-field-line');
    if (line) { line.style.background = '#d4002a'; line.style.width = '100%'; }
    parent.classList.add('error');
  }

  function markValid(parent) {
    if (!parent) return;
    parent.style.borderBottom = '';
    const line = parent.querySelector('.form-field-line');
    if (line) { line.style.background = ''; line.style.width = '0'; }
    parent.classList.remove('error');
  }
})();

/* ─── TRANSLATION MODULE ─────────────────────────────────── */
/* ─── SMOOTH ANCHOR SCROLL ───────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 88;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    closeMobileNav();
  });
});

/* ─── FOOTER YEAR ────────────────────────────────────────── */
document.querySelectorAll('.footer-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

/* ─── HERO TEXT SCRAMBLE ─────────────────────────────────── */
(function initScramble() {
  const h1 = document.querySelector('.hero-h1, .page-hero-h1');
  if (!h1) return;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function scramble(el, originalText, duration = 600) {
    let frame = 0;
    const totalFrames = Math.ceil(duration / 16);
    const interval = setInterval(() => {
      el.textContent = originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < (frame / totalFrames) * originalText.length) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      frame++;
      if (frame >= totalFrames) {
        el.textContent = originalText;
        clearInterval(interval);
      }
    }, 16);
  }

  setTimeout(() => {
    const firstSpan = h1.querySelector('span:not(.accent):not(.outline-text):not(.accent-terra):not(.accent-blue):not(.accent-red)');
    if (firstSpan && firstSpan.textContent.trim()) {
      scramble(firstSpan, firstSpan.textContent);
    }
  }, 1600);
})();

/* ─── GALLERY ITEMS HOVER LABEL ──────────────────────────── */
(function initGallery() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

/* ─── PAGE LOAD ──────────────────────────────────────────── */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
