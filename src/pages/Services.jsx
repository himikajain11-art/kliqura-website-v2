import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const servicesList = [
  {
    number: "01",
    tag: "Strategy & Scale",
    title: "Growth",
    highlight: "Marketing",
    icon: "↗",
    color: "navy",
    description:
      "Full-funnel growth architecture designed to scale customer acquisition and maximize long-term brand equity.",
    features: [
      "Customer journey & drop-off mapping",
      "Multi-channel acquisition roadmap",
      "Sustainable compounding growth loops",
    ],
    details:
      "We build interconnected growth engines rather than standalone campaigns. We map every touchpoint from initial discovery to retention, identifying the highest-leverage opportunities to drive sustainable, predictable revenue.",
  },
  {
    number: "02",
    tag: "Paid Advertising",
    title: "Performance",
    highlight: "Marketing",
    icon: "⚡",
    color: "red",
    description:
      "High-ROAS campaigns across Meta and Google Ads engineered to acquire qualified leads and direct sales.",
    features: [
      "Meta Ads (Instagram & Facebook)",
      "High-intent Google Search & PMax Ads",
      "Conversion tracking & ROAS scaling",
    ],
    details:
      "Every rupee of ad spend is tied to clear conversion metrics. We structure data-backed creative testing, audience segmentation, and algorithmic bid management to continuously lower acquisition costs.",
  },
  {
    number: "03",
    tag: "Organic Search",
    title: "SEO",
    highlight: "Optimization",
    subtitle: "Search Engine Optimization",
    icon: "⌕",
    color: "yellow",
    description:
      "Dominate high-intent Google searches and capture active buyers without paying for every single click.",
    features: [
      "Technical audits & core web vitals",
      "High-intent commercial keywords",
      "Local SEO & national ranking dominance",
    ],
    details:
      "Our SEO strategy targets customers who are actively searching for what you offer. We optimize technical foundations, on-page content, and domain authority to turn organic search into an inbound revenue machine.",
  },
  {
    number: "04",
    tag: "Creative Copy",
    title: "Content",
    highlight: "Writing",
    icon: "✦",
    color: "navy",
    description:
      "High-converting copy and compelling storytelling that educates, builds authority, and drives action.",
    features: [
      "Conversion landing page copywriting",
      "Thought leadership & SEO blogs",
      "Email sequences & sales funnels",
    ],
    details:
      "Words that sell without shouting. We craft clear, persuasive content tailored to your target persona that removes buyer friction, builds strong brand authority, and converts traffic into inquiries.",
  },
  {
    number: "05",
    tag: "Social Presence",
    title: "Social Media",
    highlight: "Management",
    icon: "◎",
    color: "red",
    description:
      "Consistent social dominance, engaged community building, and creative formats that make your brand memorable.",
    features: [
      "Content strategy & monthly calendars",
      "Reels, carousels & viral static designs",
      "Community management & audience nurture",
    ],
    details:
      "We transform your social channels into dynamic brand assets. We handle scripting, visual design, scheduling, and community engagement to keep your audience hooked and leaning into your brand.",
  },
  {
    number: "06",
    tag: "Funnel Tech",
    title: "Website",
    highlight: "Optimization",
    subtitle: "Speed & Conversion Rate UX",
    icon: "</>",
    color: "yellow",
    description:
      "Faster load speeds, intuitive mobile UX, and frictionless conversion funnels that maximize your site revenue.",
    features: [
      "Conversion Rate Optimization (CRO)",
      "Mobile UX & checkout streamlining",
      "Speed enhancements & Core Web Vitals",
    ],
    details:
      "Driving traffic to a slow or confusing website wastes your entire marketing budget. We identify friction points, optimize page speed, and re-engineer layouts to ensure visitors take action seamlessly.",
  },
];

