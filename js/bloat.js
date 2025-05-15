window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const bloatedImg = document.getElementById('bloated-img');
      bloatedImg.style.opacity = '1';
    }, 1000);
  });


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