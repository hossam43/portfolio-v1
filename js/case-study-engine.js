/**
 * CASE STUDY ENGINE — case-study.js
 * ─────────────────────────────────────────────────────────────
 * A pure JS renderer + animation controller.
 * Renders any project data object into the full case study page.
 *
 * USAGE:
 *   import { renderCaseStudy } from './case-study.js';
 *   import { GIS_CITY_VIEWER }  from './data/projects.js';
 *
 *   renderCaseStudy('#cs-root', GIS_CITY_VIEWER);
 *
 * That's it. Swap the data object for a different project.
 * ─────────────────────────────────────────────────────────────
 */

'use strict';

/* ── SECTION IDS (used for progress nav) ─────────────────────── */
const SECTIONS = [
  { id: 'cs-context',    label: 'Context'   },
  { id: 'cs-problem',    label: 'Problem'   },
  { id: 'cs-thinking',   label: 'Thinking'  },
  { id: 'cs-process',    label: 'Process'   },
  { id: 'cs-solution',   label: 'Solution'  },
  { id: 'cs-impact',     label: 'Impact'    },
  { id: 'cs-reflection', label: 'Reflection'},
];

/* ════════════════════════════════════════════════════════════════
   RENDER — HTML BUILDERS
   Each function returns an HTML string.
   ════════════════════════════════════════════════════════════════ */

