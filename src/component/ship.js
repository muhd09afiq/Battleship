// No.	Class of ship	Size
// 1	Carrier	          5
// 2	Battleship	      4
// 3	Destroyer	      3
// 4	Submarine	      3
// 5	Patrol Boat	      2

export class Ship {
  constructor(shipLength, color) {
    this._shipLength = shipLength;
    this._hit = 0;
    this.color = color;
  }

  hit() {
    this._hit = this._hit + 1;
  }

  getHit() {
    return this._hit;
  }

  getShipLength() {
    return this._shipLength;
  }

  isSunk() {
    if (this._hit >= this._shipLength) {
      return true;
    } else {
      return false;
    }
  }
}
