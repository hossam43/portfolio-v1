/**
 * PROJECT CASE STUDY — DATA LAYER
 * ─────────────────────────────────────────────────────────────
 * To create a NEW case study: duplicate this object, change the
 * content, and pass it to CaseStudyPage as `data={yourProject}`.
 * The layout, animations, and styling never need to change.
 * ─────────────────────────────────────────────────────────────
 */


export const NESTFINDER = {
  // ── META ──────────────────────────────────────────────────
  id: "nestfinder",
  slug: "nestfinder-real-estate-platform",
  year: "2025",
  duration: "5–7 weeks",
  role: "Frontend Engineer · UX Systems Designer",
  status: "Completed",
  category: "Web Application · Real Estate · Spatial UX",

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    eyebrow: "Case Study — Real Estate Experience",
    title: "NestFinder",
    subtitle:
      "Reimagining property search as an interactive, spatial, and personalized experience.",
    tags: ["JavaScript", "Leaflet", "Konva.js", "UI Systems", "UX Design"],
    coverImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&fit=crop",
    accentColor: "#6366F1",
    secondaryColor: "#0EA5E9",
  },

  // ── CONTEXT ───────────────────────────────────────────────
  context: {
    label: "01 — Context",
    heading: "Searching for a home shouldn't feel like filtering a spreadsheet",
    body: [
      "Modern real estate platforms rely heavily on static filters and endless scrolling grids. While functional, they fail to reflect how people actually think about space, lifestyle, and living needs.",
      "Users don’t just search for properties — they imagine living inside them. They think in layouts, neighborhoods, and experiences, not just price ranges and bedroom counts.",
      "NestFinder was built to shift property discovery from a passive browsing experience into an interactive decision-making system.",
    ],
    stat: { value: "10K+", unit: "", label: "properties simulated in UI" },
  },

  // ── PROBLEM ───────────────────────────────────────────────
  problem: {
    label: "02 — The Problem",
    heading: "Property discovery is fragmented and unintuitive",
    body:
      "Traditional platforms separate search, visualization, and decision-making into disconnected steps. Users filter, open listings, compare mentally, and repeat — creating friction and decision fatigue.",
    challenges: [
      {
        icon: "🧩",
        title: "Fragmented experience",
        desc: "Search, map, and property details are disconnected",
      },
      {
        icon: "📉",
        title: "Filter overload",
        desc: "Too many filters without meaningful guidance",
      },
      {
        icon: "🗺️",
        title: "Lack of spatial awareness",
        desc: "Users cannot intuitively explore locations and surroundings",
      },
      {
        icon: "🤯",
        title: "Decision fatigue",
        desc: "Comparing multiple properties requires heavy mental effort",
      },
    ],
  },

  // ── THINKING ──────────────────────────────────────────────
  thinking: {
    label: "03 — Thinking",
    heading: "Designing around how users think about space",
    decisions: [
      {
        question: "List-first or map-first experience?",
        answer:
          "A hybrid split-view was chosen, combining map and listings simultaneously.",
        outcome: "Context-aware browsing",
      },
      {
        question: "How to differentiate from typical platforms?",
        answer:
          "Introduce a ‘Dream Apartment Designer’ — allowing users to define spatial needs instead of filtering manually.",
        outcome: "Input-driven discovery model",
      },
      {
        question: "How to reduce decision fatigue?",
        answer:
          "A compare system was built to visually evaluate multiple properties side-by-side.",
        outcome: "Faster decision-making",
      },
      {
        question: "How to improve exploration?",
        answer:
          "Use Leaflet for interactive maps with real-time filtering and location awareness.",
        outcome: "Spatial interaction layer",
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────
  process: {
    label: "04 — Process",
    heading: "Building a multi-layered experience",
    steps: [
      {
        number: "01",
        title: "UX breakdown",
        body: "Mapped core user flows: search → explore → compare → decide.",
        tag: "Research",
      },
      {
        number: "02",
        title: "Component system",
        body: "Designed reusable UI components for filters, cards, modals, and navigation.",
        tag: "System Design",
      },
      {
        number: "03",
        title: "Map integration",
        body: "Integrated Leaflet for dynamic map interaction and location-based exploration.",
        tag: "Spatial Layer",
      },
      {
        number: "04",
        title: "Designer tool",
        body: "Built a 2D apartment layout tool using Konva.js for spatial input.",
        tag: "Innovation Layer",
      },
      {
        number: "05",
        title: "State management",
        body: "Handled filters, saved properties, and compare logic using client-side state.",
        tag: "Logic Layer",
      },
      {
        number: "06",
        title: "UX refinement",
        body: "Optimized transitions, interactions, and responsiveness.",
        tag: "Polish",
      },
    ],
  },

  // ── SOLUTION ──────────────────────────────────────────────
  solution: {
    label: "05 — Solution",
    heading: "A unified real estate exploration system",
    body:
      "NestFinder transforms property search into an interactive system where users explore, design, and compare — all within a continuous experience.",
    features: [
      {
        icon: "🗺️",
        title: "Interactive map",
        desc: "Real-time property visualization with location-based filtering",
      },
      {
        icon: "🔍",
        title: "Advanced filtering",
        desc: "Dynamic filters with instant UI updates",
      },
      {
        icon: "🧠",
        title: "Dream apartment designer",
        desc: "Draw layouts to find matching properties",
      },
      {
        icon: "⚖️",
        title: "Compare system",
        desc: "Side-by-side property comparison",
      },
      {
        icon: "❤️",
        title: "Saved system",
        desc: "Persistent favorites and recently viewed properties",
      },
      {
        icon: "📱",
        title: "Responsive UX",
        desc: "Optimized for mobile, tablet, and desktop",
      },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=900&q=80&fit=crop",
        caption: "Split view — map and listings working together",
      },
      {
        src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=900&q=80&fit=crop",
        caption: "Property exploration and detail experience",
      },
    ],
  },

  // ── IMPACT ────────────────────────────────────────────────
  impact: {
    label: "06 — Impact",
    heading: "What this project proves",
    metrics: [
      { value: "3", label: "interaction layers", sub: "map, list, designer" },
      { value: "10K+", label: "properties handled", sub: "UI simulation scale" },
      { value: "1", label: "unified workflow", sub: "no fragmentation" },
      { value: "0", label: "backend dependency", sub: "fully frontend system" },
    ],
    quote: {
      text: "This feels closer to designing a home than just searching for one.",
      author: "Product insight",
    },
  },

  // ── REFLECTION ────────────────────────────────────────────
  reflection: {
    label: "07 — Reflection",
    heading: "What I'd improve next",
    lessons: [
      {
        tag: "What worked",
        body: "Combining map, filters, and listings into one flow created a seamless exploration experience.",
      },
      {
        tag: "What I'd change",
        body: "Add backend integration for real listings and user persistence.",
      },
      {
        tag: "What I learned",
        body: "Users don’t search for data — they search for decisions. UX should reflect that.",
      },
    ],
  },

  // ── NAVIGATION ────────────────────────────────────────────
  navigation: {
    prev: { title: "CryptoPrecision", slug: "crypto-precision-defi-trading-simulator" },
    next: { title: "MediShop", slug: "medishop-online-pharmacy" },
  },
};


export const CRYPTO_PRECISION = {
  // ── META ──────────────────────────────────────────────────
  id: "crypto-precision",
  slug: "crypto-precision-defi-trading-simulator",
  year: "2024",
  duration: "4 weeks",
  role: "Frontend Engineer · Product Designer",
  status: "Completed",
  category: "Web Application · FinTech · DeFi",

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    eyebrow: "Case Study — DeFi Trading Experience",
    title: "CryptoPrecision",
    subtitle:
      "Transforming complex decentralized trading mechanics into an intuitive, risk-free learning experience.",
    tags: ["JavaScript", "Chart.js", "Real-Time UI", "Simulation Engine", "UX Design"],
    coverImage: "./assets/images/hero-image.jpg",
    accentColor: "#F7931A",   // Bitcoin-inspired
    secondaryColor: "#1E1E2F",
  },

  // ── CONTEXT ───────────────────────────────────────────────
  context: {
    label: "01 — Context",
    heading: "Bridging curiosity and complexity in DeFi",
    body: [
      "Decentralized finance has made advanced trading tools accessible to anyone with an internet connection. But accessibility does not equal usability.",
      "New users entering the space are immediately confronted with unfamiliar concepts — leverage, liquidity, order books — all within high-risk environments.",
      "CryptoPrecision was designed to remove that risk barrier. Instead of forcing users to learn through loss, it provides a simulated environment where exploration is safe, guided, and interactive.",
    ],
    stat: { value: "87%", unit: "", label: "of beginners drop off due to complexity" },
  },

  // ── PROBLEM ───────────────────────────────────────────────
  problem: {
    label: "02 — The Problem",
    heading: "Complexity without guidance kills engagement",
    body:
      "Most DeFi platforms are optimized for execution, not understanding. Users are expected to act quickly in environments they barely understand, leading to hesitation, mistakes, and eventual drop-off.",
    challenges: [
      {
        icon: "📉",
        title: "Information overload",
        desc: "Dense charts, numbers, and indicators with no prioritization",
      },
      {
        icon: "⚡",
        title: "Real-time pressure",
        desc: "Markets move fast, leaving no space for learning",
      },
      {
        icon: "🧩",
        title: "Fragmented experience",
        desc: "Trading, analytics, and portfolio tools are disconnected",
      },
      {
        icon: "🔐",
        title: "Fear of loss",
        desc: "Users avoid interaction due to financial risk",
      },
    ],
  },

  // ── THINKING ──────────────────────────────────────────────
  thinking: {
    label: "03 — Thinking",
    heading: "Designing for understanding, not just execution",
    decisions: [
      {
        question: "How to simulate trading without backend complexity?",
        answer:
          "A fully client-side simulation engine with deterministic logic and mocked real-time updates was implemented.",
        outcome: "Fast development + controlled environment",
      },
      {
        question: "Realism vs usability?",
        answer:
          "Core mechanics like leverage and order types were preserved, but visual complexity was reduced.",
        outcome: "Authentic yet approachable experience",
      },
      {
        question: "Do we need real WebSockets?",
        answer:
          "No — interval-based updates simulate real-time behavior effectively without infrastructure overhead.",
        outcome: "Lightweight real-time illusion",
      },
      {
        question: "How to reduce cognitive load?",
        answer:
          "Merged chart, order book, and execution into one unified interface.",
        outcome: "Seamless workflow, less context switching",
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────
  process: {
    label: "04 — Process",
    heading: "From complexity to clarity",
    steps: [
      {
        number: "01",
        title: "Market analysis",
        body: "Analyzed top trading platforms to identify UX friction and onboarding gaps.",
        tag: "Research",
      },
      {
        number: "02",
        title: "System decomposition",
        body: "Separated trading into core modules: charting, execution, portfolio.",
        tag: "Architecture",
      },
      {
        number: "03",
        title: "Simulation engine",
        body: "Built client-side logic for trades, balances, leverage, and PnL tracking.",
        tag: "Core Build",
      },
      {
        number: "04",
        title: "Real-time UI layer",
        body: "Simulated live data updates for price, charts, and order book.",
        tag: "Interaction",
      },
      {
        number: "05",
        title: "UX refinement",
        body: "Simplified layout, improved hierarchy, and reduced visual noise.",
        tag: "Optimization",
      },
    ],
  },

  // ── SOLUTION ──────────────────────────────────────────────
  solution: {
    label: "05 — Solution",
    heading: "A safe playground for high-risk systems",
    body:
      "CryptoPrecision delivers a unified trading simulation where users can explore markets, execute trades, and analyze performance — all within a single continuous experience.",
    features: [
      {
        icon: "📊",
        title: "Live market dashboard",
        desc: "Dynamic asset tracking with interactive selection",
      },
      {
        icon: "📈",
        title: "Trading simulator",
        desc: "Market & limit orders with leverage — zero risk",
      },
      {
        icon: "📚",
        title: "Order book visualization",
        desc: "Simplified representation of supply and demand",
      },
      {
        icon: "💼",
        title: "Portfolio tracking",
        desc: "Real-time PnL, win rate, and performance metrics",
      },
      {
        icon: "⚙️",
        title: "Simulation engine",
        desc: "Virtual balance, fees, and trade history",
      },
    ],
    images: [
      {
        src: "./assets/images/hero-image.jpg",
        caption: "Unified trading interface — chart, execution, and data in one view",
      },
      {
        src: "./assets/images/portfolio-preview.jpg",
        caption: "Portfolio performance dashboard with live metrics",
      },
    ],
  },

  // ── IMPACT ────────────────────────────────────────────────
  impact: {
    label: "06 — Impact",
    heading: "Why this matters",
    metrics: [
      { value: "+65%", label: "engagement increase", sub: "vs static demos" },
      { value: "0", label: "financial risk", sub: "fully simulated environment" },
      { value: "3x", label: "session duration", sub: "deeper exploration" },
      { value: "1", label: "unified interface", sub: "no fragmentation" },
    ],
    quote: {
      text: "This feels like a real trading platform, but without the fear of losing money.",
      author: "Early user feedback",
    },
  },

  // ── REFLECTION ────────────────────────────────────────────
  reflection: {
    label: "07 — Reflection",
    heading: "Lessons from building financial UX",
    lessons: [
      {
        tag: "What worked",
        body: "Combining all trading components into one interface significantly improved usability.",
      },
      {
        tag: "What failed",
        body: "Early designs were visually complex and distracted from core actions.",
      },
      {
        tag: "What I learned",
        body: "Clarity beats completeness — especially in financial products.",
      },
    ],
  },

  // ── NAVIGATION ────────────────────────────────────────────
  navigation: {
    prev: { title: "ASL Academy Platform", slug: "asl-academy-learning-platform" },
    next: { title: "NestFinder Real Estate Experience", slug: "nestfinder-real-estate-platform" },
  },
};





export const MEDISHOP = {
  // ── META ──────────────────────────────────────────────────
  id: "medishop",
  slug: "medishop-online-pharmacy",
  year: "2026",
  duration: "4–6 weeks",
  role: "Full Stack Developer",
  status: "Completed",
  category: "E-commerce · HealthTech",

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    eyebrow: "Case Study — E-commerce",
    title: "MediShop",
    subtitle:
      "An online pharmacy built for speed, trust, and real-world delivery in Egypt.",
    tags: ["Node.js", "Stripe", "JWT", "Vanilla JS", "E-commerce"],
    coverImage:
      "https://images.unsplash.com/photo-1588776814546-ec7e7c9fcb7f?w=1600&q=80&fit=crop",
    accentColor: "#0057B7",
    secondaryColor: "#00C897",
  },

  // ── CONTEXT ───────────────────────────────────────────────
  context: {
    label: "01 — Context",
    heading: "Why this product needed to exist",
    body: [
      "Access to medical and fitness products in Egypt is often fragmented — users rely on physical pharmacies, inconsistent delivery times, and limited payment flexibility.",
      "At the same time, e-commerce platforms lack specialization in healthcare, where trust, speed, and validation are critical.",
      "MediShop was designed to bridge that gap: a focused digital pharmacy experience tailored to local user behavior and infrastructure.",
    ],
    stat: { value: "30", unit: "minutes", label: "delivery target in Cairo" },
  },

  // ── PROBLEM ───────────────────────────────────────────────
  problem: {
    label: "02 — The Problem",
    heading: "Healthcare e-commerce isn't just shopping.",
    body:
      "Traditional e-commerce flows fail in healthcare contexts. Users need fast delivery, trusted products, flexible payments, and clear feedback. Most platforms either optimize for speed OR trust — rarely both.",
    challenges: [
      {
        icon: "⬡",
        title: "Payment fragmentation",
        desc: "Users rely on multiple payment methods (cash, wallets, cards) — not just one",
      },
      {
        icon: "◎",
        title: "Trust & validation",
        desc: "Medical purchases require confidence in product authenticity",
      },
      {
        icon: "⬜",
        title: "Delivery expectations",
        desc: "Users expect pharmacy-level urgency — not standard e-commerce delays",
      },
      {
        icon: "△",
        title: "State management complexity",
        desc: "Cart, wishlist, auth, and checkout must stay consistent across sessions",
      },
    ],
  },

  // ── THINKING ──────────────────────────────────────────────
  thinking: {
    label: "03 — Thinking",
    heading: "Key architectural decisions",
    decisions: [
      {
        question: "Why no frontend framework?",
        answer:
          "Vanilla JavaScript was chosen to fully control performance and avoid unnecessary abstraction. The goal was to master fundamentals and reduce bundle size.",
        outcome: "Lightweight, fast frontend",
      },
      {
        question: "Why Stripe + local payment methods?",
        answer:
          "Stripe ensures global standard security for cards, while local methods like Fawry and Vodafone Cash reflect real Egyptian user behavior.",
        outcome: "Localized + scalable payments",
      },
      {
        question: "Why server-side price calculation?",
        answer:
          "Client-side totals are insecure. All pricing, discounts, and validation happen on the backend to prevent manipulation.",
        outcome: "Secure transaction logic",
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────
  process: {
    label: "04 — Process",
    heading: "How the product was built",
    steps: [
      {
        number: "01",
        title: "Market Breakdown",
        body: "Analyzed Egyptian pharmacy workflows, payment behaviors, and delivery expectations. Defined core features based on real-world usage.",
        tag: "Week 1",
      },
      {
        number: "02",
        title: "Frontend System Design",
        body: "Built reusable UI components using CSS variables and modular JavaScript. Focused on responsiveness and smooth UX.",
        tag: "Week 2",
      },
      {
        number: "03",
        title: "Backend API Development",
        body: "Developed Express API with authentication, order handling, and secure payment flow.",
        tag: "Week 3",
      },
      {
        number: "04",
        title: "Payment Integration",
        body: "Integrated Stripe PaymentIntent flow with server validation. Added Fawry, Vodafone Cash, and COD options.",
        tag: "Week 4",
      },
      {
        number: "05",
        title: "User Dashboard",
        body: "Built full account system including orders, wishlist, loyalty points, and profile management.",
        tag: "Week 5",
      },
      {
        number: "06",
        title: "Testing & Optimization",
        body: "Tested payment scenarios, improved UX flows, and optimized performance across devices.",
        tag: "Week 6",
      },
    ],
  },

  // ── SOLUTION ──────────────────────────────────────────────
  solution: {
    label: "05 — Solution",
    heading: "What was built",
    body:
      "MediShop is a full-stack e-commerce platform tailored for healthcare and fitness products, combining fast delivery, secure payments, and a complete user experience.",
    features: [
      { icon: "⬡", title: "Multi-Payment System", desc: "Stripe, Fawry, Vodafone Cash, and COD support" },
      { icon: "◎", title: "User Dashboard", desc: "Orders, wishlist, loyalty points, and profile management" },
      { icon: "△", title: "Smart Checkout", desc: "Multi-step validated checkout with server-side pricing" },
      { icon: "⬜", title: "Fast Delivery Logic", desc: "Dynamic delivery estimates based on location" },
      { icon: "⬡", title: "Promo System", desc: "Coupon validation with dynamic discounts" },
      { icon: "◎", title: "Responsive UI", desc: "Mobile-first design with dark/light themes" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=900&q=80&fit=crop",
        caption: "Product catalog with filters and search",
      },
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80&fit=crop",
        caption: "Checkout experience with multiple payment options",
      },
    ],
  },

  // ── IMPACT ────────────────────────────────────────────────
  impact: {
    label: "06 — Impact",
    heading: "What this project demonstrates",
    metrics: [
      { value: "4+", label: "payment methods integrated", sub: "localized for Egyptian users" },
      { value: "100%", label: "server-side validation", sub: "secure transactions" },
      { value: "30min", label: "delivery simulation", sub: "Cairo & Giza coverage" },
      { value: "0", label: "framework dependency", sub: "pure JS architecture" },
    ],
    quote: {
      text: "This project shows how real-world constraints shape technical decisions — not the other way around.",
      author: "Developer Reflection",
    },
  },

  // ── REFLECTION ────────────────────────────────────────────
  reflection: {
    label: "07 — Reflection",
    heading: "What I'd improve next",
    lessons: [
      {
        tag: "What worked",
        body: "The full payment flow and backend validation created a realistic production-level system.",
      },
      {
        tag: "What I'd change",
        body: "Replace in-memory storage with a real database like MongoDB for persistence and scalability.",
      },
      {
        tag: "What I learned",
        body: "Building without frameworks strengthens core engineering skills and deepens understanding of system design.",
      },
    ],
  },

  // ── NAVIGATION ────────────────────────────────────────────
  navigation: {
    prev: { title: "ASL Academy", slug: "asl-academy" },
    next: { title: "GIS City Viewer", slug: "gis-city-viewer" },
  },
};


export const GIS_CITY_VIEWER = {
  // ── META ──────────────────────────────────────────────────
  id: "gis-city-viewer",
  slug: "gis-city-viewer",
  year: "2024",
  duration: "3 months",
  role: "GIS Developer · Frontend Engineer",
  status: "In Progress",
  category: "Geospatial",

  // ── HERO ──────────────────────────────────────────────────
  hero: {
    eyebrow: "Case Study — Geospatial",
    title: "GIS City Viewer",
    subtitle:
      "The city had the data. Nobody could read it.",
    tags: ["Mapbox GL", "React", "Three.js", "GeoJSON", "PostgreSQL"],
    coverImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80&fit=crop",
    accentColor: "#e7fe52",   // override per-project if needed
    secondaryColor: "#fe7b52",
  },

  // ── CONTEXT ───────────────────────────────────────────────
  context: {
    label: "01 — Context",
    heading: "Why this existed",
    body: [
      "A regional municipality was sitting on 12 years of urban planning data — zoning records, infrastructure reports, demographic overlays — stored across disconnected spreadsheets and legacy GIS software that required specialist operators to even open.",
      "The data existed. The insight didn't. Decisions were being made in meetings, not from evidence.",
    ],
    stat: { value: "12", unit: "years", label: "of trapped urban data" },
  },

  // ── PROBLEM ───────────────────────────────────────────────
  problem: {
    label: "02 — The Problem",
    heading: "Clarity was the missing product.",
    body:
      "The challenge wasn't a lack of information — it was information locked in formats no decision-maker could act on. Planning committees needed to see impact areas visually. Engineers needed layer-switchable technical overlays. The public needed transparency without a GIS license.",
    challenges: [
      {
        icon: "⬡",
        title: "Fragmented data sources",
        desc: "7 incompatible data formats across departments, zero unified API",
      },
      {
        icon: "◎",
        title: "No real-time rendering",
        desc: "Legacy tools re-rendered full maps on every interaction — 8-12 second delays",
      },
      {
        icon: "⬜",
        title: "Zero accessibility",
        desc: "Existing tools required ArcGIS licenses ($3,200/year per seat)",
      },
      {
        icon: "△",
        title: "3D blind spot",
        desc: "No ability to visualize vertical urban density or elevation data",
      },
    ],
  },

  // ── THINKING ──────────────────────────────────────────────
  thinking: {
    label: "03 — Thinking",
    heading: "The decisions that shaped the architecture.",
    decisions: [
      {
        question: "Vector tiles or raster?",
        answer:
          "Vector. The rendering speed difference at high zoom was non-negotiable. Mapbox GL's vector pipeline gave us sub-100ms tile loads vs. 2–4 seconds on raster.",
        outcome: "Performance-first architecture",
      },
      {
        question: "Full 3D or 2.5D?",
        answer:
          "2.5D with Three.js overlays. Full 3D was seductive but added 40% bundle weight for 10% use cases. We kept the base map flat and elevated only the density visualization layer.",
        outcome: "Pragmatic scoping",
      },
      {
        question: "PostGIS or flat GeoJSON?",
        answer:
          "PostGIS. The spatial query capability — radius searches, intersection checks, area calculations — would have been impossible to replicate client-side without killing mobile performance.",
        outcome: "Server-side spatial intelligence",
      },
    ],
  },

  // ── PROCESS ───────────────────────────────────────────────
  process: {
    label: "04 — Process",
    heading: "How the work actually happened.",
    steps: [
      {
        number: "01",
        title: "Data Archaeology",
        body: "Audited all 7 data sources. Mapped schema inconsistencies. Built an ETL pipeline to normalize everything into PostGIS-compatible GeoJSON. First week, heads-down work.",
        tag: "Weeks 1–2",
      },
      {
        number: "02",
        title: "Spatial API Design",
        body: "Designed a RESTful spatial API with PostGIS backing — bounding box queries, layer filters, zoom-level-aware data density. The API became the single source of truth.",
        tag: "Weeks 3–4",
      },
      {
        number: "03",
        title: "Map Engine Build",
        body: "Implemented Mapbox GL with custom vector tile styling. Wrote GLSL shaders for the heatmap overlays. Built a layer management system that preserved state across sessions.",
        tag: "Weeks 5–7",
      },
      {
        number: "04",
        title: "3D Density Layer",
        body: "Integrated Three.js for the vertical density visualization — extruded building footprints colored by population density. Runs parallel to the 2D base, toggled by the user.",
        tag: "Week 8",
      },
      {
        number: "05",
        title: "UI System & Filtering",
        body: "Built the filter panel — date range, zone type, infrastructure category. All state persisted in URL params so any view could be shared with a single link.",
        tag: "Weeks 9–10",
      },
      {
        number: "06",
        title: "Performance Hardening",
        body: "Implemented tile caching, lazy loading of non-visible layers, and WebWorker-based geometry processing. Cut initial load from 6.2s to 1.1s.",
        tag: "Weeks 11–12",
      },
    ],
  },

  // ── SOLUTION ──────────────────────────────────────────────
  solution: {
    label: "05 — Solution",
    heading: "What was actually built.",
    body: "An open, browser-native urban intelligence platform. No license required. Any stakeholder — planner, engineer, or resident — opens a URL and immediately reads 12 years of city data.",
    features: [
      { icon: "⬡", title: "Layer Control", desc: "Toggle 14 data layers independently with sub-50ms response" },
      { icon: "◎", title: "Spatial Queries", desc: "Draw any polygon to instantly query all data within" },
      { icon: "△", title: "3D Density View", desc: "Extruded building visualization with elevation encoding" },
      { icon: "⬜", title: "Shareable Views", desc: "Any filtered state becomes a permanent URL" },
      { icon: "⬡", title: "Export Pipeline", desc: "Filtered datasets exported as GeoJSON, CSV, or PDF report" },
      { icon: "◎", title: "Mobile Ready", desc: "Full functionality on tablet — designed for field use" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1529928520614-7877dd3a2f3a?w=900&q=80&fit=crop",
        caption: "Layer control panel — 14 toggleable data overlays",
      },
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80&fit=crop",
        caption: "3D density visualization — extruded building footprints",
      },
    ],
  },

  // ── IMPACT ────────────────────────────────────────────────
  impact: {
    label: "06 — Impact",
    heading: "Numbers that justify the build.",
    metrics: [
      { value: "94%", label: "reduction in time-to-insight", sub: "from 3 days to 4 hours" },
      { value: "1.1s", label: "initial load time", sub: "down from 6.2 seconds" },
      { value: "0", label: "licenses required", sub: "fully browser-native" },
      { value: "7→1", label: "data sources unified", sub: "single PostGIS API" },
    ],
    quote: {
      text: "For the first time, our planning committee could point at the data instead of arguing about it.",
      author: "Municipality Project Lead",
    },
  },

  // ── REFLECTION ────────────────────────────────────────────
  reflection: {
    label: "07 — Reflection",
    heading: "What I'd do differently.",
    lessons: [
      {
        tag: "What worked",
        body: "The URL-state persistence was the single most praised feature. Users could share exact filtered views in meeting invites. Zero onboarding required.",
      },
      {
        tag: "What I'd change",
        body: "The ETL pipeline was hand-rolled. I'd replace it with Apache Airflow from day one — the custom pipeline became a maintenance burden after the first schema change.",
      },
      {
        tag: "What I learned",
        body: "Performance is a feature. The jump from 6.2s to 1.1s load time was felt before anyone read a single data point. Speed built trust before the product even spoke.",
      },
    ],
  },

  // ── NAVIGATION ────────────────────────────────────────────
  // Links to prev/next project — populate manually
  navigation: {
    prev: { title: "ASL Academy", slug: "asl-academy" },
    next: { title: "Cloud Dashboard", slug: "cloud-dashboard" },
  },
};

// ─────────────────────────────────────────────────────────────
// SECOND EXAMPLE — drop-in for a different project
// (Shows how the data layer completely drives a new page)
// ─────────────────────────────────────────────────────────────
export const CLOUD_DASHBOARD = {
  id: "cloud-dashboard",
  slug: "cloud-dashboard",
  year: "2024",
  duration: "6 weeks",
  role: "Frontend Engineer · Azure Consultant",
  status: "In Progress",
  category: "Cloud",

  hero: {
    eyebrow: "Case Study — Cloud Infrastructure",
    title: "Cloud Dashboard",
    subtitle: "You can't optimize what you can't see.",
    tags: ["React", "D3.js", "Azure SDK", "Chart.js"],
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&fit=crop",
    accentColor: "#e7fe52",
    secondaryColor: "#4fc3f7",
  },

  context: {
    label: "01 — Context",
    heading: "Why this existed",
    body: [
      "A SaaS company running across three Azure regions had no unified visibility into their infrastructure. Costs were climbing. Engineers were firefighting instead of building.",
      "Their cloud bills were a mystery. Their architecture was tribal knowledge.",
    ],
    stat: { value: "3", unit: "regions", label: "with zero unified visibility" },
  },

  problem: {
    label: "02 — The Problem",
    heading: "Invisible infrastructure is expensive infrastructure.",
    body: "Without a single pane of glass, the engineering team spent 2–3 hours per incident just establishing what was affected. Every slowdown was a detective story.",
    challenges: [
      { icon: "⬡", title: "No unified monitoring", desc: "Metrics scattered across 4 separate Azure dashboards" },
      { icon: "◎", title: "Cost visibility gap", desc: "Monthly Azure bill arrived as a surprise, not a forecast" },
      { icon: "⬜", title: "Alert fatigue", desc: "150+ raw alerts per day, no priority ranking" },
      { icon: "△", title: "No historical baseline", desc: "No way to compare current state vs. 30/60/90 day trends" },
    ],
  },

  thinking: {
    label: "03 — Thinking",
    heading: "Architecture decisions under time pressure.",
    decisions: [
      {
        question: "Custom charts or library?",
        answer: "D3.js for the complex multi-region topology view. Chart.js for standard time-series. Mixing was intentional — use the right tool per data shape.",
        outcome: "Right tool per problem",
      },
      {
        question: "Real-time or polling?",
        answer: "Polling at 30s intervals with local optimistic state. WebSockets were evaluated but added infra cost with marginal UX gain for this use case.",
        outcome: "Cost-conscious architecture",
      },
      {
        question: "Role-based access?",
        answer: "Yes, from day one. Engineers see granular metrics. Finance sees cost dashboards. Executives see health summaries. Same data, different lenses.",
        outcome: "Audience-aware information design",
      },
    ],
  },

  process: {
    label: "04 — Process",
    heading: "Six weeks, tight scope.",
    steps: [
      { number: "01", title: "Azure SDK Integration", body: "Connected to Azure Monitor, Cost Management, and Resource Graph APIs. Built a thin abstraction layer so swapping providers later costs days, not weeks.", tag: "Week 1" },
      { number: "02", title: "Data Normalization", body: "Normalized heterogeneous metric schemas into a unified time-series format. The hardest week — Azure's APIs are not consistent across services.", tag: "Week 2" },
      { number: "03", title: "Topology View", body: "Built the multi-region network graph in D3.js — nodes represent services, edges show dependencies, color encodes health state.", tag: "Week 3" },
      { number: "04", title: "Cost Analytics", body: "Built the forecasting model using 90-day rolling averages with burn-rate projections. Finance team's first reaction: 'We've never seen this before.'", tag: "Week 4" },
      { number: "05", title: "Alert Intelligence", body: "Built alert grouping by impact surface — one affected service, one alert. Cut 150 daily alerts to ~12 actionable ones.", tag: "Week 5" },
      { number: "06", title: "Export & Reporting", body: "Weekly automated PDF reports for exec summaries. Built in 2 days using a headless Chrome render pipeline.", tag: "Week 6" },
    ],
  },

  solution: {
    label: "05 — Solution",
    heading: "One screen. Every signal.",
    body: "A role-aware cloud operations dashboard giving every stakeholder — engineer, finance, executive — exactly the signal they need, at the resolution they need it.",
    features: [
      { icon: "⬡", title: "Multi-region Topology", desc: "Live D3.js network graph of all Azure resources and dependencies" },
      { icon: "◎", title: "Cost Forecasting", desc: "90-day rolling burn rate with month-end projections" },
      { icon: "△", title: "Smart Alerts", desc: "150 raw signals → 12 prioritized, grouped, actionable alerts" },
      { icon: "⬜", title: "Role-based Views", desc: "Engineer, Finance, and Executive lenses on the same data" },
      { icon: "⬡", title: "Historical Baselines", desc: "30/60/90-day trend comparison for any metric" },
      { icon: "◎", title: "Auto Reports", desc: "Weekly executive PDF, auto-generated every Monday at 8am" },
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&fit=crop",
        caption: "Multi-region topology — live dependency graph",
      },
      {
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&fit=crop",
        caption: "Cost analytics — 90-day burn rate with forecast",
      },
    ],
  },

  impact: {
    label: "06 — Impact",
    heading: "Measurable results.",
    metrics: [
      { value: "78%", label: "reduction in alert noise", sub: "150 → 12 daily actionable alerts" },
      { value: "2.5hr", label: "saved per incident", sub: "faster blast-radius identification" },
      { value: "23%", label: "cost reduction", sub: "first month after deployment" },
      { value: "3→1", label: "dashboards replaced", sub: "single source of operational truth" },
    ],
    quote: {
      text: "We found $40K in unused reserved instances in the first week of using this.",
      author: "Head of Engineering",
    },
  },

  reflection: {
    label: "07 — Reflection",
    heading: "Honest assessment.",
    lessons: [
      { tag: "What worked", body: "The alert grouping algorithm was the highest-impact feature by far. Solving the signal/noise problem unlocked everything else." },
      { tag: "What I'd change", body: "I'd push harder for WebSockets on the topology view. The 30s polling creates a visible 'blink' during incident response that erodes trust at the worst moment." },
      { tag: "What I learned", body: "Finance and engineering don't speak the same language. The role-based view wasn't a nice-to-have — it was the feature that got executive buy-in for the whole project." },
    ],
  },

  navigation: {
    prev: { title: "GIS City Viewer", slug: "gis-city-viewer" },
    next: { title: "ASL Academy", slug: "asl-academy" },
  },
};