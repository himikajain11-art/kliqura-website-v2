import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import mascot from "../assets/kliqura-mascot.png";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="kliqura-footer">
      <div className="footer-top-grid">
        {/* LEFT: Mascot Card + Congrats Message */}
        <div className="footer-mascot-box">
          <div className="mascot-card">
            <div className="mascot-speech-bubble">Say Hi! 👋</div>
            <div className="mascot-img-wrap">
              <img
                src={mascot}
                alt="KLIQURA Mascot holding laptop"
                className="mascot-img"
              />
            </div>
          </div>

          <p className="footer-congrats-text">
            Congratulations for traveling from start to the end of this page!
            We'll add 10,000 steps to your fitness tracker! <br />
            <span className="emoji">🤪</span>
          </p>
        </div>

        {/* COLUMN 1: Quick Links */}
        <div className="footer-links-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Our Work</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 2: Our Services (From 2nd Reference Photo) */}
        <div className="footer-links-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services">Growth Marketing</Link>
            </li>
            <li>
              <Link to="/services">Performance Marketing</Link>
            </li>
            <li>
              <Link to="/services">SEO</Link>
            </li>
            <li>
              <Link to="/services">Content Writing</Link>
            </li>
            <li>
              <Link to="/services">Social Media Management</Link>
            </li>
            <li>
              <Link to="/services">Website Optimization</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT: Social Media Icons */}
        <div className="footer-social-col">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="X (Twitter)"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="footer-bottom-divider" />

      {/* BOTTOM ROW: Udaipur agency description & Scroll To Top Button */}
      <div className="footer-bottom-row">
        <p className="footer-agency-desc">
          <strong>KLIQURA</strong> is an integrated creative & digital marketing
          agency based in Udaipur, Rajasthan, India. Offering full-funnel
          solutions in Growth Marketing, Performance Marketing, SEO, Social
          Media Management, and Website Optimization for brands looking to grow
          their business online. If you are reading this, then you're on the
          right site to onboard the best digital marketing agency in Udaipur.
        </p>

        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
