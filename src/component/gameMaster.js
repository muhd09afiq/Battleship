import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";

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

    this.placeShip(this.playerHuman);
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
}
