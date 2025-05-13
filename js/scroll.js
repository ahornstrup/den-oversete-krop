"use strict";

let red = document.getElementById("red-bubble");
let orange = document.getElementById("orange-bubble");

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("krop-video");
    let hasPlayed = false;
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollPosition / pageHeight;

      if (scrollPercent >= 0.4) {
        red.style.transform = `translateY(700px) translateX(300px)`;
      }
  
      if (scrollPercent >= 0.4 && !hasPlayed) {
        video.style.transform = `scale(${1.05})`;
      }

      if (scrollPercent >= 0.5) {
        orange.style.transform = `translateY(700px) translateX(-700px)`;
      }
      
      if (scrollPercent >= 0.6 && !hasPlayed) {
        video.play();
        video.style.transform = `scale(1.1) translateY(300px)`;
        hasPlayed = true;
      }

      if (scrollPercent >= 0.7) {
        red.style.transform = `translateY(1400px) translateX(600px)`;
      }

      if (scrollPercent >= 0.7) {
        orange.style.transform = `translateY(1000px) translateX(-300px)`;
      }
  
      if (scrollPercent >= 0.8) {
        video.style.transform = `scale(1.1) translateY(500px)`;
      }

      if (scrollPercent >= 0.8) {
        orange.style.transform = `translateY(2000px) translateX(-300px)`;
      }
    });
  });


