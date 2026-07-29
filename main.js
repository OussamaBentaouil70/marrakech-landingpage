import './style.css'

const WHATSAPP_NUMBER = '212670364105'
const WHATSAPP_MSG = "Hello Riad BE Marrakech, I'd like to inquire about availability."

const waLink = (msg = WHATSAPP_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

const waIcon = `<svg viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.34A10 10 0 1 0 12 2zm0 18.13c-1.6 0-3.17-.43-4.53-1.24l-.32-.19-3.34.88.89-3.26-.21-.33A8.13 8.13 0 1 1 12 20.13z"/></svg>`

const ROOMS = [
  {
    name: 'BE Medina Room',
    tag: 'Classic Room',
    price: '€90',
    desc: 'A traditional room in the heart of the riad, with tadelakt walls, hand-laid zellige, and a window opening to the courtyard. Morning light filters through carved cedar screens.',
    amenities: ['Double bed', 'Ensuite bathroom', 'Courtyard view', 'A/C', 'Breakfast included'],
    images: [
      'https://images.pexels.com/photos/34672523/pexels-photo-34672523.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34645081/pexels-photo-34645081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    name: 'BE Rooftop Suite',
    tag: 'Signature Suite',
    price: '€160',
    desc: 'A spacious suite on the upper level with direct rooftop access. Wake to panoramic medina views, then step out for sunrise yoga on the terrace.',
    amenities: ['King bed', 'Rooftop access', 'Private terrace', 'Yoga access', 'A/C', 'Breakfast included'],
    images: [
      'https://images.pexels.com/photos/34940612/pexels-photo-34940612.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34769922/pexels-photo-34769922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/15531322/pexels-photo-15531322.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    name: 'The Douiria Private Riad',
    tag: 'Private Riad',
    price: '€320',
    desc: 'Just next door to the main Riad BE and connected on the terrace. Three sleeping rooms, a fully equipped kitchen, a patio with large dining table, a separate lounge, and a big private rooftop. Accommodates 2–6 people — perfect for families or friends.',
    amenities: ['3 bedrooms', 'Full kitchen', 'Private patio', 'Lounge', 'Private rooftop', 'Sleeps 6', 'Breakfast option'],
    images: [
      'https://images.pexels.com/photos/34645081/pexels-photo-34645081.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34940612/pexels-photo-34940612.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/30257102/pexels-photo-30257102.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    name: 'BE Agafay Yurt',
    tag: 'The Hideaway',
    price: '€320',
    desc: 'Immerse yourself in the tranquility of our yurts in the heart of the enchanting stone-desert. A night in a yurt tent, including breakfast and dinner. Or visit us for a pool day with lunch or dinner by our pristine pool — the perfect blend of serenity and adventure.',
    amenities: ['Yurt tent', 'Breakfast + dinner', 'Pool access', 'Stone-desert views', 'Sunset terrace', 'From €320/night'],
    images: [
      'https://images.pexels.com/photos/30282363/pexels-photo-30282363.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/29125649/pexels-photo-29125649.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/32546630/pexels-photo-32546630.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
]

const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/30257102/pexels-photo-30257102.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/30282363/pexels-photo-30282363.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/32546630/pexels-photo-32546630.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/29125649/pexels-photo-29125649.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/30204572/pexels-photo-30204572.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/15531325/pexels-photo-15531325.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/34672523/pexels-photo-34672523.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/34645131/pexels-photo-34645131.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

const TESTIMONIALS = [
  {
    quote: "From the moment we stepped through the unassuming door, the noise of the medina fell away. The courtyard fountain became the soundtrack to our mornings. This is the Marrakech we dreamed of.",
    name: 'Émilie Laurent',
    role: 'Paris, France',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote: "The attention to detail is extraordinary — the mint tea waiting on arrival, the rose petals, the way light moves through the mashrabiya at golden hour. We never wanted to leave.",
    name: 'James Whitfield',
    role: 'London, UK',
    photo: 'https://images.pexels.com/photos/220457/pexels-photo-220457.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote: "Riad BE feels like a private home, not a hotel. The team anticipated everything we needed. The rooftop dinner under the stars and the morning yoga were the highlights of our trip.",
    name: 'Sofia Marchetti',
    role: 'Milan, Italy',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
]

const FAQS = [
  { q: 'How do I get to the riad from the airport?', a: 'Marrakech Menara Airport is about 15 minutes by car. We arrange private transfers on request — simply share your flight details when booking, and our driver will meet you in arrivals with a sign.' },
  { q: 'Is the riad inside the medina? Can taxis reach it?', a: 'Yes, we are in the heart of the medina. Cars cannot access the very last alley, so taxis drop you about a 3-minute walk away. Our team will greet you at the nearest accessible point and carry your luggage.' },
  { q: 'What meals are included?', a: 'A traditional Moroccan breakfast is included in every stay, served on the rooftop or in the courtyard. Lunch and dinner can be ordered from our seasonal menu, with advance notice.' },
  { q: 'Do you offer spa and hammam treatments?', a: 'Yes. Our hammam and massage treatments are available by appointment. We recommend booking at least 24 hours in advance, especially during high season.' },
  { q: 'Can you arrange tours and excursions?', a: 'Absolutely. We organize guided medina walks, day trips to the Atlas Mountains, desert excursions, and cooking classes — all with trusted local guides.' },
  { q: 'What is your cancellation policy?', a: 'Free cancellation up to 7 days before arrival. Within 7 days, the first night is charged. We understand plans change, so please reach out directly and we will do our best to accommodate.' },
]

const reservationFormHTML = (idPrefix) => `
  <form class="reservation-form" data-form="${idPrefix}" novalidate>
    <div class="field">
      <label for="${idPrefix}-fullname">Full Name</label>
      <input type="text" id="${idPrefix}-fullname" name="fullname" required />
      <span class="err-msg">Please enter your full name.</span>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-phone">Phone</label>
        <input type="tel" id="${idPrefix}-phone" name="phone" required />
        <span class="err-msg">Please enter a valid phone number.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-email">Email</label>
        <input type="email" id="${idPrefix}-email" name="email" required />
        <span class="err-msg">Please enter a valid email.</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-checkin">Check-in</label>
        <input type="date" id="${idPrefix}-checkin" name="checkin" required />
        <span class="err-msg">Select a date.</span>
      </div>
      <div class="field">
        <label for="${idPrefix}-checkout">Check-out</label>
        <input type="date" id="${idPrefix}-checkout" name="checkout" required />
        <span class="err-msg">Select a date.</span>
      </div>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${idPrefix}-guests">Guests</label>
        <select id="${idPrefix}-guests" name="guests">
          <option value="1">1 Guest</option>
          <option value="2" selected>2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5+">5+ Guests</option>
        </select>
      </div>
      <div class="field">
        <label for="${idPrefix}-room">Room Type</label>
        <select id="${idPrefix}-room" name="room">
          <option value="any">Any available</option>
          <option value="BE Medina Room">BE Medina Room</option>
          <option value="BE Rooftop Suite">BE Rooftop Suite</option>
          <option value="The Douiria Private Riad">The Douiria Private Riad</option>
          <option value="BE Agafay Yurt">BE Agafay Yurt</option>
        </select>
      </div>
    </div>
    <div class="field">
      <label for="${idPrefix}-message">Message</label>
      <textarea id="${idPrefix}-message" name="message" placeholder="Tell us about your stay..."></textarea>
    </div>
    <button type="submit" class="btn-primary">Request Reservation</button>
    <div class="form-success">Thank you — your request has been received. We will reply within 24 hours.</div>
  </form>
`

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="header">
    <div class="container">
      <a href="#hero" class="brand"><span class="brand-mark">BE</span> Riad BE Marrakech</a>
      <nav class="nav" id="nav">
        <a href="#about">About</a>
        <a href="#rooms">Rooms & Suites</a>
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Guests</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
        <a href="#contact" class="nav-cta">Book a Stay</a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </header>

  <section class="hero" id="hero">
    <div class="hero-bg" style="background-image:url('https://images.pexels.com/photos/30257102/pexels-photo-30257102.jpeg?auto=compress&cs=tinysrgb&w=1600')"></div>
    <div class="container">
      <div class="hero-text reveal">
        <span class="eyebrow">BE in the Moment</span>
        <h1>Welcome to the<br/>historical medina.</h1>
        <p>Full of history, traditions, culture, art, and handcrafts — where the past meets the present. Our riad is located in the middle of this colorful scenery. We are creating an authentic and unique place full of local history, tradition, art, and food. A home away from home.</p>
        <div class="hero-features">
          <div>Two riads + spa + yoga</div>
          <div>Connected on the rooftop</div>
          <div>Heart of the medina</div>
        </div>
      </div>
      <div class="reservation reveal">
        <h3>Reserve Your Stay</h3>
        <p class="form-sub">Check availability and we'll confirm within 24 hours.</p>
        ${reservationFormHTML('hero')}
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-img reveal">
          <img src="https://images.pexels.com/photos/30282363/pexels-photo-30282363.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Riad courtyard with fountain" />
          <div class="accent-frame"></div>
        </div>
        <div class="about-text reveal">
          <span class="eyebrow">Our Story</span>
          <h2>BE welcome to the medina.</h2>
          <p>Our riad is located in the middle of the colorful scenery of the historical medina — the heart of Marrakech. Here we are creating an authentic and unique place full of local history, tradition, art, and food. We bring Moroccan culture to the surface and open the doors to this fascinating world.</p>
          <p>Our two riads, spa, and yoga studio are connected on the rooftop. A home away from home, where the past meets the present and every detail is shaped by well-being, culture, and the joy of sharing.</p>
          <div class="values">
            <div class="value-item"><h4>Authentic</h4><p>Local history, tradition, art, and food brought to the surface.</p></div>
            <div class="value-item"><h4>Well-being</h4><p>Hammam, massages, yoga — space to breathe and reconnect.</p></div>
            <div class="value-item"><h4>Culture</h4><p>Cookery classes, local artisans, and the joy of sharing.</p></div>
            <div class="value-item"><h4>Home</h4><p>A home away from home in the heart of the medina.</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="whatsapp-cta" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Chat with us on WhatsApp</a>
    </div></div>
  </section>

  <section class="rooms" id="rooms">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Rooms & Suites</span>
        <h2>More than just rooms.</h2>
        <p>More than a place to stay, Riad BE is a place to experience. Each room is shaped by Moroccan tradition, light, and the rhythm of the medina. Tap any room to explore.</p>
      </div>
      <div class="rooms-grid" id="roomsGrid"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="whatsapp-cta" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Ask about availability</a>
    </div></div>
  </section>

  <section class="gallery" id="gallery">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Gallery</span>
        <h2>Moments of the house.</h2>
        <p>Click any image to view it full-screen.</p>
      </div>
      <div class="gallery-grid" id="galleryGrid"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="whatsapp-cta" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Message us on WhatsApp</a>
    </div></div>
  </section>

  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Guest Stories</span>
        <h2>What our guests carry home.</h2>
        <p>Hover any quote to hear it told.</p>
      </div>
      <div class="testimonials-grid" id="testimonialsGrid"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="whatsapp-cta" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Join them — book your stay</a>
    </div></div>
  </section>

  <section class="faq" id="faq">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Good to Know</span>
        <h2>Frequently asked.</h2>
      </div>
      <div class="faq-list" id="faqList"></div>
    </div>
    <div class="container"><div class="section-cta">
      <a class="whatsapp-cta" href="${waLink()}" target="_blank" rel="noopener">${waIcon} Still have questions? Ask us</a>
    </div></div>
  </section>

  <section class="contact" id="contact">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">Contact & Reservations</span>
        <h2>Come stay with us.</h2>
        <p>Send us your dates and we'll reply within 24 hours with availability and a personal note.</p>
      </div>
      <div class="contact-grid">
        <div class="contact-info reveal">
          <h3>Riad BE Marrakech</h3>
          <div class="info-row">
            <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></div>
            <div><div class="label">Address</div><div class="val">23, Derb Sidi Lahcen Ou Ali, Bab Doukkala, 40030 Marrakech</div></div>
          </div>
          <div class="info-row">
            <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div><div class="label">Phone / WhatsApp</div><div class="val">+212 670 364 105</div></div>
          </div>
          <div class="info-row">
            <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></div>
            <div><div class="label">Email</div><div class="val">beincontact@be-marrakech.com</div></div>
          </div>
          <div class="info-row">
            <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
            <div><div class="label">Reception Hours</div><div class="val">24-hour front desk · Check-in 14:00 · Check-out 11:00</div></div>
          </div>
          <div class="contact-map">
            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-7.9996%2C31.6294%2C-7.9846%2C31.6394&layer=mapnik&marker=31.6344%2C-7.9921" loading="lazy" title="Riad BE Marrakech location map"></iframe>
          </div>
        </div>
        <div class="reservation reveal">
          <h3>Full Reservation Request</h3>
          <p class="form-sub">All fields marked are required. We never share your details.</p>
          ${reservationFormHTML('contact')}
          <label class="opt-in"><input type="checkbox" name="optin" /> Yes, I'd like to receive occasional messages about offers and seasonal stays.</label>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <span class="footer-brand">Riad BE Marrakech</span>
          <p>An authentic riad in the heart of the historical medina. Two riads, a spa, and a yoga studio — connected on the rooftop. BE in the moment.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg></a>
            <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#about">About</a>
          <a href="#rooms">Rooms & Suites</a>
          <a href="#gallery">Gallery</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Stay</h4>
          <a href="#contact">Reservations</a>
          <a href="#contact">Spa & Hammam</a>
          <a href="#contact">Dining</a>
          <a href="#contact">Tours</a>
        </div>
        <div>
          <h4>Reach Us</h4>
          <a>Bab Doukkala, Marrakech</a>
          <a>+212 670 364 105</a>
          <a>beincontact@be-marrakech.com</a>
          <a>Reception 24/7</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Riad BE Marrakech. All rights reserved.</span>
        <span>Privacy · Terms · Crafted with care in Marrakech</span>
      </div>
    </div>
  </footer>

  <a class="whatsapp-fab" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${waIcon}</a>

  <div class="modal-overlay" id="modalOverlay">
    <div class="modal" id="modal"></div>
  </div>

  <div class="lightbox" id="lightbox">
    <button class="lightbox-close" id="lightboxClose">×</button>
    <button class="lightbox-nav prev" id="lbPrev">‹</button>
    <img id="lightboxImg" src="" alt="" />
    <button class="lightbox-nav next" id="lbNext">›</button>
    <div class="lightbox-counter" id="lbCounter"></div>
  </div>
`

// ---------- Render rooms ----------
const roomsGrid = document.getElementById('roomsGrid')
ROOMS.forEach((r, i) => {
  const card = document.createElement('div')
  card.className = 'room-card reveal'
  card.innerHTML = `
    <div class="room-img">
      <img src="${r.images[0]}" alt="${r.name}" />
      <span class="room-tag">${r.tag}</span>
    </div>
    <div class="room-body">
      <h3>${r.name}</h3>
      <p>${r.desc}</p>
      <div class="room-meta">
        <div class="price">${r.price} <span>/ night</span></div>
        <a class="view-link" href="#">View details →</a>
      </div>
    </div>
  `
  card.addEventListener('click', () => openRoomModal(i))
  roomsGrid.appendChild(card)
})

// ---------- Render gallery ----------
const galleryGrid = document.getElementById('galleryGrid')
const galleryClasses = ['', 'tall', 'wide', '', 'tall', '', 'wide', '']
GALLERY_IMAGES.forEach((src, i) => {
  const item = document.createElement('div')
  item.className = 'gallery-item reveal ' + (galleryClasses[i] || '')
  item.innerHTML = `
    <img src="${src}" alt="Riad Dar Zitoun — gallery image ${i + 1}" />
    <span class="zoom-hint">⤢</span>
  `
  item.addEventListener('click', () => openLightbox(i))
  galleryGrid.appendChild(item)
})

// ---------- Render testimonials ----------
const testimonialsGrid = document.getElementById('testimonialsGrid')
TESTIMONIALS.forEach((t) => {
  const card = document.createElement('div')
  card.className = 'testimonial-card reveal'
  card.innerHTML = `
    <p class="testimonial-quote" data-full="${t.quote.replace(/"/g, '&quot;')}"></p>
    <div class="testimonial-person">
      <img src="${t.photo}" alt="${t.name}" />
      <div>
        <div class="name">${t.name}</div>
        <div class="role">${t.role}</div>
      </div>
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

// ---------- Room modal ----------
const modalOverlay = document.getElementById('modalOverlay')
const modal = document.getElementById('modal')
let currentSlide = 0

function openRoomModal(idx) {
  const r = ROOMS[idx]
  currentSlide = 0
  modal.innerHTML = `
    <button class="modal-close" id="modalClose">×</button>
    <div class="modal-slider" id="modalSlider">
      ${r.images.map((src, i) => `<div class="slide ${i === 0 ? 'active' : ''}"><img src="${src}" alt="${r.name} ${i + 1}" /></div>`).join('')}
      <button class="slider-nav prev" id="slidePrev">‹</button>
      <button class="slider-nav next" id="slideNext">›</button>
      <div class="slider-dots" id="sliderDots">
        ${r.images.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" data-i="${i}"></button>`).join('')}
      </div>
    </div>
    <div class="modal-body">
      <span class="room-tag-inline">${r.tag}</span>
      <h3>${r.name}</h3>
      <p>${r.desc}</p>
      <div class="modal-amenities">
        ${r.amenities.map((a) => `<span>${a}</span>`).join('')}
      </div>
      <p>The room features traditional tadelakt walls, hand-laid zellige tiling, and cedar mashrabiya screens. Each morning, breakfast is served on the rooftop or in the courtyard, weather permitting.</p>
      <div class="modal-price-row">
        <div class="price">${r.price} <span>/ night</span></div>
        <a class="whatsapp-cta" href="${waLink(`Hello, I'd like to book the ${r.name}.`)}" target="_blank" rel="noopener">${waIcon} Book this room</a>
      </div>
    </div>
  `
  modalOverlay.classList.add('show')
  document.body.style.overflow = 'hidden'

  document.getElementById('modalClose').addEventListener('click', closeModal)
  document.getElementById('slidePrev').addEventListener('click', () => slideRoom(r, -1))
  document.getElementById('slideNext').addEventListener('click', () => slideRoom(r, 1))
  document.querySelectorAll('#sliderDots .dot').forEach((d) =>
    d.addEventListener('click', (e) => goToSlide(r, parseInt(e.currentTarget.dataset.i)))
  )
}

function slideRoom(r, dir) {
  currentSlide = (currentSlide + dir + r.images.length) % r.images.length
  updateSlider()
}
function goToSlide(r, i) {
  currentSlide = i
  updateSlider()
}
function updateSlider() {
  document.querySelectorAll('#modalSlider .slide').forEach((s, i) => s.classList.toggle('active', i === currentSlide))
  document.querySelectorAll('#sliderDots .dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide))
}

function closeModal() {
  modalOverlay.classList.remove('show')
  document.body.style.overflow = ''
}
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal() })

// ---------- Gallery lightbox ----------
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightboxImg')
const lbCounter = document.getElementById('lbCounter')
let lbIndex = 0

function openLightbox(i) {
  lbIndex = i
  updateLightbox()
  lightbox.classList.add('show')
  document.body.style.overflow = 'hidden'
}
function updateLightbox() {
  lightboxImg.src = GALLERY_IMAGES[lbIndex]
  lbCounter.textContent = `${lbIndex + 1} / ${GALLERY_IMAGES.length}`
}
function lbNav(dir) {
  lbIndex = (lbIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
  updateLightbox()
}
document.getElementById('lightboxClose').addEventListener('click', () => { lightbox.classList.remove('show'); document.body.style.overflow = '' })
document.getElementById('lbPrev').addEventListener('click', () => lbNav(-1))
document.getElementById('lbNext').addEventListener('click', () => lbNav(1))
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) { lightbox.classList.remove('show'); document.body.style.overflow = '' } })

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

// ---------- Reservation form validation ----------
document.querySelectorAll('.reservation-form').forEach((form) => {
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
      else bad = !input.value.trim()
      field.classList.toggle('invalid', bad)
      if (bad) valid = false
    })
    // check-out after check-in
    const ci = form.querySelector('input[name="checkin"]')
    const co = form.querySelector('input[name="checkout"]')
    if (ci && co && ci.value && co.value && co.value <= ci.value) {
      co.closest('.field').classList.add('invalid')
      valid = false
    }
    if (valid) {
      form.querySelector('.form-success').classList.add('show')
      form.reset()
      setTimeout(() => form.querySelector('.form-success').classList.remove('show'), 5000)
    }
  })
  // live clear error
  form.querySelectorAll('input, textarea, select').forEach((input) => {
    input.addEventListener('input', () => input.closest('.field').classList.remove('invalid'))
  })
})

// ---------- Header scroll ----------
const header = document.getElementById('header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40)
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
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
