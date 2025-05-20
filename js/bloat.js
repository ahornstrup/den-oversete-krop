window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const img = document.getElementById('bloated-img');
      img.style.transformOrigin = 'left center';
  
      img.animate([
        // starter langt ude til venstre og helt gennemsigtig
        { transform: 'translateX(0px)', opacity: 0, offset: 0 },
        // lander tilbage på plads
        { transform: 'translateX(0)',      opacity: 1,   offset: 1   }
      ], {
        duration: 1000,
        easing: 'cubic-bezier(0.10, 0.30, 0.50, 0.99)',
        fill: 'forwards'
      });
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