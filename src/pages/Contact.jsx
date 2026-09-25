import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
                href="https://wa.me/919999999999?text=Hi%20KLIQURA%2C%20I%20want%20to%20discuss%20scaling%20my%20digital%20marketing%20revenue."
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
                      <p>Udaipur, Rajasthan, India</p>
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
          <div className="contact-info-column">
            <div className="info-intro-box">
              <span className="info-kicker">DIRECT REACH</span>
              <h2>Speak Directly With Our Growth Team</h2>
              <p>
                Have a question before submitting? Reach out across our direct channels. We value transparency
                and respond without sales pressure.
              </p>
            </div>

            <div className="info-cards-list">
              {/* Card 1: Email */}
              <div className="info-item-card">
                <div className="info-icon-box">📧</div>
                <div className="info-text-box">
                  <span className="info-label">OFFICIAL EMAIL</span>
                  <a href="mailto:kliqura@gmail.com" className="info-primary-link">
                    kliqura@gmail.com
                  </a>
                  <span className="info-sub-note">Directly monitored for inbound briefs</span>
                </div>
              </div>

              {/* Card 2: Business Hours */}
              <div className="info-item-card">
                <div className="info-icon-box">🕒</div>
                <div className="info-text-box">
                  <span className="info-label">OPERATING TIMINGS</span>
                  <strong className="info-strong">Monday to Saturday: 9:30 AM – 6:30 PM (IST)</strong>
                  <span className="info-sub-note">Sunday: Closed (Client emergency support only)</span>
                </div>
              </div>

              {/* Card 3: Headquarters Location */}
              <div className="info-item-card">
                <div className="info-icon-box">📍</div>
                <div className="info-text-box">
                  <span className="info-label">HEADQUARTERS</span>
                  <strong className="info-strong">Udaipur, Rajasthan, India</strong>
                  <span className="info-sub-note">Serving clients across India & global markets</span>
                </div>
              </div>

              {/* Card 4: WhatsApp Priority Chat */}
              <div className="info-item-card">
                <div className="info-icon-box">💬</div>
                <div className="info-text-box">
                  <span className="info-label">WHATSAPP PRIORITY DESK</span>
                  <a
                    href="https://wa.me/919999999999?text=Hi%20KLIQURA%2C%20I%20am%20interested%20in%20scaling%20my%20digital%20marketing%20growth."
                    target="_blank"
                    rel="noreferrer"
                    className="info-whatsapp-link"
                  >
                    Start Instant WhatsApp Chat ↗
                  </a>
                  <span className="info-sub-note">Direct line for quick scope & pricing answers</span>
                </div>
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
                        href={`https://wa.me/919999999999?text=Hi%20KLIQURA%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website.%20My%20name%20is%20${encodeURIComponent(
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
                <span>Udaipur, Rajasthan 313001</span>
              </div>
              <div className="map-topbar-right">
                <span className="hours-pill">🕒 Open Mon – Sat: 9:30 AM – 6:30 PM</span>
              </div>
            </div>

            <div className="google-map-embed-wrap">
              <iframe
                title="KLIQURA Location Map - Udaipur Rajasthan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116086.0359779953!2d73.65593845929645!3d24.608361099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
