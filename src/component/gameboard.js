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

    if (vertical) {
      let yRow = "ABCDEFGHIJ";
      yRow = yRow.split("");
      let columnIndex = yRow.indexOf(row);

      for (let i = 0; i <= shipLength; i++) {
        let currentRow = yRow.at(columnIndex + i);
        this._board[currentRow + column] = true;
      }
    } else {
      for (let i = 1; i <= shipLength; i++) {
        this._board[row + i] = true;
      }
    }
  }
}
