// ── CURSOR ──
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
window.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + "px";
  dot.style.top = my + "px";
});
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animRing);
}
animRing();
document
  .querySelectorAll("a,button,.ab-tool-pill,.ab-ach-item,.ab-cloud-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });

// ── SCROLL REVEAL ──
const ro = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        ro.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".ab-reveal").forEach((el) => ro.observe(el));

// ── MOUSE PARALLAX ──
document.addEventListener("mousemove", (e) => {
  const cx = window.innerWidth / 2,
    cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx,
    dy = (e.clientY - cy) / cy;
  document.querySelectorAll(".ab-parallax-el").forEach((el) => {
    const s = parseFloat(el.dataset.speed) || 0.04;
    el.style.transform = `translate(${dx * s * 80}px, ${dy * s * 80}px)`;
  });
  // identity card subtle rotation
  const card = document.querySelector(".ab-identity-card");
  if (card) {
    const rotX = dy * -6;
    const rotY = dx * 6;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }
});

// ── MOBILE MENU ──
document
  .getElementById("mob-menu-btn")
  .addEventListener("click", () =>
    document.getElementById("mobile-menu").classList.add("open"),
  );
document
  .getElementById("mob-menu-close")
  .addEventListener("click", () =>
    document.getElementById("mobile-menu").classList.remove("open"),
  );
document
  .querySelectorAll("#mobile-menu a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.getElementById("mobile-menu").classList.remove("open"),
    ),
  );

// ── LANG TOGGLE (same as main site) ──
(function () {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  let lang = "en";
  const flip = { en: "de", de: "en" };
  const flags = { en: "🇬🇧", de: "🇩🇪" };

  const DE = {
    ".ab-hero-tag": "Die Geschichte von Hossam Ayman",
    ".ab-hero-sub":
      "Ein <strong>Technischer Berater bei Microsoft</strong>, GIS-Entwickler und Frontend-Engineer — das ist kein Lebenslauf. Das ist die Geschichte, wie Leidenschaft zum Beruf wurde.",
  };

  toggle.addEventListener("click", () => {
    lang = flip[lang];
    toggle.querySelector(".lang-flag").textContent = flags[flip[lang]]; // show OTHER flag
    toggle.querySelector(".lang-label").textContent =
      lang === "en" ? "DE" : "EN";
    document.documentElement.lang = lang;
    if (lang === "de") {
      Object.entries(DE).forEach(([sel, html]) => {
        const el = document.querySelector(sel);
        if (el) el.innerHTML = html;
      });
    }
  });
})();

// Certifications badges · JS

