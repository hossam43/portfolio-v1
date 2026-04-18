/* ===================== SCRIPT ADDITIONS ===================== */
/* Instructions: paste this ENTIRE file's content into your script.js,
   replacing the sections marked below. The rest of your script.js stays identical. */

// ─────────────────────────────────────────────────────────
// 1. REPLACE your existing startHeroAnim() with this version
//    (adds 500ms delay before hero elements appear)
// ─────────────────────────────────────────────────────────
function startHeroAnim() {
  const eyebrow  = document.getElementById('h-eyebrow');
  const name     = document.getElementById('h-name');
  const nameInner= name.querySelector('.hero-name-inner');
  const role     = document.getElementById('h-role');
  const desc     = document.getElementById('h-desc');
  const cta      = document.getElementById('h-cta');
  const msBadge  = document.getElementById('ms-hero-badge');

  function anim(el, delay, props) {
    if (!el) return;
    setTimeout(() => {
      el.style.transition = `opacity 0.9s cubic-bezier(0.165,0.84,0.44,1),transform 0.9s cubic-bezier(0.165,0.84,0.44,1)`;
      Object.assign(el.style, props);
    }, delay);
  }

  const OFFSET = 500; // ← 0.5 s delay after preloader exits

  if (msBadge) anim(msBadge, OFFSET + 0,   { opacity: '1', transform: 'translateY(0)' });
  anim(eyebrow,              OFFSET + 120,  { opacity: '1', transform: 'translateY(0)' });
  setTimeout(() => {
    name.style.opacity = '1';
    nameInner.style.transition = 'transform 1s cubic-bezier(0.165,0.84,0.44,1)';
    nameInner.style.transform  = 'translateY(0)';
  }, OFFSET + 320);
  anim(role, OFFSET + 620,  { opacity: '1', transform: 'translateY(0)' });
  anim(desc, OFFSET + 820,  { opacity: '1', transform: 'translateY(0)' });
  anim(cta,  OFFSET + 1020, { opacity: '1', transform: 'translateY(0)' });
}


