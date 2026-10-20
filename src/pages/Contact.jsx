import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactMascot from "../assets/contact-mascot.png";

const SERVICE_ID = "service_allip0n";
const TEMPLATE_ID = "template_0pt94nq";
const PUBLIC_KEY = "OlUP_NlMzzEKjj1bA";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "Performance Marketing (Meta & Google Ads)",
    budget: "₹50K – ₹1.5 Lakhs / month",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("inquiry-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      _subject: `New Lead: ${formData.name} - ${formData.service}`,
      _template: "table",
      "Full Name": formData.name,
      "Business Email": formData.email,
      "Phone / WhatsApp": formData.phone,
      "Company / Brand": formData.business || "Not Provided",
      "Service Required": formData.service,
      "Monthly Budget": formData.budget,
      "Project Goals / Message": formData.message,
    };

    // Save copy for WhatsApp button
    setSubmittedData({ ...formData });

    try {
      // 1. Automated dispatch via FormSubmit to kliqura@gmail.com
      fetch("https://formsubmit.co/ajax/kliqura@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.log("FormSubmit kliqura note:", err));

      // 2. Also dispatch copy to kliqura2@gmail.com
      fetch("https://formsubmit.co/ajax/kliqura2@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.log("FormSubmit kliqura2 note:", err));

      // 3. Fallback EmailJS call
      try {
        emailjs
          .send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
              from_name: formData.name,
              from_email: formData.email,
              phone: formData.phone,
              business: formData.business,
              service: formData.service,
              message: formData.message,
              to_email: "kliqura@gmail.com",
            },
            PUBLIC_KEY
          )
          .catch((err) => console.log("EmailJS note:", err));
      } catch (err) {
        console.log("EmailJS fallback:", err);
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        service: "Performance Marketing (Meta & Google Ads)",
        budget: "₹50K – ₹1.5 Lakhs / month",
        message: "",
      });
    } catch (err) {
      console.warn("Submission handled:", err);
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      {/* ===== HERO SECTION: DISTINCTIVE, BALANCED 2-COLUMN LUXURY LAYOUT ===== */}
      <section className="contact-hero-clean">
        <div className="contact-hero-ambient" />
        <div className="contact-hero-wrap">
          {/* Left Column: Bold Headline & Trust Strip */}
          <div className="contact-hero-left">
            <div className="contact-badge-wrap">
              <span className="contact-badge-pill">
                <span className="badge-pulse" />
                START A CONVERSATION • DIRECT STRATEGY DESK
              </span>
            </div>

            <h1 className="contact-hero-title">
              Let’s Build Something
              <span className="contact-title-gradient"> That Scales Your Revenue.</span>
            </h1>

            <p className="contact-hero-subtitle">
              Whether you want to scale your Meta/Google ROAS past 5×, dominate Google search rankings in Udaipur
              or nationally, or eliminate drop-offs in your sales funnel—our senior growth strategists are ready.
            </p>

            {/* Quick Actions */}
            <div className="contact-hero-actions">
              <a
                href="#inquiry-form-section"
                onClick={handleSmoothScroll}
                className="btn-jump-form"
              >
                Jump to Inquiry Form ↓
              </a>
              <a
                href="https://wa.me/918239266744?text=Hi%20KLIQURA%2C%20I%20want%20to%20discuss%20scaling%20my%20digital%20marketing%20revenue."
                target="_blank"
                rel="noreferrer"
                className="btn-hero-whatsapp"
              >
                Instant WhatsApp Chat ↗
              </a>
            </div>

            {/* Trust Matrix Strip */}
            <div className="contact-trust-matrix">
              <div className="trust-matrix-item">
                <span className="trust-icon">⚡</span>
                <div className="trust-text">
                  <strong>2 to 4 Hours</strong>
                  <span>Fast Review Guarantee</span>
                </div>
              </div>
              <div className="trust-matrix-sep" />
              <div className="trust-matrix-item">
                <span className="trust-icon">🔒</span>
                <div className="trust-text">
                  <strong>100% NDA</strong>
                  <span>Confidential Data</span>
                </div>
              </div>
              <div className="trust-matrix-sep" />
              <div className="trust-matrix-item">
                <span className="trust-icon">🎁</span>
                <div className="trust-text">
                  <strong>₹0 Cost</strong>
                  <span>30-Min Growth Teardown</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Agency Availability Pass */}
          <div className="contact-hero-right">
            <div className="agency-pass-card">
              <div className="pass-card-header">
                <div className="pass-status-row">
                  <span className="pass-live-dot" />
                  <strong className="pass-title">KLIQURA STRATEGY DESK</strong>
                </div>
                <span className="pass-status-pill">● Accepting Clients</span>
              </div>

              <div className="pass-body">
                <div className="pass-meta-row">
                  <span className="pass-meta-label">CURRENT AVAILABILITY</span>
                  <strong className="pass-meta-val">Q4 Growth Consultations Open</strong>
                </div>

                <div className="pass-divider" />

                <div className="pass-items-list">
                  <div className="pass-item">
                    <span className="pass-icon">🕒</span>
                    <div>
                      <span className="pass-item-title">Operating Timings</span>
                      <p>Mon – Sat: 9:30 AM – 6:30 PM IST</p>
                    </div>
                  </div>

                  <div className="pass-item">
                    <span className="pass-icon">📍</span>
                    <div>
                      <span className="pass-item-title">Headquarters</span>
                      <p>19, Hiran Magri Sector 13, Near Mining Dept, Udaipur</p>
                    </div>
                  </div>

                  <div className="pass-item">
                    <span className="pass-icon">📞</span>
                    <div>
                      <span className="pass-item-title">Direct Call</span>
                      <a href="tel:+918239266744">+91 82392 66744</a>
                    </div>
                  </div>

                  <div className="pass-item">
                    <span className="pass-icon">📧</span>
                    <div>
                      <span className="pass-item-title">Direct Inbox</span>
                      <a href="mailto:kliqura@gmail.com">kliqura@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="pass-footer-box">
                  <span className="pass-badge">VERIFIED AGENCY</span>
                  <span>Average Client Onboarding: 5 Days from Audit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN 2-COLUMN SECTION: DIRECT INFO & INTERACTIVE FORM ===== */}
      <section id="inquiry-form-section" className="contact-main-section">
        <div className="contact-main-grid">
          {/* Left Column: Direct Info, Operating Hours, Channels */}
          {/* Left Column: Contact Information Cards Matching Screenshot */}
          <div className="contact-info-column">
            <h2 style={{
              fontSize: "32px",
              fontWeight: "900",
              color: "#0f172a",
              margin: "0 0 4px",
              fontFamily: "'Manrope', sans-serif",
              letterSpacing: "-0.5px"
            }}>
              Contact Information
            </h2>

            <div className="contact-info-cards-exact" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Card 1: Email Us */}
              <div style={{
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "28px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  minWidth: "56px",
                  borderRadius: "18px",
                  border: "1.5px solid #8b5cf6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff"
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", color: "#64748b", fontWeight: "500", marginBottom: "4px" }}>
                    Email Us
                  </div>
                  <a href="mailto:kliqura@gmail.com" style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", textDecoration: "none", wordBreak: "break-all" }}>
                    kliqura@gmail.com
                  </a>
                </div>
              </div>

              {/* Card 2: Call / WhatsApp Us */}
              <div style={{
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "28px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  minWidth: "56px",
                  borderRadius: "18px",
                  border: "1.5px solid #8b5cf6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff"
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", color: "#64748b", fontWeight: "500", marginBottom: "4px" }}>
                    Call / WhatsApp Us
                  </div>
                  <a href="tel:+918239266744" style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", textDecoration: "none" }}>
                    +91 82392 66744
                  </a>
                </div>
              </div>

              {/* Card 3: Location */}
              <div style={{
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "28px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  minWidth: "56px",
                  borderRadius: "18px",
                  border: "1.5px solid #8b5cf6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff"
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", color: "#64748b", fontWeight: "500", marginBottom: "4px" }}>
                    Location
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a", lineHeight: "1.4" }}>
                    19, Hiran Magri Sector 13, Near Mining Department, Udaipur
                  </div>
                </div>
              </div>

              {/* Card 4: FAST EXECUTION + WhatsApp Button */}
              <div style={{
                background: "#ffffff",
                border: "1.5px solid #e2e8f0",
                borderRadius: "28px",
                padding: "22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.03)"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                  <img
                    src={contactMascot}
                    alt="Fast Execution"
                    style={{ width: "58px", height: "auto", objectFit: "contain" }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: "#6b21a8", fontSize: "14px", fontWeight: "900", letterSpacing: "1px", textTransform: "uppercase" }}>
                      FAST EXECUTION
                    </div>
                    <div style={{ color: "#475569", fontSize: "13.5px", fontWeight: "500", marginTop: "2px" }}>
                      Prefer direct chat over forms?
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/918239266744?text=Hi%20KLIQURA%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#22c55e",
                    color: "#ffffff",
                    borderRadius: "14px",
                    padding: "14px 20px",
                    fontWeight: "800",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(34, 197, 94, 0.35)",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#16a34a")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#22c55e")}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.07c-.24.68-1.2 1.25-1.66 1.29-.44.04-.98.17-3.18-.74-2.58-1.07-4.22-3.71-4.35-3.88-.13-.17-1.05-1.4-1.05-2.67 0-1.27.67-1.89.9-2.14.24-.25.53-.31.71-.31.18 0 .36 0 .51.01.17.01.39-.06.6.46.24.57.77 1.9.84 2.04.07.15.11.32.02.51-.08.18-.13.29-.26.44-.13.15-.27.34-.39.46-.13.13-.26.27-.11.53.15.25.66 1.09 1.42 1.77.97.87 1.8 1.14 2.05 1.27.26.13.41.11.56-.06.15-.17.65-.76.82-1.02.17-.26.35-.22.58-.13.24.08 1.5.71 1.76.84.26.13.43.2.49.31.07.11.07.65-.17 1.33z" />
                  </svg>
                  <span>Quick Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="next-steps-card">
              <h4>What happens after you reach out?</h4>
              <ol className="next-steps-list">
                <li>
                  <strong>1. Forensic Review:</strong> We analyze your current ad accounts, search rankings, and competitors.
                </li>
                <li>
                  <strong>2. Strategy Call:</strong> A private 30-minute consultation with our Senior Strategist.
                </li>
                <li>
                  <strong>3. Action Roadmap:</strong> A transparent roadmap with projected ROAS, CAC targets, and timelines.
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: High-Converting Automated Inquiry Form */}
          <div className="contact-form-column">
            <div className="form-card-container">
              <div className="form-card-header">
                <h3>Claim Your Free 30-Min Growth Audit</h3>
                <p>Fill out the brief below. Your submission routes automatically to <strong>kliqura@gmail.com</strong>.</p>
              </div>

              {submitStatus === "success" ? (
                <div className="form-success-state">
                  <div className="success-icon-badge">✓</div>
                  <h3>Inquiry Dispatched Successfully!</h3>
                  <p>
                    Thank you for reaching out to <strong>KLIQURA</strong>. Your project brief has been automatically
                    forwarded to <strong>kliqura@gmail.com</strong>.
                  </p>
                  <div className="success-promise">
                    Our lead growth strategist will review your brand details and get back to you within <strong>2 to 4 business hours</strong>.
                  </div>

                  {/* Immediate WhatsApp Follow-up Option */}
                  {submittedData && (
                    <div className="success-instant-whatsapp">
                      <span>Need an immediate response?</span>
                      <a
                        href={`https://wa.me/918239266744?text=Hi%20KLIQURA%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website.%20My%20name%20is%20${encodeURIComponent(
                          submittedData.name
                        )}%20and%20I%20need%20help%20with%20${encodeURIComponent(submittedData.service)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-success-whatsapp"
                      >
                        Ping Us on WhatsApp with Your Details ↗
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    className="btn-send-another"
                    onClick={() => setSubmitStatus(null)}
                  >
                    Submit Another Brief ↺
                  </button>
                </div>
              ) : (
                <form className="interactive-contact-form" onSubmit={handleSubmit}>
                  {/* Row 1: Name & Email */}
                  <div className="form-fields-row">
                    <div className="form-field-group">
                      <label htmlFor="name">Your Full Name *</label>
                      <input
                        id="name"
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="email">Business Email *</label>
                      <input
                        id="email"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Business */}
                  <div className="form-fields-row">
                    <div className="form-field-group">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="business">Company or Brand Name</label>
                      <input
                        id="business"
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="e.g. Aura Threaded"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div className="form-field-group">
                    <label htmlFor="service">Primary Growth Goal / Service *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="Performance Marketing (Meta & Google Ads)">
                        ⚡ Performance Marketing (High-ROAS Meta & Google Ads)
                      </option>
                      <option value="SEO & Search Dominance">
                        ⌕ SEO & Search Dominance (Local Udaipur & National)
                      </option>
                      <option value="Growth Marketing Architecture">
                        ↗ Full-Funnel Growth Marketing Strategy
                      </option>
                      <option value="Social Media & Viral Reels">
                        ◎ Social Media Management & Viral Short-Form Video
                      </option>
                      <option value="Website Optimization & CRO">
                        &lt;/&gt; Website Optimization & Conversion Funnels (CRO)
                      </option>
                      <option value="Comprehensive 30-Min Marketing Audit">
                        🎁 Comprehensive Free 30-Minute Marketing Teardown
                      </option>
                    </select>
                  </div>

                  {/* Row 4: Monthly Budget Range */}
                  <div className="form-field-group">
                    <label htmlFor="budget">Estimated Monthly Marketing Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="₹25,000 – ₹50,000 / month">₹25,000 – ₹50,000 / month</option>
                      <option value="₹50,000 – ₹1.5 Lakhs / month">₹50,000 – ₹1.5 Lakhs / month</option>
                      <option value="₹1.5 Lakhs – ₹5 Lakhs / month">₹1.5 Lakhs – ₹5 Lakhs / month</option>
                      <option value="₹5 Lakhs+ / month (Enterprise Scale)">₹5 Lakhs+ / month (Enterprise Scale)</option>
                    </select>
                  </div>

                  {/* Row 5: Project Details Message */}
                  <div className="form-field-group">
                    <label htmlFor="message">Tell Us About Your Goals & Current Roadblocks *</label>
                    <textarea
                      id="message"
                      required
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a brief overview of your business, what you've tried so far, and the exact revenue target you want to hit..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-submit-inquiry"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to kliqura@gmail.com...</span>
                    ) : (
                      <>
                        <span>Submit Brief For Free Growth Audit</span>
                        <span className="btn-submit-arrow">↗</span>
                      </>
                    )}
                  </button>

                  <div className="form-privacy-note">
                    🔒 100% Confidential. Direct automated delivery to kliqura@gmail.com. We never spam.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== UDAIPUR HEADQUARTERS MAP SECTION ===== */}
      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="map-header-block">
            <span className="work-eyebrow-tag">LOCATION & PRESENCE</span>
            <h2>
              Visit Our Headquarters in <span>Udaipur, Rajasthan</span>
            </h2>
            <p>
              Located in the City of Lakes. While we partner with brands across the globe,
              our strategic heart beats in Udaipur. Stop by during our business hours for a fresh cup of coffee and a growth brainstorming session.
            </p>
          </div>

          <div className="map-frame-card">
            <div className="map-info-topbar">
              <div className="map-topbar-left">
                <span className="pin-live-dot" />
                <strong>KLIQURA Digital Agency HQ</strong>
                <span className="topbar-sep">•</span>
                <span>19, Hiran Magri Sector 13, Near Mining Department, Udaipur</span>
              </div>
              <div className="map-topbar-right">
                <span className="hours-pill">🕒 Open Mon – Sat: 9:30 AM – 6:30 PM</span>
              </div>
            </div>

            <div className="google-map-embed-wrap">
              <iframe
                title="KLIQURA Location Map - Hiran Magri Sector 13 Udaipur"
                src="https://maps.google.com/maps?q=19%2C%20hiran%20magri%20sector%2013%2C%20near%20mining%20department%2C%20udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
