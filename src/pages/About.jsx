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
            KLIQURA is a performance-driven digital marketing agency in Udaipur,
            helping businesses build an unmissable online presence, capture high-intent
            customers, and achieve continuous, measurable growth.
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

          {/* Agency Trust Badges */}
          <div className="about-hero-badges">
            <span>✓ Google & Meta Standards</span>
            <span>✓ Data-Driven ROAS</span>
            <span>✓ Transparent Analytics</span>
          </div>
        </div>

        {/* ===== CLEAN PRECISION TARGET DIAGRAM (Badges Removed) ===== */}
        <div className="about-target-visual" aria-hidden="true">
          <div className="target-board">
            {/* Ambient Background Glow */}
            <div className="target-ambient-glow" />

            {/* Target Reticle Crosshairs */}
            <div className="target-crosshair target-crosshair-h" />
            <div className="target-crosshair target-crosshair-v" />

            {/* Outer Ring: School Bus Yellow */}
            <div className="target-ring target-ring-outer" />

            {/* Middle Ring: Strawberry Red */}
            <div className="target-ring target-ring-middle" />

            {/* Inner Ring: Deep Navy */}
            <div className="target-ring target-ring-inner" />

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

      {/* ===== DIGITAL MARKETING: 4-STEP GROWTH FRAMEWORK ===== */}
      <section className="about-framework-section">
        <div className="framework-container">
          <div className="framework-header">
            <p className="about-eyebrow">HOW WE WORK</p>
            <h2>The 4-step framework that drives predictable growth.</h2>
            <p className="framework-subtitle">
              No guesswork. A battle-tested digital marketing process designed to scale your revenue.
            </p>
          </div>

          <div className="framework-grid">
            <div className="framework-card">
              <span className="step-num step-yellow">01</span>
              <h3>Audit & Strategy</h3>
              <p>
                We dissect your existing funnels, customer drop-offs, and competitor ads to craft a high-ROI growth roadmap.
              </p>
            </div>

            <div className="framework-card">
              <span className="step-num step-red">02</span>
              <h3>Creative & Messaging</h3>
              <p>
                We develop scroll-stopping creatives, conversion copy, and landing pages that turn cold visitors into buyers.
              </p>
            </div>

            <div className="framework-card">
              <span className="step-num step-navy">03</span>
              <h3>Targeted Execution</h3>
              <p>
                Precision campaign deployment across Google Ads, Meta Ads, and Organic SEO targeting high-intent prospects.
              </p>
            </div>

            <div className="framework-card">
              <span className="step-num step-yellow">04</span>
              <h3>Scale & Optimize</h3>
              <p>
                Continuous multivariate testing, bid optimization, and weekly transparent dashboards to scale your profits.
              </p>
            </div>
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