import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

const caseStudies = [
  {
    id: "d2c-apparel",
    category: "performance",
    categoryLabel: "Performance Marketing",
    client: "Aura Threaded",
    industry: "Premium D2C Fashion & Apparel",
    title: "Scaling Monthly D2C Revenue from ₹14 Lakhs to ₹92 Lakhs in 6 Months",
    heroMetric: "5.4×",
    heroMetricLabel: "Blended ROAS Across Meta & Google",
    color: "red",
    badges: [
      { value: "+557%", label: "Revenue Scale" },
      { value: "-38%", label: "Customer Acquisition Cost" },
      { value: "₹1.8 Cr+", label: "Total GMV Delivered" },
    ],
    summary:
      "Aura Threaded had hit an ad-spend plateau with stagnant ROAS below 1.8×. KLIQURA restructured their entire paid media engine with dynamic creative testing (DCT) and high-converting UGC hooks.",
    challenge:
      "High ad fatigue, rising Meta CPMS, and a leaky Shopify checkout funnel where 72% of carts were abandoned without converting.",
    strategy: [
      "Built an aggressive creative sprint pipeline delivering 35+ fresh UGC hooks and problem-solution video ads every month.",
      "Restructured ad account into Advantage+ Shopping Campaigns (ASC) and high-intent Google Performance Max campaigns.",
      "Engineered automated WhatsApp and SMS abandoned checkout sequences that recovered 34% of dropped carts.",
      "Optimized product landing pages for mobile speed and 1-tap UPI checkout, lifting conversion rate from 1.6% to 3.8%.",
    ],
    results: [
      "Scaled monthly revenue from ₹14 Lakhs to ₹92 Lakhs within 180 days.",
      "Maintained a 5.4× blended ROAS while increasing monthly ad spend by 4.2×.",
      "Customer acquisition cost dropped by 38%, unlocking sustained profitability.",
    ],
    testimonial: {
      quote:
        "KLIQURA turned our ad spend from an unpredictable expense into our most profitable growth machine. Their creative testing speed is unmatched.",
      author: "Aditi S.",
      role: "Founder, Aura Threaded",
    },
  },
  {
    id: "heritage-hospitality",
    category: "seo",
    categoryLabel: "SEO & Organic Growth",
    client: "The Royal Haveli",
    industry: "Luxury Heritage Resort • Udaipur",
    title: "Dominating High-Intent Google Search & Eliminating High OTA Commissions",
    heroMetric: "+340%",
    heroMetricLabel: "Organic Direct Inbound Bookings",
    color: "yellow",
    badges: [
      { value: "#1 Rank", label: "For 48+ Commercial Keywords" },
      { value: "₹64 Lakhs", label: "Direct Booking Revenue" },
      { value: "0% OTA Fee", label: "On Direct Search Traffic" },
    ],
    summary:
      "The resort relied heavily on booking portals (OTAs), losing 18–22% per reservation in commissions. KLIQURA deployed full-stack technical and local SEO to turn organic search into their #1 booking channel.",
    challenge:
      "Zero page-1 rankings for high-intent queries like 'luxury heritage resort in Udaipur' and destination wedding inquiries. Slow website loading times (5.4s) caused high bounce rates.",
    strategy: [
      "Technical Core Web Vitals overhaul: boosted Google mobile page speed score from 38 to 96.",
      "Targeted high-value commercial keywords: 'heritage destination wedding resort Udaipur' and 'luxury lakeview suites'.",
      "Full Google Business Profile optimization with hyper-local geo-tagging, 5-star review acquisition workflows, and high-res photo tours.",
      "Created comprehensive Udaipur wedding & holiday itinerary guides that established authoritative backlinks from travel publications.",
    ],
    results: [
      "#1 ranking on Google for 48+ competitive destination wedding and resort queries.",
      "Direct organic inquiries surged by 340%, generating ₹64 Lakhs in zero-commission direct revenue.",
      "Reduced dependency on third-party OTAs by more than 55%.",
    ],
    testimonial: {
      quote:
        "We saved lakhs in portal commissions within months. KLIQURA made our resort the first thing luxury travelers see when searching for Udaipur.",
      author: "Vikramaditya S.",
      role: "Managing Director, The Royal Haveli",
    },
  },
  {
    id: "b2b-saas",
    category: "growth",
    categoryLabel: "Growth Marketing",
    client: "CloudPulse CRM",
    industry: "B2B Enterprise Software & Tech",
    title: "Building an Automated Inbound Pipeline for Enterprise Deal Closures",
    heroMetric: "320+",
    heroMetricLabel: "Enterprise Sales Qualified Leads (SQLs)",
    color: "navy",
    badges: [
      { value: "4.2×", label: "Pipeline Value Surge" },
      { value: "-45%", label: "Cost Per Lead (CPL)" },
      { value: "₹3.2 Cr", label: "Closed Annual Deal Value" },
    ],
    summary:
      "CloudPulse had a revolutionary product but was burning capital on cold outreach with single-digit response rates. KLIQURA engineered an inbound growth engine targeting decision-makers on LinkedIn & Google Search.",
    challenge:
      "Lengthy 90-day sales cycles, low awareness among enterprise CTOs, and generic ad messaging that attracted non-decision makers.",
    strategy: [
      "Launched Account-Based Marketing (ABM) ad campaigns on LinkedIn targeting VP/Director-level executives in target industries.",
      "Built an interactive 'CRM ROI Calculator' landing page with gated benchmark reports, capturing high-intent executive contact data.",
      "Captured active high-intent software buyers via Google Search ads on competitor brand alternatives.",
      "Designed a 7-stage automated nurturing sequence addressing security, compliance, and migration friction.",
    ],
    results: [
      "Delivered 320+ Sales Qualified Leads (SQLs) with deal sizes over ₹5 Lakhs ARR.",
      "Reduced Cost Per Qualified Lead (CPL) by 45% compared to previous agency benchmarks.",
      "Attributed ₹3.2 Crores in closed contract value within two quarters.",
    ],
    testimonial: {
      quote:
        "KLIQURA truly understands enterprise sales psychology. The caliber of leads booking demos through their funnels is exceptional.",
      author: "Rohan M.",
      role: "VP Growth, CloudPulse CRM",
    },
  },
  {
    id: "lifestyle-cafe",
    category: "social",
    categoryLabel: "Social Media & Content",
    client: "Brew & Bean Roastery",
    industry: "Specialty F&B & Lifestyle Cafe Chain",
    title: "From Local Cafe to Viral Sensation: Driving Record Footfalls with Short-Form Video",
    heroMetric: "6.8M+",
    heroMetricLabel: "Organic Reel Views in 90 Days",
    color: "red",
    badges: [
      { value: "+140K", label: "Engaged Followers" },
      { value: "+210%", label: "Weekend Store Footfall" },
      { value: "18 Reels", label: "Surpassed 250K+ Views" },
    ],
    summary:
      "Brew & Bean was opening two new branches and needed instant local awareness without burning massive budgets on traditional print or hoarding ads. KLIQURA turned their Instagram account into an engaging cultural hub.",
    challenge:
      "Intense local competition from established cafe chains, low social engagement (under 100 likes per post), and flat weekday footfalls.",
    strategy: [
      "Produced cinematic, sound-trending Reels highlighting aesthetic brewing methods, cafe ambiance, and barista culture.",
      "Orchestrated a localized micro-influencer tasting event with 25 top lifestyle creators across Rajasthan.",
      "Executed viral giveaway campaigns and 'Secret Menu' drops redeemable only via Instagram DM keywords.",
      "Consistent daily community engagement that converted passive viewers into enthusiastic cafe regulars.",
    ],
    results: [
      "Organic video reach surpassed 6.8 Million views without paying for video promotions.",
      "Instagram follower base scaled from 4,200 to over 144,000 highly engaged food lovers.",
      "In-store footfall surged by 210% on weekends, with constant lines out the door.",
    ],
    testimonial: {
      quote:
        "People walk into our cafe holding their phones and showing KLIQURA's Reels to order. Their creative direction put us on the culinary map.",
      author: "Kavya P.",
      role: "Co-Founder, Brew & Bean",
    },
  },
  {
    id: "aesthetic-clinic",
    category: "cro",
    categoryLabel: "Website & CRO Funnels",
    client: "Lumina Aesthetics",
    industry: "High-Ticket Dermatology & Wellness",
    title: "Doubling High-Ticket Consultation Bookings with a Frictionless Mobile Funnel",
    heroMetric: "+142%",
    heroMetricLabel: "Increase in Booked Consultations",
    color: "yellow",
    badges: [
      { value: "1.2s", label: "Mobile Page Load Speed" },
      { value: "+68%", label: "Mobile Conversion Rate" },
      { value: "3.9×", label: "Marketing Return on Spend" },
    ],
    summary:
      "Lumina was running paid ads to a slow, desktop-centric website. Mobile visitors were bouncing before reaching the inquiry form. KLIQURA engineered a lightning-fast mobile-first conversion funnel.",
    challenge:
      "Average high-ticket treatment cost was ₹25,000+, but the website failed to communicate medical credibility, doctor credentials, or clear before-after proof.",
    strategy: [
      "Complete mobile UX redesign eliminating 7 unnecessary form fields in favor of a 1-tap WhatsApp consultation booking widget.",
      "Implemented high-trust before/after interactive sliders, doctor verification badges, and real patient video reviews.",
      "Integrated automated calendar booking with instant SMS confirmation and WhatsApp location pins.",
      "Page load speed optimized from 4.8 seconds down to 1.2 seconds on mobile 4G networks.",
    ],
    results: [
      "Mobile conversion rate climbed by 68%, generating 142% more monthly patient consultations.",
      "No-show rate dropped by 31% thanks to automated WhatsApp appointment reminders.",
      "Clinic achieved full capacity booking for three consecutive months.",
    ],
    testimonial: {
      quote:
        "Our previous website looked fine on a laptop but failed on phones. KLIQURA rebuilt our funnel and our appointment calendar filled up immediately.",
      author: "Dr. Ananya V.",
      role: "Chief Dermatologist, Lumina Aesthetics",
    },
  },
  {
    id: "ayurveda-wellness",
    category: "performance",
    categoryLabel: "Performance Marketing",
    client: "VedaPure Organics",
    industry: "Ayurvedic Health & Wellness D2C",
    title: "Cracking Profitable Unit Economics with Retention Loops & Bundle Offers",
    heroMetric: "4.9×",
    heroMetricLabel: "Blended ROAS with 38% Repeat Rate",
    color: "navy",
    badges: [
      { value: "₹1.4 Cr", label: "Quarterly Revenue" },
      { value: "+48%", label: "Average Order Value (AOV)" },
      { value: "22,000+", label: "New Buyers Acquired" },
    ],
    summary:
      "High shipping costs and single-item orders were squeezing margins. KLIQURA restructured the product catalog into high-converting wellness bundles and launched aggressive paid acquisition loops.",
    challenge:
      "Low Average Order Value (₹550), customer acquisition costs hovering around ₹420, leaving razor-thin margins on initial purchases.",
    strategy: [
      "Engineered 30-day and 90-day supply bundle offers ('Gut Health Reset' & 'Immunity Protocol') pushing AOV above ₹1,650.",
      "Deployed educational video creatives breaking down Ayurvedic ingredient purity against cheap mass-market alternatives.",
      "Built automated replenishment email and WhatsApp sequences triggering 25 days post-purchase for repeat orders.",
      "Implemented Meta Advantage+ Shopping bidding strategies focused on high customer lifetime value (LTV).",
    ],
    results: [
      "AOV increased by 48% immediately upon launching the bundled offers.",
      "Repeat purchase rate rose to 38% within 90 days, turning one-time buyers into recurring revenue.",
      "Generated ₹1.4 Crores in revenue over a single quarter at 4.9× blended ROAS.",
    ],
    testimonial: {
      quote:
        "KLIQURA didn't just run ads; they solved our unit economics. Their bundle strategy transformed our brand into a sustainable, highly profitable business.",
      author: "Sameer J.",
      role: "CEO, VedaPure Organics",
    },
  },
];

