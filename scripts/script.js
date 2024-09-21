let grid = document.querySelector("#grid");
let gridScale = 10;

for (let i = 1; i <= gridScale; i++) {
  let gridSqRow = document.createElement("div");
  gridSqRow.classList.add("grid-sq-row");
  for (let j = 1; j <= gridScale; j++) {
    let gridSq = document.createElement("div");
    gridSq.classList.add("grid-sq");
    gridSqRow.appendChild(gridSq);
  }

  grid.appendChild(gridSqRow);
}
