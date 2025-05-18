"use strict"

let heart = document.getElementById("heart-image");

 document.addEventListener("DOMContentLoaded", () => {
  
     window.addEventListener("scroll", () => {
       const scrollPosition = window.scrollY + window.innerHeight;
       const pageHeight = document.documentElement.scrollHeight;
       const scrollPercent = scrollPosition / pageHeight;

       if (scrollPercent >= 0.45) {
        heart.style.opacity = "1";
       } 
     });
   });


document.addEventListener("DOMContentLoaded", () => {
  const firstButton = document.querySelector('.circle-button:nth-of-type(1)');
  const heartImage = document.getElementById('heart-image');

  firstButton.addEventListener('mouseenter', () => {
    heartImage.classList.add('pulsing');
  });

  firstButton.addEventListener('mouseleave', () => {
    heartImage.classList.remove('pulsing');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const firstButton = document.querySelector('.circle-button:nth-of-type(2)');
  const heartImage = document.getElementById('heart-image');

  firstButton.addEventListener('mouseenter', () => {
    heartImage.classList.add('pulsing-fast');
  });

  firstButton.addEventListener('mouseleave', () => {
    heartImage.classList.remove('pulsing-fast');
  });
});