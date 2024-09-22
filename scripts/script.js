let grid = document.querySelector("#grid");
let gridScale = 10;

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

function getRandomColor() {
  whiteCol = 0xffffff;
  randomHex = Math.floor(Math.random() * whiteCol).toString(16);
  randomColor = `#${randomHex}`;
  return randomColor;
}
