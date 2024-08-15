export function createGrid() {
  const xLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const yLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const gridContainer = document.getElementById("grid-container");

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-square");
      cell.id = `${yLabels[row]}${xLabels[col]}`;

      gridContainer.appendChild(cell);
    }
  }
}