const comparisonData = [
  {
    category: "Primary Focus",
    traditional:
      "Vanity metrics (likes, impressions, raw clicks) that look good on paper but do not pay the bills.",
    kliqura:
      "Bankable business metrics (qualified leads, customer acquisition cost, closed revenue, and lifetime value).",
  },
  {
    category: "Funnel Architecture",
    traditional:
      "Siloed channels working in isolation, leading to massive leaks where interested prospects vanish.",
    kliqura:
      "Connected multi-channel ecosystem where SEO, Paid Ads, Content, and Web Optimization amplify each other.",
  },
  {
    category: "Audience Targeting",
    traditional:
      "Broad, generic demographic targeting with generic messaging that gets ignored by real buyers.",
    kliqura:
      "Precision high-intent targeting based on buyer psychology, search intent, and conversion propensity.",
  },
  {
    category: "Decision Making",
    traditional:
      "Guesswork and gut feeling, leading to erratic budgets and unpredictable, plateauing ROI.",
    kliqura:
      "100% data-driven attribution with rapid A/B testing and transparent weekly revenue reporting.",
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const scrollToFunnel = (e) => {
    e.preventDefault();
    const el = document.getElementById("revenue-funnel");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="services-page">
      {/* ===== HERO SECTION ===== */}
      <section className="services-hero">
        <p className="services-eyebrow">SERVICES • DIGITAL GROWTH ENGINES</p>

        <h1>
          Marketing that turns attention into{" "}
          <span>predictable revenue.</span>
        </h1>

        <p className="services-hero-desc">
          We don't sell disconnected tactics. KLIQURA engineers interconnected,
          high-performance digital marketing systems designed to scale your business.
        </p>

        <div className="services-hero-actions">
          <Link to="/contact-us" className="services-primary-btn">
            Get Free Audit <span>↗</span>
          </Link>

          <a
            href="#revenue-funnel"
            onClick={scrollToFunnel}
            className="services-outline-btn"
          >
            See The Revenue Funnel ↓
          </a>
        </div>
      </section>

      {/* ===== PART 1: THE 6 CORE SERVICES GRID ===== */}
      <section className="services-grid-section">
        <div className="services-grid-header">
          <p className="services-eyebrow">WHAT WE DELIVER</p>
          <h2>Full-funnel capabilities. One unified growth team.</h2>
          <p className="services-grid-subtitle">
            Every capability your brand needs to attract, convert, and scale your best customers online.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((svc) => (
            <div
              key={svc.number}
              className={`service-card card-${svc.color}`}
            >
              <div className="service-card-top">
                <span className="service-tag">{svc.tag}</span>
                <span className="service-num">{svc.number}</span>
              </div>

              <div className="service-icon-wrap">
                <span className="service-card-icon">{svc.icon}</span>
              </div>

              <h3>
                {svc.title} <span className="highlight-tag">{svc.highlight}</span>
              </h3>

              {svc.subtitle && (
                <span className="service-card-sub">{svc.subtitle}</span>
              )}

              <p className="service-card-desc">{svc.description}</p>

              <ul className="service-feature-list">
                {svc.features.map((feat, idx) => (
                  <li key={idx}>
                    <span className="check-bullet">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button
                className="service-card-action"
                onClick={() => setActiveModal(svc)}
              >
                Learn More <span>↗</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PART 2: 3D REVENUE MARKETING FUNNEL DIAGRAM ===== */}
      <section className="services-comparison-section" id="revenue-funnel">
        <div className="comparison-container">
          <div className="comparison-header">
            <p className="services-eyebrow">THE KLIQURA ADVANTAGE</p>
            <h2>
              Move From Marketing that Reports Clicks to{" "}
              <span>Marketing that Reports Revenue</span>
            </h2>
            <p className="comparison-subtitle">
              Traditional marketing optimizes for channel metrics. KLIQURA optimizes for business impact
              with a connected 3D growth system.
            </p>
          </div>

          {/* ===== 3D CONICAL FUNNEL CONTAINER ===== */}
          <div className="funnel-showcase-card">
            {/* Top Pill Header */}
            <div className="funnel-top-badge-wrap">
              <span className="funnel-top-badge">REVENUE MARKETING</span>
            </div>

            {/* Visual 3D Funnel with Curved Script Callout */}
            <div className="funnel-3d-visual-wrapper">
              <svg
                viewBox="0 0 560 520"
                className="funnel-3d-svg-canvas"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Drop Shadow Filter */}
                  <filter id="funnelDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#051c52" floodOpacity="0.25" />
                  </filter>

                  {/* Cavity Inner Shadow Gradient */}
                  <radialGradient id="innerCavityGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#010614" />
                    <stop offset="70%" stopColor="#051538" />
                    <stop offset="100%" stopColor="#0a2560" />
                  </radialGradient>

                  {/* Tier 1: Deep Navy 3D Gradient */}
                  <linearGradient id="tierNavyGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#1e4ec8" />
                    <stop offset="25%" stopColor="#0c328e" />
                    <stop offset="70%" stopColor="#051c52" />
                    <stop offset="100%" stopColor="#020e2b" />
                  </linearGradient>

                  {/* Tier 2: School Bus Yellow 3D Gradient */}
                  <linearGradient id="tierYellowGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#fff099" />
                    <stop offset="25%" stopColor="#ffc91a" />
                    <stop offset="70%" stopColor="#ffc300" />
                    <stop offset="100%" stopColor="#d49500" />
                  </linearGradient>

                  {/* Tier 3: Strawberry Red 3D Gradient */}
                  <linearGradient id="tierRedGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#fb7185" />
                    <stop offset="25%" stopColor="#ef4444" />
                    <stop offset="70%" stopColor="#e34e4e" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>

                  {/* Tier 4: Deep Navy Cone Apex Gradient */}
                  <linearGradient id="tierApexGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="40%" stopColor="#0c2f7d" />
                    <stop offset="85%" stopColor="#051c52" />
                    <stop offset="100%" stopColor="#020a1c" />
                  </linearGradient>

                  {/* Rim Bevel Gloss */}
                  <linearGradient id="rimGlossGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                    <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#051c52" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* ===== 3D FUNNEL BODY ===== */}
                <g filter="url(#funnelDropShadow)">
                  {/* Top Hollow Cavity Rim */}
                  <ellipse cx="280" cy="80" rx="195" ry="42" fill="url(#innerCavityGrad)" />
                  <ellipse cx="280" cy="80" rx="195" ry="42" fill="none" stroke="url(#rimGlossGrad)" strokeWidth="3" />

                  {/* ===== TIER 1: VISIBILITY (Deep Navy) ===== */}
                  <path
                    d="M 85,80 C 85,115 475,115 475,80 L 442,168 C 420,196 140,196 118,168 Z"
                    fill="url(#tierNavyGrad)"
                  />
                  {/* Tier 1 Bevel Line */}
                  <path
                    d="M 85,80 C 85,118 475,118 475,80"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    opacity="0.4"
                  />
                  {/* Tier 1 Content: Eye Icon + Text */}
                  <g className="tier-content" transform="translate(280, 138)">
                    {/* SVG Eye Icon */}
                    <path
                      d="M -50,-2 C -35,-16 -15,-22 0,-22 C 15,-22 35,-16 50,-2 C 35,12 15,18 0,18 C -15,18 -35,12 -50,-2 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3"
                    />
                    <circle cx="0" cy="-2" r="7.5" fill="#ffffff" />
                    {/* Text */}
                    <text
                      x="0"
                      y="16"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontFamily="Manrope, sans-serif"
                      fontSize="20"
                      fontWeight="800"
                      letterSpacing="0.5"
                    >
                      Visibility
                    </text>
                  </g>

                  {/* ===== TIER 2: TRAFFIC (School Bus Yellow) ===== */}
                  <path
                    d="M 116,166 C 140,196 420,196 444,166 L 406,260 C 385,286 175,286 154,260 Z"
                    fill="url(#tierYellowGrad)"
                  />
                  {/* Tier 2 Top Shadow Lip */}
                  <path
                    d="M 116,166 C 140,196 420,196 444,166"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="3.5"
                    opacity="0.3"
                  />
                  {/* Tier 2 Content: Cursor Arrow + Text */}
                  <g className="tier-content" transform="translate(280, 226)">
                    {/* Cursor Pointer Icon */}
                    <path
                      d="M -48,-16 L -35,10 L -40,3 L -48,-16 Z"
                      fill="#051c52"
                    />
                    <path
                      d="M -48,-16 L -35,10 L -39,4 L -32,15 L -35,16 L -42,5 L -45,10 Z"
                      fill="#051c52"
                    />
                    {/* Text */}
                    <text
                      x="0"
                      y="6"
                      textAnchor="middle"
                      fill="#051c52"
                      fontFamily="Manrope, sans-serif"
                      fontSize="20"
                      fontWeight="800"
                      letterSpacing="0.5"
                    >
                      Traffic
                    </text>
                  </g>

                  {/* ===== TIER 3: LEADS (Strawberry Red) ===== */}
                  <path
                    d="M 152,258 C 175,286 385,286 408,258 L 366,354 C 348,378 212,378 194,354 Z"
                    fill="url(#tierRedGrad)"
                  />
                  {/* Tier 3 Top Shadow Lip */}
                  <path
                    d="M 152,258 C 175,286 385,286 408,258"
                    fill="none"
                    stroke="#7f1d1d"
                    strokeWidth="3.5"
                    opacity="0.35"
                  />
                  {/* Tier 3 Content: People Group Icon + Text */}
                  <g className="tier-content" transform="translate(280, 318)">
                    {/* People Icon */}
                    <circle cx="-38" cy="-8" r="5" fill="#ffffff" />
                    <path d="M -47,5 C -47,0 -43,-3 -38,-3 C -33,-3 -29,0 -29,5" fill="#ffffff" />
                    <circle cx="-25" cy="-8" r="4" fill="#ffffff" opacity="0.85" />
                    <path d="M -21,5 C -21,1 -17,-2 -13,-2" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                    {/* Text */}
                    <text
                      x="2"
                      y="3"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontFamily="Manrope, sans-serif"
                      fontSize="20"
                      fontWeight="800"
                      letterSpacing="0.5"
                    >
                      Leads
                    </text>
                  </g>

                  {/* ===== TIER 4: REVENUE (Deep Navy Rounded Cone Apex) ===== */}
                  <path
                    d="M 192,352 C 212,378 348,378 368,352 L 316,462 C 304,484 256,484 244,462 Z"
                    fill="url(#tierApexGrad)"
                  />
                  {/* Tier 4 Top Shadow Lip */}
                  <path
                    d="M 192,352 C 212,378 348,378 368,352"
                    fill="none"
                    stroke="#020617"
                    strokeWidth="3.5"
                    opacity="0.45"
                  />
                  {/* Tier 4 Content: Bar Chart Icon + Text */}
                  <g className="tier-content" transform="translate(280, 418)">
                    {/* Bar Chart Icon */}
                    <rect x="-18" y="-14" width="6" height="12" rx="1.5" fill="#ffffff" />
                    <rect x="-9" y="-20" width="6" height="18" rx="1.5" fill="#ffffff" />
                    <rect x="0" y="-26" width="6" height="24" rx="1.5" fill="#ffc300" />
                    <path d="M -22,-18 L -3,-32 L 6,-23" fill="none" stroke="#ffc300" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Text */}
                    <text
                      x="0"
                      y="18"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontFamily="Manrope, sans-serif"
                      fontSize="19"
                      fontWeight="800"
                      letterSpacing="0.5"
                    >
                      Revenue
                    </text>
                  </g>
                </g>
              </svg>

              {/* Hand-drawn Script Callout: "More than just clicks." */}
              <div className="funnel-script-callout">
                <svg className="curved-callout-arrow" viewBox="0 0 70 70">
                  <path
                    d="M 60,60 C 40,25 25,20 10,22"
                    fill="none"
                    stroke="#051c52"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <polygon points="12,14 4,22 14,28" fill="#051c52" />
                </svg>
                <div className="script-text-wrap">
                  <span className="script-text">More than</span>
                  <span className="script-text script-highlight">just clicks.</span>
                  <div className="script-yellow-underline" />
                </div>
              </div>
            </div>

            {/* ===== HORIZONTAL PILL BAR WITH 4 POINTS (Image 3) ===== */}
            <div className="funnel-points-pill-bar">
              {/* Point 1: Right Audience */}
              <div className="pill-point-item">
                <div className="point-icon-circle">
                  <span className="point-icon">🎯</span>
                </div>
                <div className="point-text-block">
                  <strong>Right Audience</strong>
                  <span>(Not Just More People)</span>
                </div>
              </div>

              <div className="pill-divider" />

              {/* Point 2: Better Engagement */}
              <div className="pill-point-item">
                <div className="point-icon-circle">
                  <span className="point-icon">📊</span>
                </div>
                <div className="point-text-block">
                  <strong>Better Engagement</strong>
                  <span>(Real Interest)</span>
                </div>
              </div>

              <div className="pill-divider" />

              {/* Point 3: Quality Leads */}
              <div className="pill-point-item">
                <div className="point-icon-circle">
                  <span className="point-icon">👥</span>
                </div>
                <div className="point-text-block">
                  <strong>Quality Leads</strong>
                  <span>(Not Just Traffic)</span>
                </div>
              </div>

              <div className="pill-divider" />

              {/* Point 4: Higher Revenue */}
              <div className="pill-point-item">
                <div className="point-icon-circle">
                  <span className="point-icon">📈</span>
                </div>
                <div className="point-text-block">
                  <strong>Higher Revenue</strong>
                  <span>(Lasting Growth)</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SIDE-BY-SIDE DETAILED COMPARISON GRID ===== */}
          <div className="comparison-grid">
            {comparisonData.map((item, index) => (
              <div key={index} className="comparison-card">
                <span className="comp-category">{item.category}</span>
                <div className="comp-row">
                  <div className="comp-col comp-trad">
                    <small>TRADITIONAL WAY</small>
                    <p>{item.traditional}</p>
                  </div>
                  <div className="comp-divider" />
                  <div className="comp-col comp-kliq">
                    <small>THE KLIQURA WAY</small>
                    <p>{item.kliqura}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE DETAIL MODAL ===== */}
      {activeModal && (
        <div
          className="service-modal-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("service-modal-overlay")) {
              setActiveModal(null);
            }
          }}
        >
          <div className={`service-modal modal-border-${activeModal.color}`}>
            <button
              className="service-modal-close"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="modal-badge">{activeModal.tag}</span>

            <h3>
              {activeModal.title} {activeModal.highlight}
            </h3>

            {activeModal.subtitle && (
              <p className="modal-subtitle">{activeModal.subtitle}</p>
            )}

            <p className="modal-details-text">{activeModal.details}</p>

            <div className="modal-key-points">
              <h4>Deliverables Included:</h4>
              <ul>
                {activeModal.features.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <Link
                to="/contact-us"
                className="services-primary-btn"
                onClick={() => setActiveModal(null)}
              >
                Inquire About This Service <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="services-cta-section">
        <p className="services-eyebrow">READY FOR REAL REVENUE?</p>
        <h2>
          Stop paying for clicks.
          <br />
          <span>Start investing in growth.</span>
        </h2>
        <p className="cta-desc">
          Schedule a free digital marketing audit with our Udaipur team. We'll show you
          exactly where your funnel is leaking and how to scale profitably.
        </p>

        <Link to="/contact-us" className="services-primary-btn">
          Get Your Free Growth Audit <span>↗</span>
        </Link>
      </section>
    </main>
  );
}