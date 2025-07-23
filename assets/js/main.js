// main.js - DIGICLOAK Website Interactions

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Service section popups
  const serviceCards = document.querySelectorAll(".service-card");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const modalClose = document.querySelector(".modal-close");

  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").innerText;
      const details = card.getAttribute("data-details");
      modalContent.innerHTML = `<h2>${title}</h2><p>${details}</p>`;
      modal.classList.add("active");
    });
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
