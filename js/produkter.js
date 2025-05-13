'use strict';

const produkter = document.querySelectorAll('.produkter');
const forside = document.getElementById('forside');
const infoSide = document.getElementById('produkt-info');
const tilbageBtn = document.getElementById('tilbage');

produkter.forEach(produkt => {
  produkt.addEventListener('click', () => {
    forside.classList.add('hidden');
    infoSide.classList.remove('hidden');

    // Skift indhold dynamisk her
    document.getElementById('produkt-navn').textContent = produkt.dataset.product;
    document.getElementById('produkt-billede').src = produkt.src;

    // Eksempel på tekstindsætning
    // Du kan bruge et objekt med data ligesom før
    // og fylde fordele/ulemper ud
  });
});

tilbageBtn.addEventListener('click', () => {
  infoSide.classList.add('hidden');
  forside.classList.remove('hidden');
});
