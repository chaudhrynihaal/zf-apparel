export const legacyMarkup = String.raw`
<!-- NAVIGATION -->
  <nav id="mainNav" class="light">
    <div class="nav-logo" onclick="showPage('aboutus')">ZF APPAREL</div>
    <div class="nav-links">
      <a onclick="showPage('aboutus')" id="nav-aboutus" class="active-link">About Us</a>
      <a onclick="showPage('collections')" id="nav-collections">Quality & Compliance</a>
      <a onclick="showPage('craftsmanship')" id="nav-craftsmanship">Inside ZF Apparel</a>
      <a onclick="showPage('about')" id="nav-about">Manufacturing Capabilities</a>
      <a onclick="showPage('contact')" id="nav-contact">Contact</a>
      <a onclick="showPage('prototype')" class="mobile-only-link">Send Inquiry</a>
    </div>
    <div class="nav-actions">
      <button id="mobileNavToggle" class="mobile-nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <button class="partner-btn floating-inquiry-btn" type="button" onclick="showPage('prototype')">Send Inquiry</button>

  <!-- ==================== PAGE 0: ABOUT US ==================== -->
  <div id="aboutus" class="page active">
    <section class="aboutus-showcase">
      <div class="aboutus-showcase-copy">
        <div class="aboutus-showcase-kicker">About ZF Apparel</div>
        <h1 class="aboutus-showcase-title">Reliable Manufacturing for Global Apparel Brands.</h1>
        <p class="aboutus-showcase-text">As a reliable and farsighted garments manufacturing and export company, ZF Apparel delivers high quality knitwear and woven garments for international brands with precision, consistency, and long-term partnership thinking.</p>
        <div class="aboutus-showcase-actions">
          <button class="aboutus-showcase-btn aboutus-showcase-btn-primary" type="button" onclick="showPage('collections')">Quality & Compliance</button>
          <button class="aboutus-showcase-btn aboutus-showcase-btn-secondary" type="button" onclick="showPage('about')">Our Services</button>
        </div>
      </div>
    </section>

    <section class="aboutus-pillars-strip">
      <article class="aboutus-pillars-item">
        <div class="aboutus-pillars-label">01</div>
        <h2>Uncompromising Quality</h2>
        <p>Disciplined checks and finishing standards are built into every production stage.</p>
      </article>
      <article class="aboutus-pillars-item">
        <div class="aboutus-pillars-label">02</div>
        <h2>Competitive Pricing</h2>
        <p>Efficient operations help us support global brands with dependable value.</p>
      </article>
      <article class="aboutus-pillars-item">
        <div class="aboutus-pillars-label">03</div>
        <h2>Professional Service</h2>
        <p>Communication stays clear and aligned from sampling through shipment.</p>
      </article>
      <article class="aboutus-pillars-item">
        <div class="aboutus-pillars-label">04</div>
        <h2>Customer Longevity</h2>
        <p>Every order is approached as the start of a durable, trusted relationship.</p>
      </article>
    </section>

    <section class="aboutus-editorial">
      <div class="aboutus-editorial-media">
        <img src="/assets/products/precision-polo.jpg" alt="ZF Apparel precision polo sample"/>
      </div>
      <div class="aboutus-editorial-copy">
        <div class="aboutus-editorial-kicker">Why ZF Apparel</div>
        <h2>The invisible backbone of fashion.</h2>
        <p>Behind every finished garment is a disciplined manufacturing system built on quality assurance, textile expertise, and dependable execution.</p>
        <div class="aboutus-editorial-facts">
          <div>
            <span>100% Export Oriented</span>
            <strong>International standards in quality, sustainability, and service.</strong>
          </div>
          <div>
            <span>50,000 Pieces Monthly</span>
            <strong>Scalable production with controlled workflow and timely fulfillment.</strong>
          </div>
          <div>
            <span>Cut To Pack</span>
            <strong>Integrated in-house production from cutting to final packaging.</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="aboutus-cap-grid-wrap">
      <div class="aboutus-cap-head">
        <div class="aboutus-cap-kicker">Product Range</div>
        <h2>Apparel capabilities across premium categories.</h2>
      </div>
      <div class="aboutus-cap-grid">
        <article class="aboutus-cap-card">
          <div class="aboutus-cap-meta">Category 01</div>
          <h3>Tailored Outerwear</h3>
          <p>Structured hoodies, fleece layers, jackets, and elevated essentials made for modern labels.</p>
          <div class="aboutus-cap-tags"><span>Fleece</span><span>Hoodies</span><span>Outerwear</span></div>
        </article>
        <article class="aboutus-cap-card">
          <div class="aboutus-cap-meta">Category 02</div>
          <h3>Luxury Knitwear</h3>
          <p>T-shirts, polos, sweatshirts, and knitted basics produced with refined finishing standards.</p>
          <div class="aboutus-cap-tags"><span>T-Shirts</span><span>Polos</span><span>Sweatshirts</span></div>
        </article>
        <article class="aboutus-cap-card">
          <div class="aboutus-cap-meta">Category 03</div>
          <h3>Technical Workwear</h3>
          <p>Uniforms, children’s wear, and functional garments supported by custom printing and embroidery.</p>
          <div class="aboutus-cap-tags"><span>Workwear</span><span>Uniforms</span><span>Custom Finishes</span></div>
        </article>
      </div>
    </section>

    <section class="aboutus-quality-quote">
      <div class="aboutus-quality-overlay">
        <p>Quality is embedded at every stage of the manufacturing process.</p>
      </div>
    </section>

    <section class="aboutus-cta-panel">
      <div class="aboutus-cta-line"></div>
      <div class="aboutus-cta-kicker">Let's Work Together</div>
      <h2>Initiate your manufacturing cycle.</h2>
      <p>From concept to final shipment, every stage is executed with precision for brands that expect dependable results.</p>
      <button class="aboutus-cta-button" type="button" onclick="showPage('collections')">Explore Quality & Compliance</button>
      <div class="aboutus-cta-line"></div>
    </section>

    <footer class="light">
      <div class="footer-logo">ZF Apparel</div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Sustainability Report</a>
        <a>Global Logistics</a>
      </div>
      <div class="footer-copy">© 2024 ZF Apparel Manufacturing. All rights reserved.</div>
    </footer>
  </div>

  <!-- ==================== PAGE 1: COLLECTIONS ==================== -->
  <div id="collections" class="page">

    <section class="certification-ribbon" aria-label="Certifications and compliance">
      <div class="certification-ribbon-head">
        <div class="certification-ribbon-kicker">Verified Standards</div>
        <h2 class="certification-ribbon-title">Certifications</h2>
      </div>
      <div class="certification-ribbon-grid">
        <div class="certification-card">
          <img src="/assets/certifications/sedex.png" alt="Sedex certification logo" class="certification-logo certification-logo-sedex"/>
        </div>
        <div class="certification-card">
          <img src="/assets/certifications/is0.png" alt="ISO 9001 certification logo" class="certification-logo certification-logo-iso"/>
        </div>
        <div class="certification-card">
          <img src="/assets/certifications/bci.png" alt="Better Cotton Initiative certification logo" class="certification-logo certification-logo-bci"/>
        </div>
      </div>
    </section>

    <!-- HERO -->
    <section class="hero-collections">
      <div>
        <div class="hero-season fade-up">Exporter & Manufacturer</div>
        <h1 class="hero-headline fade-up-d1"><em>Knitted & Woven Garments.</em></h1>
      </div>
      <div class="hero-desc fade-up-d2">ZF Apparel delivers high quality knitwear and apparel solutions worldwide with
        consistency, efficiency, and timely fulfillment.</div>
    </section>

    <!-- PRODUCT FEATURE: image left, editorial text right -->
    <section class="category-feature">
      <div class="cat-image">
        <!-- Drop your product photo here. Until then, placeholder shows. -->
        <img src="/assets/collection-hero.jpg" alt="Heavy Gauge Knit" class="cat-img"/>
      </div>
      <div class="cat-info">
        <div class="cat-label">Product Focus / Knitwear</div>
        <h2 class="cat-title">T-Shirts, Polos,<br>Hoodies & More</h2>
        <p class="cat-subtitle">From custom designs to bulk production, we provide end-to-end apparel manufacturing tailored to your requirements.</p>
        <div class="view-btn" onclick="showPage('about'); setTimeout(function(){ var section = document.getElementById('capPortfolio'); if (section) section.scrollIntoView({ behavior: 'smooth' }); }, 120);">View Collection</div>
      </div>
    </section>

    <section class="brand-ribbon" aria-label="Our clients">
      <div class="brand-ribbon-head">
        <div class="brand-ribbon-kicker">Trusted Labels</div>
        <h2 class="brand-ribbon-title">Our Clients</h2>
      </div>
      <div class="brand-ribbon-marquee">
        <div class="brand-ribbon-track">
          <div class="brand-chip"><img src="/assets/brands/raay-atelier.png" alt="RAAY Atelier logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/layla-boutique.png" alt="Layla Boutique logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/fiza-apparel-pakistan.png" alt="FIZA Apparel Pakistan logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/armaan-finest-clothing.png" alt="ARMAAN Finest Clothing logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/zariya-couture.png" alt="ZARIYA Couture logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/sariyah-luxury-textiles.png" alt="Sariyah Luxury Textiles logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/noor-noor-and-co-fashion-house.png" alt="NOOR Noor and Co. Fashion House logo"/></div>
          <div class="brand-chip"><img src="/assets/brands/khayal-apparel.png" alt="KHAYAL Apparel logo"/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/raay-atelier.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/layla-boutique.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/fiza-apparel-pakistan.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/armaan-finest-clothing.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/zariya-couture.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/sariyah-luxury-textiles.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/noor-noor-and-co-fashion-house.png" alt=""/></div>
          <div class="brand-chip" aria-hidden="true"><img src="/assets/brands/khayal-apparel.png" alt=""/></div>
        </div>
      </div>
    </section>

    <!-- MANUFACTURING STRIP -->
    <div class="manufacturing-strip">
      <div class="mfg-label">Production Capability</div>
      <div>
        <div class="lead-time-tag">Monthly Capacity</div>
        <div class="lead-number">50,000</div>
      </div>
    </div>

    <!-- BLAZER FULL-WIDTH BANNER — handles real images cleanly -->
<section class="blazer-banner">
  <img src="/assets/banner-feature.jpeg" alt="Featured Piece" class="blazer-banner-img"/>
  <div class="blazer-text-wrap">
    <button
      class="blazer-link"
      type="button"
      onclick="showPage('about'); setTimeout(function(){ var section = document.getElementById('capPortfolio'); if (section) section.scrollIntoView({ behavior: 'smooth' }); }, 120);"
    >
      See Full Product Range
    </button>
  </div>
</section>

    <!-- CTA STRIP -->
    <div class="cta-collections">
      <div>
        <h2 class="cta-headline">Your Vision,<br>Our Manufacturing</h2>
      </div>
      <div>
        <p class="cta-desc">We build long-term partnerships rooted in quality, consistency, trust, and competitive pricing.</p>
        <div class="email-input-wrap">
          <input id="ctaEmail" type="email" placeholder="Enter Work Email">
          <button id="ctaEmailSubmit" class="email-arrow" type="button" aria-label="Submit work email">→</button>
        </div>
        <div id="ctaEmailStatus" class="form-status cta-status" aria-live="polite"></div>
      </div>
    </div>

    <footer class="light">
      <div class="footer-logo">ZF Apparel</div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Sustainability Report</a>
        <a>Global Logistics</a>
      </div>
      <div class="footer-copy">© 2024 ZF Apparel Manufacturing. All rights reserved.</div>
    </footer>
  </div>

  <!-- ==================== PAGE 2: CRAFTSMANSHIP ==================== -->
  <div id="craftsmanship" class="page">
    <section class="mf-process">
      <div class="mf-process-head reveal-on-scroll">
        <div class="mf-process-kicker">Production Journey</div>
        <h2 class="mf-process-title">Our Manufacturing Process</h2>
        <p class="mf-process-subtitle">From fabric sourcing to final shipment, every step is managed with precision and quality control.</p>
      </div>
      <div class="mf-process-grid">
        <article class="mf-process-card reveal-on-scroll" style="--delay: 40ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 01</span><span class="mf-icon-chip" aria-hidden="true">✦</span></div>
            <h3 class="mf-card-title">Fabric Sourcing</h3>
            <p class="mf-card-desc">Premium fabrics and raw materials are sourced against client specifications, quality standards, and production targets before cutting begins.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 80ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 02</span><span class="mf-icon-chip" aria-hidden="true">✂</span></div>
            <h3 class="mf-card-title">Fabric Laying & Cutting</h3>
            <p class="mf-card-desc">Inspected fabric is spread in controlled layers and cut into panels with precision planning for accuracy, yield, and repeatability.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 120ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 03</span><span class="mf-icon-chip" aria-hidden="true">◎</span></div>
            <h3 class="mf-card-title">Cut Part Inspection (CPI)</h3>
            <p class="mf-card-desc">Every panel is checked for defects, measurement accuracy, shade consistency, and cutting faults before release to production.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 160ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 04</span><span class="mf-icon-chip" aria-hidden="true">▦</span></div>
            <h3 class="mf-card-title">Bundling & Induction</h3>
            <p class="mf-card-desc">Approved cut parts are bundled by size and style, then inducted into workflow racks for organized production control.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 200ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 05</span><span class="mf-icon-chip" aria-hidden="true">∿</span></div>
            <h3 class="mf-card-title">Stitching / Sewing</h3>
            <p class="mf-card-desc">Skilled operators assemble garment components through sequenced operations that ensure construction strength and consistency.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 240ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 06</span><span class="mf-icon-chip" aria-hidden="true">✓</span></div>
            <h3 class="mf-card-title">End-Line Quality Inspection</h3>
            <p class="mf-card-desc">The QA team verifies stitching, measurements, appearance, and construction before any piece moves toward finishing approval.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 280ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 07</span><span class="mf-icon-chip" aria-hidden="true">◇</span></div>
            <h3 class="mf-card-title">Finishing Department</h3>
            <p class="mf-card-desc">Garments are thread-trimmed, cleaned, checked, and labeled to align with buyer instructions and visual presentation standards.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 320ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 08</span><span class="mf-icon-chip" aria-hidden="true">≈</span></div>
            <h3 class="mf-card-title">Steam Pressing</h3>
            <p class="mf-card-desc">Each garment is steam pressed for a polished, premium silhouette that is ready for folding, packing, and dispatch.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 360ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 09</span><span class="mf-icon-chip" aria-hidden="true">▣</span></div>
            <h3 class="mf-card-title">Packing Process</h3>
            <p class="mf-card-desc">Garments are folded, tagged, poly-bagged, and labeled with size and barcode details exactly as required by the client.</p>
          </div>
        </article>
        <article class="mf-process-card reveal-on-scroll" style="--delay: 400ms;">
          <div class="mf-card-copy">
            <div class="mf-process-meta"><span class="mf-step-badge">Step 10</span><span class="mf-icon-chip" aria-hidden="true">↗</span></div>
            <h3 class="mf-card-title">Carton Packing & Shipment</h3>
            <p class="mf-card-desc">Packed units are loaded into export cartons and prepared for secure container shipment with full documentation and final QA clearance.</p>
          </div>
        </article>
      </div>
    </section>
    <section class="factory-tour" id="factoryTour">
      <div class="tour-head">
        <div class="tour-kicker">Guided Experience</div>
        <h2 class="tour-title">Factory Digital Twin Tour</h2>
        <p class="tour-sub">A live journey simulation: one production batch moves through real factory checkpoints so your team can see exactly how compliance and execution work together.</p>
      </div>
      <div class="tour-stage"><strong id="tourStepLabel">Stop 1:</strong><span id="tourStepText">Gas suppression cylinders and a wall extinguisher are positioned for immediate emergency response.</span></div>
      <div class="tour-intel">
        <div class="intel-grid">
          <div class="intel-card"><div class="intel-label">Current Department</div><div class="intel-value" id="tourDept">Fire Protection Systems</div></div>
          <div class="intel-card"><div class="intel-label">Control Point</div><div class="intel-value" id="tourControl">Suppression Equipment Check</div></div>
          <div class="intel-card"><div class="intel-label">Batch Status</div><div class="intel-value" id="tourStatus">Operational</div></div>
        </div>
        <div class="journey-map">
          <div class="journey-line">
            <div class="journey-progress" id="journeyProgress"></div>
            <div class="journey-token" id="journeyToken"></div>
          </div>
          <div class="journey-stops" id="journeyStops"></div>
        </div>
      </div>
      <div class="tour-media">
        <img id="tourImage" src="/assets/tour/stop-1.jpeg" alt="Factory tour view">
      </div>
      <div class="tour-controls">
        <div class="tour-buttons">
          <button class="tour-btn" id="tourPrev" type="button">Previous</button>
          <button class="tour-btn" id="tourNext" type="button">Next</button>
        </div>
        <div class="tour-dots" id="tourDots"></div>
      </div>
    </section>

    <footer class="light">
      <div class="footer-logo">ZF Apparel</div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Sustainability Report</a>
        <a>Global Logistics</a>
      </div>
      <div class="footer-copy">© 2024 ZF Apparel Manufacturing. All rights reserved.</div>
    </footer>
  </div>

  <!-- ==================== PAGE 3: ABOUT/SOURCING ==================== -->
  <div id="about" class="page">
    <section class="cap-hero">
      <img src="/assets/prototype.png" alt="Manufacturing background" class="cap-hero-bg"/>
      <div class="cap-hero-content">
        <div class="cap-kicker">Global Production Standard</div>
        <h1 class="cap-title">Manufacturing<br>Mastery.</h1>
        <p class="cap-desc">Engineered precision for brands that need dependable production, scalable execution, and premium finishing across every order.</p>
        <div class="cap-actions">
          <button class="cap-btn cap-btn-primary" type="button" onclick="document.getElementById('capPortfolio').scrollIntoView({behavior:'smooth'})">View Our Products</button>
          <button class="cap-btn cap-btn-secondary" type="button" onclick="showPage('prototype')">Request a Quote</button>
        </div>
      </div>
    </section>

    <section class="cap-portfolio" id="capPortfolio">
      <div class="cap-portfolio-kicker">Our Production Portfolio</div>
      <h2 class="cap-portfolio-title">Manufacturing Capabilities Across Product Lines.</h2>
      <div class="cap-products-grid">
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/signature-polo.jpg" alt="Signature Polo"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/contemporary-graphic-tee.jpg" alt="Contemporary Graphic Tee"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/tailored-outerwear.jpg" alt="Tailored Outerwear"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/essential-apparel.jpg" alt="Essential Apparel"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/precision-polo.jpg" alt="Precision Polo"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/heritage-polo.jpg" alt="Heritage Polo"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/premium-crew.jpg" alt="Premium Crew"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/kids-varsity.jpg" alt="Kids Varsity"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/collection-hero.jpg" alt="Graphic Street Tee"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/utility-work-shirt.jpg" alt="Utility Work Shirt"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/classic-hoodie.jpg" alt="Classic Hoodie"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/performance-sweatshirt.jpg" alt="Performance Sweatshirt"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/modern-layered-top.jpg" alt="Modern Layered Top"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/everyday-fleece.jpg" alt="Everyday Fleece"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/contemporary-basic.jpg" alt="Contemporary Basic"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/export-casualwear.jpg" alt="Export Casualwear"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/printed-fashion-tee.jpg" alt="Printed Fashion Tee"/></div></article>
        <article class="cap-product-card"><div class="cap-product-media"><img src="/assets/products/ready-to-scale-apparel.jpg" alt="Ready-to-Scale Apparel"/></div></article>
      </div>
    </section>

    <section class="cap-cta">
      <div>
        <h2 class="cap-cta-title">Ready to initiate your manufacturing cycle?</h2>
        <p class="cap-cta-desc">Our technical team is ready to translate your design language into high-performance production reality. Request a prototype or start a conversation about your next collection.</p>
      </div>
      <div class="cap-actions">
        <button class="cap-btn cap-btn-primary" type="button" onclick="showPage('prototype')">Start Production Inquiry</button>
      </div>
    </section>

    <footer class="light">
      <div class="footer-logo">ZF Apparel</div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Sustainability Report</a>
        <a>Global Logistics</a>
      </div>
      <div class="footer-copy">© 2024 ZF Apparel Manufacturing. All rights reserved.</div>
    </footer>
  </div>

  <!-- ==================== PAGE 4: PROTOTYPE ==================== -->
  <div id="prototype" class="page">
    <div class="proto-layout">
      <div class="proto-left">
        <div class="proto-bg"></div>
        <div class="proto-spec-card">
          <div class="spec-archive">Capabilities Overview</div>
          <div class="spec-grid">
            <div>
              <div class="spec-item-label">Primary Categories</div>
              <div class="spec-item-val">Knitted & Woven Garments</div>
            </div>
            <div>
              <div class="spec-item-label">Monthly Capacity</div>
              <div class="spec-item-val">50,000 Pieces</div>
            </div>
            <div>
              <div class="spec-item-label">Custom Services</div>
              <div class="spec-item-val">Printing & Embroidery</div>
            </div>
            <div>
              <div class="spec-item-label">Manufacturing Base</div>
              <div class="spec-item-val">Faisalabad, Pakistan</div>
            </div>
          </div>
        </div>
      </div>
      <div class="proto-right">
        <div class="proto-tag">Let's Work Together</div>
        <h1 class="proto-headline">Request a<br>Prototype.</h1>
        <p class="proto-desc">From concept to final shipment, we execute every stage with precision to support your brand's growth.</p>

        <div class="form-grid">
          <div class="form-field">
            <div class="field-label">Project Identity</div>
            <input id="prototypeProject" class="field-input" type="text" placeholder="e.g. Graphic Tees / Polo Drop">
          </div>
          <div class="form-field">
            <div class="field-label">Representative Name</div>
            <input id="prototypeName" class="field-input" type="text" placeholder="Your full name">
          </div>
          <div class="form-field">
            <div class="field-label">Email Address</div>
            <input id="prototypeEmail" class="field-input" type="email" placeholder="info@zfapparel.pk">
          </div>
          <div class="form-field">
            <div class="field-label">Global Brand / House</div>
            <input id="prototypeCompany" class="field-input" type="text" placeholder="Company / Retail Label">
          </div>
          <div class="form-field">
            <div class="field-label">Material Archive</div>
            <div class="select-wrap">
              <select id="prototypeCategory" class="field-select field-input">
                <option>T-Shirts</option>
                <option>Polo Shirts</option>
                <option>Sweatshirts & Hoodies</option>
                <option>Tracksuits</option>
              </select>
              <span class="select-arrow">∨</span>
            </div>
          </div>
          <div class="form-field full">
            <div class="field-label">Manufacturing Notes</div>
            <textarea id="prototypeNotes" class="field-textarea"
              placeholder="Share style details, quantity target, and customization requirements..."></textarea>
          </div>
        </div>

        <div class="submit-row">
          <button id="prototypeSubmit" class="submit-btn" type="button">Submit Prototype Request</button>
          <div id="prototypeStatus" class="form-status" aria-live="polite"></div>
          <div class="lead-note">
            <span class="info-icon">i</span>
            Timelines planned by quantity, complexity, and shipment destination.
          </div>
        </div>
      </div>
    </div>

    <div class="trust-bar">
      <div class="trust-item"><span class="trust-icon">✓</span> Fully Vertically Integrated (Cut to Pack)</div>
      <div class="trust-item"><span class="trust-icon">◎</span> European & American Standards Compliance</div>
      <div class="trust-item"><span class="trust-icon">▣</span> Professional Management & On-Time Delivery</div>
    </div>

    <footer class="light">
      <div class="footer-logo">ZF Apparel</div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Sustainability Report</a>
        <a>Global Logistics</a>
      </div>
      <div class="footer-copy">© 2024 ZF Apparel Manufacturing. All rights reserved.</div>
    </footer>
  </div>

  <!-- ==================== PAGE 5: CONTACT ==================== -->
  <div id="contact" class="page">
    <section class="contact-hero">
      <h1 class="contact-headline">Let's Work<br>Together.</h1>
      <p class="contact-desc">Every successful brand starts with a conversation. Our team supports collection development, scaling, and production planning at every stage.</p>
    </section>

    <div class="contact-grid">
      <div class="contact-form">
        <div class="form-tag">Inquiry Initiation</div>
        <div class="contact-row">
          <div class="contact-field">
            <label>Full Name</label>
            <input id="contactName" type="text" placeholder="Your full name">
          </div>
          <div class="contact-field">
            <label>Company</label>
            <input id="contactCompany" type="text" placeholder="Brand / Company">
          </div>
        </div>
        <div class="contact-field">
          <label>Email Address</label>
          <input id="contactEmail" type="email" placeholder="info@zfapparel.pk">
        </div>
        <div class="contact-field" style="margin-top:28px;">
          <label>Message</label>
          <textarea id="contactMessage" placeholder="Describe product types, quantity range, and timeline expectations."></textarea>
        </div>
        <button id="contactSubmit" class="submit-contact" type="button">Submit Inquiry</button>
        <div id="contactStatus" class="form-status" aria-live="polite"></div>
      </div>

      <div class="contact-right">
        <div class="sewing-image">
          <img src="/assets/contact-emblem.jpg" alt="ZF Apparel emblem" class="contact-photo"/>
        </div>
        <div class="offices">
          <div class="office">
            <div class="office-tag">Manufacturing Unit</div>
            <div class="office-addr">Chak # 202 R.B, Near Dry Port, Jhumra Road, Gatti<br>Faisalabad, Pakistan</div>
            <div class="office-phone">+92 313-810-9055</div>
          </div>
          <div class="office">
            <div class="office-tag">Email</div>
            <div class="office-addr">Primary business contact<br>for inquiries and quotations</div>
            <div class="office-phone">info@zfapparel.pk</div>
          </div>
          <div class="office">
            <div class="office-tag">Website</div>
            <div class="office-addr">Company profile, products, and<br>manufacturing updates</div>
            <div class="office-phone">zfapparel.pk</div>
          </div>
        </div>
      </div>
    </div>

    <div class="logistics-section">
      <div class="logistics-icon">🌐</div>
      <div class="logistics-tag">Trusted Manufacturing Partner</div>
      <div class="logistics-sub">Quality, consistency, and dependable timelines for global brands</div>
    </div>

    <div class="certs-strip">
      <div class="cert-strip-item">Consistent High-Quality Production</div>
      <div class="cert-strip-item">Competitive Pricing</div>
      <div class="cert-strip-item">Strong Communication & Client Support</div>
      <div class="cert-strip-item">Proven Ability to Meet Deadlines</div>
      <div class="cert-strip-item">Commitment to Ethical Manufacturing</div>
    </div>

    <footer class="light">
      <div class="footer-logo">ZF Apparel</div>
      <div class="footer-links">
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
        <a>Sustainability Report</a>
        <a>Global Logistics</a>
      </div>
      <div class="footer-copy">© 2024 ZF Apparel Manufacturing. All rights reserved.</div>
    </footer>
  </div>
`;