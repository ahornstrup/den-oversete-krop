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

      orangeElement.addEventListener("click", function () {
        newDiv.innerHTML = `
          <h1 id="st-tekst">Hypothalamus</h1>
          <p id="st-p">Denne del styrer kroppens hormoner og døgnrytme.</p>
    <p id="st-p">Under PMS kan den blive påvirket, så du føler dig træt, sulten eller har svært ved at sove.</p>
        `;
      });

      yellowElement.addEventListener("click", function () {
        newDiv.innerHTML = `
          <h1 id="st-tekst">Amygdala</h1>
          <p id="st-p">Denne del reagerer på følelser.</p>
          <p id="st-p">Den bliver lidt skør under PMS - og så kan man føle mere end normalt.</p>
        `;
      });

      greenElement.addEventListener("click", function () {
        newDiv.innerHTML = `
          <h1 id="st-tekst">Hippocampus</h1>
          <p id="st-p">Denne del husker ting. </p>
          <p id="st-p">PMS kan gøre det  sværere at huske og forstå følelser.</p>
        `;
      });


    });

    