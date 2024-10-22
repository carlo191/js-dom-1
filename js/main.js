const customImg = document.createElement(`img`);
const figureElement = document.getElementById("dynamic-image");
customImg.src = `./img/white_lamp.png`;
customImg.classList.add(`img-fluid`);
customImg.alt = `lampada spenta`;

figureElement.append(customImg);

const bottone = document.getElementById("bottone");
bottone.classList.add(`ms-5`);
bottone.addEventListener("click", () => {
  customImg.classList.toggle("d-none");
});
