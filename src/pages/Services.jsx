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
            See The Marketing Difference ↓
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

      {/* ===== PART 2: THE 3D FUNNEL COMPARISON (Traditional vs Revenue Marketing) ===== */}
      <section className="services-comparison-section" id="revenue-funnel">
        <div className="comparison-container">
          <div className="comparison-header">
            <p className="services-eyebrow">THE KLIQURA DIFFERENCE</p>
            <h2>
              Move From Marketing that Reports Clicks to{" "}
              <span>Marketing that Reports Revenue</span>
            </h2>
            <p className="comparison-subtitle">
              Traditional marketing optimizes for channel metrics. KLIQURA connects your whole
              digital ecosystem to drive actual bottom-line growth.
            </p>
          </div>

          {/* ===== SIDE-BY-SIDE 3D FUNNEL SHOWCASE ===== */}
          <div className="funnel-comparison-stage">
            <div className="funnel-comparison-grid">
              {/* ===== LEFT: 3D CRACKED FUNNEL (Traditional Marketing - Photo 1) ===== */}
              <div className="funnel-col col-traditional">
                <div className="funnel-col-header">
                  <span className="col-badge badge-traditional">TRADITIONAL MARKETING</span>
                </div>

                <div className="funnel-svg-wrapper">
                  <svg
                    viewBox="0 0 460 480"
                    className="funnel-single-svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <filter id="shadowTrad" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.25" />
                      </filter>

                      {/* Charcoal 3D Metallic Gradients */}
                      <linearGradient id="charcoalTier1" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#475569" />
                        <stop offset="35%" stopColor="#334155" />
                        <stop offset="100%" stopColor="#1e293b" />
                      </linearGradient>
                      <linearGradient id="charcoalTier2" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#3b485c" />
                        <stop offset="35%" stopColor="#293548" />
                        <stop offset="100%" stopColor="#141d2b" />
                      </linearGradient>
                      <linearGradient id="charcoalTier3" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#334155" />
                        <stop offset="35%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                      <linearGradient id="charcoalTier4" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="45%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#020617" />
                      </linearGradient>
                      <radialGradient id="charcoalCavity" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#020617" />
                        <stop offset="75%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#1e293b" />
                      </radialGradient>
                    </defs>

                    {/* 3D Funnel Body */}
                    <g filter="url(#shadowTrad)">
                      {/* Top Hollow Cavity Rim */}
                      <ellipse cx="230" cy="55" rx="190" ry="40" fill="url(#charcoalCavity)" />
                      <ellipse cx="230" cy="55" rx="190" ry="40" fill="none" stroke="#64748b" strokeWidth="2.5" opacity="0.4" />

                      {/* Tier 1 */}
                      <path
                        d="M 40,55 C 40,90 420,90 420,55 L 388,145 C 365,174 95,174 72,145 Z"
                        fill="url(#charcoalTier1)"
                      />

                      {/* Tier 2 */}
                      <path
                        d="M 70,143 C 95,174 365,174 390,143 L 352,240 C 330,268 130,268 108,240 Z"
                        fill="url(#charcoalTier2)"
                      />

                      {/* Tier 3 */}
                      <path
                        d="M 106,238 C 130,268 330,268 354,238 L 312,336 C 294,362 166,362 148,336 Z"
                        fill="url(#charcoalTier3)"
                      />

                      {/* Tier 4 (Apex) */}
                      <path
                        d="M 146,334 C 166,362 294,362 314,334 L 265,446 C 252,468 208,468 195,446 Z"
                        fill="url(#charcoalTier4)"
                      />

                      {/* Sharp Jagged 3D Cracks Running Through Tiers */}
                      <path
                        d="M 175,40 L 205,95 L 190,118 L 225,165 L 208,198 L 220,248 L 198,276 L 216,338 L 194,362 L 225,418 L 218,446"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                      />
                      <path
                        d="M 175,40 L 205,95 L 190,118 L 225,165 L 208,198 L 220,248 L 198,276 L 216,338 L 194,362 L 225,418 L 218,446"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                        opacity="0.85"
                      />
                      {/* Secondary Crack Branch */}
                      <path
                        d="M 205,95 L 235,115 L 255,135"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 208,198 L 240,215 L 250,230"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>

                {/* Clean Points Below Traditional Funnel */}
                <div className="funnel-points-card points-traditional">
                  <h4>The Leaky Funnel Model</h4>
                  <ul className="funnel-card-list">
                    <li>
                      <span className="bullet-x">✕</span>
                      <strong>Disconnected Siloed Channels:</strong> SEO, ads, and web work separately without unified data.
                    </li>
                    <li>
                      <span className="bullet-x">✕</span>
                      <strong>Vanity Metrics:</strong> Focuses on empty impressions and clicks that do not produce sales.
                    </li>
                    <li>
                      <span className="bullet-x">✕</span>
                      <strong>Budget Wastage:</strong> High ad spend leaks through drop-offs before prospects ever convert.
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===== CENTER VS DIVIDER ===== */}
              <div className="funnel-vs-divider">
                <div className="vs-badge">VS</div>
              </div>

              {/* ===== RIGHT: 3D VIBRANT FUNNEL (Revenue Marketing - Photo 2) ===== */}
              <div className="funnel-col col-revenue">
                <div className="funnel-col-header">
                  <span className="col-badge badge-revenue">REVENUE MARKETING</span>
                </div>

                <div className="funnel-svg-wrapper">
                  <svg
                    viewBox="0 0 460 480"
                    className="funnel-single-svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <filter id="shadowBrand" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#051c52" floodOpacity="0.22" />
                      </filter>

                      {/* Brand 3D Gradients */}
                      <linearGradient id="tier1Navy" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#1e4ec8" />
                        <stop offset="30%" stopColor="#0c328e" />
                        <stop offset="70%" stopColor="#051c52" />
                        <stop offset="100%" stopColor="#020e2b" />
                      </linearGradient>

                      <linearGradient id="tier2Yellow" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#fff099" />
                        <stop offset="30%" stopColor="#ffc91a" />
                        <stop offset="70%" stopColor="#ffc300" />
                        <stop offset="100%" stopColor="#d49500" />
                      </linearGradient>

                      <linearGradient id="tier3Red" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#fb7185" />
                        <stop offset="30%" stopColor="#ef4444" />
                        <stop offset="70%" stopColor="#e34e4e" />
                        <stop offset="100%" stopColor="#991b1b" />
                      </linearGradient>

                      <linearGradient id="tier4Apex" x1="0%" y1="0%" x2="100%" y2="80%">
                        <stop offset="0%" stopColor="#1d4ed8" />
                        <stop offset="40%" stopColor="#0c2f7d" />
                        <stop offset="85%" stopColor="#051c52" />
                        <stop offset="100%" stopColor="#020a1c" />
                      </linearGradient>

                      <radialGradient id="brandCavity" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#010614" />
                        <stop offset="75%" stopColor="#051538" />
                        <stop offset="100%" stopColor="#0a2560" />
                      </radialGradient>
                    </defs>

                    {/* 3D Funnel Body */}
                    <g filter="url(#shadowBrand)">
                      {/* Top Hollow Cavity Rim */}
                      <ellipse cx="230" cy="55" rx="190" ry="40" fill="url(#brandCavity)" />
                      <ellipse cx="230" cy="55" rx="190" ry="40" fill="none" stroke="#60a5fa" strokeWidth="2.5" opacity="0.4" />

                      {/* ===== TIER 1: VISIBILITY (Deep Navy) ===== */}
                      <path
                        d="M 40,55 C 40,90 420,90 420,55 L 388,145 C 365,174 95,174 72,145 Z"
                        fill="url(#tier1Navy)"
                      />
                      {/* Tier 1 Content: Eye Icon + Text */}
                      <g transform="translate(230, 114)">
                        <path
                          d="M -44,-2 C -30,-14 -12,-20 0,-20 C 12,-20 30,-14 44,-2 C 30,10 12,16 0,16 C -12,16 -30,10 -44,-2 Z"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.8"
                        />
                        <circle cx="0" cy="-2" r="6.5" fill="#ffffff" />
                        <text
                          x="0"
                          y="15"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontFamily="Manrope, sans-serif"
                          fontSize="18"
                          fontWeight="800"
                        >
                          Visibility
                        </text>
                      </g>

                      {/* ===== TIER 2: TRAFFIC (School Bus Yellow) ===== */}
                      <path
                        d="M 70,143 C 95,174 365,174 390,143 L 352,240 C 330,268 130,268 108,240 Z"
                        fill="url(#tier2Yellow)"
                      />
                      {/* Tier 2 Content: Cursor Arrow + Text */}
                      <g transform="translate(230, 204)">
                        <path
                          d="M -42,-14 L -30,8 L -34,3 L -28,12 L -31,13 L -37,4 L -40,8 Z"
                          fill="#051c52"
                        />
                        <text
                          x="4"
                          y="5"
                          textAnchor="middle"
                          fill="#051c52"
                          fontFamily="Manrope, sans-serif"
                          fontSize="18"
                          fontWeight="800"
                        >
                          Traffic
                        </text>
                      </g>

                      {/* ===== TIER 3: LEADS (Strawberry Red) ===== */}
                      <path
                        d="M 106,238 C 130,268 330,268 354,238 L 312,336 C 294,362 166,362 148,336 Z"
                        fill="url(#tier3Red)"
                      />
                      {/* Tier 3 Content: People Icon + Text */}
                      <g transform="translate(230, 298)">
                        <circle cx="-35" cy="-8" r="4.5" fill="#ffffff" />
                        <path d="M -43,4 C -43,0 -39,-2.5 -35,-2.5 C -31,-2.5 -27,0 -27,4" fill="#ffffff" />
                        <circle cx="-23" cy="-8" r="3.5" fill="#ffffff" opacity="0.85" />
                        <path d="M -20,4 C -20,1 -16,-1 -13,-1" fill="none" stroke="#ffffff" strokeWidth="2" />
                        <text
                          x="4"
                          y="4"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontFamily="Manrope, sans-serif"
                          fontSize="18"
                          fontWeight="800"
                        >
                          Leads
                        </text>
                      </g>

                      {/* ===== TIER 4: REVENUE (Deep Navy Apex) ===== */}
                      <path
                        d="M 146,334 C 166,362 294,362 314,334 L 265,446 C 252,468 208,468 195,446 Z"
                        fill="url(#tier4Apex)"
                      />
                      {/* Tier 4 Content: Bar Chart + Text */}
                      <g transform="translate(230, 396)">
                        <rect x="-16" y="-12" width="5" height="10" rx="1" fill="#ffffff" />
                        <rect x="-8" y="-18" width="5" height="16" rx="1" fill="#ffffff" />
                        <rect x="0" y="-23" width="5" height="21" rx="1" fill="#ffc300" />
                        <path d="M -19,-15 L -3,-28 L 5,-20" fill="none" stroke="#ffc300" strokeWidth="2" strokeLinecap="round" />
                        <text
                          x="0"
                          y="16"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontFamily="Manrope, sans-serif"
                          fontSize="17"
                          fontWeight="800"
                        >
                          Revenue
                        </text>
                      </g>
                    </g>
                  </svg>
                </div>

                {/* Clean Points Below Revenue Funnel */}
                <div className="funnel-points-card points-revenue">
                  <h4>The Connected Growth Engine</h4>
                  <ul className="funnel-card-list">
                    <li>
                      <span className="bullet-check">✓</span>
                      <strong>Full-Funnel Attribution:</strong> Every rupee of ad spend is tied to closed sales & customer LTV.
                    </li>
                    <li>
                      <span className="bullet-check">✓</span>
                      <strong>High-Intent Audience:</strong> Captures active buyers rather than casual window-shoppers.
                    </li>
                    <li>
                      <span className="bullet-check">✓</span>
                      <strong>Compounding Growth:</strong> Continuous multivariate testing turns marketing into a profit center.
                    </li>
                  </ul>
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