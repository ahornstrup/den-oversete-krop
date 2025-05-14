"use strict";

let red = document.getElementById("red-bubble");
let orange = document.getElementById("orange-bubble");
let krop = document.getElementById("krop-video");
let krop_reverse = document.getElementById("krop-video-reverse");

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("krop-video");
    let hasPlayed = false;
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollPosition / pageHeight;

      if (scrollPercent >= 0.4) {
        red.style.transform = `translateY(700px) translateX(300px)`;
      } if (scrollPercent >= 0.4 && !hasPlayed) {
        video.style.transform = `scale(${1.05})`;
      } if (scrollPercent >= 0.5) {
        orange.style.transform = `translateY(700px) translateX(-700px)`;
      } if (scrollPercent >= 0.6 && !hasPlayed) {
        video.play();
        video.style.transform = `scale(1.1) translateY(300px)`;
        hasPlayed = true;
       if (scrollPercent >= 0.7) {
      krop.style.display = "none";
    } else {
      krop_reverse.style.display = "block";
    }
      } if (scrollPercent >= 0.7) {
        red.style.transform = `translateY(1400px) translateX(600px)`;
      }  if (scrollPercent >= 0.7) {
        orange.style.transform = `translateY(1000px) translateX(-300px)`;
      } if (scrollPercent >= 0.8) {
        video.style.transform = `scale(1.1) translateY(500px)`;
      } if (scrollPercent >= 0.8) {
        orange.style.transform = `translateY(2000px) translateX(-300px)`;
      }
    });
  });

  

// MÅSKE EN LØSNING

// let red = document.getElementById("red-bubble");
// let orange = document.getElementById("orange-bubble");
// let krop = document.getElementById("krop-video");
// let krop_reverse = document.getElementById("krop-video-reverse");

// document.addEventListener("DOMContentLoaded", () => {
//   let lastScrollY = window.scrollY;
//   let hasPlayedForward = false;
//   let hasPlayedReverse = false;

//   window.addEventListener("scroll", () => {
//     const currentScrollY = window.scrollY;
//     const scrollingDown = currentScrollY > lastScrollY;
//     const scrollPosition = currentScrollY + window.innerHeight;
//     const pageHeight = document.documentElement.scrollHeight;
//     const scrollPercent = scrollPosition / pageHeight;

//     // Transformations (keep as you had them)
//     if (scrollPercent >= 0.4) {
//       red.style.transform = `translateY(700px) translateX(300px)`;
//     }
//     if (scrollPercent >= 0.4) {
//       krop.style.transform = `scale(1.05)`;
//     }
//     if (scrollPercent >= 0.5) {
//       orange.style.transform = `translateY(700px) translateX(-700px)`;
//     }
//     if (scrollPercent >= 0.6) {
//       krop.style.transform = `scale(1.1) translateY(300px)`;
//     }
//     if (scrollPercent >= 0.7) {
//       red.style.transform = `translateY(1400px) translateX(600px)`;
//       orange.style.transform = `translateY(1000px) translateX(-300px)`;
//     }
//     if (scrollPercent >= 0.8) {
//       krop.style.transform = `scale(1.1) translateY(500px)`;
//       orange.style.transform = `translateY(2000px) translateX(-300px)`;
//     }

//     // Play appropriate video based on scroll direction
//     if (scrollPercent >= 0.6 && scrollPercent < 0.9) {
//       if (scrollingDown && !hasPlayedForward) {
//         krop.style.display = "block";
//         krop_reverse.style.display = "none";
//         krop.currentTime = 0;
//         krop.play();
//         hasPlayedForward = true;
//         hasPlayedReverse = false;
//       } else if (!scrollingDown && !hasPlayedReverse) {
//         krop.style.display = "none";
//         krop_reverse.style.display = "block";
//         krop_reverse.currentTime = 0;
//         krop_reverse.play();
//         hasPlayedReverse = true;
//         hasPlayedForward = false;
//       }
//     }

//     lastScrollY = currentScrollY;
//   });
// });