// ─────────────────────────────────────────────────────────
// 2. LANGUAGE TOGGLE — add this block (self-contained, add near top of script)
// ─────────────────────────────────────────────────────────
(function initLangToggle() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  const translations = {
    en: {
      // Hero
      'h-eyebrow-text':      'Available for projects · Alexandria, Egypt',
      'h-role-1':            'Technical Advisor',
      'h-role-2':            'GIS Specialist',
      'h-role-3':            'Cloud Consultant',
      'h-desc':              'Building premium digital experiences at the intersection of frontend engineering, geospatial intelligence, and cloud architecture.',
      'hero-btn-cv':         'Download CV',
      'hero-btn-contact':    'Get in Touch',
      // About
      'about-title-line1':   'Building the',
      'about-title-span':    'Next-Level',
      'about-title-line3':   'Digital World',
      'about-p1':            'Passionate <strong>Frontend Developer</strong> with a deep background in <strong>Geographic Information Systems (GIS)</strong>, I craft seamless, user-centric web experiences that blend technical depth with design precision.',
      'about-p2':            'Specializing in immersive 3D experiences with Three.js, interactive geospatial visualizations, and enterprise cloud architecture. My work sits at the intersection of design and engineering.',
      'about-p3':            '✦ Available for immediate calls and project consultations',
      'about-btn':           'Learn More / Connect',
      'about-stat-1-label':  'Years Experience',
      'about-stat-2-label':  'Projects Delivered',
      'about-stat-3-label':  'Core Specialties',
      // Services
      'svc-title':           'My Services',
      'svc1-title':          'Frontend Development',
      'svc1-desc':           'Building high-performance, pixel-perfect web applications with modern frameworks. Specializing in complex animations, 3D experiences, and interactive interfaces.',
      'svc2-title':          'GIS Solutions',
      'svc2-desc':           'Transforming complex geospatial data into stunning interactive map experiences. Custom web mapping, spatial analysis, and geospatial application development.',
      'svc3-title':          'Cloud Consulting',
      'svc3-desc':           'Strategic cloud architecture consulting for scalable, resilient applications. From infrastructure design to deployment optimization and performance tuning.',
      // Contact
      'contact-tagline-1':   'Ready to',
      'contact-tagline-2':   'Start',
      'contact-tagline-3':   'Something?',
      'contact-sub':         'Let\'s collaborate on your next project. Whether it\'s a complex web application, a geospatial solution, or cloud architecture.',
      // Nav tooltips
      'nav-home':    'Home',
      'nav-about':   'About',
      'nav-proj':    'Projects',
      'nav-svc':     'Services',
      'nav-contact': 'Contact',
    },
    de: {
      'h-eyebrow-text':      'Verfügbar für Projekte · Alexandria, Ägypten',
      'h-role-1':            'Technischer Berater',
      'h-role-2':            'GIS Spezialist',
      'h-role-3':            'Cloud Consultant',
      'h-desc':              'Premium digitale Erlebnisse an der Schnittstelle von Frontend-Engineering, Geointelligenz und Cloud-Architektur.',
      'hero-btn-cv':         'Lebenslauf herunterladen',
      'hero-btn-contact':    'Kontakt aufnehmen',
      'about-title-line1':   'Die digitale',
      'about-title-span':    'Zukunft',
      'about-title-line3':   'gestalten',
      'about-p1':            'Leidenschaftlicher <strong>Frontend-Entwickler</strong> mit umfangreichem Hintergrund in <strong>Geographischen Informationssystemen (GIS)</strong> — ich entwickle nahtlose, nutzerzentrierte Weberlebnisse.',
      'about-p2':            'Spezialisiert auf immersive 3D-Erlebnisse mit Three.js, interaktive Geovisualisierungen und Cloud-Architektur auf Enterprise-Niveau.',
      'about-p3':            '✦ Sofort verfügbar für Gespräche und Projektberatungen',
      'about-btn':           'Mehr erfahren / Kontakt',
      'about-stat-1-label':  'Jahre Erfahrung',
      'about-stat-2-label':  'Abgeschlossene Projekte',
      'about-stat-3-label':  'Kernspezialisierungen',
      'svc-title':           'Meine Leistungen',
      'svc1-title':          'Frontend-Entwicklung',
      'svc1-desc':           'Hochleistungsfähige, pixelgenaue Webanwendungen mit modernen Frameworks — spezialisiert auf komplexe Animationen, 3D-Erlebnisse und interaktive Interfaces.',
      'svc2-title':          'GIS-Lösungen',
      'svc2-desc':           'Komplexe Geodaten in beeindruckende interaktive Kartenerlebnisse verwandeln. Individuelle Web-Kartierung, räumliche Analysen und Geoanwendungsentwicklung.',
      'svc3-title':          'Cloud Consulting',
      'svc3-desc':           'Strategische Cloud-Architekturberatung für skalierbare, resiliente Anwendungen — von der Infrastrukturplanung bis zur Deployment-Optimierung.',
      'contact-tagline-1':   'Bereit für',
      'contact-tagline-2':   'etwas',
      'contact-tagline-3':   'Neues?',
      'contact-sub':         'Lassen Sie uns bei Ihrem nächsten Projekt zusammenarbeiten — ob Web-App, Geolösung oder Cloud-Architektur.',
      'nav-home':    'Startseite',
      'nav-about':   'Über mich',
      'nav-proj':    'Projekte',
      'nav-svc':     'Leistungen',
      'nav-contact': 'Kontakt',
    }
  };

  let currentLang = 'en';

  const flagEmoji = { en: '🇬🇧', de: '🇩🇪' };
  const langNames = { en: 'EN', de: 'DE' };

  function applyLang(lang) {
    const t = translations[lang];
    const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
    const setText = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
    const setQ = (sel, html) => { const el = document.querySelector(sel); if (el) el.innerHTML = html; };

    // eyebrow
    const eyebrowSpan = document.querySelector('#h-eyebrow span:last-child');
    if (eyebrowSpan) eyebrowSpan.textContent = t['h-eyebrow-text'];

    // hero roles
    const roles = document.querySelectorAll('.hero-role, .hero-role-highlight');
    if (roles[0]) roles[0].textContent = t['h-role-1'];
    if (roles[1]) roles[1].textContent = t['h-role-2'];
    if (roles[2]) roles[2].textContent = t['h-role-3'];

    const descEl = document.getElementById('h-desc');
    if (descEl) descEl.textContent = t['h-desc'];

    // hero buttons
    const cvBtn = document.querySelector('.btn-primary span');
    if (cvBtn) cvBtn.textContent = t['hero-btn-cv'];

    // about paras
    const paras = document.querySelectorAll('.about-para');
    if (paras[0]) paras[0].innerHTML = t['about-p1'];
    if (paras[1]) paras[1].textContent = t['about-p2'];
    if (paras[2]) paras[2].textContent = t['about-p3'];

    // about stats labels
    const statLabels = document.querySelectorAll('.about-stat-label');
    if (statLabels[0]) statLabels[0].textContent = t['about-stat-1-label'];
    if (statLabels[1]) statLabels[1].textContent = t['about-stat-2-label'];
    if (statLabels[2]) statLabels[2].textContent = t['about-stat-3-label'];

    // services
    const svcTitles = document.querySelectorAll('.service-title');
    if (svcTitles[0]) svcTitles[0].textContent = t['svc1-title'];
    if (svcTitles[1]) svcTitles[1].textContent = t['svc2-title'];
    if (svcTitles[2]) svcTitles[2].textContent = t['svc3-title'];
    const svcDescs = document.querySelectorAll('.service-desc');
    if (svcDescs[0]) svcDescs[0].textContent = t['svc1-desc'];
    if (svcDescs[1]) svcDescs[1].textContent = t['svc2-desc'];
    if (svcDescs[2]) svcDescs[2].textContent = t['svc3-desc'];

    // update toggle UI
    toggle.querySelector('.lang-flag').textContent = flagEmoji[lang === 'en' ? 'de' : 'en']; // show OTHER flag (what you'll switch TO)
    toggle.querySelector('.lang-label').textContent = lang === 'en' ? 'DE' : 'EN';

    document.documentElement.lang = lang;
  }

  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    applyLang(currentLang);
  });
})();


