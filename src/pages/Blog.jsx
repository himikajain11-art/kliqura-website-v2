import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const articles = [
  {
    id: "01",
    category: "performance",
    categoryLabel: "Performance Ads",
    color: "red",
    readTime: "5 min read",
    date: "Updated September 2026",
    title: "Why Meta Advantage+ Shopping Needs Rapid Creative Sprints to Scale",
    summary:
      "Relying on Meta's algorithm without continuous creative testing is the #1 reason ad accounts plateau. Here is how weekly creative hooks drive sustained ROAS above 4.5×.",
    takeaways: [
      "Algorithmic audience expansion demands 20+ fresh hooks monthly",
      "Dynamic Creative Testing (DCT) isolates winning angles with 60% less spend",
      "Why post-click mobile landing page speed dictates Meta CPM costs",
    ],
    fullContent: {
      intro:
        "In 2026, Meta’s machine learning is smarter than ever. The old days of manual micro-targeting by age, interest, and behavior are obsolete. Advantage+ Shopping Campaigns (ASC) now handle targeting autonomously. However, this has created a new dilemma: ad fatigue happens three times faster than before.",
      sections: [
        {
          heading: "1. The Creative Is Your New Targeting",
          text:
            "Because Meta automatically finds buyers based on post-engagement signals, your ad creative itself dictates who sees your ad. If your hook addresses high-ticket luxury buyers, the algorithm routes it to them. If it relies on cheap discounts, it attracts price-sensitive bargain hunters.",
        },
        {
          heading: "2. The Dynamic Creative Testing (DCT) Pipeline",
          text:
            "At KLIQURA, we never launch raw ads into scaling campaigns. We test 3 hooks, 2 bodies, and 2 visual assets in isolated DCT sandboxes. Only combinations with higher than 3.5% CTR and sub-target Cost Per Acquisition (CPA) graduate to high-budget scaling ad sets.",
        },
        {
          heading: "3. Defending Your Blended ROAS",
          text:
            "A high-performing ad will fatigue within 14–21 days. Without a continuous weekly pipeline of user-generated content (UGC), founder stories, and problem-solution demos, your CPA will inevitably double.",
        },
      ],
      checklist: [
        "Audit ad account for overlap between ASC and manual campaigns",
        "Deploy 5 new video hook variations every Monday morning",
        "Kill any ad variation where CPA exceeds 1.3× target after 50 impressions",
      ],
    },
  },
  {
    id: "02",
    category: "seo",
    categoryLabel: "SEO & Search",
    color: "yellow",
    readTime: "6 min read",
    date: "Updated September 2026",
    title: "The Zero-Click Search Era: Dominating Google Beyond Raw Traffic",
    summary:
      "Google AI Overviews and local map packs have rewritten the rules of organic search. How high-intent commercial content captures real buyers instead of casual browsers.",
    takeaways: [
      "Why ranking for informational volume yields 80% fewer leads today",
      "Structuring content for Google AI Overviews and Google Business Maps",
      "Building authoritative local and national digital PR backlinks",
    ],
    fullContent: {
      intro:
        "The standard SEO strategy of publishing 500-word generic blog posts to capture top-of-funnel search volume is dead. Google's generative AI summarizes basic questions directly in the search results, resulting in zero clicks to informational sites. To win today, your SEO must target high-intent commercial decision queries.",
      sections: [
        {
          heading: "1. The Shift to High-Intent Commercial Keywords",
          text:
            "Instead of targeting 'what is digital marketing' (which yields zero leads), high-growth brands target 'best digital marketing agency in Rajasthan for D2C scaling' or 'heritage wedding resort direct booking rates'. These searchers have immediate purchasing intent and wallets ready.",
        },
        {
          heading: "2. Google Business Profile & Local Map Pack Dominance",
          text:
            "For businesses with physical locations, luxury resorts, and high-ticket service providers, over 65% of all calls and inquiries originate from Google Maps. Geo-tagged visual media, verified 5-star customer reviews, and consistent local citations form the bedrock of local dominance.",
        },
        {
          heading: "3. Technical Core Web Vitals as a Conversion Filter",
          text:
            "Google explicitly penalizes slow-loading mobile websites. If your website takes longer than 2.0 seconds to become interactive, bounce rates surge past 50%. Clean DOM structure and optimized WebP media are mandatory for high ranking.",
        },
      ],
      checklist: [
        "Filter keyword list to include purchase-intent modifiers (pricing, top-rated, reviews)",
        "Optimize Google Business Profile with weekly geo-tagged updates",
        "Ensure Mobile Core Web Vitals score exceeds 90 on Google PageSpeed Insights",
      ],
    },
  },
  {
    id: "03",
    category: "cro",
    categoryLabel: "Website CRO",
    color: "navy",
    readTime: "4 min read",
    date: "Updated September 2026",
    title: "Why Driving Traffic to a Slow Website Is Burning Your Marketing Budget",
    summary:
      "Most agencies blame ad platforms when sales lag. In reality, 68% of lost revenue happens on the website itself. How 1-tap checkout and frictionless UX double conversions.",
    takeaways: [
      "Every 1-second delay in page speed slashes mobile conversions by 26%",
      "Eliminating checkout friction: why 1-tap UPI and WhatsApp funnels win",
      "Heatmap teardowns: identifying where 70% of potential buyers drop off",
    ],
    fullContent: {
      intro:
        "You can run the most brilliant Meta Ads and rank #1 on Google, but if your landing page takes 4 seconds to load or asks for 8 form fields, your entire acquisition budget is incinerated. Conversion Rate Optimization (CRO) is the highest-leverage multiplier in digital marketing.",
      sections: [
        {
          heading: "1. The Mobile Speed Benchmark",
          text:
            "Over 84% of digital marketing traffic in India arrives on mobile smartphones over 4G/5G connections. When mobile page load times stretch past 2 seconds, drop-off rates increase exponentially. Trimming bloated third-party scripts and optimizing images yields instant revenue lifts.",
        },
        {
          heading: "2. Removing Cognitive Friction at Checkout",
          text:
            "Requiring account creation, password setup, or multi-step address forms creates immense friction. Introducing 1-tap UPI checkout (PhonePe, Google Pay, Paytm) and automated WhatsApp verification routinely increases completed purchases by 35% to 50%.",
        },
        {
          heading: "3. Social Proof Above the Fold",
          text:
            "Modern buyers are skeptical. Prominently placing verified customer ratings, doctor/founder certifications, and clear return policies directly beside the primary Call To Action eliminates buyer hesitation at the exact moment of decision.",
        },
      ],
      checklist: [
        "Conduct a full mobile checkout walkthrough on both iOS and Android",
        "Implement 1-tap UPI payment gateway options to eliminate card entry",
        "Add interactive customer review sliders within the initial viewport",
      ],
    },
  },
  {
    id: "04",
    category: "growth",
    categoryLabel: "Growth Strategy",
    color: "red",
    readTime: "5 min read",
    date: "Updated September 2026",
    title: "The Modern Revenue Engine: Mapping Acquisition to Lifetime Value (LTV)",
    summary:
      "Single-channel marketing creates fragile businesses. How connecting SEO, paid media, and automated retention loops builds predictable compounding profits.",
    takeaways: [
      "The danger of single-channel dependency and rising platform ad taxes",
      "Architecting the full-funnel retention loop: turning buyers into advocates",
      "Unit economics: calculating true Blended CAC vs. 90-Day Customer LTV",
    ],
    fullContent: {
      intro:
        "Many business owners view digital marketing as a series of isolated tactics: run some ads this week, post on Instagram tomorrow, do some SEO next month. This disjointed approach leads to erratic revenue and constant anxiety. Scalable businesses build integrated growth engines where every channel amplifies the other.",
      sections: [
        {
          heading: "1. Overcoming the Paid Ad Trap",
          text:
            "If your business stops generating sales the exact minute you pause your Meta or Google Ads, you do not have a marketing engine—you have an ad addiction. Sustainable scale requires combining paid acquisition with compounding organic assets and high-margin retention channels.",
        },
        {
          heading: "2. The 90-Day Retention Multiplier",
          text:
            "The profit in modern commerce is rarely made on the first transaction. The initial sale simply offsets your Customer Acquisition Cost (CAC). True enterprise value is unlocked in days 30 through 90 via automated SMS, email, and WhatsApp replenishment sequences.",
        },
        {
          heading: "3. Multi-Touch Attribution",
          text:
            "A prospective customer might discover your brand through an organic Google search, get retargeted by a cinematic Instagram Reel, and finally convert 10 days later via a brand search ad. Tracking the unified customer journey prevents cutting off top-of-funnel awareness channels that feed your bottom line.",
        },
      ],
      checklist: [
        "Calculate 90-day repeat purchase rate and customer lifetime value",
        "Set up automated post-purchase onboarding and cross-sell drip flows",
        "Review multi-channel attribution before adjusting top-of-funnel budgets",
      ],
    },
  },
  {
    id: "05",
    category: "social",
    categoryLabel: "Social & Content",
    color: "yellow",
    readTime: "4 min read",
    date: "Updated September 2026",
    title: "Short-Form Video Mastery: How 15-Second Reels Drive 7-Figure Inbound Sales",
    summary:
      "Aesthetic images no longer hold social attention. How cinematic micro-vlogs, trending audio hooks, and behind-the-scenes founder storytelling build brand dominance.",
    takeaways: [
      "The 3-second hook rule: capturing attention before users scroll past",
      "Converting viral video reach into quantifiable website visits and DMs",
      "Micro-influencer seeding: partnering with 20 niche creators profitably",
    ],
    fullContent: {
      intro:
        "Instagram and YouTube algorithms now prioritize retention time and shares over raw follower count. An account with 3,000 followers can easily generate 1,000,000 views if the content triggers emotional resonance and high watch time. But viral views without a conversion mechanism are completely useless.",
      sections: [
        {
          heading: "1. The Anatomy of a High-Converting Reel",
          text:
            "Every viral reel follows a formula: a provocative 2-second visual/text hook, a 10-second value-packed body delivering on the promise, and a 3-second clear call-to-action directing viewers to comment a specific keyword for an instant DM link.",
        },
        {
          heading: "2. Automated DM Conversion Funnels",
          text:
            "Instead of hoping viewers click the tiny link in your bio, instruct them to comment a word like 'MENU' or 'SCALE'. Using automated DM workflows, our clients instantly send direct checkout or booking links into the prospect's inbox, achieving 45%+ click-through rates.",
        },
        {
          heading: "3. Authentic UGC vs. High-Production Commercials",
          text:
            "Audiences have developed blindness to overly polished corporate commercials. Raw, handheld, aesthetic smartphone footage demonstrating real product usage or behind-the-scenes craft routinely outperforms expensive studio productions by 3× in engagement and sales.",
        },
      ],
      checklist: [
        "Audit existing social content for clear first-3-second hooks",
        "Deploy automated DM reply keywords on all promotional reels",
        "Implement a monthly UGC content creation pipeline with real customers",
      ],
    },
  },
  {
    id: "06",
    category: "performance",
    categoryLabel: "Performance Ads",
    color: "navy",
    readTime: "5 min read",
    date: "Updated September 2026",
    title: "Google Performance Max (PMax) Demystified: Bidding Strategies That Deliver",
    summary:
      "PMax can either be an ad budget incinerator or your #1 revenue generator. How asset group segmentation and negative keyword exclusions protect your margins.",
    takeaways: [
      "Separating branded vs. non-branded search queries to prevent false ROAS",
      "Building high-performing audience signals with first-party customer lists",
      "Target ROAS (tROAS) vs. Maximize Conversion Value bidding mechanics",
    ],
    fullContent: {
      intro:
        "Google Performance Max combines Search, Shopping, YouTube, Display, Discover, and Gmail into a single algorithmic campaign. While it promises effortless scale, many advertisers discover their budget is cannibalized by cheap display placements or branded search queries they would have captured organically.",
      sections: [
        {
          heading: "1. Preventing Brand Cannibalization",
          text:
            "By default, PMax bids heavily on your own brand name because those conversions are easy to win. This inflates reported ROAS to 8× while new customer acquisition stagnates. Creating account-level negative keyword lists for your brand forces PMax to find truly incremental new buyers.",
        },
        {
          heading: "2. Feeding First-Party Customer Signals",
          text:
            "Google's AI needs high-quality data to learn. Uploading your highest-LTV customer lists and past purchasers as custom audience signals helps Google locate matching high-intent profiles 40% faster than broad algorithmic discovery.",
        },
        {
          heading: "3. High-Quality Video and Image Asset Groups",
          text:
            "If you do not provide Google with high-definition vertical and landscape video assets, Google will automatically generate low-quality slideshows that damage your brand perception. Providing custom video assets protects brand equity while maximizing ad quality scores.",
        },
      ],
      checklist: [
        "Request Google support to add negative brand keyword exclusions to PMax",
        "Upload hashed first-party customer email lists as audience signals",
        "Audit asset groups to ensure all video, image, and copy slots have bespoke assets",
      ],
    },
  },
];

