"use strict";

// Product data
const productData = {
  bind: {
      title: "BIND",
      image: "img/produkter/bind.webp",
      pros: [
          "Nemme at bruge og kræver ingen indsættelse.",
          "Fås i mange størrelser og sugeevner.",
          "Gode til begyndere og unge.",
          "Bedst til når du bløder meget - da den har god sugeevne."
      ],
      cons: [
          "Skal skiftes hver 3-4 timer.",
          "Kan føles klodsede og give irritation.",
          "Ikke ideelle til sport eller svømning."
      ],
      eco: "Engangsbind genererer <strong>meget</strong> affald og nedbrydes langsomt."
  },
  tampon: {
      title: "TAMPON",
      image: "img/produkter/tampon.webp",
      pros: [
          "Diskrete og mærkes ikke, når de er korrekt indsat.",
          "Gode til sport og svømning.",
          "Forskellige størrelser til forskellige flow.",
          "Kan bæres i op til 8 timer."
      ],
      cons: [
          "Kræver komfort med at indsætte.",
          "Lille risiko for Toxic Shock Syndrome (TSS).",
          "Kan være svære at bruge for begyndere.",
          "Kan udtørre skeden ved lavt flow."
      ],
      eco: "Engangstamponer skaber affald og nedbrydes langsomt i miljøet."
  },
  kop: {
      title: "MENSKOPP",
      image: "img/produkter/kop.webp",
      pros: [
          "Kan bruges i op til 12 timer.",
          "Økonomisk - kan bruges i flere år.",
          "Miljøvenlig løsning.",
          "God til sport og svømning."
      ],
      cons: [
          "Kræver øvelse at indsætte og fjerne.",
          "Rengøring kan være besværlig på offentlige toiletter.",
          "Kræver komfort med din krop.",
          "Kan være udfordrende for begyndere."
      ],
      eco: "Meget miljøvenlig - én kop kan bruges i op til 10 år og erstatter tusindvis af engangsprodukter."
  },
  disk: {
      title: "MENSSKIVE",
      image: "img/produkter/disk.webp",
      pros: [
          "Kan bruges under sex.",
          "Holder længere end tamponer - op til 12 timer.",
          "Mindre risiko for lækage.",
          "Kan være lettere at fjerne end en kop."
      ],
      cons: [
          "Kan være svær at placere korrekt første gang.",
          "Dyrere i indkøb end engangsprodukter.",
          "Kræver øvelse og tålmodighed.",
          "Ikke lige så tilgængelig som andre produkter."
      ],
      eco: "Miljøvenlig - én skive kan bruges i flere år og erstatter hundredvis af engangsprodukter."
  },
  trusser: {
      title: "TRUSSER",
      image: "img/produkter/trusser.webp",
      pros: [
          "Komfortable og føles som almindelige undertøj.",
          "Kan bruges i op til 12 timer afhængig af flow.",
          "Ingen indføring nødvendig.",
          "Gode til natten og som backup til andre produkter."
      ],
      cons: [
          "Dyrere i indkøb end engangsprodukter.",
          "Kræver vask efter brug.",
          "Ikke ideelle til meget kraftig blødning alene.",
          "Begrænset absorption i forhold til størrelse."
      ],
      eco: "Miljøvenlige - et par kan erstatte hundredvis af engangsprodukter over deres levetid."
  },
  indlaeg: {
      title: "TRUSSEINDLÆG",
      image: "img/produkter/trusseindlaeg.webp",
      pros: [
          "Meget diskrete og tynde.",
          "Gode til let spotting eller udflåd.",
          "Nemme at skifte og bære.",
          "Praktiske som backup til andre produkter."
      ],
      cons: [
          "Ikke gode nok til menstruation alene.",
          "Skiftes ofte for at undgå lugt eller lækage.",
          "Skaber meget affald.",
          "Kan glide rundt ved bevægelse."
      ],
      eco: "Engangstrusseindlæg genererer meget affald og indeholder ofte plastik der nedbrydes langsomt."
  }
};

// DOM elements
const forside = document.getElementById('forside');
const produktInfo = document.getElementById('produkt-info');
const produkter = document.querySelectorAll('.produkter');
const backBtn = document.querySelector('.back-btn');
const productTitle = document.getElementById('product-title');
const detailImage = document.getElementById('detail-image');
const prosList = document.getElementById('pros-list');
const consList = document.getElementById('cons-list');
const ecoInfo = document.querySelector('.eco-info span:last-child');

// Function to update product details
function updateProductDetails(product) {
  const data = productData[product];
  productTitle.textContent = data.title;
  detailImage.src = data.image;
  
  // Update pros
  prosList.innerHTML = '';
  data.pros.forEach(pro => {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';
      listItem.innerHTML = `
          <span class="thumbs-up">👍 </span>
          <span>${pro}</span>
      `;
      prosList.appendChild(listItem);
  });
  
  // Update cons
  consList.innerHTML = '';
  data.cons.forEach(con => {
      const listItem = document.createElement('div');
      listItem.className = 'list-item';
      listItem.innerHTML = `
          <span class="thumbs-down">👎 </span>
          <span>${con}</span>
      `;
      consList.appendChild(listItem);
  });
  
  // Update eco info
  ecoInfo.innerHTML = data.eco;
}

// Add click event to products
produkter.forEach(produkt => {
  produkt.addEventListener('click', function() {
      const productType = this.getAttribute('data-product');
      const produktRect = this.getBoundingClientRect();
      
      // Create a clone for animation
      const clone = this.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.zIndex = '100';
      clone.style.transition = 'all 0.6s ease-in-out';
      document.body.appendChild(clone);
      
      // Set initial position
      clone.style.top = `${produktRect.top}px`;
      clone.style.left = `${produktRect.left}px`;
      clone.style.width = `${produktRect.width}px`;
      clone.style.height = 'auto';
      clone.style.transform = 'none';
      
      // Calculate center position
      const centerX = window.innerWidth / 2 - produktRect.width / 2;
      const centerY = window.innerHeight / 2 - produktRect.height / 2;
      
      // Update product details before animation
      updateProductDetails(productType);
      
      // Start animation after a small delay
      setTimeout(() => {
          clone.style.top = `${centerY}px`;
          clone.style.left = `${centerX}px`;
          clone.style.transform = 'scale(1.3)';
          
          // After animation completes, remove clone and show product info
          setTimeout(() => {
              document.body.removeChild(clone);
              forside.style.display = 'none';
              produktInfo.style.display = 'block';
          }, 600);
      }, 10);
  });
});

// Back button functionality
backBtn.addEventListener('click', function() {
  produktInfo.style.display = 'none';
  forside.style.display = 'block';
});