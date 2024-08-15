import "./css/reset.css";
import "./css/style.css";
import { createGridPlayer1, createGridPlayer2, CreateGrid } from "./DOM/grid";

// createGridPlayer1();
// createGridPlayer2();

const player1 = new CreateGrid("player1");
const player2 = new CreateGrid("player2");

document.addEventListener("DOMContentLoaded", function () {
  player1.createContainer();
  player1.createGridPlayer();
  player2.createContainer();
  player2.createGridPlayer();
});
