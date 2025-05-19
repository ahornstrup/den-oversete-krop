"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const newDiv = document.getElementById("uterus");
  const krop = document.getElementById("krop-video");

  newDiv.addEventListener("click", function (event) {
    const clickedId = event.target.closest("article")?.id;

    if (clickedId === "livmoder") {
      newDiv.innerHTML = `
        <article class="livmoder" id="uterustwo">
            <article class="uterus-img">
              <img src="img/flow.webp" alt="Livmoder">
            </article>
            <article class="uterus-article">
              <h1>Endometriet</h1>
              <h2>Det sker ved, at slimhinden i livmoderen bliver tykkere og mere blodfyldt, så et befrugtet æg kan sætte sig fast der.</h2>
        <img id="pil" src="img/pil-endometriet.svg" alt="vejledende pil">
            </article>
        </article>
      `;
      krop.style.transform = `translateX(300px) translateY(-1800px)`;
    } else if (clickedId === "uterustwo") {
      newDiv.innerHTML = `
        <article class="livmoder" id="uterusthird">
            <article class="uterus-img">
              <img src="img/flow.webp" alt="Livmoder">
            </article>
            <article class="uterus-article">
              <h1>Livmoderen3</h1>
              <h2>Tredje visning</h2>
              <img id="pil" src="img/pil.svg" alt="vejledende pil">
            </article>
        </article>
      `;
    }
  });
});
