import "./css/reset.css";
import "./css/style.css";
import { CreateGrid } from "./DOM/grid";
import { Gameboard } from "./component/gameboard";
import { Ship } from "./component/ship";

//player1 ship
const carrier1 = new Ship(5);
const battleship1 = new Ship(4);
const destroyer1 = new Ship(3);
const submarine1 = new Ship(3);
const boat1 = new Ship(2);
//player2 ship
const carrier2 = new Ship(5);
const battleship2 = new Ship(4);
const destroyer2 = new Ship(3);
const submarine2 = new Ship(3);
const boat2 = new Ship(2);

const player1Board = new Gameboard("player1");
const player2Board = new Gameboard("player2");

const player1 = new CreateGrid("player1", player1Board);
const player2 = new CreateGrid("player2", player2Board);

document.addEventListener("DOMContentLoaded", function () {
  //create DOM container
  player1.createContainer();
  player1.createGridPlayer();
  player2.createContainer();
  player2.createGridPlayer();
  //create object board
  player1Board.createBoard();
  //place ship player1
  player1Board.placeShip(carrier1, "C", 10, true);
  player1Board.placeShip(battleship1, "B", 3);
  player1Board.placeShip(destroyer1, "J", 3);
  player1Board.placeShip(submarine1, "A", 3, true);
  player1Board.placeShip(boat1, "E", 3);
  //
  player2Board.placeShip(carrier2, "C", 10, true);
  player2Board.placeShip(battleship2, "B", 3);
  player2Board.placeShip(destroyer2, "C", 3);
  player2Board.placeShip(submarine2, "D", 3);
  player2Board.placeShip(boat2, "E", 3);
});
