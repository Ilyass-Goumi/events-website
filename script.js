const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileDropdown = document.getElementById("mobileDropdown");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

mobileDropdown.addEventListener("click", () => {
  mobileDropdown.classList.toggle("active");
});



// script for sec3
// Sélectionne les images cliquables
const zoomImages = document.querySelectorAll(".zoom-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

// Ouvrir l'image en grand
zoomImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

// Fermer la lightbox en cliquant sur le X
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Fermer en cliquant sur le fond noir
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});



// galerie
// === Filtrage des images ===
const filtreBtns = document.querySelectorAll('.filtre-btn');
const galerieItems = document.querySelectorAll('.galerie-item');

filtreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filtreBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    galerieItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.5s ease';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


// contacte
// Animation douce à l’apparition
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.contact-section');
  section.style.opacity = 0;
  section.style.transition = 'opacity 1s ease-in-out';
  setTimeout(() => { section.style.opacity = 1; }, 200);
});

// Message de confirmation lors de l’envoi du formulaire
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  form.reset();
});



