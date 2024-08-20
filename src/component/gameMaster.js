import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";
import { CreateGrid } from "../DOM/grid";
import { sub } from "date-fns";

export class GameMaster {
  constructor() {
    this.playerHuman = new Player("Human");
    this.playerCPU = new Player("CPU");
    this.currentPlayer = this.playerHuman;
    this.cpuGridArray = [];
    this.hitArray = [];
    this.gameOver = false;
    this.gameStart = false;
  }

  initializeBoard() {
    this.playerHuman.gameboard = new Gameboard("Human");
    this.playerCPU.gameboard = new Gameboard("CPU");
    //assign player and board

    const playerHuman = this.playerHuman;
    const playerBoard = playerHuman.gameboard;

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
      const playerCPU = this.playerCPU;
      const cpuBoard = playerCPU.gameboard;
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
    //randomize button
    const randomBtn = document.getElementById("randomizeShip");
    randomBtn.addEventListener("click", () => {
      let board = playerBoard.getBoard();
      board = null;
      playerBoard.createBoard();
      this.placeShip(this.playerHuman);

      previewGrid.updateShipToDOM(playerHuman, playerBoard);
    });
  }

  placeShip(player) {
    const carrier1 = new Ship(5, "grey");
    const battleship1 = new Ship(4, "purple");
    const destroyer1 = new Ship(3, "red");
    const submarine1 = new Ship(3, "black");
    const boat1 = new Ship(2, "blue");
    const shipArray = [carrier1, battleship1, destroyer1, submarine1, boat1];

    shipArray.forEach((ship) => {
      let attempts = 0;
      while (attempts < 10) {
        try {
          const result = this.provideRandomizeInputForShipPlacement();

          let columnInput = Math.floor(Math.random() * 11);
          player.gameboard.placeShip(
            ship,
            result.rowInput,
            columnInput,
            result.verticalInput
          );

          return (
            console.log(result.rowInput),
            console.log(columnInput),
            console.log(ship.color)
          );
        } catch (error) {
          attempts++;
        }
      }
    });
    console.log(player.gameboard.getPlayer());
    console.dir(player.gameboard.getBoard());
  }

  provideRandomizeInputForShipPlacement() {
    //need row input, column input, vertical input
    let row = "ABCDEFGHIJ";
    row = row.split("");
    const randomIndex = Math.floor(Math.random() * row.length);
    const rowInput = row[randomIndex];

    const verticalDecider = Math.floor(Math.random() * 10);
    let verticalInput = false;
    if (verticalDecider > 5) {
      verticalInput = true;
    }

    return { rowInput, verticalInput };
  }

  startGame() {
    const startGameBtn = document.querySelector("#start-game");
    startGameBtn.addEventListener("click", () => {
      console.log("Game Start");
      this.addEventListenerToCpuCell();
    });
  }

  addEventListenerToCpuCell() {
    const xLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const yLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const playerCPU = this.playerCPU;
    const cpuBoard = playerCPU.gameboard;

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.getElementById(
          `${playerCPU.name}-${yLabels[row]}${xLabels[col]}`
        );
        const coordinate = `${yLabels[row]}${xLabels[col]}`;
        cell.addEventListener("click", () => {
          const attack = cpuBoard.receiveAttack(coordinate);
          console.log(attack);
          if (cpuBoard.getAllShipStatus() == true && attack !== "already hit") {
            console.log("Ship still alive, continue game");
            this.cpuPlayTurn();
          } else if (cpuBoard.getAllShipStatus() == false) {
            console.log("All ship destroyed, game end");
          }
        });
      }
    }
  }

  playTurn() {
    //player select grid -> check if all ship sink or not -> cpu select grid -> check if all ship sink or not -> repeat
    if (this.gameOver) return;
    const playerCPU = this.playerCPU;
    const playerHuman = this.playerHuman;
    const playerBoard = playerHuman.gameboard;
    const cpuBoard = playerCPU.gameboard;
    const playerAttack = cpuBoard();
  }

  cpuPlayTurn() {
    const playerBoard = this.playerHuman.gameboard;
    this.cpuGridArray = Object.keys(playerBoard.getBoard());
    //delete hit index so that no same coordinate is attack
    this.hitArray.forEach((index) => {
      this.cpuGridArray.splice(index, 1);
    });

    let randomIndex = Math.floor(Math.random() * this.cpuGridArray.length);
    const randomTarget = this.cpuGridArray[randomIndex];
    this.hitArray.push(randomIndex);
    console.dir(this.hitArray);
    console.dir(this.cpuGridArray);
    playerBoard.receiveAttack(randomTarget);
  }

  switchTurn() {}

  checkGameOver() {}
}
