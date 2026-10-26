import './style.css'

const WHATSAPP_NUMBER = '212670364105'
const WHATSAPP_MSG = "Hello Beldi Country Club, I'd like to inquire about hosting a wedding or event."

const waLink = (msg = WHATSAPP_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

const waIcon = `<svg viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.34A10 10 0 1 0 12 2zm0 18.13c-1.6 0-3.17-.43-4.53-1.24l-.32-.19-3.34.88.89-3.26-.21-.33A8.13 8.13 0 1 1 12 20.13z"/></svg>`

// Local images - mapped sequentially to content references
const IMAGES = [
  '/images/caa6a51b-14d1-4724-af30-787494d2bb0e.png',   // 0 - Hero
  '/images/c45a70de-edd1-4d9b-96dd-582adcea4493.png',   // 1 - Weddings & Ceremonies
  '/images/8f7625d7-2f86-4bfa-8101-dfa8c78fe8fc.png',   // 2 - Private Dinners
  '/images/6866ddd4-1d49-4392-b606-bdd9ceb8c910.png',   // 3 - Private Parties
  '/images/548d0a21-ca0b-42fd-b581-7c2bae46836d.png',   // 4 - Signature Experience 1
  '/images/2fac6064-2d92-44de-b902-ce7bca771bc7.png',   // 5 - Plan Your Wedding
]

const CELEBRATIONS = [
  {
    title: 'Weddings & Ceremonies',
    desc: 'Exchange vows in a romantic garden setting or beneath a glasshouse canopy surrounded by greenery and natural light.',
    image: IMAGES[1],
    alt: 'Wedding ceremony in glasshouse with floral aisle'
  },
  {
    title: 'Private Dinners & Receptions',
    desc: 'Celebrate with elegant table settings, beautiful floral arrangements and intimate candlelit dining experiences.',
    image: IMAGES[2],
    alt: 'Candlelit dinner in tropical glasshouse'
  },
  {
    title: 'Private Parties & Special Events',
    desc: 'Bring family, friends or colleagues together for atmospheric celebrations filled with Moroccan character and charm.',
    image: IMAGES[3],
    alt: 'Private evening party by the pool'
  }
]

const PROMISES = [
  {
    title: 'Enchanting Gardens',
    desc: 'A lush landscape of olive trees, flowering gardens and peaceful courtyards creates a romantic atmosphere for every occasion.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 18a4 4 0 0 0 0-8"/><circle cx="12" cy="14" r="2"/></svg>`
  },
  {
    title: 'Distinctive Event Spaces',
    desc: 'From light-filled glasshouses to vaulted reception halls and intimate garden settings, each space has its own character.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    title: 'Tailored Celebrations',
    desc: 'Thoughtful styling, personalized experiences and exceptional attention to detail bring your unique vision to life.',
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  }
]

const SIGNATURE_EXPERIENCES = [
  {
    title: 'Candlelit Wedding Receptions',
    desc: 'Dine beneath hundreds of hand-blown glass lanterns as the sun sets over olive groves. Our signature tablescapes blend antique ceramics, seasonal flowers, and countless candles for an ambience of warm elegance — from rooftop cocktails to multi-course dinners under the stars.',
    image: IMAGES[4],
    alt: 'Candlelit wedding reception beneath hanging Moroccan lanterns'
  },
  {
    title: 'Garden & Poolside Celebrations',
    desc: 'Nine acres of manicured gardens offer countless settings — intimate ceremonies beside the reflecting pool to grand celebrations on the great lawn. Saltwater pools become centerpieces for elegant luncheons; by night, gardens transform with strategic lighting beneath the palm canopy.',
    image: IMAGES[0],
    alt: 'Outdoor wedding dinner by the pool'
  },
  {
    title: 'Elegant Indoor Receptions',
    desc: 'Magnificent vaulted halls with original cedar ceilings, hand-carved plasterwork, and arched windows framing garden views. Accommodates 200 guests with flexible zones — vintage Moroccan lounges, dance floor beneath crystal chandeliers, private alcoves. Natural climate control year-round.',
    image: IMAGES[1],
    alt: 'Traditional vaulted reception hall'
  },
  {
    title: 'Spectacular Evening Entertainment',
    desc: 'From Gnawa musicians leading candlelit processions to contemporary DJs beneath the stars and fire performers illuminating the night. Curated entertainment honoring Moroccan tradition with global influences — Andalusian ensembles, belly dancers, live bands keeping all generations dancing until dawn.',
    image: IMAGES[2],
    alt: 'Fire performer entertaining guests at evening celebration'
  },
  {
    title: 'Authentic Moroccan Welcomes',
    desc: 'Ceremonial mint tea poured from height, musicians guiding guests through jasmine-scented gardens. Bespoke welcome gifts from local women\'s cooperatives — handwoven textiles, ceramics, organic oils. Multi-day cultural immersion: cooking classes, garden tours, medina workshop visits.',
    image: IMAGES[3],
    alt: 'Traditional Moroccan welcome with musicians and lanterns'
  }
]

const TESTIMONIALS = [
  {
    quote: "From the moment we stepped through the gates, the magic of Beldi enveloped us. Our wedding felt like a dream — the lanterns, the gardens, the incredible team. We couldn't have imagined a more perfect day.",
    name: 'Sophie & Marco',
    role: 'London, UK — June 2024'
  },
  {
    quote: "The attention to detail was extraordinary. Every guest commented on how special the atmosphere was. The glasshouse ceremony at sunset, followed by dinner under the stars — it was pure magic.",
    name: 'Amélie & Karim',
    role: 'Paris, France — September 2024'
  },
  {
    quote: "Beldi Country Club gave us the destination wedding we dreamed of. The team anticipated every need, the food was incredible, and the setting took everyone's breath away. We'd do it all again in a heartbeat.",
    name: 'Emma & James',
    role: 'New York, USA — April 2024'
  }
]

const FAQS = [
  { q: 'What is the capacity for weddings at Beldi Country Club?', a: 'We can accommodate intimate gatherings of 30 guests up to grand celebrations of 300 guests across our various indoor and outdoor spaces.' },
  { q: 'Can we bring our own vendors (photographer, florist, etc.)?', a: 'Absolutely. We welcome your preferred vendors and are also happy to recommend our trusted network of local artisans, florists, photographers, and entertainers who know the venue intimately.' },
  { q: 'Is accommodation available for guests?', a: 'While Beldi Country Club is an event venue, we partner with beautiful nearby riads and boutique hotels in Marrakech to accommodate your guests, and can arrange group bookings and transfers.' },
  { q: 'Do you provide catering, or can we use an external caterer?', a: 'Our in-house culinary team creates exceptional Moroccan and international menus tailored to your tastes. External caterers are welcome with prior approval and a venue fee.' },
  { q: 'How far in advance should we book?', a: 'We recommend booking 12–18 months in advance for peak season (April–June, September–October). Last-minute availability sometimes opens up — please inquire!' },
  { q: 'Can you host legal marriage ceremonies?', a: 'We host symbolic and religious ceremonies beautifully. For legal marriages, we recommend completing the civil ceremony at your local registry office before or after your celebration at Beldi.' },
  { q: 'What is your cancellation policy?', a: 'Our policy varies by season and booking date. Generally, deposits are non-refundable, with scaled refunds based on notice period. We understand circumstances change — please discuss with our team.' }
]

// Wedding/Event Inquiry Form
const weddingFormHTML = (idPrefix) => `
  <form class="reservation-form wedding-form" data-form="${idPrefix}" novalidate>
    <div class="field">
      <label for="${idPrefix}-fullname">Full Name</label>
      <input type="text" id="${idPrefix}-fullname" name="fullname" required />
      <span class="err-msg">Please enter your full name.</span>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-email">Email Address</label>
        <input type="email" id="${idPrefix}-email" name="email" required />
        <span class="err-msg">Please enter a valid email.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-phone">Phone / WhatsApp</label>
        <input type="tel" id="${idPrefix}-phone" name="phone" required />
        <span class="err-msg">Please enter a valid phone number.</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-eventtype">Event Type</label>
        <select id="${idPrefix}-eventtype" name="eventtype" required>
          <option value="">Select event type</option>
          <option value="wedding">Wedding</option>
          <option value="engagement">Engagement Party</option>
          <option value="anniversary">Anniversary</option>
          <option value="private-dinner">Private Dinner</option>
          <option value="corporate">Corporate Event</option>
          <option value="other">Other Celebration</option>
        </select>
        <span class="err-msg">Please select an event type.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-date">Event Date</label>
        <input type="date" id="${idPrefix}-date" name="date" required />
        <span class="err-msg">Select a date.</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-guests">Number of Guests</label>
        <input type="number" id="${idPrefix}-guests" name="guests" min="1" max="500" placeholder="e.g. 120" required />
        <span class="err-msg">Please enter number of guests.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-budget">Estimated Budget (€)</label>
        <input type="number" id="${idPrefix}-budget" name="budget" min="1000" max="500000" step="1000" placeholder="e.g. 50000" required />
        <span class="err-msg">Please enter estimated budget.</span>
      </div>
    </div>
    <div class="field">
      <label for="${idPrefix}-vision">Your Vision</label>
      <textarea id="${idPrefix}-vision" name="vision" placeholder="Tell us about your dream celebration — style, colors, atmosphere, special touches..." required></textarea>
      <span class="err-msg">Please share your vision.</span>
    </div>
    <button type="submit" class="btn btn-primary"><span>Request Your Personalized Proposal</span></button>
    <div class="form-success">Thank you — your inquiry has been received. We will reply within 24 hours with a personalized proposal.</div>
  </form>
`

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="header">
    <div class="container">
      <a href="#hero" class="brand"><span class="brand-mark">BE</span> Beldi Country Club</a>
      <nav class="nav" id="nav">
        <a href="#celebrations" class="nav-link">Celebrations</a>
        <a href="#promise" class="nav-link">The Beldi Experience</a>
        <a href="#signature" class="nav-link">Signature Experiences</a>
        <a href="#testimonials" class="nav-link">Guest Stories</a>
        <a href="#faq" class="nav-link">FAQ</a>
        <a href="#plan" class="nav-link">Plan Your Wedding</a>
        <a href="#plan" class="nav-link nav-cta btn btn-primary"><span>Inquire Now</span></a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </header>

  <section class="hero section" id="hero">
    <div class="hero-bg" style="background-image:url('${IMAGES[0]}')"></div>
    <div class="container">
      <div class="hero-text reveal">
        <span class="eyebrow">Weddings & Celebrations in Marrakech</span>
        <h1>Where Moroccan Charm<br/>Meets <strong>Timeless Romance</strong></h1>
        <p class="lead">An enchanting setting for extraordinary weddings and unforgettable celebrations. Nestled among lush gardens, olive trees and beautiful Moroccan architecture, Beldi Country Club offers a romantic escape for destination weddings and exclusive private events.</p>
        <div class="hero-features">
          <span>Lush Gardens & Olive Groves</span>
          <span>Glasshouse & Vaulted Halls</span>
          <span>Bespoke Catering & Styling</span>
        </div>
      </div>
      <div class="hero-form-card reveal">
        <h3>Tell Us About Your Celebration</h3>
        <p class="form-sub">Share a few details about your event and start creating something unforgettable.</p>
        ${weddingFormHTML('hero')}
      </div>
    </div>
  </section>

  <section class="celebrations section" id="celebrations">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Discover Our Events</span>
        <h2>Beautiful Moments,<br/>Exceptional Settings</h2>
        <p>From romantic wedding ceremonies to sophisticated private gatherings, discover a world of celebrations inspired by the beauty of Marrakech.</p>
        <hr class="hr-accent" />
      </div>
      <div class="celebrations-grid" id="celebrationsGrid"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="btn btn-whatsapp" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Chat with us on WhatsApp</a>
    </div></div>
  </section>

  <section class="promise section" id="promise">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">The Beldi Experience</span>
        <h2>Our Event Promise</h2>
        <p>Authentic surroundings. Beautifully considered details. Celebrations to remember.</p>
        <hr class="hr-accent" />
      </div>
      <div class="promise-grid" id="promiseGrid"></div>
    </div>
  </section>

  <section class="signature section" id="signature">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Unforgettable Celebrations</span>
        <h2>Extraordinary Ways<br/>to Celebrate</h2>
        <p>From candlelit dinners to vibrant Moroccan entertainment, every setting tells a different story.</p>
        <hr class="hr-accent" />
      </div>
      <div class="signature-grid" id="signatureGrid"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="btn btn-whatsapp" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Message us on WhatsApp</a>
    </div></div>
  </section>

  <section class="testimonials section" id="testimonials">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Guest Stories</span>
        <h2>What Our Guests<br/>Carry Home</h2>
        <p>Real celebrations, real emotions, unforgettable memories.</p>
        <hr class="hr-accent" />
      </div>
      <div class="testimonials-grid" id="testimonialsGrid"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="btn btn-whatsapp" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Join them — start planning</a>
    </div></div>
  </section>

  <section class="faq section" id="faq">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Good to Know</span>
        <h2>Frequently Asked Questions</h2>
        <hr class="hr-accent" />
      </div>
      <div class="faq-list" id="faqList"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="btn btn-whatsapp" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Still have questions? Ask us</a>
    </div></div>
  </section>

  <section class="plan section" id="plan">
    <div class="container">
      <div class="plan-grid">
        <div class="plan-visual reveal">
          <img src="${IMAGES[5]}" alt="Beautiful glasshouse garden venue set for an elegant event" />
        </div>
        <div class="plan-content reveal">
          <span class="eyebrow">Your Celebration Begins Here</span>
          <h2>Your Dream Wedding<br/>at Beldi Country Club</h2>
          <p>Imagine exchanging vows surrounded by lush greenery, celebrating with loved ones in beautifully styled spaces and ending the evening beneath the warm glow of Moroccan lanterns.</p>
          <p>At Weddings Planner Morocco, we bring your vision to life with thoughtful planning, creative design and personalized coordination.</p>
          <p>Let's create a wedding that feels entirely yours.</p>
        </div>
      </div>
      <div class="plan-form-wrapper reveal">
        <div class="section-head" style="text-align:center; max-width:600px; margin:0 auto var(--sp-6);">
          <span class="eyebrow">Wedding & Event Reservation</span>
          <h2>Tell Us About Your Celebration</h2>
          <p>Tell us about your celebration and receive a personalized proposal.</p>
          <hr class="hr-accent" />
        </div>
        <div class="reservation">
          ${weddingFormHTML('contact')}
          <label class="opt-in"><input type="checkbox" name="optin" /> Yes, I'd like to receive occasional messages about offers and seasonal celebrations.</label>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <span class="footer-brand">Beldi Country Club</span>
          <p>An enchanting wedding and event venue in Marrakech. Lush gardens, olive groves, glasshouses and vaulted halls — where Moroccan charm meets timeless romance.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>
            <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>
          </div>
        </div>
        <div>
          <h4>Celebrations</h4>
          <a href="#celebrations">Weddings & Ceremonies</a>
          <a href="#celebrations">Private Dinners</a>
          <a href="#celebrations">Private Parties</a>
          <a href="#signature">Signature Experiences</a>
        </div>
        <div>
          <h4>Plan</h4>
          <a href="#plan">Start Your Inquiry</a>
          <a href="#faq">FAQ</a>
          <a href="#promise">The Beldi Experience</a>
          <a href="#testimonials">Guest Stories</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a>Route de l'Ourika, Marrakech</a>
          <a>+212 670 364 105</a>
          <a>events@beldi-countryclub.com</a>
          <a>Open daily 10:00 – 19:00</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Beldi Country Club. All rights reserved.</span>
        <span>Privacy · Terms · Crafted with care in Marrakech</span>
      </div>
    </div>
  </footer>

  <a class="whatsapp-fab" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>
`

// ---------- Render celebrations ----------
const celebrationsGrid = document.getElementById('celebrationsGrid')
CELEBRATIONS.forEach((c, i) => {
  const card = document.createElement('div')
  card.className = `celebration-card reveal reveal-delay-${i + 1}`
  card.innerHTML = `
    <div class="celebration-img">
      <img src="${c.image}" alt="${c.alt}" loading="lazy" />
    </div>
    <div class="celebration-body">
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <a href="#plan" class="view-link">Explore</a>
    </div>
  `
  celebrationsGrid.appendChild(card)
})

// ---------- Render promises ----------
const promiseGrid = document.getElementById('promiseGrid')
PROMISES.forEach((p, i) => {
  const card = document.createElement('div')
  card.className = `promise-card reveal reveal-delay-${i + 1}`
  card.innerHTML = `
    <div class="promise-icon">${p.icon}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
  `
  promiseGrid.appendChild(card)
})

// ---------- Render signature experiences (paired layout) ----------
const signatureGrid = document.getElementById('signatureGrid')

// Render in pairs: 2 images top row, 2 descriptions bottom row
for (let i = 0; i < SIGNATURE_EXPERIENCES.length; i += 2) {
  const pair = document.createElement('div')
  pair.className = 'signature-pair'
  pair.style.transitionDelay = `${i * 0.1}s`
  
  const first = SIGNATURE_EXPERIENCES[i]
  const second = SIGNATURE_EXPERIENCES[i + 1]
  
  // First image
  const img1 = document.createElement('div')
  img1.className = 'signature-img reveal'
  img1.innerHTML = `<img src="${first.image}" alt="${first.alt}" loading="lazy" />`
  
  // Second image (if exists)
  const img2 = document.createElement('div')
  img2.className = 'signature-img reveal'
  if (second) {
    img2.innerHTML = `<img src="${second.image}" alt="${second.alt}" loading="lazy" />`
  } else {
    img2.style.visibility = 'hidden'
  }
  
  // First content
  const content1 = document.createElement('div')
  content1.className = 'signature-content reveal'
  content1.innerHTML = `
    <span class="eyebrow">Signature Experience</span>
    <h3>${first.title}</h3>
    <p>${first.desc}</p>
  `
  
  // Second content (if exists)
  const content2 = document.createElement('div')
  content2.className = 'signature-content reveal'
  if (second) {
    content2.innerHTML = `
      <span class="eyebrow">Signature Experience</span>
      <h3>${second.title}</h3>
      <p>${second.desc}</p>
    `
  } else {
    content2.style.visibility = 'hidden'
  }
  
  pair.append(img1, img2, content1, content2)
  signatureGrid.appendChild(pair)
}

// ---------- Render testimonials ----------
const testimonialsGrid = document.getElementById('testimonialsGrid')
TESTIMONIALS.forEach((t) => {
  const card = document.createElement('div')
  card.className = 'testimonial-card reveal'
  card.innerHTML = `
    <p class="testimonial-quote" data-full="${t.quote.replace(/"/g, '"')}"></p>
    <div class="testimonial-person">
      <div class="name">${t.name}</div>
      <div class="role">${t.role}</div>
    </div>
    <div class="testimonial-hint">Hover to read</div>
  `
  testimonialsGrid.appendChild(card)
})

// ---------- Render FAQ ----------
const faqList = document.getElementById('faqList')
FAQS.forEach((f) => {
  const item = document.createElement('div')
  item.className = 'faq-item reveal'
  item.innerHTML = `
    <button class="faq-q">${f.q} <span class="icon">+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  `
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'))
    if (!isOpen) item.classList.add('open')
  })
  faqList.appendChild(item)
})

// ---------- Testimonial typing ----------
document.querySelectorAll('.testimonial-quote').forEach((q) => {
  const full = q.dataset.full
  q.textContent = full
  let typing = false
  q.addEventListener('mouseenter', () => {
    if (typing) return
    typing = true
    q.textContent = ''
    let i = 0
    const cursor = document.createElement('span')
    cursor.className = 'cursor'
    q.appendChild(cursor)
    const interval = setInterval(() => {
      if (i < full.length) {
        cursor.insertAdjacentText('beforebegin', full[i])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => { if (cursor.parentNode) cursor.remove(); typing = false }, 2000)
      }
    }, 28)
  })
})

// ---------- Wedding form validation ----------
document.querySelectorAll('.wedding-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let valid = true
    const fields = form.querySelectorAll('input[required], textarea[required], select[required]')
    fields.forEach((input) => {
      const field = input.closest('.field')
      let bad = false
      if (input.type === 'email') bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
      else if (input.type === 'tel') bad = input.value.trim().length < 6
      else if (input.type === 'date') bad = !input.value
      else if (input.tagName === 'SELECT') bad = !input.value
      else bad = !input.value.trim()
      field.classList.toggle('invalid', bad)
      if (bad) valid = false
    })
    if (valid) {
      form.querySelector('.form-success').classList.add('show')
      form.reset()
      setTimeout(() => form.querySelector('.form-success').classList.remove('show'), 5000)
    }
  })
  form.querySelectorAll('input, textarea, select').forEach((input) => {
    input.addEventListener('input', () => input.closest('.field').classList.remove('invalid'))
  })
})

// ---------- Header scroll ----------
const header = document.getElementById('header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60)
})

// ---------- Mobile nav ----------
const navToggle = document.getElementById('navToggle')
const nav = document.getElementById('nav')
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open')
  navToggle.classList.toggle('open')
})
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  nav.classList.remove('open')
  navToggle.classList.remove('open')
}))

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in')
      io.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' })
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))