function renderHero(d) {
  const meta = d;
  return /* html */`
  <section class="cs-hero" id="cs-hero">
    <div class="cs-hero__cover">
      <img src="${d.hero.coverImage}" alt="${d.hero.title}" loading="eager"/>
      <div class="cs-hero__cover-overlay"></div>
      <div class="cs-hero__cover-grain"></div>
    </div>

    <div class="cs-hero__content">
      <div class="cs-hero__eyebrow">
        <span>${d.hero.eyebrow}</span>
      </div>

      <h1 class="cs-hero__title">${d.hero.title}</h1>

      <p class="cs-hero__subtitle"><em>${d.hero.subtitle}</em></p>

      <div class="cs-hero__meta">
        <div class="cs-hero__meta-item">
          <span class="cs-hero__meta-item-label">Year</span>
          <span class="cs-hero__meta-item-val">${d.year}</span>
        </div>
        <div class="cs-hero__meta-divider"></div>
        <div class="cs-hero__meta-item">
          <span class="cs-hero__meta-item-label">Duration</span>
          <span class="cs-hero__meta-item-val">${d.duration}</span>
        </div>
        <div class="cs-hero__meta-divider"></div>
        <div class="cs-hero__meta-item">
          <span class="cs-hero__meta-item-label">Role</span>
          <span class="cs-hero__meta-item-val">${d.role}</span>
        </div>
        <div class="cs-hero__meta-divider"></div>
        <div class="cs-hero__meta-item">
          <span class="cs-hero__meta-item-label">Status</span>
          <span class="cs-hero__meta-item-val">${d.status}</span>
        </div>
      </div>

      <div class="cs-hero__tags">
        ${d.hero.tags.map(t => `<span class="cs-hero__tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="cs-hero__scroll">
      <div class="cs-hero__scroll-line"></div>
      Scroll
    </div>
  </section>`;
}

function renderContext(d) {
  const c = d.context;
  return /* html */`
  <section class="cs-section" id="cs-context">
    <div class="cs-container">
      <div class="cs-section-label"><span>${c.label}</span></div>

      <h2 class="cs-h2 cs-reveal" style="margin-bottom:4rem;">${c.heading}</h2>

      <div class="cs-context__body-wrap">
        <div>
          ${c.body.map((p, i) =>
            `<p class="cs-body cs-reveal cs-reveal-d${i+1}" style="margin-bottom:2rem;">${p}</p>`
          ).join('')}
        </div>
        <div class="cs-context__stat cs-reveal cs-reveal--right cs-reveal-d2">
          <span class="cs-context__stat-val">
            ${c.stat.value}<span class="cs-context__stat-unit">${c.stat.unit}</span>
          </span>
          <p class="cs-context__stat-label">${c.stat.label}</p>
        </div>
      </div>
    </div>
  </section>`;
}

function renderProblem(d) {
  const p = d.problem;
  return /* html */`
  <section class="cs-section" id="cs-problem" style="background:var(--cs-bg-2);">
    <div class="cs-container--wide">
      <div class="cs-section-label cs-reveal"><span>${p.label}</span></div>

      <p class="cs-problem__statement cs-reveal cs-reveal-d1">
        ${p.heading.replace(/\./g, '.<em style="opacity:0"> </em>')}
      </p>

      <div class="cs-challenges cs-reveal cs-reveal-d2">
        ${p.challenges.map(ch => /* html */`
          <div class="cs-challenge">
            <span class="cs-challenge__icon">${ch.icon}</span>
            <h3 class="cs-challenge__title">${ch.title}</h3>
            <p class="cs-challenge__desc">${ch.desc}</p>
          </div>
        `).join('')}
      </div>

      <p class="cs-body cs-reveal cs-reveal-d3" style="margin-top:4rem;max-width:700px;">${p.body}</p>
    </div>
  </section>`;
}

function renderThinking(d) {
  const t = d.thinking;
  return /* html */`
  <section class="cs-section cs-thinking" id="cs-thinking">
    <div class="cs-container--wide">
      <div class="cs-section-label cs-reveal"><span>${t.label}</span></div>
      <h2 class="cs-h2 cs-reveal cs-reveal-d1" style="margin-bottom:5rem;">${t.heading}</h2>

      <div class="cs-decisions cs-reveal cs-reveal-d2">
        ${t.decisions.map(dec => /* html */`
          <div class="cs-decision">
            <div class="cs-decision__q-col">
              <p class="cs-decision__q">The question</p>
              <h3 class="cs-decision__question">${dec.question}</h3>
            </div>
            <div class="cs-decision__a-col">
              <p class="cs-decision__answer">${dec.answer}</p>
              <span class="cs-decision__outcome">${dec.outcome}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderProcess(d) {
  const p = d.process;
  return /* html */`
  <section class="cs-section" id="cs-process">
    <div class="cs-container">
      <div class="cs-section-label cs-reveal"><span>${p.label}</span></div>
      <h2 class="cs-h2 cs-reveal cs-reveal-d1" style="margin-bottom:5rem;">${p.heading}</h2>

      <div class="cs-process-steps">
        ${p.steps.map((step, i) => /* html */`
          <div class="cs-step" data-step-index="${i}">
            <div class="cs-step__left">
              <span class="cs-step__number">${step.number}</span>
              <span class="cs-step__tag">${step.tag}</span>
            </div>
            <div class="cs-step__right">
              <h3 class="cs-step__title">${step.title}</h3>
              <p class="cs-step__body">${step.body}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderSolution(d) {
  const s = d.solution;
  return /* html */`
  <section class="cs-section cs-solution" id="cs-solution">
    <div class="cs-container--wide">
      <div class="cs-section-label cs-reveal"><span>${s.label}</span></div>

      <p class="cs-solution__intro cs-reveal cs-reveal-d1">${s.body}</p>

      <div class="cs-features cs-reveal cs-reveal-d2">
        ${s.features.map(f => /* html */`
          <div class="cs-feature">
            <span class="cs-feature__icon">${f.icon}</span>
            <h4 class="cs-feature__title">${f.title}</h4>
            <p class="cs-feature__desc">${f.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="cs-solution__images cs-reveal cs-reveal-d3">
        ${s.images.map(img => /* html */`
          <div class="cs-solution__img-wrap">
            <img src="${img.src}" alt="${img.caption}" loading="lazy"/>
            <div class="cs-solution__img-caption">${img.caption}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderImpact(d) {
  const imp = d.impact;
  return /* html */`
  <section class="cs-section" id="cs-impact">
    <div class="cs-container--wide">
      <div class="cs-section-label cs-reveal"><span>${imp.label}</span></div>
      <h2 class="cs-h2 cs-reveal cs-reveal-d1" style="margin-bottom:5rem;">${imp.heading}</h2>

      <div class="cs-metrics cs-reveal cs-reveal-d2">
        ${imp.metrics.map(m => /* html */`
          <div class="cs-metric">
            <span class="cs-metric__value" data-target="${m.value}">${m.value}</span>
            <p class="cs-metric__label">${m.label}</p>
            <p class="cs-metric__sub">${m.sub}</p>
          </div>
        `).join('')}
      </div>

      <blockquote class="cs-impact__quote cs-reveal cs-reveal-d3">
        <p class="cs-impact__quote-text">${imp.quote.text}</p>
        <cite class="cs-impact__quote-author">— ${imp.quote.author}</cite>
      </blockquote>
    </div>
  </section>`;
}

function renderReflection(d) {
  const r = d.reflection;
  return /* html */`
  <section class="cs-section cs-reflection" id="cs-reflection">
    <div class="cs-container">
      <div class="cs-section-label cs-reveal"><span>${r.label}</span></div>
      <h2 class="cs-h2 cs-reveal cs-reveal-d1" style="margin-bottom:5rem;">${r.heading}</h2>

      <div class="cs-lessons cs-reveal cs-reveal-d2">
        ${r.lessons.map(l => /* html */`
          <div class="cs-lesson">
            <span class="cs-lesson__tag">${l.tag}</span>
            <p class="cs-lesson__body">${l.body}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}

function renderNavigation(d) {
  const nav = d.navigation;
  return /* html */`
  <nav class="cs-nav">
    ${nav.prev ? /* html */`
      <a href="case-study.html?project=${nav.prev.slug}" class="cs-nav__item">
        <span class="cs-nav__dir">← Previous</span>
        <span class="cs-nav__title">${nav.prev.title}</span>
      </a>` : '<div class="cs-nav__item" style="pointer-events:none;opacity:0.3;"><span class="cs-nav__dir">←</span><span class="cs-nav__title">—</span></div>'}
    ${nav.next ? /* html */`
      <a href="case-study.html?project=${nav.next.slug}" class="cs-nav__item">
        <span class="cs-nav__dir">Next →</span>
        <span class="cs-nav__title">${nav.next.title}</span>
      </a>` : '<div class="cs-nav__item" style="pointer-events:none;opacity:0.3;"><span class="cs-nav__dir">→</span><span class="cs-nav__title">—</span></div>'}
  </nav>`;
}

function renderProgressNav() {
  return /* html */`
  <nav class="cs-progress-nav" id="cs-progress-nav">
    ${SECTIONS.map(s => /* html */`
      <div class="cs-progress-nav__item" data-target="${s.id}">
        <div class="cs-progress-nav__dot"></div>
        <span class="cs-progress-nav__label">${s.label}</span>
      </div>
    `).join('')}
  </nav>`;
}

function renderReadingBar() {
  return `<div class="cs-reading-bar" id="cs-reading-bar"></div>`;
}

function renderBackButton() {
  return /* html */`
  <a href="index.html" class="cs-back-btn">
    <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
    </svg>
    Portfolio
  </a>`;
}

/* ════════════════════════════════════════════════════════════════
   ANIMATION ENGINE
   ════════════════════════════════════════════════════════════════ */

function initAnimations() {

  /* ── Scroll-reveal (all .cs-reveal elements) ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.cs-reveal').forEach(el => revealObs.observe(el));

  /* ── Process steps — staggered reveal ── */
  const stepObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.stepIndex) || 0;
        setTimeout(() => {
          e.target.classList.add('visible');
        }, idx * 120);
        stepObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.cs-step').forEach(el => stepObs.observe(el));

  /* ── Progress nav spy ── */
  const progressNav = document.getElementById('cs-progress-nav');
  const sectionEls  = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
  const navItems    = document.querySelectorAll('.cs-progress-nav__item');

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.dataset.target === id);
        });
      }
    });
  }, { threshold: 0.35 });

  sectionEls.forEach(el => sectionObs.observe(el));

  /* Show/hide progress nav after hero */
  const hero = document.getElementById('cs-hero');
  if (hero && progressNav) {
    const heroObs = new IntersectionObserver(entries => {
      progressNav.classList.toggle('visible', !entries[0].isIntersecting);
    }, { threshold: 0.1 });
    heroObs.observe(hero);
  }

  /* ── Progress nav click-scroll ── */
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = document.getElementById(item.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Reading bar ── */
  const bar = document.getElementById('cs-reading-bar');
  if (bar) {
    window.addEventListener('scroll', () => {
      const doc  = document.documentElement;
      const scrolled = doc.scrollTop;
      const total    = doc.scrollHeight - doc.clientHeight;
      bar.style.width = ((scrolled / total) * 100) + '%';
    }, { passive: true });
  }

  /* ── Hero cover zoom on scroll ── */
  const heroImg = document.querySelector('.cs-hero__cover img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      heroImg.style.transform = `scale(${1.04 + progress * 0.06})`;
      heroImg.style.filter = `grayscale(${60 - progress * 40}%) contrast(${1.05 + progress * 0.1})`;
    }, { passive: true });
  }

  /* ── Subtle parallax on section headings ── */
  const parallaxEls = document.querySelectorAll('.cs-h1, .cs-h2, .cs-display');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const rect   = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist   = (window.innerHeight / 2) - center;
      el.style.transform = `translateY(${dist * 0.02}px)`;
    });
  }, { passive: true });

  /* ── Hover micro-interaction: challenge cards lift ── */
  document.querySelectorAll('.cs-challenge, .cs-feature, .cs-metric').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'background 0.4s, transform 0.4s cubic-bezier(0.165,0.84,0.44,1)';
      card.style.transform = 'translateY(-3px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  /* ── Cursor integration (matches portfolio cursor) ── */
  const interactiveEls = document.querySelectorAll('a, button, .cs-challenge, .cs-feature, .cs-decision, .cs-lesson, .cs-nav__item');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ════════════════════════════════════════════════════════════════
   MAIN RENDER FUNCTION
   ════════════════════════════════════════════════════════════════ */