const categories = [
  { id: "all", label: "All Insights", icon: "✦", count: 6 },
  { id: "performance", label: "Performance Ads", icon: "⚡", count: 2 },
  { id: "seo", label: "SEO & Search", icon: "⌕", count: 1 },
  { id: "growth", label: "Growth Strategy", icon: "↗", count: 1 },
  { id: "social", label: "Social & Viral", icon: "◎", count: 1 },
  { id: "cro", label: "Website CRO", icon: "</>", count: 1 },
];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeModal, setActiveModal] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const filteredArticles =
    activeFilter === "all"
      ? articles
      : articles.filter((item) => item.category === activeFilter);

  const handleDiagramNodeClick = (categoryId) => {
    setActiveFilter(categoryId);
    const el = document.getElementById("articles-feed");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="blog-page">
      {/* ===== HERO SECTION ===== */}
      <section className="blog-hero-clean">
        <div className="blog-hero-ambient" />
        <div className="blog-hero-container">
          <div className="blog-hero-badge-wrap">
            <span className="blog-badge-pill">
              <span className="badge-pulse" />
              KLIQURA INSIGHTS • STRATEGIC GROWTH PLAYBOOKS
            </span>
          </div>

          <h1 className="blog-hero-title">
            Battle-Tested Marketing Playbooks.
            <span className="blog-title-gradient"> No Fluff. Pure Revenue Logic.</span>
          </h1>

          <p className="blog-hero-subtitle">
            We don’t publish surface-level tips. Every guide here is distilled from hundreds of hours of
            ad account optimizations, technical SEO overhauls, conversion rate testing, and real revenue scaling.
          </p>

          <div className="blog-hero-meta-row">
            <div className="hero-meta-item">
              <strong>6 In-Depth Guides</strong>
              <span>Actionable Frameworks</span>
            </div>
            <div className="hero-meta-sep" />
            <div className="hero-meta-item">
              <strong>100% Practical</strong>
              <span>Data-Backed Insights</span>
            </div>
            <div className="hero-meta-sep" />
            <div className="hero-meta-item">
              <strong>Senior Strategists</strong>
              <span>Written by Practitioners</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE KLIQURA REVENUE MARKETING FLYWHEEL DIAGRAM SECTION ===== */}
      <section className="blog-diagram-section">
        <div className="diagram-section-container">
          <div className="diagram-header-block">
            <span className="work-eyebrow-tag">THE KLIQURA KNOWLEDGE ARCHITECTURE</span>
            <h2 className="diagram-main-title">
              The <span>Omnichannel Revenue Flywheel</span>
            </h2>
            <p className="diagram-subtitle">
              Isolated marketing tactics fail. Sustainable brands grow when Search Intent, Paid Ads,
              Conversion UX, and Retention operate as a continuous compounding engine.
              <strong> Click any pillar on the diagram to filter related playbooks.</strong>
            </p>
          </div>

          {/* Interactive SVG Diagram Container */}
          <div className="flywheel-diagram-wrapper">
            <div className="flywheel-svg-box">
              <svg
                viewBox="0 0 760 620"
                className="flywheel-svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Subtle ambient drop shadow */}
                  <filter id="diagramShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#051c52" floodOpacity="0.1" />
                  </filter>

                  {/* Core Center Gradient */}
                  <radialGradient id="centerCoreGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="70%" stopColor="#051c52" />
                    <stop offset="100%" stopColor="#020a1c" />
                  </radialGradient>

                  {/* Node Gradients */}
                  <linearGradient id="nodeSeoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#fffbeb" />
                  </linearGradient>

                  <linearGradient id="nodeAdsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#fff5f5" />
                  </linearGradient>

                  <linearGradient id="nodeCroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f0fdf4" />
                  </linearGradient>

                  <linearGradient id="nodeSocialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#eff6ff" />
                  </linearGradient>
                </defs>

                {/* Outer Circular Orbital Track */}
                <circle
                  cx="380"
                  cy="310"
                  r="215"
                  fill="none"
                  stroke="rgba(5, 28, 82, 0.12)"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                />

                {/* Rotating Energy Orbit Arc */}
                <circle
                  cx="380"
                  cy="310"
                  r="215"
                  fill="none"
                  stroke="url(#centerCoreGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="140 320"
                  strokeLinecap="round"
                  className="orbit-rotating-arc"
                />

                {/* Directional Connecting Flow Arrows on Orbit */}
                {/* Top-Right Arrow */}
                <path d="M 525,165 L 545,178 L 525,190" fill="none" stroke="#e34e4e" strokeWidth="3" strokeLinecap="round" />
                {/* Bottom-Right Arrow */}
                <path d="M 545,430 L 532,450 L 515,435" fill="none" stroke="#ffc300" strokeWidth="3" strokeLinecap="round" />
                {/* Bottom-Left Arrow */}
                <path d="M 235,455 L 215,442 L 235,430" fill="none" stroke="#051c52" strokeWidth="3" strokeLinecap="round" />
                {/* Top-Left Arrow */}
                <path d="M 215,190 L 228,170 L 245,185" fill="none" stroke="#051c52" strokeWidth="3" strokeLinecap="round" />

                {/* Central Connecting Spoke Rays */}
                <line x1="380" y1="310" x2="380" y2="100" stroke="rgba(5, 28, 82, 0.14)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="380" y1="310" x2="590" y2="310" stroke="rgba(5, 28, 82, 0.14)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="380" y1="310" x2="380" y2="520" stroke="rgba(5, 28, 82, 0.14)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="380" y1="310" x2="170" y2="310" stroke="rgba(5, 28, 82, 0.14)" strokeWidth="2" strokeDasharray="4 4" />

                {/* ===== CENTER HUB: REVENUE ENGINE ===== */}
                <g filter="url(#diagramShadow)" className="center-hub-group">
                  <circle cx="380" cy="310" r="82" fill="url(#centerCoreGrad)" />
                  <circle cx="380" cy="310" r="82" fill="none" stroke="#ffc300" strokeWidth="3" opacity="0.6" />
                  <circle cx="380" cy="310" r="72" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.25" />

                  {/* Center Hub Content */}
                  <text x="380" y="295" textAnchor="middle" fill="#ffc300" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="800" letterSpacing="2">
                    KLIQURA CORE
                  </text>
                  <text x="380" y="320" textAnchor="middle" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="19" fontWeight="800">
                    REVENUE
                  </text>
                  <text x="380" y="338" textAnchor="middle" fill="#ffffff" fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="700" opacity="0.85">
                    FLYWHEEL
                  </text>
                </g>

                {/* ===== NODE 1: TOP (SEO & SEARCH INTENT) ===== */}
                <g
                  filter="url(#diagramShadow)"
                  className="interactive-node node-seo"
                  onClick={() => handleDiagramNodeClick("seo")}
                  style={{ cursor: "pointer" }}
                >
                  <circle cx="380" cy="95" r="58" fill="url(#nodeSeoGrad)" stroke="#ffc300" strokeWidth="2.5" />
                  <circle cx="380" cy="95" r="50" fill="none" stroke="rgba(255, 195, 0, 0.3)" strokeWidth="1" />
                  <text x="380" y="80" textAnchor="middle" fill="#d97706" fontFamily="Manrope, sans-serif" fontSize="22" fontWeight="800">
                    ⌕
                  </text>
                  <text x="380" y="103" textAnchor="middle" fill="#051c52" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="800">
                    Search Intent
                  </text>
                  <text x="380" y="119" textAnchor="middle" fill="#526382" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="600">
                    SEO & Authority
                  </text>
                </g>

                {/* ===== NODE 2: RIGHT (PERFORMANCE MEDIA & ROAS) ===== */}
                <g
                  filter="url(#diagramShadow)"
                  className="interactive-node node-ads"
                  onClick={() => handleDiagramNodeClick("performance")}
                  style={{ cursor: "pointer" }}
                >
                  <circle cx="595" cy="310" r="58" fill="url(#nodeAdsGrad)" stroke="#e34e4e" strokeWidth="2.5" />
                  <circle cx="595" cy="310" r="50" fill="none" stroke="rgba(227, 78, 78, 0.3)" strokeWidth="1" />
                  <text x="595" y="295" textAnchor="middle" fill="#e34e4e" fontFamily="Manrope, sans-serif" fontSize="22" fontWeight="800">
                    ⚡
                  </text>
                  <text x="595" y="318" textAnchor="middle" fill="#051c52" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="800">
                    Paid ROAS
                  </text>
                  <text x="595" y="334" textAnchor="middle" fill="#526382" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="600">
                    Meta & Google Ads
                  </text>
                </g>

                {/* ===== NODE 3: BOTTOM (CONVERSION UX & CRO) ===== */}
                <g
                  filter="url(#diagramShadow)"
                  className="interactive-node node-cro"
                  onClick={() => handleDiagramNodeClick("cro")}
                  style={{ cursor: "pointer" }}
                >
                  <circle cx="380" cy="525" r="58" fill="url(#nodeCroGrad)" stroke="#10b981" strokeWidth="2.5" />
                  <circle cx="380" cy="525" r="50" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
                  <text x="380" y="510" textAnchor="middle" fill="#10b981" fontFamily="Manrope, sans-serif" fontSize="20" fontWeight="800">
                    &lt;/&gt;
                  </text>
                  <text x="380" y="533" textAnchor="middle" fill="#051c52" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="800">
                    Conversion UX
                  </text>
                  <text x="380" y="549" textAnchor="middle" fill="#526382" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="600">
                    CRO & Fast Funnels
                  </text>
                </g>

                {/* ===== NODE 4: LEFT (SOCIAL & RETENTION LOOPS) ===== */}
                <g
                  filter="url(#diagramShadow)"
                  className="interactive-node node-social"
                  onClick={() => handleDiagramNodeClick("social")}
                  style={{ cursor: "pointer" }}
                >
                  <circle cx="165" cy="310" r="58" fill="url(#nodeSocialGrad)" stroke="#051c52" strokeWidth="2.5" />
                  <circle cx="165" cy="310" r="50" fill="none" stroke="rgba(5, 28, 82, 0.3)" strokeWidth="1" />
                  <text x="165" y="295" textAnchor="middle" fill="#051c52" fontFamily="Manrope, sans-serif" fontSize="22" fontWeight="800">
                    ◎
                  </text>
                  <text x="165" y="318" textAnchor="middle" fill="#051c52" fontFamily="Manrope, sans-serif" fontSize="14" fontWeight="800">
                    Social & LTV
                  </text>
                  <text x="165" y="334" textAnchor="middle" fill="#526382" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="600">
                    Viral Content & Retention
                  </text>
                </g>
              </svg>
            </div>

            {/* 4 Interactive Feature Pillars Under Diagram */}
            <div className="flywheel-legend-grid">
              <div
                className={`legend-pillar-card ${activeFilter === "seo" ? "pillar-active" : ""}`}
                onClick={() => handleDiagramNodeClick("seo")}
              >
                <div className="pillar-header">
                  <span className="pillar-icon icon-yellow">⌕</span>
                  <strong>1. Search Intent</strong>
                </div>
                <p>Captures active buyers who are searching Google with commercial purchase intent.</p>
                <span className="pillar-click-hint">Filter SEO Playbooks →</span>
              </div>

              <div
                className={`legend-pillar-card ${activeFilter === "performance" ? "pillar-active" : ""}`}
                onClick={() => handleDiagramNodeClick("performance")}
              >
                <div className="pillar-header">
                  <span className="pillar-icon icon-red">⚡</span>
                  <strong>2. Paid ROAS</strong>
                </div>
                <p>Rapid creative sprints on Meta & Google PMax to scale customer acquisition predictably.</p>
                <span className="pillar-click-hint">Filter Paid Ads Playbooks →</span>
              </div>

              <div
                className={`legend-pillar-card ${activeFilter === "cro" ? "pillar-active" : ""}`}
                onClick={() => handleDiagramNodeClick("cro")}
              >
                <div className="pillar-header">
                  <span className="pillar-icon icon-green">&lt;/&gt;</span>
                  <strong>3. Conversion UX</strong>
                </div>
                <p>Sub-2s mobile loading speeds, 1-tap checkout, and frictionless lead conversion funnels.</p>
                <span className="pillar-click-hint">Filter CRO Playbooks →</span>
              </div>

              <div
                className={`legend-pillar-card ${activeFilter === "social" ? "pillar-active" : ""}`}
                onClick={() => handleDiagramNodeClick("social")}
              >
                <div className="pillar-header">
                  <span className="pillar-icon icon-navy">◎</span>
                  <strong>4. Social & LTV</strong>
                </div>
                <p>Viral short-form Reels and automated retention sequences to drive high repeat orders.</p>
                <span className="pillar-click-hint">Filter Social Playbooks →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLES FEED SECTION ===== */}
      <section id="articles-feed" className="blog-feed-section">
        <div className="blog-feed-container">
          {/* Header & Filter Dock */}
          <div className="feed-intro-block">
            <span className="work-eyebrow-tag">CURATED STRATEGIC PLAYBOOKS</span>
            <h2 className="feed-main-title">
              Explore Our <span>Marketing Field Manuals</span>
            </h2>
            <p className="feed-main-desc">
              Select a domain below to browse in-depth, step-by-step digital marketing breakdowns.
            </p>

            {/* Filter Capsule Dock */}
            <div className="feed-dock-wrapper">
              <div className="feed-dock-pill">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`feed-dock-btn ${activeFilter === cat.id ? "feed-dock-active" : ""}`}
                    onClick={() => setActiveFilter(cat.id)}
                  >
                    <span className="feed-dock-icon">{cat.icon}</span>
                    <span className="feed-dock-label">{cat.label}</span>
                    <span className="feed-dock-count">{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Counter Status */}
            <div className="feed-status-pill">
              <span className="status-live-dot" />
              <span>
                Showing <strong>{filteredArticles.length}</strong> of <strong>6</strong> tactical playbooks
              </span>
              {activeFilter !== "all" && (
                <button
                  type="button"
                  className="feed-reset-btn"
                  onClick={() => setActiveFilter("all")}
                >
                  (Reset Filter ✕)
                </button>
              )}
            </div>
          </div>

          {/* Clean 2-Column Spacious Articles Grid */}
          <div className="articles-cards-grid">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className={`article-card article-theme-${article.color}`}
              >
                <div className="article-card-top">
                  <span className="article-category-badge">{article.categoryLabel}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>

                <h3 className="article-card-title">{article.title}</h3>

                <p className="article-card-summary">{article.summary}</p>

                {/* Key Strategic Takeaways */}
                <div className="article-takeaways-box">
                  <span className="takeaways-title">Strategic Core Takeaways:</span>
                  <ul className="takeaways-list">
                    {article.takeaways.map((item, idx) => (
                      <li key={idx}>
                        <span className="takeaway-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="article-card-footer">
                  <button
                    type="button"
                    className="btn-read-article"
                    onClick={() => setActiveModal(article)}
                  >
                    Read Full Strategic Guide <span className="arrow-icon">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER / WEEKLY GROWTH DISPATCH SECTION ===== */}
      <section className="blog-newsletter-section">
        <div className="newsletter-card-wrap">
          <div className="newsletter-content">
            <span className="newsletter-badge">THE KLIQURA GROWTH DISPATCH</span>
            <h2>
              One Tactical Marketing Teardown. <span>Every Monday.</span>
            </h2>
            <p>
              Join 4,200+ founders and growth marketers. No spam, no generic fluff. Only battle-tested
              frameworks on scaling ROAS, capturing high-intent SEO search, and conversion UX.
            </p>

            {newsletterSubscribed ? (
              <div className="newsletter-success-box">
                <span className="success-icon">✓</span>
                <div>
                  <strong>You’re on the VIP Dispatch List!</strong>
                  <p>Check your inbox next Monday at 9:00 AM for your first tactical growth teardown.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your business email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-submit-btn">
                  Subscribe Free ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FINAL CONVERSION CTA SECTION ===== */}
      <section className="blog-cta-section">
        <div className="blog-cta-container">
          <span className="cta-mini-tag">APPLY THESE INSIGHTS TO YOUR BRAND</span>
          <h2>
            Ready for a Custom Growth Blueprint <span>Built for Your Numbers?</span>
          </h2>
          <p>
            Stop guessing with your ad budgets and organic strategy. Book a complimentary 30-minute growth teardown where our senior strategists analyze your funnel and pinpoint exact revenue leaks.
          </p>

          <div className="cta-actions">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="blog-btn-cta"
            >
              Claim Your Free Growth Audit <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE MODAL DETAIL READER ===== */}
      {activeModal && (
        <div
          className="article-modal-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="article-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="article-modal-close"
              onClick={() => setActiveModal(null)}
              aria-label="Close article modal"
            >
              ✕
            </button>

            <div className="modal-article-header">
              <span className="modal-cat-tag">{activeModal.categoryLabel}</span>
              <span className="modal-meta-sep">•</span>
              <span className="modal-read-tag">{activeModal.readTime}</span>
              <span className="modal-meta-sep">•</span>
              <span className="modal-date-tag">{activeModal.date}</span>
            </div>

            <h2 className="modal-article-title">{activeModal.title}</h2>

            <div className="modal-article-intro-box">
              <p>{activeModal.fullContent.intro}</p>
            </div>

            <div className="modal-article-body">
              {activeModal.fullContent.sections.map((sec, idx) => (
                <div className="modal-body-section" key={idx}>
                  <h3>{sec.heading}</h3>
                  <p>{sec.text}</p>
                </div>
              ))}

              <div className="modal-checklist-box">
                <h4>KLIQURA Execution Checklist:</h4>
                <ul>
                  {activeModal.fullContent.checklist.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-bullet">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-article-footer">
              <div className="footer-author-box">
                <strong>Published by KLIQURA Strategy Team</strong>
                <span>Udaipur • Digital Growth & Performance Marketing</span>
              </div>
              <Link
                to="/contact"
                onClick={() => {
                  setActiveModal(null);
                  handleLinkClick();
                }}
                className="modal-action-btn"
              >
                Implement This With KLIQURA ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}