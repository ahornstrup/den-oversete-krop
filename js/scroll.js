"use strict";

const video = document.getElementByClass('krop_video');
let played = false;
let reversing = false;

const reversePlayback = () => {
  if (!reversing) return;

  if (video.currentTime <= 0) {
    reversing = false;
    video.pause();
    return;
  }

  video.currentTime -= 0.05; // adjust speed of reverse
  requestAnimationFrame(reversePlayback);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !played) {
      video.play();
      played = true;

      video.onended = () => {
        video.pause();
      };

    } else if (!entry.isIntersecting && played && video.currentTime > 0) {
      video.pause();
      reversing = true;
      reversePlayback();
      played = false;
    }
  });
}, { threshold: 0.5 });

observer.observe(video);
