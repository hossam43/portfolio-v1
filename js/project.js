/**
 * PROJECT CASE STUDY — DATA LAYER
 * ─────────────────────────────────────────────────────────────
 * To create a NEW case study: duplicate this object, change the
 * content, and pass it to CaseStudyPage as `data={yourProject}`.
 * The layout, animations, and styling never need to change.
 * ─────────────────────────────────────────────────────────────
 */

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