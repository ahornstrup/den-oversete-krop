'use strict';

const produkter = document.querySelectorAll(".produkter");

produkter.forEach(produkt => {
  produkt.addEventListener("click", () => {
    const navn = produkt.getAttribute("data-product");
    
    // Luk alle andre popups først
    lukAllePopups();

    // Vis den korrekte popup + overlay
    const popup = document.getElementById(`popup-${navn}`);
    if (popup) {
      popup.style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }
  });
});

function lukAllePopups() {
  document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
  document.getElementById("overlay").style.display = "none";
}
