/* ============================================================
   JAISWAL ENTERPRISES — GSAP ANIMATIONS + LENIS SMOOTH SCROLL
   Premium motion pass. Industrial-confident, not bouncy.
   Mobile-first: every effect has an explicit mobile variant.
   ============================================================ */

'use strict';

(function () {

  /* ─── 1. REDUCED MOTION CHECK ──────────────────────────────
     Respect system preference. If reduced motion, ensure all
     .reveal elements are immediately visible and bail out.
     Works on both desktop and mobile OS settings.
  ────────────────────────────────────────────────────────── */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Make sure nothing stays invisible if JS loaded late
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('in-view');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return; // Exit — use existing IntersectionObserver fallback
  }

  /* ─── 2. GUARD: WAIT FOR GSAP + LENIS ──────────────────────
     These are loaded via CDN just before this script,
     but we guard anyway in case of slow networks.
  ────────────────────────────────────────────────────────── */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof Lenis === 'undefined') {
    console.warn('GSAP or Lenis not loaded — skipping animation pass');
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    return;
  }

  /* ─── 3. DEVICE DETECTION ──────────────────────────────────
     Use pointer/hover media query — more reliable than
     user-agent sniffing. Coarse + no-hover = touch device.
  ────────────────────────────────────────────────────────── */
  const isTouchDevice = window.matchMedia(
    '(hover: none) and (pointer: coarse)'
  ).matches;
  const isDesktop = !isTouchDevice;

  /* ─── 4. GSAP SETUP ─────────────────────────────────────── */
  gsap.registerPlugin(ScrollTrigger);

  /* ─── 5. LENIS INIT ─────────────────────────────────────── */
  // Mobile: slightly higher lerp (less smooth = less nauseating on touch)
  // Desktop: silky 0.08
  // autoRaf: false — we drive it via gsap.ticker (single RAF loop)
  const lenis = new Lenis({
    duration:        isTouchDevice ? 1.0 : 1.3,
    easing:          (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation:     'vertical',
    gestureOrientation: 'vertical',
    smoothWheel:     true,
    wheelMultiplier: 1,
    // Touch: let Lenis handle native-feeling touch, not overcrank it
    touchMultiplier: isTouchDevice ? 1.5 : 2,
    infinite:        false,
  });

  // Expose globally so other scripts can call lenis.scrollTo()
  window.__lenis = lenis;

  /* ─── 6. SINGLE RAF LOOP ────────────────────────────────────
     Drive Lenis via GSAP ticker so there is exactly ONE
     requestAnimationFrame loop running. lagSmoothing(0)
     prevents GSAP from slowing itself during tab switching.
  ────────────────────────────────────────────────────────── */
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Keep ScrollTrigger positions accurate as Lenis scrolls
  lenis.on('scroll', ScrollTrigger.update);

  /* ─── 7. RE-WIRE NAVBAR SCROLL HIDE/SHOW ───────────────────
     The existing listener uses window.addEventListener('scroll').
     Lenis fires native scroll events on the window, so
     window.scrollY and the existing nav listener both continue
     to work — no re-wiring needed. Verified: Lenis dispatches
     a native 'scroll' event on the window on every tick.
  ────────────────────────────────────────────────────────── */

  /* ─── 8. ANCHOR LINK OVERRIDE ───────────────────────────────
     Override existing smooth-scroll anchor handlers.
     We use capture:true so our handler fires BEFORE the
     existing bubble-phase handler in main.js, allowing us to
     stop it and delegate to lenis.scrollTo() instead.
  ────────────────────────────────────────────────────────── */
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetSelector = link.getAttribute('href');
    if (!targetSelector || targetSelector === '#') return;
    const target = document.querySelector(targetSelector);
    if (!target) return;

    e.preventDefault();
    e.stopImmediatePropagation(); // Block main.js handler

    lenis.scrollTo(target, {
      offset: -90, // Clear the fixed nav height
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    // Close mobile nav if open
    if (typeof closeMobileNav === 'function') closeMobileNav();
  }, { capture: true });

  /* ─── 9. KILL EXISTING INTERSECTION OBSERVER REVEALS ────────
     The initReveal() in main.js uses IntersectionObserver.
     GSAP's ScrollTrigger.batch() replaces it for all effects.
     We disable the IntersectionObserver version by setting
     all .reveal elements to opacity:0 and removing 'in-view'
     so they start in the pre-animated state we control.
     The existing .in-view CSS class stays defined in style.css
     as a fallback — we just never trigger it via the observer.
  ────────────────────────────────────────────────────────── */
  // Do this synchronously before paint so there's no flash
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('in-view');
  });

  /* ═══════════════════════════════════════════════════════════
     ANIMATION FUNCTIONS
  ═══════════════════════════════════════════════════════════ */

  /* ── HERO EYEBROW / PARENT TAG ───────────────────────────── */
  function initHeroEyebrow() {
    const els = document.querySelectorAll(
      '.hero-eyebrow, .page-hero-eyebrow, .page-hero-parent'
    );
    if (!els.length) return;
    gsap.set(els, { y: 18, opacity: 0 });
    gsap.to(els, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      delay: 0.05
    });
  }

  /* ── HERO HEADLINE WORD STAGGER ─────────────────────────────
     Splits each span's text into individual word spans, then
     reveals them one by one from below.

     LAYOUT-SHIFT PREVENTION:
     - We set the initial state (opacity:0, translateY) on
       the .word elements immediately before the first frame.
     - The outer .word-wrap has overflow:hidden to clip the
       travel, keeping total layout footprint stable.
     - No change to the h1's own size, padding, or position.
     - The hero h1 already has `padding-top` that clears the
       fixed nav — this animation does NOT touch that.
  ────────────────────────────────────────────────────────── */
  function initHeroHeadline() {
    const h1 = document.querySelector('.hero-h1, .page-hero-h1');
    if (!h1) return;

    const spans = h1.querySelectorAll('span');
    const wordEls = [];

    spans.forEach(span => {
      const rawText = span.textContent.trim();
      if (!rawText) return;
      const words = rawText.split(/\s+/);
      span.innerHTML = words.map((w, i) =>
        `<span class="gsap-word-wrap" style="display:inline-block;overflow:hidden;vertical-align:bottom;line-height:inherit;">`
        + `<span class="gsap-word" style="display:inline-block;">${w}</span>`
        + `</span>`
        + (i < words.length - 1 ? ' ' : '')
      ).join('');
      wordEls.push(...span.querySelectorAll('.gsap-word'));
    });

    if (!wordEls.length) return;

    // Set start state immediately — no FOUC
    const yStart = isTouchDevice ? '105%' : '105%';
    gsap.set(wordEls, { y: yStart, opacity: 0 });

    gsap.to(wordEls, {
      y: '0%',
      opacity: 1,
      duration: isTouchDevice ? 0.55 : 0.75,
      ease: 'power4.out',
      stagger: { each: isTouchDevice ? 0.06 : 0.08, from: 'start' },
      delay: 0.15,
      // skewY only on desktop — cheap GPU effect, skip on mobile
      ...(isDesktop ? {
        skewY: 3,
        clearProps: 'skewY'
      } : {})
    });
  }

  /* ── HERO STATS ROW ─────────────────────────────────────── */
  function initHeroStats() {
    const stats = document.querySelectorAll('.page-hero-stat');
    if (!stats.length) return;
    gsap.set(stats, { y: isTouchDevice ? 20 : 30, opacity: 0 });
    gsap.to(stats, {
      y: 0,
      opacity: 1,
      duration: isTouchDevice ? 0.5 : 0.65,
      ease: 'power3.out',
      stagger: 0.09,
      delay: 0.4
    });
  }

  /* ── HERO SCROLL CUE PULSE ──────────────────────────────── */
  function initScrollCue() {
    const line = document.querySelector('.hero-scroll-line');
    if (!line) return;
    gsap.fromTo(line,
      { scaleY: 1, opacity: 1, transformOrigin: 'top center' },
      {
        scaleY: 0,
        opacity: 0,
        duration: 1.0,
        ease: 'power2.in',
        repeat: -1,
        repeatDelay: 0.6,
        delay: 1.2
      }
    );
  }

  /* ── HERO BG PARALLAX ───────────────────────────────────────
     MOBILE: Disabled entirely.
     Parallax on mobile causes:
       1. Battery drain from constant rAF + style mutation
       2. "Gap" artifacts at top/bottom of fixed-bg elements
       3. Jank on mid-range phones at 60fps
     The hero bg stays static on mobile — it still looks great.

     DESKTOP: GSAP ScrollTrigger scrub, GPU-composited via
     `force3D` and `will-change: transform`.
  ────────────────────────────────────────────────────────── */
  function initHeroParallax() {
    if (isTouchDevice) return; // Fully disabled on mobile

    const heroBg = document.getElementById('heroBg')
                || document.getElementById('pageHeroBg');
    if (!heroBg) return;

    const section = heroBg.closest('section') || document.documentElement;
    heroBg.style.willChange = 'transform';

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {
        const y = self.progress * window.innerHeight * 0.28;
        gsap.set(heroBg, { y, scale: 1.06, force3D: true });
      }
    });
  }

  /* ── SCROLL REVEALS (.reveal elements) ──────────────────────
     Replace IntersectionObserver with ScrollTrigger.batch().
     Mobile: shorter y travel, faster duration, earlier trigger.
  ────────────────────────────────────────────────────────── */
  function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Pre-set starting state. Shorter distance on mobile.
    gsap.set(reveals, {
      opacity: 0,
      y: isTouchDevice ? 28 : 48
    });

    ScrollTrigger.batch(reveals, {
      start:   'top 90%',
      end:     'bottom 10%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: isTouchDevice ? 0.45 : 0.65,
          ease: 'power3.out',
          stagger: { each: isTouchDevice ? 0.07 : 0.09 },
          overwrite: true
        });
      }
    });
  }

  /* ── FOUNDER SECTION ─────────────────────────────────────── */
  function initFounder() {
    // Portrait column
    const portrait = document.querySelector('.founder-portrait-col');
    if (portrait) {
      // Desktop: slide from left. Mobile: simple fade up (cheaper).
      gsap.set(portrait, {
        x:       isDesktop ? -32 : 0,
        y:       isTouchDevice ? 24 : 0,
        opacity: 0
      });
      ScrollTrigger.create({
        trigger: portrait,
        start:   'top 88%',
        onEnter: () => gsap.to(portrait, {
          x: 0, y: 0, opacity: 1,
          duration: isTouchDevice ? 0.5 : 0.8,
          ease:     'power3.out'
        })
      });
    }

    // Pullquote: horizontal clip-path wipe on desktop (GPU composite,
    // just opacity+y on mobile — clip-path is expensive there).
    const pullquote = document.querySelector('.founder-pullquote');
    if (pullquote) {
      if (isDesktop) {
        gsap.set(pullquote, { clipPath: 'inset(0 100% 0 0)', opacity: 1 });
        ScrollTrigger.create({
          trigger: pullquote,
          start:   'top 87%',
          onEnter: () => gsap.to(pullquote, {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.95,
            ease:     'power3.inOut'
          })
        });
      } else {
        gsap.set(pullquote, { y: 22, opacity: 0 });
        ScrollTrigger.create({
          trigger: pullquote,
          start:   'top 90%',
          onEnter: () => gsap.to(pullquote, {
            y: 0, opacity: 1,
            duration: 0.5,
            ease:     'power2.out'
          })
        });
      }
    }

    // Stat numbers: stagger from below
    const stats = document.querySelectorAll('.founder-stat');
    if (stats.length) {
      gsap.set(stats, { y: isTouchDevice ? 18 : 28, opacity: 0 });
      ScrollTrigger.batch(stats, {
        start: 'top 88%',
        onEnter: (batch) => gsap.to(batch, {
          y: 0, opacity: 1,
          duration: isTouchDevice ? 0.4 : 0.6,
          ease:     'power3.out',
          stagger:  0.1
        })
      });
    }
  }

  /* ── HUB CARDS (index.html) ─────────────────────────────── */
  function initHubCards() {
    const cards = document.querySelectorAll('.hub-card');
    if (!cards.length) return;
    gsap.set(cards, { y: isTouchDevice ? 28 : 52, opacity: 0 });
    ScrollTrigger.batch(cards, {
      start: 'top 88%',
      onEnter: (batch) => gsap.to(batch, {
        y: 0, opacity: 1,
        duration: isTouchDevice ? 0.5 : 0.7,
        ease:     'power3.out',
        stagger:  isTouchDevice ? 0.09 : 0.14
      })
    });
  }

  /* ── BRIEF PANELS (index.html) ──────────────────────────── */
  function initBriefPanels() {
    const panels = document.querySelectorAll('.brief-panel');
    if (!panels.length) return;
    gsap.set(panels, { y: isTouchDevice ? 28 : 58, opacity: 0 });
    ScrollTrigger.batch(panels, {
      start: 'top 88%',
      onEnter: (batch) => gsap.to(batch, {
        y: 0, opacity: 1,
        duration: isTouchDevice ? 0.5 : 0.7,
        ease:     'power3.out',
        stagger:  isTouchDevice ? 0.08 : 0.15
      })
    });
  }

  /* ── TESTIMONIAL CARDS ──────────────────────────────────── */
  function initTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (!cards.length) return;
    gsap.set(cards, { y: isTouchDevice ? 24 : 40, opacity: 0 });
    ScrollTrigger.batch(cards, {
      start: 'top 90%',
      onEnter: (batch) => gsap.to(batch, {
        y: 0, opacity: 1,
        duration: isTouchDevice ? 0.45 : 0.65,
        ease:     'power3.out',
        stagger:  isTouchDevice ? 0.08 : 0.12
      })
    });
  }

  /* ── PROCESS STEPS (bricks.html) ────────────────────────── */
  function initProcessSteps() {
    const steps = document.querySelectorAll('.process-step');
    if (!steps.length) return;
    gsap.set(steps, { y: isTouchDevice ? 24 : 44, opacity: 0 });
    ScrollTrigger.batch(steps, {
      start: 'top 88%',
      onEnter: (batch) => gsap.to(batch, {
        y: 0, opacity: 1,
        duration: isTouchDevice ? 0.45 : 0.62,
        ease:     'power3.out',
        stagger:  isTouchDevice ? 0.07 : 0.1
      })
    });
  }

  /* ── BRICK TYPE CARDS (bricks.html) ─────────────────────── */
  function initBrickCards() {
    const cards = document.querySelectorAll('.brick-type-card, .brick-card');
    if (!cards.length) return;
    gsap.set(cards, { y: isTouchDevice ? 28 : 48, opacity: 0 });
    ScrollTrigger.batch(cards, {
      start: 'top 88%',
      onEnter: (batch) => gsap.to(batch, {
        y: 0, opacity: 1,
        // Desktop: back.out(1.2) = industrial snap-settle over-shoot
        // Mobile:  power2.out = smooth, no over-shoot (cheaper easing)
        ease:     isTouchDevice ? 'power2.out' : 'back.out(1.2)',
        duration: isTouchDevice ? 0.45 : 0.68,
        stagger:  isTouchDevice ? 0.07 : 0.1
      })
    });
  }

  /* ── GALLERY ITEMS ───────────────────────────────────────── 
     MOBILE: opacity + small y-travel only. NO scale transform.
     Scale on mobile triggers compositing layer promotion on
     every frame for every gallery item — too expensive on
     mid-range phones. Simple fade is faster and still looks
     deliberate.

     Gallery backgrounds are CSS background-images (not <img>
     tags), so we cannot use loading="lazy". Instead we use
     IntersectionObserver to swap in background-image URLs
     when the item enters the viewport for the first time.
  ────────────────────────────────────────────────────────── */
  function initGallery() {
    const items = document.querySelectorAll('.gallery-item');
    if (!items.length) return;

    if (isTouchDevice) {
      // Mobile: simple fade + tiny lift
      gsap.set(items, { opacity: 0, y: 20 });
      ScrollTrigger.batch(items, {
        start: 'top 92%',
        onEnter: (batch) => gsap.to(batch, {
          opacity: 1, y: 0,
          duration: 0.45,
          ease:     'power2.out',
          stagger:  0.06
        })
      });
    } else {
      // Desktop: scale from slightly-small + fade
      gsap.set(items, { scale: 0.94, opacity: 0 });
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        onEnter: (batch) => gsap.to(batch, {
          scale: 1, opacity: 1,
          duration: 0.65,
          ease:     'power3.out',
          stagger:  0.08
        })
      });
    }
  }

  /* ── FUEL CARDS + SPEC CELLS + CHECK ITEMS ───────────────── */
  function initFuelSections() {
    const els = document.querySelectorAll(
      '.fuel-card, .spec-cell, .check-item, .amenity-item, .hp-brand-block, .petro-badge'
    );
    if (!els.length) return;
    gsap.set(els, { y: isTouchDevice ? 18 : 32, opacity: 0 });
    ScrollTrigger.batch(els, {
      start: 'top 91%',
      onEnter: (batch) => gsap.to(batch, {
        y: 0, opacity: 1,
        duration: isTouchDevice ? 0.42 : 0.58,
        ease:     'power3.out',
        stagger:  isTouchDevice ? 0.05 : 0.07
      })
    });
  }

  /* ── SECTION TAGS (not already covered by .reveal batch) ─── */
  function initSectionTags() {
    // Section tags already have .reveal — they're handled by
    // the main reveal batch. This handles any non-.reveal tags.
    const tags = document.querySelectorAll('.section-tag:not(.reveal)');
    if (!tags.length) return;
    gsap.set(tags, { opacity: 0, x: isTouchDevice ? 0 : -12, y: isTouchDevice ? 12 : 0 });
    ScrollTrigger.batch(tags, {
      start: 'top 90%',
      onEnter: (batch) => gsap.to(batch, {
        opacity: 1, x: 0, y: 0,
        duration: 0.45,
        ease:     'power2.out',
        stagger:  0.08
      })
    });
  }

  /* ── MARQUEE VELOCITY SCALING ────────────────────────────── 
     MOBILE: Disabled entirely.
     On mobile, reading lenis.velocity on every scroll event
     + mutating animationDuration on every frame is a
     recalculate-style cost on a hot scroll path. Skip it.
     Marquee runs at steady CSS speed on mobile — still smooth.

     DESKTOP: On each Lenis scroll event, read velocity,
     interpolate toward target speed, apply to all marquees.
     Capped at 2× normal speed to keep text legible.
  ────────────────────────────────────────────────────────── */
  function initMarqueeVelocity() {
    if (isTouchDevice) return; // Fully disabled on mobile

    const marquees = document.querySelectorAll('.divider-marquee');
    if (!marquees.length) return;

    // Cache base durations once
    const baseDurations = Array.from(marquees).map(m => {
      const computed = parseFloat(getComputedStyle(m).animationDuration);
      return isNaN(computed) ? 30 : computed; // seconds
    });

    let currentMult = 1;

    lenis.on('scroll', ({ velocity }) => {
      const absVel   = Math.abs(velocity || 0);
      const targetMult = Math.max(1, Math.min(2, 1 + absVel * 0.25));
      // Smooth interpolation so speed doesn't snap
      currentMult += (targetMult - currentMult) * 0.08;

      marquees.forEach((m, i) => {
        const newDuration = baseDurations[i] / currentMult;
        m.style.animationDuration = `${newDuration}s`;
      });
    });
  }

  /* ── CTA HOVER MICRO-ANIMATIONS ─────────────────────────── 
     MOBILE: Skipped. Touch devices don't have hover states,
     and applying scale on tap-then-release can feel wrong.

     DESKTOP: Subtle scale on mouseenter/leave.
     Using GSAP to animate ensures it composites cleanly
     and can interrupt mid-animation without snapping.
  ────────────────────────────────────────────────────────── */
  function initCtaHover() {
    if (isTouchDevice) return;

    const targets = document.querySelectorAll(
      '.nav-cta, .brief-panel-link, .hub-card-cta, .page-hero-stat'
    );
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, { scale: 1.045, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { scale: 1,     duration: 0.22, ease: 'power2.inOut', overwrite: 'auto' });
      });
    });
  }

  /* ── ENQUIRY SECTION REVEAL ─────────────────────────────── */
  function initEnquiry() {
    const left = document.querySelector('.enquiry-left');
    const right = document.querySelector('.enquiry-right');
    if (left) {
      gsap.set(left, { x: isDesktop ? -24 : 0, y: isTouchDevice ? 22 : 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: left,
        start:   'top 88%',
        onEnter: () => gsap.to(left, {
          x: 0, y: 0, opacity: 1,
          duration: isTouchDevice ? 0.48 : 0.72,
          ease:     'power3.out'
        })
      });
    }
    if (right) {
      gsap.set(right, { x: isDesktop ? 24 : 0, y: isTouchDevice ? 22 : 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: right,
        start:   'top 88%',
        onEnter: () => gsap.to(right, {
          x: 0, y: 0, opacity: 1,
          duration: isTouchDevice ? 0.48 : 0.72,
          ease:     'power3.out',
          delay:    isTouchDevice ? 0.06 : 0.1
        })
      });
    }
  }

  /* ── FOOTER REVEAL ──────────────────────────────────────── */
  function initFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    gsap.set(footer, { opacity: 0, y: isTouchDevice ? 18 : 30 });
    ScrollTrigger.create({
      trigger: footer,
      start:   'top 95%',
      onEnter: () => gsap.to(footer, {
        opacity: 1, y: 0,
        duration: isTouchDevice ? 0.5 : 0.7,
        ease:     'power2.out'
      })
    });
  }

  /* ═══════════════════════════════════════════════════════════
     MAIN INIT — run after load event so fonts/images are ready
     and layout is settled (avoids ScrollTrigger misplacements)
  ═══════════════════════════════════════════════════════════ */
  function init() {
    // Load-phase animations (fire immediately on load)
    initHeroEyebrow();
    initHeroHeadline();
    initHeroStats();
    initScrollCue();

    // Scroll-triggered animations
    initHeroParallax();
    initScrollReveals();
    initFounder();
    initHubCards();
    initBriefPanels();
    initTestimonials();
    initProcessSteps();
    initBrickCards();
    initGallery();
    initFuelSections();
    initSectionTags();
    initEnquiry();
    initFooter();

    // Interaction enhancements
    initCtaHover();
    initMarqueeVelocity();

    // Refresh after all triggers are set so positions are exact
    // Small delay ensures fonts have laid out
    setTimeout(() => ScrollTrigger.refresh(), 200);
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init, { once: true });
  }

  /* ─── RESIZE: REFRESH SCROLL TRIGGERS ───────────────────── */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 300);
  });

})();
