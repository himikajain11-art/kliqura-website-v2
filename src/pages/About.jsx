import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  const scrollToContent = (e) => {
    e.preventDefault();
    const el = document.getElementById("about-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="about-page">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-eyebrow">ABOUT KLIQURA • UDAIPUR</p>

          <h1>
            Strategy that finds
            <span> the right target.</span>
          </h1>

          <p className="about-hero-text">
            KLIQURA is a trusted digital marketing agency in Udaipur, helping
            businesses build a strong online presence, acquire high-value customers,
            and achieve continuous, measurable growth.
          </p>

          <div className="about-hero-buttons">
            <Link to="/contact-us" className="about-primary-button">
              Get Free Audit <span>↗</span>
            </Link>

            <a
              href="#about-content"
              onClick={scrollToContent}
              className="about-outline-button"
            >
              Know More
            </a>
          </div>
        </div>

        {/* ===== ATTRACTIVE PRECISION TARGET DIAGRAM ===== */}
        <div className="about-target-visual" aria-hidden="true">
          <div className="target-board">
            {/* Ambient Background Glow */}
            <div className="target-ambient-glow" />

            {/* Target Reticle Crosshairs */}
            <div className="target-crosshair target-crosshair-h" />
            <div className="target-crosshair target-crosshair-v" />

            {/* Outer Ring: School Bus Yellow with subtle pulse */}
            <div className="target-ring target-ring-outer">
              <span className="target-badge badge-yellow">🎯 Precision</span>
            </div>

            {/* Middle Ring: Strawberry Red with accent */}
            <div className="target-ring target-ring-middle">
              <span className="target-badge badge-red">📈 High ROI</span>
            </div>

            {/* Inner Ring: Deep Navy */}
            <div className="target-ring target-ring-inner">
              <span className="target-badge badge-navy">⚡ Growth</span>
            </div>

            {/* Center Bullseye Dot with Ping Waves */}
            <div className="target-center-dot">
              <div className="target-ping" />
              <div className="target-core" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE / OVERVIEW ===== */}
      <section className="about-overview-section" id="about-content">
        <div className="overview-container">
          <div className="overview-top">
            <p className="about-eyebrow">WHO WE ARE</p>
          </div>

          <div className="overview-main">
            <div className="overview-title-wrap">
              <span className="overview-number">01</span>
              <h2>
                Your growth is
                <span> our focus.</span>
              </h2>
            </div>

            <div className="overview-content">
              <p>
                KLIQURA is a performance-first digital marketing agency from Udaipur,
                focused on helping startups, local businesses, and growing brands scale
                online. We combine creative storytelling, intelligent media buying, and
                data analytics to deliver high-converting campaigns that connect with the
                right audience.
              </p>

              <p>
                Whether you are launching a new brand or scaling an established business,
                our custom digital solutions are built to make you stand out in competitive
                markets. Before executing any campaign, we deep-dive into your customer persona
                and revenue goals to build a roadmap that actually works.
              </p>

              <div className="overview-cta-wrap">
                <Link to="/contact-us" className="overview-link">
                  Talk To Our Team <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AGENCY STATS STRIP ===== */}
      <section className="about-stats-strip">
        <div className="stats-container">
          <div className="stat-card">
            <strong>250+</strong>
            <span>Campaigns Delivered</span>
          </div>

          <div className="stat-card">
            <strong>3.8×</strong>
            <span>Average Ad Return</span>
          </div>

          <div className="stat-card">
            <strong>98%</strong>
            <span>Client Retention Rate</span>
          </div>

          <div className="stat-card">
            <strong>Udaipur</strong>
            <span>Headquarters & Global Reach</span>
          </div>
        </div>
      </section>

      {/* ===== WHY KLIQURA / VALUES ===== */}
      <section className="about-values-section">
        <div className="about-values-heading">
          <p className="about-eyebrow">WHY KLIQURA</p>

          <h2>
            The way we help
            <span> brands grow.</span>
          </h2>

          <p>
            We combine clear strategy, creative thinking, and performance-focused
            execution to help businesses dominate their digital footprint.
          </p>
        </div>

        <div className="about-values-cards">
          {/* Card 1 */}
          <article className="value-card">
            <div className="value-icon icon-yellow">◎</div>
            <h3>Think Smart</h3>
            <p>
              We analyze your market, competitors, and target audience before crafting
              tailored strategies that deliver sustainable, compounding results.
            </p>
          </article>

          {/* Card 2: Featured Navy Card */}
          <article className="value-card value-card-featured">
            <div className="value-icon icon-red">↗</div>
            <h3>Grow Better</h3>
            <p>
              Our creative campaigns, conversion-rate optimization, and full-funnel marketing
              turn casual clicks into loyal, paying customers.
            </p>
          </article>

          {/* Card 3 */}
          <article className="value-card">
            <div className="value-icon icon-navy">✦</div>
            <h3>Stay Visible</h3>
            <p>
              We keep your brand top-of-mind through authoritative SEO, consistent social
              presence, and high-impact digital storytelling.
            </p>
          </article>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="about-final-section" id="contact">
        <p className="about-eyebrow">WHY KLIQURA?</p>

        <h2>
          Looking for a trusted digital marketing agency
          <span> in Udaipur?</span>
        </h2>

        <p className="about-final-text">
          KLIQURA is the right growth partner for your business. Let's build strong
          brand awareness, capture your target audience, and scale revenue together.
        </p>

        <Link to="/contact-us" className="about-primary-button">
          Let&apos;s Work Together <span>↗</span>
        </Link>
      </section>
    </main>
  );
}