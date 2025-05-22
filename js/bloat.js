"use strict";

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const img = document.getElementById('bloated-img');
      img.style.transformOrigin = 'left center';
  
      img.animate([
        // starter langt ude til venstre og helt gennemsigtig
        { transform: 'translateX(0px)', opacity: 0, offset: 0 },
        // lander tilbage på plads
        { transform: 'translateX(0)',      opacity: 1,   offset: 1   }
      ], {
        duration: 1000,
        easing: 'cubic-bezier(0.10, 0.30, 0.50, 0.99)',
        fill: 'forwards'
      });
    }, 1000);
  });
  


    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        const lyd = document.getElementById("minLyd");
        lyd.play().catch((e) => {
          console.warn("Lyd kunne ikke afspilles automatisk:", e);
        });
      }, 1000); // 1000 ms = 1 sekund
    });