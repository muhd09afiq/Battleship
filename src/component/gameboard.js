import { Ship } from "./ship";

export class Gameboard {
  //10x10 grid
  //y = ABC,DEF,GHI,J
  //x = 123,456,789,10
  constructor() {
    this._board = {};
    this.createBoard();
    this._activeShip = [];
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

  getBoard() {
    return this._board;
  }

  getCoordinateStatus(coordinate) {
    let currentStatus = this._board[coordinate];
    return currentStatus;
  }

  placeShip(ship, row, column, vertical = false) {
    const shipLength = ship.getShipLength();
    column = Number(column);

    if (vertical) {
      let yRow = "ABCDEFGHIJ";
      yRow = yRow.split("");
      let columnIndex = yRow.indexOf(row);
      //check out of bound
      if (columnIndex + shipLength > yRow.length) {
        return "Ship out of bound";
      }
      updateShip(ship);
      for (let i = 0; i < shipLength; i++) {
        let currentRow = yRow.at(columnIndex + i);
        let key = currentRow + column;
        this._board[key] = ship;
      }
    } else {
      //check out of bound
      if (column + shipLength > 10) {
        return "Ship out of bound";
      }
      updateShip(ship);
      for (let i = 0; i < shipLength; i++) {
        let currentColumn = i + column;
        let key = row + currentColumn;
        this._board[key] = ship;
      }
    }
  }

  updateShip(ship) {
    this._activeShip.push(ship);
  }

  receiveAttack(coordinate) {
    const target = this._board[coordinate];
    if (target && target instanceof Ship) {
      target.hit();
      this._board[coordinate] = "hit"; // Mark as hit
      return "hit";
    } else {
      this._board[coordinate] = "miss"; // Mark as miss
      return "miss";
    }
  }

  getAllShipStatus() {
    const activeShip = this._activeShip;
    const shipCount = activeShip.length;
    activeShip.forEach((ship) => {
      if (ship.isSunk() == true) {
      }
    });
    return "game end";
  }
}
