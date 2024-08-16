import "./css/reset.css";
import "./css/style.css";
import { CreateGrid } from "./DOM/grid";
import { Gameboard } from "./component/gameboard";
import { Ship } from "./component/ship";

const player1 = new CreateGrid("player1");
const player2 = new CreateGrid("player2");

//player1 ship
const carrier1 = new Ship(5);
const battleship1 = new Ship(4);
const destroyer1 = new Ship(3);
const submarine1 = new Ship(3);
const boat1 = new Ship(2);

const player1Board = new Gameboard("player1");

document.addEventListener("DOMContentLoaded", function () {
  //create DOM container
  player1.createContainer();
  player1.createGridPlayer();
  player2.createContainer();
  player2.createGridPlayer();
  //create object board
  player1Board.createBoard();
  //place ship
  player1Board.placeShip(carrier1, "A", 3);
  player1Board.placeShip(battleship1, "B", 3);
  player1Board.placeShip(destroyer1, "C", 3);
  player1Board.placeShip(submarine1, "D", 3);
  player1Board.placeShip(boat1, "E", 3);
  console.log(player1Board.getBoard());
});
