'use strict';

// produkter.js

// Find alle produkter (billeder med class 'produkter')
const produkter = document.querySelectorAll(".produkter");

// Loop igennem og tilføj klik-event til hver
produkter.forEach(produkt => {
  produkt.addEventListener("click", () => {
    // Hent produktnavnet fra data-attributten
    const navn = produkt.getAttribute("data-product");

    // Find popup og sæt tekst dynamisk
    const popup = document.getElementById("popup");
    popup.innerHTML = `
      <p>Du klikkede på: <strong>${navn}</strong> 💖</p>
      <button onclick="lukPopup()">Luk</button>
    `;

    // Vis popup og overlay
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });
});

// Funktion til at lukke popup
function lukPopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

