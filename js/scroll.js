"use strict";

// Initial DOM references
let red = document.getElementById("red-bubble");
let orange = document.getElementById("orange-bubble");

let krop = document.getElementById("krop-video");
let krop_reverse = document.getElementById("krop-video-reverse");

let down = document.getElementById("scroll-down");

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
          down.style.opacity = `0`;
        }
      });
    },
    { threshold: 0.01 }
  );
  heartObserver.observe(heartSection);

  // Stomach section video + animation
  const stomachObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          krop.play();
          krop.style.transform = `scale(1) translateY(-1400px)`;
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
});

// 🔊 Sound hover interactions
document.addEventListener('DOMContentLoaded', () => {
  const slowButton = document.getElementById('slow-button');
  const fastButton = document.getElementById('fast-button');
  const slowSound = document.getElementById('hoverSound');
  const fastSound = document.getElementById('hoverSound-fast');

  slowButton.addEventListener('mouseenter', () => {
    slowSound.currentTime = 0;
    slowSound.play();
  });

  slowButton.addEventListener('mouseleave', () => {
    slowSound.pause();
    slowSound.currentTime = 0;
  });

  fastButton.addEventListener('mouseenter', () => {
    fastSound.currentTime = 0;
    fastSound.play();
  });

  fastButton.addEventListener('mouseleave', () => {
    fastSound.pause();
    fastSound.currentTime = 0;
  });
});
