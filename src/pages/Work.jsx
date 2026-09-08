import "./Work.css";
import { Link } from "react-router-dom";
import workHeroImage from "../assets/work-hero.jpg";

function Work() {
  const projects = [
    {
      number: "01",
      type: "SEO",
      title: "Search Visibility",
      result: "218%",
      label: "Organic traffic growth",
    },
    {
      number: "02",
      type: "PAID ADVERTISING",
      title: "Campaign Performance",
      result: "3.8×",
      label: "Return on ad spend",
    },
    {
      number: "03",
      type: "SOCIAL MEDIA",
      title: "Audience Momentum",
      result: "142%",
      label: "Community growth",
    },
    {
      number: "04",
      type: "CONTENT",
      title: "Content That Connects",
      result: "10K+",
      label: "Monthly content reach",
    },
    {
      number: "05",
      type: "GRAPHIC DESIGN",
      title: "Creative Identity",
      result: "360°",
      label: "Consistent brand presence",
    },
    {
      number: "06",
      type: "WEBSITE",
      title: "Conversion Journey",
      result: "67%",
      label: "More enquiries generated",
    },
  ];

  return (
    <main className="work-page">
      {/* HERO IMAGE */}
      <section
        className="work-hero"
        style={{ backgroundImage: `url(${workHeroImage})` }}
      >
        <div className="work-hero-overlay" />

        <div className="work-hero-content">
          <p className="work-label">KLIQURA / OUR WORK</p>

          <h1>
            Digital marketing
            <span> that delivers.</span>
          </h1>

          <p>
            We combine creative strategy, strong content and performance
            marketing to help brands grow, engage and achieve meaningful
            results.
          </p>

          <Link to="/contact" className="work-primary-button">
            Let&apos;s Grow Together <span>↗</span>
          </Link>
        </div>
      </section>

      {/* RESULTS */}
      <section className="work-results-section">
        <div className="work-section-heading">
          <p className="work-label">OUR WORK IN ACTION</p>

          <h2>
            Focused on work
            <span> that moves brands forward.</span>
          </h2>

          <p>
            Every strategy is built to improve visibility, engagement,
            enquiries and long-term digital growth.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.number}>
              <div className="work-card-top">
                <span className="work-number">{project.number}</span>
                <span className="work-arrow">↗</span>
              </div>

              <p className="work-type">{project.type}</p>

              <h3>{project.title}</h3>

              <div className="work-result">
                <strong>{project.result}</strong>
                <span>{project.label}</span>
              </div>

              <Link to="/contact">Let&apos;s Create Results</Link>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="work-process-section">
        <div className="work-process-heading">
          <p className="work-label">THE KLIQURA METHOD</p>

          <h2>
            Clear strategy.
            <span> Real progress.</span>
          </h2>
        </div>

        <div className="work-steps">
          <div className="work-step">
            <span>01</span>
            <div>
              <h3>Understand</h3>
              <p>We learn about your business, audience and goals.</p>
            </div>
          </div>

          <div className="work-step">
            <span>02</span>
            <div>
              <h3>Strategize</h3>
              <p>We create a focused plan for the right opportunities.</p>
            </div>
          </div>

          <div className="work-step">
            <span>03</span>
            <div>
              <h3>Execute</h3>
              <p>We turn strategy into creative and effective campaigns.</p>
            </div>
          </div>

          <div className="work-step">
            <span>04</span>
            <div>
              <h3>Improve</h3>
              <p>We track results and keep improving performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="work-final-section">
        <p className="work-label">YOUR BRAND COULD BE NEXT</p>

        <h2>
          Ready to create
          <span> momentum?</span>
        </h2>

        <p>
          Let&apos;s build a digital strategy that helps your business grow.
        </p>

        <Link to="/contact" className="work-primary-button">
          Get Your Free Audit <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Work;