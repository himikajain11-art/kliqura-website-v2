import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Namaste! 👋 I am Kli, your digital marketing assistant from KLIQURA. How can I help your brand scale today?",
    },
  ]);

  function getReply(userMessage) {
    const text = userMessage.toLowerCase().trim();

    // 1. TIMING / OPEN & CLOSE HOURS ("ky time hai, kitne baje band/open hota hai")
    if (
      text.includes("time") ||
      text.includes("timing") ||
      text.includes("hour") ||
      text.includes("open") ||
      text.includes("close") ||
      text.includes("khulta") ||
      text.includes("band") ||
      text.includes("schedule") ||
      text.includes("kab") ||
      text.includes("kitne baje")
    ) {
      return "🕒 KLIQURA Business Hours:\n• Monday to Saturday: 9:30 AM to 6:30 PM (IST)\n• Sunday: Closed (Emergency client support only)\n\nYou can drop an inquiry on our Contact page anytime, and our team will get back to you within 2 to 4 business hours!";
    }

    // 2. WHAT KLIQURA DOES ("ky karta hai cliqura / kliqura")
    if (
      text.includes("kya karta") ||
      text.includes("ky karta") ||
      text.includes("cliqura") ||
      text.includes("kliqura") ||
      text.includes("what do you do") ||
      text.includes("what does kliqura do") ||
      text.includes("service") ||
      text.includes("kaam") ||
      text.includes("agency") ||
      text.includes("about")
    ) {
      return "🚀 KLIQURA is an elite full-funnel Digital Marketing Agency based in Udaipur. We help ambitious brands grow predictable revenue through:\n\n1. Performance Marketing: High-ROAS Meta & Google Ads (4.8× average ROAS)\n2. SEO Dominance: Technical audits, commercial keyword ranking & Local Google Maps\n3. Growth Marketing: Full-funnel sustainable customer acquisition loops\n4. Content & Copywriting: High-converting landing pages, sales copy & blogs\n5. Social Media Management: Viral short-form Reels & community engagement\n6. Website Optimization (CRO): Sub-2s mobile loading & 1-tap checkout funnels";
    }

    // 3. LOCATION & UDAIPUR HEADQUARTERS
    if (
      text.includes("location") ||
      text.includes("address") ||
      text.includes("udaipur") ||
      text.includes("office") ||
      text.includes("kahan") ||
      text.includes("city") ||
      text.includes("where") ||
      text.includes("rajasthan")
    ) {
      return "📍 KLIQURA Headquarters:\nWe are located in Udaipur, Rajasthan, India! We work with brands locally in Udaipur and across India/globally to drive measurable digital growth.";
    }

    // 4. PRICING, FEES & FREE AUDIT
    if (
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("fees") ||
      text.includes("charges") ||
      text.includes("kitna") ||
      text.includes("rate") ||
      text.includes("budget") ||
      text.includes("audit") ||
      text.includes("free")
    ) {
      return "💡 Transparent & ROI-Focused Pricing:\nWe tailor our growth retainers based on your exact scale and targets. The best way to start is by requesting our Free 30-Minute Growth Audit on the Contact page, where we analyze your funnel and ad accounts completely free of cost!";
    }

    // 5. CONTACT / EMAIL / PHONE / WHATSAPP
    if (
      text.includes("email") ||
      text.includes("gmail") ||
      text.includes("phone") ||
      text.includes("contact") ||
      text.includes("call") ||
      text.includes("whatsapp") ||
      text.includes("number")
    ) {
      return "📬 Get in touch with KLIQURA:\n• Email: kliqura@gmail.com\n• Contact Form: Visit our Contact page to fill out our automated form\n• Working Hours: Mon–Sat, 9:30 AM – 6:30 PM IST\nOur strategists review all inquiries within 2 to 4 business hours.";
    }

    // 6. GREETINGS
    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey") ||
      text.includes("namaste") ||
      text.includes("kaise") ||
      text.includes("good morning")
    ) {
      return "Hello! Great to connect with you. I can tell you about KLIQURA's services, office timings (9:30 AM–6:30 PM), Udaipur headquarters, or help you book a Free Growth Audit. What would you like to know?";
    }

    // 7. DEFAULT HELPFUL FALLBACK
    return "Thanks for your question! I can help you with:\n• 🕒 Working hours & timings (9:30 AM – 6:30 PM)\n• 🚀 What KLIQURA does & our 6 core services\n• 📍 Our Udaipur headquarters\n• 🎁 How to get a Free 30-Minute Growth Audit\n• 📬 Contacting us at kliqura@gmail.com\n\nOr feel free to submit the form on our Contact page!";
  }

  function handleSend(textToSend) {
    const input = textToSend || message;
    if (!input || input.trim() === "") return;

    const userMsg = input.trim();
    const botReply = getReply(userMsg);

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMsg },
      { sender: "bot", text: botReply },
    ]);

    setMessage("");
  }

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open KLIQURA Chat"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          border: "2px solid #ffffff",
          backgroundColor: "#051c52",
          color: "#ffffff",
          fontSize: "24px",
          zIndex: 9999,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(5, 28, 82, 0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease, background 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Modern Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: "24px",
            bottom: "94px",
            width: "360px",
            maxWidth: "calc(100vw - 40px)",
            backgroundColor: "#ffffff",
            color: "#051c52",
            borderRadius: "20px",
            overflow: "hidden",
            zIndex: 9999,
            boxShadow: "0 20px 50px rgba(5, 28, 82, 0.25)",
            border: "1.5px solid rgba(5, 28, 82, 0.12)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "'Inter', sans-serif",
            animation: "chatSlideUp 0.25s ease",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              backgroundColor: "#051c52",
              color: "#ffffff",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.3)",
                }}
              />
              <div>
                <strong style={{ fontSize: "15px", fontFamily: "'Manrope', sans-serif", display: "block" }}>
                  KLIQURA Assistant
                </strong>
                <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.75)" }}>
                  Online • Replies instantly
                </span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: "18px",
                cursor: "pointer",
                padding: "4px",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "8px 12px",
              display: "flex",
              gap: "6px",
              overflowX: "auto",
              borderBottom: "1px solid rgba(5, 28, 82, 0.08)",
              whiteSpace: "nowrap",
            }}
          >
            {[
              { label: "🕒 Timings", query: "What are your business hours and timings?" },
              { label: "🚀 What We Do", query: "What does KLIQURA do and what are your services?" },
              { label: "📍 Udaipur Office", query: "Where is your office located in Udaipur?" },
              { label: "🎁 Free Audit", query: "How do I get a free growth audit?" },
              { label: "📧 Email", query: "What is your email address and contact info?" },
            ].map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(chip.query)}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(5, 28, 82, 0.12)",
                  borderRadius: "999px",
                  padding: "4px 10px",
                  fontSize: "11px",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: "700",
                  color: "#051c52",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div
            style={{
              height: "280px",
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              backgroundColor: "#ffffff",
            }}
          >
            {messages.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: item.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    backgroundColor: item.sender === "user" ? "#051c52" : "#f1f5f9",
                    color: item.sender === "user" ? "#ffffff" : "#051c52",
                    padding: "10px 14px",
                    borderRadius: item.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                    maxWidth: "85%",
                    fontSize: "13px",
                    lineHeight: "1.55",
                    whiteSpace: "pre-line",
                    boxShadow: "0 2px 6px rgba(5, 28, 82, 0.05)",
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              gap: "8px",
              borderTop: "1px solid rgba(5, 28, 82, 0.08)",
              backgroundColor: "#f8fafc",
            }}
          >
            <input
              type="text"
              placeholder="Ask anything about KLIQURA..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "50px",
                border: "1.5px solid rgba(5, 28, 82, 0.12)",
                fontSize: "13px",
                outline: "none",
                fontFamily: "'Inter', sans-serif",
                backgroundColor: "#ffffff",
              }}
            />

            <button
              onClick={() => handleSend()}
              style={{
                backgroundColor: "#ffc300",
                color: "#051c52",
                border: "none",
                borderRadius: "50px",
                padding: "10px 16px",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "13px",
                fontWeight: "800",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
      <Chatbot />
    </>
  );
}

export default App;