/* ════════════════════════════════════════════════════════════════
   CERTIFICATIONS & BADGES — behavior
   Drop-in vanilla JS. No dependencies.
   Edit the CERTS and BADGES arrays below with real data/images.
   ════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     DATA — replace with real certificates
  --------------------------------------------------------------- */
  const CERTS = [
    {
      id: "iti",
      title: "Inforamation Technology Institute - Geoinformatics Track",
      issuer: "ITI",
      date: "2022",
      category: "GIS",
      image: "../assets/images/certs/iti.JPG",
      description:
        "This Specialization is for those new to mapping and GIS, as well as anyone looking to gain a better understanding of how it all works and why. You will learn practical skills that can be applied to your own work using cutting-edge software created by Esri Inc., the world's leading GIS company and our industry partner.",
    },

    {
      id: "toronto",
      title: "GIS, Mapping, and Spatial Analysis",
      issuer: "University of Toronto",
      date: "2021",
      category: "GIS",
      image: "../assets/images/certs/toronto.png",
      description:
        "This Specialization is for those new to mapping and GIS, as well as anyone looking to gain a better understanding of how it all works and why. You will learn practical skills that can be applied to your own work using cutting-edge software created by Esri Inc., the world's leading GIS company and our industry partner.",
      credentialId: "3VPPAR45X8D2",
    },

    {
      id: "google-1",
      title: "Google Certified: Ask Qu estions to Make Data-Driven Decisions",
      issuer: "Google",
      date: "2022",
      category: "Data",
      image: "../assets/images/certs/1-google.png",
      description:
        "Validated skills in managing Azure identities, storage, virtual networks, and compute resources for enterprise workloads.",
      credentialId: "TFA8RBMWVXXV",
    },
    {
      id: "google-2",
      title: "Google Certified: Foundations of Data",
      issuer: "Google",
      date: "2022",
      category: "Data",
      image: "../assets/images/certs/2-google.png",
      description:
        "Core understanding of cloud concepts, Azure services, pricing, SLAs, and the shared responsibility model.",
      credentialId: "U33CSYD3KN7L",
    },
    {
      id: "meta-1",
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "2022",
      category: "Development",
      image: "../assets/images/certs/1-meta.png",
      description:
        "Advanced spatial data collection, map creation standards, and quality assurance for global mapping datasets.",
      credentialId: "9EF8VKJFHRQ6",
    },
    {
      id: "meta-2",
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "2022",
      category: "Development",
      image: "../assets/images/certs/2-meta.png",
      description:
        "Foundational knowledge of Microsoft 365 productivity, security, compliance, and licensing options.",
      credentialId: "5TJ792Q2DSSY",
    },
    {
      id: "meta-3",
      title: "Version Control",
      issuer: "Meta",
      date: "2022",
      category: "Development",
      image: "../assets/images/certs/3-meta.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "4CUGUPKE9KNV",
    },

    {
      id: "meta-4",
      title: "HTML and CSS in depth",
      issuer: "Meta",
      date: "2023",
      category: "Development",
      image: "../assets/images/certs/4-meta.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "RJ7M2QGD5ZAQ",
    },
    {
      id: "meta-5",
      title: "React Basics",
      issuer: "Meta",
      date: "2023",
      category: "Development",
      image: "../assets/images/certs/5-meta.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "EA2U2LTTBTSZ",
    },

    {
      id: "meta-6",
      title: "Coding Interview Preparation",
      issuer: "Meta",
      date: "2024",
      category: "Development",
      image: "../assets/images/certs/6-meta.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "EA2U2LTTBTSZ",
    },

    {
      id: "mum-1",
      title: "Programming for Everybody",
      issuer: "University of Michigan",
      date: "2021",
      category: "Development",
      image: "../assets/images/certs/1-mum.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "7JEW7DRVE4BZ",
    },

    {
      id: "mum-2",
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "2022",
      category: "Development",
      image: "../assets/images/certs/2-mum.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "GV2UGPBQ3QXF",
    },

    {
      id: "mum-3",
      title: "Using Python to Access Web Data",
      issuer: "University of Michigan",
      date: "2022",
      category: "Development",
      image: "../assets/images/certs/3-mum.png",
      description:
        "Modern JavaScript, asynchronous patterns, and scalable front-end architecture for production applications.",
      credentialId: "3VPPAR45X8D2",
    },

    {
      id: "goethe-b2",
      title: "Goethe-Zertifikat B2",
      issuer: "Goethe-Institut",
      date: "2022",
      category: "Sprache",
      image: "../assets/images/certs/goethe-b2.png",
    },
  ];

  const BADGE_ICON_DIR = "../assets/images/badges/";

  const BADGES = [
    {
      id: "b1",
      title: "Describe Azure storage services",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-1.png",
      img: BADGE_ICON_DIR + "b-1.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/EGSDHHDP?sharingId=5438C9913490B807",
    },

    {
      id: "b2",
      title: "Describe cloud service types",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-2.png",
      img: BADGE_ICON_DIR + "b-2.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/FEVZYHSX?sharingId=5438C9913490B807",
    },
    {
      id: "b3",
      title: "Explore Microsoft 365 security foundations",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-3.png",
      img: BADGE_ICON_DIR + "b-3.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/WMZE45GN?sharingId=5438C9913490B807",
    },
    {
      id: "b4",
      title: "Describe cloud computing",
      category: "Data",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-4.png",
      img: BADGE_ICON_DIR + "b-4.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/2TB5FAFV?sharingId=5438C9913490B807",
    },
    {
      id: "b5",
      title: "Describe the benefits of using cloud services",
      category: "Development",
      issuer: "GitHub",
      date: "2026",

      certImage: "../assets/images/badges/b-5.png",
      img: BADGE_ICON_DIR + "b-5.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/3ZAJ9QTH?sharingId=5438C9913490B807",
    },
    {
      id: "b6",
      title: "Describe the core architectural components of Azure",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-6.png",
      img: BADGE_ICON_DIR + "b-6.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/WM2CFJJN?sharingId=5438C9913490B807",
    },
    {
      id: "b7",
      title: "Describe Azure compute services",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-7.png",
      img: BADGE_ICON_DIR + "b-7.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/4C6DP9ZK?sharingId=5438C9913490B807",
    },

    {
      id: "b8",
      title: "Describe Azure networking services",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-8.png",
      img: BADGE_ICON_DIR + "b-8.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/3Z77MY4H?sharingId=5438C9913490B807",
    },

    {
      id: "b9",
      title: "Describe Azure identity, access, and security",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-9.png",
      img: BADGE_ICON_DIR + "b-9.svg",

      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/FEEMCLTX?sharingId=5438C9913490B807",
    },

    {
      id: "b10",
      title: "Describe cost management in Azure",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-10.png",
      img: BADGE_ICON_DIR + "b-10.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/ZJJ6ZZL2?sharingId=5438C9913490B807",
    },

    {
      id: "b11",
      title:
        "Describe features and tools in Azure for governance and compliance",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-11.png",
      img: BADGE_ICON_DIR + "b-11.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/8VVJ2QSW?sharingId=5438C9913490B807",
    },

    {
      id: "b12",
      title:
        "Describe features and tools for managing and deploying Azure resources",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-12.png",
      img: BADGE_ICON_DIR + "b-12.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/K99Y3LNB?sharingId=5438C9913490B807",
    },

    {
      id: "b13",
      title: "Describe monitoring tools in Azure",
      category: "Cloud",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-13.png",
      img: BADGE_ICON_DIR + "b-13.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/EGGNCEBP?sharingId=5438C9913490B807",
    },

    {
      id: "b14",
      title: "Describe security and compliance concepts",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-14.png",
      img: BADGE_ICON_DIR + "b-14.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/9A7RYS4U?sharingId=5438C9913490B807",
    },

    {
      id: "b15",
      title: "Describe identity concepts",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-15.png",
      img: BADGE_ICON_DIR + "b-15.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/4C9NEP2K?sharingId=5438C9913490B807",
    },

    {
      id: "b16",
      title: "Describe the function and identity types of Microsoft Entra ID",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-16.png",
      img: BADGE_ICON_DIR + "b-16.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/K93J8Z3B?sharingId=5438C9913490B807",
    },

    {
      id: "b17",
      title: "Describe the authentication capabilities of Microsoft Entra ID",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",

      certImage: "../assets/images/badges/b-17.png",
      img: BADGE_ICON_DIR + "b-17.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/Y4BQDK4R?sharingId=5438C9913490B807",
    },

    {
      id: "b18",
      title: "Describe access management capabilities of Microsoft Entra",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",
      description:
        "Core concepts of machine learning and AI workloads on Microsoft Azure.",
      certImage: "../assets/images/badges/b-18.png",
      img: BADGE_ICON_DIR + "b-18.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/XPKBCTDY?sharingId=5438C9913490B807",
    },

    {
      id: "b19",
      title:
        "Describe the identity protection and governance capabilities of Microsoft Entra",
      category: "Security",
      issuer: "Microsoft",
      date: "2026",
      certImage: "../assets/images/badges/b-18.png",
      img: BADGE_ICON_DIR + "b-19.svg",
      verifyUrl:
        "https://learn.microsoft.com/api/achievements/share/en-us/HossamAyman-4928/3ZV5RJLH?sharingId=5438C9913490B807",
    },
  ];

  /* ---------------------------------------------------------------
     BADGE ICON — generated inline SVG emblem (swap for real SVGs by
     setting a `img` field on a badge and using it instead)
  --------------------------------------------------------------- */
  const CATEGORY_COLORS = {
    Cloud: ["#0078D4", "#4FC3F7"],
    Development: ["#fe7b52", "#ff9d7a"],
    Data: ["#00bbf9", "#0078D4"],
    Security: ["#f15bb5", "#ff8fd6"],
    AI: ["#9b5de5", "#c199f2"],
  };

  function badgeSVG(category) {
    const c = CATEGORY_COLORS[category] || ["#0078D4", "#4FC3F7"];
    const gid = "g" + Math.random().toString(36).slice(2, 9);
    return `
      <svg viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c[0]}"/>
            <stop offset="100%" stop-color="${c[1]}"/>
          </linearGradient>
        </defs>
        <path d="M50 2 L96 27 V79 L50 114 L4 79 V27 Z" fill="url(#${gid})" opacity="0.16" stroke="${c[0]}" stroke-width="2"/>
        <path d="M50 14 L86 33 V73 L50 102 L14 73 V33 Z" fill="none" stroke="${c[0]}" stroke-width="1.5" opacity="0.6"/>
        <circle cx="50" cy="52" r="16" fill="none" stroke="${c[1]}" stroke-width="2.5"/>
        <path d="M42 52 L48 58 L60 44" fill="none" stroke="${c[1]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  }

  /* ---------------------------------------------------------------
     UTIL
  --------------------------------------------------------------- */
  function lazyLoadImg(img) {
    if (!img) return;
    const src = img.dataset.src;
    if (!src) return;
    const loader = new Image();
    loader.onload = () => {
      img.src = src;
      requestAnimationFrame(() => img.classList.add("cb-loaded"));
    };
    loader.src = src;
  }

  function trapFocusables(container) {
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      ),
    );
  }

  /* =================================================================
     CERTIFICATE VIEWER
  ================================================================= */
  const certRoot = document.getElementById("cert-viewer");
  if (certRoot) {
    let activeIndex = 0;
    let lastFocused = null;

    const featuredImg = certRoot.querySelector("#cert-featured-img");
    const featuredWrap = certRoot.querySelector(".cert-featured");
    const infoBox = certRoot.querySelector(".cert-info");
    const railEl = certRoot.querySelector("#cert-rail");
    const prevBtn = certRoot.querySelector("#cert-prev");
    const nextBtn = certRoot.querySelector("#cert-next");
    const zoomBtn = certRoot.querySelector("#cert-zoom-btn");

    // Build thumbnail rail
    CERTS.forEach((cert, i) => {
      const thumb = document.createElement("button");
      thumb.className = "cert-thumb" + (i === 0 ? " active" : "");
      thumb.setAttribute("aria-label", "View certificate: " + cert.title);
      thumb.dataset.index = i;
      thumb.innerHTML = `
        <img data-src="${cert.image}" alt="${cert.title}" loading="lazy" />
        <span class="cert-thumb-num">0${i + 1}</span>`;
      thumb.addEventListener("click", () => setActive(i));
      railEl.appendChild(thumb);
    });

    // Lazy-load thumbnails as they enter viewport
    const thumbObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lazyLoadImg(entry.target.querySelector("img"));
            thumbObserver.unobserve(entry.target);
          }
        });
      },
      { root: railEl, threshold: 0.1 },
    );
    certRoot
      .querySelectorAll(".cert-thumb")
      .forEach((t) => thumbObserver.observe(t));

    function renderFeatured(index) {
      const cert = CERTS[index];
      featuredWrap.classList.add("cb-panel-switching");
      setTimeout(() => {
        featuredImg.classList.remove("cb-loaded");
        featuredImg.dataset.src = cert.image;
        lazyLoadImg(featuredImg);
        infoBox.innerHTML = `
          <span class="cert-cat-pill">${cert.category}</span>
          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-meta"><strong>${cert.issuer}</strong> &nbsp;·&nbsp; Issued ${cert.date} &nbsp;·&nbsp; ID: ${cert.credentialId}</p>
          <p class="cert-desc">${cert.description}</p>`;
        requestAnimationFrame(() =>
          featuredWrap.classList.remove("cb-panel-switching"),
        );
      }, 180);
    }

    function setActive(index, focusThumb) {
      activeIndex = (index + CERTS.length) % CERTS.length;
      certRoot.querySelectorAll(".cert-thumb").forEach((t, i) => {
        t.classList.toggle("active", i === activeIndex);
      });
      renderFeatured(activeIndex);
      if (focusThumb) {
        const el = certRoot.querySelector(
          `.cert-thumb[data-index="${activeIndex}"]`,
        );
        if (el)
          el.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "smooth",
          });
      }
      if (certModalOpen()) renderModal();
    }

    prevBtn.addEventListener("click", () => setActive(activeIndex - 1, true));
    nextBtn.addEventListener("click", () => setActive(activeIndex + 1, true));

    // initial render
    renderFeatured(0);

    // 3D tilt on the featured card
    featuredWrap.addEventListener("mousemove", (e) => {
      const rect = featuredWrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      featuredWrap.style.transform = `rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
    });
    featuredWrap.addEventListener("mouseleave", () => {
      featuredWrap.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

    /* ---------------- Fullscreen modal ---------------- */
    const modalOverlay = document.getElementById("cert-modal-overlay");
    const modalImg = document.getElementById("cert-modal-img");
    const modalCaption = document.getElementById("cert-modal-caption");
    const modalClose = document.getElementById("cert-modal-close");
    const modalPrev = document.getElementById("cert-modal-prev");
    const modalNext = document.getElementById("cert-modal-next");

    function certModalOpen() {
      return modalOverlay.classList.contains("open");
    }

    function renderModal() {
      const cert = CERTS[activeIndex];
      modalImg.src = cert.image;
      modalImg.alt = cert.title;
      modalCaption.innerHTML = `<strong>${cert.title}</strong> — ${cert.issuer}, ${cert.date} &nbsp;(${activeIndex + 1}/${CERTS.length})`;
    }

    function openModal() {
      lastFocused = document.activeElement;
      renderModal();
      modalOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
      modalClose.focus();
      document.addEventListener("keydown", onModalKeydown);
    }
    function closeModal() {
      modalOverlay.classList.remove("open");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onModalKeydown);
      if (lastFocused) lastFocused.focus();
    }
    function onModalKeydown(e) {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") {
        setActive(activeIndex - 1);
      } else if (e.key === "ArrowRight") {
        setActive(activeIndex + 1);
      } else if (e.key === "Tab") {
        const f = trapFocusables(modalOverlay.querySelector(".cert-modal"));
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    zoomBtn.addEventListener("click", openModal);
    modalClose.addEventListener("click", closeModal);
    modalPrev.addEventListener("click", () => setActive(activeIndex - 1));
    modalNext.addEventListener("click", () => setActive(activeIndex + 1));
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  /* =================================================================
     BADGE GALLERY
  ================================================================= */
  const badgeRoot = document.getElementById("badge-gallery");
  if (badgeRoot) {
    const grid = badgeRoot.querySelector("#badge-grid");
    const filterWrap = badgeRoot.querySelector("#badge-filters");
    const searchInput = badgeRoot.querySelector("#badge-search-input");
    const countEl = badgeRoot.querySelector("#badge-count");
    const paginationEl = badgeRoot.querySelector("#badge-pagination");

    const PAGE_SIZE = 15; // 5 rows × 3 columns per page

    const categories = [
      "All",
      ...Array.from(new Set(BADGES.map((b) => b.category))),
    ];
    let activeCategory = "All";
    let searchTerm = "";
    let currentPage = 1;

    categories.forEach((cat) => {
      const pill = document.createElement("button");
      pill.className = "badge-filter-pill" + (cat === "All" ? " active" : "");
      pill.textContent = cat;
      pill.dataset.cat = cat;
      pill.addEventListener("click", () => {
        activeCategory = cat;
        currentPage = 1;
        filterWrap
          .querySelectorAll(".badge-filter-pill")
          .forEach((p) => p.classList.toggle("active", p === pill));
        renderGrid();
      });
      filterWrap.appendChild(pill);
    });

    function getFiltered() {
      return BADGES.filter((b) => {
        const matchesCat =
          activeCategory === "All" || b.category === activeCategory;
        const matchesSearch =
          !searchTerm || b.title.toLowerCase().includes(searchTerm);
        return matchesCat && matchesSearch;
      });
    }

    function buildCard(badge) {
      const card = document.createElement("button");
      card.className = "badge-card";
      card.setAttribute("aria-label", "Open badge details: " + badge.title);
      card.innerHTML = `
        <div class="badge-icon-wrap">${badge.img ? `<img src="${badge.img}" alt="${badge.title}" loading="lazy" />` : badgeSVG(badge.category)}</div>
        <div class="badge-name">${badge.title}</div>
        <div class="badge-cat">${badge.category}</div>`;
      card.addEventListener("click", () => openPanel(badge));
      return card;
    }

    // Only the current page's cards are ever created — with hundreds of
    // badges this keeps the DOM (and initial paint) small and fast.
    function renderGrid() {
      const filtered = getFiltered();
      const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      if (currentPage > totalPages) currentPage = totalPages;

      grid.innerHTML = "";
      if (filtered.length === 0) {
        const empty = document.createElement("div");
        empty.className = "badge-empty";
        empty.textContent = "No badges match your search.";
        grid.appendChild(empty);
      } else {
        const start = (currentPage - 1) * PAGE_SIZE;
        filtered
          .slice(start, start + PAGE_SIZE)
          .forEach((badge) => grid.appendChild(buildCard(badge)));
      }

      const rangeStart = filtered.length
        ? (currentPage - 1) * PAGE_SIZE + 1
        : 0;
      const rangeEnd = Math.min(currentPage * PAGE_SIZE, filtered.length);
      countEl.textContent = filtered.length
        ? `${rangeStart}–${rangeEnd} of ${filtered.length} badge${filtered.length === 1 ? "" : "s"}`
        : "0 badges";

      renderPagination(totalPages);
    }

    function goToPage(page) {
      currentPage = page;
      renderGrid();
      grid.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function renderPagination(totalPages) {
      paginationEl.innerHTML = "";
      if (totalPages <= 1) return;

      const prevIcon = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>`;
      const nextIcon = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;

      function makeBtn({ html, page, active, disabled, arrow, label }) {
        const btn = document.createElement("button");
        btn.className =
          "badge-page-btn" +
          (active ? " active" : "") +
          (arrow ? " arrow" : "");
        btn.innerHTML = html;
        btn.disabled = !!disabled;
        btn.setAttribute("aria-label", label || `Go to page ${page}`);
        if (!disabled) btn.addEventListener("click", () => goToPage(page));
        return btn;
      }

      paginationEl.appendChild(
        makeBtn({
          html: prevIcon,
          page: currentPage - 1,
          disabled: currentPage === 1,
          arrow: true,
          label: "Previous page",
        }),
      );

      getPageWindow(currentPage, totalPages).forEach((p) => {
        if (p === "...") {
          const span = document.createElement("span");
          span.className = "badge-page-ellipsis";
          span.textContent = "…";
          paginationEl.appendChild(span);
        } else {
          paginationEl.appendChild(
            makeBtn({ html: String(p), page: p, active: p === currentPage }),
          );
        }
      });

      paginationEl.appendChild(
        makeBtn({
          html: nextIcon,
          page: currentPage + 1,
          disabled: currentPage === totalPages,
          arrow: true,
          label: "Next page",
        }),
      );
    }

    // Windowed page numbers so pagination stays compact even with
    // dozens of pages: 1 … 4 5 [6] 7 8 … 20
    function getPageWindow(current, total) {
      if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
      const keep = new Set([1, total, current, current - 1, current + 1]);
      const sorted = Array.from(keep)
        .filter((p) => p >= 1 && p <= total)
        .sort((a, b) => a - b);
      const out = [];
      let prev = 0;
      sorted.forEach((p) => {
        if (prev && p - prev > 1) out.push("...");
        out.push(p);
        prev = p;
      });
      return out;
    }

    renderGrid();

    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      currentPage = 1;
      renderGrid();
    });
    /* ---------------- Side panel ---------------- */
    const panelOverlay = document.getElementById("badge-panel-overlay");
    const panel = document.getElementById("badge-panel");
    const panelClose = document.getElementById("badge-panel-close");
    let panelLastFocused = null;

    function openPanel(badge) {
      panelLastFocused = document.activeElement;
      panel.innerHTML = `
        <button class="badge-panel-close" id="badge-panel-close-inner" aria-label="Close panel">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <div class="badge-panel-icon">${badge.img ? `<img src="${badge.img}" alt="${badge.title}" />` : badgeSVG(badge.category)}</div>
        <h3 class="badge-panel-title">${badge.title}</h3>
        <div class="badge-panel-cat">${badge.category}</div>
        <div class="badge-panel-cert"><img data-src="${badge.certImage}" alt="${badge.title} certificate" /></div>
        <div class="badge-panel-meta">
          <div class="badge-panel-meta-row"><span class="badge-panel-meta-label">Issuer</span><span class="badge-panel-meta-val">${badge.issuer}</span></div>
          <div class="badge-panel-meta-row"><span class="badge-panel-meta-label">Issued</span><span class="badge-panel-meta-val">${badge.date}</span></div>
        </div>
        ${
          badge.verifyUrl
            ? `<a class="badge-panel-verify" href="${badge.verifyUrl}" target="_blank" rel="noopener">
          <span>Verify Credential</span>
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </a>`
            : ""
        }`;

      lazyLoadImg(panel.querySelector(".badge-panel-cert img"));
      panelOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
      panel
        .querySelector("#badge-panel-close-inner")
        .addEventListener("click", closePanel);
      panel.querySelector("#badge-panel-close-inner").focus();
      document.addEventListener("keydown", onPanelKeydown);
    }
    function closePanel() {
      panelOverlay.classList.remove("open");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onPanelKeydown);
      if (panelLastFocused) panelLastFocused.focus();
    }
    function onPanelKeydown(e) {
      if (e.key === "Escape") closePanel();
      else if (e.key === "Tab") {
        const f = trapFocusables(panel);
        if (!f.length) return;
        const first = f[0],
          last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    panelOverlay.addEventListener("click", (e) => {
      if (e.target === panelOverlay) closePanel();
    });
  }

  /* =================================================================
     SHARED SCROLL REVEAL (uses .cb-reveal class)
  ================================================================= */
  const cbReveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cbReveal.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".cb-reveal").forEach((el) => cbReveal.observe(el));
})();