// ─────────────────────────────────────────────────────────
// 3. REPLACE your PROJECTS_DATA rendering (main list) with this version
//    It replaces .proj-tools with icon-based rendering + carousel in the image box.
// ─────────────────────────────────────────────────────────

// Devicon CDN base
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

// Map tool names → devicon slugs (icon-name, variant)
const TOOL_ICONS = {
  'HTML5':      ['html5','original'],
  'CSS3':       ['css3','original'],
  'JavaScript': ['javascript','original'],
  'React':      ['react','original'],
  'React.js':   ['react','original'],
  'Three.js':   ['threejs','original'],
  'GSAP':       ['gsap','original'],
  'WebGL':      ['opengl','original'],
  'Mapbox GL':  ['mapbox','original'],
  'Leaflet':    ['leaflet','original'],
  'ArcGIS':     ['arcgis','original'],
  'QGIS':       ['qgis','original'],
  'Python':     ['python','original'],
  'D3.js':      ['d3js','original'],
  'Figma':      ['figma','original'],
  'GitHub':     ['github','original'],
  'GeoJSON':    ['javascript','original'], // no devicon, fallback
  'Chart.js':   ['javascript','original'],
  'AWS SDK':    ['amazonwebservices','original'],
  'PostgreSQL': ['postgresql','original'],
  'Node.js':    ['nodejs','original'],
  'Vue':        ['vuejs','original'],
  'TypeScript': ['typescript','original'],
  'Squoosh':    ['javascript','original'],
  'Adobe Photoshop': ['photoshop','original'],
};

function getToolIconHTML(tool) {
  const entry = TOOL_ICONS[tool];
  if (entry) {
    const [name, variant] = entry;
    return `<div class="proj-tool-icon">
      <img src="${DEVICON}${name}/${name}-${variant}.svg" alt="${tool}" title="${tool}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=proj-tool>${tool}</span>'"/>
      <span>${tool}</span>
    </div>`;
  }
  return `<span class="proj-tool">${tool}</span>`;
}

