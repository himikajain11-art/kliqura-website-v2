import React, { useState, useEffect } from "react";
import "./Popup.css";
import bannerImage from "../assets/work-hero.jpg";
import logo from "../assets/kliqura-logo.png";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open popup as soon as the page loads
    setIsOpen(true);
  }, []);

  const closePopup = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully! (Connect your backend/API here)");
    closePopup();
  };

  if (!isOpen) return null;

  return (
    <div
      className="popup-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("popup-overlay")) closePopup();
      }}
    >
      <div className="popup-box">
        <button className="popup-close-btn" onClick={closePopup}>
          ✕
        </button>

        <div className="popup-left">
          <img src={logo} alt="Kliqura logo" className="popup-logo" />
          <h2>
            We Build Great
            <span>DIGITAL EXPERIENCES</span>
          </h2>
          <div className="popup-divider"></div>
          <ul className="popup-features">
            <li>300+ Brands Scaled</li>
            <li>Proven Strategy Playbooks</li>
            <li>Built for Startups, D2C, and SMBs</li>
          </ul>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number *" required />
            <input type="text" placeholder="Company Name" />
            <input type="url" placeholder="Website URL" />
            <input type="text" placeholder="Message" />
            <button type="submit" className="popup-submit-btn">
              SUBMIT
            </button>
          </form>
        </div>

        <div className="popup-right">
          <img src={bannerImage} alt="Digital experience banner" className="popup-image" />
        </div>
      </div>
    </div>
  );
}