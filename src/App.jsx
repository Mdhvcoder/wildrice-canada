import React, { useState, useEffect } from 'react';
import './index.css';

/* ── NEW LOGO — matches the provided logo image exactly ── */
function WildRiceLogoSVG() {
  return (
    <svg
      viewBox="0 0 520 260"
      xmlns="http://www.w3.org/2000/svg"
      className="animated-logo-svg"
      role="img"
      aria-label="Wild Rice Canada logo"
    >
      {/* WILD RICE CANADA — large red serif */}
      <text
        x="260" y="52"
        textAnchor="middle"
        className="logo-title-top logo-fade"
        style={{ fontSize: 52, fontFamily: "'Playfair Display', serif", fill: '#a32020', fontWeight: 700 }}
      >
        Wild Rice Canada
      </text>

      {/* Gold lines + ornament */}
      <line x1="260" y1="66" x2="30"  y2="66" stroke="#c0a062" strokeWidth="1.5" className="logo-line-left" />
      <line x1="260" y1="66" x2="490" y2="66" stroke="#c0a062" strokeWidth="1.5" className="logo-line-right" />
      {/* Wheat/leaf ornament — small decorative diamond sprig */}
      <text
        x="260" y="72"
        textAnchor="middle"
        className="logo-fade logo-delay-1"
        style={{ fontSize: 14, fill: '#c0a062', fontFamily: 'serif' }}
      >
        ❧
      </text>

      {/* PREMIUM ORGANIC CANADIAN WILD RICE — dark green */}
      <text
        x="260" y="96"
        textAnchor="middle"
        className="logo-fade logo-delay-1"
        style={{ fontSize: 15, fontFamily: "'Roboto', Arial, sans-serif", fill: '#0a5538', fontWeight: 700, letterSpacing: 1.2 }}
      >
        PREMIUM ORGANIC CANADIAN WILD RICE
      </text>

      {/* A division of Double Diamond Farm Ltd. — italic */}
      <text
        x="260" y="117"
        textAnchor="middle"
        className="logo-fade logo-delay-1"
        style={{ fontSize: 13.5, fontFamily: "'Playfair Display', 'Times New Roman', serif", fill: '#222', fontStyle: 'italic' }}
      >
        A division of Double Diamond Farm Ltd.
      </text>

      {/* Double Diamond shapes — symmetric, well-proportioned diamonds */}
      <polygon
        points="46,170 153,138 260,170 153,202"
        className="logo-diamond logo-draw logo-delay-1"
        style={{ fill: 'none', stroke: '#111', strokeWidth: 2.2, strokeLinejoin: 'miter' }}
      />
      {/* Double Diamond shapes — right diamond */}
      <polygon
        points="260,170 367,138 474,170 367,202"
        className="logo-diamond logo-draw logo-delay-1"
        style={{ fill: 'none', stroke: '#111', strokeWidth: 2.2, strokeLinejoin: 'miter' }}
      />

      {/* DOUBLE text inside left diamond */}
      <text
        x="153" y="176"
        textAnchor="middle"
        className="logo-fade logo-delay-2"
        style={{ fontSize: 17, fontFamily: "'Roboto', Arial, sans-serif", fill: '#111', fontWeight: 700, letterSpacing: 1.5 }}
      >
        DOUBLE
      </text>

      {/* DIAMOND text inside right diamond */}
      <text
        x="367" y="176"
        textAnchor="middle"
        className="logo-fade logo-delay-2"
        style={{ fontSize: 17, fontFamily: "'Roboto', Arial, sans-serif", fill: '#111', fontWeight: 700, letterSpacing: 1.5 }}
      >
        DIAMOND
      </text>

      {/* SASKATOON, CANADA */}
      <text
        x="260" y="232"
        textAnchor="middle"
        className="logo-fade logo-delay-2"
        style={{ fontSize: 13, fontFamily: "'Roboto', Arial, sans-serif", fill: '#0a5538', fontWeight: 700, letterSpacing: 5 }}
      >
        SASKATOON, CANADA
      </text>
    </svg>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [exportSubmitted, setExportSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-us', 'our-wild-rice', 'products', 'export', 'contact'];
      let current = 'home';
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    e.target.reset();
  };

  const handleExportSubmit = (e) => {
    e.preventDefault();
    setExportSubmitted(true);
    setTimeout(() => setExportSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <>
      {/* ── HEADER ── */}
      <header className="header">
        <div className="header-logo">
          <a href="#home" aria-label="Wild Rice Canada — Home">
            <div className="animated-logo-container">
              <WildRiceLogoSVG />
            </div>
          </a>
        </div>
        <div className="nav-container">
          <nav className="header-nav" aria-label="Main navigation">
            <a href="#home"          className={activeSection === 'home'          ? 'active' : ''}>Home</a>
            <a href="#about-us"      className={activeSection === 'about-us'      ? 'active' : ''}>About Us</a>
            <a href="#our-wild-rice" className={activeSection === 'our-wild-rice' ? 'active' : ''}>Our Wild Rice</a>
            <a href="#products"      className={activeSection === 'products'      ? 'active' : ''}>Products</a>
            <a href="#export"        className={activeSection === 'export'        ? 'active' : ''}>Export</a>
            <a href="#contact"       className={activeSection === 'contact'       ? 'active' : ''}>Contact</a>
          </nav>
        </div>
      </header>

      {/* ── HOME ── */}
      <section id="home" className="main-container">
        <div className="section-label">HOME</div>
        <div className="grid-2">
          <div>
            <img
              alt="Beauval Wild Rice Processing Plant — Wild Rice Canada"
              src="/images/first.png"
            />
            <div className="text-section">
              <h2 className="red-text">IN-HOUSE PROCESSING</h2>
              <p>
                Our wild rice is processed and packaged in-house by Wild Rice Canada for retail, wholesale, food-service and export customers.<br /><br />
                <strong className="red-text">Naturally grown in northern waters - not cultivated in rice paddies.</strong>
              </p>
            </div>
          </div>
          <div>
            <img
              alt="Wild Rice Canada delivery truck with Double Diamond logo"
              src="/images/second.png"
            />
            <div className="text-section">
              <h2 className="red-text">WILD RICE CANADA</h2>
              <p>
                Wild Rice Canada supplies premium organic Canadian wild rice naturally grown in the lakes and waterways of northern Saskatchewan.
              </p>
              <br />
              <a href="#products"><button className="buy-button">Shop Wild Rice</button></a>
            </div>
          </div>
        </div>
        <div className="divider">
          <span>100% CANADIAN</span>
          <span>IN-HOUSE PROCESSING</span>
          <span>RETAIL &amp; WHOLESALE</span>
          <span>EXPORT READY</span>
        </div>
      </section>

      {/* ── ABOUT US ── */}
      <section id="about-us" className="main-container">
        <div className="section-label">ABOUT US</div>
        <div className="grid-2">
          <div>
            <img
              alt="Wild rice processing plant equipment — Double Diamond Farm Ltd."
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Funcroppedhighresreplacement.jpg&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">DOUBLE DIAMOND FARM LTD.</h2>
              <p>
                Double Diamond Farm Ltd. has been involved with Canadian wild rice for many years. Today, through Wild Rice Canada, we are building on that experience with a modern in-house processing and packaging operation, bringing us closer to the product from the natural waters of northern Saskatchewan to the finished package.
              </p>
            </div>
          </div>
          <div>
            <img
              alt="Wild Rice Canada — in-house quality inspection and packaging"
              src="/images/about_girl_process.jpg"
            />
            <div className="text-section">
              <h2 className="red-text">PROUD TO SUPPLY</h2>
              <p>
                Our wild rice is cleaned, processed, graded and packaged in-house by Wild Rice Canada. Staying close to the product helps us maintain our own quality standards and put the Wild Rice Canada name on a finished product we are proud to supply.
              </p>
            </div>
          </div>
        </div>
        <div className="divider">
          <span>IN-HOUSE PROCESSING & PACKAGING</span>
          <span>QUALITY CONTROL</span>
          <span>CUSTOMER DIRECT</span>
        </div>
      </section>

      {/* ── OUR WILD RICE ── */}
      <section id="our-wild-rice" className="main-container">
        <div className="section-label">OUR WILD RICE</div>
        <div className="grid-2">
          <div>
            <img
              alt="Wild rice growing naturally in the lakes of northern Saskatchewan"
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Fwildrice_nature.png&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">GROWN BY NATURE</h2>
              <p>
                Premium organic Canadian wild rice is different. It is never blended with paddy rice.<br /><br />
                Our wild rice grows naturally in the lakes, rivers and waterways of northern Saskatchewan. It is not cultivated in rice paddies and is not a conventional field crop.
              </p>
            </div>
          </div>
          <div>
            <img
              alt="Premium organic Canadian wild rice grain — long dark grain close-up"
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Fwildrice_grain.png&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">CAREFULLY CURED</h2>
              <p>
                After harvest, it is carefully cured and processed in-house to preserve the long, dark grain, distinctive flavour and natural character of genuine Canadian wild rice.<br /><br />
                <strong className="red-text">Grown by nature. Not cultivated in paddies.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="divider">
          <span>NATURALLY GROWN</span>
          <span>100% ORGANIC</span>
          <span>PURE CANADIAN</span>
          <span>NEVER BLENDED</span>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="main-container">
        <div className="section-label">PRODUCTS</div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-img-wrapper">
              <img
                alt="Wild Rice Canada retail packaging — 454g (1 lb) premium organic Canadian wild rice pouch"
                src="/images/maple_leaf_og.jpeg"
              />
            </div>
            <div className="text-section">
              <h2 className="red-text">RETAIL PACKAGING</h2>
              <p>
                <strong>454 g (1 lb) POUCH</strong> — Convenient resealable stand-up pouches for home use and retail grocery shelves.
              </p>
              <div className="buy-button-wrap">
                <button className="buy-button" onClick={() => setIsModalOpen(true)}>Call for Pricing</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <img
                alt="Nutrition Facts & Cooking Instructions for Canadian Wild Rice"
                src="/images/nutrition_facts.jpg"
              />
            </div>
            <div className="text-section">
              <h2 className="red-text">NUTRITION &amp; COOKING</h2>
              <p>
                <strong>100% ORGANIC CANADIAN WILD RICE</strong> — High in protein, iron, and magnesium. Easy stove top &amp; rice cooker cooking instructions included on every pack.
              </p>
            </div>
          </div>

          <div className="product-card">
            <div className="product-img-wrapper">
              <img
                alt="Wild Rice Canada bulk supply — 25 KG sacks and commercial packaging"
                src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Fproducts_bulk.png&w=1920&q=75"
              />
            </div>
            <div className="text-section">
              <h2 className="red-text">WHOLESALE &amp; BULK SUPPLY</h2>
              <p>
                <strong>25 KG SACKS</strong> — Heavy-duty sacks for food-service, wholesale, mini-bulk and commercial export requirements.
              </p>
              <div className="buy-button-wrap">
                <button className="buy-button" onClick={() => setIsModalOpen(true)}>Call for Pricing</button>
              </div>
            </div>
          </div>
        </div>
        <div className="divider">
          <span>PRODUCT OF CANADA</span>
          <span>PREMIUM ORGANIC CANADIAN WILD RICE</span>
          <span>PROCESSED IN-HOUSE BY WILD RICE CANADA</span>
        </div>
      </section>

      {/* ── EXPORT ── */}
      <section id="export" className="main-container">
        <div className="section-label">EXPORT</div>
        <div className="grid-2">
          <div>
            <img
              alt="Wild Rice Canada export — container shipment"
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Fexport_left.jpg&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">CANADIAN WILD RICE — EXPORT READY</h2>
              <p>
                Wild Rice Canada supplies premium organic Canadian wild rice to international buyers.<br /><br />
                Commercial quantities, palletized orders, bulk packaging and container shipments
                can be arranged according to customer requirements.
              </p>
            </div>
          </div>
          <div>
            <img
              alt="Wild Rice Canada cleaning and processing plant — in-house processing"
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Funcroppedreplacement.jpg&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">WORLDWIDE SUPPLY</h2>
              <p>
                For export inquiries, please provide the destination, preferred package size and
                approximate quantity so we can discuss availability, shipping requirements and pricing.
              </p>
              {exportSubmitted ? (
                <div className="form-success">✓ Thank you. We will be in touch shortly.</div>
              ) : (
                <form className="inquiry-form" onSubmit={handleExportSubmit} aria-label="Export inquiry form">
                  <input type="text"  name="name"        placeholder="Name / Company"            required />
                  <input type="email" name="email"       placeholder="Email Address"              required />
                  <input type="text"  name="destination" placeholder="Destination Country / Port" required />
                  <div className="form-row">
                    <select name="packageSize" aria-label="Package size">
                      <option value="">Package Size</option>
                      <option>25 KG Sacks</option>
                      <option>Mini-Bulk / Commercial</option>
                      <option>Container Shipment</option>
                      <option>Other / To Be Discussed</option>
                    </select>
                    <input type="text" name="quantity" placeholder="Approx. Quantity" required />
                  </div>
                  <textarea name="details" rows="3" placeholder="Additional details (optional)"></textarea>
                  <button type="submit" className="buy-button">Submit Export Inquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="divider">
          <span>CANADIAN PRODUCT</span>
          <span>ORGANIC WILD RICE</span>
          <span>PROCESSED IN-HOUSE</span>
          <span>WORLDWIDE SUPPLY</span>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="main-container">
        <div className="section-label">CONTACT</div>
        <div className="grid-2">
          <div>
            <img
              alt="Wild Rice Canada — community event and trade show"
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Fsplitphotohighresreplacement.jpg&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">LET&apos;S TALK WILD RICE</h2>
              <p>
                Questions about our wild rice, packaging, availability or ordering?
                Please contact Wild Rice Canada.
              </p>
              <div className="contact-details">
                <p><strong>Phone:</strong> <a href="tel:3066492550">306-649-2550</a></p>
                <p><strong>Email:</strong> <a href="mailto:wildricecanada@gmail.com">wildricecanada@gmail.com</a></p>
                <p><strong>Website:</strong> wildricecanada.ca</p>
                <p><strong>Locations:</strong> Beauval and Saskatoon, Saskatchewan, Canada</p>
              </div>
            </div>
          </div>
          <div>
            <img
              alt="Wild Rice Canada — people at a trade show booth"
              src="https://worldricecanada.vercel.app/_next/image?url=%2Fimages%2Fcontact_last.jpeg&w=1920&q=75"
            />
            <div className="text-section">
              <h2 className="red-text">SEND US A MESSAGE</h2>
              {formSubmitted ? (
                <div className="form-success">✓ Thank you for your message. We will be in touch shortly.</div>
              ) : (
                <form className="inquiry-form" onSubmit={handleContactSubmit} aria-label="Contact form">
                  <input type="text"  name="name"    placeholder="Your Name"     required />
                  <input type="email" name="email"   placeholder="Email Address" required />
                  <select name="inquiryType" aria-label="Inquiry type">
                    <option value="">Inquiry Type</option>
                    <option>General Inquiry</option>
                    <option>Product Inquiry</option>
                    <option>Wholesale Inquiry</option>
                    <option>Export Inquiry</option>
                  </select>
                  <textarea name="message" rows="4" placeholder="Your message..." required></textarea>
                  <button type="submit" className="buy-button">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>

      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-section">
          <h4>Phone</h4>
          <p><a href="tel:3066492550" style={{ color: 'inherit' }}>306-649-2550</a></p>
        </div>
        <div className="footer-section">
          <h4>Website</h4>
          <p>wildricecanada.ca</p>
        </div>
        <div className="footer-section">
          <h4>Email</h4>
          <p><a href="mailto:wildricecanada@gmail.com" style={{ color: 'inherit' }}>wildricecanada@gmail.com</a></p>
        </div>
        <div className="footer-section">
          <h4>Locations</h4>
          <p>Beauval and Saskatoon</p>
          <p>Saskatchewan, Canada</p>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>×</button>
            <h2 className="red-text" style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '15px' }}>
              CONTACT US TO PURCHASE
            </h2>
            <p>
              If you're interested in buying this item, Please<br />
              Contact us on <strong>306-649-2550</strong> or email us at<br />
              <a href="mailto:wildricecanada@gmail.com" style={{ textDecoration: 'underline', color: 'var(--color-red)' }}>wildricecanada@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
