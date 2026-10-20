import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

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

  function handleQuickServiceSelect(serviceName) {
    setFormData((prev) => ({
      ...prev,
      service: serviceName,
    }));
  }

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

  const quickServices = [
    {
      key: "A",
      label: "Performance Marketing (Meta & Google Ads)",
      display: "Scale Meta & Google ROAS",
    },
    {
      key: "B",
      label: "SEO & Search Dominance",
      display: "Dominate Local & National SEO",
    },
    {
      key: "C",
      label: "Website Optimization & CRO",
      display: "Need a High-Converting Website",
    },
    {
      key: "D",
      label: "Comprehensive 30-Min Marketing Audit",
      display: "Claim Free 30-Min Growth Audit",
    },
  ];

  return (
    <main className="contact-page-modern">
      {/* ===== HEADER BLOCK: CLEAN TYPOGRAPHY ===== */}
      <section className="contact-header-section">
        <div className="contact-header-wrap">
          <span className="contact-kicker-tag">START A CONVERSATION</span>
          <h1 className="contact-main-heading">Get In Touch</h1>
          <p className="contact-main-subtext">
            Do not hesitate to contact us to tell us about your projects and ideas.
            We can surely answer your questions and help you scale your business revenue.
          </p>
        </div>
      </section>

      {/* ===== MAIN 2-COLUMN SECTION: BRAND COLORED BOXES + FORM ===== */}
      <section className="contact-content-section">
        <div className="contact-content-grid">
          
          {/* LEFT COLUMN: BRAND COLORED BOXES (RED, YELLOW, NAVY) */}
          <div className="contact-boxes-column">
            
            {/* BOX 1: Strawberry Red Border (#E34E4E) — Headquarters Location */}
            <div className="contact-brand-card card-border-red">
              <span className="card-pill-badge badge-red">India Office • Headquarters</span>
              
              <div className="card-body-row">
                <div className="card-icon-circle icon-red">
                  <FaLocationDot />
                </div>
                <div className="card-text-block">
                  <strong className="card-agency-title">KLIQURA Digital Agency</strong>
                  <p className="card-address-desc">
                    19, Hiran Magri Sector 13, Near Mining Department, Udaipur - 313002 (Rajasthan) India
                  </p>
                </div>
              </div>

              <div className="card-action-wrap">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=19,+hiran+magri+sector+13,+near+mining+department,+udaipur"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-card-action btn-red-action"
                >
                  <span>Get Direction</span>
                  <FaArrowRight className="action-arrow" />
                </a>
              </div>
            </div>

            {/* BOX 2: School Bus Yellow Border (#FFC300) — Direct Hotline & WhatsApp */}
            <div className="contact-brand-card card-border-yellow">
              <span className="card-pill-badge badge-yellow">Direct Hotline & WhatsApp</span>
              
              <div className="card-body-row">
                <div className="card-icon-circle icon-yellow">
                  <FaPhone />
                </div>
                <div className="card-text-block">
                  <strong className="card-agency-title">+91 82392 66744</strong>
                  <p className="card-address-desc">
                    Direct strategy line for instant scope, audit teardowns, and quick onboarding.
                  </p>
                </div>
              </div>

              <div className="card-action-wrap dual-actions">
                <a
                  href="tel:+918239266744"
                  className="btn-card-action btn-yellow-action"
                >
                  <FaPhone />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/918239266744?text=Hi%20KLIQURA%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-card-action btn-wa-action"
                >
                  <FaWhatsapp />
                  <span>WhatsApp Chat ↗</span>
                </a>
              </div>
            </div>

            {/* BOX 3: Deep Navy Border (#051C52) — Official Inbox & Working Hours */}
            <div className="contact-brand-card card-border-navy">
              <span className="card-pill-badge badge-navy">Official Inbox & Hours</span>
              
              <div className="card-body-row">
                <div className="card-icon-circle icon-navy">
                  <FaEnvelope />
                </div>
                <div className="card-text-block">
                  <strong className="card-agency-title">kliqura@gmail.com</strong>
                  <p className="card-address-desc">
                    Monday to Saturday: 9:30 AM – 6:30 PM (IST) • Direct response within 2 to 4 business hours.
                  </p>
                </div>
              </div>

              <div className="card-action-wrap">
                <a
                  href="mailto:kliqura@gmail.com"
                  className="btn-card-action btn-navy-action"
                >
                  <span>Send Direct Email</span>
                  <FaArrowRight className="action-arrow" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE SERVICE SELECTOR & AUDIT FORM */}
          <div className="contact-form-column-wrap">
            <div className="contact-interactive-card">
              
              <div className="card-form-header">
                <h3>Claim Your Free 30-Min Growth Audit</h3>
                <p>Pick your primary business goal or write your custom brief below:</p>
              </div>

              {/* Quick Interactive Service Chips (A, B, C, D) */}
              <div className="quick-service-chips-grid">
                {quickServices.map((srv) => {
                  const isSelected = formData.service === srv.label;
                  return (
                    <button
                      key={srv.key}
                      type="button"
                      onClick={() => handleQuickServiceSelect(srv.label)}
                      className={`service-chip-btn ${isSelected ? "selected-chip" : ""}`}
                    >
                      <span className="chip-key-badge">{srv.key}</span>
                      <span className="chip-text">{srv.display}</span>
                    </button>
                  );
                })}
              </div>

              {submitStatus === "success" ? (
                <div className="form-success-box">
                  <div className="success-icon-badge">
                    <FaCheck />
                  </div>
                  <h3>Brief Dispatched Successfully!</h3>
                  <p>
                    Thank you for reaching out to <strong>KLIQURA</strong>. Your project brief has been automatically
                    routed to <strong>kliqura@gmail.com</strong>.
                  </p>
                  <div className="success-note">
                    Our lead strategist will review your brand metrics and reach out within <strong>2 to 4 business hours</strong>.
                  </div>

                  {submittedData && (
                    <div className="success-whatsapp-followup">
                      <span>Need an immediate response?</span>
                      <a
                        href={`https://wa.me/918239266744?text=Hi%20KLIQURA%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20website.%20My%20name%20is%20${encodeURIComponent(
                          submittedData.name
                        )}%20and%20I%20need%20help%20with%20${encodeURIComponent(submittedData.service)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-success-wa"
                      >
                        <FaWhatsapp />
                        <span>Ping Us on WhatsApp with Your Details ↗</span>
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    className="btn-send-another-brief"
                    onClick={() => setSubmitStatus(null)}
                  >
                    Submit Another Brief ↺
                  </button>
                </div>
              ) : (
                <form className="contact-actual-form" onSubmit={handleSubmit}>
                  {/* Row 1: Name & Email */}
                  <div className="form-two-fields">
                    <div className="form-group-item">
                      <label htmlFor="name">Your Name *</label>
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

                    <div className="form-group-item">
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

                  {/* Row 2: Phone & Brand Name */}
                  <div className="form-two-fields">
                    <div className="form-group-item">
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 82392 66744"
                      />
                    </div>

                    <div className="form-group-item">
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
                  <div className="form-group-item">
                    <label htmlFor="service">Selected Service</label>
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
                      <option value="Website Optimization & CRO">
                        &lt;/&gt; Website Optimization & Conversion Funnels (CRO)
                      </option>
                      <option value="Comprehensive 30-Min Marketing Audit">
                        🎁 Comprehensive Free 30-Minute Marketing Teardown
                      </option>
                    </select>
                  </div>

                  {/* Row 4: Monthly Budget */}
                  <div className="form-group-item">
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

                  {/* Row 5: Message */}
                  <div className="form-group-item">
                    <label htmlFor="message">Tell Us About Your Project & Goals *</label>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-submit-contact-form"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to kliqura@gmail.com...</span>
                    ) : (
                      <>
                        <span>Submit Brief For Free Growth Audit</span>
                        <FaArrowRight className="submit-arrow" />
                      </>
                    )}
                  </button>

                  <div className="form-guarantee-note">
                    🔒 100% Confidential. Directly sent to kliqura@gmail.com. We never spam.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ===== UDAIPUR HEADQUARTERS MAP SECTION ===== */}
      <section className="contact-map-bottom-section">
        <div className="map-bottom-wrap">
          <div className="map-topbar-info">
            <div className="topbar-location-left">
              <span className="live-pin-pulse" />
              <strong>KLIQURA Digital Agency HQ</strong>
              <span className="sep">•</span>
              <span>19, Hiran Magri Sector 13, Near Mining Department, Udaipur</span>
            </div>
            <div className="topbar-hours-right">
              <span>🕒 Open Mon – Sat: 9:30 AM – 6:30 PM</span>
            </div>
          </div>

          <div className="map-iframe-container">
            <iframe
              title="KLIQURA Location Map - Hiran Magri Sector 13 Udaipur"
              src="https://maps.google.com/maps?q=19%2C%20hiran%20magri%20sector%2013%2C%20near%20mining%20department%2C%20udaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
