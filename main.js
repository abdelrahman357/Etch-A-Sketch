const container = document.createElement("div");
container.classList.add("container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
  }
}
document.body.append(container);

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", addColor, {
    once: true,
  });
});

const popupBtn = document.createElement("button");
popupBtn.classList.add("popup");
popupBtn.textContent = "Number of the square per side";
container.before(popupBtn);

popupBtn.addEventListener("click", makeGrid);

function makeGrid(e) {
  let numberBySide = Number(
    prompt("Enter the number of the square per side (less than 100)", 16)
  );
  if (numberBySide > 100) {
    numberBySide = 100;
  } else if (!numberBySide) {
    numberBySide = 16;
  }
  e.target.nextElementSibling.remove();
  const container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < numberBySide; i++) {
    for (let j = 0; j < numberBySide; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${100 / numberBySide}%`;
      square.style.height = `${100 / numberBySide}%`;
      container.append(square);
    }
  }

  document.body.append(container);
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", addColor, {
      once: true,
    });
  });
}

function generateRandomColor() {
  let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let theColor = "#";
  for (let i = 0; i < 6; i++) {
    theColor += hexArray[Math.floor(Math.random() * 16)];
  }
  return theColor;
}
function addColor(e) {
  e.target.style.backgroundColor = generateRandomColor();
}
