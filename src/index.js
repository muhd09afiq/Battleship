import "./css/reset.css";
import "./css/style.css";
import { CreateGrid } from "./DOM/grid";
import { GameMaster } from "./component/gameMaster";

//initialize game and show player board preview
const newGame = new GameMaster();
newGame.initializeBoard();
const playerCPU = newGame.playerCPU;
const playerHuman = newGame.playerHuman;

const dialog = document.querySelector("dialog");
const previewGridContainer = document.querySelector(".grid-container");

const playerBoard = playerHuman.gameboard;
const cpuBoard = playerCPU.gameboard;

//preview grid
const previewGrid = new CreateGrid(playerHuman, playerBoard);
dialog.showModal();
previewGrid.createGridPlayer(playerHuman, previewGridContainer);
previewGrid.updateShipToDOM(playerHuman, playerBoard); //show ship location on player grid

//disable closing modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    event.preventDefault();
  }
});

//game start
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
