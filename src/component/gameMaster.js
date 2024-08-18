import { Gameboard } from "./gameboard";
import { Player } from "./player";

export class GameMaster {
  constructor(player) {
    this.playerHuman = player;
    this.currentPlayer = this.playerHuman;
    this.gameOver = false;
    this.gameStart = false;
  }

  initializeBoard() {
    this.playerHuman = new Player("Human");
    this.playerCPU = new Player("CPU");
    this.playerHuman.gameboard = new Gameboard("Human");
    this.playerCPU.gameboard = new Gameboard("CPU");
  }

  placeShip() {}
}
