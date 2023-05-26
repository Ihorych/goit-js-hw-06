const bodyElmnt = document.querySelector("body");
const pageColor = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color") 



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackground() {
  const color = getRandomHexColor();
  bodyElmnt.style.backgroundColor = color;
  pageColor.textContent = color;
}

changeColorButton.addEventListener("click", changeBackground)