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
             <main>
        <h1>Ægløsning</h1>
        <video src="video/image 12.webm" autoplay muted loop></video>
            <img id="info-1" src="img/ovu-01.svg" alt="Knap 1">
            <img id="info-2" src="img/ovu-2.svg" alt="Knap 2">
            <img id="info-3" src="img/ovu-3.svg" alt="Knap 3">
            <img id="info-4" src="img/ovu-04.svg" alt="Knap 4">

          
            <p id="infotekst-1">Der er to æggestokke – én på hver side af livmoderen. De indeholder en masse små umodne æg fra fødslen.</p>
            <p id="infotekst-2">Ved hver menstruationscyklus modnes ét æg i en lille "bobbel" kaldet en follikel.</p>
            <p id="infotekst-3">Omkring midt i cyklussen sker ægløsning. Folliklen sprænger, og ægget frigives fra æggestokken.</p>
            <p id="infotekst-4">Ægget bliver fanget af æggelederen og begynder sin rejse mod livmoderen.</p>
    </main>
        </article>
      `;
      krop.style.transform = `scale(1.3) translateX(250px) translateY(-1300px)`;

    } else if (clickedId === "uterusthird") {
      newDiv.innerHTML = `
        <article class="livmoder" id="uterusfourth">
             <main>
        <video src="video/image 12.webm" autoplay muted loop></video>
        <article class="uterus-article fourth">
                <h1>Menstruation</h1>

              <h2>Hvis ingen befrugtning sker, går ægget til grunde og udskilles sammen med slimhinden under menstruationen.</h2>
            </article>
    </main>
        </article>
      `;
      krop.style.transform = `scale(1.3) translateX(250px) translateY(-1300px)`;

    } else if (clickedId === "uterusfourth") {
      newDiv.innerHTML = `
        <article class="livmoder fifth" id="uterusfifth">
             <main>
        <article class="uterus-img">
              <img src="img/flow.webp" alt="Livmoder">
            </article>

            <section class="fifth-column">
    <section class="cyklus">
    <h5>Menstruation</h5>
    <h6>En menstruation varer i gennemsnit 3-7 dage.</h6>
        <h6>Efter blødningen starter cyklussen forfra.</h6>

        <a href="#" id="seCyklusLink"><h4>Se en cyklus</h4></a>
        <video src="video/menstruation.webm" autoplay muted loop></video>

    </section>

    <section class="endometriose">
       <section class="endometriose-tekst">
        <h5>Ved du hvad endometriose er ?</h5>
        <h6>(Det tror vi i hvert fald ikke)</h6>
    </section>
        <a href="endometriose.html"><h4>Læs om det her!</h4></a>
    </section>
        </section>

    </main>
        </article>
      `;
      krop.style.transform = `scale(1.3) translateX(250px) translateY(-1300px)`;

      // Wait for DOM to update and then add event listener
setTimeout(() => {
  const link = document.getElementById("seCyklusLink");
  const video = newDiv.querySelector('video[src="video/menstruation.webm"]');

  if (link && video) {
    video.style.display = "none"; // Hide video initially

    link.addEventListener("click", (e) => {
      e.preventDefault();
      video.style.display = "block";
      video.play();
    });
  }
}, 0);

    }

// Genindsæt popup-eventhandlers
const tekster = {
    'info-1': document.getElementById('infotekst-1'),
    'info-2': document.getElementById('infotekst-2'),
    'info-3': document.getElementById('infotekst-3'),
    'info-4': document.getElementById('infotekst-4')
  };
  
  let aktivTekst = null;
  
  Object.keys(tekster).forEach((id) => {
    const ikon = document.getElementById(id);
    const tekst = tekster[id];
  
    ikon.addEventListener('click', (event) => {
      event.stopPropagation(); // Undgå at body-klikket trigger
  
      if (aktivTekst && aktivTekst !== tekst) {
        aktivTekst.classList.remove('aktiv');
      }
  
      const erAlleredeAktiv = tekst.classList.contains('aktiv');
      tekst.classList.toggle('aktiv', !erAlleredeAktiv);
  
      aktivTekst = !erAlleredeAktiv ? tekst : null;
    });
  });
  
  document.body.addEventListener('click', () => {
    if (aktivTekst) {
      aktivTekst.classList.remove('aktiv');
      aktivTekst = null;
    }
  });
  
  });
});
