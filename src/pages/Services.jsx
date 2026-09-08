import React from "react";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Growth Marketing",
    icon: "↗",
    description: "Smart strategies focused on sustainable brand and business growth.",
  },
  {
    number: "02",
    title: "Performance Marketing",
    icon: "◉",
    description: "Result-driven campaigns designed for leads, conversions and sales.",
  },
  {
    number: "03",
    title: "SEO",
    subtitle: "Search Engine Optimization",
    icon: "⌕",
    description: "Improve search visibility and help the right people find your brand.",
  },
  {
    number: "04",
    title: "Content Writing",
    icon: "✎",
    description: "Clear, relevant and engaging content created for your audience.",
  },
  {
    number: "05",
    title: "Copy Writing",
    icon: "Aa",
    description: "Words that capture attention and inspire people to take action.",
  },
  {
    number: "06",
    title: "Graphic Design",
    icon: "✦",
    description: "Strong visual communication that makes your brand memorable.",
  },
  {
    number: "07",
    title: "Social Media Management",
    icon: "#",
    description: "Consistent social presence, community building and content planning.",
  },
  {
    number: "08",
    title: "Paid Advertising",
    icon: "▣",
    description: "Targeted paid campaigns that turn budget into measurable outcomes.",
  },
  {
    number: "09",
    title: "Website Optimization",
    icon: "</>",
    description: "Better website experience, speed and conversion-focused improvements.",
  },
];

export default function Services() {
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

              <a href="#contact">
                Learn More <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

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