import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/kliqura-logo.png";
import Popup from "../components/Popup";

function Home() {
  const services = [
    {
      title: "SEO",
      text: "Get found by the people already searching for what you offer.",
      icon: "⌕",
    },
    {
      title: "Social Media",
      text: "Create content that makes the right audience stop and care.",
      icon: "◉",
    },
    {
      title: "Paid Ads",
      text: "Turn smart campaigns into quality leads and real growth.",
      icon: "↗",
    },
  ];

  const results = [
    { number: "218%", text: "Average traffic growth" },
    { number: "3.8×", text: "Average ad return" },
    { number: "250+", text: "Growth stories" },
    { number: "98%", text: "Happy clients" },
  ];

  return (
    <div className="home-page">
      <Popup />

      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-small-title">DIGITAL MARKETING THAT MOVES</p>

          <h1>
            Make your next <span>click</span> count.
          </h1>

          <p className="home-description">
            kliqura turns brave ideas into digital growth with strategy,
            creativity, and results that matter.
          </p>

          <div className="home-buttons">
            <Link to="/contact" className="yellow-button">
              Get Free Audit ↗
            </Link>

            <Link to="/work" className="outline-button">
              View Our Work ↗
            </Link>
          </div>

          <div className="home-mini-results">
            <div>
              <strong>250+</strong>
              <span>Growth stories</span>
            </div>

            <div>
              <strong>4.9/5</strong>
              <span>Client love score</span>
            </div>
          </div>
        </div>

        <div className="home-hero-visual">
          <svg viewBox="0 0 400 400" className="growth-ring">
            <g transform="rotate(-90 200 200)">
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#051c52"
                strokeWidth="34"
                strokeDasharray="211.8 667.4"
                strokeDashoffset="0"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#ffc300"
                strokeWidth="34"
                strokeDasharray="211.8 667.4"
                strokeDashoffset="-219.8"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#e34e4e"
                strokeWidth="34"
                strokeDasharray="211.8 667.4"
                strokeDashoffset="-439.6"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="#000000"
                strokeWidth="34"
                strokeDasharray="211.8 667.4"
                strokeDashoffset="-659.4"
              />
            </g>
          </svg>

          <div className="ring-center">
            <p className="ring-brand">kliqura</p>
            <strong>Growth Engine</strong>
            <span>218% Traffic Growth</span>
            <div className="ring-play">▶</div>
          </div>

          <span className="ring-label label-navy label-top-left">Growth</span>
          <span className="ring-label label-yellow label-top-right">SEO</span>
          <span className="ring-label label-red label-bottom-right">
            Paid Ads
          </span>
          <span className="ring-label label-black label-bottom-left">
            Social
          </span>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="home-small-title">THE kliqura WAY</p>

          <h2>
            Big-agency thinking.
            <br />
            Human-sized partnership.
          </h2>

          <p>
            We combine data, creative instinct, and a love for detail to make
            your brand impossible to ignore online.
          </p>

          <Link to="/about" className="outline-button">
            Meet kliqura ↗
          </Link>
        </div>

        <div className="home-quote">
          "The best marketing does not shout. It makes the right people lean
          in."
        </div>
      </section>

      <section className="home-services">
        <p className="home-small-title">WHAT WE DO</p>

        <h2>Every lever. One clear direction.</h2>

        <p className="section-description">
          A connected marketing system that brings your next best customer
          closer.
        </p>

        <div className="home-service-grid">
          {services.map((service) => (
            <div className="home-service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to="/services">Discover ↗</Link>
            </div>
          ))}
        </div>

        <div className="center-button">
          <Link to="/services" className="outline-button">
            View All Services ↗
          </Link>
        </div>
      </section>

      <section className="home-results">
        {results.map((result) => (
          <div className="result-box" key={result.text}>
            <strong>{result.number}</strong>
            <span>{result.text}</span>
          </div>
        ))}
      </section>

      <section className="home-work">
        <p className="home-small-title">PROOF, NOT PROMISES</p>

        <h2>Work that made a difference.</h2>

        <div className="home-work-grid">
          <div className="work-card yellow-card">
            <small>SEO</small>
            <h3>UrbanNest Realty</h3>
            <p>Low visibility in local search.</p>
            <strong>218% organic traffic</strong>
          </div>

          <div className="work-card red-card">
            <small>PAID ADS</small>
            <h3>Nourish & Co.</h3>
            <p>High cost per acquisition.</p>
            <strong>3.8× return on ad spend</strong>
          </div>

          <div className="work-card navy-card">
            <small>SOCIAL MEDIA</small>
            <h3>Mettle Studio</h3>
            <p>An inconsistent social presence.</p>
            <strong>142% audience growth</strong>
          </div>
        </div>

        <div className="center-button">
          <Link to="/work" className="yellow-button">
            See Case Studies ↗
          </Link>
        </div>
      </section>

      <section className="home-testimonial">
        <p className="home-small-title">CLIENT NOTES</p>

        <h2>Growth feels better together.</h2>

        <div className="testimonial-card">
          <p>
            "kliqura understood the problem before we had the words for it.
            Results followed fast."
          </p>
          <span>— alien Doe, Founder, Nourish & Co.</span>
        </div>
      </section>

      <section className="home-cta">
        <img src={logo} alt="kliqura logo" />

        <div>
          <p>YOUR NEXT MOVE</p>
          <h2>Let's find the growth hiding in plain sight.</h2>
        </div>

        <Link to="/contact" className="yellow-button">
          Get Your Free Audit ↗
        </Link>
      </section>
    </div>
  );
}

export default Home;