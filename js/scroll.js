"use strict";


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

  const krop = document.getElementById("krop-video");
  const krop_reverse = document.getElementById("krop-video-reverse");

  let hasPlayed = false;

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


  const uterusObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Always apply transform
          krop.style.transform = `scale(1) translateY(-1800px)`;
  
          // Only play if it hasn't played yet
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

let lastScrollY = window.scrollY;

window.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    // Trying to scroll up
    e.preventDefault();
    window.scrollTo(0, lastScrollY);
  } else {
    lastScrollY = window.scrollY;
  }
}, { passive: false });

// For touch devices
let touchStartY = 0;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: false });

window.addEventListener('touchmove', (e) => {
  const touchCurrentY = e.touches[0].clientY;
  if (touchCurrentY > touchStartY) {
    // Scrolling up
    e.preventDefault();
    window.scrollTo(0, lastScrollY);
  } else {
    lastScrollY = window.scrollY;
  }
}, { passive: false });

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('slow-button');
    const sound = document.getElementById('hoverSound');
  
    button.addEventListener('mouseenter', () => {
      sound.currentTime = 0;
      sound.play();
    });

    button.addEventListener('mouseleave', () => {
        sound.pause();
        sound.currentTime = 0;
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fast-button');
    const sound = document.getElementById('hoverSound-fast');
  
    button.addEventListener('mouseenter', () => {
      sound.currentTime = 0;
      sound.play();
    });

    button.addEventListener('mouseleave', () => {
        sound.pause();
        sound.currentTime = 0;
  });
});
  
  


 /*
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

   */
  
   
