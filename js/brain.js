"use strict";

document.addEventListener("DOMContentLoaded", function () {

    
      const pinkElement = document.getElementById("st1");
      const orangeElement = document.getElementById("st3");
      const greenElement = document.getElementById("st4");
      const yellowElement = document.getElementById("st5");
      const blueElement = document.getElementById("st6");

      const newDiv = document.getElementById("brain-tekst");

      pinkElement.addEventListener("click", function () {
        newDiv.innerHTML = `
          <h1 id="st-tekst">Anterior Cingulate Cortex</h1>
          <p id="st-p">Denne del føler smerte..</p>
          <p id="st-p">Når PMS er på spil, kan selv små ting føles værre.</p>
        `;
      });

      blueElement.addEventListener("click", function () {
        newDiv.innerHTML = `
          <h1 id="st-tekst">Præfrontal Cortex</h1>
          <p id="st-p">Denne del hjælper dig med at tænke og planlægge.</p>
          <p id="st-p">Under PMS kan den være træt - så du bliver let forvirret.</p>
        `;
      });
    });