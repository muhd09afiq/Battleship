import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";
import { CreateGrid } from "../DOM/grid";

export class GameMaster {
  constructor() {
    this.playerHuman = new Player("Human");
    this.playerCPU = new Player("CPU");
    this.currentPlayer = this.playerHuman;
    this.gameOver = false;
    this.gameStart = false;
  }

  initializeBoard() {
    this.playerHuman.gameboard = new Gameboard("Human");
    this.playerCPU.gameboard = new Gameboard("CPU");
    //assign player and board
    const playerCPU = this.playerCPU;
    const playerHuman = this.playerHuman;
    const playerBoard = playerHuman.gameboard;
    const cpuBoard = playerCPU.gameboard;

    this.placeShip(this.playerHuman);
    this.placeShip(this.playerCPU);
    //preview grid
    const dialog = document.querySelector("dialog");
    //disable closing modal
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.open) {
        event.preventDefault();
      }
    });
    const previewGridContainer = document.querySelector(".grid-container");
    dialog.showModal();
    const previewGrid = new CreateGrid(playerHuman, playerBoard);
    previewGrid.createGridPlayer(playerHuman, previewGridContainer);
    previewGrid.updateShipToDOM(playerHuman, playerBoard);
    //start
    const startGameBtn = document.querySelector("#start-game");
    startGameBtn.addEventListener("click", () => {
      dialog.close();
      //create player and cpu board
      const playerGrid = new CreateGrid(playerHuman, playerBoard);
      const cpuGrid = new CreateGrid(playerCPU, cpuBoard);

      cpuGrid.changeBoardPreview(); //only enable event listener on cpu grid

      const playerContainer = document.getElementById("player-grid");
      const cpuContainer = document.getElementById("cpu-grid");
      playerContainer.classList.add("grid-container");
      cpuContainer.classList.add("grid-container");

      // playerGrid.updateShipToDOM(playerBoard);
      playerGrid.createGridPlayer(playerHuman, playerContainer);
      cpuGrid.createGridPlayer(playerCPU, cpuContainer);
      playerGrid.updateShipToDOM(playerHuman, playerBoard);
    });
  }

  placeShip(player) {
    const carrier1 = new Ship(5);
    const battleship1 = new Ship(4);
    const destroyer1 = new Ship(3);
    const submarine1 = new Ship(3);
    const boat1 = new Ship(2);

    player.gameboard.placeShip(carrier1, "C", 10, true);
    player.gameboard.placeShip(destroyer1, "J", 3);
    player.gameboard.placeShip(battleship1, "B", 3);
    player.gameboard.placeShip(submarine1, "A", 3, true);
    player.gameboard.placeShip(boat1, "E", 3);
  }

  playTurn() {
    //player select grid -> check if all ship sink or not -> cpu select grid -> check if all ship sink or not -> repeat
    if (this.gameOver) return;
  }

  cpuPlayTurn() {}

  switchTurn() {}

  checkGameOver() {}
}
