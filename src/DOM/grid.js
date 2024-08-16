export class CreateGrid {
  constructor(player) {
    this.player = player;
  }

  createContainer() {
    const container = document.createElement("div");
    container.id = `${this.player}-grid`;
    container.classList.add("grid-container");
    const wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(container);
  }

  createGridPlayer() {
    const xLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const yLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const gridContainer = document.getElementById(`${this.player}-grid`);

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-square");
        cell.id = `${this.player}-${yLabels[row]}${xLabels[col]}`;

        gridContainer.appendChild(cell);
      }
    }
  }
}
