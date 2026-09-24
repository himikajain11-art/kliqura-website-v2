import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/kliqura-logo.png";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa6";

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const servicesCol1 = [
    { title: "Growth Marketing", path: "/services" },
    { title: "Performance Marketing", path: "/services" },
    { title: "SEO", path: "/services" },
  ];

  const servicesCol2 = [
    { title: "Content Writing", path: "/services" },
    { title: "Social Media Management", path: "/services" },
    { title: "Website Optimization", path: "/services" },
  ];

  return (
    <footer className="kliqura-footer">
      <div className="footer-wrap">
        {/* ROW 1: Brand (Left) + Services Grid (Center) + Social Icons (Right) */}
        <div className="footer-main-row">
          {/* Clean Brand Column on Left (Mess removed) */}
          <div className="footer-brand-col">
            <Link to="/" onClick={handleLinkClick} className="footer-logo-link">
              <img
                src={logo}
                alt="KLIQURA"
                className="footer-brand-logo"
              />
            </Link>
            <p className="footer-brand-tagline">
              We make your next click count.
            </p>
          </div>

          {/* Services Grid with Wide Spacing between Columns */}
          <div className="footer-services-grid">
            {/* Column 1 */}
            <div className="footer-services-col">
              {servicesCol1.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="service-link"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="footer-services-col">
              {servicesCol2.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="service-link"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Column on Right */}
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ROW 2: Bottom Agency Description + Scroll To Top Button */}
        <div className="footer-bottom-row">
          <p className="footer-bottom-text">
            <strong>KLIQURA</strong> is an integrated social media and digital marketing
            agency in Udaipur, Rajasthan. Offering creative and innovative solutions for
            brands looking to grow their businesses online. If you are reading this,
            then you're on the right site to onboard one of the best creative marketing agencies in India.
          </p>

          <button
            className="footer-scroll-top-btn"
            onClick={handleLinkClick}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
