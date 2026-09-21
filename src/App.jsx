import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import logo from "./assets/kliqura-logo.png";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#051c52",
        color: "#ffffff",
        padding: "45px 8%",
        textAlign: "center",
      }}
    >
      <img
        src={logo}
        alt="KLIQURA"
        style={{
          width: "100px",
          backgroundColor: "#ffffff",
          padding: "5px",
        }}
      />

      <h3>KLIQURA — We make it click.</h3>

      <p style={{ color: "#d5dcec" }}>
        Smart digital marketing for brands ready to grow.
      </p>

      <p style={{ color: "#ffc300" }}>Udaipur, Rajasthan, India</p>
    </footer>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am Kli from KLIQURA. Ask me about SEO, paid ads, social media, services, or a free audit.",
    },
  ]);

  function getReply(userMessage) {
    const text = userMessage.toLowerCase();

    if (text.includes("seo")) {
      return "KLIQURA helps with keyword research, on-page SEO, local SEO, and technical improvements to improve your Google visibility.";
    }

    if (text.includes("paid") || text.includes("ads") || text.includes("advertising")) {
      return "We create and optimise Google Ads and Meta Ads campaigns focused on quality leads, website traffic, and better ROI.";
    }

    if (text.includes("social")) {
      return "We manage Instagram, Facebook, and LinkedIn with content strategy, creative posts, and audience engagement.";
    }

    if (text.includes("service")) {
      return "Our services include Growth Marketing, Performance Marketing, SEO, Content Writing, Copywriting, Graphic Design, Social Media Management, Paid Advertising, and Website Optimisation.";
    }

    if (text.includes("audit") || text.includes("price") || text.includes("contact")) {
      return "You can request a free audit from the Contact page. Tell us about your business and KLIQURA will get back to you.";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "Hello! Welcome to KLIQURA. How can we help your brand grow today?";
    }

    return "Thanks for your message! For a personalised strategy, please fill out the Contact form and our KLIQURA team will connect with you.";
  }

  function sendMessage() {
    if (message.trim() === "") return;

    const userMessage = message;

    setMessages([
      ...messages,
      { sender: "user", text: userMessage },
      { sender: "bot", text: getReply(userMessage) },
    ]);

    setMessage("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          right: "22px",
          bottom: "22px",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#e34e4e",
          color: "#ffffff",
          fontSize: "22px",
          zIndex: 200,
          cursor: "pointer",
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            right: "22px",
            bottom: "90px",
            width: "320px",
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: "10px",
            overflow: "hidden",
            zIndex: 200,
            boxShadow: "0 10px 30px #00000066",
          }}
        >
          <div
            style={{
              backgroundColor: "#051c52",
              color: "#ffffff",
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong>Chat with Kli</strong>

            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              height: "250px",
              overflowY: "auto",
              padding: "15px",
            }}
          >
            {messages.map((item, index) => (
              <p
                key={index}
                style={{
                  backgroundColor:
                    item.sender === "bot" ? "#eeeeee" : "#ffc300",
                  padding: "10px",
                  borderRadius: "8px",
                  marginLeft: item.sender === "user" ? "35px" : "0",
                  marginRight: item.sender === "bot" ? "35px" : "0",
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}
              >
                {item.text}
              </p>
            ))}
          </div>

          <div style={{ display: "flex", padding: "10px", gap: "8px" }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #cccccc",
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                backgroundColor: "#ffc300",
                border: "none",
                padding: "10px 14px",
                fontWeight: "bold",
                cursor: "pointer",
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
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Chatbot />
    </>
  );
}

export default App;