// Carousel slide data per project (add/edit freely)
// Each slide: { img: url, label: 'Phase name' }
const PROJECT_SLIDES = {
  'ASL Academy': [
    { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=70&fit=crop', label: 'Planning Phase' },
    { img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=700&q=70&fit=crop', label: 'UI Design' },
    { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=70&fit=crop', label: 'Development' },
  ],
  'CryptoPrecision': [
    { img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&q=70&fit=crop', label: 'Concept' },
    { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=70&fit=crop', label: 'Design System' },
  ],
  'Omnifood': [
    { img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=70&fit=crop', label: 'Planning' },
    { img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=70&fit=crop', label: 'Color System' },
    { img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=70&fit=crop', label: 'Final Build' },
  ],
  'Medicine Market': [
    { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=70&fit=crop', label: 'System Design' },
    { img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=70&fit=crop', label: 'UI Components' },
  ],
  'GIS City Viewer': [
    { img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=70&fit=crop', label: 'Map Architecture' },
    { img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=70&fit=crop', label: 'Data Layers' },
    { img: 'https://images.unsplash.com/photo-1529928520614-7877dd3a2f3a?w=700&q=70&fit=crop', label: '3D Visualization' },
  ],
  'Cloud Dashboard': [
    { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=70&fit=crop', label: 'Architecture' },
    { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=70&fit=crop', label: 'Dashboard Design' },
  ],
};

function buildCarousel(slides) {
  const fallback = [{ img: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=700&q=70&fit=crop', label: 'Preview' }];
  const items = slides && slides.length ? slides : fallback;

  const dotsHTML = items.map((_, i) =>
    `<div class="proj-carousel-dot ${i===0?'active':''}" data-idx="${i}"></div>`
  ).join('');

  const slidesHTML = items.map(s => `
    <div class="proj-carousel-slide">
      <img src="${s.img}" alt="${s.label}" loading="lazy"/>
      <div class="proj-carousel-slide-label">${s.label}</div>
    </div>`).join('');

  return `
    <div class="proj-carousel-wrap">
      <div class="proj-carousel-track">${slidesHTML}</div>
      ${items.length > 1 ? `
        <button class="proj-carousel-btn prev">‹</button>
        <button class="proj-carousel-btn next">›</button>
        <div class="proj-carousel-dots">${dotsHTML}</div>
      ` : ''}
    </div>`;
}

function initCarousel(container) {
  const track = container.querySelector('.proj-carousel-track');
  if (!track) return;
  const slides = track.querySelectorAll('.proj-carousel-slide');
  const dots   = container.querySelectorAll('.proj-carousel-dot');
  let current  = 0;

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d,i) => d.classList.toggle('active', i === current));
  }

  container.querySelector('.proj-carousel-btn.prev')?.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  container.querySelector('.proj-carousel-btn.next')?.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
  dots.forEach(d => d.addEventListener('click', e => { e.stopPropagation(); goTo(+d.dataset.idx); }));
}

// ── Rebuild main projects list ──
// Call this INSTEAD of (or right after) the original main-projects list block.
// Replace the entire "MAIN PROJECTS LIST" section in your script.js with this:

(function buildMainProjectsList() {
  const mainList = document.getElementById('main-projects-list');
  if (!mainList) return;
  mainList.innerHTML = '';

  PROJECTS_DATA.slice(0, 6).forEach((p, i) => {
    const slides = PROJECT_SLIDES[p.title] || null;
    const row = document.createElement('div');
    row.className = 'project-row';
    row.innerHTML = `
      <div class="project-row-header" data-idx="${i}">
        <span class="proj-num">0${i + 1}</span>
        <h3 class="proj-title">${p.title}</h3>
        <div class="proj-tags">
          ${p.filters.filter(f => f !== 'all').map(f => `<span class="proj-tag">${f}</span>`).join('')}
        </div>
        <span class="proj-year">${p.year}</span>
        <svg class="proj-arrow" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
        </svg>
      </div>
      <div class="project-row-body" id="prb-${i}">
        <div class="project-row-inner">
          <div class="proj-details">
            <div class="proj-detail-row">
              <span class="proj-detail-label">My Contribution</span>
              <span class="proj-detail-val">${p.contrib}</span>
            </div>
            <div class="proj-detail-row">
              <span class="proj-detail-label">Business Problem Solved</span>
              <span class="proj-detail-val">${p.problem}</span>
            </div>
            <div class="proj-detail-row">
              <span class="proj-detail-label">Tools Used</span>
              <div class="proj-tool-icons">
                ${p.tools.map(t => getToolIconHTML(t)).join('')}
              </div>
            </div>
            <div class="proj-links">
              <a href="${p.site}" class="proj-link" target="_blank">↗ Live Demo</a>
              <a href="${p.github}" class="proj-link" target="_blank">⌥ GitHub</a>
            </div>
          </div>
          <div class="proj-image-box">
            ${buildCarousel(slides)}
          </div>
        </div>
      </div>`;
    mainList.appendChild(row);

    // toggle open/close
    row.querySelector('.project-row-header').addEventListener('click', () => {
      const body  = document.getElementById(`prb-${i}`);
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.project-row-body').forEach(b => b.classList.remove('open'));
      if (!isOpen) {
        body.classList.add('open');
        // init carousel after open (so dimensions are correct)
        initCarousel(body);
      }
    });
  });
})();