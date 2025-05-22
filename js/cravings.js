"use strict"
document.querySelectorAll("figure").forEach(figure => {
    figure.addEventListener("click", () => {
      const popupId = figure.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      popup.classList.remove("hidden");
  
      // Luk popup når man klikker udenfor boksen
      popup.addEventListener("click", function outsideClick(e) {
        if (e.target === popup) {
          popup.classList.add("hidden");
          popup.removeEventListener("click", outsideClick);
        }
      });
  
      // Luk popup via knap
      const closeButton = popup.querySelector(".close-button");
      closeButton.addEventListener("click", () => {
        popup.classList.add("hidden");
      }, { once: true });
    });
  });
  
