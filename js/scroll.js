"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("krop-video");
    let hasPlayed = false;
  
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollPosition / pageHeight;
  
      if (scrollPercent >= 0.6 && !hasPlayed) {
        video.play();
        hasPlayed = true;
      }
    });
  });