export function renderCaseStudy(rootSelector, data) {
  const root = typeof rootSelector === 'string'
    ? document.querySelector(rootSelector)
    : rootSelector;

  if (!root) {
    console.error('[CaseStudy] Root element not found:', rootSelector);
    return;
  }

  // Build full HTML
  root.innerHTML = /* html */`
    ${renderReadingBar()}
    ${renderBackButton()}
    ${renderProgressNav()}

    <main class="cs-page">
      ${renderHero(data)}
      ${renderContext(data)}
      ${renderProblem(data)}
      ${renderThinking(data)}
      ${renderProcess(data)}
      ${renderSolution(data)}
      ${renderImpact(data)}
      ${renderReflection(data)}
      ${renderNavigation(data)}
    </main>
  `;

  // Initialize after DOM is ready
  requestAnimationFrame(() => {
    initAnimations();
    // Kick hero image animation
    const img = root.querySelector('.cs-hero__cover img');
    if (img) setTimeout(() => { img.style.transform = 'scale(1)'; }, 200);
  });
}

/* ════════════════════════════════════════════════════════════════
   AUTO-INIT (for multi-project URL routing)
   Reads ?project=slug from the URL and picks the right data object
   ════════════════════════════════════════════════════════════════ */
export function autoInit(projectsMap) {
  const params  = new URLSearchParams(window.location.search);
  const slug    = params.get('project');
  const data    = slug ? projectsMap[slug] : Object.values(projectsMap)[0];

  if (!data) {
    console.error('[CaseStudy] No project found for slug:', slug);
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCaseStudy('#cs-root', data);

    // Update page title
    document.title = `${data.hero.title} — Case Study · Hossam Ayman`;
  });
}