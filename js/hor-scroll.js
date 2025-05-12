"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.horizontal-scroll');
  
    // Scroll right
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
      }
    });
  });