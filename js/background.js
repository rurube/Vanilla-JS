const images = ["0.png", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = "background";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);