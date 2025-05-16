'use strict';

const tekster = {
  'info-1': document.getElementById('infotekst-1'),
  'info-2': document.getElementById('infotekst-2'),
  'info-3': document.getElementById('infotekst-3'),
  'info-4': document.getElementById('infotekst-4')
};

let aktivTekst = null;

// Klik på en af info-knapperne → vis den tilhørende tekst
Object.keys(tekster).forEach((id) => {
  const ikon = document.getElementById(id);
  const tekst = tekster[id];

  ikon.addEventListener('click', (event) => {
    event.stopPropagation(); // Undgå at body-klikket trigger

    // Skjul evt. anden aktiv tekst først
    if (aktivTekst && aktivTekst !== tekst) {
      aktivTekst.classList.remove('aktiv');
    }

    // Toggle teksten (hvis samme klik gentages)
    const erAlleredeAktiv = tekst.classList.contains('aktiv');
    tekst.classList.toggle('aktiv', !erAlleredeAktiv);

    aktivTekst = !erAlleredeAktiv ? tekst : null;
  });
});

// Klik et andet sted → skjul aktiv tekst
document.body.addEventListener('click', () => {
  if (aktivTekst) {
    aktivTekst.classList.remove('aktiv');
    aktivTekst = null;
  }
});
