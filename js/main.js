const customImg = document.createElement(`img`);
const figureElement = document.getElementById("dynamic-image");
customImg.src = `./img/white_lamp.png`;
customImg.classList.add(`img-fluid`);
customImg.alt = `lampada spenta`;

figureElement.append(customImg);
