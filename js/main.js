// ============================================================
// TYPE GROUP — Main JavaScript
// typegroup.com.co
// ============================================================

// ── Theme Toggle ─────────────────────────────────────────────
(function () {
  const saved = localStorage.getItem('tg-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('tg-theme', next);
}

document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});

const WA_NUMBER = '573053270131';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

// ── WhatsApp helpers ─────────────────────────────────────────
function waLink(msg = '¡Hola! Me interesa conocer más sobre sus productos.') {
  return `${WA_BASE}?text=${encodeURIComponent(msg)}`;
}

// ── Navbar scroll effect ─────────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Mobile nav toggle ────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    const isOpen = navMobile.classList.contains('open');
    spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = isOpen ? '0' : '1';
    spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
  // Close on link click
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMobile.classList.remove('open'));
  });
}

// ── Scroll fade-in animations ────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── WhatsApp float button ────────────────────────────────────
const waFloat = document.getElementById('waFloat');
if (waFloat) {
  waFloat.href = waLink();
}

// ── Active nav link ──────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
  const href = a.getAttribute('href');
  if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
    a.classList.add('active');
  }
});

// ── Distributor form ─────────────────────────────────────────
const distForm = document.getElementById('distForm');
if (distForm) {
  distForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(distForm);
    const nombre = data.get('nombre') || '';
    const empresa = data.get('empresa') || '';
    const ciudad = data.get('ciudad') || '';
    const telefono = data.get('telefono') || '';
    const interes = data.get('interes') || '';

    const msg = `¡Hola! Me interesa ser distribuidor de Type Group.\n\n` +
      `👤 Nombre: ${nombre}\n` +
      `🏢 Empresa: ${empresa}\n` +
      `📍 Ciudad: ${ciudad}\n` +
      `📞 Teléfono: ${telefono}\n` +
      `📦 Interés: ${interes}`;

    window.open(waLink(msg), '_blank');
  });
}

// ── Contact form ─────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const nombre = data.get('nombre') || '';
    const telefono = data.get('telefono') || '';
    const producto = data.get('producto') || '';
    const mensaje = data.get('mensaje') || '';

    const msg = `¡Hola! Quiero más información.\n\n` +
      `👤 Nombre: ${nombre}\n` +
      `📞 Teléfono: ${telefono}\n` +
      `📦 Producto: ${producto}\n` +
      `💬 Mensaje: ${mensaje}`;

    window.open(waLink(msg), '_blank');
  });
}
