import "./Blog.css";
import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      id: "01",
      category: "SEO",
      title: "Is SEO dead in the future?",
      text: "SEO is changing, not disappearing. Helpful content, user experience and real search intent matter more than ever.",
    },
    {
      id: "02",
      category: "PAID ADS",
      title: "Are paid ads still worth the investment?",
      text: "Yes—when campaigns have the right audience, offer, creative and optimisation behind them.",
    },
    {
      id: "03",
      category: "SOCIAL MEDIA",
      title: "Why does your brand need social media?",
      text: "People buy from brands they recognise, trust and remember. Social media builds that connection.",
    },
    {
      id: "04",
      category: "CONTENT",
      title: "Content is not just posting every day.",
      text: "Good content answers questions, solves problems and gives people a reason to trust your brand.",
    },
    {
      id: "05",
      category: "WEBSITE",
      title: "Your website gets visitors. But does it get leads?",
      text: "A strong website is clear, fast, trustworthy and built to guide visitors towards action.",
    },
    {
      id: "06",
      category: "GROWTH",
      title: "Growth marketing is more than getting new customers.",
      text: "It is about attracting the right people, building loyalty and helping your business grow sustainably.",
    },
  ];

  return (
    <main className="blog-page">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <p className="blog-label">KLIQURA / INSIGHTS</p>

          <h1>
            Ideas that help
            <span> brands grow.</span>
          </h1>

          <p>
            Clear thoughts on digital marketing, SEO, paid ads, content and
            everything that helps your business move forward online.
          </p>
        </div>

        {/* Blog / Article Visual */}
        <div className="blog-hero-visual" aria-hidden="true">
          <div className="blog-paper paper-back" />
          <div className="blog-paper paper-middle" />

          <div className="blog-paper paper-front">
            <span className="paper-tag">KLIQURA INSIGHTS</span>

            <div className="paper-title-line line-long" />
            <div className="paper-title-line line-medium" />

            <div className="paper-text-line" />
            <div className="paper-text-line" />
            <div className="paper-text-line line-short" />

            <div className="paper-bottom">
              <span>READ • LEARN • GROW</span>
              <b>↗</b>
            </div>
          </div>

          <span className="blog-plus plus-one">+</span>
          <span className="blog-plus plus-two">+</span>
          <span className="blog-dot dot-one" />
          <span className="blog-dot dot-two" />
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="blog-list-section">
        <div className="blog-list-heading">
          <p className="blog-label">LATEST INSIGHTS</p>

          <h2>
            Learn. Think.
            <span> Grow.</span>
          </h2>
        </div>

        <div className="blog-list">
          {blogs.map((blog) => (
            <article className="blog-item" key={blog.id}>
              <div className="blog-item-number">{blog.id}</div>

              <div className="blog-item-main">
                <p className="blog-category">{blog.category}</p>
                <h3>{blog.title}</h3>
              </div>

              <div className="blog-item-info">
                <p>{blog.text}</p>

                <Link to="/contact">
                  Read Insight <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-final-section">
        <p className="blog-label">LET&apos;S GROW TOGETHER</p>

        <h2>
          Need a strategy that
          <span> makes sense?</span>
        </h2>

        <p>
          Let&apos;s talk about your business goals and create the right
          digital marketing plan.
        </p>

        <Link to="/contact" className="blog-primary-button">
          Get Your Free Audit <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Blog;