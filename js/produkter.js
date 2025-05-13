'use strict';

const produkter = document.querySelectorAll('.produkter');
const produktInfo = document.getElementById('produkt-info');
const forside = document.getElementById('forside');
const tilbage = document.getElementById('tilbage');

const produktBillede = document.getElementById('produkt-billede');
const fordele = document.getElementById('produkt-fordele');
const ulemper = document.getElementById('produkt-ulemper');
const miljoe = document.getElementById('miljoe');
const bedstTil = document.getElementById('bedst-til');

// Dummy data – her skal du selv udfylde alt efter produkt
const data = {
  bind: {
    billede: 'img/produkter/bind.webp',
    fordele: 'Nem at bruge og kræver ingen indsættelse.',
    ulemper: 'Skal skiftes hver 3-4 time.',
    miljoe: 'Engangsbind genererer meget affald.',
    bedstTil: 'Bedst til dig, der bløder meget.'
  },
  tampon: {
    billede: 'img/produkter/tampon.webp',
    fordele: 'Diskret og god til sport.',
    ulemper: 'Kan give tørhed.',
    miljoe: 'Ikke bionedbrydelig.',
    bedstTil: 'God til aktive personer.'
  },
  // tilføj de andre her...
};

produkter.forEach(produkt => {
  produkt.addEventListener('click', () => {
    const id = produkt.dataset.product;
    const info = data[id];

    if (info) {
      produktBillede.src = info.billede;
      fordele.textContent = info.fordele;
      ulemper.textContent = info.ulemper;
      miljoe.textContent = info.miljoe;
      bedstTil.textContent = info.bedstTil;
    }

    forside.classList.add('hidden');
    produktInfo.classList.remove('hidden');
  });
});

tilbage.addEventListener('click', () => {
  produktInfo.classList.add('hidden');
  forside.classList.remove('hidden');
});
