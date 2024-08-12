// No.	Class of ship	Size
// 1	Carrier	          5
// 2	Battleship	      4
// 3	Destroyer	      3
// 4	Submarine	      3
// 5	Patrol Boat	      2

class Ship {
  constructor(shipLength) {
    this._shipLength = shipLength;
    this._hit = 0;
  }

  hit() {
    this._hit = this._hit + 1;
  }

  getHit() {
    return this._hit;
  }

  isSunk() {
    if (this._hit == this._shipLength) {
      return true;
    } else {
      return false;
    }
  }
}

const carrier = new Ship(5);
carrier.hit();
carrier.hit();
carrier.hit();
carrier.getHit();
carrier.isSunk();