const categories = [
  { id: "all", label: "All Case Studies" },
  { id: "performance", label: "Performance Marketing" },
  { id: "seo", label: "SEO & Organic" },
  { id: "growth", label: "Growth Marketing" },
  { id: "social", label: "Social Media & Content" },
  { id: "cro", label: "Website & CRO" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeModal, setActiveModal] = useState(null);

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("case-studies-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="work-page">
      {/* ===== HERO SECTION (NO CHEESY AI IMAGES - PURE DIGITAL AGENCY EXCELLENCE) ===== */}
      <section className="work-hero-clean">
        <div className="work-hero-ambient" />
        <div className="work-hero-container">
          <div className="work-hero-badge-wrap">
            <span className="work-badge-pill">
              <span className="badge-pulse" />
              CLIENT CASE STUDIES • PROVEN REVENUE RESULTS
            </span>
          </div>

          <h1 className="work-hero-title">
            Real Growth. Proven ROAS.
            <span className="work-title-gradient"> Work That Drives Bottom-Line Revenue.</span>
          </h1>

          <p className="work-hero-subtitle">
            We don’t celebrate vanity metrics like impressions and empty clicks. At KLIQURA,
            our portfolio reflects bankable business growth—scaling Meta & Google Ads, dominating
            organic Google rankings, and architecting frictionless conversion funnels for ambitious brands.
          </p>

          <div className="work-hero-actions">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="work-btn-primary"
            >
              Get Your Free Growth Audit <span className="btn-arrow">↗</span>
            </Link>
            <a
              href="#case-studies-grid"
              onClick={handleSmoothScroll}
              className="work-btn-secondary"
            >
              Explore Case Studies ↓
            </a>
          </div>

          {/* ===== LIVE AGENCY IMPACT STATS STRIP ===== */}
          <div className="work-stats-strip">
            <div className="work-stat-box">
              <strong>₹18.4 Cr+</strong>
              <span>Client Revenue Delivered</span>
            </div>
            <div className="work-stat-sep" />
            <div className="work-stat-box">
              <strong>4.8×</strong>
              <span>Average Blended ROAS</span>
            </div>
            <div className="work-stat-sep" />
            <div className="work-stat-box">
              <strong>450K+</strong>
              <span>High-Intent Inquiries & Leads</span>
            </div>
            <div className="work-stat-sep" />
            <div className="work-stat-box">
              <strong>96.4%</strong>
              <span>Client Retention Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO & CASE STUDIES SHOWCASE ===== */}
      <section id="case-studies-grid" className="work-portfolio-section">
        <div className="work-portfolio-container">
          <div className="work-section-header">
            <p className="work-eyebrow">CURATED CLIENT RESULTS</p>
            <h2>
              Engineered For <span>Measurable Impact</span>
            </h2>
            <p className="work-section-desc">
              Explore how we solve tough acquisition challenges across D2C, B2B, hospitality, and local businesses.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="work-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`work-filter-btn ${activeFilter === cat.id ? "filter-active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="work-cards-grid">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className={`case-study-card theme-${study.color}`}
              >
                <div className="study-card-top">
                  <div className="study-category-badge">{study.categoryLabel}</div>
                  <span className="study-client-tag">{study.industry}</span>
                </div>

                <div className="study-hero-metric-box">
                  <div className="metric-number-wrap">
                    <strong className="metric-number">{study.heroMetric}</strong>
                    <span className="metric-trend">↗</span>
                  </div>
                  <span className="metric-caption">{study.heroMetricLabel}</span>
                </div>

                <h3 className="study-title">{study.title}</h3>

                <p className="study-summary">{study.summary}</p>

                {/* 3 Result Pills */}
                <div className="study-badges-grid">
                  {study.badges.map((b, idx) => (
                    <div className="study-badge-pill" key={idx}>
                      <strong>{b.value}</strong>
                      <span>{b.label}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="study-card-footer">
                  <button
                    type="button"
                    className="study-modal-btn"
                    onClick={() => setActiveModal(study)}
                  >
                    View Full Strategy & Data <span className="btn-arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE KLIQURA 4-STEP GROWTH BLUEPRINT ===== */}
      <section className="work-blueprint-section">
        <div className="blueprint-container">
          <div className="blueprint-header">
            <p className="work-eyebrow">HOW WE GUARANTEE RESULTS</p>
            <h2>
              The KLIQURA <span>Execution Framework</span>
            </h2>
            <p>
              Predictable growth isn&apos;t an accident. It is the result of continuous data audits, rapid creative testing, and ruthless budget allocation.
            </p>
          </div>

          <div className="blueprint-steps-grid">
            <div className="blueprint-step-card">
              <span className="step-counter">01</span>
              <h4>Deep Forensic Audit</h4>
              <p>
                We tear down your current ad accounts, tracking pixels, competitors, and website drop-offs to pinpoint exact revenue leaks.
              </p>
            </div>

            <div className="blueprint-step-card">
              <span className="step-counter">02</span>
              <h4>Multi-Channel Strategy</h4>
              <p>
                We formulate high-converting offers, audience targeting roadmaps, and unified attribution models across Google, Meta, and SEO.
              </p>
            </div>

            <div className="blueprint-step-card">
              <span className="step-counter">03</span>
              <h4>Rapid Creative Sprints</h4>
              <p>
                We produce dozens of custom UGC hooks, static designs, and landing page variants weekly to rapidly lower customer acquisition cost.
              </p>
            </div>

            <div className="blueprint-step-card">
              <span className="step-counter">04</span>
              <h4>Aggressive Scaling</h4>
              <p>
                We double down on winning campaigns, eliminate unprofitable segments, and scale daily budgets with consistent, predictable ROAS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLIENT TESTIMONIALS SECTION ===== */}
      <section className="work-testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <p className="work-eyebrow">WHAT FOUNDERS SAY</p>
            <h2>
              Trusted By <span>Ambitious Businesses</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                KLIQURA turned our Meta Ads from an unpredictable expense into our most profitable growth machine. Their creative testing speed and ROAS discipline are unmatched in the industry.
              </p>
              <div className="quote-author-info">
                <strong>Aditi S.</strong>
                <span>Founder, Aura Threaded (D2C Apparel)</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                We saved lakhs in third-party hotel commissions within 4 months. KLIQURA made our resort the first organic search result travelers see when booking luxury stays in Udaipur.
              </p>
              <div className="quote-author-info">
                <strong>Vikramaditya S.</strong>
                <span>Managing Director, The Royal Haveli</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="quote-text">
                Transparent, aggressive, and 100% focused on bankable numbers. KLIQURA isn&apos;t just an external agency; they operate as our in-house growth and performance department.
              </p>
              <div className="quote-author-info">
                <strong>Rohan M.</strong>
                <span>VP Growth, CloudPulse CRM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CONVERSION CALL TO ACTION ===== */}
      <section className="work-cta-section">
        <div className="work-cta-container">
          <span className="cta-mini-tag">YOUR BRAND COULD BE OUR NEXT CASE STUDY</span>
          <h2>
            Ready to Turn Digital Marketing Into Your <span>Highest-Return Investment?</span>
          </h2>
          <p>
            Stop guessing with your ad budgets and SEO. Book a complimentary 30-minute growth teardown where we analyze your channels and give you an actionable roadmap.
          </p>

          <div className="cta-actions">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="work-btn-cta"
            >
              Claim Your Free Growth Audit <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY MODAL DETAIL VIEW ===== */}
      {activeModal && (
        <div
          className="study-modal-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="study-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="study-modal-close"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="modal-header-strip">
              <span className="modal-category">{activeModal.categoryLabel}</span>
              <span className="modal-client">{activeModal.client} • {activeModal.industry}</span>
            </div>

            <h2 className="modal-title">{activeModal.title}</h2>

            <div className="modal-hero-kpi">
              <div className="modal-kpi-block">
                <strong>{activeModal.heroMetric}</strong>
                <span>{activeModal.heroMetricLabel}</span>
              </div>
            </div>

            <div className="modal-badges-row">
              {activeModal.badges.map((b, idx) => (
                <div className="modal-badge-box" key={idx}>
                  <strong>{b.value}</strong>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            <div className="modal-body-content">
              <div className="modal-section-block">
                <h4>The Challenge</h4>
                <p>{activeModal.challenge}</p>
              </div>

              <div className="modal-section-block">
                <h4>The KLIQURA Strategy</h4>
                <ul>
                  {activeModal.strategy.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-tick">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-block">
                <h4>Key Concrete Results</h4>
                <ul>
                  {activeModal.results.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-star">★</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {activeModal.testimonial && (
                <div className="modal-quote-box">
                  <p>“{activeModal.testimonial.quote}”</p>
                  <span>
                    — {activeModal.testimonial.author}, {activeModal.testimonial.role}
                  </span>
                </div>
              )}
            </div>

            <div className="modal-cta-footer">
              <Link
                to="/contact"
                onClick={() => {
                  setActiveModal(null);
                  handleLinkClick();
                }}
                className="modal-start-btn"
              >
                Scale Your Brand With KLIQURA ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}