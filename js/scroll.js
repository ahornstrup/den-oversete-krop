// "use strict";

// document.addEventListener("DOMContentLoaded", () => {
//     const video = document.getElementById("krop-video");
//     let hasPlayed = false;
  
//     window.addEventListener("scroll", () => {
//       const scrollPosition = window.scrollY + window.innerHeight;
//       const pageHeight = document.documentElement.scrollHeight;
//       const scrollPercent = scrollPosition / pageHeight;
  
//       if (scrollPercent >= 0.4 && !hasPlayed) {
//         video.style.transform = `scale(${1.05})`;
//       }
      
//       if (scrollPercent >= 0.6 && !hasPlayed) {
//         video.play();
//         video.style.transform = `scale(1.1) translateY(300px)`;
//         hasPlayed = true;
//       }

//       if (scrollPercent >= 0.8) {
//         video.style.transform = `scale(1.1) translateY(500px)`;
//       }
//     });
//   });

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("krop-video");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollPosition / pageHeight;

    if (scrollPercent < 0.4) {
      video.style.transform = "scale(1)";
      video.pause(); // Optional: pause if not played yet
    }

    if (scrollPercent >= 0.4 && scrollPercent < 0.6) {
      video.style.transform = "scale(1.05)";
      video.pause(); // Optional: to reverse play
    }

    if (scrollPercent >= 0.6 && scrollPercent < 0.8) {
      video.play();
      video.style.transform = "scale(1.1) translateY(300px)";
    }

    if (scrollPercent >= 0.8) {
      video.style.transform = "scale(1.1) translateY(500px)";
    }
  });
});

  
