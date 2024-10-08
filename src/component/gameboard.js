import { Ship } from "./ship";
import { GameMaster } from "./gameMaster";

export class Gameboard {
  //10x10 grid
  //y = ABC,DEF,GHI,J
  //x = 123,456,789,10
  constructor(player) {
    this._player = player;
    this._board = {};
    this.createBoard();
    this._activeShip = [];
    this._missedHitCoordinate = [];
    this.shipCoordinate = [];
  }

  createBoard() {
    let yRow = "ABCDEFGHIJ";
    yRow = yRow.split("");
    yRow.forEach((row) => {
      for (let i = 1; i < 11; i++) {
        this._board[row + i] = null;
      }
    });
  }

  resetBoard() {
    this._activeShip = [];
    this._missedHitCoordinate = [];
    this.shipCoordinate = [];
  }

  getBoard() {
    return this._board;
  }

  getPlayer() {
    return this._player;
  }

  getCoordinateStatus(coordinate) {
    let currentStatus = this._board[coordinate];
    return currentStatus;
  }

  placeShip(ship, row, column, vertical = false) {
    const shipLength = ship.getShipLength();
    column = Number(column);

    if (vertical) {
      let tempShipArray = [];
      let yRow = "ABCDEFGHIJ";
      yRow = yRow.split("");
      let rowIndex = yRow.indexOf(row);
      //check out of bound
      if (rowIndex + shipLength > yRow.length) {
        tempShipArray = [];
        throw new Error("Ship out of bound");
      }
      for (let i = 0; i < shipLength; i++) {
        let currentRow = yRow.at(rowIndex + i);
        let key = currentRow + column;
        if (this._board[key] !== null) {
          tempShipArray = [];
          throw new Error(`Coordinate ${key} already occupied`);
        } else {
          tempShipArray.push(key);
        }
      }
      tempShipArray.forEach((coordinate) => {
        this._board[coordinate] = ship;
      });
      this.updateShip(ship);
    } else {
      let tempShipArray = [];
      //check out of bound
      if (column + shipLength > 10) {
        tempShipArray = [];
        throw new Error("Ship out of bound");
      }
      for (let i = 0; i < shipLength; i++) {
        let currentColumn = i + column;
        let key = row + currentColumn;
        if (this._board[key] !== null) {
          tempShipArray = [];
          throw new Error(`Coordinate ${key} already occupied`);
        } else {
          tempShipArray.push(key);
        }
      }
      tempShipArray.forEach((coordinate) => {
        this._board[coordinate] = ship;
      });
      this.updateShip(ship);
    }
  }

  updateShip(ship) {
    this._activeShip.push(ship);
  }

  updateShipToDOM(key) {
    const shipDiv = document.getElementById(`${this._player}-${key}`);
    shipDiv.style.backgroundColor = "black";
  }

  receiveAttack(coordinate) {
    const target = this._board[coordinate];
    if (target && target instanceof Ship) {
      target.hit();
      this._board[coordinate] = "hit"; // Mark as hit
      this.updateHitToDOM(coordinate);
      return "hit";
    } else if (target == "hit" || target == "miss") {
      return "already hit";
    } else {
      this._board[coordinate] = "miss"; // Mark as miss
      this._missedHitCoordinate.push(coordinate);
      this.updateMissToDOM(coordinate);
      return "miss";
    }
  }

  updateMissToDOM(coordinate) {
    const missDiv = document.getElementById(
      `${this.getPlayer()}-${coordinate}`
    );
    missDiv.style.backgroundColor = "grey";
  }

  updateHitToDOM(coordinate) {
    const hitDiv = document.getElementById(`${this.getPlayer()}-${coordinate}`);
    hitDiv.style.backgroundColor = "#E4080A";
  }

  getAllShipStatus() {
    const activeShip = this._activeShip;
    const shipCount = activeShip.length;
    let currentCount = 0;
    activeShip.forEach((ship) => {
      if (ship.isSunk() === true) {
        currentCount += 1;
      }
    });
    if (currentCount === shipCount) {
      return false; //game over
    } else {
      return true; //game continue
    }
  }

  getMissedHitCoordinate() {
    return this._missedHitCoordinate;
  }
}
