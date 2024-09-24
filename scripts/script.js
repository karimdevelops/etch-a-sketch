let grid = document.querySelector("#grid");
let updateButton = document.querySelector("#updateBtn");
let gridScale = 16;
drawGrid(gridScale);

updateButton.addEventListener("click", () => {
  gridScale = prompt("Enter a grid scale (Max: 30)");
  while (gridScale > 30) {
    gridScale = prompt("Error!\nEnter a grid scale again (Max: 30)");
  }
  removeGrid();
  drawGrid(gridScale);
});

function drawGrid(gridScale) {
  for (let i = 1; i <= gridScale; i++) {
    let gridSqRow = document.createElement("div");
    gridSqRow.classList.add("grid-sq-row");

    for (let j = 1; j <= gridScale; j++) {
      let gridSq = document.createElement("div");
      gridSq.classList.add("grid-sq");
      gridSq.setAttribute("id", "gridSq");
      gridSqRow.appendChild(gridSq);
    }

    grid.appendChild(gridSqRow);
  }

  grid.addEventListener("mouseover", (e) => {
    if (e.target.id == "gridSq") {
      e.target.style.background = getRandomColor();
    }
  });
}

function removeGrid() {
  grid.innerHTML = "";
}

function getRandomColor() {
  whiteCol = 0xffffff;
  randomHex = Math.floor(Math.random() * whiteCol).toString(16);
  randomColor = `#${randomHex}`;
  return randomColor;
}
