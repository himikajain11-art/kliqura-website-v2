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
    traditional: "Vanity metrics (likes, impressions, raw clicks) that look good on paper but do not pay the bills.",
    kliqura: "Bankable business metrics (qualified leads, customer acquisition cost, closed revenue, and lifetime value).",
  },
  {
    category: "Funnel Architecture",
    traditional: "Siloed channels working in isolation, leading to massive leaks where interested prospects vanish.",
    kliqura: "Connected multi-channel ecosystem where SEO, Paid Ads, Content, and Web Optimization amplify each other.",
  },
  {
    category: "Audience Targeting",
    traditional: "Broad, generic demographic targeting with generic messaging that gets ignored by real buyers.",
    kliqura: "Precision high-intent targeting based on buyer psychology, search intent, and conversion propensity.",
  },
  {
    category: "Decision Making",
    traditional: "Guesswork and gut feeling, leading to erratic budgets and unpredictable, plateauing ROI.",
    kliqura: "100% data-driven attribution with rapid A/B testing and transparent weekly revenue reporting.",
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
            See How We're Different ↓
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

      {/* ===== PART 2: LOGICAL COMPARISON DIAGRAM (Traditional vs KLIQURA Revenue Marketing) ===== */}
      <section className="services-comparison-section" id="revenue-funnel">
        <div className="comparison-container">
          <div className="comparison-header">
            <p className="services-eyebrow">THE REVENUE ADVANTAGE</p>
            <h2>
              Move From Marketing that Reports Clicks to{" "}
              <span>Marketing that Reports Revenue</span>
            </h2>
            <p className="comparison-subtitle">
              Traditional marketing optimizes for channel vanity metrics. KLIQURA connects your whole
              digital funnel to drive measurable bottom-line growth.
            </p>
          </div>

          {/* ===== INTERACTIVE SPLIT FUNNEL DIAGRAM ===== */}
          <div className="split-funnel-wrapper">
            <div className="funnel-container">
              {/* LEFT HALF: Traditional Leaky Funnel */}
              <div className="funnel-half funnel-traditional">
                <div className="funnel-side-badge badge-muted">Traditional Digital Marketing</div>

                <div className="funnel-visual-block">
                  <div className="broken-funnel-shape">
                    <div className="cracked-segment seg-top">
                      <span className="crack-line">⚡</span>
                      <span className="seg-label">Empty Impressions</span>
                    </div>
                    <div className="cracked-segment seg-mid">
                      <span className="crack-line">⚡</span>
                      <span className="seg-label">Siloed Clicks</span>
                    </div>
                    <div className="cracked-segment seg-bot">
                      <span className="crack-line">⚡</span>
                      <span className="seg-label">Leaky Leads</span>
                    </div>
                    <div className="leaking-drops">
                      <span>💧 Wasted Spend</span>
                    </div>
                  </div>
                </div>

                <div className="funnel-bullet-card card-dim">
                  <h4>The Broken Funnel</h4>
                  <p>
                    Isolated campaigns with disconnected tracking create an inefficient, leaky funnel
                    where decisions are based on gut feeling and vanity clicks.
                  </p>
                  <ul className="funnel-checklist list-negative">
                    <li>✕ Disconnected marketing & sales data</li>
                    <li>✕ Paying for clicks that never convert</li>
                    <li>✕ Inconsistent, plateauing lead flow</li>
                  </ul>
                </div>
              </div>

              {/* CENTER DIVIDER */}
              <div className="funnel-center-divider">
                <div className="vs-circle">VS</div>
              </div>

              {/* RIGHT HALF: KLIQURA Connected Revenue Funnel */}
              <div className="funnel-half funnel-kliqura">
                <div className="funnel-side-badge badge-brand">KLIQURA Revenue Marketing</div>

                <div className="funnel-visual-block">
                  <div className="revenue-funnel-shape">
                    {/* Ascending Growth Arrow */}
                    <div className="soaring-growth-path">
                      <span className="soaring-arrow">↗</span>
                      <span className="growth-text">Compounding Revenue</span>
                    </div>

                    <div className="connected-segment seg-navy">
                      <span className="stage-num">01</span>
                      <span className="seg-label">Brand Authority & Search</span>
                    </div>
                    <div className="connected-segment seg-yellow">
                      <span className="stage-num">02</span>
                      <span className="seg-label">High-Intent Traffic Capture</span>
                    </div>
                    <div className="connected-segment seg-red">
                      <span className="stage-num">03</span>
                      <span className="seg-label">Qualified Conversion Engine</span>
                    </div>
                    <div className="connected-segment seg-growth">
                      <span className="stage-num">04</span>
                      <span className="seg-label">Revenue Scaling & Retention</span>
                    </div>
                  </div>
                </div>

                <div className="funnel-bullet-card card-highlight">
                  <h4>The Connected Revenue Engine</h4>
                  <p>
                    KLIQURA connects your audience, channels, and conversion data to make revenue-backed
                    decisions that continuously accelerate real business profits.
                  </p>
                  <ul className="funnel-checklist list-positive">
                    <li>✓ 100% full-funnel attribution</li>
                    <li>✓ High-intent buyers ready to purchase</li>
                    <li>✓ Predictable, scalable revenue compounding</li>
                  </ul>
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