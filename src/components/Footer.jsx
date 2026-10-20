import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/kliqura-logo.png";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    { title: "Our Services", path: "/services" },
    { title: "Our Work", path: "/work" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <footer className="kliqura-footer">
      <div className="footer-wrap">
        {/* MAIN 4-COLUMN GRID MATCHING REFERENCE DESIGN */}
        <div className="footer-grid-4col">
          {/* COLUMN 1: Brand Info & WhatsApp Pill Button */}
          <div className="footer-col footer-col-brand">
            <Link to="/" onClick={handleLinkClick} className="footer-logo-link">
              <img src={logo} alt="KLIQURA" className="footer-brand-logo" />
            </Link>
            <p className="footer-brand-desc">
              Transforming brands through high-impact digital marketing,
              performance ads, modern web systems, and creative visual guidelines.
            </p>
            <a
              href="https://wa.me/918239266744?text=Hi%20KLIQURA%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-pill"
            >
              <FaWhatsapp className="pill-wa-icon" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="footer-col footer-col-links">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links-list">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className="footer-nav-link"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Us */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">CONTACT US</h4>
            <div className="footer-contact-items">
              <a href="tel:+918239266744" className="footer-contact-item">
                <span className="contact-item-icon">
                  <FaPhone />
                </span>
                <span className="contact-item-text">+91 82392 66744</span>
              </a>

              <a href="mailto:kliqura@gmail.com" className="footer-contact-item">
                <span className="contact-item-icon">
                  <FaEnvelope />
                </span>
                <span className="contact-item-text">kliqura@gmail.com</span>
              </a>

              <div className="footer-contact-item location-item">
                <span className="contact-item-icon">
                  <FaLocationDot />
                </span>
                <span className="contact-item-text">
                  19, Hiran Magri Sector 13, Near Mining Dept, Udaipur
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Connect With Us */}
          <div className="footer-col footer-col-connect">
            <h4 className="footer-col-title">CONNECT WITH US</h4>
            <p className="footer-connect-desc">
              Follow our latest brand showcases, case studies, and creative campaigns across socials.
            </p>
            <div className="footer-social-squircles">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-squircle"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="social-squircle"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-squircle"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/918239266744"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-squircle"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Legal Links */}
        <div className="footer-bottom-bar">
          <p className="footer-copy-text">
            &copy; {new Date().getFullYear()} KLIQURA Digital Agency. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/contact-us" onClick={handleLinkClick}>Privacy Policy</Link>
            <span className="legal-sep">&bull;</span>
            <Link to="/contact-us" onClick={handleLinkClick}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
