/**
 * PORTFOLIO WEBSITE JAVASCRIPT
 * สาขาวิชาสื่อนฤมิต (Creative Media Portfolio)
 * Features:
 *  - Sticky Navbar on Scroll
 *  - Scroll Reveal Animations (IntersectionObserver)
 *  - Back-to-Top Button Handler
 *  - Interactive Image Lightbox Modal for Portfolio & Activity
 *  - Dynamic Active Navigation Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initBackToTop();
  initLightbox();
  initContactFormFeedback();
});

/* ----------------------------------------------------
   1. NAVBAR BEHAVIOR (Sticky & Scroll Effects)
---------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.custom-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Auto-close mobile menu when clicking outside or clicking a nav link
  const navCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/* ----------------------------------------------------
   2. SCROLL REVEAL ANIMATIONS
---------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target); // Reveal only once
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* ----------------------------------------------------
   3. BACK TO TOP BUTTON
---------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ----------------------------------------------------
   4. LIGHTBOX MODAL (For Portfolio & Activity Galleries)
---------------------------------------------------- */
function initLightbox() {
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxSubtext = document.getElementById('lightboxSubtext');
  const closeBtn = document.getElementById('lightboxCloseBtn');

  if (!lightboxModal || !lightboxImg) return;

  // Open Lightbox when clicking on any gallery card
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const img = card.querySelector('.gallery-thumb');
      const title = card.querySelector('.gallery-title')?.innerText || 'รูปภาพตัวอย่าง';
      const tag = card.querySelector('.gallery-tag')?.innerText || 'Creative Media';

      if (img) {
        lightboxImg.src = img.getAttribute('src');
        lightboxImg.alt = img.getAttribute('alt') || title;
        if (lightboxCaption) lightboxCaption.innerText = title;
        if (lightboxSubtext) lightboxSubtext.innerText = tag;

        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
      }
    });
  });

  // Close Lightbox functions
  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // Click on background backdrop to close
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ----------------------------------------------------
   5. CONTACT FORM INTERACTIVE FEEDBACK (Front-end Only)
---------------------------------------------------- */
function initContactFormFeedback() {
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (contactForm.checkValidity()) {
      if (formSuccessAlert) {
        formSuccessAlert.classList.remove('d-none');
        formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      contactForm.reset();
    } else {
      contactForm.classList.add('was-validated');
    }
  });
}

