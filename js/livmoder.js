"use strict";

document.addEventListener("DOMContentLoaded", function () {

    
      const uterus = document.getElementById("livmoder");
      const uterusTwo = document.getElementById("uterustwo");
      const uterusThird = document.getElementById("uterusthird");

      const newDiv = document.getElementById("uterus");

      uterus.addEventListener("click", function () {
        newDiv.innerHTML = `
          <article class="uterus-img" id="uterustwo">
              <img src="img/flow.webp" alt="Livmoder">
            </article>
            <article class="uterus-article">
              <h1>Livmoder</h1>
              <h2>Hver måned forbereder livmoderen sig på en mulig graviditet.</h2>
              <img id="pil" src="img/pil.svg" alt="vejledende pil">
            </article>
        `;
      });

      uterusTwo.addEventListener("click", function () {
        newDiv.innerHTML = `
          <article class="uterus-img" id="uterusthird">
              <img src="img/flow.webp" alt="Livmoder">
            </article>
            <article class="uterus-article">
              <h1>Uterus</h1>
              <h2>Hver måned forbereder livmoderen sig på en mulig graviditet.</h2>
              <img id="pil" src="img/pil.svg" alt="vejledende pil">
            </article>
        `;
      });

    });

    