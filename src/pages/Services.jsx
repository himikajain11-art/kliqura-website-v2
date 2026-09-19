import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Growth Marketing",
    icon: "↗",
    description: "Smart strategies focused on sustainable brand and business growth.",
    details:
      "We build long-term growth systems, not one-off campaigns. This means mapping your customer journey, identifying the highest-leverage channels for your business, and continuously testing and optimizing so growth compounds over time instead of stalling after a quick spike.",
  },
  {
    number: "02",
    title: "Performance Marketing",
    icon: "◉",
    description: "Result-driven campaigns designed for leads, conversions and sales.",
    details:
      "Every campaign we run is tied to a clear number — leads, sign-ups, or sales. We set up tracking, run structured A/B tests, and reallocate budget toward what is actually converting, so your ad spend keeps getting more efficient month over month.",
  },
  {
    number: "03",
    title: "SEO",
    subtitle: "Search Engine Optimization",
    icon: "⌕",
    description: "Improve search visibility and help the right people find your brand.",
    details:
      "Our SEO process covers technical audits, keyword research, on-page optimization and content strategy. The goal is sustainable organic traffic — ranking for the searches your ideal customers are already making, so you get consistent visibility without paying for every click.",
  },
  {
    number: "04",
    title: "Content Writing",
    icon: "✎",
    description: "Clear, relevant and engaging content created for your audience.",
    details:
      "From blog posts to product pages, we write content that is easy to read and built around what your audience actually searches for and cares about. Every piece is written to inform, build trust, and gently guide the reader toward taking action.",
  },
  {
    number: "05",
    title: "Social Media Management",
    icon: "#",
    description: "Consistent social presence, community building and content planning.",
    details:
      "We handle content calendars, post creation, scheduling and community engagement across your key platforms. The focus is consistency and relevance — showing up regularly with content that fits your brand voice and actually resonates with your followers.",
  },
  {
    number: "06",
    title: "Website Optimization",
    icon: "</>",
    description: "Better website experience, speed and conversion-focused improvements.",
    details:
      "We review your site's speed, structure and user flow to find where visitors drop off. Then we make targeted improvements — faster load times, clearer navigation, and stronger calls to action — so more of your existing traffic turns into real results.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="hero-content">
          <p className="eyebrow">KLIQURA / SERVICES</p>

          <h1>
            Digital solutions
            <span> built to grow.</span>
          </h1>

          <p className="hero-description">
            We combine strategy, creativity and performance marketing to help
            your brand reach more people and create real impact.
          </p>

          <a href="#our-services" className="primary-button">
            Explore Services <span>↓</span>
          </a>
        </div>

        {/* Clean hero diagram — no circles */}
        <div className="hero-visual" aria-hidden="true">
          <div className="marketing-flow">
            <div className="flow-heading">
              <span>YOUR DIGITAL GROWTH</span>
              <i />
            </div>

            <div className="flow-item flow-growth">
              <span className="flow-icon">↗</span>
              <div>
                <small>STRATEGY</small>
                <strong>Growth</strong>
              </div>
            </div>

            <div className="flow-item flow-seo">
              <span className="flow-icon">⌕</span>
              <div>
                <small>VISIBILITY</small>
                <strong>SEO</strong>
              </div>
            </div>

            <div className="flow-item flow-ads">
              <span className="flow-icon">◉</span>
              <div>
                <small>CAMPAIGNS</small>
                <strong>Paid Ads</strong>
              </div>
            </div>

            <div className="flow-item flow-social">
              <span className="flow-icon">#</span>
              <div>
                <small>CONTENT</small>
                <strong>Social</strong>
              </div>
            </div>

            <span className="flow-line line-growth" />
            <span className="flow-line line-seo" />
            <span className="flow-line line-ads" />
            <span className="flow-line line-social" />

            <span className="hero-plus plus-left">+</span>
            <span className="hero-plus plus-right">+</span>
          </div>
        </div>
      </section>

      <section className="services-section" id="our-services">
        <div className="services-heading">
          <p className="eyebrow">WHAT WE OFFER</p>

          <h2>
            Everything your brand needs
            <span> to grow online.</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>

              <h3>{service.title}</h3>

              {service.subtitle && (
                <p className="service-subtitle">{service.subtitle}</p>
              )}

              <p className="service-description">{service.description}</p>

              <button
                type="button"
                className="service-learn-more"
                onClick={() => setActiveService(service)}
              >
                Learn More <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {activeService && (
        <div
          className="service-modal-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("service-modal-overlay")) {
              setActiveService(null);
            }
          }}
        >
          <div className="service-modal">
            <button
              className="service-modal-close"
              onClick={() => setActiveService(null)}
            >
              ✕
            </button>

            <span className="service-modal-number">
              {activeService.number}
            </span>
            <span className="service-modal-icon">{activeService.icon}</span>

            <h3>{activeService.title}</h3>

            {activeService.subtitle && (
              <p className="service-modal-subtitle">
                {activeService.subtitle}
              </p>
            )}

            <p className="service-modal-details">{activeService.details}</p>

            <a href="#contact" onClick={() => setActiveService(null)}>
              Start a Project <span>↗</span>
            </a>
          </div>
        </div>
      )}

      <section className="services-cta" id="contact">
        <p>READY TO BUILD SOMETHING REMARKABLE?</p>

        <h2>
          Let&apos;s grow your <span>brand.</span>
        </h2>

        <a href="mailto:hello@kliqura.com" className="primary-button">
          Start a Project <span>↗</span>
        </a>
      </section>
    </main>
  );
}