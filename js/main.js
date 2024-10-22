const customImg = document.createElement(`img`);
const figureElement = document.getElementById("dynamic-image");
customImg.src = `./img/white_lamp.png`;
customImg.classList.add(`img-fluid`);
customImg.alt = `lampada spenta`;

figureElement.append(customImg);

const bottone = document.getElementById("bottone");
bottone.classList.add(`ms-5`);
let isClicked = false;
bottone.addEventListener("click", () => {
  if (isClicked) {
    customImg.src = "./img/white_lamp.png"; // Immagine lampada spenta
    customImg.alt = "lampada spenta";
    bottone.textContent = "Accendi Lampada"; // Cambia il testo del pulsante
  } else {
    customImg.src = "./img/yellow_lamp.png"; // Immagine lampada accesa
    customImg.alt = "lampada accesa";
    bottone.textContent = "Spegni Lampada"; // Cambia il testo del pulsante
  }

  isClicked = !isClicked; // Cambia lo stato
});
