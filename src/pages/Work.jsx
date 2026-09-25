import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

const caseStudies = [
  {
    id: "d2c-apparel",
    category: "performance",
    categoryLabel: "Performance Marketing",
    client: "Aura Threaded",
    industry: "Premium D2C Apparel",
    title: "Scaling Monthly D2C Revenue from ₹14L to ₹92L in 6 Months",
    heroMetric: "5.4×",
    heroMetricLabel: "Blended Return on Ad Spend (ROAS)",
    color: "red",
    tags: ["Meta Ads (ASC)", "Google PMax", "UGC Creative", "Retention Flows"],
    resultsList: [
      "+557% Total Revenue Scaled",
      "-38% Customer Acquisition Cost (CAC)",
      "₹1.8 Cr+ Total GMV Generated",
    ],
    summary:
      "Aura Threaded had hit an ad-spend plateau with stagnant ROAS below 1.8×. KLIQURA rebuilt their paid media engine with dynamic creative testing (DCT), high-converting UGC video hooks, and automated WhatsApp cart recovery.",
    challenge:
      "High ad creative fatigue, rising Meta CPMs, and a leaky mobile checkout where 72% of carts were abandoned without completing payment.",
    strategy: [
      "Engineered an aggressive creative sprint delivering 35+ fresh UGC hooks and problem-solution video ads every month.",
      "Restructured ad account into Advantage+ Shopping Campaigns (ASC) and high-intent Google Search/PMax campaigns.",
      "Built automated WhatsApp & SMS checkout recovery sequences that reclaimed 34% of dropped carts within 2 hours.",
      "Streamlined Shopify checkout UX for mobile speed and 1-tap UPI, lifting overall conversion rate from 1.6% to 3.8%.",
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
    title: "Dominating Google Search & Eliminating High OTA Commissions",
    heroMetric: "+340%",
    heroMetricLabel: "Organic Direct Inbound Bookings",
    color: "yellow",
    tags: ["Technical SEO", "Local Google Business", "Content Clusters", "UX Speed"],
    resultsList: [
      "#1 Google Rank for 48+ Keywords",
      "₹64 Lakhs Direct Booking Revenue",
      "Zero Third-Party Commission Fees",
    ],
    summary:
      "The resort relied heavily on booking portals (OTAs), losing 18–22% per reservation in fees. KLIQURA deployed technical and local SEO to make their website the #1 choice for direct destination wedding and holiday bookings.",
    challenge:
      "Zero page-1 rankings for competitive commercial queries like 'luxury heritage resort in Udaipur' and destination wedding inquiries. High bounce rate due to slow mobile loading.",
    strategy: [
      "Technical Core Web Vitals overhaul: boosted Google mobile speed score from 38 to 96.",
      "Targeted high-value commercial keywords: 'heritage destination wedding resort Udaipur' and 'luxury lakeview suites'.",
      "Full Google Business Profile optimization with hyper-local geo-tagging and 5-star review acquisition workflows.",
      "Created comprehensive Udaipur wedding & holiday itinerary guides that established authoritative backlinks from travel publications.",
    ],
    results: [
      "#1 ranking on Google for 48+ competitive destination wedding and resort queries.",
      "Direct organic inquiries surged by 340%, generating ₹64 Lakhs in zero-commission direct revenue.",
      "Reduced dependency on third-party OTAs by more than 55%.",
    ],
    testimonial: {
      quote:
        "We saved lakhs in portal commissions within months. KLIQURA made our resort the first organic search result luxury travelers see when searching for Udaipur.",
      author: "Vikramaditya S.",
      role: "Managing Director, The Royal Haveli",
    },
  },
  {
    id: "b2b-saas",
    category: "growth",
    categoryLabel: "Growth Marketing",
    client: "CloudPulse CRM",
    industry: "B2B Enterprise Software",
    title: "Building an Automated Inbound Pipeline for Enterprise Deal Closures",
    heroMetric: "320+",
    heroMetricLabel: "Sales Qualified Enterprise Leads (SQLs)",
    color: "navy",
    tags: ["LinkedIn ABM Ads", "Competitor Search Ads", "CRO Landing Page", "Email Drip"],
    resultsList: [
      "4.2× Qualified Pipeline Surge",
      "-45% Cost Per Qualified Lead",
      "₹3.2 Cr Closed Deal Value",
    ],
    summary:
      "CloudPulse had a revolutionary product but was burning capital on cold outreach with single-digit response rates. KLIQURA engineered an inbound growth engine targeting decision-makers on LinkedIn and high-intent Google Search.",
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
    industry: "Specialty Cafe & Lifestyle Brand",
    title: "Driving Record Store Footfall with Viral Short-Form Video Strategy",
    heroMetric: "6.8M+",
    heroMetricLabel: "Organic Instagram Reel Views",
    color: "red",
    tags: ["Cinematic Reels", "Creator Seeding", "Secret Menus", "Community Growth"],
    resultsList: [
      "+140K Engaged Followers",
      "+210% Weekend Store Footfall",
      "18 Viral Reels >250K Views",
    ],
    summary:
      "Brew & Bean was opening two new outlets and needed instant local awareness without burning money on traditional print or hoarding ads. KLIQURA turned their Instagram account into an engaging lifestyle cultural hub.",
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
    industry: "High-Ticket Medical Dermatology",
    title: "Doubling High-Ticket Consultation Bookings via Frictionless Mobile Funnel",
    heroMetric: "+142%",
    heroMetricLabel: "Increase in Booked Consultations",
    color: "yellow",
    tags: ["Mobile Funnel CRO", "1-Tap WhatsApp", "Video Proof", "Speed Optimization"],
    resultsList: [
      "1.2s Mobile Page Speed",
      "+68% Mobile Conversion Rate",
      "3.9× Return on Marketing Spend",
    ],
    summary:
      "Lumina was running paid ads to a slow, desktop-centric website. Mobile visitors bounced before reaching the contact form. KLIQURA engineered a lightning-fast mobile-first conversion funnel with 1-tap WhatsApp booking.",
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
    industry: "Health & Wellness D2C",
    title: "Solving Unit Economics with High-Converting Bundles & Retention Loops",
    heroMetric: "4.9×",
    heroMetricLabel: "Blended ROAS with 38% Repeat Rate",
    color: "navy",
    tags: ["Bundle Offer Engine", "Advantage+ Scaling", "SMS Flows", "AOV Optimization"],
    resultsList: [
      "₹1.4 Cr Quarterly Revenue",
      "+48% Average Order Value (AOV)",
      "22,000+ New Buyers Acquired",
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
  { id: "all", label: "All Projects" },
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
    const el = document.getElementById("portfolio-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="work-page">
      {/* ===== HERO SECTION: DISTINCTIVE, CLEAN 2-COLUMN MARKETING SHOWCASE ===== */}
      <section className="work-hero-clean">
        <div className="work-hero-wrap">
          {/* Left Column: Bold Editorial Positioning */}
          <div className="work-hero-content">
            <span className="work-eyebrow-tag">PORTFOLIO • CASE STUDIES</span>

            <h1 className="work-hero-headline">
              Marketing Engineered For <span>Predictable Revenue.</span>
            </h1>

            <p className="work-hero-description">
              We don’t celebrate vanity metrics like impressions and empty clicks.
              Every project in our portfolio is engineered to drive tangible return on ad spend (ROAS),
              high-intent inbound leads, and compounding bottom-line growth.
            </p>

            <div className="work-hero-cta-group">
              <a
                href="#portfolio-section"
                onClick={handleSmoothScroll}
                className="btn-work-explore"
              >
                Explore Case Studies ↓
              </a>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="btn-work-audit"
              >
                Claim Free Growth Audit ↗
              </Link>
            </div>
          </div>

          {/* Right Column: Distinctive Live Agency Performance Card */}
          <div className="work-hero-visual">
            <div className="perf-summary-card">
              <div className="perf-card-header">
                <div className="perf-status-indicator">
                  <span className="perf-dot" />
                  <span className="perf-status-text">AGGREGATE PORTFOLIO METRICS</span>
                </div>
                <span className="perf-period-tag">Verified ROI</span>
              </div>

              <div className="perf-main-kpi">
                <span className="perf-kpi-sub">Total Client Revenue Delivered</span>
                <div className="perf-kpi-val">₹18.4 Cr+</div>
                <span className="perf-kpi-growth">↗ +312% YoY Average Client Scaling</span>
              </div>

              <div className="perf-divider-line" />

              <div className="perf-stats-trio">
                <div className="perf-mini-stat">
                  <strong>4.8×</strong>
                  <span>Avg Blended ROAS</span>
                </div>
                <div className="perf-mini-stat">
                  <strong>450K+</strong>
                  <span>High-Intent Leads</span>
                </div>
                <div className="perf-mini-stat">
                  <strong>96.4%</strong>
                  <span>Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO & CASE STUDIES: CLEAN 2-COLUMN SPACIOUS GRID ===== */}
      <section id="portfolio-section" className="work-portfolio-section">
        <div className="work-portfolio-wrap">
          {/* Section Header */}
          <div className="portfolio-section-header">
            <span className="work-eyebrow-tag">CURATED PROVEN WORK</span>
            <h2>
              Real Brands. <span>Real Numbers.</span>
            </h2>
            <p>
              Browse our documented case studies across D2C e-commerce, luxury hospitality, B2B technology, and lifestyle brands.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="work-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-tab ${activeFilter === cat.id ? "tab-active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Clean 2-Column Spacious Grid */}
          <div className="case-studies-grid">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className={`study-card study-card-${study.color}`}
              >
                {/* Card Top: Client & Service Category */}
                <div className="study-card-top-row">
                  <span className="study-client-name">{study.client}</span>
                  <span className="study-category-pill">{study.categoryLabel}</span>
                </div>

                {/* Prominent Hero Metric */}
                <div className="study-metric-highlight">
                  <div className="metric-large-number">{study.heroMetric}</div>
                  <div className="metric-large-label">{study.heroMetricLabel}</div>
                </div>

                {/* Outcome Headline */}
                <h3 className="study-headline">{study.title}</h3>

                {/* Plain 2-sentence summary with relaxed spacing */}
                <p className="study-description">{study.summary}</p>

                {/* 3 Concrete Results Bulleted with Clean Ticks */}
                <div className="study-results-block">
                  <span className="results-block-title">Key Measurable Outcomes:</span>
                  <ul className="results-list">
                    {study.resultsList.map((res, idx) => (
                      <li key={idx}>
                        <span className="tick-mark">✓</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Tags */}
                <div className="study-tags-row">
                  {study.tags.map((tag, idx) => (
                    <span className="study-tag-item" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Footer: Action Button */}
                <div className="study-card-action-row">
                  <button
                    type="button"
                    className="btn-view-strategy"
                    onClick={() => setActiveModal(study)}
                  >
                    View Full Strategy & Data <span className="arrow-icon">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE 4-STAGE EXECUTION BLUEPRINT ===== */}
      <section className="work-blueprint-section">
        <div className="blueprint-wrap">
          <div className="blueprint-header-centered">
            <span className="work-eyebrow-tag">OUR METHODOLOGY</span>
            <h2>
              The KLIQURA <span>Execution Framework</span>
            </h2>
            <p>
              Predictable scaling is an engineering discipline. Every client follows our rigorous 4-stage optimization cycle.
            </p>
          </div>

          <div className="blueprint-grid">
            <div className="blueprint-card">
              <span className="blueprint-num">01</span>
              <h4>Deep Forensic Audit</h4>
              <p>
                We tear down historical ad spend, tracking pixels, search share, and mobile conversion friction to reveal hidden revenue leaks.
              </p>
            </div>

            <div className="blueprint-card">
              <span className="blueprint-num">02</span>
              <h4>Multi-Channel Strategy</h4>
              <p>
                We craft high-converting offers, audience maps, and unified attribution models across Google, Meta, and organic search.
              </p>
            </div>

            <div className="blueprint-card">
              <span className="blueprint-num">03</span>
              <h4>Rapid Creative Sprints</h4>
              <p>
                We produce fresh UGC video hooks, static creatives, and landing page variations weekly to continually drive down acquisition costs.
              </p>
            </div>

            <div className="blueprint-card">
              <span className="blueprint-num">04</span>
              <h4>Aggressive Scaling</h4>
              <p>
                We reallocate capital into top-performing funnels and scale daily budgets while maintaining high, predictable ROAS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER TESTIMONIALS ===== */}
      <section className="work-testimonials-section">
        <div className="testimonials-wrap">
          <div className="testimonials-header-centered">
            <span className="work-eyebrow-tag">CLIENT FEEDBACK</span>
            <h2>
              What Founders & <span>Growth Leaders Say</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “KLIQURA turned our Meta Ads from an unpredictable cost center into our highest-margin revenue engine. Their creative testing velocity and ROAS discipline are exceptional.”
              </p>
              <div className="testimonial-author">
                <strong>Aditi Sharma</strong>
                <span>Founder, Aura Threaded (D2C Apparel)</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Direct hotel bookings jumped 340% within 4 months. We saved lakhs in booking portal commissions thanks to their local SEO dominance in Udaipur.”
              </p>
              <div className="testimonial-author">
                <strong>Vikramaditya Singh</strong>
                <span>Managing Director, The Royal Haveli</span>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Transparent, aggressive, and 100% focused on bankable metrics. KLIQURA operates as an essential extension of our core growth and demand gen team.”
              </p>
              <div className="testimonial-author">
                <strong>Rohan Mehta</strong>
                <span>VP Growth, CloudPulse CRM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HIGH-CONVERTING BOTTOM CTA ===== */}
      <section className="work-cta-section">
        <div className="work-cta-wrap">
          <span className="cta-kicker">LET&apos;S GROW TOGETHER</span>
          <h2>
            Ready to Turn Marketing Into Your <span>Highest-Return Asset?</span>
          </h2>
          <p>
            Stop burning budget on guesswork. Book a free 30-minute growth teardown with our senior strategists to uncover untapped revenue in your funnel.
          </p>
          <div className="cta-btn-wrap">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="btn-cta-main"
            >
              Claim Your Free Growth Audit ↗
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

            <div className="modal-body-content">
              <div className="modal-section-block">
                <h4>The Challenge</h4>
                <p>{activeModal.challenge}</p>
              </div>

              <div className="modal-section-block">
                <h4>The KLIQURA Strategy</h4>
                <ul className="modal-list">
                  {activeModal.strategy.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-tick">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section-block">
                <h4>Key Concrete Results</h4>
                <ul className="modal-list">
                  {activeModal.results.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-star">★</span>
                      <span>{item}</span>
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