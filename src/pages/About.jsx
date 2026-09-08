import React from "react";
import "./About.css";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-eyebrow">ABOUT KLIQURA • UDAIPUR</p>

          <h1>
            Strategy that finds
            <span> the right target.</span>
          </h1>

          <p className="about-hero-text">
            KLIQURA is a trusted digital marketing agency in Udaipur, helping
            businesses build a strong online presence and achieve continuous
            growth.
          </p>

          <div className="about-hero-buttons">
            <a href="#contact" className="about-primary-button">
              Get Free Audit <span>↗</span>
            </a>

            <a href="#about-content" className="about-outline-button">
              Know More
            </a>
          </div>
        </div>

        {/* Plain Target Board */}
        <div className="about-target-visual" aria-hidden="true">
          <div className="target-board">
            <div className="target-ring target-ring-outer" />
            <div className="target-ring target-ring-middle" />
            <div className="target-ring target-ring-inner" />
            <div className="target-center-dot" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-overview-section" id="about-content">
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
              KLIQURA is a trusted digital marketing agency from Udaipur,
              focused on helping startups and local businesses grow online. We
              are dedicated to helping businesses build a strong online presence
              and achieve continuous growth. We use creative ideas, marketing
              strategy and data analytics to create effective campaigns that
              reach the right audience.
            </p>

            <p>
              Whether you are a startup or a local business, our digital
              marketing solutions are designed to help you stand out in a
              competitive landscape. Before starting any campaign, we
              understand your target audience and business objectives so that
              we can create the right strategy for your business.
            </p>

            <a href="#contact" className="overview-link">
              Talk To Our Team <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHY KLIQURA */}
      <section className="about-values-section">
        <div className="about-values-heading">
          <p className="about-eyebrow">WHY KLIQURA</p>

          <h2>
            The way we help
            <span> brands grow.</span>
          </h2>

          <p>
            We combine clear strategy, creative thinking and
            performance-focused execution to help businesses grow with
            confidence.
          </p>
        </div>

        <div className="about-values-cards">
          <article className="value-card">
            <div className="value-icon">◎</div>

            <h3>Think Smart</h3>

            <p>
              We understand your business, target audience and goals before
              building a strategy that works for you.
            </p>
          </article>

          <article className="value-card value-card-featured">
            <div className="value-icon">↗</div>

            <h3>Grow Better</h3>

            <p>
              Our creative ideas, data analytics and focused marketing help
              your brand achieve meaningful and measurable growth.
            </p>
          </article>

          <article className="value-card">
            <div className="value-icon">✦</div>

            <h3>Stay Visible</h3>

            <p>
              We help you build a strong online presence that keeps your brand
              visible, consistent and memorable.
            </p>
          </article>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-section" id="contact">
        <p className="about-eyebrow">WHY KLIQURA?</p>

        <h2>
          Looking for a trusted digital marketing agency
          <span> in Udaipur?</span>
        </h2>

        <p className="about-final-text">
          KLIQURA is the right choice for your business. Our goal is to build
          brand awareness, attract the right audience and deliver real growth
          through creative ideas and effective digital strategies.
        </p>

        <a href="mailto:hello@kliqura.com" className="about-primary-button">
          Let&apos;s Work Together <span>↗</span>
        </a>
      </section>
    </main>
  );
}