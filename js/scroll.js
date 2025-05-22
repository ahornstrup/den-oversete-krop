"use strict";

// Initial DOM references
let red = document.getElementById("red-bubble");
let orange = document.getElementById("orange-bubble");

let krop = document.getElementById("krop-video");
let krop_reverse = document.getElementById("krop-video-reverse");

let down = document.getElementById("scroll-down");

const circle1 = document.getElementById("circle-one");
const circle2 = document.getElementById("circle-two");
const circle3 = document.getElementById("circle-three");
const circle4 = document.getElementById("circle-four");

document.addEventListener("DOMContentLoaded", () => {
  const brainSection = document.getElementById("brain");
  const heartSection = document.getElementById("heart");
  const stomachSection = document.getElementById("stomach");
  const uterusSection = document.getElementById("uterus");

  let hasPlayed = false;

  // Heart section animation
  const heartObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          krop.style.transform = `scale(1.1) translateY(-700px)`;
          red.style.transform = `translateY(400px) translateX(400px)`;
          orange.style.transform = `translateY(200px) translateX(-600px)`;
          down.style.opacity = `0`;
          circle1.style.backgroundColor = '#fa8787';        
          circle2.style.backgroundColor = 'white';  
        }
      });
    },
    { threshold: 0.5 }
  );
  heartObserver.observe(heartSection);

  // Stomach section video + animation
  const stomachObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          krop.play();
          krop.style.transform = `scale(1) translateY(-1400px)`;
          red.style.transform = `translateY(100px) translateX(100px)`;
          orange.style.transform = `translateY(0px) translateX(-400px)`;
          down.style.opacity = `0`;
          circle1.style.backgroundColor = '#fa8787';        
          circle2.style.backgroundColor = '#fa8787';        
          circle3.style.backgroundColor = 'white';  
          hasPlayed = true;
        }
      });
    },
    { threshold: 0.5 }
  );
  stomachObserver.observe(stomachSection);

  // Uterus section video + animation
  const uterusObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          krop.style.transform = `scale(1) translateY(-1800px)`;
          down.style.opacity = `0`;
          circle1.style.backgroundColor = '#fa8787';        
          circle3.style.backgroundColor = '#fa8787';        
          circle4.style.backgroundColor = 'white';  

          if (!hasPlayed) {
            krop.play();
            hasPlayed = true;
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  uterusObserver.observe(uterusSection);

  // === Scroll blocking logic ===
  let lastScrollTop = window.scrollY || window.pageYOffset;

  // Block upward scrolling on mouse wheel
  window.addEventListener(
    "wheel",
    (e) => {
      if (e.deltaY < 0) {
        // Trying to scroll up — prevent it immediately
        e.preventDefault();
        window.scrollTo(0, lastScrollTop);
      } else {
        // Scrolling down — update last scroll position
        lastScrollTop = window.scrollY || window.pageYOffset;
      }
    },
    { passive: false }
  );

  // For touch devices — block upward swipe scroll
  let touchStartY = 0;
  window.addEventListener(
    "touchstart",
    (e) => {
      touchStartY = e.touches[0].clientY;
    },
    { passive: false }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      const touchCurrentY = e.touches[0].clientY;
      if (touchCurrentY > touchStartY) {
        // Trying to scroll up — prevent it immediately
        e.preventDefault();
        window.scrollTo(0, lastScrollTop);
      } else {
        // Scrolling down — update last scroll position
        lastScrollTop = window.scrollY || window.pageYOffset;
      }
    },
    { passive: false }
  );
});

