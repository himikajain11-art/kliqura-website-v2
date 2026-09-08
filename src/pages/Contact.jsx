import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_allip0n";
const TEMPLATE_ID = "template_0pt94nq";
const PUBLIC_KEY = "OlUP_NlMzzEKjj1bA";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      SERVICE_ID === "YOUR_SERVICE_ID" ||
      TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setStatus("Please add your EmailJS Service ID, Template ID, and Public Key first.");
      return;
    }

    setStatus("Sending your message...");

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
          to_email: "kliqura2@gmail.com",
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully! KLIQURA will contact you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus(error.text || "Message could not be sent. Please try again.");
      });
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-label">CONTACT KLIQURA</p>

        <h1>
          Let’s make your next
          <span> move count.</span>
        </h1>

        <p>
          Tell us about your business, your goal, or the digital challenge you
          want to solve. Our team will get back to you soon.
        </p>
      </section>

      <section className="contact-main">
        <div className="contact-info">
          <p className="contact-label">START A CONVERSATION</p>

          <h2>
            Good growth begins
            <br />
            with a clear <span>hello.</span>
          </h2>

          <div className="contact-info-list">
            <div>
              <span>EMAIL</span>
              <a href="mailto:kliqura2@gmail.com">
                kliqura2@gmail.com
              </a>
            </div>

            <div>
              <span>WHATSAPP</span>
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                target="_blank"
                rel="noreferrer"
              >
                Chat with KLIQURA ↗
              </a>
            </div>

            <div>
              <span>LOCATION</span>
              <p>Udaipur, Rajasthan, India</p>
            </div>

            <div>
              <span>WORKING HOURS</span>
              <p>Monday–Saturday · 10 AM–7 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name *"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address *"
            />
          </div>

          <div className="form-row">
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number *"
            />

            <input
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business name"
            />
          </div>

          <select
            required
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service *</option>
            <option>Growth Marketing</option>
            <option>Performance Marketing</option>
            <option>SEO</option>
            <option>Content Writing</option>
            <option>Copywriting</option>
            <option>Graphic Design</option>
            <option>Social Media Management</option>
            <option>Paid Advertising</option>
            <option>Website Optimisation</option>
          </select>

          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business goal or challenge *"
          />

          <button type="submit">Send message ↗</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;
