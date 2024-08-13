import { ro } from "date-fns/locale";

export class Gameboard {
  //10x10 grid
  //y = ABC,DEF,GHI,J
  //x = 123,456,789,10
  constructor() {
    this._board = {};
    this.createBoard();
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
      for (let i = 0; i <= shipLength; i++) {
        let currentRow = yRow.at(columnIndex + i);
        let key = currentRow + column;
        this._board[key] = true;
      }
    } else {
      //check out of bound
      if (column + shipLength > 10) {
        return "Ship out of bound";
      }
      for (let i = 0; i <= shipLength; i++) {
        let currentColumn = i + column;
        let key = row + currentColumn;
        this._board[key] = true;
      }
    }
  }

  receiveAttack() {}
}
