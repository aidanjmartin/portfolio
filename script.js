// ============================================================
// Aidan J Martin — Portfolio Interactions
// ============================================================

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    const expanded = nav.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', expanded);
  });

  // Close nav when clicking a link
  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal animation
const revealTargets = document.querySelectorAll(
  '.section, .focus-card, .project-card, .mini-card, .timeline-item, .award-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

revealTargets.forEach(el => revealObserver.observe(el));

// Gallery: clicking a thumbnail swaps the main media (img <-> iframe)
document.querySelectorAll('.project-gallery').forEach(gallery => {
  const card = gallery.closest('.project-card, .mini-card');
  if (!card) return;
  const media = card.querySelector('.project-media, .mini-media');
  if (!media) return;

  gallery.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const { type, src } = thumb.dataset;
      let newEl;
      
      if (type === 'video') {
        newEl = document.createElement('iframe');
        newEl.src = src;
        newEl.title = 'Video';
        newEl.loading = 'lazy';
        newEl.setAttribute('frameborder', '0');
        newEl.setAttribute(
          'allow',
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        );
        newEl.setAttribute('allowfullscreen', '');
      } else {
        newEl = document.createElement('img');
        newEl.src = src;
        newEl.alt = '';
        newEl.loading = 'lazy';
      }
      
      media.replaceChildren(newEl);
      gallery.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});

// Lightbox for images
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('.lightbox-img');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  const img = e.target.closest('.project-media img, .mini-media img');
  if (img) {
    e.preventDefault();
    e.stopPropagation();
    openLightbox(img.src, img.alt);
    return;
  }
  
  if (e.target === lightbox || e.target === lightboxImg || e.target === lightboxClose) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Smooth scroll with offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});
