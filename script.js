// ============================================================
// Aidan J Martin — portfolio interactions
// ============================================================

// Replace broken project images with a styled placeholder block.
window.placeholderMedia = function (label) {
  const div = document.createElement('div');
  div.className = 'placeholder-media';
  div.textContent = label || 'media coming soon';
  return div;
};

// Reveal sections on scroll.
const revealTargets = document.querySelectorAll(
  '.section, .focus-card, .project-card, .mini-card, .timeline-item'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealTargets.forEach((el) => io.observe(el));

// Gallery: clicking a thumbnail swaps the main media (img <-> iframe).
document.querySelectorAll('.thumb-strip').forEach((strip) => {
  const card = strip.closest('.project-card, .mini-card');
  if (!card) return;
  const media = card.querySelector('.project-media, .mini-media');
  if (!media) return;

  strip.querySelectorAll('.thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const { type, src, alt } = thumb.dataset;
      let newEl;
      if (type === 'video') {
        newEl = document.createElement('iframe');
        newEl.src = src;
        newEl.title = alt || 'video';
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
        newEl.alt = alt || '';
        newEl.loading = 'lazy';
      }
      media.replaceChildren(newEl);
      strip.querySelectorAll('.thumb').forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});

// Lightbox: click any project image (not iframe) to expand.
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

// Smooth-scroll offset for sticky nav.
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});
