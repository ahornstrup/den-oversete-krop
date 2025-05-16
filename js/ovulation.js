'use strict';

const tekst = document.getElementById('infotekst-1');

  let erAktiv = false;

    document.body.addEventListener('click', () => {
    erAktiv = !erAktiv;
    tekst.classList.toggle('aktiv', erAktiv);
});